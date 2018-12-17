import { Component } from "@angular/core";

@Component({
    selector:'viewchild-comp',
    templateUrl:'./viewchild.component.html'
})

export class ViewChildComm{
    title='View child Component';
    public message="I am from View child component";
}
