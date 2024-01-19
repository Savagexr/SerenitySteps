<template>
  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-blue-950">
      <ul class="space-y-2 font-medium">
        <a href="#" class="block pt-2 mb-40">
      <img src="/logo.svg" alt="Logo" class="mx-auto w-auto">
    </a>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <img src="/dashboardSideMenuIcon.svg" alt="Dashboard Icon" class="mx-auto w-auto" />
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 my-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="/chatSideMenuIcon.svg" alt="Chat Icon" class="mx-auto w-auto" />
            </a>
         </li>
         <a href="#" class="fixed block pt-2 px-3 bottom-5">
          <img src="/logoutSideMenuIcon.svg" alt="Logout Icon" class="mx-auto w-auto">
    </a>
      </ul>
   </div>
</aside>
  <!-- <div class="flex-shrink-0 bg-blue-900 flex flex-col min-h-screen p-2 w-20 min-w-16">
    <a href="#" class="block pt-3 mb-40">
      <img src="/logo.svg" alt="Logo" class="mx-auto w-auto">
    </a>
    <div class="flex flex-col items-center justify-center p-3">
      <a href="#" class="block mb-20"> 
        <img src="/dashboardSideMenuIcon.svg" alt="Dashboard Icon" class="w-7 h-7 fill-current text-white" />
      </a>
      <a href="#" class="block mb-20">
        <img src="/chatSideMenuIcon.svg" alt="Chat Icon" class="w-9 h-9 fill-current text-white" />
      </a>
      <a href="#" class="block mb-20">
        <img src="/sampleProfilePic.jpg" alt="Search Icon" class="w-9 h-9 rounded-full shadow-lg" />
      </a>
    </div>
    <div class="mt-auto pb-10">
      <a href="#" class="block">
        <img src="/logoutSideMenuIcon.svg" alt="Logout Icon" class="mx-auto w-auto">
      </a>
    </div>
  </div> -->
</template>


<script>
export default {
  name: 'SideMenu',
};
</script>
