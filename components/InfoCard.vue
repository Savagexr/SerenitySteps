<template>
    <div class="card">
      <div class="card-img">
        <img src="../public/sampleProfilePic.jpg" />
      </div>
      <div class="desc">
        <h6 class="primary-text">Olivia Smith</h6>
      </div>
      <div class="details">
        <div class="rating">
          <h6 class="primary-text">25</h6>
          <h6 class="secondary-text">Years</h6>
        </div>
        <div class="activity">
          <h6 class="primary-text">O-</h6>
          <h6 class="secondary-text">Blood Type</h6>
        </div>
      </div>
      <div class="details">
        <div class="rating">
          <h6 class="primary-text">1.5m</h6>
          <h6 class="secondary-text">Height</h6>
        </div>
        <div class="activity">
          <h6 class="primary-text">50kg</h6>
          <h6 class="secondary-text">Weight</h6>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    background: url(https://dl.dropbox.com/s/mpmu0gjtxv2x3fs/Webp.net-resizeimage%20%281%29.jpg?raw=1) no-repeat center center fixed;
    background-size: cover;
  }
  
  .card {
  height: 420px;
  width: 320px;
  background-color: #fdffff;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  position: absolute;
  left: 250px; /* Adjust this value as needed */
  top: 100px;
  bottom: 0;
  border-radius: 20px;
  overflow: hidden; /* Ensure child elements don't overflow */
  display: flex;
  flex-direction: column;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
  font-family: 'Inter';
}

  
  .card-img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin: 30px auto 20px auto;
  }
  
  .card-img img {
    height: 100%;
    border-radius: 50%;
  }
  
  .desc {
    text-align: center;
    margin-top: 10px;
  }
  
  .primary-text {
    color: black;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.7px;
    margin: 5px 0;
  }
  
  .secondary-text {
    color: black;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 5px 0;
  }
  
  .details {
    display: flex;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px);
    border-radius: 0 0 8px 8px;
  }
  
  .rating,
  .activity {
    text-align: center;
    padding: 10px;
  }
  </style>
  
  <script>
  export default {
    name: 'CardComponent',
  };
  </script>
  