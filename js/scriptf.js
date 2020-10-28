$(document).ready(function(){
 
  // 
  AOS.init({
    duration: 1200,
  })
  //gallery
  var ongoing_btn = document.getElementById("ongoing-btn");
  var ongoing = document.getElementsByClassName("ongoing-tab")[0];

  var oncoming_btn = document.getElementById("oncoming-btn");
  var oncoming = document.getElementsByClassName("oncoming-tab")[0];
  ongoing_btn.onclick = function(){
    ongoing.style.display = "block";
    oncoming.style.display = "none";
  }
  oncoming_btn.onclick = function(){
    oncoming.style.display = "block";
    ongoing.style.display = "none";
    // console.log("oncoming click");
  }
  var ongoing_1_modal = document.getElementById("ongoing-1-modal");
  var ongoing_1_btn = document.getElementById("ongoing-1-btn");

  var ongoing_1_close_btn = document.getElementsByClassName("close")[0];

  ongoing_1_btn.onclick = function() {
    ongoing_1_modal.style.display = "block";
  }

  ongoing_1_close_btn.onclick = function() {
    ongoing_1_modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == ongoing_1_modal) {
      ongoing_1_modal.style.display = "none";
    }else if (event.target == oncoming_1_modal) {
      oncoming_1_modal.style.display = "none";
    }else if (event.target == oncoming_2_modal) {
      oncoming_2_modal.style.display = "none";
    }
  } 

  var oncoming_1_modal = document.getElementById("oncoming-1-modal");
  var oncoming_1_btn = document.getElementById("oncoming-1-btn");
  var oncoming_2_modal = document.getElementById("oncoming-2-modal");
  var oncoming_2_btn = document.getElementById("oncoming-2-btn");

  var oncoming_1_close_btn = document.getElementsByClassName("close")[1];
  var oncoming_2_close_btn = document.getElementsByClassName("close")[2];

  oncoming_1_btn.onclick = function() {
    oncoming_1_modal.style.display = "block";
  }
  oncoming_2_btn.onclick = function() {
    oncoming_2_modal.style.display = "block";
  }

  oncoming_1_close_btn.onclick = function() {
    oncoming_1_modal.style.display = "none";
  }
  oncoming_2_close_btn.onclick = function() {
    oncoming_2_modal.style.display = "none";
  }
  //nav
  var search = document.location.search;
  search = search.substring(1);
  if(search=="oncoming")
  {
    oncoming.style.display = "block";
    ongoing.style.display = "none";
  }else if(search=="ongoing")
  {
    ongoing.style.display = "block";
    oncoming.style.display = "none";
  }

});
  