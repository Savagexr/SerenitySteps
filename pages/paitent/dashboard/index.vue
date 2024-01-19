<template>
    <DashboardBannerDashboard/>
</template>

<script>

export default {
  head() {
    return {
      title: 'Paitent Dashboard',
      meta: [
        {
          name: 'description',
          content: 'Your page description',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '../../logo.svg', // Set your icon path
        },
      ],
    };
  },
};
</script>
