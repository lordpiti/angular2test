System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ProjectService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ProjectService = (function () {
                function ProjectService(http) {
                    this.http = http;
                    this.ListaFinal = [];
                    this._http = http;
                }
                ProjectService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                ProjectService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                ;
                ProjectService.prototype.getProjects = function () {
                    //this._http.get('https://api.spacehive.com/api/Projects')
                    //    .subscribe(
                    //    data => this.ListaFinal = this.extractData(data),
                    //    err => console.log(err),
                    //    () => console.log('Random Quote Complete' + this.ListaFinal)
                    //);
                    //return this.ListaFinal;
                    //return this._http.get('https://api.spacehive.com/api/Projects')
                    //    .toPromise()
                    //    //.map(response => { return this.extractData(response) });
                    //    .then(response => console.log(this.extractData(response)) ) 
                    //    .catch(this.handleError);
                    return this._http.get('https://api.spacehive.com/api/Projects')
                        .map(function (res) { return res.json(); });
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectService);
                return ProjectService;
            }());
            exports_1("ProjectService", ProjectService);
        }
    }
});
//# sourceMappingURL=projectService.js.map