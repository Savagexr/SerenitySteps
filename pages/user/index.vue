<template>
  <NuxtLayout name="user">
    <div class="flex flex-row">
      <div class="flex-col">
        <div>
          <InfoCardVue />
          <div class="mr-300">
          <InfoCardVue />
          </div>
        </div>
        <div>
          <GalleryCard />
        </div>
      </div>
      <div class="calendar-style"> <!-- Use flex-col here to stack GalleryCard and CalendarDashboard vertically -->
        <CalendarDashboard/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import InfoCardVue from '../../components/InfoCard.vue';
import GalleryCard from '../../components/GalleryCard.vue';
import CalendarDashboard from '../components/CalendarDashboard.vue';

export default {
  layout: 'user',
  components: {
    InfoCardVue,
    GalleryCard,
    CalendarDashboard
  },
  // Your component logic goes here
};
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
  padding-left:60px;
  padding-top: 600px;
}

.calendar-style{
  left: 100px;
  padding-top: 90px;
}
</style>
