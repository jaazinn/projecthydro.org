(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(33)},18:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=(a(18),a(12)),o=a(2),m=a(3),s=a(5),d=a(4),u=a(6),h=a(8),E=a(11),p=a(7),f=(a(23),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card_Banner",style:{backgroundImage:'url("'.concat("","/backgrounds/").concat(this.props.backgroundName,'")')}},l.a.createElement("div",{className:"card_Avatar",style:{backgroundImage:'url("'.concat("","/people/").concat(this.props.photoName,'")')}})),l.a.createElement("h3",null,this.props.name),l.a.createElement("a",{href:"mailto:".concat(this.props.email)},this.props.email),l.a.createElement("ul",null,l.a.createElement("a",{href:this.props.linkedIn,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{style:{fontSize:25}},l.a.createElement(p.a,{icon:["fab","linkedin"]}))),l.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{style:{fontSize:25}},l.a.createElement(p.a,{icon:["fab","github"]}))),l.a.createElement("a",{href:this.props.twitter,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{style:{fontSize:25}},l.a.createElement(p.a,{icon:["fab","twitter"]})))))}}]),t}(n.Component)),b=(a(25),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("ul",{className:"nav-bar"},l.a.createElement("li",null,l.a.createElement("a",{href:"#roadmap"},"Roadmap")),l.a.createElement("li",null,l.a.createElement("a",{href:"#team"},"Team")),l.a.createElement("li",null,l.a.createElement("img",{src:"".concat("","/logo.gif"),alt:"Project Hydro Logo",height:"100",width:"100"})),l.a.createElement("li",null,l.a.createElement("a",{href:"/documentation"},"Docs")),l.a.createElement("li",null,l.a.createElement("a",{href:"/events"},"Events")))}}]),t}(n.Component)),g=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){function e(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}document.querySelectorAll(".roadmap-card").forEach(function(t){return t.addEventListener("click",e)})}},{key:"render",value:function(){return l.a.createElement("div",{class:"roadmap-container"},l.a.createElement("div",{class:"cardContainer inactive"},l.a.createElement("div",{class:"roadmap-card"},l.a.createElement("div",{class:"side front"},l.a.createElement("div",{class:"img",style:{backgroundImage:'url("'.concat("",'/roadmap/raindrop.png")')}}),l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"Raindrop"),l.a.createElement("p",null,"Two-factor authentication (2FA) on the blockchain."))),l.a.createElement("div",{class:"side back"},l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"At a glance"),l.a.createElement("ul",null,l.a.createElement("li",null,"Protect your account with an Ethereum address"),l.a.createElement("li",null,"Very login attempts through Smart Contracts"),l.a.createElement("li",null,"Easy to port to a new mobile device"))))),l.a.createElement("div",{class:"btn"},l.a.createElement("a",{href:"https://github.com/hydrogen-dev/hydro-docs/blob/master/Raindrop/Raindrop.md"},l.a.createElement("button",null,"Whitepaper")))),l.a.createElement("div",{class:"cardContainer inactive"},l.a.createElement("div",{class:"roadmap-card"},l.a.createElement("div",{class:"side front"},l.a.createElement("div",{class:"img",style:{backgroundImage:'url("'.concat("",'/roadmap/snowflake.png")')}}),l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"Snowflake"),l.a.createElement("p",null,"Unique and distributed user identity."))),l.a.createElement("div",{class:"side back"},l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"At a glance"),l.a.createElement("ul",null,l.a.createElement("li",null,"Build on ERC-1484"),l.a.createElement("li",null,"Allow for use of multiple address in one identity"),l.a.createElement("li",null,"Protect your user data"))))),l.a.createElement("div",{class:"btn"},l.a.createElement("a",{href:"https://github.com/hydrogen-dev/hydro-docs/blob/master/Snowflake/Snowflake_DRAFT.md"},l.a.createElement("button",null,"Whitepaper")))),l.a.createElement("div",{class:"cardContainer inactive"},l.a.createElement("div",{class:"roadmap-card"},l.a.createElement("div",{class:"side front"},l.a.createElement("div",{class:"img",style:{backgroundImage:'url("'.concat("",'/roadmap/ice.png")')}}),l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"Ice"),l.a.createElement("p",null,"Document storage and signing."))),l.a.createElement("div",{class:"side back"},l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"At a glance"),l.a.createElement("ul",null,l.a.createElement("li",null,"Securely sign and stamp documents"),l.a.createElement("li",null,"Very multiparty docuemnt signatures"))))),l.a.createElement("div",{class:"btn"},l.a.createElement("a",{href:"https://github.com/hydrogen-dev/hydro-docs/blob/master/Ice/Ice_DRAFT.md"},l.a.createElement("button",null,"Whitepaper")))),l.a.createElement("div",{class:"cardContainer inactive"},l.a.createElement("div",{class:"roadmap-card"},l.a.createElement("div",{class:"side front"},l.a.createElement("div",{class:"img",style:{backgroundImage:'url("'.concat("",'/roadmap/tide.png")')}}),l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"Tide"),l.a.createElement("p",null,"A layer 2 payments protocol."))),l.a.createElement("div",{class:"side back"},l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"At a glance"),l.a.createElement("ul",null,l.a.createElement("li",null,"Transact quickly and securely on top of Ethereum"),l.a.createElement("li",null,"Reduce user friction in applications"))))),l.a.createElement("div",{class:"btn"},l.a.createElement("a",{href:"#roadmap"},l.a.createElement("button",null,"Coming Soon")))),l.a.createElement("div",{class:"cardContainer inactive"},l.a.createElement("div",{class:"roadmap-card"},l.a.createElement("div",{class:"side front"},l.a.createElement("div",{class:"img",style:{backgroundImage:'url("'.concat("",'/roadmap/mist.png")')}}),l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"Mist"),l.a.createElement("p",null,"Blockchain based AI."))),l.a.createElement("div",{class:"side back"},l.a.createElement("div",{class:"info"},l.a.createElement("h2",null,"At a glance"),l.a.createElement("ul",null,l.a.createElement("li",null,"TODO"),l.a.createElement("li",null,"TODO"))))),l.a.createElement("div",{class:"btn"},l.a.createElement("a",{href:"#roadmap"},l.a.createElement("button",null,"Coming Soon")))))}}]),t}(n.Component)),v=(a(29),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer-distributed"},l.a.createElement("div",{className:"footer-left"},l.a.createElement("h3",null,"Project Hydro"),l.a.createElement("p",{className:"footer-links"})),l.a.createElement("div",{className:"footer-center"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",null,"Everywhere")," The World")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:hydro@hydrogenplatform.com"},"hydro@hydrogenplatform.com")))),l.a.createElement("div",{className:"footer-right"},l.a.createElement("p",{className:"footer-company-about"},l.a.createElement("span",null,"About the Project"),"Hydro is a public and decentralized project building products on the Ethereum blockchain."),l.a.createElement("div",{className:"footer-icons"},l.a.createElement("a",{href:"https://twitter.com/HydrogenAPI",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{icon:["fab","twitter"]})),l.a.createElement("a",{href:"https://www.linkedin.com/company/hydrogenplatform/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{icon:["fab","linkedin"]})),l.a.createElement("a",{href:"https://github.com/hydrogen-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{icon:["fab","github"]})))))}}]),t}(n.Component));a(31);h.b.add(E.a);var y={height:"100vh",width:"100%",margin:0,paddingTop:130,display:"block"},k={width:"100%",margin:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:y},l.a.createElement(b,null),l.a.createElement("h2",{style:{width:"100%",textAlign:"center"}},"Project Hydro"),l.a.createElement("section",{className:"sections"},"Hydro is a layer 2 blockchain platform built on top of Ethereum"),l.a.createElement("h2",{style:{width:"100%",textAlign:"center"}},"Roadmap"),l.a.createElement("section",{className:"sections"},l.a.createElement(g,null)),l.a.createElement("h2",{style:{width:"100%",textAlign:"center"}},"Core Contributors"),l.a.createElement("section",{className:"sections",id:"team"},l.a.createElement("div",{style:Object(i.a)({},k,{flex:1}),id:"cards"},l.a.createElement(f,{name:"Andy Chorlian",linkedIn:"https://www.linkedin.com/in/achorlia/",email:"andy@hydrogenplatform.com",twitter:"https://twitter.com/andy8052",github:"https://github.com/AndyHydro",photoName:"andy.jpeg",backgroundName:"architecture.jpg"}),l.a.createElement(f,{name:"Noah Zinsmeister",linkedIn:"https://www.linkedin.com/in/noahzinsmeister/",email:"noah@hydrogenplatform.com",twitter:"https://twitter.com/noahzinsmeister",github:"https://github.com/noahhydro",photoName:"noah.png",backgroundName:"stars.png"}),l.a.createElement(f,{name:"Shane Hampton",linkedIn:"https://www.linkedin.com/in/shane-hampton-a9689b49/",email:"shane@hydrogenplatform.com",twitter:"https://twitter.com/citizenshane_",github:"https://github.com/shanehampton",photoName:"shane.png",backgroundName:"hexagons.png"}))),l.a.createElement(v,null))}}]),t}(n.Component);c.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.92f21c8a.chunk.js.map