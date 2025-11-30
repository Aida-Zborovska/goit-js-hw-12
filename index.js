import{a as g,S as y,i as h}from"./assets/vendor-BTKY1Grq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function L(o,a){const r={key:"53321063-39b236969f2c986560565235a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15};return g.get("https://pixabay.com/api/",{params:r}).then(i=>i.data)}const p=document.querySelector(".loader"),d=document.querySelector(".load-more"),f=document.querySelector(".gallery");let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,overlayOpacity:.8});function v(o){const a=F(o);f.insertAdjacentHTML("beforeend",a),b.refresh()}function w(){f.innerHTML=""}function q(){p.classList.remove("hidden")}function B(){p.classList.add("hidden")}function M(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}function F(o){return o.map($).join("")}function $(o){const{webformatURL:a,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:m}=o;return`<li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img class="gallery-image" src="${a}" alt="${i}" />
    </a>
    <ul class="image-info">
      <li class="info-point">
        <p class="info-point-label">Likes</p>
        <p class="info-point-value">${e}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Views</p>
        <p class="info-point-value">${t}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Comments</p>
        <p class="info-point-value">${n}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Downloads</p>
        <p class="info-point-value">${m}</p>
      </li>
    </ul>
  </li>`}let c,s,u;const l=document.querySelector(".form"),O=document.querySelector(".load-more");l.addEventListener("submit",P);O.addEventListener("click",x);async function P(o){o.preventDefault();const a=l.elements["search-text"].value.trim();if(a){c=a,s=1,S(),w(),q(),l.reset();try{const{hits:r,totalHits:i}=await L(c,s);u=Math.ceil(i/15),u>1&&M(),r.length>0?v(r):C("Sorry, there are no images matching your search query. Please try again!")}catch(r){console.error(r)}B()}}async function x(){s+=1}function C(o){h.show({message:o,position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",maxWidth:"432px"})}
//# sourceMappingURL=index.js.map
