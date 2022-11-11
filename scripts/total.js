$(".header__nav").css({
  height: +$(".dashboard__main").height() + 40,
});

// ******************************
// Navigation Start

const nav = document.querySelector(".header__nav");
const titles = document.querySelectorAll(".header__nav-blocks p");

const black = [
  "images/Category.png",
  "images/Category2.png",
  "images/2 User.png",
  "images/student.png",
  "images/Chat.png",
  "images/Upload.png",
  "images/medal.png",
  "images/Calendar.png",
  "images/Bookmark.png",
  "images/arrow transfer.png",
  "images/wallet-check.png",
  "images/ShieldDone.png",
];
const white = [
  "images/Category-white.png",
  "images/Category2-white.png",
  "images/2 User-white.png",
  "images/student-white.png",
  "images/Chat-white.png",
  "images/Upload-white.png",
  "images/medal-white.png",
  "images/Calendar-white.png",
  "images/Bookmark-white.png",
  "images/arrow transfer-white.png",
  "images/wallet-check-white.png",
  "images/ShieldDone.png",
];

let counter = 0;
const main = document.querySelector(".main");
const logo = document.querySelector(".header__nav-logo");

const sections = document.querySelectorAll("section");

const ulWithDropdowns = document.querySelectorAll(".header__nav-dropdown");

$(".header__nav-blocks ul").hide();

function sidebarClickHandler() {
  const sidebarItems = document.querySelectorAll(".header__nav-blocks");

  for (let i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].addEventListener("click", function (e) {
      
      const prevActive = document.querySelector(".active");
      const prevActiveIdx = +prevActive.getAttribute("data-idx");

      // changeBlackSrc(prevActive, black[prevActiveIdx]);

      for (let j = 0; j < sidebarItems.length; j++) {
        sidebarItems[j].classList.remove("active");
      }

      this.classList.add("active");
      const currentIdx = +this.getAttribute("data-idx");

      // changePage(currentIdx);

      hideUl();

      showUl(this);

      // changeWhiteSrc(this, white[currentIdx]);

      if (currentIdx === prevActiveIdx) {
        counter++;
        if (counter === 1) {
          // closeSideBar();
        } else {
          // openSidebar();
          counter = 0;
        }
      }

      if (window.innerWidth <= 650) {
        console.log(nav);
        $(nav).hide();
      }
    });
  }
}

sidebarClickHandler();

function changeBlackSrc(prevTarget, src) {
  const img = prevTarget.querySelector("img");
  img.setAttribute("src", src);
}

function changeWhiteSrc(target, src) {
  const img = target.querySelector("img");
  img.setAttribute("src", src);
}

function closeSideBar() {
  nav.classList.add("hide-sidebar");
  main.style.width = "100%";

  $(".header__nav-blocks").css({
    padding: "19px 15px 19px 20px",
  });

  $(logo).css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  titles.forEach((title) => {
    title.classList.add("hide");
  });
}

function openSidebar() {
  const nav = document.querySelector(".header__nav");
  const titles = document.querySelectorAll(".header__nav-blocks p");

  nav.classList.remove("hide-sidebar");

  titles.forEach((title) => {
    title.classList.remove("hide");
  });

  $(logo).css({
    display: "block",
  });
}

function changePage(idx) {
  Array.from(sections).filter((section) => {
    if (section.getAttribute("data-idx") == idx) {
      section.classList.remove("hide-page");
    } else {
      section.classList.add("hide-page");
    }
  });
}

function showUl(target) {
  const ul = target.querySelector(".header__nav-dropdown");
  if (ul !== null) {
    ul.classList.add("dropdown-active");
    $(ul).show();
  }
}

function hideUl() {
  Array.from(ulWithDropdowns).forEach((ul) => {
    $(ul).hide();
  });
}
