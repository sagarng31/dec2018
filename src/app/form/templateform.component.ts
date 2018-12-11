import { Component } from '@angular/core';

@Component({
    selector:'template-form',
    templateUrl:'./templateform.component.html'
})

export class templateFormComponent{
    public title:string='Template Form'

    public saveStudent(studentInfo:any){
        console.log(JSON.stringify(studentInfo))
    }
}

