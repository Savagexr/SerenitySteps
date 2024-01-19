<template>
  <div class="main-container-wrapper">
    <header class="bg-blue-950 h-10 mb-5"></header>
    <main>
      <div class="calendar-container">
        <div class="calendar-container__header">
          <button
            class="calendar-container__btn calendar-container__btn--left"
            title="Previous"
            @click="prevMonth"
          >
            <i class="icon ion-ios-arrow-back"></i>
          </button>
          <h2 class="calendar-container__title">{{ currentMonth }}</h2>
          <button
            class="calendar-container__btn calendar-container__btn--right"
            title="Next"
            @click="nextMonth"
          >
            <i class="icon ion-ios-arrow-forward"></i>
          </button>
        </div>
        <div class="calendar-container__body">
    <div class="calendar-table">
      <div class="calendar-table__header">
        <div class="calendar-table__row">
          <!-- Render days of the week -->
          <div
            v-for="dayOfWeek in daysOfWeek"
            :key="dayOfWeek"
            class="calendar-table__col"
          >
            {{ dayOfWeek }}
          </div>
        </div>
      </div>
      <div class="calendar-table__body">
        <div class="calendar-table__row" v-for="week in chunkedDates" :key="week">
          <!-- Render dates -->
          <div
            v-for="dateItem in week"
            :key="dateItem.day"
            :class="[
              'calendar-table__col',
              {
                'calendar-table__inactive': !dateItem.isActive,
                'calendar-table__today': dateItem.isToday,
                'calendar-table__event': dateItem.isEvent,
              },
            ]"
          >
            <div class="calendar-table__item" @click="selectDate(dateItem)">
              <span>{{ dateItem.day }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div class="events-container">
        <span class="events__title">Upcoming events this month</span>
        <ul class="events__list">
          <li class="events__item">
            <div class="events__item--left">
              <span class="events__name">Town hall meeting</span>
              <span class="events__date">Oct 5</span>
            </div>
            <span class="events__tag">16:00</span>
          </li>
          <li class="events__item">
            <div class="events__item--left">
              <span class="events__name">Meet with George</span>
              <span class="events__date">Oct 7</span>
            </div>
            <span class="events__tag">10:00</span>
          </li>
          <li class="events__item">
            <div class="events__item--left">
              <span class="events__name">Vacation!!!</span>
              <span class="events__date">Oct 16 - Oct 18</span>
            </div>
            <span class="events__tag events__tag--highlighted">All day</span>
          </li>
          <li class="events__item">
            <div class="events__item--left">
              <span class="events__name">Visit Grandma</span>
              <span class="events__date">Oct 27 - Oct 28</span>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CalendarDashboard',
  data() {
    return {
      currentMonth: null,
      daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      dates: [],
      selectedDate: null,
      // ... other data
    };
  },
  mounted() {
    this.generateCalendar();
  },
  computed: {
    chunkedDates() {
      // Chunk the dates array into weeks
      return this.chunkArray(this.dates, 7);
    },
  },
  methods: {
    generateCalendar() {
      const currentDate = new Date();
      this.currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      this.dates = [];
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        const isActive = this.isDateInRange(date, firstDayOfMonth, lastDayOfMonth);

        this.dates.push({
          day: i,
          isActive,
          isToday: this.isToday(date),
          isEvent: [5, 7, 16, 17, 18, 27, 28].includes(i), // Add your event days here
        });
      }
    },
    isDateInRange(date, startDate, endDate) {
      return date >= startDate && date <= endDate;
    },
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    isSelectedDate(date) {
      return this.selectedDate === date;
    },
    chunkArray(arr, size) {
      const chunkedArr = [];
      for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
      }
      return chunkedArr;
    },
  },
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
/* Replace the existing styles with the compiled CSS below */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: "Inter", sans-serif;
  text-rendering: optimizeLegibility;
  background: #fcfcfc;
}

.mock-up-link {
  display: none;
}

@media (min-width: 768px) {
  .mock-up-link {
    display: block;
  }
}

.main-container-wrapper {
  background-color: #f8fafa;
  min-width: 400px;
  min-height: 568px;
  max-width: 414px;
  overflow-y: auto;
  margin: 24px auto;
  box-shadow: 0px 32px 47px rgba(32, 23, 23, 0.09);
  border-radius: 15px;
}

