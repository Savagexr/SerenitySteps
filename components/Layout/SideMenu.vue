<template>
  <div class="flex-shrink-0 bg-blue-900 flex flex-col min-h-screen p-2 w-20 min-w-16">
    <a href="#" class="block pt-3 mb-40">
      <img src="/logo.svg" alt="Logo" class="mx-auto w-auto">
    </a>
    <div class="flex flex-col items-center justify-center p-3">
      <a href="#" class="block mb-20"> 
        <img src="../../public/dashboardSideMenuIcon.svg" alt="Dashboard Icon" class="w-7 h-7 fill-current text-white" />
      </a>
      <a href="#" class="block mb-20">
        <img src="../../public/chatSideMenuIcon.svg" alt="Chat Icon" class="w-9 h-9 fill-current text-white" />
      </a>
      <a href="#" class="block mb-20">
        <img src="../../public/sampleProfilePic.jpg" alt="Search Icon" class="w-9 h-9 rounded-full shadow-lg" />
      </a>
    </div>
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
