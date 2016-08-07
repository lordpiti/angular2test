System.register(["@angular/core", './projectService', "./orderBy"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, projectService_1, orderBy_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projectService_1_1) {
                projectService_1 = projectService_1_1;
            },
            function (orderBy_1_1) {
                orderBy_1 = orderBy_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main(projectService) {
                    this.projectService = projectService;
                    this.Title = "World!";
                    this.ListaFinal = [];
                }
                ;
                Main.prototype.eseTest = function () {
                    var _this = this;
                    this.projectService.getProjects().subscribe(function (data) { _this.ListaFinal = data; }, function (err) { });
                };
                ;
                Main = __decorate([
                    core_1.Component({
                        selector: "app-shell",
                        templateUrl: './app/buhu.html',
                        providers: [projectService_1.ProjectService],
                        pipes: [orderBy_1.OrderBy],
                    }), 
                    __metadata('design:paramtypes', [projectService_1.ProjectService])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map