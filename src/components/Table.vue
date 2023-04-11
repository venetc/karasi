<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Serializer } from '../model/Serializer';
import { NTabs, NTabPane } from 'naive-ui';
import { SerializedBookings } from '../model/types';
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';

const dates = {
  filial_1: {
    '18.06-25.06': false,
    '25.06-02.07': true,
    '02.07-09.07': true,
    '09.07-16.07': false,
    '16.07-23.07': true,
    '23.07-30.07': true,
    '30.07-06.08': true,
    '06.08-13.08': false,
    '13.08-20.08': false,
    '20.08-27.08': false,
    '27.08-03.09': true,
    '03.09-10.09': true,
    '10.09-17.09': false,
    '17.09-24.09': false,
    '24.09-01.10': false,
  },
  filial_2: {
    '18.06-25.06': false,
    '25.06-02.07': false,
    '02.07-09.07': false,
    '09.07-16.07': true,
    '16.07-23.07': false,
    '23.07-30.07': false,
    '30.07-06.08': false,
    '06.08-13.08': false,
    '13.08-20.08': false,
    '20.08-27.08': true,
    '27.08-03.09': true,
    '03.09-10.09': false,
    '10.09-17.09': false,
    '17.09-24.09': false,
    '24.09-01.10': false,
  },
  filial_3: {
    '20.06-27.06': false,
    '27.06-04.07': false,
    '04.07-11.07': false,
    '11.07-18.07': false,
    '18.07-25.07': false,
    '25.07-01.08': false,
    '01.08-08.08': true,
    '08.08-15.08': false,
    '15.08-22.08': false,
    '22.08-29.08': true,
    '29.08-05.09': false,
    '05.09-12.09': false,
    '12.09-19.09': false,
    '19.09-26.09': false,
    '26.09-03.10': false,
  },
} as const;

const tables = ref<SerializedBookings | undefined>(undefined);

onMounted(() => {
  tables.value = Serializer.getSerializedTables(dates);
});

const queryClient = useQueryClient();

const x = async () => {
  const response = await fetch('http://localhost:5173/tables', { method: 'GET' });

  return response.json();
};

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['tables'],
  queryFn: x,
  refetchOnWindowFocus: false,
});

const mutation = useMutation({
  mutationFn: x,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tables'] });
  },
});
</script>

<template>
    <div v-if="tables" class="table">
        <NTabs size="large"
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
    </div>
</template>
