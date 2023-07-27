"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4523],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},l="Google Calendar",i={unversionedId:"Toolkit/SuperAGI Toolkits/google_calendar",id:"Toolkit/SuperAGI Toolkits/google_calendar",title:"Google Calendar",description:"Introducing the Google Calendar Toolkit, a powerful integration for SuperAGI. With the Google Calendar toolkit, you have the ability to do the following:",source:"@site/docs/Toolkit/SuperAGI Toolkits/google_calendar.md",sourceDirName:"Toolkit/SuperAGI Toolkits",slug:"/Toolkit/SuperAGI Toolkits/google_calendar",permalink:"/docs/Toolkit/SuperAGI Toolkits/google_calendar",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/SuperAGI Toolkits/google_calendar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/Toolkit/SuperAGI Toolkits/github"},next:{title:"Google Search",permalink:"/docs/Toolkit/SuperAGI Toolkits/google_search"}},s={},c=[{value:"Features",id:"features",level:2},{value:"API Creation and OAuth Consent Screen",id:"api-creation-and-oauth-consent-screen",level:2},{value:"Configuring endpoints &amp; obtaining Client ID and Client Secret Key",id:"configuring-endpoints--obtaining-client-id-and-client-secret-key",level:2},{value:"Configuring your Client ID, Secret Key and Authenticating Calendar with SuperAGI",id:"configuring-your-client-id-secret-key-and-authenticating-calendar-with-superagi",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-calendar"},"Google Calendar"),(0,n.kt)("p",null,"Introducing the Google Calendar Toolkit, a powerful integration for SuperAGI. With the Google Calendar toolkit, you have the ability to do the following:"),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create Calendar Events")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"List your Calendar Events")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Fetch an event from your Calendar")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Delete Calendar Events"))),(0,n.kt)("h1",{id:"quickstart-guide"},"Quickstart Guide:"),(0,n.kt)("p",null,"In order to get started with integrating Google Calendar with SuperAGI, you need to do the following:"),(0,n.kt)("h2",{id:"api-creation-and-oauth-consent-screen"},"API Creation and OAuth Consent Screen"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Google Developer Console:\n",(0,n.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/")," & Create a new project. If you\u2019re having an existing project, you can proceed with that as well:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/9cd9040c-84ac-425b-8aa2-2cf6ea33fd43",alt:"GC1"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"After the project is created/you\u2019re in your selected project, head to \u201cAPIs and Services\u201d")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/18763990-5cd2-476d-8b41-ce195e218bd2",alt:"GC2"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click on \u201cENABLED APIS AND SERVICES\u201d and search for \u201cGoogle Calendar\u201d")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/b88fcf5d-793d-4add-af98-ef8457239b03",alt:"GC3"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/35480885-7b2e-4bb6-842b-68a00117b02d",alt:"GC4"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Enable the API")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/ad0dbec0-0177-484a-985d-c8c7f48fe667",alt:"GC5"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Once the API is Enabled, go to \u201cOAuth Consent Screen\u201d ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/b0eb2e92-b837-4d46-82fc-5c392529c676",alt:"GC6"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},'Select your User Type as \u201cExternal\u201d and click on "Create"')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/866553cd-d670-4dea-988b-222ca4577b71",alt:"GC7"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Fill in the required details such as the App Information, App Domain, Authorized Domain, and Developer contact information. Once filled in, click \u201cSave and Continue\u201d ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/d06b0f19-8a3c-4d61-b03a-c15a8df678da",alt:"GC8"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"On the next page, you don\u2019t need to select the scopes. Proceed to \u201csave and continue\u201d and at the final page, review the process and click \u201cBack to Dashboard\u201d.  With this, you\u2019ve created your OAuth Consent Screen for Google Calendar."),(0,n.kt)("li",{parentName:"ol"},"You can go ahead and click the \u201cPublish App\u201d ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/5f75c29b-90fa-4879-bc32-0373f748e0dd",alt:"GC9"})),(0,n.kt)("h2",{id:"configuring-endpoints--obtaining-client-id-and-client-secret-key"},"Configuring endpoints & obtaining Client ID and Client Secret Key"),(0,n.kt)("p",null,"In order to obtain the Client ID and Secret ID, you need to do the following steps: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to \u201cCredentials\u201d Page")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/4a28b0fe-9fd4-444f-8456-f07cf9df5f45",alt:"GC10"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click on \u201cCreate Credentials\u201d and click on \u201cOAuth Client ID\u201d")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/389dc30a-0468-48a2-8056-1dd989e3021c",alt:"GC11"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/7798d795-1773-4b3f-b955-6bf93f827613",alt:"GC12"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Once you click on OAuth Client ID, choose the type of application as \u201cWeb Application\u201d and give it a name of your choice")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/ee171a3c-2036-4969-a1d0-2af4d7b4010f",alt:"GC13"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Create JavaScript Origins and add the following details as shown in the image: ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/d2292b25-ce32-4d3d-903c-1ca9341163fb",alt:"GC14"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Go to Authorized redirect URIs and add the following as per the image: ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/9004723a-d983-4079-87d5-3193139893fd",alt:"GC15"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Once you\u2019re completed with adding the Authorized redirect URIs, you can click \u201cCreate\u201d to obtain the Client ID and Client Secret Key")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/46c106aa-2ad6-470c-bbd5-c1c1a4f64205",alt:"GC16"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Copy the Client ID and Secret Key and save it in a file. ")),(0,n.kt)("h2",{id:"configuring-your-client-id-secret-key-and-authenticating-calendar-with-superagi"},"Configuring your Client ID, Secret Key and Authenticating Calendar with SuperAGI"),(0,n.kt)("p",null,"Once the ClientID and Secret Key are obtained, you can configure and authorize Calendar to be used with SuperAGI by following these steps: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add your Client ID and Client Secret Key on the toolkit page and click on \u201cUpdate Changes\u201d")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/TransformerOptimus/SuperAGI/assets/133874957/911f57b7-c977-45d6-bcaf-ee77430e8628",alt:"GC_17"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click on \u201cAuthenticate Tool\u201d - which will now take you to the OAuth Flow. ")),(0,n.kt)("p",null,"Once the OAuth Authentication is complete, you can now start using SuperAGI Agents with Google Calendar!"))}d.isMDXComponent=!0}}]);