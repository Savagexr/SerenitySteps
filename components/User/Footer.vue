<template>
    <footer class="footer">
    <div class="flex justify-between p-10">
        <div class="container flex justify-between items-center w-auto">
        <div class="footer-links">
          <a href="#" class="footer-link">About</a>
          <a href="#" class="footer-link">Contact</a>
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
        </div>
      </div>
      <div class="container">
        <div class="footer-copyright">
          © {{ new Date().getFullYear() }} Your Company Name. All Rights Reserved.
        </div>
      </div>

      <div class="footer-social">
          <a href="#" class="social-icon">
            <img
              src="/instagramFooterIcon.svg"
              alt="Instagram Icon"
              class="w-6 h-6 fill-current text-white"
            />
          </a>
          <a href="#" class="social-icon">
            <img
              src="/facebookFooterIcon.svg"
              alt="Facebook Icon"
              class="w-6 h-6 fill-current text-white"
            />
          </a>
          <a href="#" class="social-icon">
            <img
              src="/tikTokFooterIcon.svg"
              alt="TikTok Icon"
              class="w-7 h-7 fill-current text-white"
            />
          </a>
        </div>
    </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color:#09152D;
    color: #fff;
    padding: 20px 0;
  }
  
  .container {
    max-width: 1100px;
  }
  
  .footer-links {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  
  .footer-link {
    color: #bbb;
    text-decoration: none;
    margin-right: 20px;
    font-size: 14px;
    transition: color 0.3s ease-in-out;
  }
  
  .footer-link:hover {
    color: #fff;
  }
  
  .footer-social {
    display: flex;
    align-items: center; /* Align social icons vertically in the center */
    justify-content: flex-end;
    flex-grow: 1;
    right: 900px
  }
  
  .social-icon {
    color: #bbb;
    margin-left: 20px;
    transition: color 0.3s ease-in-out;
  }
    
  .social-icon:hover {
    color: #fff;
  }
  
  .footer-copyright {
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    color: #888;
  }
  </style>
  