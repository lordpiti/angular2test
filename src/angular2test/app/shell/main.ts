import { Component } from "@angular/core";
import { ProjectService } from './projectService';
import {OrderBy} from "./orderBy"

@Component({
    selector: "app-shell", 
    templateUrl: './app/buhu.html',
    providers: [ProjectService],
    pipes: [OrderBy],
})

export class Main {
    public Title: string;

    public ListaFinal: Object;

    constructor(private projectService: ProjectService) {
        this.Title = "World!";
        this.ListaFinal = [];
    };

    eseTest() {
        this.projectService.getProjects().subscribe(
            data => { this.ListaFinal = data },
            err => {  }
        );
    };
}