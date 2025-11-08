import{S as c,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=r=>{const o="https://pixabay.com/api/",s="53124504-9ef9dc7d083288085c55b9d9d",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},m=r=>`
    <li class="gallery-card">
      <a href="${r.largeImageURL}">
        <img
          class="gallery-img"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
      <ul class="info">
        <li><b>Likes</b> ${r.likes}</li>
        <li><b>Views</b> ${r.views}</li>
        <li><b>Comments</b> ${r.comments}</li>
        <li><b>Downloads</b> ${r.downloads}</li>
      </ul>
    </li>
  `,i={form:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},d=new c(".js-gallery a",{captionsData:"alt",captionDelay:250});i.form.addEventListener("submit",f);function f(r){r.preventDefault();const o=r.target.elements.user_query.value.trim();if(i.gallery.innerHTML="",!o){n.warning({message:"Please enter a search query before submitting!",position:"topRight"});return}i.loader.classList.add("is-active"),u(o).then(s=>{if(!s.hits.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const a=s.hits.map(e=>m(e)).join("");i.gallery.innerHTML=a,d.refresh()}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{i.loader.classList.remove("is-active"),r.target.reset()})}
//# sourceMappingURL=index.js.map
