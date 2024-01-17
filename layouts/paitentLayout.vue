<!-- src/layouts/MainLayout.vue -->

<template>
    <div>
      <main class="flex flex-row justify-between">
        <div>
          <LayoutSideMenu />
        </div>
        <div>
          <LayoutUserHeader/>
        </div>
        <nuxt />
      </main>
      <!-- <LayoutFooter/> -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: "PatientLayout", // Correct the layout name
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles here */
  </style>
  