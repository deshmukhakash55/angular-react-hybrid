const template = require("./nav.pug")();

function NavComponentController() {
  this.options = ["Home", "Contact us", "Help"];
}

NavComponentController.$inject = [];

export const NavComponent = {
  template: template(),
  bindings: {},
  controller: NavComponentController,
};
