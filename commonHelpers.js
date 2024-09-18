(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const l="/test-task-banner/assets/sprite-5332761c.svg";function c(e){let s="supply-list-item-amount-wrap";const o=e.name_display.split(" ").slice(0,3).join(" ");return e.is_best&&(s+=" supply-list-item__best"),e.price_key==="50%"&&(s+=" supply-list-item__product_sale"),`
      <li class="supply-list-item">
      <div class="${s}">
      <p class="supply-list-item-amount">$${e.amount}<span class="amount-wrap">/per year</span></p>
      </div>
      <p class="supply-list-item-product">${o}</p>
      <p class="supply-list-item-license">${e.license_name}</p>
      <button class="download-btn" data-link="${e.link}">Download
      <div class="svg-wrapper">
      <svg class="svg-icon" width="18" height="18" aria-label="icon-download">
      <use href="${l}#icon-download"/>
      </svg>
      </div>
      </button>
      </li>
  `}function a(e,s){const o=e.map(r=>c(r)).join("");s.innerHTML=o}function d(e){const s=typeof InstallTrigger<"u",o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);e.classList.remove("hidden"),o?e.classList.add("arrow-chrome"):s&&e.classList.add("arrow-firefox"),setTimeout(()=>{e.classList.add("hidden")},7e3)}function u(){document.querySelectorAll(".download-btn").forEach(e=>{const s=o=>{const r=o.target.getAttribute("data-link"),t=document.createElement("a");t.href=r,t.download="",t.click(),d(document.getElementById("arrow")),e.removeEventListener("click",s)};e.addEventListener("click",s)})}function p(){fetch("https://veryfast.io/t/front_test_api.php").then(e=>e.json()).then(e=>{console.log(e);const s=document.getElementById("supply-list");a(e.result.elements,s),u()}).catch(e=>console.error("Error fetching products:",e))}document.addEventListener("DOMContentLoaded",()=>{p()});
//# sourceMappingURL=commonHelpers.js.map
