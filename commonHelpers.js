(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function l(e){let s="supply-list-item-amount-wrap";const n=e.name_display.split(" ").slice(0,3).join(" ");return e.is_best&&(s+=" supply-list-item__best"),e.price_key==="50%"&&(s+=" supply-list-item__product_sale"),`
      <li class="supply-list-item">
      <div class="${s}">
      <p class="supply-list-item-amount">$${e.amount}<span class="amount-wrap">/per year</span></p>
      </div>
      <p class="supply-list-item-product">${n}</p>
      <p class="supply-list-item-license">${e.license_name}</p>
      <button class="download-btn" data-link="${e.link}">Download
      <div class="svg-wrapper">
      <svg class="svg-icon" width="18" height="18" aria-label="icon-download">
      <use href="./img/sprite.svg#icon-download"/>
      </svg>
      </div>
      </button>
      </li>
  `}function c(e,s){const n=e.map(i=>l(i)).join("");s.innerHTML=n}function a(e){const s=typeof InstallTrigger<"u",n=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);e.classList.remove("hidden"),n?e.classList.add("arrow-chrome"):s&&e.classList.add("arrow-firefox"),setTimeout(()=>{e.classList.add("hidden")},7e3)}function d(){document.querySelectorAll(".download-btn").forEach(e=>{const s=n=>{const i=n.target.getAttribute("data-link"),t=document.createElement("a");t.href=i,t.download="",t.click(),a(document.getElementById("arrow")),e.removeEventListener("click",s)};e.addEventListener("click",s)})}function u(){fetch("https://veryfast.io/t/front_test_api.php").then(e=>e.json()).then(e=>{console.log(e);const s=document.getElementById("supply-list");c(e.result.elements,s),d()}).catch(e=>console.error("Error fetching products:",e))}document.addEventListener("DOMContentLoaded",()=>{u()});
//# sourceMappingURL=commonHelpers.js.map
