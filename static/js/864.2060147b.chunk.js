"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[864],{5194:function(e,t,r){r.d(t,{Z:function(){return o}});var i=r(2791),a=r(6408),n=r(3504),s=r(184),l=function(e){var t=e.title,r=e.category,i=e.image;return(0,s.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,s.jsx)(n.rU,{to:"/experiences/single-experience/".concat(t),"aria-label":t,children:(0,s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:i,className:"object-cover h-48 w-96 rounded-t-xl border-none",alt:"Single Experience"})}),(0,s.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,s.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,s.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},c=r(2375),o=function(){var e=(0,i.useContext)(c.I),t=e.Experiences,r=e.searchExperience,a=(e.setSearchExperience,e.searchExperiencesByTitle),n=e.selectExperience,o=(e.setSelectExperience,e.selectExperiencesByCategory);return(0,s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Experience"})}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:n?o.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})})):r?a.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})})):t.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})}))})]})}},2612:function(e,t,r){r.d(t,{Z:function(){return o}});var i=r(2791),a=r(6408),n=r(3504),s=r(184),l=function(e){var t=e.title,r=e.category,i=e.image;return(0,s.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,s.jsx)(n.rU,{to:"/projects/single-project/".concat(t),"aria-label":t,children:(0,s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:i,className:"object-cover h-48 w-96 rounded-t-xl border-none",alt:"Single Project"})}),(0,s.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,s.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,s.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},c=r(246),o=function(){var e=(0,i.useContext)(c.v),t=e.Projects,r=e.searchProject,a=(e.setSearchProject,e.searchProjectsByTitle),n=e.selectProject,o=(e.setSelectProject,e.selectProjectsByCategory);return(0,s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-5",children:[(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects"})}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:n?o.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})})):r?a.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})})):t.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})}))})]})}},2375:function(e,t,r){r.d(t,{I:function(){return o},i:function(){return d}});var i=r(8152),a=r(2791),n=r(242),s=r(5633),l=[{id:1,title:"NASA Ames Research Center",category:"Machine Learning Intern",dates:"Sep 2023 - Dec 2023",img:n},{id:2,title:"Alexa",category:"Software Engineer Intern",dates:"Jun 2023 - Sep 2023",img:r(8190)},{id:3,title:"Arista Networks",category:"Software Engineer Intern",dates:"Apr 2023 - Jun 2023",img:r(9962)},{id:4,title:"Amazon Web Services",category:"Software Engineer Intern",dates:"Jun 2022 - Sep 2022",img:s},{id:5,title:"Insane Ink",category:"Webmaster",dates:"Sep 2019 - Jun 2020",img:r(7503)}],c=r(184),o=(0,a.createContext)(),d=function(e){var t=(0,a.useState)(l),r=(0,i.Z)(t,2),n=r[0],s=r[1],d=(0,a.useState)(""),x=(0,i.Z)(d,2),m=x[0],g=x[1],u=(0,a.useState)(""),h=(0,i.Z)(u,2),p=h[0],f=h[1],y=n.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())||""===m?e:""})),j=n.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(p)}));return(0,c.jsx)(o.Provider,{value:{Experiences:n,setExperiences:s,searchExperience:m,setSearchExperience:g,searchExperiencesByTitle:y,selectExperience:p,setSelectExperience:f,selectExperiencesByCategory:j},children:e.children})}},246:function(e,t,r){r.d(t,{v:function(){return d},V:function(){return x}});var i=r(8152),a=r(2791),n=r.p+"static/media/keyspace-project.26f1536d99f0f92b0fe6.png",s=r.p+"static/media/fitfinder-project.65f7ca8348703499f4f2.png",l=r.p+"static/media/slugmaps-project.02b08b6619803ea227bc.png",c=(r.p,[{id:1,title:"Key Space",category:"Distributed Systems",img:n},{id:2,title:"Fit Finder",category:"Website Application",img:s},{id:3,title:"Slug Maps",category:"Mobile Application",img:l}]),o=r(184),d=(0,a.createContext)(),x=function(e){var t=(0,a.useState)(c),r=(0,i.Z)(t,2),n=r[0],s=r[1],l=(0,a.useState)(""),x=(0,i.Z)(l,2),m=x[0],g=x[1],u=(0,a.useState)(""),h=(0,i.Z)(u,2),p=h[0],f=h[1],y=n.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())||""===m?e:""})),j=n.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(p)}));return(0,o.jsx)(d.Provider,{value:{Projects:n,setProjects:s,searchProject:m,setSearchProject:g,searchProjectsByTitle:y,selectProject:p,setSelectProject:f,selectProjectsByCategory:j},children:e.children})}},1554:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var i=r(3504),a=r(8152),n=r(5558);r(2791);var s=r.p+"static/media/developer.ef097afbc427c634086d2f1c2ad6032e.svg";var l=r.p+"static/media/developer-dark.3f07bd13e2bd324f87466260088da040.svg",c=r(6408),o=r(184),d=function(){var e=(0,n.Z)(),t=(0,a.Z)(e,1)[0];return(0,o.jsxs)(c.E.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,o.jsx)(c.E.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Abhi \ud83d\udc4b"}),(0,o.jsx)(c.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"Software Engineer - Systems, Cloud, and ML"}),(0,o.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block"})]}),(0,o.jsx)(c.E.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,o.jsx)("img",{src:"dark"===t?s:l,alt:"Developer"})})]})},x=r(2612),m=r(246),g=(r(5194),r(2375),r(992)),u=(r(3468),r(640)),h=r(242),p=(r(5633),r(8190)),f=r(9962),y=(r(7503),function(){return(0,o.jsxs)("section",{className:"py-5 sm:py-10 font-general-medium text-2xl sm:text-4xl",children:[(0,o.jsxs)("ol",{class:"relative border-l border-gray-200 dark:border-gray-700",children:[(0,o.jsxs)("li",{class:"mb-10 ml-6",children:[(0,o.jsx)("span",{class:"absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",children:(0,o.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,o.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,o.jsx)(u.Z,{title:"NASA Ames Research Center",position:"Machine Learning Intern",dates:"September 2023 - December 2023",info:"Harnessing the power of machine learning (ML) and data from the James Webb Space Telescope (JWST) to predict atmospheric features of exoplanets, with the goal of potentially finding signs of life beyond our planet.",img:h,isCurrent:!0,isMore:!1})]}),(0,o.jsxs)("li",{class:"mb-10 ml-6 h-25px",children:[(0,o.jsx)("span",{class:"absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",children:(0,o.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,o.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,o.jsx)(u.Z,{title:"Alexa",position:"Software Engineer Intern",dates:"June 2023 - September 2023",info:"Leveraged systems design and backend engineering to improve machine learning (ML) workflow and device arbitration in a multi-device environment for millions of Alexa customers.",img:p,isCurrent:!1,isMore:!1})]}),(0,o.jsxs)("li",{class:"mb-10 ml-6",children:[(0,o.jsx)("span",{class:"absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",children:(0,o.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,o.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,o.jsx)(u.Z,{title:"Arista Networks",position:"Software Engineer Intern",dates:"April 2023 - June 2023",info:"Used software-defined networking (SDN) to improve the performance and support of Arista's EOS routing engine, enabling it to scale and meet the demands of the world's biggest cloud data centers.",img:f,isCurrent:!1,isMore:!1})]})]}),(0,o.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,o.jsx)(i.rU,{to:"/experiences",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,o.jsx)(g.Z,{title:"Check out more"})})})]})}),j=function(){return(0,o.jsxs)("div",{className:"container mx-auto",children:[(0,o.jsx)(d,{}),(0,o.jsxs)("div",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,o.jsx)("p",{className:"text-center font-general-medium text-2xl sm:text-4xl mt-5 text-ternary-dark dark:text-ternary-light",children:"Experience"}),(0,o.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mt-1 text-ternary-dark dark:text-ternary-light",children:"2023"}),(0,o.jsx)(y,{})]}),(0,o.jsx)(m.V,{children:(0,o.jsx)(x.Z,{})}),(0,o.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,o.jsx)(i.rU,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,o.jsx)(g.Z,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=864.2060147b.chunk.js.map