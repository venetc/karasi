<script setup lang="ts">
import { NCard, NInput, NButton } from 'naive-ui';
import { ref } from 'vue';
import { useTimeoutFn } from '@vueuse/core';
import Table from './components/Table.vue';

const { start: startTimer } = useTimeoutFn(() => {
  isError.value = false;
}, 3000);

const credentials = ref({ login: '', password: '' });

const isError = ref(false);
const errorMessage = ref('');
const isSuccess = ref(false);
const clearError = () => isError.value = false;
const isLoginValid = () => credentials.value.login === 'karasi';
const isPasswordValid = () => credentials.value.password === 'karasiki';

const validate = () => {
  const loginIsValid = isLoginValid();
  const passwordIsValid = isPasswordValid();

  if (credentials.value.password.trim().length && credentials.value.login.trim().length) {
    if (!loginIsValid || !passwordIsValid) {
      isError.value = true;
      errorMessage.value = 'Неверный логин или пароль';
      startTimer();
    } else {
      isSuccess.value = true;
    }
  } else {
    isError.value = true;
    errorMessage.value = 'Заполните оба поля';
    startTimer();
  }
};

</script>

<template>
    <NCard v-if="!isSuccess" bordered class="form">
        <NInput v-model:value="credentials.login"
                type="text"
                name="name"
                placeholder="Логин"
                passively-activated
                @focus="clearError"
                @keydown.enter="validate"
        />
        <NInput v-model:value="credentials.password"
                type="password"
                name="password"
                show-password-on="click"
                placeholder="Пароль"
                @keydown.enter="validate"
                @focus="clearError"
        />
        <NButton type="primary"
                 @click="validate"
        >
            Войти
        </NButton>
        <div class="error-message" :class="{'active': isError}">
            <span>{{ errorMessage }}</span>
        </div>
    </NCard>
    <Table v-else />
</template>
