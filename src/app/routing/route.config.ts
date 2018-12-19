import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { VisionComponent } from './vision.component';
import { RouteGaurdService } from './routegaurd.service';

export const myRoutes:Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent, canActivateChild:[RouteGaurdService],
    children:[
        {path:'vision', component:VisionComponent}
    ]},
    {path:'contact', component:ContactComponent, canActivate:[RouteGaurdService]}
]

