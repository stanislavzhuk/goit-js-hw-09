!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!1,t.disabled=!0})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(n),n=null}))}();
//# sourceMappingURL=01-color-switcher.fe223cae.js.map
