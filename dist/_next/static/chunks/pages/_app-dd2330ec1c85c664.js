(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8397)}])},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",l="restore",a="server-patch",u="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=n._(r(3935)),a=n._(r(9201)),u=r(3914),s=r(5494),c=r(869);r(1905);let f=r(1823),d=n._(r(4545)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:a,decoding:u,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:g,fill:m,onLoadRef:h,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:y,onLoad:x,onError:_,...w}=e;return i.default.createElement("img",{...w,...getDynamicProps(f),loading:p,width:a,height:l,decoding:u,"data-nimg":m?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&handleLoading(e,d,h,v,b,g))},[r,d,h,v,b,_,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,d,h,v,b,g)},onError:e=>{y(!0),"empty"!==d&&b(!0),_&&_(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let m=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let h=(0,i.useRef)(a);(0,i.useEffect)(()=>{h.current=a},[a]);let[v,b]=(0,i.useState)(!1),[y,x]=(0,i.useState)(!1),{props:_,meta:w}=(0,u.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:v,showAltText:y});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{..._,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:x,ref:t}),w.priority?i.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(8754),o=n._(r(7294)),i=r(4450),l=r(2227),a=r(4364),u=r(109),s=r(3607),c=r(1823),f=r(9031),d=r(920),p=r(30),g=r(7192),m=r(7498),h=new Set;function prefetch(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:v,prefetch:b=null,passHref:y,replace:x,shallow:_,scroll:w,locale:j,onClick:P,onMouseEnter:S,onTouchStart:E,legacyBehavior:C=!1,...O}=e;r=v,C&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=o.default.useContext(c.RouterContext),N=o.default.useContext(f.AppRouterContext),R=null!=I?I:N,M=!I,z=!1!==b,k=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:L,as:A}=o.default.useMemo(()=>{if(!I){let e=formatStringOrUrl(a);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,i.resolveHref)(I,a,!0);return{href:e,as:h?(0,i.resolveHref)(I,h):t||e}},[I,a,h]),T=o.default.useRef(L),D=o.default.useRef(A);C&&(n=o.default.Children.only(r));let U=C?n&&"object"==typeof n&&n.ref:t,[F,B,H]=(0,d.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(D.current!==A||T.current!==L)&&(H(),D.current=A,T.current=L),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[A,U,L,H,F]);o.default.useEffect(()=>{R&&B&&z&&prefetch(R,L,A,{locale:j},{kind:k},M)},[A,L,B,j,z,null==I?void 0:I.locale,R,M,k]);let q={ref:G,onClick(e){C||"function"!=typeof P||P(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,i,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,R,L,A,x,_,w,j,M,z)},onMouseEnter(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(z||!M)&&prefetch(R,L,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:k},M)},onTouchStart(e){C||"function"!=typeof E||E(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(z||!M)&&prefetch(R,L,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:k},M)}};if((0,u.isAbsoluteUrl)(A))q.href=A;else if(!C||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(A,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);q.href=t||(0,g.addBasePath)((0,s.addLocale)(A,e,null==I?void 0:I.defaultLocale))}return C?o.default.cloneElement(n,q):o.default.createElement("a",{...O,...q},r)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),i="function"==typeof IntersectionObserver,l=new Map,a=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let n=r(2393),o=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let i,l,a,{src:u,sizes:s,unoptimized:c=!1,priority:f=!1,loading:d,className:p,quality:g,width:m,height:h,fill:v=!1,style:b,onLoad:y,onLoadingComplete:x,placeholder:_="empty",blurDataURL:w,fetchPriority:j,layout:P,objectFit:S,objectPosition:E,lazyBoundary:C,lazyRoot:O,...I}=e,{imgConf:N,showAltText:R,blurComplete:M,defaultLoader:z}=t,k=N||o.imageConfigDefault;if("allSizes"in k)i=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);i={...k,allSizes:e,deviceSizes:t}}let L=I.loader||z;delete I.loader,delete I.srcSet;let A="__next_img_default"in L;if(A){if("custom"===i.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!s&&(s=t)}let T="",D=getInt(m),U=getInt(h);if("object"==typeof(r=u)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,a=e.blurHeight,w=w||e.blurDataURL,T=e.src,!v){if(D||U){if(D&&!U){let t=D/e.width;U=Math.round(e.height*t)}else if(!D&&U){let t=U/e.height;D=Math.round(e.width*t)}}else D=e.width,U=e.height}}let F=!f&&("lazy"===d||void 0===d);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,F=!1),i.unoptimized&&(c=!0),A&&u.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(c=!0),f&&(j="high");let B=getInt(g),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:E}:{},R?{}:{color:"transparent"},b),G=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:l,blurHeight:a,blurDataURL:w||"",objectFit:H.objectFit})+'")':'url("'+_+'")',q=G?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:i,width:u[c]})}}({config:i,src:u,unoptimized:c,width:D,quality:B,sizes:s,loader:L}),V={...I,loading:F?"lazy":d,fetchPriority:j,width:D,height:U,decoding:"async",className:p,style:{...H,...q},sizes:K.sizes,srcSet:K.srcSet,src:K.src},W={unoptimized:c,priority:f,placeholder:_,fill:v};return{props:V,meta:W}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n?40*n:t,u=o?40*o:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return u}});let n=r(8754),o=r(3914),i=r(1905),l=r(3271),a=n._(r(4545)),unstable_getImgProps=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},8033:function(e,t,r){"use strict";r.r(t);var n=r(5893);t.default=()=>(0,n.jsx)("footer",{className:"bg-gray-800 py-4",children:(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsxs)("div",{className:"flex flex-wrap justify-between items-center",children:[(0,n.jsx)("div",{className:"w-full md:w-1/3 text-center md:text-left",children:(0,n.jsx)("p",{className:"text-gray-400",children:"\xa9 2023 Batiment Project"})}),(0,n.jsxs)("div",{className:"w-full md:w-1/3 text-center",children:[(0,n.jsx)("a",{href:"#",className:"text-gray-400 hover:text-white mx-2",children:"Privacy Policy"}),(0,n.jsx)("a",{href:"#",className:"text-gray-400 hover:text-white mx-2",children:"Terms of Service"})]}),(0,n.jsx)("div",{className:"w-full md:w-1/3 text-center md:text-right",children:(0,n.jsx)("p",{className:"text-gray-400",children:"Made by Hazem"})})]})})})},2231:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Navbar}});var n=r(5893),o=r(5675),i=r.n(o),l=r(1664),a=r.n(l),u=r(7294);function Navbar(){let[e,t]=(0,u.useState)(0),[r,o]=(0,u.useState)(!0),handleScroll=()=>{let r=window.scrollY;r>e?o(!1):o(!0),t(r)};return(0,u.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>window.removeEventListener("scroll",handleScroll))),(0,n.jsx)("nav",{className:" md:min-w-max min-w-fit lg:max-w-screen fixed z-50 flex flex-row flex-nowrap  auto-rows-min  justify-evenly  p-3   -translate-x-1/2 ".concat(e>0?"bg-gray-700 border-gray-600  shadow-sm w-[calc(100%-55rem)] rounded-xl":"bg-black border-black shadow-none  w-screen","    -top-[5.5rem] left-1/2   transition delay-200 duration-300  ").concat(r?"translate-y-20":"","  "),children:(0,n.jsxs)("div",{className:"flex flex-row flex-nowrap justify-center w-full md:gap-11  ",children:[(0,n.jsx)(a(),{href:"/",className:"transition delay-200 duration-300 px-4 rounded-xl p-2   text-indigo-500 hover:opacity-60 focus:text-white focus:bg-zinc-800 ".concat(e>0?"bg-zinc-800   ":""," "),children:"Home"}),(0,n.jsx)(a(),{href:"/products",className:"transition delay-200 duration-300 px-4 rounded-xl p-2  text-indigo-500 hover:opacity-60 focus:text-white focus:bg-zinc-800 ".concat(e>0?"bg-zinc-800   ":""," "),children:"Products"}),(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)(i(),{src:"/images/Icons/logo.png",width:20,height:20,alt:"logo",className:"h-8 w-8 rounded-xl aspect-square bg-white"})}),(0,n.jsx)(a(),{href:"/contactus",className:"transition delay-200 duration-300 px-4 rounded-xl p-2  text-indigo-500 hover:opacity-60 focus:text-white focus:bg-zinc-800 ".concat(e>0?"bg-zinc-800   ":""," "),children:"Contact"}),(0,n.jsx)(a(),{href:"/realisations",className:"transition delay-200 duration-300 px-4 rounded-xl p-2  text-indigo-500 hover:opacity-60 focus:text-white focus:bg-zinc-800 ".concat(e>0?"bg-zinc-800   ":""," "),children:"Realisations"})]})})}},8397:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return App}});var n=r(5893);r(2352),r(188);var o=r(2231),i=r(8033);function App(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{}),(0,n.jsx)(t,{...r}),(0,n.jsx)(i.default,{})]})}},188:function(){},2352:function(){},5675:function(e,t,r){e.exports=r(645)},1664:function(e,t,r){e.exports=r(5170)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=e.O()}]);