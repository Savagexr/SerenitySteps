<template>
  <div>
    <main class="flex flex-col lg:flex-row justify-between">
      <div class="flex flex-col lg:flex-row">
        <UserSideMenu style="{ marginRight: '300px' }" class="mr-10" />
        <UserHeader />
        <slot />
      </div>
      <div>
        <!-- <UserHeader /> -->
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
