<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const { data, signOut } = useAuth();
const {user}=data.value??{}

async function handleLogout() {
  await signOut({callbackUrl:'/login'});
}
</script>
<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">
      Welcome {{ user?.name }}
    </h1>
    <p>Access your dashboard and account from here</p>

    <button
      type="button"
      class="bg-red-500 hover:bg-red-600 transition-all duration-200 text-red-50 rounded-lg py-2 px-5 mt-4"
      @click="handleLogout"
    >
      Logout
    </button>
  </div>
</template>

<style></style>