(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(37)},22:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(13),r=a.n(c),i=a(39),l=(a(22),a(24),a(5)),s=a(6),u=a(9),m=a(7),h=a(10),d=(a(26),a(15)),g=(a(28),function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h3",{className:"jokeText"},e.joke)),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("img",{src:"./chuck-norris-jokes/images/chuck-norris.jpg",className:"rounded mx-auto d-block",height:"300"}))))}),f=a(40),k=(a(30),function(e){return o.a.createElement(f.a,{to:"/joke",onClick:e.onSingleClicked},o.a.createElement("li",{className:"list-group-item list-group-item-action listItem"},e.item))}),v=a(38),p=(a(35),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={gotJokes:[],loadingState:!1,clicked:"",category:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({category:this.props.category});for(var t=0;t<10;t++)this.loadMoreItems();this.refs.iScroll.addEventListener("scroll",function(){e.refs.iScroll.scrollTop+e.refs.iScroll.clientHeight>=e.refs.iScroll.scrollHeight&&e.loadMoreItems()})}},{key:"componentDidUpdate",value:function(){var e=this;window.onpopstate=function(t){e.setState({clicked:""}),e.refs.iScroll.addEventListener("scroll",function(){e.refs.iScroll.scrollTop+e.refs.iScroll.clientHeight>=e.refs.iScroll.scrollHeight&&e.loadMoreItems()})}}},{key:"componentWillReceiveProps",value:function(e){if(this.state.category!==e.category){this.setState({gotJokes:[],category:e.category});for(var t=0;t<10;t++)this.loadMoreItems(e.category)}}},{key:"loadMoreItems",value:function(e){var t=this;this.setState({loadingState:!0}),fetch("https://api.chucknorris.io/jokes/random"+(""===e||void 0===e?"":"?category="+e)).then(function(e){return e.json()}).then(function(e){return t.setState(function(t){return{gotJokes:[].concat(Object(d.a)(t.gotJokes),[e.value]),loadingState:!1}})})}},{key:"onSingleClicked",value:function(e){this.setState({clicked:e})}},{key:"render",value:function(){var e=this,t=this.state.gotJokes.map(function(t,a){return o.a.createElement(k,{key:a,onSingleClicked:function(){e.onSingleClicked(t)},item:t})}),a=""!==this.state.clicked?o.a.createElement(g,{joke:this.state.clicked}):o.a.createElement("div",{ref:"iScroll",className:"List-scroll"},o.a.createElement("ul",{className:"list-group"},t),this.state.loadingState?o.a.createElement("p",{className:"loading"}," loading Chuck Norris ",this.state.category," jokes"):"");return o.a.createElement("div",{className:"container"},o.a.createElement(v.a,{path:"/joke"}),a)}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={categories:["random"],category:""},a.handleCategoryClick=function(e){a.setState({category:e})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/categories").then(function(e){return e.json()}).then(function(t){return e.setState({categories:t})})}},{key:"render",value:function(){var e=this,t=this.state.categories.map(function(t){var a=t===e.state.category?"btn btn-primary cat-btn active":"btn btn-primary cat-btn";return o.a.createElement("li",{className:a,onClick:function(){e.handleCategoryClick(t)},key:t},t)});return o.a.createElement("div",null,o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"I heard you like Chuck Norris jokes"),o.a.createElement("ul",null,t)),o.a.createElement(p,{category:this.state.category}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=o.a.createElement(i.a,null,o.a.createElement(y,null));r.a.render(E,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.c86ba7c7.chunk.js.map