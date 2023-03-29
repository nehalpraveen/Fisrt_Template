(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
  // ? compute what is the mouse position relative to the container element (scope)
  let {
    left: scopeOffsetX,
    top: scopeOffsetY,
  } = scope.getBoundingClientRect();

  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  // ? check if the element will go out of bounds
  const outOfBoundsOnX =
    scopeX + contextMenu.clientWidth > scope.clientWidth;

  const outOfBoundsOnY =
    scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  // ? normalize on X
  if (outOfBoundsOnX) {
    normalizedX =
      scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  // ? normalize on Y
  if (outOfBoundsOnY) {
    normalizedY =
      scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
  }

  return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;

  const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

  contextMenu.classList.remove("visible");

  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});

scope.addEventListener("click", (e) => {
  // ? close the menu if the user clicks outside of it
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});

history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

const bin = ['642139aaebd26539d09da7ec','64213a25ace6f33a22fdd2e2'];
let req = new XMLHttpRequest();
req.onreadystatechange = () => {

    var exam = JSON.parse(req.responseText);
    for (let i=0;i<5;i++){
    document.getElementById("Title"+i).innerHTML =exam.record.Jobs[i].Title;
    document.getElementById("city"+i).innerHTML ="<i class=\"fa fa-map-marker-alt text-primary me-2\"></i>"+ exam.record.Jobs[i].Location;
    document.getElementById("mode"+i).innerHTML ="<i class=\"far fa-clock text-primary me-2\"></i>"+ exam.record.Jobs[i].Mode;
    document.getElementById("sal"+i).innerHTML ="<i class=\"far fa-money-bill-alt text-primary me-2\"></i>"+ exam.record.Jobs[i].SalaryRange;
    }
      var txt = "" ;
      var txt1 = "";
      
      for(let i=0;i<5;i++){
        if(exam.record.Jobs[i].Mode == "Full Time"){
            txt += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title'+i+'">'+exam.record.Jobs[i].Title+'</h5><span class="text-truncate me-3" id = "city'+i+'"><i class="fa fa-map-marker-alt text-primary me-2"></i>'+exam.record.Jobs[i].Location+'</span><span class="text-truncate me-3" id = "mode'+i+'"><i class="far fa-clock text-primary me-2"></i>'+exam.record.Jobs[i].Mode+'</span><span class="text-truncate me-0" id = "sal'+i+'"><i class="far fa-money-bill-alt text-primary me-2"></i>'+exam.record.Jobs[i].SalaryRange+'</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
        }
        else{
          txt1 += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title'+i+'">'+exam.record.Jobs[i].Title+'</h5><span class="text-truncate me-3" id = "city'+i+'"><i class="fa fa-map-marker-alt text-primary me-2"></i>'+exam.record.Jobs[i].Location+'</span><span class="text-truncate me-3" id = "mode'+i+'"><i class="far fa-clock text-primary me-2"></i>'+exam.record.Jobs[i].Mode+'</span><span class="text-truncate me-0" id = "sal'+i+'"><i class="far fa-money-bill-alt text-primary me-2"></i>'+exam.record.Jobs[i].SalaryRange+'</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
        }
      }
      document.getElementById("tab-2").innerHTML = txt+'<a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>';
      document.getElementById("tab-3").innerHTML = txt1+'<a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>'; 

};
req.open("GET", "https://api.jsonbin.io/v3/b/64197bc9ace6f33a22f2a2de/latest", true);
req.setRequestHeader("X-Master-Key", "$2b$10$gRV7dks3NW/Q1POOjeMxD.8eGouSjj2m8TNm2XtefCTUSlYCwJ5FS");
req.send();



let requ = new XMLHttpRequest();
requ.onreadystatechange = () => {
if (requ.readyState == XMLHttpRequest.DONE) {
    var exam = JSON.parse(requ.responseText);
    var txt2 = '<h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" >Explore By Category</h1><div class="row g-4" >';
    for (let i=0;i<exam.record.total;i++){
      txt2 += '<div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s"><a class="cat-item rounded p-4" href=""><i class="'+exam.record.Categ[i].Logo+'"></i><h6 class="mb-3">'+exam.record.Categ[i].Title+'</h6><p class="mb-0">'+exam.record.Categ[i].Vac+' Vacancy</p></a></div>';
    }
    txt2 += '</div>'
    document.getElementById("Categ").innerHTML += txt2 ;
  }
};
requ.open("GET", "https://api.jsonbin.io/v3/b/642139aaebd26539d09da7ec/latest", true);
requ.setRequestHeader("X-Master-Key", "$2b$10$gRV7dks3NW/Q1POOjeMxD.8eGouSjj2m8TNm2XtefCTUSlYCwJ5FS");
requ.send();


