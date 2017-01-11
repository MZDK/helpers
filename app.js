// Import components
import Foo from './components/foo/foo';


// Provide components
const Components = [
  {Class: Foo, selectorName: 'foo'}
];


// Setup app
export default class App {

  constructor() {
    this.createComponents();
    return this;
  }

  createComponents() {
    this.components = {};
    for (let i = 0; i < Components.length; i++) {
      let nodes = [];
      let tags = document.querySelectorAll('[data-component=' + Components[i].selectorName + ']');
      for (let x = 0; x < tags.length; x++) {
        nodes.push(new Components[i].Class(tags[x]));
      }
      if(nodes.length) this.components[Components[i].selectorName] = nodes;
    }
    console.log('modules (app)', this.getComponents());
  }

  getComponents(selectorName) {
    return selectorName ? this.components[selectorName] : this.components;
  }

}


// Run app
window.app = new App();
