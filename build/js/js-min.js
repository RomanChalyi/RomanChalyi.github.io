const listHeaderMenu=document.querySelector("#headerMenu > .header-menu__list");let isBurgerOpen=!1;function animations(){isBurgerOpen?(listHeaderMenu.classList.remove("header-menu__passive"),listHeaderMenu.classList.add("header-menu__activ"),menuItem.classList.add("animation-burger"),menuItem.classList.remove("animation-burger__reverse")):(listHeaderMenu.classList.remove("header-menu__activ"),listHeaderMenu.classList.add("header-menu__passive"),menuItem.classList.remove("animation-burger"),menuItem.classList.add("animation-burger__reverse"))}menuItem.addEventListener("click",()=>{isBurgerOpen?(isBurgerOpen=!1,setTimeout(function(){headerMenu.classList.remove("db"),headerMenu.classList.add("dn")},400)):(isBurgerOpen=!0,setTimeout(function(){headerMenu.classList.remove("dn"),headerMenu.classList.add("db")},400)),animations()});const formText=document.querySelector("#user-message > .form-text"),formEmail=document.querySelector("#user-message > .form-email"),formMessage=document.querySelector("#user-message > .form-message"),warningText=document.querySelector("#user-message > p");form_submission.addEventListener("click",()=>{let e=!1;""===formMessage.value?(formMessage.classList.add("form-style"),warningText.classList.add("form-warning-text"),formMessage.focus()):(formMessage.classList.remove("form-style"),e+=1),""===formEmail.value?(formEmail.classList.add("form-style"),warningText.classList.add("form-warning-text"),formEmail.focus()):(formEmail.classList.remove("form-style"),e+=1),""===formText.value?(formText.classList.add("form-style"),warningText.classList.add("form-warning-text"),formText.focus()):(formText.classList.remove("form-style"),e+=1),e>2&&warningText.classList.remove("form-warning-text")});const closeGallery=document.querySelector(".modal-window-contain > .modal-btn-close"),windowGallery=document.querySelector(".modal-window-gallery");closeGallery.addEventListener("click",()=>{windowGallery.classList.remove("df"),windowGallery.classList.add("g-hidden")});const galleryBtnNext=document.querySelector(".modal-btn-contain > .modal-btn__next"),galleyBtnBack=document.querySelector(".modal-btn-contain > .modal-btn__back"),photoGallery=document.querySelectorAll(".modal-gallery_contain > .works-gallery__item");let countPhoto=0;galleryBtnNext.addEventListener("click",()=>{photoGallery[countPhoto].classList.remove("modal-opacity"),++countPhoto===photoGallery.length&&(countPhoto=0),photoGallery[countPhoto].classList.add("modal-opacity")}),galleyBtnBack.addEventListener("click",()=>{photoGallery[countPhoto].classList.remove("modal-opacity"),--countPhoto<0&&(countPhoto=photoGallery.length-1),photoGallery[countPhoto].classList.add("modal-opacity")});const worksGallery=document.querySelectorAll(".Works-gallery > .works-gallery__item");worksGallery.forEach(e=>{e.addEventListener("click",e=>{windowGallery.classList.remove("g-hidden"),windowGallery.classList.add("df"),photoGallery[countPhoto].classList.remove("modal-opacity"),countPhoto=e.target.getAttribute("data-id")-1,photoGallery[countPhoto].classList.add("modal-opacity")})});const mobileOoenGallery=document.querySelector(".mobile-photo > .mobile-photo-btn");mobileOoenGallery.addEventListener("click",()=>{windowGallery.classList.remove("g-hidden"),windowGallery.classList.add("df")});const servicesIcon=document.querySelectorAll(".services-contain-icon > .services-icon"),servicesText=document.querySelectorAll(".contain-text");servicesIcon.forEach((e,t)=>{e.addEventListener("click",()=>{servicesIcon.forEach(e=>{e.classList.remove("shadow")}),servicesText.forEach(e=>{e.classList.remove("db")}),servicesText[t].classList.add("db"),e.classList.add("shadow")})});const team=document.querySelectorAll(".team-container-item"),teamGradient=document.querySelectorAll(".team-container-gradient > .team-gradient"),teamStatistics=document.querySelectorAll(".team-statistics");team.forEach((e,t)=>{e.addEventListener("click",()=>{teamGradient.forEach(e=>{"team-gradient"!==e.classList.value&&(e.classList.remove("df"),e.classList.add("team-gradient-remove"))}),teamGradient[t].classList.remove("team-gradient-remove"),teamGradient[t].classList.add("df"),teamStatistics.forEach(e=>{e.classList.remove("team-statistic-animation")}),teamStatistics[t].classList.add("team-statistic-animation")})});const stripSkill=document.querySelectorAll(".team-skill"),teamName=document.querySelectorAll(".team-name"),socialNetwork=document.querySelectorAll(".team-name__social-network"),textNameTeam=document.querySelectorAll(".team-name__person");team.forEach((e,t)=>{e.addEventListener("click",()=>{stripSkill.forEach(e=>{e.classList.add("animation-skill")}),teamName.forEach(e=>{e.classList.remove("team-name_active")}),teamName[t].classList.add("team-name_active"),socialNetwork.forEach(e=>{e.classList.remove("df")}),socialNetwork[t].classList.add("df"),textNameTeam.forEach(e=>{e.classList.remove("team-name__person__active")}),textNameTeam[t].classList.add("team-name__person__active")})});let widthClient=document.documentElement.clientWidth;window.addEventListener("resize",()=>{widthClient=document.documentElement.clientWidth});const reviewsBtnBack=document.querySelector(".review-btn-back"),reviewsBtnNext=document.querySelector(".review-btn-next"),reviewClients=document.querySelectorAll(".review-clients"),reviewClider=document.querySelectorAll(".review-slider-item");reviewsBtnNext.addEventListener("click",()=>{if(widthClient>425)for(var e=0;e<reviewClients.length;e+=2){let s=reviewClients[e].classList.value;if(reviewsBtnBack.classList.remove("review-btn__background"),e>=2&&reviewsBtnNext.classList.add("review-btn__background"),e>=4)break;if(-1===s.indexOf("review-next")){for(var t=0;t<reviewClients.length;t+=2)reviewClients[t].classList.remove("review-back");reviewClients[e].classList.add("review-next");break}}else for(e=0;e<reviewClients.length;e++){let s=reviewClients[e].classList.value;if(reviewsBtnBack.classList.remove("review-btn__background"),e>=4&&reviewsBtnNext.classList.add("review-btn__background"),e>=5)break;if(-1===s.indexOf("review-next")){for(t=0;t<reviewClients.length;t++)reviewClients[t].classList.remove("review-back");reviewClients[e].classList.add("review-next");break}}}),reviewsBtnBack.addEventListener("click",()=>{if(widthClient>425)for(var e=0;e<reviewClients.length;e+=2){if(-1===reviewClients[e].classList.value.indexOf("review-next")){if(reviewsBtnNext.classList.remove("review-btn__background"),0===e)break;reviewClients[e-2].classList.value.indexOf("review-next review-back")&&(reviewClients[e-2].classList.remove("review-back"),reviewClients[e-2].classList.remove("review-next")),e<=2&&reviewsBtnBack.classList.add("review-btn__background"),reviewClients[e-2].classList.add("review-back");break}}else for(e=reviewClients.length-1;e>=0;e--){if(-1!==reviewClients[e].classList.value.indexOf("review-clients review-next")){reviewsBtnNext.classList.remove("review-btn__background"),reviewClients[e].classList.remove("review-next"),reviewClients[e].classList.add("review-back"),0===e&&reviewsBtnBack.classList.add("review-btn__background");break}}});let sliderActive=0;reviewsBtnBack.addEventListener("click",()=>{reviewClider[sliderActive].classList.remove("slider-item-active"),(sliderActive-=1)<0&&(sliderActive=0),reviewClider[sliderActive].classList.add("slider-item-active")}),reviewsBtnNext.addEventListener("click",()=>{reviewClider[sliderActive].classList.remove("slider-item-active"),sliderActive+=1,widthClient>425&&sliderActive>2?sliderActive=2:sliderActive>5&&(sliderActive=5),reviewClider[sliderActive].classList.add("slider-item-active")});