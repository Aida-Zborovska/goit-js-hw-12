import{a as S,S as q,i as M}from"./assets/vendor-BTKY1Grq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function d(e,o){const n={key:"53321063-39b236969f2c986560565235a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return S.get("https://pixabay.com/api/",{params:n}).then(a=>a.data)}const p=document.querySelector(".loader"),f=document.querySelector(".load-more"),m=document.querySelector(".gallery");let P=new q(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,overlayOpacity:.8});function g(e){const o=x(e);m.insertAdjacentHTML("beforeend",o),P.refresh()}function O(){m.innerHTML=""}function y(){p.classList.remove("hidden")}function h(){p.classList.add("hidden")}function $(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}function x(e){return e.map(B).join("")}function B(e){const{webformatURL:o,largeImageURL:n,tags:a,likes:t,views:r,comments:i,downloads:w}=e;return`<li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img class="gallery-image" src="${o}" alt="${a}" />
    </a>
    <ul class="image-info">
      <li class="info-point">
        <p class="info-point-label">Likes</p>
        <p class="info-point-value">${t}</p>
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
        <p class="info-point-value">${w}</p>
      </li>
    </ul>
  </li>`}let l,s,c;const u=document.querySelector(".form"),H=document.querySelector(".load-more"),I=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&L("We're sorry, but you've reached the end of search results")})});u.addEventListener("submit",E);H.addEventListener("click",T);async function E(e){e.preventDefault();const o=u.elements["search-text"].value.trim();if(o){b(),O(),y(),l=o,s=1,u.reset();try{const{hits:n,totalHits:a}=await d(l,s);c=Math.ceil(a/15),n.length>0?g(n):L("Sorry, there are no images matching your search query. Please try again!"),c>1&&$(),v()}catch(n){console.error(n)}h()}}async function T(){y(),s+=1;try{const{hits:e}=await d(l,s);g(e),v(),C()}catch(e){console.error(e)}h()}function L(e){M.show({message:e,position:"topRight",maxWidth:"432px",color:"blue"})}function C(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height,n=getComputedStyle(document.querySelector(".gallery")).gap,a=parseInt(n,10),t=o*2+a;window.scrollBy({top:t,behavior:"smooth"})}function v(){if(s!==c)return;b();const e=document.querySelector(".gallery .gallery-item:last-child");I.observe(e)}
//# sourceMappingURL=index.js.map
