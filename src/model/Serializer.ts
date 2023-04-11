import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
import { BookingRange, Bookings, SerializedBookings } from './types';

export class Serializer {
  static filialNames = ['Сухая тунгуска', 'Северная', 'Келлог'];
  static getSerializedTables = (tables: Bookings): SerializedBookings => {
    const tablesEntries = Object.entries(tables);

    return tablesEntries.map((originalTable, index) => {
      const [originalTableKey, originalCells] = originalTable;
      const cellsEntries = Object.entries(originalCells);

      const dates = cellsEntries.map(cell => {
        const [originalCellKey, originalCellValue] = cell;

        const [originalFrom, originalTo] = originalCellKey.split('-') as [string, string];

        let from, to;

        try {
          from = format(parse(originalFrom, 'dd.MM', new Date()),
            'dd MMMM',
            { locale: ru },
          );

          to = format(parse(originalTo, 'dd.MM', new Date()),
            'dd MMMM',
            { locale: ru },
          );
        } catch {
          from = to = '';
        }

        return { from, to, originalCellKey, isBooked: originalCellValue };
      });

      return { originalTableKey, dates, filialName: Serializer.filialNames[index] };
    });
  };
  static getDeserializedTables = (tables: SerializedBookings): Bookings => {
    return tables.reduce((acc, table) => {

      const bookings = table.dates.reduce((accumulator, cell) => ({
        ...accumulator,
        [cell.originalCellKey]: cell.isBooked,
      }), {} as BookingRange);

      return { ...acc, [table.originalTableKey]: bookings };
    }, {} as Bookings);
  };
}
