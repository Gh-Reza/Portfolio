import mobileMenu from "./menu.js";
import cardInfo from "./data.js";
import {templete1, templete2} from "./templetes.js";

mobileMenu();

const workContainer = document.querySelector(".work-container");

cardInfo.forEach((data, i)=> {
  if(i==0) {
    workContainer.innerHTML += templete1(data, i);
  } else {
    workContainer.innerHTML += templete2(data, i);
  }
});
