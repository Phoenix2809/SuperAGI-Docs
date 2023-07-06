"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},l="Google Calendar",i={unversionedId:"Toolkit/google_calender",id:"Toolkit/google_calender",title:"Google Calendar",description:"Introducing the Google Calendar Toolkit, a powerful integration for SuperAGI. With the Google Calendar toolkit, you have the ability to do the following:",source:"@site/docs/Toolkit/google_calender.md",sourceDirName:"Toolkit",slug:"/Toolkit/google_calender",permalink:"/docs/Toolkit/google_calender",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/google_calender.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/Toolkit/github"},next:{title:"Google Search",permalink:"/docs/Toolkit/google_search"}},c={},p=[{value:"Features",id:"features",level:2},{value:"API Creation and OAuth Consent Screen",id:"api-creation-and-oauth-consent-screen",level:2},{value:"Configuring endpoints &amp; obtaining Client ID and Client Secret Key",id:"configuring-endpoints--obtaining-client-id-and-client-secret-key",level:2},{value:"Configuring your Client ID, Secret Key and Authenticating Calendar with SuperAGI",id:"configuring-your-client-id-secret-key-and-authenticating-calendar-with-superagi",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-calendar"},"Google Calendar"),(0,o.kt)("p",null,"Introducing the Google Calendar Toolkit, a powerful integration for SuperAGI. With the Google Calendar toolkit, you have the ability to do the following:"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create Calendar Events"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"List your Calendar Events"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fetch an event from your Calendar"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Delete Calendar Events")))),(0,o.kt)("h1",{id:"quickstart-guide"},"Quickstart Guide:"),(0,o.kt)("p",null,"In order to get started with integrating Google Calendar with SuperAGI, you need to do the following:"),(0,o.kt)("h2",{id:"api-creation-and-oauth-consent-screen"},"API Creation and OAuth Consent Screen"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to Google Developer Console:\n",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/")," & Create a new project. If you\u2019re having an existing project, you can proceed with that as well:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/c486b2db-6cc5-46a9-8c74-59138a9ea95b",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"After the project is created/you\u2019re in your selected project, head to \u201cAPIs and Services\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/968160d6-d5bb-4e1e-9141-d993c9b5bd7c",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click on \u201cENABLED APIS AND SERVICES\u201d and search for \u201cGoogle Calendar\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/16aa1139-9f38-4938-a094-9a9ce95e721a",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/bb564362-a105-4ef0-ab1c-827822550621",alt:null})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Enable the API")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/4877001f-0ce6-4f6a-9b92-873739c0b9df",alt:null})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Once the API is Enabled, go to \u201cOAuth Consent Screen\u201d ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/7195b562-9805-44e8-9e9d-2cea216b1447",alt:null})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Select your User Type as \u201cExternal\u201d and click on "Create"')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/43eb7e77-5292-4564-874b-0dea2b183c21",alt:null})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Fill in the required details such as the App Information, App Domain, Authorized Domain, and Developer contact information. Once filled in, click \u201cSave and Continue\u201d ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/6ce9238e-d951-4fb0-bcc9-3bf054c26b95",alt:null})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"On the next page, you don\u2019t need to select the scopes. Proceed to \u201csave and continue\u201d and at the final page, review the process and click \u201cBack to Dashboard\u201d.  With this, you\u2019ve created your OAuth Consent Screen for Google Calendar."),(0,o.kt)("li",{parentName:"ol"},"You can go ahead and click the \u201cPublish App\u201d ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/9e540069-387e-407f-a4e2-bcd0ca0070aa",alt:null})),(0,o.kt)("h2",{id:"configuring-endpoints--obtaining-client-id-and-client-secret-key"},"Configuring endpoints & obtaining Client ID and Client Secret Key"),(0,o.kt)("p",null,"In order to obtain the Client ID and Secret ID, you need to do the following steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to \u201cCredentials\u201d Page")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/f55aef35-df11-4f35-896a-bb9a0165a537",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on \u201cCreate Credentials\u201d and click on \u201cOAuth Client ID\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/cf2959a4-ae79-418d-ba95-09bb7cbb1b49",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/84baecb6-c68c-4e10-8efb-430a2965db44",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Once you click on OAuth Client ID, choose the type of application as \u201cWeb Application\u201d and give it a name of your choice")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/5f1d83bd-f28a-4969-8e75-59582cf42a5b",alt:null})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create JavaScript Origins and add the following details as shown in the image: ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/439b4398-bb20-4dc0-b622-bb36517ecb9b",alt:null})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Go to Authorized redirect URIs and add the following as per the image: ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/f274c547-cb71-4377-807b-633fe708bea4",alt:null})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Once you\u2019re completed with adding the Authorized redirect URIs, you can click \u201cCreate\u201d to obtain the Client ID and Client Secret Key")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/17ef51d9-2e6c-4f4a-a50e-2536f6847225",alt:null})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Copy the Client ID and Secret Key and save it in a file. ")),(0,o.kt)("h2",{id:"configuring-your-client-id-secret-key-and-authenticating-calendar-with-superagi"},"Configuring your Client ID, Secret Key and Authenticating Calendar with SuperAGI"),(0,o.kt)("p",null,"Once the ClientID and Secret Key are obtained, you can configure and authorize Calendar to be used with SuperAGI by following these steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add your Client ID and Client Secret Key on the toolkit page and click on \u201cUpdate Changes\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/c3c44790-5e89-4191-9dcd-230e7ad711b8",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on \u201cAuthenticate Tool\u201d - which will now take you to the OAuth Flow. ")),(0,o.kt)("p",null,"Once the OAuth Authentication is complete, you can now start using SuperAGI Agents with Google Calendar!"))}d.isMDXComponent=!0}}]);