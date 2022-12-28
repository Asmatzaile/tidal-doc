"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(a),h=l,m=u["".concat(i,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,s[1]=p;for(var o=2;o<r;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(3117),l=(a(7294),a(3905));const r={title:"Alteration",id:"alteration"},s=void 0,p={unversionedId:"reference/alteration",id:"reference/alteration",title:"Alteration",description:"This page will present you all the functions that can be used to manipulate and alter your patterns. Each function will be presented following the same model:",source:"@site/docs/reference/alteration.md",sourceDirName:"reference",slug:"/reference/alteration",permalink:"/docs/reference/alteration",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/alteration.md",tags:[],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1672258177,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Alteration",id:"alteration"},sidebar:"reference",previous:{title:"Accumulation",permalink:"/docs/reference/accumulation"},next:{title:"Performance",permalink:"/docs/reference/performance"}},i={},o=[{value:"Scaling",id:"scaling",level:2},{value:"range",id:"range",level:3},{value:"rangex",id:"rangex",level:3},{value:"quantise",id:"quantise",level:3},{value:"Degrade",id:"degrade",level:2},{value:"degrade",id:"degrade-1",level:3},{value:"degradeBy",id:"degradeby",level:3},{value:"unDegradeBy",id:"undegradeby",level:3},{value:"Repetitions",id:"repetitions",level:2},{value:"ply",id:"ply",level:3},{value:"stutter",id:"stutter",level:3},{value:"stripe",id:"stripe",level:3},{value:"slowstripe",id:"slowstripe",level:3},{value:"palindrome",id:"palindrome",level:3},{value:"Truncation",id:"truncation",level:2},{value:"trunc",id:"trunc",level:3},{value:"linger",id:"linger",level:3},{value:"chunk",id:"chunk",level:3},{value:"chunk&#39;",id:"chunk-1",level:3},{value:"loopFirst",id:"loopfirst",level:3},{value:"Shuffling and scrambling",id:"shuffling-and-scrambling",level:2},{value:"bite",id:"bite",level:3},{value:"shuffle",id:"shuffle",level:3},{value:"scramble",id:"scramble",level:3},{value:"rot",id:"rot",level:3},{value:"Step sequencers",id:"step-sequencers",level:2},{value:"step",id:"step",level:3},{value:"step&#39;",id:"step-1",level:3},{value:"lindenmayer",id:"lindenmayer",level:3},{value:"Higher-order",id:"higher-order",level:2},{value:"spread",id:"spread",level:3},{value:"spreadf",id:"spreadf",level:3},{value:"fastspread",id:"fastspread",level:3},{value:"spreadChoose",id:"spreadchoose",level:3}],d={toc:o};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page will present you all the functions that can be used to manipulate and alter your patterns. Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"scaling"},"Scaling"),(0,l.kt)("h3",{id:"range"},"range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: range :: Num a => Pattern a -> Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"range")," will take a pattern which goes from ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"sine"),"), and scale it to a different range - between the first and second arguments. In the below example, ",(0,l.kt)("inlineCode",{parentName:"p"},"range 1 1.5")," shifts the range of sine from ",(0,l.kt)("inlineCode",{parentName:"p"},"0 - 1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1 - 1.5"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux (iter 4) $ sound "arpy arpy:2*2"\n  |+ speed (slow 4 $ range 1 1.5 sine)\n')),(0,l.kt)("p",null,"The above is equivalent to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux (iter 4) $ sound "arpy arpy:2*2"\n  |+ speed (slow 4 $ sine * 0.5 + 1)\n')),(0,l.kt)("h3",{id:"rangex"},"rangex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rangex :: (Floating b, Functor f) => b -> b -> f b -> f b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rangex")," is an exponential version of ",(0,l.kt)("inlineCode",{parentName:"p"},"range")," described above, good to use for frequencies. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'range 20 2000 "0.5"')," will give ",(0,l.kt)("inlineCode",{parentName:"p"},"1010")," - halfway between ",(0,l.kt)("inlineCode",{parentName:"p"},"20")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"2000"),". But ",(0,l.kt)("inlineCode",{parentName:"p"},"rangex 20 2000 0.5")," will give ",(0,l.kt)("inlineCode",{parentName:"p"},"200")," - halfway between on a logarithmic scale. This usually sounds better if you\u2019re using the numbers as pitch frequencies. Since rangex uses logarithms, don\u2019t try to scale things to zero or less!"),(0,l.kt)("h3",{id:"quantise"},"quantise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: quantise :: (Functor f, RealFrac b) => b -> f b -> f b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"quantise")," is useful for rounding a collection of numbers to some particular base fraction. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"quantise 5 [0, 1.3 ,2.6,3.2,4.7,5]\n")),(0,l.kt)("p",null,"It will round all the values to the nearest ",(0,l.kt)("inlineCode",{parentName:"p"},"(1/5)=0.2")," and thus will output the list ",(0,l.kt)("inlineCode",{parentName:"p"},"[0.0,1.2,2.6,3.2,4.8,5.0]"),". You can use this function to force a continuous pattern like sine into specific values. In the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "superchip*8" # n (quantise 1 $ range (-10) (10) $ slow 8 $ cosine)\n                     # release (quantise 5 $ slow 8 $ sine + 0.1)\n')),(0,l.kt)("p",null,"all the releases selected be rounded to the nearest ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1")," and the notes selected to the nearest ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"quantise")," with fractional inputs does the consistent thing: ",(0,l.kt)("inlineCode",{parentName:"p"},"quantise 0.5")," rounds values to the nearest ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantise 0.25")," rounds the nearest ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),", etc..."),(0,l.kt)("h2",{id:"degrade"},"Degrade"),(0,l.kt)("h3",{id:"degrade-1"},"degrade"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: degrade :: Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"degrade")," randomly removes events from a pattern, ",(0,l.kt)("inlineCode",{parentName:"p"},"50%")," of the time. Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ degrade $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"\n   # accelerate "-6"\n   # speed "2"\n')),(0,l.kt)("h3",{id:"degradeby"},"degradeBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: degradeBy :: Double -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Similarly to ",(0,l.kt)("inlineCode",{parentName:"p"},"degrade"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeBy")," allows you to control the percentage of events that are removed. For example, to remove events ",(0,l.kt)("inlineCode",{parentName:"p"},"90%")," of the time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ degradeBy 0.9 $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"\n   # accelerate "-6"\n   # speed "2"\n')),(0,l.kt)("h3",{id:"undegradeby"},"unDegradeBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: unDegradeBy :: Double -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unDegradeBy")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeBy")," but with the percentage describing how many events to keep on average not remove."),(0,l.kt)("h2",{id:"repetitions"},"Repetitions"),(0,l.kt)("h3",{id:"ply"},"ply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ply :: Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ply")," function repeats each event the given number of times. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ply 3 $ s "bd ~ sn cp"\n')),(0,l.kt)("p",null,"... is equivalent to ..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "[bd bd bd] ~ [sn sn sn] [cp cp cp]"\n')),(0,l.kt)("p",null,"The first parameter may be given as a pattern, so that:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ply "2 3" $ s "bd ~ sn cp"\n')),(0,l.kt)("p",null,"... is equivalent to ..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "[bd bd] ~ [sn sn sn] [cp cp cp]"\n')),(0,l.kt)("p",null,"Here is an example of it being used conditionally:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 (ply 4) $ s "bd ~ sn cp"\n')),(0,l.kt)("h3",{id:"stutter"},"stutter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: stutter :: Integral i => i -> Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stutter")," is like ",(0,l.kt)("inlineCode",{parentName:"p"},"stut")," that doesn't reduce the volume or ",(0,l.kt)("inlineCode",{parentName:"p"},"ply")," if you controlled the timing. ",(0,l.kt)("inlineCode",{parentName:"p"},"stutter n t")," repeats each event in the pattern ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," times, separated by ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," time (in fractions of a cycle)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stutter 4 (1/16) $ s "bd cp"\n')),(0,l.kt)("p",null,"is functionally equivalent to ..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stut 4 1 (1/16) $ s "bd cp"\n')),(0,l.kt)("p",null,"Specific conveniences functions that use stutter are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"echo   = stutter (2 :: Int)\ntriple = stutter (3 :: Int)\nquad   = stutter (4 :: Int)\ndouble = echo\n")),(0,l.kt)("h3",{id:"stripe"},"stripe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: stripe :: Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"stripe")," function repeats a pattern at random speeds. The first parameter gives the number of cycles to operate over, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"stripe 2")," will repeat a pattern twice, over two cycles. Each cycle will be played at a random speed, but in such a way that the total duration will be the same."),(0,l.kt)("p",null,"For example in the following example, the start of every third repetition of the ",(0,l.kt)("inlineCode",{parentName:"p"},"d1")," pattern will match with the clap on the d2 pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stripe 3 $ sound "bd sd ~ [mt ht]"\n\nd2 $ sound "cp"\n')),(0,l.kt)("h3",{id:"slowstripe"},"slowstripe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: slowstripe :: Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"slowstripe")," function is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"stripe")," but the result is also slowed down by ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," time (where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is the first parameter of the function. This means that the mean average duration of the stripes is exactly one cycle, and every nth stripe starts on a cycle boundary (in indian classical terms, the sam). Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowstripe 3 $ sound "bd sd ~ [mt ht]"\n\nd2 $ sound "cp"\n')),(0,l.kt)("h3",{id:"palindrome"},"palindrome"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: palindrome :: Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"palindrome")," function applies ",(0,l.kt)("inlineCode",{parentName:"p"},"rev")," to a pattern every other cycle, so that the pattern alternates between forwards and backwards. For example this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ palindrome $ sound "arpy:0 arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,"... is the same as this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ sound "arpy:0 arpy:1 arpy:2 arpy:3 arpy:3 arpy:2 arpy:1 arpy:0"\n')),(0,l.kt)("p",null,"... and indeed this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 rev $ sound "arpy:0 arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("h2",{id:"truncation"},"Truncation"),(0,l.kt)("h3",{id:"trunc"},"trunc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: trunc :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"trunc")," truncates a pattern so that only a fraction of the pattern is played. The following example plays only the first three quarters of the pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ trunc 0.75 $ sound "bd sn*2 cp hh*4 arpy bd*2 cp bd*2"\n')),(0,l.kt)("p",null,"You can also pattern the first parameter, for example to cycle through three values, one per cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ trunc "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"\n')),(0,l.kt)("h3",{id:"linger"},"linger"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: linger :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"linger")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"trunc"),", in that it truncates a pattern so that only the first fraction of the pattern is played. However unlike trunc, ",(0,l.kt)("inlineCode",{parentName:"p"},"linger")," repeats that part to fill the remainder of the cycle."),(0,l.kt)("p",null,"For example this repeats the first quarter, so you only hear a single repeating note:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ linger 0.25 $ n "0 2 [3 4] 2" # sound "arpy"\n')),(0,l.kt)("p",null,"or slightly more interesting, applied only every fourth cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (linger 0.25) $ n "0 2 [3 4] 2" # sound "arpy"\n')),(0,l.kt)("p",null,"or to a chopped-up sample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (linger 0.25) $ loopAt 2 $ chop 8 $ sound "breaks125"\n')),(0,l.kt)("p",null,"You can also pattern the first parameter, for example to cycle through three values, one per cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ linger "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"\n\nd1 $ linger "<0.25 0.5 1>" $ loopAt 2 $ chop 8 $ sound "breaks125"\n')),(0,l.kt)("h3",{id:"chunk"},"chunk"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chunk :: Int -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chunk")," divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle). Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chunk 4 (# speed 2) $ sound "bd hh sn cp"\n')),(0,l.kt)("p",null,"The below highlights in uppercase which part of the above pattern has the (# speed 2) function applied to it over four cycles:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"BD hh sn cp\nbd HH sn cp\nbd hh SN cp\nbd hh sn CP\n")),(0,l.kt)("p",null,"Another example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chunk 4 (hurry 2) $ sound "bd sn:2 [~ bd] sn:2"\n')),(0,l.kt)("h3",{id:"chunk-1"},"chunk'"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chunk'")," does the same as chunk but cycles through the parts in the reverse direction."),(0,l.kt)("h3",{id:"loopfirst"},"loopFirst"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loopFirst")," is a function that takes a pattern and loops only the first cycle of the pattern. For example, in the following code will only play the bass drum sample."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopFirst $ s "<<bd*4 ht*8> cp*4>"\n')),(0,l.kt)("p",null,"This function combines with sometimes to insert events from the first cycle randomly into subsequent cycles of the pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sometimes loopFirst $ s "<<bd*4 ht*8> cp*4>"\n')),(0,l.kt)("h2",{id:"shuffling-and-scrambling"},"Shuffling and scrambling"),(0,l.kt)("h3",{id:"bite"},"bite"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: bite :: Int -> Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"bite")," function allows you to slice each cycle into a given number of equal sized bits, and then pattern those bits by number. It's similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"slice"),", but is for slicing up patterns, rather than samples. The following slices the pattern into four bits, and then plays those bits in turn."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ bite 4 "0 1 2 3" $ n "0 .. 7" # sound "arpy"\n')),(0,l.kt)("p",null,"Of course that doesn't actually change anything, but then you can reorder those bits:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ bite 4 "2 0 1 3" $ n "0 .. 7" # sound "arpy"\n')),(0,l.kt)("p",null,"The slices bits of pattern will be squeezed or contracted to fit:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ bite 4 "2 [0 3] 1*4 1" $ n "0 .. 7" # sound "arpy"\n')),(0,l.kt)("h3",{id:"shuffle"},"shuffle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: shuffle :: Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"shuffle"),' takes a number and a pattern as input, divides the pattern into the given number of parts, and returns a new pattern as a random permutation of the parts, picking one of each per cycle. This could also be called "sampling without replacement". For example:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound $ shuffle 3 "bd sn hh"\n')),(0,l.kt)("p",null,"... will sometimes play ",(0,l.kt)("inlineCode",{parentName:"p"},'"sn bd hh"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"hh sn bd"'),", but will never play ",(0,l.kt)("inlineCode",{parentName:"p"},'"bd sn bd"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"hh hh hh"'),", because that isn't a permutation of the three parts."),(0,l.kt)("h3",{id:"scramble"},"scramble"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scramble :: Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scramble"),' takes a number and a pattern as input, divides the pattern into the given number of parts, and returns a new pattern by randomly selecting from the parts. This could also be called "sampling with replacement". For example:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound $ scramble 3 "bd sn hh"\n')),(0,l.kt)("p",null,"... will sometimes play ",(0,l.kt)("inlineCode",{parentName:"p"},'"sn bd hh"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"hh sn bd"'),", but can also play ",(0,l.kt)("inlineCode",{parentName:"p"},'"bd sn bd"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"hh hh hh"'),", because it can make any random combination of the three parts."),(0,l.kt)("h3",{id:"rot"},"rot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rot :: Ord a => Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rot")," function 'rotates' the values in a pattern, while preserving its structure. For example in the following, each value will shift to its neighbour's position one step to the left, so that ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," takes the place of ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"c"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"c")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'rot 1 "a ~ b c"\n')),(0,l.kt)("p",null,"The result is equivalent of:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'"b ~ c a"\n')),(0,l.kt)("p",null,"The first parameter is the number of steps, and may be given as a pattern, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rot "<0 0 1 3>" $ n "0 ~ 1 2 0 2 ~ 3*2" # sound "drum"\n')),(0,l.kt)("p",null,"The above will not rotate the pattern for the first two cycles, will rotate it by one the third cycle, and by three the fourth cycle."),(0,l.kt)("h2",{id:"step-sequencers"},"Step sequencers"),(0,l.kt)("h3",{id:"step"},"step"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: step :: String -> String -> Pattern String\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"step")," acts as a kind of simple step-sequencer using strings. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'step "sn" "x x 12 "')," is equivalent to the pattern of strings given by ",(0,l.kt)("inlineCode",{parentName:"p"},'"sn ~ sn ~ sn:1 sn:2 ~"'),". ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," substitutes the given string for each x, for each number it substitutes the string followed by a colon and the number, and for everything else it puts in a rest."),(0,l.kt)("p",null,"In other words, ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," generates a pattern of strings in exactly the syntax you'd want for selecting samples and that can be fed directly into the s function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s (step "sn" "x x 12 ")\n')),(0,l.kt)("h3",{id:"step-1"},"step'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: step' :: [String] -> String -> Pattern String\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"step' "),"is like ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," but more general, using the numbers in the step-sequencing string as indexes into the list of strings you give it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s (step\' ["superpiano","supermandolin"] "0 1 000 1") # sustain 4 # n 0\n')),(0,l.kt)("p",null,"is equivalent to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "superpiano ~ supermandolin ~ superpiano!3 ~ supermandolin" # sustain 4 # n 0\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"There is also ",(0,l.kt)("inlineCode",{parentName:"p"},"steps"),". You can take a look at this function in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Accumulation")," section")),(0,l.kt)("h3",{id:"lindenmayer"},"lindenmayer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: Num b => Int -> String -> String -> [b]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lindenmayer")," takes an integer ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),", a Lindenmayer system rule set and an initiating string as input in order to generate an L-system tree string of ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," iterations. It can be used in conjunction with a step function to convert the generated string into a playable pattern. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 16 $ sound $ step\' ["feel:0", "sn:1", "bd:0"]\n(take 512 $ lindenmayer 5 "0:1~~~,1:0~~~2~~~~~0~~~2~,2:2~1~,~:~~1~"\n"0")\n')),(0,l.kt)("p",null,'... generates an L-system with initiating string "0" and maps it onto a list of samples.'),(0,l.kt)("p",null,"Complex L-system trees with many rules and iterations can sometimes result in unwieldy strings. Using ",(0,l.kt)("inlineCode",{parentName:"p"},"take n")," to only use the first ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," elements of the string, along with a ",(0,l.kt)("inlineCode",{parentName:"p"},"slow")," function, can make the generated values more manageable."),(0,l.kt)("h2",{id:"higher-order"},"Higher-order"),(0,l.kt)("h3",{id:"spread"},"spread"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: spread :: (a -> t -> Pattern b) -> [a] -> t -> Pattern b\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"spread")," function allows you to take a pattern transformation which takes a parameter, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"slow"),", and provide several parameters which are switched between. In other words it 'spreads' a function across several values. Taking a simple high hat loop as an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"We can speed it up by different amounts, such as by 2x:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"Or by 3x:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 3 $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"But if we use ",(0,l.kt)("inlineCode",{parentName:"p"},"spread"),", we can make a pattern which alternates between the two speeds:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spread fast[2,3] $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"Note that many functions now allow pattern input. This is equivalent to the above:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast "<2 3>" $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"Note that if you pass (",(0,l.kt)("inlineCode",{parentName:"p"},"$"),") as the function to spread values over, you can put different functions as the list of values. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spread ($) [density 2, rev, slow 2, striate 3, (# speed "0.8")] $ sound "[bd*2 [~ bd]] [sn future]*2 cp jvbass*4"\n')),(0,l.kt)("p",null,"Above, the pattern will have these transforms applied to it, one at a time, per cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},'cycle 1: density 2 - pattern will increase in speed\ncycle 2: rev - pattern will be reversed\ncycle 3: slow 2 - pattern will decrease in speed\ncycle 4: striate 3 - pattern will be granualized\ncycle 5: (# speed "0.8") - pattern samples will be played back more slowly\n')),(0,l.kt)("p",null,"After ",(0,l.kt)("inlineCode",{parentName:"p"},'(# speed "0.8")'),", the transforms will repeat and start at ",(0,l.kt)("inlineCode",{parentName:"p"},"density 2")," again."),(0,l.kt)("p",null,"(This is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"slowspread")," in earlier versions of TidalCycles.)"),(0,l.kt)("h3",{id:"spreadf"},"spreadf"),(0,l.kt)("p",null,"A convenient shorthand for spread (",(0,l.kt)("inlineCode",{parentName:"p"},"$"),")."),(0,l.kt)("h3",{id:"fastspread"},"fastspread"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fastspread")," works the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"spread"),", but the result is squashed into a single cycle. If you gave four values to ",(0,l.kt)("inlineCode",{parentName:"p"},"spread"),", then the result would seem to speed up by a factor of four. Compare these two:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"\nd1 $ fastspread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("h3",{id:"spreadchoose"},"spreadChoose"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"spreadChoose")," (alias ",(0,l.kt)("inlineCode",{parentName:"p"},"spreadr"),") works the same as spread, but the values are selected at random, one cycle at a time. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spreadChoose ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"\n')))}u.isMDXComponent=!0}}]);