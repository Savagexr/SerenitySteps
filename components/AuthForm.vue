<template>
  <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
      <form action="" class="space-y-6" @submit.prevent="onSubmit">
        <!-- Input  -->
        <Input :disabled="isLoading" required id="name" label="Name" name="name" v-model="name" type="text"
          v-if="variant === 'REGISTER'" />

        <Input :disabled="isLoading" required id="email" label="Email" name="email" v-model="email" type="email" />
        <Input :disabled="isLoading" required id="password" label="Password" name="password" v-model="password"
          type="password" />
        <div>
          <Button :disabled="isLoading" fullWidth type="submit">
            {{ variant === 'LOGIN' ? 'Sign In' : 'Register' }}
          </Button>
        </div>
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500"> Or Continue with </span>
            </div>
          </div>
          <div class="mt-6 flex gap-2">
            <AuthSocialButton :disabled="isLoading" @click="socialAction('google')" icon="bi:google" />
          </div>
        </div>
        <div class="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div @click="toggleVariant">
            {{
              variant === 'REGISTER' ? 'New to SerenitySteps?' : 'Already have an account?'
            }}
          </div>
          <div @click="toggleVariant" class="underline cursor-pointer">
            {{ variant === 'LOGIN' ? 'Create an account' : 'Login' }}
          </div>
        </div>
      </form>
    </div>
  </div>
  <template v-if="notifyStatus">
    <div id="toast-bottom-right"
      class="fixed flex items-center justify-between w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert">
      <div class="inline-flex items-center">
        <div v-if="notifyStatus === 'REGISTERED'"
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>
        <div v-else
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
          <span class="sr-only">Error icon</span>
        </div>
        <div v-if="notifyStatus === 'REGISTERED'" class="ms-3 text-sm font-normal">Successfully registered.</div>
        <div v-else-if="notifyStatus === 'DUPLICATE EMAIL'" class="ms-3 text-sm font-normal">Email has been registered.</div>
        <div v-else-if="notifyStatus === 'ERROR'" class="ms-3 text-sm font-normal">Something went wrong.</div>
        <div v-else-if="notifyStatus === 'INVALID CREDENTIALS'" class="ms-3 text-sm font-normal">Invalid email and/or password.</div>
      </div>
      <button type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 right-5"
        data-dismiss-target="#toast-default" aria-label="Close" @click="notifyStatus = ''">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  </template>
</template>
  
<script setup lang="ts">

const isLoading = ref(false);
const name = ref('');
const password = ref('');
const email = ref('');

type STATUS = 'REGISTERED' | 'DUPLICATE EMAIL' | 'ERROR' | 'INVALID CREDENTIALS' |''
const notifyStatus = ref<STATUS>('');

const { signIn } = useAuth();

type VARIANT = 'LOGIN' | 'REGISTER';
const variant = ref<VARIANT>('LOGIN');

const onSubmit = async () => {
  if (variant.value === 'REGISTER') {
    try {
      isLoading.value = true;
      const { data, error } = await useFetch('/api/auth/register', {
        method: 'POST',
        body: {
          name: name.value,
          password: password.value,
          email: email.value,
        },
      });
      if (error.value) {
        if (error.value.statusMessage === 'Duplicate email') notifyStatus.value = 'DUPLICATE EMAIL'
        else notifyStatus.value = 'ERROR'
      }
      if (data.value) {
        console.log('Successfully Registered');
        notifyStatus.value = 'REGISTERED'
      }
    } catch (error) {
    } finally {
      isLoading.value = false;
    }
  } else {
    try {
      isLoading.value = true;

      const result = await signIn('credentials', {
        password: password.value,
        email: email.value,
        redirect: false
      });
      if (result?.ok && !result.error) {
        console.log('Successfully LoggedIn');
        useRouter().push({
          name: "index",
        });
      } else {
        console.log('Something Went Wrong');
        notifyStatus.value = 'INVALID CREDENTIALS'
      }
    } catch (error) {
    } finally {
      isLoading.value = false;
    }
  }
};

const socialAction = async (action: string) => {
  try {
    isLoading.value = true;
    await signIn(action, { callbackUrl: '/' });
  } catch (error) {
  } finally {
    isLoading.value = false;
  }
};
const toggleVariant = () => {
  if (variant.value === 'REGISTER') {
    variant.value = 'LOGIN';
  } else {
    variant.value = 'REGISTER';
  }
};
</script>
  
<style scoped></style>