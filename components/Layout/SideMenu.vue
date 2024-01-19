<template>
  <div class="flex-shrink-0 bg-blue-950 flex flex-col min-h-screen p-2 w-20 min-w-16">
    <!-- Logo -->
    <a href="#" class="block pt-3 mb-40">
      <img src="/logo.svg" alt="Logo" class="mx-auto w-auto">
    </a>

    <!-- Menu Icons -->
    <div class="flex flex-col items-center justify-center p-3">
      <a href="#" class="block mb-20">
        <img src="../../public/dashboardSideMenuIcon.svg" alt="Dashboard Icon" class="w-7 h-7 md:w-9 md:h-9 fill-current text-white" />
      </a>
      <a href="#" class="block mb-20">
        <img src="../../public/scheduleSideMenuIcon.svg" alt="Chat Icon" class="w-9 h-9 md:w-10 md:h-10 fill-current text-white" />
      </a>
      <a href="#" class="block mb-20">
        <img src="../../public/chatSideMenuIcon.svg" alt="Chat Icon" class="w-9 h-9 md:w-10 md:h-10 fill-current text-white" />
      </a>
    </div>

    <!-- Logout Icon -->
    <div class="mt-auto pb-10">
      <a href="#" class="block">
        <img src="../../public/logoutSideMenuIcon.svg" alt="Logout Icon" class="mx-auto w-auto">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
};
</script>
