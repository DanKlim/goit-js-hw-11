import{a as p,S as h,i as l}from"./assets/vendor-Bz4lgVUE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="50595861-e3300a20d14d5dbbfabcd1d5e";function y(r){return p.get("https://pixabay.com/api/",{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>{throw console.log("Помилка при запиті:",s),s})}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=new h(".gallery a",{captionsData:"alt",captionDelay:150});function L(r){const s=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
        <li class="gallery-item">
        <a href="${a}" class="gallery-link">
          <div class="thumb">
            <img src="${o}" alt="${e}" class="gallery-img" />
          </div>
          <ul class="info-box">
            <li class="info-item">
              <span class="info-text">Likes</span>
              <span class="info-amount">${t}</span>
            </li>
            <li class="info-item">
              <span class="info-text">Views</span>
              <span class="info-amount">${i}</span>
            </li>
            <li class="info-item">
              <span class="info-text">Comments</span>
              <span class="info-amount">${f}</span>
            </li>
            <li class="info-item">
              <span class="info-text">Downloads</span>
              <span class="info-amount">${d}</span>
            </li>
          </ul>
        </a>
      </li>`).join("");u.insertAdjacentHTML("beforeend",s),b.refresh()}function c(){u.innerHTML=""}function x(){m.classList.remove("is-hidden")}function n(){m.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",v);function v(r){if(r.preventDefault(),x(),c(),r.currentTarget.elements["search-text"].value.trim()===""){n(),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432});return}const s=r.currentTarget.elements["search-text"].value.trim();y(s).then(o=>{if(o.hits.length===0){n(),l.error({title:"Oops!",message:"No images found. Try another search.",position:"topRight"});return}n(),c(),L(o.hits)}).catch(o=>{n(),l.error({position:"topRight",message:o.message,maxWidth:432})})}
//# sourceMappingURL=index.js.map
