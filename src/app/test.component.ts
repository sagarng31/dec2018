import { Component } from '@angular/core';

@Component({
    selector:"test-comp",
    templateUrl:'./test.component.html'
})

export class TestComponent{
    public name:string='assimilate technologies';
    public amount:number=150;
    public todaydate=new Date();
    public cubeNum=5;
    title='This is Test coomponent';
}
