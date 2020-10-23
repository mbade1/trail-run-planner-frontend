(this["webpackJsonptrail-run-planner-frontend"]=this["webpackJsonptrail-run-planner-frontend"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/picture-not-found.e67b896b.jpg"},30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),u=(a(35),a(3)),o=a(4),i=a(6),s=a(5),m=(a(36),a(7)),d=a(9),h=a(2),p="https://trail-run-planner-api.herokuapp.com",E=a(14),f=a(8),b=a(18),g=a(19),y=a.n(g),v=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(f.a)(Object(f.a)({},n.state),{},Object(E.a)({},e.target.name,!!e.target.value)))},n.handleSubmit=function(e){var t,a,l,r=window.localStorage.id,c=[];for(var u in n.state)!0===n.state[u]&&c.push(u);if(1===c.length)alert("Remember to bring: ".concat(c[0].toLowerCase()));else if(2===c.length){var o=c.join(" and ");alert("Remember to bring: ".concat(o.toLowerCase(),"!"))}else if(c.length>2){var i=c.pop(),s=c.join(", ");alert("Remember to bring: ".concat(s.toLowerCase(),", and ").concat(i.toLowerCase(),"!"))}t=r,a=e.target.id,l=n.state,fetch("".concat(p,"/users/").concat(t,"/journals/").concat(a),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:l})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},n.handleDelete=function(e){!function(e,t){fetch("".concat(p,"/users/").concat(e,"/journals/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({journal:t})}),fetch("".concat(p,"/users/").concat(e,"/journals")).then((function(e){return e.json()}))}(window.localStorage.id,e.target.value),alert("This run has been deleted."),n.props.history.push("/trails")},n.state={journals:[],tShirt:!1,shorts:!1,pants:!1,jacket:!1,gloves:!1,hat:!1,shoes:!1,socks:!1,map:!1,watch:!1,cellPhone:!1,food:!1,water:!1,runningPack:!1,firstAidPack:!1,sunScreen:!1,bugSpray:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.journals.length>=1&&window.localStorage.id?l.a.createElement("div",null,this.props.journals.map((function(t){return l.a.createElement("div",{key:t.id,className:"journal-trail"},l.a.createElement("img",{src:t.imgMedium||y.a,alt:"".concat(t.name," trailhead")}),l.a.createElement("h2",null,t.name),l.a.createElement("h3",null,"Day of Run: ",t.date_of_run),l.a.createElement("div",{className:"journal-map-and-info"},l.a.createElement(b.a,{url:"https://www.google.com/maps/embed/v1/place?key=".concat("AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ","&q=location=").concat(t.latitude,",").concat(t.longitude),width:"200px",height:"200px",id:"myId",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement("p",null,l.a.createElement("b",null,l.a.createElement("u",null,"Miles:"))," ",t.length,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Difficulty:"))," ",t.difficulty,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Latest Conditions:"))," ",t.conditionStatus," ",t.conditionDetails,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement("div",{className:"packingList"},l.a.createElement("h2",null,"What to Pack"),l.a.createElement("h3",null,"Clothing"),l.a.createElement("p",null,l.a.createElement("form",{onSubmit:e.handleSubmit,id:t.id},"T-Shirt:"," ",l.a.createElement("input",{type:"checkbox",name:"tShirt",onChange:function(t){return e.handleChange(t)},value:e.state.tShirt}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Shorts:"," ",l.a.createElement("input",{type:"checkbox",name:"shorts",onChange:function(t){return e.handleChange(t)},value:e.state.shorts}),"\xa0\xa0\xa0| \xa0\xa0\xa0 Pants"," ",l.a.createElement("input",{type:"checkbox",name:"pants",onChange:function(t){return e.handleChange(t)},value:e.state.pants}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Jacket:"," ",l.a.createElement("input",{type:"checkbox",name:"jacket",onChange:function(t){return e.handleChange(t)},value:e.state.jacket}),l.a.createElement("br",null),"Gloves:"," ",l.a.createElement("input",{type:"checkbox",name:"gloves",onChange:function(t){return e.handleChange(t)},value:e.state.gloves}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Hat:"," ",l.a.createElement("input",{type:"checkbox",name:"hat",onChange:function(t){return e.handleChange(t)},value:e.state.hat}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Shoes:"," ",l.a.createElement("input",{type:"checkbox",name:"shoes",onChange:function(t){return e.handleChange(t)},value:e.state.shoes}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Socks:"," ",l.a.createElement("input",{type:"checkbox",name:"socks",onChange:function(t){return e.handleChange(t)},value:e.state.socks}),l.a.createElement("h3",null,"Maps and Communications"),"Map:"," ",l.a.createElement("input",{type:"checkbox",name:"map",onChange:function(t){return e.handleChange(t)},value:e.state.map}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Watch:"," ",l.a.createElement("input",{type:"checkbox",name:"watch",onChange:function(t){return e.handleChange(t)},value:e.state.watch}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Cellphone:"," ",l.a.createElement("input",{type:"checkbox",name:"cellphone",onChange:function(t){return e.handleChange(t)},value:e.state.cellPhone}),l.a.createElement("h3",null,"Nutrition"),"Food:"," ",l.a.createElement("input",{type:"checkbox",name:"food",onChange:function(t){return e.handleChange(t)},value:e.state.food}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Water:"," ",l.a.createElement("input",{type:"checkbox",name:"water",onChange:function(t){return e.handleChange(t)},value:e.state.water}),l.a.createElement("h3",null,"Extra"),"Running Pack:"," ",l.a.createElement("input",{type:"checkbox",name:"runningpack",onChange:function(t){return e.handleChange(t)},value:e.state.runningPack}),"\xa0\xa0\xa0|\xa0\xa0\xa0 First Aid Pack:"," ",l.a.createElement("input",{type:"checkbox",name:"firstaidpack",onChange:function(t){return e.handleChange(t)},value:e.state.firstAidPack}),l.a.createElement("br",null),"Sunscreen:"," ",l.a.createElement("input",{type:"checkbox",name:"sunscreen",onChange:function(t){return e.handleChange(t)},value:e.state.sunScreen}),"\xa0\xa0\xa0|\xa0\xa0\xa0 Bugspray:"," ",l.a.createElement("input",{type:"checkbox",name:"bugspray",onChange:function(t){return e.handleChange(t)},value:e.state.bugSpray}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Pack for Run!"}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("button",{value:t.id,onClick:function(t){return e.handleDelete(t)}},"Delete Run"))))}))):this.props.journals.length<1&&window.localStorage.id?l.a.createElement("div",{className:"journal-trail"},l.a.createElement("h2",null,"To add a run, click on Trails above")):l.a.createElement("div",{className:"journal-trail"},l.a.createElement("h2",null,"Log in or Sign up to make your journal!"))}}]),a}(l.a.Component),j=Object(h.f)(v),C=function(){return l.a.createElement("div",{className:"journal"},l.a.createElement("h1",null,"My Running Journal"))},O=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=window.localStorage.id;this.props.journalFetch(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"journal-container"},l.a.createElement(C,null),l.a.createElement(j,{journals:this.props.journals}))}}]),a}(l.a.Component),S=Object(m.b)((function(e){return{journals:e.journals,id:e.id}}),{journalFetch:function(e){return function(t){fetch("".concat(p,"/users/").concat(e,"/journals")).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_JOURNALTRAILS",payload:e})}))}}})(O);console.log("AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ");var k=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({dateOfRun:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=window.localStorage.id,n={hikerProjectId:t.target[1].defaultValue,imgMedium:t.target[2].defaultValue,name:t.target[3].defaultValue,length:t.target[4].defaultValue,difficulty:t.target[5].defaultValue,stars:t.target[6].defaultValue,starVotes:t.target[7].defaultValue,conditionDetails:t.target[8].defaultValue,conditionStatus:t.target[9].defaultValue,latitude:t.target[10].defaultValue,longitude:t.target[11].defaultValue};e.props.journalPost(a,e.state.userId,e.state.dateOfRun,n),e.setState({dateOfRun:"",journals:[]}),alert("This run has been added to your journal!")},e.state={journal:"",dateOfRun:"",userId:window.localStorage.id,trailId:"",journals:[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return window.localStorage.id?l.a.createElement("div",{className:"trails"},this.props.trails.map((function(t){return l.a.createElement("div",{key:t.id,className:"trail"},l.a.createElement("img",{src:t.imgMedium||y.a,alt:"".concat(t.name," trailhead")}),l.a.createElement("h2",null,t.name),l.a.createElement(b.a,{url:"https://www.google.com/maps/embed/v1/place?key=".concat("AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ","&q=location=").concat(t.latitude,",").concat(t.longitude),width:"200px",height:"200px",id:"myId",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement("p",null,l.a.createElement("b",null,l.a.createElement("u",null,"Miles:"))," ",t.length,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Difficulty:"))," ",t.difficulty,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Rating:"))," ",t.stars," out of ",t.starVotes," votes",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Latest Conditions:"))," ",t.conditionStatus," ",t.conditionDetails,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Add Run to Journal:"),l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("input",{type:"date",onChange:function(t){return e.handleChange(t)},value:e.state.dateOfRun}),l.a.createElement("input",{type:"hidden",id:"trailId",value:t.id}),l.a.createElement("input",{type:"hidden",value:t.imgMedium}),l.a.createElement("input",{type:"hidden",value:t.name}),l.a.createElement("input",{type:"hidden",value:t.length}),l.a.createElement("input",{type:"hidden",value:t.difficulty}),l.a.createElement("input",{type:"hidden",value:t.stars}),l.a.createElement("input",{type:"hidden",value:t.starVotes}),l.a.createElement("input",{type:"hidden",value:t.conditionDetails}),l.a.createElement("input",{type:"hidden",value:t.conditionStatus}),l.a.createElement("input",{type:"hidden",value:t.latitude}),l.a.createElement("input",{type:"hidden",value:t.longitude}),l.a.createElement("input",{type:"submit",value:"Add Run"}))))}))):l.a.createElement("div",{className:"trails"},this.props.trails.map((function(e){return l.a.createElement("div",{key:e.id,className:"trail"},l.a.createElement("img",{src:e.imgMedium||y.a,alt:"".concat(e.name," trailhead")}),l.a.createElement("h2",null,e.name),l.a.createElement(b.a,{url:"https://www.google.com/maps/embed/v1/place?key=".concat("AIzaSyCtvdMdqe2ppwzO7Y6faMVpDo-sJG0SkkQ","&q=location=").concat(e.latitude,",").concat(e.longitude),width:"200px",height:"200px",id:"myId",className:"myClassname",display:"initial",position:"relative"}),l.a.createElement("p",null,l.a.createElement("b",null,l.a.createElement("u",null,"Miles:"))," ",e.length,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Difficulty:"))," ",e.difficulty,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Rating:"))," ",e.stars," out of ",e.starVotes," votes",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("u",null,"Latest Conditions:"))," ",e.conditionStatus," ",e.conditionDetails,l.a.createElement("br",null),l.a.createElement("br",null)))})))}}]),a}(l.a.Component),w=Object(m.b)((function(e){return{dateOfRun:e.dateOfRun,journals:e.journal}}),{journalPost:function(e,t,a,n){return function(l){fetch("".concat(p,"/users/").concat(e,"/journals"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({journal:{hiker_project_id:t,dateOfRun:a,body:n}})}).then((function(e){return e.json()})).then((function(e){l({type:"ADD_JOURNAL",payload:e})})).catch((function(e){return alert("Run not added to journal.")}))}}})(k),T=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.city.split(" ").join("+");n.props.fetchCityAndTrails(t,n.state.statee),n.setState({value:"",city:"",statee:""})},n.state={city:"",statee:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"trail-search"},l.a.createElement("h1",null,"Trail Search"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("b",null,"City"),":"," ",l.a.createElement("input",{type:"text",name:"city",onChange:function(t){return e.handleChange(t)},value:this.state.city,placeholder:"Foresta"}),"\xa0",l.a.createElement("b",null,"State"),":"," ",l.a.createElement("input",{type:"text",name:"statee",onChange:function(t){return e.handleChange(t)},value:this.state.statee,placeholder:"CA"}),"\xa0",l.a.createElement("input",{type:"submit",value:"Search for trails!"})),l.a.createElement("p",null,l.a.createElement("i",null,'Enter your city and State initials. Ex: City: "Foresta" State: "CA"')))}}]),a}(l.a.Component),N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCityAndTrails()}},{key:"render",value:function(){return l.a.createElement("div",{className:"trails-container"},l.a.createElement(T,{fetchCityAndTrails:this.props.fetchCityAndTrails}),l.a.createElement(w,{trails:this.props.trails}))}}]),a}(l.a.Component),R=Object(m.b)((function(e){return{trails:e.trails}}),{fetchCityAndTrails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Foresta",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"CA";return function(a){fetch("https://api.geocod.io/v1.6/geocode?q=".concat(e,"%2c+").concat(t,"&api_key=").concat("fc2c5a56d555f92a9adc9526f2a5daa15a6a53a")).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return alert("Please enter the exact city name and state initials.")}));var n=function(e){fetch("https://www.hikingproject.com/data/get-trails?lat=".concat(e.results[0].location.lat,"&lon=").concat(e.results[0].location.lng,"&maxResults=50&key=").concat("200922216-abc9f3b851d5d8ddadbd0acb2322cefe")).then((function(e){return e.json()})).then((function(e){return a({type:"FETCH_TRAILS",payload:e})}))}}}})(N),x=function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"home-container"},l.a.createElement("h1",null,"Welcome to the Trail Running Planner"),l.a.createElement("br",null),l.a.createElement("p",null,"A site made by a trail runner, for trail runners.")))},A=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.logInFetch(n.state.username,n.state.password),n.setState({user:"",password:""}),n.props.history.push("/trails")},n.state={username:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SignUp"},l.a.createElement("div",{className:"sign-up-form-container"},l.a.createElement("h1",null,"Log In"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("b",null,"Username"),":"," ",l.a.createElement("input",{type:"text",name:"username",onChange:function(t){return e.handleChange(t)},value:this.state.username}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Password"),":"," ",l.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleChange(t)},value:this.state.password}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",value:"Log In!"}))))}}]),a}(l.a.Component),D=Object(h.f)(Object(m.b)((function(e){return{user:e.user}}),{logInFetch:function(e,t){return function(a){fetch("".concat(p,"/sessions"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){e.id?(localStorage.setItem("id",e.id),a({type:"SET_USER",payload:e})):alert(e.message)}))}}})(A)),I=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUpFetch(e.state.user,e.state.password),e.props.history.push("/trails")},e.state={user:"",password:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SignUp"},l.a.createElement("div",{className:"sign-up-form-container"},l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("b",null,"Username"),":"," ",l.a.createElement("input",{type:"text",name:"user",onChange:function(t){return e.handleChange(t)},value:this.state.user}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Password"),":"," ",l.a.createElement("input",{type:"password",name:"password",onChange:function(t){return e.handleChange(t)},value:this.state.password}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",value:"Sign Up!"}))))}}]),a}(l.a.Component),L=Object(h.f)(Object(m.b)((function(e){return{user:e.user}}),{signUpFetch:function(e,t){return function(a){fetch("".concat(p,"/users"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{user:e,password:t}})}).then((function(e){return e.json()})).then((function(e){e.id?(localStorage.setItem("id",e.id),a({type:"ADD_USER",payload:e})):alert(e.message)}))}}})(I)),M=Object(h.f)(Object(m.b)((function(e){return{user:e.user,id:e.id}}),{logOutFetch:function(e){localStorage.removeItem("id"),fetch("".concat(p,"/users/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){localStorage.removeItem("id"),dispatchEvent({type:"LOGOUT_USER",payload:e})}))}})((function(e){var t=e.history;return l.a.createElement("div",{className:"LogOut"},l.a.createElement("div",{className:"logout-container"},l.a.createElement("h1",null,"Are you sure you want to Log Out?"),l.a.createElement("div",{onClick:function(){localStorage.removeItem("id"),t.push("/"),window.location.reload()}},l.a.createElement("p",null,"If yes, click here."))))})));function _(){return!!window.localStorage.getItem("id")}var P=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){_()}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,_()?l.a.createElement("nav",null,l.a.createElement(d.b,{to:"/"},"Home")," | ",l.a.createElement(d.b,{to:"/trails"},"Trails")," |"," ",l.a.createElement(d.b,{to:"/journals"},"Running Journal")," |"," ",l.a.createElement(d.b,{to:"/logout"},"Log Out")):l.a.createElement("nav",null,l.a.createElement(d.b,{to:"/"},"Home")," | ",l.a.createElement(d.b,{to:"/trails"},"Trails")," |"," ",l.a.createElement(d.b,{to:"/login"},"Log In")," |"," ",l.a.createElement(d.b,{to:"/signup"},"Sign Up")),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(h.a,{path:"/trails"},l.a.createElement(R,null)),l.a.createElement(h.a,{path:"/journals"},l.a.createElement(S,null)),l.a.createElement(h.a,{exact:!0,path:"/login"},l.a.createElement(D,null)),l.a.createElement(h.a,{exact:!0,path:"/signup"},l.a.createElement(L,null)),l.a.createElement(h.a,{exact:!0,path:"/logout"},l.a.createElement(M,null)))))}}]),a}(l.a.Component),U={trails:[],username:"",id:"",journals:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TRAILS":return Object(f.a)(Object(f.a)({},e),{},{trails:t.payload.trails});case"ADD_USER":case"SET_USER":return Object(f.a)(Object(f.a)({},e),{},{username:t.payload.username,id:t.payload.id});case"ADD_JOURNAL":return Object(f.a)(Object(f.a)({},e),{},{journals:[t.payload]});case"FETCH_JOURNALTRAILS":return Object(f.a)(Object(f.a)({},e),{},{journals:t.payload});case"LOGOUT_USER":return Object(f.a)(Object(f.a)({},e),{},{username:"",id:""});default:return e}},J=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("i",null,l.a.createElement("b",null,"Many thanks to the Hiker Project and Geocodio. Created by Michael Bade. For more apps,"," ",l.a.createElement("a",{href:"http://mbadedeveloper.com",rel:"noreferrer noopener",target:"_blank"},"click here."))))},V=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(P,{props:this.props}),l.a.createElement(J,null))}}]),a}(l.a.Component);var H=Object(m.b)((function(e){return{user:e.user,trails:e.trails,journals:e.journals}}),(function(e){return{signUpFetch:function(){return e(F())},fetchTrails:function(){return e(F())},journalFetch:function(){return e(F())},logInFetch:function(){return e(F())},logOutFetch:function(){return e(F())}}}))(V),q=a(16),z=a(29),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.c,Q=Object(q.d)(F,G(Object(q.a)(z.a)));c.a.render(l.a.createElement(m.a,{store:Q},l.a.createElement(d.a,null,l.a.createElement(H,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.575a47e9.chunk.js.map