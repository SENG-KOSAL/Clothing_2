<template>
    <div class="banner">
      <div class="banner-content">
        <h1>Shop the latest fashion designed by Top Brands</h1>
        <button>Shop Now</button>
      </div>
    </div>
    <div class="img">
       <img src="@/components/assets/rectangle_12.png" alt="">
       
       <div class="text_of_img">
        <h3>The Holiday Outfit</h3>
       </div>
    </div>
  </template>
  
  <style scoped>
  /* Styles for larger screens (already in your code) */
.banner {
    background-image: url('@/components/assets/rectangle_2.png');
    background-size: cover;
    background-position: center;
    color: rgb(255, 255, 255);
    text-align: left;
    padding: 320px 20px;
    position: relative;
}

.banner-content {
    position: absolute;
    bottom: 30px;
    left: 30px;
    max-width: 600px;
}

.banner h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.banner button {
    padding: 10px 20px;
    background-color: #c60000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.img {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}

.img img {
    height: 300px;
    width: 800px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid #fff;
    transition: transform 0.3s ease;
}

.text_of_img h3 {
    font-family: 'Arial', sans-serif;
    color: #757575;
    font-size: 39px;
    margin: 0;
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
    .banner {
        padding: 200px 15px; /* Reduce padding for smaller screens */
    }

    .banner h1 {
        font-size: 28px; /* Reduce the font size */
    }

    .banner-content {
        left: 15px; /* Adjust positioning for mobile */
        bottom: 15px;
        max-width: 100%; /* Allow content to use the full width */
    }

    .img {
        flex-direction: column; /* Stack the image and text vertically */
        gap: 10px; /* Reduce gap between items */
    }

    .img img {
        width: 100%; /* Make the image take full width of the container */
        height: auto; /* Maintain aspect ratio */
    }

    .text_of_img h3 {
        font-size: 24px; /* Reduce font size for mobile */
    }
}

@media (max-width: 480px) {
    .banner {
        padding: 150px 10px; /* Further reduce padding for smaller mobile screens */
    }

    .banner h1 {
        font-size: 24px; /* Even smaller font size for very small screens */
    }

    .banner button {
        padding: 8px 16px; /* Adjust button padding */
        font-size: 14px; /* Smaller font size for the button */
    }

    .img {
        gap: 5px; /* Reduce gap further for small screens */
    }

    .text_of_img h3 {
        font-size: 20px; /* Smaller text for very small screens */
    }
}

  
  </style>
  