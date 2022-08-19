// to use this directive first import it
//
// import {{ name | PascalCase}} from './path/{{ name | PascalCase}}'
//
// If you need it globally register the directive in main.js 
// before mounting the app
//
// app.directive('{{ name | kebabCase}}', {{ name | PascalCase}});
//
// or 
// in a specific component add it to the directives object
//
// directives:{
//  {{ name | PascalCase}},
//  ...
// },
//
// then you can use it as 
// <h1 v-{{ name | kebabCase}}>Hello World</h1>
// 

const {{ name | PascalCase}} = {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding, vnode, prevVnode) {
    
  },
  // called right before the element is inserted into the DOM.
  beforeMount(el, binding, vnode, prevVnode) {},
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el, binding, vnode, prevVnode) {
   // el.style.background = 'green';
  },
  // called before the parent component is updated
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // called after the parent component and
  // all of its children have updated
  updated(el, binding, vnode, prevVnode) {},
  // called before the parent component is unmounted
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // called when the parent component is unmounted
  unmounted(el, binding, vnode, prevVnode) {}
}


export default {{ name | PascalCase}};