let btn1 = document.querySelector('.section1');
let btn2 = document.querySelector('.section2');
let btn3 = document.querySelector('.section3');
let btn4 = document.querySelector('.section4');
let quotebtn = document.querySelector('.getaquote');
let discuss = document.querySelector('.discuss');
let order = document.querySelectorAll('.order');
for(let i =0; i < 3; i++) {
    console.log("h");
    order[i].addEventListener('click', function () {
        console.log("t");
        contact.scrollIntoView({behavior: "smooth", block: "center"}, true);
    });
}
let mainSection = document.querySelector('.page');
let benefits = document.querySelector('.benefits');
let work = document.querySelector('.work');
let contact = document.querySelector('.contact');

btn1.addEventListener('click', function () {
    // mainSection.scrollIntoView({behavior: "smooth"}, true);
    mainSection.scrollIntoView({behavior: "smooth", block: "end"});
});
btn2.addEventListener('click', function () {
    benefits.scrollIntoView({behavior: "smooth"}, true);
});
btn3.addEventListener('click', function () {
    work.scrollIntoView({behavior: "smooth", block: "start"}, false);
});
btn4.addEventListener('click', function () {
    contact.scrollIntoView({behavior: "smooth", block: "center"}, true);
});
quotebtn.addEventListener('click', function () {
    contact.scrollIntoView({behavior: "smooth", block: "center"}, true);
});
discuss.addEventListener('click', function () {
    contact.scrollIntoView({behavior: "smooth", block: "center"}, true);
});


//navbar scrolled 
const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".main");
const sectionTwo = document.querySelector(".display");

const sectionOneOptions = {
    rootMargin: "-530px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



//typing annimation 
var messageArray = ["Craftedly Built 4 You!"];
var textPosition = 0;
var speed = 120;

typewriter = () => {
    document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>&#x7c</span>";

    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);



//Add click on See More buttons
// var stores = document.getElementById("service_card_holder").children;
// var storeExpanded = Array(stores.length).fill(false);

// for(let i =1; i <= stores.length; i+=2) {
//     stores[i].children[2].addEventListener("click", function() {cmoreFunction(i);});    
// }

// function cmoreFunction(storeID) {
//     let storeElements = stores[storeID].children;
//     if(storeExpanded[storeID]){
//         storeElements[0].style.display = "";        // Store Name
//         storeElements[1].style.display = "";        // Store Description
//         storeElements[2].innerHTML = "See More";    // Store Button
//         storeElements[3].style.display = "none";    // See More Image
//     }
//     else{
//         storeElements[0].style.display = "none";    // Store Name
//         storeElements[1].style.display = "none";    // Store Description
//         storeElements[2].innerHTML = "See Less";    // Store Button
//         storeElements[3].style.display = "block";   // See More Image
//         // storeElement[3].style.textPosition = "center";
//     }
//     storeExpanded[storeID] = !storeExpanded[storeID];
// }


 


//FAQ section 
$(function() {
    $(".expand-box > li").click(function() {
        let box = document.querySelector('.div');
        let width = box.offsetWidth;
        let height = box.offsetHeight;
        console.log(($(this).find(".div").offsetWidth));
          if($(this).hasClass("opened")) {
              $(this).find(".div").hide();
              $(this).removeClass("opened");
              $(this).find("label").addClass("hover");
              $(this).width(800).height(60);
          } else {
              $(this).addClass("opened");
              $(this).find("label").removeClass("hover");
              $(this).height($(this).find(".div").outerHeight(true)+ 60);
              $(this).find(".div").fadeIn();
          }
      });
  });


  //get started 
  function getStarted() {
    var popup = document.getElementById("getStarted");
    popup.classList.remove("dissapear");
  }
  function exit() {
    var popup = document.getElementById("getStarted");
    popup.classList.add("dissapear");
  }

  btn3.addEventListener('click', function () {
    work.scrollIntoView({behavior: "smooth", block: "start", inline: "center"}, false);
});






  var stores = document.getElementById("service_card_holder").children;
  var storeExpanded = Array(stores.length/2).fill(false);
  for(let i=1; i <= stores.length; i+=2) {
    stores[i].children[2].addEventListener("click", function() {cmoreFunction(i);});    
  }
  for(let i=0; i < stores.length; i+=2) {
    stores[i].children[0].children[1].addEventListener("click", function() {clessFunction(i);console.log("Clicking inside function");});    
  }

function cmoreFunction(storeId) {
    if(storeExpanded[storeId]){
        //dissapear 
    stores[(storeId-1)].classList.add("dissapear");
    console.log("dissapear");
    }
    else{
        //show 
        stores[(storeId-1)].classList.remove("dissapear");
    console.log("appear");
    }

    storeExpanded[storeId] = !storeExpanded[storeId];
}
function clessFunction(storeId) {
    console.log("This is the store id you are targeting" + storeId);
    stores[(storeId)].classList.add("dissapear");
    storeExpanded[storeId] = !storeExpanded[storeId];
}

  function imageExit() {
    // for(let i=0; i < stores.length; i+=2) {
    //     stores[i].children[1].children[2].addEventListener("click", function() {cmoreFunction(i);});    
    // }
    console.log("Exit has been clicked");
}
