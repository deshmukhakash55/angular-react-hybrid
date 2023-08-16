angular
  .module("main", [])
  .controller("MainController", require("./main-controller").MainController)
  .component("nav", require("./nav/nav.component").NavComponent)
  .component("footer", require("./footer/footer.component").Footer);
