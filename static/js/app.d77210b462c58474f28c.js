webpackJsonp([8],{"67t3":function(e,t){},"7/ij":function(e,t){},MA4Y:function(e,t,n){e.exports=n.p+"9fb6ab056c4bca51c1f41dbbbbb24162.pdf"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),o=n("NYxO"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"menu-holder"},[n("div",{staticClass:"menu",class:{opened:e.openMenu},on:{click:function(t){e.openMenu=!e.openMenu},mouseleave:function(t){e.openMenu=!1}}},[e._m(0),e._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.openMenu,expression:"openMenu"}],staticClass:"menu-link",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.openMenu,expression:"openMenu"}],staticClass:"menu-link",attrs:{to:"/portfolio"}},[e._v("Portfolio")]),e._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.openMenu,expression:"openMenu"}],staticClass:"menu-link",attrs:{to:"/contact"}},[e._v("Contact")]),e._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.openMenu,expression:"openMenu"}],staticClass:"menu-link",attrs:{to:"/cv"}},[e._v("C.V.")]),e._v(" "),n("a",{attrs:{href:"https://twitter.com/timrunfast",target:"_blank",title:"Go to my fanastical twitter feed"},on:{click:function(t){t.stopPropagation(),e.openMenu=!1}}},[n("div",{staticClass:"logo-twitter"})])],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"logo"}),this._v(" "),t("label",[this._v("Menu")])])}]};var i=n("VU/8")({name:"App",data:function(){return{openMenu:!1}}},a,!1,function(e){n("7/ij")},null,null).exports,r=n("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router-content"},[n("div",{staticClass:"home-logo"}),e._v(" "),n("h2",[e._v("ToruPrints")]),e._v(" "),n("p",[e._v("\n        This site is to allow me to show off what I can do, and to allow people to contact me.\n    ")]),e._v(" "),n("p",[e._v("\n        If you're here for 3D printing commisions then check out my portfolio for a list of things I've done and the different levels of service I can provide\n    ")]),e._v(" "),n("p",[e._v("\n        If you're here because you're curious about what I can provide in terms of CI/CD consultation, then check out my C.V. and browse around the website to see what I'm capable of\n    ")])])}]};var c=n("VU/8")({name:"home"},l,!1,function(e){n("cJyp")},null,null).exports,d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"router-content"},[t("h2",[this._v("Portfolio")]),this._v(" "),t("div",[t("NewsFeed",{directives:[{name:"show",rawName:"v-show",value:null===this.selectedItem,expression:"selectedItem === null"}]}),this._v(" "),t("SelectedItem",{directives:[{name:"show",rawName:"v-show",value:null!==this.selectedItem,expression:"selectedItem !== null"}]})],1)])},staticRenderFns:[]};var u=n("VU/8")({name:"portfolio",computed:{selectedItem:function(){return this.$store.state.selectedItem}}},d,!1,function(e){n("smhM")},null,null).exports,m=n("mtWM"),h=n.n(m),p={name:"contact",data:function(){return{complete:!1}},methods:{submitted:function(e){var t=this.$store.state.contactForm;h.a.post("https://6j10wa597e.execute-api.eu-west-1.amazonaws.com/default/ToruPrintsEmail",t).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)}),this.complete=!0}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contact-form router-content"},[t("h2",[this._v("Contact/Commision Enquiry")]),this._v(" "),t("ContactForm",{directives:[{name:"show",rawName:"v-show",value:!this.complete,expression:"!complete"}],on:{submitted:this.submitted}}),this._v(" "),t("ThankYou",{directives:[{name:"show",rawName:"v-show",value:this.complete,expression:"complete"}]})],1)},staticRenderFns:[]};var f=n("VU/8")(p,v,!1,function(e){n("aGji")},null,null).exports,w=n("c/Tr"),y=n.n(w),g=n("ifoU"),j=n.n(g),b=n("pKPD"),k=n.n(b),I=n("PD1p"),_=n.n(I),S=n("PJh5"),C=n.n(S),x={name:"cv",data:function(){return{tab:"Intro",experience:k.a,skills:_.a}},computed:{skillsGroup:function(){var e=new j.a,t=[];return _.a.forEach(function(t){var n=t.level,s=e.get(n);s?s.push(t):e.set(n,[t])}),y()(e).forEach(function(e){var n={key:e[0],skills:e[1]};t.push(n)}),t}},filters:{formatDate:function(e){return e?C()(String(e),"DD/MM/YYYY").format("MMMM YYYY"):"present"}}},M={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"router-content"},[s("h2",[e._v("Cirriculum Vitea")]),e._v(" "),s("div",{staticClass:"cv-holder"},[s("div",{staticClass:"link-holder"},[s("a",{class:{selected:"Intro"===e.tab},on:{click:function(t){e.tab="Intro"}}},[e._v("Intro")]),e._v(" "),s("a",{class:{selected:"Experience"===e.tab},on:{click:function(t){e.tab="Experience"}}},[e._v("Experience")]),e._v(" "),s("a",{class:{selected:"Skills"===e.tab},on:{click:function(t){e.tab="Skills"}}},[e._v("Skills")]),e._v(" "),s("a",{attrs:{href:n("MA4Y"),target:"_blank"}},[e._v("Download")])]),e._v(" "),s("div",{staticClass:"current-page"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"Intro"===e.tab,expression:"tab === 'Intro'"}]},[s("h3",[e._v("Introduction")]),e._v(" "),s("p",[e._v("\n                    I'm a developer who has been in the industry since 2008. I've gone up the ranks from Graduate developer to Senior and Tech Lead.\n                    I've taken the role of Admin of Dev Ops in 4 companies and introduced a pipeline to allow for increased development via automated deployments and testing.\n                    In some of these companies deployments were taking a developer half a day to complete and now they take no developer time and notify the correct team when features or bug fixes hit their applicable environment.\n                    There has been integration between the Deployment tool and ticket management systems that allow for easier tracking of ticket state; which environment it's currently in, and who is currently working on it.\n                ")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"Experience"===e.tab,expression:"tab === 'Experience'"}]},[s("h3",[e._v("Experience")]),e._v(" "),e._l(e.experience,function(t,n){return s("div",{key:n},[s("h4",{staticClass:"company"},[e._v(e._s(t.company))]),e._v(" "),s("div",{staticClass:"date-range"},[s("small",[e._v(e._s(e._f("formatDate")(t.startDate))+" - "+e._s(e._f("formatDate")(t.endDate)))])]),e._v(" "),e._l(t.positions,function(t,n){return s("div",{key:n,staticClass:"position"},[s("label",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),s("p",[e._v(e._s(t.description))])])}),e._v(" "),s("hr")],2)})],2),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"Skills"===e.tab,expression:"tab === 'Skills'"}]},[s("h3",[e._v("Skills")]),e._v(" "),s("p",[e._v("I've grouped my skills depending on how much time I've had with them: Some indicates I've dabbled either in my spare time or briefly in the industry, Lots means I've worked with it pretty much constantly. If the skill is in bold then it means I've used it in a job")]),e._v(" "),e._l(e.skillsGroup,function(t,n){return s("div",{key:n},[s("h4",[e._v(e._s(t.key))]),e._v(" "),s("div",{staticClass:"skills"},e._l(t.skills,function(t,n){return s("label",{key:n,staticClass:"skill",class:{industry:t.industry}},[e._v(e._s(t.name))])}),0)])})],2)])])])},staticRenderFns:[]};var D=n("VU/8")(x,M,!1,function(e){n("rTlu")},null,null).exports;s.a.use(r.a);var E=new r.a({routes:[{path:"/",name:"Home",component:c},{path:"/portfolio",name:"Portfolio",component:u,meta:{title:"ToruPrints - 3D printing Portfolio"}},{path:"/contact",name:"Contact",component:f,meta:{title:"ToruPrints - Contact Form"}},{path:"/cv",name:"Cv",component:D,meta:{title:"ToruPrints - Cirriculum Vitea"}}]});E.beforeEach(function(e,t,n){document.title=e.meta.title||"ToruPrints - 3D Printing commissions and CI/CD Consultancy",n()});var T=E,z=(n("67t3"),n("pI70")),P=n.n(z);s.a.use(o.a),s.a.config.productionTip=!1,s.a.component("NewsItem",function(){return n.e(0).then(n.bind(null,"YUo1"))}),s.a.component("SelectedItem",function(){return n.e(1).then(n.bind(null,"XfFu"))}),s.a.component("NewsFeed",function(){return n.e(3).then(n.bind(null,"nEXT"))}),s.a.component("MaterialInput",function(){return n.e(4).then(n.bind(null,"AUid"))}),s.a.component("Recaptcha",function(){return n.e(6).then(n.bind(null,"ag1D"))}),s.a.component("ContactForm",function(){return n.e(5).then(n.bind(null,"wCbp"))}),s.a.component("ThankYou",function(){return n.e(2).then(n.bind(null,"bChT"))});var F=new o.a.Store({state:{selectedItem:null,newsItems:P.a,contactForm:{email:"",name:"",message:""}},mutations:{setSelected:function(e,t){e.selectedItem=t.item},clearSelected:function(e){e.selectedItem=null},nextSelected:function(e){var t=P.a.findIndex(function(t){return t.id===e.selectedItem.id});e.selectedItem=P.a[t!==P.a.length-1?++t:0]},prevSelected:function(e){var t=P.a.findIndex(function(t){return t.id===e.selectedItem.id});e.selectedItem=P.a[0!==t?--t:P.a.length-1]},setContactEmail:function(e,t){e.contactForm.email=t.item},setContactName:function(e,t){e.contactForm.name=t.item},setContactMessage:function(e,t){e.contactForm.message=t.item}}});new s.a({el:"#app",store:F,router:T,components:{App:i},template:"<App/>"})},PD1p:function(e,t){e.exports=[{name:"PowerBuilder",level:"Some",industry:!0},{name:"C#",level:"Lots",industry:!0},{name:"Java",level:"Some",industry:!0},{name:"PL/SQL",level:"Some",industry:!0},{name:"Sybase",level:"Some",industry:!0},{name:"ASP.NET",level:"Lots",industry:!0},{name:"WPF",level:"Lots",industry:!0},{name:"Crystal Reports",level:"Some",industry:!0},{name:"MVVM Pattern",level:"Lots",industry:!0},{name:"Perforce Source Control",level:"Lots",industry:!0},{name:"Spring",level:"Some",industry:!0},{name:"TFS Source Control",level:"Some",industry:!0},{name:"Entity Developer",level:"Some",industry:!0},{name:"Azure",level:"Some",industry:!0},{name:"MySQL",level:"Some",industry:!1},{name:"Laravel",level:"Some",industry:!1},{name:"Hibernate",level:"Some",industry:!0},{name:"T-SQL",level:"Lots",industry:!0},{name:"MVC",level:"Lots",industry:!0},{name:"AWS",level:"Some",industry:!1},{name:"PHP",level:"Some",industry:!1},{name:"Dynamics 365 API",level:"Some",industry:!0}]},aGji:function(e,t){},cJyp:function(e,t){},pI70:function(e,t){e.exports=[{id:1,title:"Dragons Head Door Knocker",summary:"The client was after a decoration for this sons bedroom door to add a bit of fun to the decoration. After finding the design he liked, I printed and post processed it to give a metal like finish except for the eyes which were based off a crocodiles",date:"13/01/2019",photos:["IMG_20190113163453773","IMG_20190117_192120","IMG_20190117_192210","IMG_20190118_221652"],folder:"20190113",publish:!0},{id:2,title:"Flane the thirsty, Excoriator Supreme of the blood pits.",summary:"The client was looking to up their D&D game after using stand in pieces of paper for the enemies for over a year now. So I helped him track down a model for the groups latest enemy, which was then printed and packed off to provide a challenge for the group.",date:"03/06/2019",photos:["IMG_20190526_205812","IMG_20190526_205830","IMG_20190603_164648","IMG_20190604_230046"],folder:"20190603",publish:!0}]},pKPD:function(e,t){e.exports=[{company:"Multiply",startDate:"01/03/2019",endDate:null,positions:[{title:"Technical Lead",description:"I was brought on the help manage a project and bring in tools and experience in large scale software development as the current developers had more experience in smaller projects. In the initial weeks I implemented automated deployment and provided training on how to use the tools for further expansion into other areas of development, I started initial work in specifications on the next phase of the project and started migrating the ticket system into a more appropriate layout."}]},{company:"ICAS Ltd",startDate:"01/03/2017",endDate:"01/03/2019",positions:[{title:"Technical Lead",description:"I was original brought onto the company to create and implement a SSO solution for the clients to use for each site that belonged on the ICAS domain. This was implemented and is easily expandable to sites beyond the original settings. After a few months there I introduced CI/CD in the form of TeamCity and Octopus to deploy the internal sites. This reduced the downtime of the sites and the developer volunteered to do the deployment from half a day to 7 minutes on average. Currently because I’m Tech Lead on the project I’m keeping the standards of code of any code checked into the source control system. Recently I was part of the migration from the old CRM to Dynamics 365, this mainly involved moving the backing database and creating extension methods to allow for simpler and faster code entry."}]},{company:"SynGro Ltd",startDate:"01/06/2015",endDate:"01/03/2017",positions:[{title:"Senior Software Developer",description:"I was the Senior software developer in the company. My main tasks were maintaining the legacy systems (written in ASP.NET and T-SQL) and implementing improvements and bug fixes in the new product (using ASP.NET, MVC and Entity Developer). I successfully migrated the company to using TeamCity and am the administrator of it. One task was to optimise the T-SQL that the legacy systems were using to ensure that the servers weren’t under strain for incorrect implemented queries. I’ve been key in helping set up the system in the cloud areas of AWS and Azure, this involved creating VMs setting up the correct resource groups and corresponding security settings."}]},{company:"4Sight Financial Software",startDate:"01/04/2010",endDate:"01/06/2015",positions:[{title:"Graduate Developer",description:"I was hired to help develop and maintain the new front-end system to replace a legacy system. I learnt about the product lifecycle and furthered my understanding of MVVM patterns. I also visited the client on site to provide support, updates and developments in the software."},{title:"Support",description:"I was a part of a dedicated support team, which required me to work across multiple versions of the system and clients. My knowledge of C# and Java was required to help with any issues raised by the client. Being on Support, I was also required to train colleagues on the new system. In addition to this, I learned to use PowerBuilder to help resolve issues in the legacy software."},{title:"On-Site Support",description:"I acted as a first point-of-contact for the client while representing 4Sight in this support role on site abroad. I spent part of the year creating and implementing Crystal Reports and training the client’s teams to use the new system. I then moved on to improving performance in the database by tuning SQL statements. This role allowed me to work directly with 4Sight clients while maintaining effective communication with my team back in the UK."},{title:"Consultant",description:"I worked as part of a team under a Technical Lead developing new features for a client, while adhering to the specifications. I was required to travel to the client site to ensure our software complied with their requirements. Another project involved migrating the backing database system from Oracle to Sybase. This required communication between the Edinburgh and Toronto based teams to coordinate deadlines, where I was responsible for reporting my team progress."},{title:"Technical Lead",description:"I was the Technical Lead of the Edinburgh-based team in which I have built on my skills in management. I am responsible for delegating tasks to my team and ensuring deadlines are met. I held meetings with Business Analysts to create technical specifications for my team in keeping with client requirements."}]},{company:"Axonza",startDate:"01/10/2008",endDate:"01/04/2010",positions:[{title:"Graduate Developer",description:"I was the Lead programmer on the company’s front end system that allowed customers to log in and view their website statistics via flash-generated graphs. It provided a detailed view, including the ability set up rules around web monitoring via drag and drop components. I used a variety of languages throughout my role with Axzona, including JQuery, SqlServer and ASP.NET/C#."}]}]},rTlu:function(e,t){},smhM:function(e,t){},uslO:function(e,t,n){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(e){return n(a(e))}function a(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.d77210b462c58474f28c.js.map