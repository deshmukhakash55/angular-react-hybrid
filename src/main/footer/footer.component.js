const React = require("react");
const reactDom = require("react-dom/client");
const ReactFooter = require("../../react/Footer").Footer;
const template = require("./footer.pug")();

function FooterController() {
  const rootNode = document.getElementById("footer-root");
  if (!!rootNode) {
    const root = reactDom.createRoot(rootNode);
    root.render(React.createElement(ReactFooter, {}));
  }
}

FooterController.$inject = [];

export const Footer = {
  template: template(),
  bindings: {},
  controller: FooterController,
};
