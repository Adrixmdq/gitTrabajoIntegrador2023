class DeviceBreadcrumb{constructor(e){this.breakPoint=991,this.selector=".breadcrumb",this.addGlobalAttributes()}expandButton=()=>{var e=document.createElement("button");return e.textContent="…",e.classList.add("js-ellip","device-breadcrumb__expand-button"),e.dataset.title="Expandir menú",e.setAttribute("aria-hidden",!0),e.setAttribute("aria-label","Expande el menú de miga de pan"),e};closeButton=()=>{var e=document.createElement("button");return e.textContent="Cerrar",e.classList.add("js-close","device-breadcrumb__compress-button"),e.dataset.title="Contraer menú",e.setAttribute("aria-hidden",!0),e.setAttribute("aria-label","Cierra el menú de miga de pan"),e};_removeDeviceHidden=e=>e.forEach(e=>e.classList.add("device-breadcrumb--expanded"));addGlobalAttributes=()=>document.querySelectorAll(this.selector).forEach(e=>{e.classList.add("device-breadcrumb"),e.setAttribute("role","navigation"),e.setAttribute("aria-label","Migas de pan")});_removeExpanded=e=>e.forEach(e=>e.classList.remove("device-breadcrumb--expanded"));isHomeLink=e=>{let t;var r;return"object"==typeof e.firstChild&&null!==e.firstChild&&"getAttribute"in e.firstChild&&(e=e.firstChild.getAttribute("href"),r=new RegExp("(^/$|argentina.gob.ar$|argentina.gob.ar/$)"),t=r.exec(e)),t||!1};_isFirstElementHome=e=>{let r=!1;return e.forEach((e,t)=>{0==t&&(r=this.isHomeLink(e))}),r};isTextItem=e=>"A"!=e.firstChild.tagName&&""!=e.firstChild.textContent;_isLastElementText=e=>{let t;return e.forEach(e=>t=this.isTextItem(e)),t};removeButtons=()=>document.querySelectorAll(".js-ellip, .js-close").forEach(e=>e.remove());_onClickExpandButton=t=>document.querySelectorAll(".js-ellip").forEach(e=>e.addEventListener("click",()=>this._removeDeviceHidden(t)));_onClickCloseButton=t=>document.querySelectorAll(".js-close").forEach(e=>e.addEventListener("click",()=>this._removeExpanded(t)));_isJumbotron=e=>{return!!e.closest(".jumbotron_bar")};_hideBreadcrumb=e=>{e.forEach(e=>{(this._isJumbotron(e)?e.closest(".jumbotron_bar"):e).classList.add("device-breadcrumb__hidden")})};render=e=>{this.removeButtons();var t=document.querySelectorAll(this.selector+" li"),r=document.querySelectorAll(this.selector);const i=t.length,s=this._isLastElementText(t);var a=this._isFirstElementHome(t);const d=s?i-2:i-1;var n=i,n=s?n-1:n;(n=a?n-1:n)<=0?this._hideBreadcrumb(r):(t.forEach((e,t)=>{this.isHomeLink(e)?e.classList.add("device-breadcrumb__hidden-item"):this.isTextItem(e)&&t==i-1?(e.classList.add("device-breadcrumb__hidden-item"),e.setAttribute("aria-current","page")):s&&t==i-2?e.classList.add("device-breadcrumb__last-visible-item"):t<d&&e.classList.add("device-breadcrumb__toggle-item")}),e<=this.breakPoint&&1<n&&((a=t[0]).parentNode.insertBefore(this.expandButton(),a),r.forEach(e=>{e.appendChild(this.closeButton())})),this._onClickExpandButton(r),this._onClickCloseButton(r))}}document.addEventListener("DOMContentLoaded",()=>{(new DeviceBreadcrumb).render(window.innerWidth)}),window.addEventListener("resize",()=>{(new DeviceBreadcrumb).render(window.innerWidth)},!0);