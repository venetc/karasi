<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Serializer } from '../model/Serializer';
import { NTabs, NTabPane, NButton, NCard } from 'naive-ui';
import { Bookings, SerializedBookings } from '../model/types';
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { useTimeoutFn } from '@vueuse/core';

const tables = ref<SerializedBookings>([{
  originalTableKey: 'filial_1',
  dates: [{
    from: '18 июня',
    to: '25 июня',
    originalCellKey: '18.06-25.06',
    isBooked: false,
  }, {
    from: '25 июня', to: '02 июля', originalCellKey: '25.06-02.07', isBooked: false,
  }, {
    from: '02 июля',
    to: '09 июля',
    originalCellKey: '02.07-09.07',
    isBooked: false,
  }, { from: '09 июля', to: '16 июля', originalCellKey: '09.07-16.07', isBooked: false }, {
    from: '16 июля',
    to: '23 июля',
    originalCellKey: '16.07-23.07',
    isBooked: false,
  }, { from: '23 июля', to: '30 июля', originalCellKey: '23.07-30.07', isBooked: false }, {
    from: '30 июля',
    to: '06 августа',
    originalCellKey: '30.07-06.08',
    isBooked: false,
  }, {
    from: '06 августа',
    to: '13 августа',
    originalCellKey: '06.08-13.08',
    isBooked: false,
  }, {
    from: '13 августа',
    to: '20 августа',
    originalCellKey: '13.08-20.08',
    isBooked: false,
  }, {
    from: '20 августа',
    to: '27 августа',
    originalCellKey: '20.08-27.08',
    isBooked: false,
  }, {
    from: '27 августа',
    to: '03 сентября',
    originalCellKey: '27.08-03.09',
    isBooked: false,
  }, {
    from: '03 сентября',
    to: '10 сентября',
    originalCellKey: '03.09-10.09',
    isBooked: false,
  }, {
    from: '10 сентября',
    to: '17 сентября',
    originalCellKey: '10.09-17.09',
    isBooked: false,
  }, {
    from: '17 сентября',
    to: '24 сентября',
    originalCellKey: '17.09-24.09',
    isBooked: false,
  }, { from: '24 сентября', to: '01 октября', originalCellKey: '24.09-01.10', isBooked: false }],
  filialName: 'Сухая тунгуска',
}, {
  originalTableKey: 'filial_2',
  dates: [{
    from: '18 июня',
    to: '25 июня',
    originalCellKey: '18.06-25.06',
    isBooked: false,
  }, { from: '25 июня', to: '02 июля', originalCellKey: '25.06-02.07', isBooked: false }, {
    from: '02 июля',
    to: '09 июля',
    originalCellKey: '02.07-09.07',
    isBooked: false,
  }, { from: '09 июля', to: '16 июля', originalCellKey: '09.07-16.07', isBooked: false }, {
    from: '16 июля',
    to: '23 июля',
    originalCellKey: '16.07-23.07',
    isBooked: false,
  }, { from: '23 июля', to: '30 июля', originalCellKey: '23.07-30.07', isBooked: false }, {
    from: '30 июля',
    to: '06 августа',
    originalCellKey: '30.07-06.08',
    isBooked: false,
  }, {
    from: '06 августа',
    to: '13 августа',
    originalCellKey: '06.08-13.08',
    isBooked: false,
  }, {
    from: '13 августа',
    to: '20 августа',
    originalCellKey: '13.08-20.08',
    isBooked: false,
  }, {
    from: '20 августа',
    to: '27 августа',
    originalCellKey: '20.08-27.08',
    isBooked: false,
  }, {
    from: '27 августа',
    to: '03 сентября',
    originalCellKey: '27.08-03.09',
    isBooked: false,
  }, {
    from: '03 сентября',
    to: '10 сентября',
    originalCellKey: '03.09-10.09',
    isBooked: false,
  }, {
    from: '10 сентября',
    to: '17 сентября',
    originalCellKey: '10.09-17.09',
    isBooked: false,
  }, {
    from: '17 сентября',
    to: '24 сентября',
    originalCellKey: '17.09-24.09',
    isBooked: false,
  }, { from: '24 сентября', to: '01 октября', originalCellKey: '24.09-01.10', isBooked: false }],
  filialName: 'Северная',
}, {
  originalTableKey: 'filial_3',
  dates: [{
    from: '20 июня',
    to: '27 июня',
    originalCellKey: '20.06-27.06',
    isBooked: false,
  }, { from: '27 июня', to: '04 июля', originalCellKey: '27.06-04.07', isBooked: false }, {
    from: '04 июля',
    to: '11 июля',
    originalCellKey: '04.07-11.07',
    isBooked: false,
  }, { from: '11 июля', to: '18 июля', originalCellKey: '11.07-18.07', isBooked: false }, {
    from: '18 июля',
    to: '25 июля',
    originalCellKey: '18.07-25.07',
    isBooked: false,
  }, {
    from: '25 июля',
    to: '01 августа',
    originalCellKey: '25.07-01.08',
    isBooked: false,
  }, {
    from: '01 августа',
    to: '08 августа',
    originalCellKey: '01.08-08.08',
    isBooked: false,
  }, {
    from: '08 августа',
    to: '15 августа',
    originalCellKey: '08.08-15.08',
    isBooked: false,
  }, {
    from: '15 августа',
    to: '22 августа',
    originalCellKey: '15.08-22.08',
    isBooked: false,
  }, {
    from: '22 августа',
    to: '29 августа',
    originalCellKey: '22.08-29.08',
    isBooked: false,
  }, {
    from: '29 августа',
    to: '05 сентября',
    originalCellKey: '29.08-05.09',
    isBooked: false,
  }, {
    from: '05 сентября',
    to: '12 сентября',
    originalCellKey: '05.09-12.09',
    isBooked: false,
  }, {
    from: '12 сентября',
    to: '19 сентября',
    originalCellKey: '12.09-19.09',
    isBooked: false,
  }, {
    from: '19 сентября',
    to: '26 сентября',
    originalCellKey: '19.09-26.09',
    isBooked: false,
  }, { from: '26 сентября', to: '03 октября', originalCellKey: '26.09-03.10', isBooked: false }],
  filialName: 'Келлог',
}]);

