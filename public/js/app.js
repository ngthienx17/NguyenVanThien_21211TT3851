let couter1 = 1;
let couter2 = 1;
let couter3 = 1;
let btnPre = document.querySelectorAll(".pre");
let btnNext = document.querySelectorAll(".next");
let second1 = document.querySelector("#second0");
let first1 = document.querySelector("#first0");
let second2 = document.querySelector("#second1");
let first2 = document.querySelector("#first1");
let second3 = document.querySelector("#second2");
let first3 = document.querySelector("#first2");
let three = document.querySelector("#three");
btnNext.forEach(element);
function element(itemt, index, arr) {
  arr[index].addEventListener("click", function () {
    if (index == 0) {
      nextFeatured();
    }
    if (index == 1) {
      nextHomeTabs();
    }
    if (index == 2) {
      nextBrands();
    }
  });
}
function nextFeatured() {
  couter1++;
  if (couter1 > 1) {
    first1.classList.add('left');
  }
  if (couter1 > 2) {
    second1.classList.add('left');
  }
  if (couter1 > 3) {
    second1.classList.remove('left')
    first1.classList.remove('left')
    couter1 = 1;
  }
}
function nextHomeTabs() {
  couter2++;
  if (couter2 > 1) {
    first2.classList.add('left');
  }
  if (couter2 > 2) {
    second2.classList.add('left');
  }
  if (couter2 > 3) {
    three.classList.add('left');
  }
  if (couter2 > 4) {
    three.classList.remove('left');
    second2.classList.remove('left');
    first2.classList.remove('left');
    couter2 = 1;
  }
}
function nextBrands() {
  couter3++;
  if (couter3 > 1) {
    first3.classList.add('left');
  }
  if (couter3 > 2) {
    second3.classList.add('left');
  }
  if (couter3 > 3) {
    second3.classList.remove('left');
    first3.classList.remove('left');
    couter3 = 1;
  }
}
btnPre.forEach(element1);
function element1(itemt, index, arr) {
  arr[index].addEventListener("click", function () {
    if (index == 0) {
      preFeatured();
    }
    if (index == 1) {
      preHomeTabs();
    }
    if (index == 2) {
      preBrands();
    }
  });
}
function preFeatured() {
  couter1--;
  if (couter1 < 3) {
    second1.classList.remove('left');
  }
  if (couter1 < 2) {
    first1.classList.remove('left');
  }
  if (couter1 < 1) {
    first1.classList.add('left');
    second1.classList.add('left');
    couter1 = 3;
  }
}
function preHomeTabs() {
  couter3--;
  if (couter3 < 4) {
    three.classList.remove('left');
  }
  if (couter3 < 3) {
    second2.classList.remove('left');
  }
  if (couter3 < 2) {
    first2.classList.remove('left');
  }
  if (couter3 < 1) {
    first2.classList.add('left');
    second2.classList.add('left');
    three.classList.add('left');
    couter3 = 4;
  }
}
function preBrands() {
  couter3--;
  if (couter3 < 3) {
    second3.classList.remove('left');
  }
  if (couter3 < 2) {
    first3.classList.remove('left');
  }
  if (couter3 < 1) {
    first3.classList.add('left');
    second3.classList.add('left');
    couter3 = 3;
  }
}


let couter = 1;
let btn_Pre = document.querySelector(".btn-pre");
let btn_Next = document.querySelector(".btn-next");

btn_Pre.addEventListener("click", function () {
  couter--;
  if (couter < 1) {
    couter = 3;
  }
  document.getElementById("radio" + couter).checked = true;
  
  
});
btn_Next.addEventListener("click", function () {
  couter++;
  if (couter > 3) {
    couter = 1;
  }
  document.getElementById("radio" + couter).checked = true;
 
});
setInterval(function () {
  couter++;
  if (couter > 3) {
    couter = 1;
  }
  document.getElementById("radio" + couter).checked = true;
  
}, 10000);

let dropdown =  document.querySelectorAll('.nav-top .nav-item.dropdown');
let menu = document.querySelectorAll(".dropdown-menu"); 

for (let index = 0; index < dropdown.length; index++) {
  dropdown[index].addEventListener('click',function () {
    menu[index].classList.toggle('show');
    if (!dropdown[index].target.matches(".nav-item")) {
      var dropdowns = document.querySelector(".dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
         
      }
    }
  })
  
}
let menuShow = document.querySelector(".menu-top .navbar");
function myFunction() {
  document.getElementById("navbarNav").classList.toggle("show");
}
let iconbtn = document.querySelectorAll(".icon");
 
for (let index = 0; index < iconbtn.length; index++) {
  iconbtn[index].addEventListener('click',function () {
   document.getElementById('dropdown'+index).classList.toggle('show');
  })
  
}
iconbtn.onclick =  function (event) {
  if (!event.target.matches(".icon")) {
    let i = 0;
    let dropdowns = document.getElementById('dropdown'+ i)
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns;
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
