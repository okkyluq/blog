webpackJsonp([1],{"9PqM":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},i,!1,function(t){s("o8nZ")},null,null).exports,n=s("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Start Bootstrap")]),t._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home\n                "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("About")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Services")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Contact")])])])])])])}]};var l=s("VU/8")({},c,!1,function(t){s("nV/k")},"data-v-2669b986",null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"footer"},[a("footer",{staticClass:"py-5 bg-dark"},[a("div",{staticClass:"container"},[a("p",{staticClass:"m-0 text-center text-white"},[this._v("Copyright © Your Website 2018")])])])])}]};var v=s("VU/8")({},o,!1,function(t){s("S94v")},"data-v-40df42b0",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"card my-4"},[s("h5",{staticClass:"card-header"},[t._v("Search")]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search for..."}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("Go!")])])])])]),t._v(" "),s("div",{staticClass:"card my-4"},[s("h5",{staticClass:"card-header"},[t._v("Categories")]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("ul",{staticClass:"list-unstyled mb-0"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("Web Design")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("HTML")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Freebies")])])])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("ul",{staticClass:"list-unstyled mb-0"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("JavaScript")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("CSS")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Tutorials")])])])])])])]),t._v(" "),s("div",{staticClass:"card my-4"},[s("h5",{staticClass:"card-header"},[t._v("Side Widget")]),t._v(" "),s("div",{staticClass:"card-body"},[t._v("You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!")])])])}]},u=s("VU/8")({},d,!1,null,null,null).exports,_=s("mtWM"),h=s.n(_),m={data:function(){return{articles:""}},mounted:function(){var t=this;h.a.get("https://jsonplaceholder.typicode.com/posts").then(function(a){t.articles=a.data}).catch(function(t){console.log(t)})},methods:{loadArticles:function(t){this.$router.push({name:"Single",params:{id:t}})}}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",t._l(t.articles.slice(0,100),function(a){return s("div",{staticClass:"card mb-4"},[s("img",{staticClass:"card-img-top",attrs:{src:"http://placehold.it/750x300",alt:"Card image cap"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(a.body))]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:/single/+a.id},on:{click:function(s){s.preventDefault(),t.loadArticles(a.id)}}},[t._v("Read More →")])]),t._v(" "),t._m(0,!0)])}))},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer text-muted"},[this._v("\n\t\t\tPosted on January 1, 2017 by\n\t\t\t"),a("a",{attrs:{href:"#"}},[this._v("Start Bootstrap")])])}]},f=s("VU/8")(m,p,!1,null,null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("ul",{staticClass:"pagination justify-content-center mb-4"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[this._v("← Older")])]),this._v(" "),a("li",{staticClass:"page-item disabled"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[this._v("Newer →")])])])])}]},b=s("VU/8")({},C,!1,null,null,null).exports,y={components:{"my-nav":l,"my-footer":v,"my-sidebar":u,"my-articles":f,"my-pagination":b}},g={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home"},[a("my-nav"),this._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[this._m(0),this._v(" "),a("my-articles"),this._v(" "),a("my-pagination")],1),this._v(" "),a("div",{staticClass:"col-md-4"},[a("my-sidebar")],1)])]),this._v(" "),a("my-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"my-4"},[this._v("Page Heading\n\t\t\t\t\t"),a("small",[this._v("Secondary Text")])])}]};var x=s("VU/8")(y,g,!1,function(t){s("tpG1")},null,null).exports,$={components:{"my-nav":l,"my-footer":v,"my-sidebar":u,"my-articles":f,"my-pagination":b},data:function(){return{article:[]}},mounted:function(){this.getArticle(this.$route.params.id)},methods:{getArticle:function(t){var a=this;h.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then(function(t){a.article=t.data,console.log(a.article)}).catch(function(t){console.log(t)})}}},E={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"single"},[s("my-nav"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},[s("br"),s("br"),s("br"),t._v(" "),s("h1",{staticClass:"mt-4"},[t._v(t._s(t.article.title))]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("Posted on January 1, 2018 at 12:00 PM")]),t._v(" "),s("img",{staticClass:"img-fluid rounded",attrs:{src:"http://placehold.it/900x300",alt:""}}),t._v(" "),s("hr"),t._v(" "),s("p",[t._v(t._s(t.article.body))]),t._v(" "),s("hr"),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("br"),s("br"),s("br"),t._v(" "),s("my-sidebar")],1)])]),t._v(" "),s("my-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"lead"},[this._v("by"),a("a",{attrs:{href:"#"}},[this._v(" Start Bootstrap")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card my-4"},[a("h5",{staticClass:"card-header"},[this._v("Leave a Comment:")]),this._v(" "),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"form-control",attrs:{rows:"3"}})]),this._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])])])}]};var S=s("VU/8")($,E,!1,function(t){s("9PqM")},"data-v-6b6a8712",null).exports;e.a.use(n.a);var k=new n.a({routes:[{path:"/",name:"Home",component:x},{path:"/single/:id",name:"Single",component:S}],mode:"history"});e.a.config.productionTip=!1,new e.a({el:"#app",router:k,components:{App:r},template:"<App/>"})},S94v:function(t,a){},"nV/k":function(t,a){},o8nZ:function(t,a){},tpG1:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.4dff79fc30f780f97c15.js.map