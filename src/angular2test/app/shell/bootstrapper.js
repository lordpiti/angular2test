System.register(["./main", "@angular/platform-browser-dynamic", "@angular/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1, platform_browser_dynamic_1, http_1;
    return {
        setters:[
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(main_1.Main, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=bootstrapper.js.map