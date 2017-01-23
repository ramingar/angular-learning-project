import {Component, OnInit} from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

// moduleId : module.id -> for relative paths in templateUrl
@Component({
    selector   : 'my-dashboard',
    moduleId   : module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls  : ['dashboard.component.css'],
})
export class DashboardComponent {
    heroes:Hero[] = [];

    constructor(private heroService:HeroService) {
    }

    ngOnInit():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}