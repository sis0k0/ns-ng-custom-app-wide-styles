const application = require("tns-core-modules/application");
require("tns-core-modules/ui/styling/style-scope");

global.registerModule("./app.css", () => require("~/styles.tns.css"));

application.loadAppCss();

