import { Component } from '@angular/core';

@Component({
    selector:'about-comp',
    template:`<h1>I'm from About Component</h1>
    <a [routerLink]="['/about/vision']">Vision</a>
    <router-outlet></router-outlet>
    `
})

export class AboutComponent{
    
}
