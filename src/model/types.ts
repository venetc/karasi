export type SerializedBookings = { originalTableKey: string, filialName: string, dates: SerializedBookingRanges[] }[]

export type SerializedBookingRanges = { from: string, to: string, originalCellKey: string, isBooked: boolean }

export type FilialKeys = 'filial_1' | 'filial_2' | 'filial_3'

export type BookingRange = Record<string, boolean>

export type Bookings = Record<FilialKeys, BookingRange>
