<template>
  <div class="flex-shrink-0 flex flex-col min-h-screen w-20 min-w-16">
    <!-- The rest of your content -->
    <a href="#" class="block pt-10 mb-40 flex items-center justify-center">
      <InfoCard/>
    </a>
    <div class="flex flex-col items-center">
      <GalleryCard/>
    </div>
    <div class="flex flex-col items-center">
      <CalendarDashbaord/>
    </div>
    <!-- ... rest of your content ... -->
  </div>
</template>

<style scoped>
.with-background-image {
  background: url('../../public/bannerDashboard.png') no-repeat center center/cover;
  width: 300px;
  padding: 10px 70px;
}
</style>

<script>
export default {
  name: 'BannerDashboard',
};
</script>
