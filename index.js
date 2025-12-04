import{a as v,S,i as P}from"./assets/vendor-BTKY1Grq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function m(t,o){const a={key:"53321063-39b236969f2c986560565235a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await v.get("https://pixabay.com/api/",{params:a})).data}const g=document.querySelector(".loader"),h=document.querySelector(".load-more"),y=document.querySelector(".gallery");let q=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,overlayOpacity:.8});function w(t){const o=$(t);y.insertAdjacentHTML("beforeend",o),q.refresh()}function M(){y.innerHTML=""}function L(){g.classList.remove("hidden")}function c(){g.classList.add("hidden")}function O(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}function $(t){return t.map(x).join("")}function x(t){const{webformatURL:o,largeImageURL:a,tags:n,likes:e,views:r,comments:i,downloads:b}=t;return`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img class="gallery-image" src="${o}" alt="${n}" />
    </a>
    <ul class="image-info">
      <li class="info-point">
        <p class="info-point-label">Likes</p>
        <p class="info-point-value">${e}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Views</p>
        <p class="info-point-value">${r}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Comments</p>
        <p class="info-point-value">${i}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Downloads</p>
        <p class="info-point-value">${b}</p>
      </li>
    </ul>
  </li>`}let p,l,d;const f=document.querySelector(".form"),B=document.querySelector(".load-more");f.addEventListener("submit",I);B.addEventListener("click",H);async function I(t){t.preventDefault();const o=f.elements["search-text"].value.trim();if(!o){s("Search query cannot be empty. Please type something in the form","yellow");return}u(),L(),M(),p=o,l=1;try{const{hits:a,totalHits:n}=await m(p,l);if(a.length===0){s("Sorry, there are no images matching your search query. Please try again!"),c();return}d=Math.ceil(n/15),w(a),d>1?O():(u(),s("We're sorry, but you've reached the end of search results")),f.reset()}catch(a){console.error(a),s("Oops! Something went wrong with the API call. Please refresh the page or try again","red")}c()}async function H(){L(),l+=1;try{const{hits:t}=await m(p,l);w(t),T(),l===d&&(u(),s("We're sorry, but you've reached the end of search results"))}catch(t){console.error(t),s("Oops! Something went wrong with the API call. Please refresh the page or try again","red")}c()}function s(t,o){P.show({message:t,position:"topRight",maxWidth:"432px",color:o||"blue"})}function T(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height,a=getComputedStyle(document.querySelector(".gallery")).gap,n=parseInt(a,10),e=o*2+n;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
