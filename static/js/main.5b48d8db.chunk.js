(this.webpackJsonptooltip_test=this.webpackJsonptooltip_test||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(6),s=n.n(i),r=(n(12),n(1)),c=n(2),l=n(4),u=n(3),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={hover:!1},o}return Object(c.a)(n,[{key:"handleMouseIn",value:function(){this.setState({hover:!0})}},{key:"handleMouseOut",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var e={display:this.state.hover?"block":"none"},t=this.props.position;return a.a.createElement("div",{className:"hoverButton"},a.a.createElement("button",{onMouseOver:this.handleMouseIn.bind(this),onMouseOut:this.handleMouseOut.bind(this)},"Hover me",a.a.createElement("div",{className:"tooltiptext "+t,style:e},this.props.position)))}}]),n}(o.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).changePosition=function(e){o.setState({position:e.target.value}),console.log(o.state.position)},o.state={position:"top"},o}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"box"},a.a.createElement("select",{onChange:this.changePosition},a.a.createElement("option",{value:"top"},"Top"),a.a.createElement("option",{value:"bottom"},"Bottom"),a.a.createElement("option",{value:"left"},"Left"),a.a.createElement("option",{value:"right"},"Right")),a.a.createElement(h,{position:this.state.position}))}}]),n}(o.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"dropdownPosition"},a.a.createElement(p,null)))}}]),n}(o.Component);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5b48d8db.chunk.js.map