header {
  background-color: #fff;
  display: flex;
  height: 58px;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}

.header__btn {
  background-color: #0e2b65;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  height: 80px;
  padding-top: 18px;
  position: absolute;
  top: -25px;
  width: 80px;
  outline: none;
}

.header__btn--left {
  left: -25px;
  padding-left: 38px;
  text-align: left;
}

.header__btn--right {
  padding-right: 32px;
  right: -25px;
  text-align: right;
}

.header__btn:hover,
.header__btn:focus {
  background: darken(#86d8c9, 8%);
  transition: all 0.3s ease-in;
}

.icon {
  display: inline-block;
}

.main-container-wrapper p {
  padding: 16px;
  margin-bottom: 24px;
}

.main-container-wrapper .calendar-container__header {
  display: flex;
  justify-content: space-between;
}

.main-container-wrapper .calendar-container__btn {
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  color: #e9e8e8;
}

.main-container-wrapper .calendar-container__btn:hover,
.main-container-wrapper .calendar-container__btn:focus {
  color: #9faab7;
  transition: all 0.3s ease-in;
}

.main-container-wrapper .calendar-container__title {
  color: #222741;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-container-wrapper .calendar-table {
  margin-top: 12px;
  padding: 0px 20px 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-container-wrapper .calendar-table__item {
  border: 2px solid transparent;
  border-radius: 50%;
  color: #424588;
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.main-container-wrapper .calendar-table__item:hover {
  background: #f8fafa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in;
}

.main-container-wrapper .calendar-table__header {
  border-bottom: 2px solid #dcdce3;
  margin-bottom: 4px;
}

.main-container-wrapper .calendar-table__col {
  display: inline-block;
  color: #99a4ae;
  font-size: 12px;
  font-weight: 700;
  padding: 12px 3px;
  text-align: center;
  text-transform: uppercase;
  width: 40px;
  height: 38px;
}

.main-container-wrapper .calendar-table__body .calendar-table__col {
  width: 40px;
  height: 42px;
  padding-bottom: 2px;
}

.main-container-wrapper .calendar-table__today .calendar-table__item {
  border-color: "#feefe";
  background-color: #dcdce3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.main-container-wrapper .calendar-table__event .calendar-table__item {
  background-color: #31d7f1;
  border-color: "#feefe";
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
}

.main-container-wrapper .calendar-table__event--long .calendar-table__item {
  overflow-x: hidden;
  border-radius: 0;
  border-width: 2px 0;
}

.main-container-wrapper .calendar-table__event--start .calendar-table__item {
  border-left: 2px solid #fff;
  border-radius: 50% 0 0 50%;
}

.main-container-wrapper .calendar-table__event--end .calendar-table__item {
  border-right: 2px solid #fff;
  border-radius: 0 50% 50% 0;
}

.main-container-wrapper .calendar-table__inactive .calendar-table__item {
  color: #dcdce3;
  cursor: default;
}

.main-container-wrapper
  .calendar-table__inactive.calendar-table__event
  .calendar-table__item {
  color: #fff;
  opacity: 0.25;
}

.main-container-wrapper
  .calendar-table__inactive.calendar-table__event
  .calendar-table__item:hover {
  background: #31d7f1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.main-container-wrapper .events-container {
  padding: 0 15px;
}

.main-container-wrapper .events__title {
  color: #bec1ca;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.main-container-wrapper .events__list {
  list-style: none;
  padding: 0;
}

.main-container-wrapper .events__item {
  background: #fff;
  border-left: 8px solid #0e2b65;
  border-radius: 15px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.main-container-wrapper .events__item--left {
  width: calc(100% - 76px);
}

.main-container-wrapper .events__name {
  font-size: 12px;
  font-weight: 700;
  color: #222741;
  display: block;
  margin-bottom: 6px;
}

.main-container-wrapper .events__date {
  font-size: 12px;
  color: #dcdce3;
  display: inline-block;
}

.main-container-wrapper .events__tag {
  background: #31d7f1;
  border: 2px solid "#feefe";
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  width: 60px;
  margin-left: 16px;
  padding: 5px 2px;
  text-align: center;
}

.main-container-wrapper .events__tag--highlighted {
  background: #424588;
}
</style>