let req3 = new XMLHttpRequest();
req3.onreadystatechange = () => {
if (req3.readyState == XMLHttpRequest.DONE) {
    var exam = JSON.parse(req3.responseText);
    var txt3 = '';
    var count = 1;
    for (let i=0;i<exam.record.total;i++){
      txt3 += '<div class="box-2"><a class="cat-item roounded p-4"><img src="img/'+(i+1)+'.jpg" class="b-img-1"><h3 class="heading1">Blog - '+(i+1)+'</h3><p class="blog-heading-1">'+exam.record.Blog[i].Title+'</p> <p class="text">'+exam.record.Blog[i].Desc+' </p><span class="name">'+exam.record.Blog[i].User+'</span></a></div>';
    }
    document.getElementById("1").innerHTML = txt3 + '<div class="clearfix"></div>';
  }
};
req3.open("GET", "https://api.jsonbin.io/v3/b/64215a3debd26539d09dc24d/latest", true);
req3.setRequestHeader("X-Master-Key", "$2b$10$PMixIXysvI5UcNoev2Gkc.jn8jMnoPE37ZY9Ys2uuLOT./BPh4PYe");
req3.send();

const url = new URL(window.location.href);
var example = url.hash;

let req4 = new XMLHttpRequest();
req4.onreadystatechange = () => {
if (req4.readyState == XMLHttpRequest.DONE){
  var foot = JSON.parse(req4.responseText);
  var txt5= '<h5 class="text-white mb-4">Company</h5>';
  var txt6 = '<h5 class="text-white mb-4">Quick Links</h5>';
  for(let i =0;i<4;i++){
    txt5 += '<a class="btn btn-link text-white-50" href="">'+foot.record.company[i].title+'</a>';
    txt6 += '<a class="btn btn-link text-white-50" href="">'+foot.record.Quick[i].title+'</a>'
  }
  document.getElementById("com").innerHTML += txt5;
  document.getElementById("quick").innerHTML += txt6;
  document.getElementById("add").innerHTML = '<i class="fa fa-map-marker-alt me-3"></i>' + example.slice(1);
  document.getElementById("phone").innerHTML = '<i class="fa fa-phone-alt me-3"></i>' + foot.record.Contact[1].Phoneno;
  document.getElementById("mail").innerHTML = '<i class="fa fa-envelope me-3"></i>' + foot.record.Contact[2].Mail;
}
};
req4.open("GET", "https://api.jsonbin.io/v3/b/6422757cc0e7653a0597ac8b/latest", true);
req4.setRequestHeader("X-Master-Key", "$2b$10$PMixIXysvI5UcNoev2Gkc.jn8jMnoPE37ZY9Ys2uuLOT./BPh4PYe");
req4.send();

let req5 = new XMLHttpRequest();
req5.onreadystatechange = () => {
if (req5.readyState == XMLHttpRequest.DONE){
  var foot = JSON.parse(req5.responseText);
  var txt7= '';

  for(let i =0;i<4;i++){
    txt7 += '<div class="testimonial-item bg-light rounded p-4"><i class="fa fa-quote-left fa-2x text-primary mb-3"></i><p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p><div class="d-flex align-items-center"><img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style="width: 50px; height: 50px;"><div class="ps-3"><h5 class="mb-1">'+foot.record.Client[i].client+'</h5><small>'+foot.record.Client[i].type+'</small></div></div></div>';
  }
  document.getElementById("client").innerHTML += txt7;
  
}
};
req5.open("GET", "https://api.jsonbin.io/v3/b/64215bf3c0e7653a059704f1/latest", true);
req5.setRequestHeader("X-Master-Key", "$2b$10$PMixIXysvI5UcNoev2Gkc.jn8jMnoPE37ZY9Ys2uuLOT./BPh4PYe");
req5.send();

