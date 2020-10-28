$(document).ready(function(){
  // console.log(document.location.search);

  
  //home
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
  // 
  AOS.init({
    duration: 1200,
  })
  // 
  var countDownDate = new Date("June 25, 2020 16:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML ='BEGINS IN<br>'+ days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
  //gallery
  var mixed_media_btn = document.getElementById("mixed-media-btn");
  var mixed_media = document.getElementsByClassName("mixed-media-tab")[0];

  var cubism_btn = document.getElementById("cubism-btn");
  var cubism = document.getElementsByClassName("cubism-tab")[0];
  mixed_media_btn.onclick = function(){
    mixed_media.style.display = "block";
    cubism.style.display = "none";
  }
  cubism_btn.onclick = function(){
    cubism.style.display = "block";
    mixed_media.style.display = "none";
    // console.log("cubism click");
  }
  var mixed_media_1_modal = document.getElementById("mixed-media-1-modal");
  var mixed_media_1_btn = document.getElementById("mixed-media-1-btn");
  var mixed_media_2_modal = document.getElementById("mixed-media-2-modal");
  var mixed_media_2_btn = document.getElementById("mixed-media-2-btn");
  var mixed_media_3_modal = document.getElementById("mixed-media-3-modal");
  var mixed_media_3_btn = document.getElementById("mixed-media-3-btn");
  var mixed_media_4_modal = document.getElementById("mixed-media-4-modal");
  var mixed_media_4_btn = document.getElementById("mixed-media-4-btn");
  var mixed_media_5_modal = document.getElementById("mixed-media-5-modal");
  var mixed_media_5_btn = document.getElementById("mixed-media-5-btn");

  var mixed_media_1_close_btn = document.getElementsByClassName("close")[0];
  var mixed_media_2_close_btn = document.getElementsByClassName("close")[1];
  var mixed_media_3_close_btn = document.getElementsByClassName("close")[2];
  var mixed_media_4_close_btn = document.getElementsByClassName("close")[3];
  var mixed_media_5_close_btn = document.getElementsByClassName("close")[4];

  mixed_media_1_btn.onclick = function() {
    mixed_media_1_modal.style.display = "block";
  }
  mixed_media_2_btn.onclick = function() {
    mixed_media_2_modal.style.display = "block";
  }
  mixed_media_3_btn.onclick = function() {
    mixed_media_3_modal.style.display = "block";
  }
  mixed_media_4_btn.onclick = function() {
    mixed_media_4_modal.style.display = "block";
  }
  mixed_media_5_btn.onclick = function() {
    mixed_media_5_modal.style.display = "block";
  }

  mixed_media_1_close_btn.onclick = function() {
    mixed_media_1_modal.style.display = "none";
  }
  mixed_media_2_close_btn.onclick = function() {
    mixed_media_2_modal.style.display = "none";
  }
  mixed_media_3_close_btn.onclick = function() {
    mixed_media_3_modal.style.display = "none";
  }
  mixed_media_4_close_btn.onclick = function() {
    mixed_media_4_modal.style.display = "none";
  }
  mixed_media_5_close_btn.onclick = function() {
    mixed_media_5_modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == mixed_media_1_modal) {
      mixed_media_1_modal.style.display = "none";
    }else if (event.target == mixed_media_2_modal) {
      mixed_media_2_modal.style.display = "none";
    }else if (event.target == mixed_media_3_modal) {
      mixed_media_3_modal.style.display = "none";
    }else if (event.target == mixed_media_4_modal) {
      mixed_media_4_modal.style.display = "none";
    }else if (event.target == mixed_media_5_modal) {
      mixed_media_5_modal.style.display = "none";
    }else if (event.target == cubism_1_modal) {
      cubism_1_modal.style.display = "none";
    }else if (event.target == cubism_2_modal) {
      cubism_2_modal.style.display = "none";
    }else if (event.target == cubism_3_modal) {
      cubism_3_modal.style.display = "none";
    }else if (event.target == cubism_4_modal) {
      cubism_4_modal.style.display = "none";
    }else if (event.target == cubism_5_modal) {
      cubism_5_modal.style.display = "none";
    }
  } 

  var cubism_1_modal = document.getElementById("cubism-1-modal");
  var cubism_1_btn = document.getElementById("cubism-1-btn");
  var cubism_2_modal = document.getElementById("cubism-2-modal");
  var cubism_2_btn = document.getElementById("cubism-2-btn");
  var cubism_3_modal = document.getElementById("cubism-3-modal");
  var cubism_3_btn = document.getElementById("cubism-3-btn");
  var cubism_4_modal = document.getElementById("cubism-4-modal");
  var cubism_4_btn = document.getElementById("cubism-4-btn");
  var cubism_5_modal = document.getElementById("cubism-5-modal");
  var cubism_5_btn = document.getElementById("cubism-5-btn");

  var cubism_1_close_btn = document.getElementsByClassName("close")[5];
  var cubism_2_close_btn = document.getElementsByClassName("close")[6];
  var cubism_3_close_btn = document.getElementsByClassName("close")[7];
  var cubism_4_close_btn = document.getElementsByClassName("close")[8];
  var cubism_5_close_btn = document.getElementsByClassName("close")[9];

  cubism_1_btn.onclick = function() {
    cubism_1_modal.style.display = "block";
  }
  cubism_2_btn.onclick = function() {
    cubism_2_modal.style.display = "block";
  }
  cubism_3_btn.onclick = function() {
    cubism_3_modal.style.display = "block";
  }
  cubism_4_btn.onclick = function() {
    cubism_4_modal.style.display = "block";
  }
  cubism_5_btn.onclick = function() {
    cubism_5_modal.style.display = "block";
  }

  cubism_1_close_btn.onclick = function() {
    cubism_1_modal.style.display = "none";
  }
  cubism_2_close_btn.onclick = function() {
    cubism_2_modal.style.display = "none";
  }
  cubism_3_close_btn.onclick = function() {
    cubism_3_modal.style.display = "none";
  }
  cubism_4_close_btn.onclick = function() {
    cubism_4_modal.style.display = "none";
  }
  cubism_5_close_btn.onclick = function() {
    cubism_5_modal.style.display = "none";
  }
  //nav
  var search = document.location.search;
  search = search.substring(1);
  if(search=="cubism")
  {
    cubism.style.display = "block";
    mixed_media.style.display = "none";
  }else if(search=="mixed-media")
  {
    mixed_media.style.display = "block";
    cubism.style.display = "none";
  }

});
  