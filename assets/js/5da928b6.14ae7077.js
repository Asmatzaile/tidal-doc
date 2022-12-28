"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(o,".").concat(h)]||p[h]||c[h]||a;return n?l.createElement(m,r(r({ref:t},d),{},{components:n})):l.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=n(3117),i=(n(7294),n(3905));const a={title:"Windows (manual)",permalink:"wiki/Windows_installation/",layout:"wiki"},r=void 0,s={unversionedId:"getting-started/Windows_installation",id:"getting-started/Windows_installation",title:"Windows (manual)",description:"For an easy, automated install experience, see the [Windows choco",source:"@site/docs/getting-started/Windows_installation.md",sourceDirName:"getting-started",slug:"/getting-started/Windows_installation",permalink:"/docs/getting-started/Windows_installation",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/Windows_installation.md",tags:[],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1672258177,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Windows (manual)",permalink:"wiki/Windows_installation/",layout:"wiki"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required Prerequisites",id:"required-prerequisites",level:3},{value:"Optional Prerequisites",id:"optional-prerequisites",level:3},{value:"Install TidalCycles",id:"install-tidalcycles",level:2},{value:"Install SuperDirt",id:"install-superdirt",level:2},{value:"Install Atom Extension",id:"install-atom-extension",level:2},{value:"Test Your Installation",id:"test-your-installation",level:2},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("translate",null,(0,i.kt)("h1",{id:"easy-install"},"Easy install"),(0,i.kt)("p",null,"For an easy, automated install experience, see the ",(0,i.kt)("a",{parentName:"p",href:"/wiki/Windows_choco_install",title:"wikilink"},"Windows choco\ninstall"),"."),(0,i.kt)("h1",{id:"manual-install"},"Manual install"),(0,i.kt)("p",null,"If you prefer to install the different parts of a Tidal environment by\nhand, perhaps because you already have SuperCollider or Haskell\ninstalled, then follow the below instructions."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"required-prerequisites"},"Required Prerequisites"),(0,i.kt)("p",null,"Before installing Tidal, make sure the following are installed first:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haskell Platform - Please note! There's a bug in the windows haskell\ninstaller, please install ",(0,i.kt)("a",{parentName:"li",href:"https://downloads.haskell.org/platform/8.6.5/HaskellPlatform-8.6.5-core-x86_64-setup.exe"},"this\nversion"),"\n(Haskell 8.6.5 'full' install) and it should work"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://atom.io/"},"Atom Editor")," (if you don't like the atom editor\nfor some reason, please check out the ",(0,i.kt)("a",{parentName:"li",href:"/wiki/List_of_tidal_editors",title:"wikilink"},"list of\nalternatives"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://supercollider.github.io/downloads"},"SuperCollider")," (pick the\nlatest version)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,i.kt)("h3",{id:"optional-prerequisites"},"Optional Prerequisites"),(0,i.kt)("p",null,"The following is optional, but recommended:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," - you\nmay need the SuperCollider sc3-plugins if you want to use any of the\nsynths included in SuperDirt. Most of the examples in the\ndocumentation will still work, so you could skip this step and\nreturn to it later.")),(0,i.kt)("h2",{id:"install-tidalcycles"},"Install TidalCycles"),(0,i.kt)("p",null,"Open a Command Prompt (or PowerShell), then type and run these two\ncommands:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cabal\xa0v1-update"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"cabal\xa0v1-install\xa0tidal")),(0,i.kt)("p",null,"If you've never installed TidalCycles before, then the\n",(0,i.kt)("inlineCode",{parentName:"p"},"cabal v1-install tidal")," step may take some time."),(0,i.kt)("p",null,"If you see an error with the network library, then you need to fix\nsomething with your Haskell install. You can ",(0,i.kt)("a",{parentName:"p",href:"https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3"},"find instructions\nhere"),"."),(0,i.kt)("h2",{id:"install-superdirt"},"Install SuperDirt"),(0,i.kt)("p",null,"Start SuperCollider, and in the editor window paste in the following\nline of code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),(0,i.kt)("p",null,"Run the code by clicking on it, to make sure the cursor is on this line,\nthen hold down Shift and press Enter."),(0,i.kt)("p",null,"It'll take a while to install. You'll see something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:28--\x3e\n*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.\n")),(0,i.kt)("h2",{id:"install-atom-extension"},"Install Atom Extension"),(0,i.kt)("p",null,"Start Atom, and install the TidalCycles plugin. You can find it via the\nmenus under edit ",">"," settings ",">"," install, then typing \u201ctidalcycles\u201d into\nthe search box. Once that\u2019s installed, restart atom."),(0,i.kt)("h2",{id:"test-your-installation"},"Test Your Installation"),(0,i.kt)("p",null,"Now you are ready to ",(0,i.kt)("a",{parentName:"p",href:"/wiki/Start_tidalcycles_and_superdirt_for_the_first_time",title:"wikilink"},"Start TidalCycles and SuperDirt for the first\ntime"),".")),(0,i.kt)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),(0,i.kt)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}p.isMDXComponent=!0}}]);