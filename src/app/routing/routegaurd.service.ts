import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';

@Injectable()

export class RouteGaurdService implements CanActivate{

    public canActivate(){
        return false;
    }
}
