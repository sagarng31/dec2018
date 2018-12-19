import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';

@Injectable()

export class RouteGaurdService implements CanActivate{

    public canActivate(){
        // return false;
        return confirm('Are you sure?');
    }
    canActivateChild(){
        return confirm('Are you sure you want to access the Child?');
    }
}
