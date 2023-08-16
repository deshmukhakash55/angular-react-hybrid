require("./node_modules/angular/angular");
require("./index.scss?inline");
require("./src/main/main.module");

angular.module("app", ["main"]);

const htmlNode = document.getElementsByTagName("html")[0];
htmlNode.setAttribute("ng-app", "app");