const queryClient = useQueryClient();

const get = async () => {
  const response = await fetch('http://localhost:5173/tables', { method: 'GET' });

  return response.json();
};

const post = async (tables: Bookings) => {
  const response = await fetch('http://localhost:5173/tables', { method: 'POST', body: JSON.stringify(tables) });

  return response.json();
};
const isSuccess = ref(false);
const { start: startTimer } = useTimeoutFn(() => {
  isSuccess.value = false;
}, 3000);

const { isLoading, isFetching } = useQuery({
  queryKey: ['tables'],
  queryFn: get,
  refetchOnWindowFocus: false,
  onSuccess: dates => {
    tables.value = Serializer.getSerializedTables(dates);
  },
});

const { mutateAsync, isLoading: isLoadingMutation } = useMutation({
  mutationFn: post,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tables'] });
    isSuccess.value = true;
    startTimer();
  },
});
</script>

<template>
    <div v-if="tables" class="table">
        <NTabs size="large"
               :class="{'isLoading': isLoading || isFetching || isLoadingMutation}"
               :default-value="tables[0].filialName"
               justify-content="center"
        >
            <NTabPane v-for="filial in tables"
                      :key="filial.filialName"
                      :name="filial.filialName"
            >
                <label class="base-card"
                       v-for="bookingRange in filial.dates"
                       :key="bookingRange.originalCellKey"
                       :class="{'active':bookingRange.isBooked}"
                >
                    <input type="checkbox" v-model="bookingRange.isBooked">
                    <span class="base-card-wrapper">
                        <span class="base-card-date">{{ bookingRange.from }}</span>
                        <span class="base-card-line" />
                        <span class="base-card-date">{{ bookingRange.to }}</span>
                    </span>
                </label>
            </NTabPane>
        </NTabs>
        <NCard class="table-info"
               :segmented="{ content: true, action: 'soft' }"
        >
            <template #footer>
                <ol>
                    <li>1) Выбор филиала осуществляется нажатием ЛКМ на&nbsp;его названии;</li>
                    <li>2) Чтобы забронировать или отменить бронь нажмите на&nbsp;ячейку временного промежутка;</li>
                    <li>3) Закрашенная&nbsp;&mdash; время забронировано.<br>Прозрачная&nbsp;&mdash; время свободно;</li>
                    <li>4) Не&nbsp;забудьте сохранить результат!</li>
                </ol>
            </template>
            <template #action>
                <NButton type="primary"
                         size="large"
                         :disabled="isLoading || isFetching || isLoadingMutation"
                         :loading="isLoading || isFetching || isLoadingMutation"
                         icon-placement="left"
                         @click="mutateAsync(Serializer.getDeserializedTables(tables))"
                >
                    {{ isLoadingMutation ? 'Сохраняем' : isLoading || isFetching ? 'Обновляем' : 'Сохранить' }}
                </NButton>
                <div class="final-message" :class="{'active': isSuccess}">
                    <span>Изменения сохранены !</span>
                </div>
            </template>
        </NCard>
    </div>
</template>
