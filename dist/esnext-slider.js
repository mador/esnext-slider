!function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(s,n,function(i){return t[i]}.bind(null,n));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=1)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.easeInOutQuart=function(t,i,e,s){return(t/=s/2)<1?e/2*t*t+i:-e/2*(--t*(t-2)-1)+i},i.supportsPassive=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(t){}return t}(),i.supportsHidden=function(){var t=void 0;return void 0!==document.hidden?t={property:"hidden",event:"visibilitychange"}:void 0!==document.msHidden?t={property:"msHidden",event:"msvisibilitychange"}:void 0!==document.webkitHidden&&(t={property:"webkitHidden",event:"webkitvisibilitychange"}),t}()},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();e(2);var r=e(0);function o(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}var a=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),i.node&&i.node instanceof HTMLElement?this.$slider=[i.node]:this.$slider=document.querySelectorAll(i.node?i.node:".slider"),0!==this.$slider.length){if(this.$slider.length>1){var e=[];return[].concat(o(this.$slider)).forEach(function(s){i.node=s,e.push(new t(i))}),e}return this.$slider=this.$slider[0],this.settings={node:void 0,block:"slider",element:{track:"track",slide:"slide",pagination:"pagination",dots:"dots",dot:"dot",button:"button"},modifier:{active:"active",visible:"visible",next:"next",prev:"prev",dot:"dot",clone:"clone",edge:"edge",horizontal:"horizontal",vertical:"vertical",play:"play",pause:"pause",disabled:"disabled"},clones:3,transition:250,ease:r.easeInOutQuart,align:"left",mode:"horizontal",initialSlide:0,slidesToSlide:1,autoplay:{direction:">",mode:"bounce",duration:3800,pauseOnInteraction:!0},swipeToSlide:!0,swipeThreshold:60,dragToSlide:!0,focusOnClick:!0,pagination:!0,prev:!0,next:!0,play:!0,loop:!1,rewind:!1,syncedSliders:[],intersection:{root:this.$slider,rootMargin:"-20px",threshold:0},l10n:{prev:"Previous slide",next:"Next slide",start:"Start autoplay",pause:"Pause autoplay",goto:"Go to slide %d",active:"Go to current slide",nav:"Go to slider pagination"}},this.settings=Object.assign({},this.settings,i),this.$track=!1,this.$pagination=!1,this.$dots=!1,this.$prev=!1,this.$next=!1,this.$play=!1,this.trackSize=0,this.referenceSize=0,this.$$clones=[],this.$$slides=[],this.$$slidesAndClones=[],this.currentSlide=!1,this.fps={then:0,interval:1e3/24,tolerance:.1},this.slideAnimation={then:0,start:0,distance:0,calculated:0,transition:0,rafId:null},this.intersectionObserver=null,this.settings.play&&(this.autoplay={play:!1!==this.settings.play,stop:!1,direction:this.settings.autoplay.direction,timeout:null}),this.drag={active:!1,dragging:!1,disableFocusOnClick:!1,start:0,distance:0,track:0},this.onArrowKeys=this.onArrowKeys.bind(this),this.onResize=this.onResize.bind(this),this.onEdgeJump=this.onEdgeJump.bind(this),this.onTransitionEnd=this.onTransitionEnd.bind(this),this.onIntersection=this.onIntersection.bind(this),this.onSlide=this.onSlide.bind(this),this.onSlideClick=this.onSlideClick.bind(this),this.onDragStart=this.onDragStart.bind(this),this.onDrag=this.onDrag.bind(this),this.onDragEnd=this.onDragEnd.bind(this),this.onDragSlideEnd=this.onDragSlideEnd.bind(this),this.onAutoplay=this.onAutoplay.bind(this),this.onToggleAutoplay=this.onToggleAutoplay.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.to=this.to.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),this.init=this.init.bind(this),this.destroy=this.destroy.bind(this),this.public={$$slides:this.$$slides,settings:this.settings,to:this.to,prev:this.prev,next:this.next,reInit:this.init,destroy:this.destroy},this.$slider.slider=this.public,this.init(),this.public}}return n(t,[{key:"__element",value:function(t){return this.settings.block+"__"+this.settings.element[t]}},{key:"__initElement",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div";this["$"+t]=this.$slider.querySelector("."+this.__element(t)),this["$"+t]||(this["$"+t]=document.createElement(i),this["$"+t].classList.add(this.__element(t)))}},{key:"__initSlides",value:function(){var t=this;[].concat(o(this.$slider.querySelectorAll("."+this.__element("slide")))).forEach(function(i){t.trackSize+=i[t.__offsetSize()],i.style[t.__size()]=i[t.__offsetSize()]+"px",i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden",!0),i.setAttribute("data-slide",t.$$slides.length),t.$track.appendChild(i),t.$$slides.push(i),t.$$slidesAndClones.push(i)})}},{key:"__initClones",value:function(){for(var t=this.$$slides.length,i=0;i<this.settings.clones;i++)this.__initClone(this.$$slides[i%t]),this.__initClone(this.$$slides[Math.abs(t-(i+1))%t],"prepend")}},{key:"__initClone",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"appendChild";this.trackSize+=t[this.__offsetSize()];var e=t.cloneNode(!0),s=parseInt(this.$$clones.length/2,10);e.classList.add(this.__element("slide")+"--"+this.settings.modifier.clone),e.setAttribute("data-slide","appendChild"===i?this.$$slides.length+s:-1-s),this.currentSlide=-1-s,this.$track[i](e),this.$$clones.push(e),this.$$slidesAndClones["appendChild"===i?"push":"unshift"](e)}},{key:"__resetTrackSize",value:function(){this.trackSize=0,this.$track.style[this.__size()]=null,this.$track.style.display="block"}},{key:"__setTrackSize",value:function(t){this.$track.style.display=null,this.$track.style[this.__size()]=this.trackSize+"px",this.referenceSize=t}},{key:"__offsetSize",value:function(){return"horizontal"===this.settings.mode?"offsetWidth":"offsetHeight"}},{key:"__offsetDirection",value:function(){return"horizontal"===this.settings.mode?"offsetLeft":"offsetTop"}},{key:"__size",value:function(){return"horizontal"===this.settings.mode?"width":"height"}},{key:"__axis",value:function(){return"horizontal"===this.settings.mode?"X":"Y"}},{key:"onIntersection",value:function(t,i){var e=this;t.forEach(function(t){t.isIntersecting?e.__changeVisibility(t.target):e.__changeVisibility(t.target,"remove")})}},{key:"__initObserver",value:function(){var t=this;this.intersectionObserver=new IntersectionObserver(this.onIntersection,this.settings.intersection),[].concat(o(this.$$slidesAndClones)).forEach(function(i){t.intersectionObserver.observe(i)})}},{key:"__initSwipeToSlide",value:function(){this.settings.swipeToSlide&&(this.$slider.addEventListener("touchstart",this.onDragStart,!!r.supportsPassive&&{passive:!0}),this.$slider.addEventListener("touchmove",this.onDrag,!!r.supportsPassive&&{passive:!0}),this.$slider.addEventListener("touchend",this.onDragEnd))}},{key:"__initDragToSlide",value:function(){this.settings.dragToSlide&&(this.$slider.addEventListener("mousedown",this.onDragStart),this.$slider.addEventListener("mousemove",this.onDrag),this.$slider.addEventListener("mouseup",this.onDragEnd),document.documentElement.addEventListener("mouseout",this.onDragEnd))}},{key:"__initFocusOnClick",value:function(){var t=this;this.settings.focusOnClick&&[].concat(o(this.$$slidesAndClones)).forEach(function(i){i.addEventListener("click",t.onSlideClick)})}},{key:"__initAutoplay",value:function(){var t=this;if(this.settings.play){this.onAutoplay(!1),this.settings.autoplay.pauseOnInteraction&&(this.$track.addEventListener("mouseenter",this.onToggleAutoplay),this.$track.addEventListener("mouseleave",this.onToggleAutoplay)),r.supportsHidden&&document.addEventListener(r.supportsHidden.event,this.onVisibilityChange,!1),this.__initPaginationItem("button","button",this.$slider,this.settings.modifier.play);var i=this.__element("button")+"--"+this.settings.modifier.play,e=this.__element("button")+"--"+this.settings.modifier.pause,s=this.settings.block+"--"+this.settings.modifier.pause;this.$play.classList.add(this.__element("button"),i),this.$play.title=this.settings.l10n.pause,this.$play.addEventListener("click",function(){t.autoplay.stop=!t.autoplay.stop,t.autoplay.stop?(t.$play.classList.add(e),t.$play.classList.remove(i),t.$play.title=t.settings.l10n.start):(t.$play.classList.add(i),t.$play.classList.remove(e),t.$play.title=t.settings.l10n.pause),t.__resetAutoplay()}),this.$slider.addEventListener("pause",function(){t.$slider.classList.add(s),t.$play.classList.add(e),t.$play.classList.remove(i)}),this.$slider.addEventListener("play",function(){t.$slider.classList.remove(s),t.$play.classList.add(i),t.$play.classList.remove(e)})}}},{key:"__initPaginationItem",value:function(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=s||t;if(this.settings[n]instanceof HTMLElement)this["$"+n]=this.settings[n];else{var r=this.__element(t)+(s?"--"+s:"");this["$"+n]=e.querySelector("."+r),this["$"+n]||(this["$"+n]=document.createElement(i),this.settings.l10n[n]&&(this["$"+n].title=this.settings.l10n[n]),e["pagination"===n?"prepend":"appendChild"](this["$"+n]))}}},{key:"__setActiveDot",value:function(t){var i=this.__element("dot")+"--"+this.settings.modifier.active,e=this.$dots.querySelector("."+i);e&&e.classList.remove(i),t&&t.classList.add(i)}},{key:"__initPagination",value:function(){var t=this;if(this.settings.pagination||this.settings.prev||this.settings.next){this.__initPaginationItem("pagination","nav",this.$slider),this.$pagination.classList.add(this.__element("pagination"));var i=this.__element("button")+"--"+this.settings.modifier.disabled;if(this.settings.prev&&(this.__initPaginationItem("button","button",this.$pagination,this.settings.modifier.prev),this.$prev.classList.add(""+this.__element("button"),this.__element("button")+"--"+this.settings.modifier.prev),this.$prev.addEventListener("click",this.prev),this.$slider.addEventListener("afterslide",function(e){t.settings.rewind||t.settings.loop||0!==e.detail.current?t.$prev.classList.remove(i):t.$prev.classList.add(i)})),this.settings.pagination){this.__initPaginationItem("dots","ol",this.$pagination),this.$dots.classList.add(""+this.__element("dots"));this.__element("dot"),this.settings.modifier.active;[].concat(o(this.$$slides)).forEach(function(i,e){var s=document.createElement("li");s.classList.add(t.__element("dot")),e===t.settings.initialSlide&&t.__setActiveDot(s),t.$dots.appendChild(s);var n=document.createElement("button");n.classList.add(""+t.__element("button"),t.__element("button")+"--"+t.settings.modifier.dot),n.title=t.settings.l10n.goto.replace("%d",e+1),s.appendChild(n),n.addEventListener("click",function(){t.__setActiveDot(s),t.to(e)})}),this.$slider.addEventListener("afterslide",function(i){t.__setActiveDot([].concat(o(t.$dots.children))[i.detail.current])}),this.$slider.addEventListener("beforeslide",function(i){t.__setActiveDot(i.detail.next?[].concat(o(t.$dots.children))[i.detail.next]:null)})}this.settings.next&&(this.__initPaginationItem("button","button",this.$pagination,this.settings.modifier.next),this.$next.classList.add(""+this.__element("button"),this.__element("button")+"--"+this.settings.modifier.next),this.$next.addEventListener("click",this.next),this.$slider.addEventListener("afterslide",function(e){t.settings.rewind||t.settings.loop||e.detail.current!==t.$$slides.length-1?t.$next.classList.remove(i):(console.log(t.settings.rewind),t.$next.classList.add(i))}))}}},{key:"__initKeyboard",value:function(){this.$slider.addEventListener("keydown",this.onArrowKeys)}},{key:"onArrowKeys",value:function(t){var i=null;37!==t.keyCode&&38!==t.keyCode||(i=-1*this.settings.slidesToSlide),39!==t.keyCode&&40!==t.keyCode||(i=this.settings.slidesToSlide),this.__slide(i)}},{key:"init",value:function(){this.$slider.dispatchEvent(new CustomEvent("init",{detail:{slider:this,current:this.currentSlide}})),window.addEventListener("resize",this.onResize),this.__initElement("track"),this.$track.setAttribute("aria-live","polite"),this.$slider.appendChild(this.$track),this.$slider.classList.remove(this.settings.block+"--"+this.settings.modifier.disabled),this.$slider.classList.add(this.settings.block+"--"+this.settings.modifier[this.settings.mode],this.settings.block+"--"+this.settings.modifier.active),this.__resetTrackSize(),this.__initSlides(),this.$$slides.length<1?this.destroy():this.settings.loop&&this.__initClones(),this.__setTrackSize(this.$slider[this.__offsetSize()]),this.__initPagination(),this.__initObserver(),this.__initSwipeToSlide(),this.__initDragToSlide(),this.__initFocusOnClick(),this.__initAutoplay(),this.__initKeyboard();var t=this.settings.loop?this.settings.clones+this.settings.initialSlide:this.settings.initialSlide;return this.$track.addEventListener("slideend",this.onTransitionEnd),this.__slide(t,!1),this.public}},{key:"__slide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null!==t){var e=this.currentSlide+t,s=this.$$slides.length-1;this.settings.rewind&&!this.settings.loop&&(e<0?(e=s,t=s):e>s&&(e=0,t=-s));var n=this.$track.querySelector('[data-slide="'+e+'"]');if(n){var r=e<0||e>s;if(i){r&&this.$track.addEventListener("slideend",this.onEdgeJump);var o=this.__relativeSlide(e);this.slideAnimation.transition=this.settings.transition*Math.abs(t),this.$slider.dispatchEvent(new CustomEvent("beforeslide",{detail:{slider:this,current:this.currentSlide,next:o,isEdgeSlide:r}}))}this.__setActiveSlide(e),this.__slideDistance(this.__offsetByAlignment(n[this.__offsetDirection()]),i?this.settings.transition*Math.abs(t):0)}}}},{key:"__setActiveSlide",value:function(t){this.currentSlide=t;var i=this.$slider.querySelector('[data-slide="'+t+'"]');if(i){var e=this.__element("slide")+"--"+this.settings.modifier.active,s=this.$slider.querySelector("."+e);s&&s.classList.remove(e),i.classList.add(e)}}},{key:"__slideEnd",value:function(){this.slideAnimation.start=parseInt(this.slideAnimation.start+this.slideAnimation.distance,10),this.$track.style.transform="translate"+this.__axis()+"("+this.slideAnimation.start+"px)",this.__resetAutoplay(),this.slideAnimation.transition>0&&(this.$track.dispatchEvent(new CustomEvent("slideend")),this.slideAnimation.transition=0)}},{key:"__slideDistance",value:function(t,i){if(t=this.__applyMinMaxDistance(t),this.slideAnimation.then=this.slideAnimation.time=performance.now(),this.slideAnimation.distance=t-this.slideAnimation.start,this.slideAnimation.transition=i,0===i)return this.__slideEnd();this.onSlide()}},{key:"__applyMinMaxDistance",value:function(t){if(!this.settings.loop&&"center"!==this.settings.align){if(t>0)return 0;var i=-1*(this.$track[this.__offsetSize()]-this.$slider[this.__offsetSize()]);if(t<i)return i}return t}},{key:"onSlide",value:function(){var t=performance.now(),i=t-this.slideAnimation.then;if(i>=this.fps.interval-this.fps.tolerance){if(this.slideAnimation.then+=i,this.slideAnimation.calculated=this.settings.ease(t-this.slideAnimation.time,this.slideAnimation.start,this.slideAnimation.distance,this.slideAnimation.transition),t-this.slideAnimation.time>=this.slideAnimation.transition)return cancelAnimationFrame(this.slideAnimation.rafId),this.__slideEnd();this.$track.style.transform="translate"+this.__axis()+"("+parseInt(this.slideAnimation.calculated,10)+"px)"}this.slideAnimation.rafId=requestAnimationFrame(this.onSlide)}},{key:"__offsetByAlignment",value:function(t){var i=this.settings.align,e=this.$track.querySelector('[data-slide="'+this.currentSlide+'"]');return"left"===i||"top"===i?-1*t:"center"===i?-1*t+(this.$slider[this.__offsetSize()]/2-e[this.__offsetSize()]/2):"right"===i||"bottom"===i?-1*t+(this.$slider[this.__offsetSize()]-e[this.__offsetSize()]):void 0}},{key:"__changeVisibility",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add",e=this.__element("slide")+"--"+this.settings.modifier.visible;t&&(t.classList[i](e),t.setAttribute("aria-hidden","add"!==i),t.setAttribute("tabindex","add"===i?0:-1))}},{key:"__relativeSlide",value:function(t){var i=parseInt(this.$$clones.length/this.$$slides.length,10)+1;return(t+this.$$slides.length*i)%this.$$slides.length}},{key:"to",value:function(t){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.currentSlide===t)return this.public;var e=-1*(this.currentSlide-t);return this.__slide(e,i),this.__stopAutoplay(),this.public}},{key:"next",value:function(){return this.__slide(this.settings.slidesToSlide),this.__stopAutoplay(),this.public}},{key:"prev",value:function(){return this.__slide(-this.settings.slidesToSlide),this.__stopAutoplay(),this.public}},{key:"onResize",value:function(){var t=this,i=performance.now(),e=i-this.fps.then;if(e>=this.fps.interval-this.fps.tolerance){this.fps.then=i-e%this.fps.interval;var s=this.$slider[this.__offsetSize()];if(s===this.referenceSize)return;this.__resetTrackSize(),this.$$slidesAndClones.forEach(function(i){return t.__resizeSlide(i)}),this.__setTrackSize(s),this.__slide(0,!1)}}},{key:"__resizeSlide",value:function(t){t.style[this.__size()]=null;var i=t[this.__offsetSize()];this.trackSize+=i,t.style[this.__size()]=i+"px"}},{key:"onEdgeJump",value:function(){this.$track.removeEventListener("slideend",this.onEdgeJump),this.__edgeJump()}},{key:"__edgeJump",value:function(){var t=this;this.$slider.dispatchEvent(new CustomEvent("edgejump",{detail:{slider:this,direction:this.currentSlide<0?"<":">"}}));var i=this.__element("track")+"--"+this.settings.modifier.edge;this.$track.classList.add(i);var e=parseInt(Math.abs(this.currentSlide<0?this.currentSlide+1:this.currentSlide-1)/this.$$slides.length,10)+1,s=this.currentSlide<0?this.$$slides.length:-this.$$slides.length;s*=e;var n=this.__element("slide")+"--"+this.settings.modifier.visible;this.$$slidesAndClones.reduce(function(t,i){return i.classList.contains(n)&&t.push(i),t},[]).forEach(function(i){var e=parseInt(i.dataset.slide,10),n=t.$slider.querySelector('[data-slide="'+(e+s)+'"]');n&&n.classList.add(t.__element("slide")+"--"+t.settings.modifier.visible)}),this.__slide(s,!1),setTimeout(function(){t.$track.classList.remove(i)},0)}},{key:"onTransitionEnd",value:function(){var t=this.currentSlide<0||this.currentSlide>=this.$$slides.length;this.$slider.dispatchEvent(new CustomEvent("afterslide",{detail:{slider:this,current:this.__relativeSlide(this.currentSlide),isEdgeSlide:t}}))}},{key:"onDragStart",value:function(){this.drag.active=!0,this.drag.start=!1,this.drag.distance=0,this.drag.track=parseInt(this.$track.style.transform.replace(/[^-\d.]/g,""),10)}},{key:"onDrag",value:function(t){if(this.drag.active){var i="screen"+this.__axis();"object"===s(t.touches)&&t.touches.length>0&&(t[i]=t.touches[0][i]),!1===this.drag.start&&(this.drag.start=t[i],this.__stopAutoplay(),this.$slider.dispatchEvent(new CustomEvent("beforeslide",{detail:{slider:this,current:this.currentSlide,next:null,isEdgeSlide:null}}))),this.drag.distance=this.drag.start-t[i],(Math.abs(this.drag.distance)>=this.settings.swipeThreshold||this.drag.dragging)&&(this.$track.style.transform="translate"+this.__axis()+"("+(this.drag.track-this.drag.distance)+"px)",this.drag.dragging=!0,this.drag.disableFocusOnClick=!0)}}},{key:"onDragEnd",value:function(){var t=this;if(this.drag.active=!1,this.drag.dragging){this.drag.dragging=!1,this.slideAnimation.start=this.drag.track-this.drag.distance;var i=this.drag.distance>0,e=!1,s=!1;if(this.$$slidesAndClones.forEach(function(n){if(!i||!1===e){var r=t.__currentSlideOffset(n);i&&t.slideAnimation.start>r?e=r:!i&&t.slideAnimation.start<r&&(e=r,s=t.currentSlide)}}),!1!==s)this.currentSlide=s;else if(!1===e){var n=void 0;n=i?this.$$slidesAndClones[this.$$slidesAndClones.length-1]:this.$$slidesAndClones[0],e=this.__currentSlideOffset(n)}return this.__setActiveSlide(this.currentSlide),this.$track.addEventListener("slideend",this.onDragSlideEnd),this.__slideDistance(e,this.settings.transition),!1}}},{key:"onDragSlideEnd",value:function(){this.$track.removeEventListener("slideend",this.onDragSlideEnd);var t=this.currentSlide<0||this.currentSlide>this.$$slides.length-1;this.__resetAutoplay(),t&&this.__edgeJump()}},{key:"onSlideClick",value:function(t){if(this.drag.disableFocusOnClick)this.drag.disableFocusOnClick=!1;else{var i=parseInt(t.currentTarget.dataset.slide,10);this.to(i)}}},{key:"__currentSlideOffset",value:function(t){return this.currentSlide=parseInt(t.dataset.slide,10),this.__offsetByAlignment(t[this.__offsetDirection()])}},{key:"__stopAutoplay",value:function(){this.settings.play&&clearTimeout(this.autoplay.timeout)}},{key:"__resetAutoplay",value:function(){this.settings.play&&(clearTimeout(this.autoplay.timeout),this.autoplay.play&&!this.autoplay.stop&&this.onAutoplay(!1))}},{key:"onAutoplay",value:function(){if(!(arguments.length>0&&void 0!==arguments[0])||arguments[0]){var t=">"===this.autoplay.direction?this.settings.slidesToSlide:-1*this.settings.slidesToSlide;"rewind"===this.settings.autoplay.mode&&(this.currentSlide+t<0?t+=this.$$slides.length:this.currentSlide+t>this.$$slides.length-1&&(t-=this.$$slides.length)),"bounce"===this.settings.autoplay.mode&&(this.currentSlide+t<0?(this.autoplay.direction=">",t*=-1):this.currentSlide+t>this.$$slides.length-1&&(this.autoplay.direction="<",t*=-1)),this.__slide(t)}this.autoplay.timeout=setTimeout(this.onAutoplay,this.settings.autoplay.duration)}},{key:"onToggleAutoplay",value:function(t){"click"===t.type.toLowerCase()?(this.autoplay.play=this.autoplay.stop=!this.autoplay.stop,this.autoplay.stop&&this.__stopAutoplay()):this.autoplay.stop||(this.autoplay.play=!this.autoplay.play,this.$slider.dispatchEvent(new CustomEvent(this.autoplay.play?"play":"pause"))),this.__resetAutoplay()}},{key:"onVisibilityChange",value:function(){document[r.supportsHidden.property]?this.autoplay.stop=!0:this.autoplay.stop=!1,this.__resetAutoplay()}},{key:"destroy",value:function(){var t=this;this.autoplay&&(this.autoplay.stop=!0,clearTimeout(this.autoplay.timeout),this.$play.parentNode.removeChild(this.$play)),this.$track.style.transform="translate(0,0)",this.$track.style[this.__size()]=null,this.$$slides.forEach(function(i){i.classList.remove(t.__element("slide")+"--"+t.settings.modifier.active),i.removeAttribute("style"),i.removeAttribute("tabindex"),i.removeAttribute("aria-hidden"),i.removeAttribute("data-slide")}),this.$$clones.forEach(function(t){return t.remove()}),this.$pagination.parentNode.removeChild(this.$pagination),window.removeEventListener("resize",this.onResize),r.supportsHidden&&document.removeEventListener(r.supportsHidden.event,this.onVisibilityChange,!1),this.$slider.classList.add(this.settings.block+"--"+this.settings.modifier.disabled),this.$prev=this.$next=this.$dots=this.$track=this.$pagination=!1,this.$$slidesAndClones=[],this.$$slides=[],this.$$clones=[],this.$slider.classList.remove(this.settings.block+"--"+this.settings.modifier.active);var i=this.$slider.cloneNode(!0);return this.$slider.dispatchEvent(new CustomEvent("destroy",{detail:{slider:this,$slider:i}})),this.$slider.parentNode.replaceChild(i,this.$slider),this.$slider===this.settings.intersection.root&&(this.settings.intersection.root=i),this.settings.node=this.$slider=i,this.public}}]),t}();i.default=a},function(t,i,e){"use strict";!function(t,i){if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var e=[];n.prototype.THROTTLE_TIMEOUT=100,n.prototype.POLL_INTERVAL=null,n.prototype.USE_MUTATION_OBSERVER=!0,n.prototype.observe=function(t){if(!this._observationTargets.some(function(i){return i.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},n.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(i){return i.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},n.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},n.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},n.prototype._initThresholds=function(t){var i=t||[0];return Array.isArray(i)||(i=[i]),i.sort().filter(function(t,i,e){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==e[i-1]})},n.prototype._parseRootMargin=function(t){var i=(t||"0px").split(/\s+/).map(function(t){var i=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!i)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(i[1]),unit:i[2]}});return i[1]=i[1]||i[0],i[2]=i[2]||i[0],i[3]=i[3]||i[1],i},n.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(i,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(i,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},n.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(t,"resize",this._checkForIntersections,!0),o(i,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},n.prototype._checkForIntersections=function(){var i=this._rootIsInDom(),e=i?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(n){var r=n.element,o=l(r),a=this._rootContainsTarget(r),h=n.entry,d=i&&a&&this._computeTargetAndRootIntersection(r,e),c=n.entry=new s({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:o,rootBounds:e,intersectionRect:d});h?i&&a?this._hasCrossedThreshold(h,c)&&this._queuedEntries.push(c):h&&h.isIntersecting&&this._queuedEntries.push(c):this._queuedEntries.push(c)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},n.prototype._computeTargetAndRootIntersection=function(e,s){if("none"!=t.getComputedStyle(e).display){for(var n=l(e),r=d(e),o=!1;!o;){var h=null,c=1==r.nodeType?t.getComputedStyle(r):{};if("none"==c.display)return;if(r==this.root||r==i?(o=!0,h=s):r!=i.body&&r!=i.documentElement&&"visible"!=c.overflow&&(h=l(r)),h&&!(n=a(h,n)))break;r=d(r)}return n}},n.prototype._getRootRect=function(){var t;if(this.root)t=l(this.root);else{var e=i.documentElement,s=i.body;t={top:0,left:0,right:e.clientWidth||s.clientWidth,width:e.clientWidth||s.clientWidth,bottom:e.clientHeight||s.clientHeight,height:e.clientHeight||s.clientHeight}}return this._expandRectByRootMargin(t)},n.prototype._expandRectByRootMargin=function(t){var i=this._rootMarginValues.map(function(i,e){return"px"==i.unit?i.value:i.value*(e%2?t.width:t.height)/100}),e={top:t.top-i[0],right:t.right+i[1],bottom:t.bottom+i[2],left:t.left-i[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},n.prototype._hasCrossedThreshold=function(t,i){var e=t&&t.isIntersecting?t.intersectionRatio||0:-1,s=i.isIntersecting?i.intersectionRatio||0:-1;if(e!==s)for(var n=0;n<this.thresholds.length;n++){var r=this.thresholds[n];if(r==e||r==s||r<e!=r<s)return!0}},n.prototype._rootIsInDom=function(){return!this.root||h(i,this.root)},n.prototype._rootContainsTarget=function(t){return h(this.root||i,t)},n.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},n.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},t.IntersectionObserver=n,t.IntersectionObserverEntry=s}function s(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var i=this.boundingClientRect,e=i.width*i.height,s=this.intersectionRect,n=s.width*s.height;this.intersectionRatio=e?n/e:this.isIntersecting?1:0}function n(t,i){var e=i||{};if("function"!=typeof t)throw new Error("callback must be a function");if(e.root&&1!=e.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,i){var e=null;return function(){e||(e=setTimeout(function(){t(),e=null},i))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(e.rootMargin),this.thresholds=this._initThresholds(e.threshold),this.root=e.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,i,e,s){"function"==typeof t.addEventListener?t.addEventListener(i,e,s||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+i,e)}function o(t,i,e,s){"function"==typeof t.removeEventListener?t.removeEventListener(i,e,s||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+i,e)}function a(t,i){var e=Math.max(t.top,i.top),s=Math.min(t.bottom,i.bottom),n=Math.max(t.left,i.left),r=Math.min(t.right,i.right),o=r-n,a=s-e;return o>=0&&a>=0&&{top:e,bottom:s,left:n,right:r,width:o,height:a}}function l(t){var i;try{i=t.getBoundingClientRect()}catch(t){}return i?(i.width&&i.height||(i={top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.right-i.left,height:i.bottom-i.top}),i):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,i){for(var e=i;e;){if(e==t)return!0;e=d(e)}return!1}function d(t){var i=t.parentNode;return i&&11==i.nodeType&&i.host?i.host:i}}(window,document)}]);