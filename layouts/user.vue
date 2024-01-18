<template>
  <div class="flex min-h-screen max-w-screen flex-col justify-center bg-gray-100">
  <div>
    <main class="flex flex-row justify-between">
      <div>
        <UserSideMenu />
        <!-- can refer to https://flowbite.com/docs/components/sidebar/ on how it display contents-->
      </div>
      <div>
        <UserHeader/>
      </div>
      <nuxt />
    </main>
    <!-- <LayoutFooter/> -->
  </div>
  </div>
</template>

<script>
</script>
