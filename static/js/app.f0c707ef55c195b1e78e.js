webpackJsonp([1],{0:function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},MVlk:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),d={props:{todo:{type:Object,required:!0}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("span",[t._v(t._s(t.todo.id+1))]),t._v(" | "+t._s(t.todo.title)+"\n\t"),o("button",{staticClass:"delete-button",attrs:{type:"button"},on:{click:function(e){return t.$emit("delete",t.todo)}}},[t._v("Delete")])])},staticRenderFns:[]};var s={components:{TodoItem:o("VU/8")(d,i,!1,function(t){o("MVlk")},null,null).exports},data:function(){return{newTodo:{},todos:[]}},methods:{deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),this.reCalculateIndex()},addTodo:function(t){this.newTodo.title?(this.todos.push(this.newTodo),this.reCalculateIndex(),this.newTodo={}):alert("You can't add an empty task")},reCalculateIndex:function(){this.todos.forEach(function(t,e){t.id=e})}},created:function(){var t=this;this.$http.get("https://my-json-server.typicode.com/ronaldomata34/demo-json-todo/todos").then(function(e){return t.todos=e.data})}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.todos.length?o("ul",t._l(t.todos,function(e){return o("TodoItem",{key:e.id,attrs:{todo:e},on:{delete:t.deleteTodo}})}),1):t._e(),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.title,expression:"newTodo.title"}],attrs:{type:"text",placeholder:"Add new Todo"},domProps:{value:t.newTodo.title},on:{input:function(e){e.target.composing||t.$set(t.newTodo,"title",e.target.value)}}}),t._v(" "),o("input",{staticClass:"add-button",attrs:{type:"submit",value:"Add todo"}})])])},staticRenderFns:[]};var a={name:"App",components:{TodoList:o("VU/8")(s,r,!1,function(t){o("QpaK")},null,null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Todo List")]),this._v(" "),e("TodoList")],1)},staticRenderFns:[]};var l=o("VU/8")(a,u,!1,function(t){o("rolV")},null,null).exports,c=o("8+8L"),p=o("e6fC"),f=o.n(p);o("Jmt5"),o("9M+g");n.a.use(c.a),n.a.use(f.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:l},template:"<App/>"})},QpaK:function(t,e){},rolV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f0c707ef55c195b1e78e.js.map