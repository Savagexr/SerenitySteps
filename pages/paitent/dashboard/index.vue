<template>
    <div class="flex min-h-screen flex-col justify-center bg-gray-100">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <!-- <img src="/logo.svg" class="mx-auto w-auto" alt="Logo">
        <h3 class="text-center text-3xl font-bold tracking-tight text-gray-900">SerenitySteps</h3> -->
      </div>
      <PatientLayout /> <!-- Use the corrected import name -->
    </div>
  </template>
  
  <script>
  import PatientLayout from '../../../layouts/PaitentLayout.vue'; // Correct the import path
  
  export default {
    components: {
      PatientLayout,
    },
  };
  </script>
  