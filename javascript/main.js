let headerCount = 1;
let secondCount = 1;

let header1 = document.getElementById("header-content1");
let header2 = document.getElementById("header-content2");
let image1 = document.getElementById("image-content1");
let image2 = document.getElementById("image-content2");
let leftsection1 = document.getElementById("left-section1");
let leftsection2 = document.getElementById("left-section2");

let headerMobile1 = document.getElementById("header-content-mobile1");
let headerMobile2 = document.getElementById("header-content-mobile2");

let second1 = document.getElementById("second-section1");
let second2 = document.getElementById("second-section2");
let second3 = document.getElementById("second-section3");
let second4 = document.getElementById("second-section4");
let second5 = document.getElementById("second-section5");

let drpContent = document.getElementById("dropdown-content");
let readMore = document.getElementById("wentar-read-more");
let hide = document.getElementById("wentar-hide");
let expand = document.getElementById("expand-wentar")

document.getElementById("dropdown1").onclick = function() {
        drpContent.style.display = "flex";
        document.getElementById("dropdown1").style.display = "none";
        document.getElementById("dropdown2").style.display = "flex";
}
document.getElementById("dropdown2").onclick = function() {
        drpContent.style.display = "none";
        document.getElementById("dropdown1").style.display = "flex";
        document.getElementById("dropdown2").style.display = "none";
}

readMore.onclick = function() {
    readMore.style.display = "none";
    expand.style.display = "block"
    hide.style.display = "block"
}

hide.onclick = function() {
    readMore.style.display = "block";
    expand.style.display = "none"
    hide.style.display = "none"
}


function onLoad() {
  if (headerCount > 2) {
    headerCount = 1;
  }

  if (secondCount > 5) {
    secondCount = 1
  }

  switch (headerCount) {
    case 1:
      header1.style.display = "grid";
      header2.style.display = "none";
      headerMobile1.style.display = "grid";
      headerMobile2.style.display = "none";



      setTimeout(() => {
        image1.style.opacity = "100%";
        image1.style.top = "10vw";
        image1.style.right = "6vw";

        image2.style.opacity = "0";
        image2.style.top = "6vw";
        image2.style.right = "0vw";

        leftsection1.style.opacity = "100%";
        leftsection2.style.opacity = "0%";
      }, 0.1);
      break;
    case 2:
      header2.style.display = "grid";
      header1.style.display = "none";
      headerMobile2.style.display = "grid";
      headerMobile1.style.display = "none";

      setTimeout(() => {
        image2.style.opacity = "100%";
        image2.style.top = "10vw";
        image2.style.right = "6vw";

        image1.style.opacity = "0";
        image1.style.top = "22vw";
        image1.style.right = "17vw";

        leftsection1.style.opacity = "0%";
        leftsection2.style.opacity = "100%";
      }, 100);
      break;
    default:
      break;
  }

  switch (secondCount) {
    case 1:
        second1.style.display = "flex";
        second2.style.display = "none";
        second3.style.display = "none";
        second4.style.display = "none";
        second5.style.display = "none";
        break;
    case 2:
        second1.style.display = "none";
        second2.style.display = "flex";
        second3.style.display = "none";
        second4.style.display = "none";
        second5.style.display = "none";
        break;
    case 3:
        second1.style.display = "none";
        second2.style.display = "none";
        second3.style.display = "flex";
        second4.style.display = "none";
        second5.style.display = "none";
        break;
    case 4:
        second1.style.display = "none";
        second2.style.display = "none";
        second3.style.display = "none";
        second4.style.display = "flex";
        second5.style.display = "none";
        break;
    case 5:
        second1.style.display = "none";
        second2.style.display = "none";
        second3.style.display = "none";
        second4.style.display = "none";
        second5.style.display = "flex";
        break;
  
    default:
        break;
  }

  secondCount += 1;

  headerCount += 1;

  setTimeout(() => {
    onload();
  }, 4000);
}


function online2018() {
    second1.style.display = "flex";
    second2.style.display = "none";
    second3.style.display = "none";
    second4.style.display = "none";
    second5.style.display = "none";
}
function online2019() {
    second1.style.display = "none";
    second2.style.display = "flex";
    second3.style.display = "none";
    second4.style.display = "none";
    second5.style.display = "none";
}
function online2020() {
    second1.style.display = "none";
    second2.style.display = "none";
    second3.style.display = "flex";
    second4.style.display = "none";
    second5.style.display = "none";
}
function online2021() {
    second1.style.display = "none";
    second2.style.display = "none";
    second3.style.display = "none";
    second4.style.display = "flex";
    second5.style.display = "none";
}
function online2022() {
    second1.style.display = "none";
    second2.style.display = "none";
    second3.style.display = "none";
    second4.style.display = "none";
    second5.style.display = "flex";
}
