import"./header.js";import"./feedback.js";import"./footer.js";$(document).ready(function(){$(window).width()>="1300"?$(".managers-slider").slick({slidesToShow:4,variableWidth:!1,arrows:!0,prevArrow:'<div class="arrow-prev arrow"><img src="prev.svg"></div>',nextArrow:'<div class="arrow-next arrow"><img src="next.svg"></div>',dots:!1,infinite:!1}):$(window).width()>="1024"?$(".managers-slider").slick({slidesToShow:3.2,variableWidth:!1,arrows:!1,dots:!1,infinite:!1}):$(window).width()>="768"?$(".managers-slider").slick({slidesToShow:2.4,variableWidth:!1,arrows:!1,dots:!1,infinite:!1}):$(window).width()>="568"?$(".managers-slider").slick({slidesToShow:1.8,variableWidth:!1,arrows:!1,dots:!1,infinite:!1}):$(window).width()>="414"?$(".managers-slider").slick({slidesToShow:1.3,variableWidth:!1,arrows:!1,dots:!1,infinite:!1}):$(window).width()>="360"?$(".managers-slider").slick({slidesToShow:1.1,variableWidth:!1,arrows:!1,dots:!1,infinite:!1}):$(window).width()<"360"&&$(".managers-slider").slick({slidesToShow:1,variableWidth:!1,arrows:!1,dots:!1,infinite:!1})});
