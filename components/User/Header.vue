<template>
  <div class="fixed top-0 right-0 p-5 flex items-end justify-end bg-white">
    <!-- Search Icon -->
    <a href="#" class="block mr-2 md:mr-4 lg:mr-6">
      <div class="bg-white p-1 rounded-full border-none shadow-lg p-2">
        <img src="../../public/searchHeaderIcon.svg" alt="Search Icon" class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full" />
      </div>
    </a>

    <!-- Notification Icon -->
    <a href="#" class="block mr-2 md:mr-4 lg:mr-6">
      <div class="bg-white p-1 rounded-full border-none shadow-lg p-2">
        <img src="../../public/notifHeaderIcon.svg" alt="Notification Icon" class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full" />
      </div>
    </a>

    <!-- Profile Picture -->
    <a href="#" class="block">
      <img src="../../public/sampleProfilePic.jpg" alt="Profile Icon" class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full shadow-lg" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'UserHeader',
};
</script>
