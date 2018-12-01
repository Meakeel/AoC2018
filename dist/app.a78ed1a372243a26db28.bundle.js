!function(n){function r(r){for(var t,i,s=r[0],u=r[1],c=r[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(l&&l(r);p.length;)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var n,r=0;r<o.length;r++){for(var e=o[r],t=!0,s=1;s<e.length;s++){var u=e[s];0!==a[u]&&(t=!1)}t&&(o.splice(r--,1),n=i(i.s=e[0]))}return n}var t={},a={0:0},o=[];function i(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=t,i.d=function(n,r,e){i.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,r){if(1&r&&(n=i(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)i.d(e,t,function(r){return n[r]}.bind(null,t));return e},i.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(r,"a",r),r},i.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var l=u;o.push([136,5,3,4,2,1]),e()}({136:function(n,r,e){e(137),e(308),n.exports=e(311)},app:function(n,r,e){"use strict";e.r(r),e.d(r,"App",function(){return t});var t=function(){function n(){}return n.prototype.configureRouter=function(n,r){this.router=r,n.title="Paul Sparkes AoC",n.map([{route:["","home"],name:"home",moduleId:"days/main",nav:0,title:"Home"},{route:"day-01",name:"day-01",moduleId:"days/01/main",nav:1,title:"Day 1"}])},n}()},"app.html":function(n,r,e){n.exports='<template>\n  <require from=\'./resources/sass/main.scss\'></require>\n  <compose view-model="./navbar"></compose>\n\n  <router-view></router-view>\n\n  <footer class="page-footer font-small bg-primary">\n\n      <div class="footer-copyright text-center py-3">\n        Copyright SparkleTime 2018\n      </div>\n\n  </footer>\n</template>'},"days/01/main":function(n,r,e){"use strict";e.r(r),e.d(r,"DayOne",function(){return i});var t,a=e("aurelia-framework"),o=e(14),i=Object(a.b)(o.c)(t=function(n){this.router=n})||t},"days/01/main.html":function(n,r){n.exports='<template>\r\n  <div class="page day01">\r\n    <div class="container-fluid">\r\n      <div class="row header">\r\n        <div class="col-sm-12">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>'},"days/main":function(n,r,e){"use strict";e.r(r),e.d(r,"Home",function(){return i});var t,a=e("aurelia-framework"),o=e(14),i=Object(a.b)(o.c)(t=function(){function n(n){this.router=n,this.message="Hello World!"}var r=n.prototype;return r.goToMap=function(){this.router.navigateToRoute("map")},r.gotoVolunteer=function(){this.router.navigateToRoute("volunteer")},n}())||t},"days/main.html":function(n,r){n.exports='<template>\r\n  <div class="page home">\r\n    <div class="container-fluid">\r\n      <div class="row header">\r\n        <div class="col-sm-12">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>'},main:function(n,r,e){"use strict";e(138);var t={debug:!1,testing:!1},a=(e(0),e(16));function o(n){return n.use.standardConfiguration().feature("resources/index"),n.use.developmentLogging(t.debug?"debug":"warn"),t.testing&&n.use.plugin("aurelia-testing"),n.start().then(function(){return n.setRoot("app")})}e.d(r,"configure",function(){return o}),a.config({warnings:{wForgottenReturn:!1}})},navbar:function(n,r,e){"use strict";e.r(r),e.d(r,"Navbar",function(){return i});var t,a=e("aurelia-framework"),o=e(14),i=Object(a.b)(o.c)(t=function(n){this.router=n,this.message="Hello World!"})||t},"navbar.html":function(n,r){n.exports='<template>\r\n    <nav class="navbar navbar-expand-md navbar-dark bg-primary">\r\n        <a class="navbar-brand" href="#"><img class="logo" src="/logo.png" alt="logo" /></a>\r\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n            <span class="navbar-toggler-icon"></span>\r\n        </button>\r\n\r\n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n            <ul class="navbar-nav mr-auto">\r\n                <li repeat.for="nav of router.navigation" if.bind="$first == false" class="nav-item ${nav.isActive ? \'active\' : \'\'}">\r\n                    <a href.bind="nav.href" class="nav-link">${nav.title}</a>\r\n                    <span if.bind="nav.isActive" class="sr-only">(current)</span></a>\r\n                </li>            \r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</template>'},"resources/index":function(n,r,e){"use strict";function t(n){}e.r(r),e.d(r,"configure",function(){return t})},"resources/sass/main.scss":function(n,r,e){(n.exports=e(307)(!1)).push([n.i,".bg-primary {\n  background-color: #414141 !important; }\n\n.btn-primary {\n  background-color: #89C4F4 !important;\n  border-color: #89C4F4 !important; }\n\n.home {\n  height: calc(100% - 70px) !important;\n  background-image: url(\"/coffehands.png\");\n  background-size: cover;\n  -ms-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover; }\n  .home .container-fluid {\n    padding-left: 20px; }\n    @media screen and (min-width: 768px) {\n      .home .container-fluid {\n        padding-left: 50px; } }\n  .home .header h1 {\n    margin-top: 20px;\n    color: #ffffff; }\n  .home .header p {\n    margin-top: 20px;\n    color: #ffffff;\n    font-size: 1.2rem; }\n  @media screen and (min-width: 768px) {\n    .home .header h1 {\n      margin-top: 70px; }\n    .home .header p {\n      margin-top: 35px; } }\n  .home button {\n    width: 200px;\n    height: 100px; }\n    @media screen and (min-width: 768px) {\n      .home button span {\n        font-size: 1.3rem;\n        font-weight: 200;\n        line-height: 1.1; } }\n    @media screen and (min-width: 460px) {\n      .home button + button {\n        margin-left: 20px; } }\n\n.navbar .navbar-brand {\n  margin-right: 2rem; }\n\n@media (min-width: 768px) {\n  .navbar .navbar-nav .nav-link {\n    padding-right: 1rem;\n    padding-left: 1rem;\n    font-size: 1.5rem; } }\n\n.navbar .logo {\n  max-width: 150px; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: 'Comfortaa', cursive, Arial, Helvetica, sans-serif; }\n\n.page {\n  height: calc(100% - 124px) !important; }\n\n.page-footer {\n  color: #ffffff; }\n",""])}});
//# sourceMappingURL=app.a78ed1a372243a26db28.bundle.map