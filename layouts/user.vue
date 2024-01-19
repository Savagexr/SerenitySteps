<template>
  <div>
    <main class="flex flex-col lg:flex-row justify-between bg-gray-100">
      <div class="flex flex-col lg:flex-row">
        <LayoutSideMenu :style="{ marginRight: '300px' }" class="mr-10" />
        <slot />
      </div>
      <div>
        <LayoutUserHeader />
      </div>
    </main>
    <!-- <LayoutFooter/> -->
  </div>
</template>

<script>
export default {
  name: "UserLayout",
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
