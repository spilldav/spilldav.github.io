let btn1 = document.querySelector('.section1');
let btn2 = document.querySelector('.section2');
let btn3 = document.querySelector('.section3');
let btn4 = document.querySelector('.section4');

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
    work.scrollIntoView({behavior: "smooth", block: "start", inline: "center"}, false);
});
btn4.addEventListener('click', function () {
    contact.scrollIntoView({behavior: "smooth", block: "center"}, true);
});


//navbar scrolled 
const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".main");
const sectionTwo = document.querySelector(".display");

const sectionOneOptions = {
    rootMargin: "-560px 0px 0px 0px"
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

//Get a quote button redirected to Contact us
document.getElementById("getaquote").addEventListener("click", function(){
    document.getElementById("contactus").scrollIntoView();
    
})

//Discuss Your Idea button redirected to Contact us
document.getElementById("discussidea").addEventListener("click", function(){
    document.getElementById("contactus").scrollIntoView();
})

//Add click on See More buttons
var stores = document.getElementById("service_card_holder").children;
var storeExpanded = Array(stores.length).fill(false);

for(let i =0; i < stores.length; i++) {
    stores[i].children[2].addEventListener("click", function() {cmoreFunction(i);});    
}

function cmoreFunction(storeID) {
    let storeElements = stores[storeID].children;
    if(storeExpanded[storeID]){
        storeElements[0].style.display = "";        // Store Name
        storeElements[1].style.display = "";        // Store Description
        storeElements[2].innerHTML = "See More";    // Store Button
        storeElements[3].style.display = "none";    // See More Image
    }
    else{
        storeElements[0].style.display = "none";    // Store Name
        storeElements[1].style.display = "none";    // Store Description
        storeElements[2].innerHTML = "See Less";    // Store Button
        storeElements[3].style.display = "block";   // See More Image
    }
    storeExpanded[storeID] = !storeExpanded[storeID];
}

 


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
