"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(3117),i=(n(7294),n(3905));const l={title:"Uninstall",id:"uninstalling"},r=void 0,o={unversionedId:"getting-started/uninstalling",id:"getting-started/uninstalling",title:"Uninstall",description:"Tidal Cycles does not provide an easy uninstaller. To uninstall Tidal, you will need to:",source:"@site/docs/getting-started/uninstall.md",sourceDirName:"getting-started",slug:"/getting-started/uninstalling",permalink:"/docs/getting-started/uninstalling",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/uninstall.md",tags:[],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1672258177,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Uninstall",id:"uninstalling"},sidebar:"docs",previous:{title:"Downgrading",permalink:"/docs/getting-started/downgrading"},next:{title:"Troubleshoot on Linux",permalink:"/docs/troubleshoot/troubleshoot_linux"}},s={},p=[{value:"Linux",id:"linux",level:2},{value:"Using whereis",id:"using-whereis",level:3},{value:"SuperDirt Quark",id:"superdirt-quark",level:3},{value:"Uninstall stack",id:"uninstall-stack",level:3},{value:"Clean up cabal and GHC",id:"clean-up-cabal-and-ghc",level:3},{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Using uninstall-hs",id:"using-uninstall-hs",level:3},{value:"Uninstalling ghcup",id:"uninstalling-ghcup",level:3},{value:"Clean up cabal and GHC",id:"clean-up-cabal-and-ghc-1",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tidal Cycles")," does not provide an easy uninstaller. To uninstall ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),", you will need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uninstall ",(0,i.kt)("strong",{parentName:"li"},"SuperDirt")," and/or ",(0,i.kt)("strong",{parentName:"li"},"SuperCollider")," if you are not already using it for another purpose."),(0,i.kt)("li",{parentName:"ul"},"Uninstall the ",(0,i.kt)("strong",{parentName:"li"},"Tidal library")," and the GHC compiler.")),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Uninstalling ",(0,i.kt)("em",{parentName:"p"},"Tidal Cycles")," on Linux can be tricky. There are multiple ways of installing it depending on the distribution you are using. Here are some tips you can use to locate all the components that are part of the ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," install."),(0,i.kt)("h3",{id:"using-whereis"},"Using whereis"),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"whereis scide sclang scsynth")," in a terminal path to get the path to ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," binaries."),(0,i.kt)("h3",{id:"superdirt-quark"},"SuperDirt Quark"),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider"),". In the ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," menu, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Open user support directory"),". This menu will take you where ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," is currently installed on your computer. Check in the ",(0,i.kt)("inlineCode",{parentName:"p"},"downloaded-quarks")," for ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt"),". Don't forget to uninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder as well. It can be quite heavy (all the samples are located here)."),(0,i.kt)("h3",{id:"uninstall-stack"},"Uninstall stack"),(0,i.kt)("p",null,"If you installed ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," using ",(0,i.kt)("strong",{parentName:"p"},"Stack"),", you can use a dirty but simple solution to uninstall it. Run ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf $HOME/.stack"),". This command will delete the hidden stack folder located in your root directory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stack")," will sometimes install a binary located here: ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.local/bin"),". Delete it if you want."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Double-check or triple-check the ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf")," command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.")),(0,i.kt)("h3",{id:"clean-up-cabal-and-ghc"},"Clean up cabal and GHC"),(0,i.kt)("p",null,"To clean up ",(0,i.kt)("inlineCode",{parentName:"p"},"cabal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GHC")," (user-installed packages), try running the following command in a terminal window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/.cabal ~/.ghc\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Double-check or triple-check the ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf")," command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.")),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("h2",{id:"macos"},"MacOS"),(0,i.kt)("h3",{id:"using-uninstall-hs"},"Using uninstall-hs"),(0,i.kt)("p",null,"Open a terminal window and type ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall-hs"),". This command will delete many things ",(0,i.kt)("strong",{parentName:"p"},"Haskell")," related from your computer. "),(0,i.kt)("h3",{id:"uninstalling-ghcup"},"Uninstalling ghcup"),(0,i.kt)("p",null,"If you installed ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcup"),", you can try a hacky solution. Open a terminal window and paste ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf ~/.ghcup"),". This will delete the ",(0,i.kt)("inlineCode",{parentName:"p"},".ghcup")," hidden directory that was living in your root directory."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Double-check or triple-check the ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf")," command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.")),(0,i.kt)("h3",{id:"clean-up-cabal-and-ghc-1"},"Clean up cabal and GHC"),(0,i.kt)("p",null,"To clean up ",(0,i.kt)("inlineCode",{parentName:"p"},"cabal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GHC")," (user-installed packages), try running the following command in a terminal window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/.cabal ~/.ghc\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Double-check or triple-check the ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf")," command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.")))}d.isMDXComponent=!0}}]);