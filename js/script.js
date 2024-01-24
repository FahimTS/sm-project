// countdown js

(() => {
  // Specify the deadline date
  const deadlineDate = new Date('January 31, 2024 15:59:59').getTime();

  // Cache all countdown boxes into consts
  const countdownDays = document.querySelector('.countdown__days .number');
  const countdownHours = document.querySelector('.countdown__hours .number');
  const countdownMinutes = document.querySelector('.countdown__minutes .number');
  const countdownSeconds = document.querySelector('.countdown__seconds .number');

  // Update the count down every 1 second (1000 milliseconds)
  setInterval(() => {
      // Get current date and time
      const currentDate = new Date().getTime();

      // Calculate the distance between current date and time and the deadline date and time
      const distance = deadlineDate - currentDate;

      // Calculations the data for remaining days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      // Insert the result data into individual countdown boxes
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
  }, 1000);
})();



/*===================Auto Typed Image==================*/
var typed = new Typed(".auto-type", {
    strings: ["I'm Fahim Hossen.", "I'm a Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

/*=================== Venobox ==================*/

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// jQuery Plugin Start
$(document).ready(() => {
    $('.bars').click(() =>{
    $('.menu').slideToggle();
    })
})

$(document).ready(() => {
    $('.back_to_top').click(() => {
        $('html, body').animate({scrollTop: 0}, 500);
    })

    $(window).on('scroll', () => {
        let scrollTop = $(this).scrollTop(); 

        if(scrollTop > 200){
            $('.main_menu').addClass('main_menu_bg');
        }else{
            $('.main_menu').removeClass('main_menu_bg');
        }

        if(scrollTop > 350){
            $('.back_to_top').fadeIn()
        }else{
            $('.back_to_top').fadeOut()
        }
    })

    $(window).on('load', () => {
        $('.preloader').fadeOut(1000);
    })
})

// jQuery Plugin End

// ======================== dark theme ==========================
const darkTheme = document.querySelector('.dark_theme');
darkTheme.addEventListener('click', () => {
  darkTheme.querySelector("i").classList.toggle("fa-sun")
  darkTheme.querySelector("i").classList.toggle("fa-moon")
  document.body.classList.toggle('dark')
  
})

window.addEventListener('load', () => {
  if(document.body.classList.contains("dark")){
    darkTheme.querySelector('i').classList.add("fa-sun");
    document.body.classList.remove('cell');
  }else{
    darkTheme.querySelector('i').classList.add("fa-moon");
    document.body.classList.add('cell');
  }
})

/*=================== slick slider js ==================*/
$(document).ready(function(){
    $('.slick_slide').slick({
        draggable: true,
        infinite: true,
        speed: 300,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              draggable: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              draggable: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})

$(document).ready(() =>{
  $('.countNum').counterUp({
    delay: 10,
    time: 1000
  });
})

var mixer = mixitup('.mixlt_inner');