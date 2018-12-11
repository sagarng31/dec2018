import { Component } from '@angular/core';

@Component({
    selector:'teacher-comp',
    templateUrl:'./teacher.component.html',
})

export class TeacherComponent{
    public title:string='Teacher: Mr. Sanjay Taskar'

    public showCityWithName(){
        this.title += ', Pune'
    }
}

