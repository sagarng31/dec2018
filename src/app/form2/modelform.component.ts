import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'model-form',
    templateUrl: './modelform.component.html'
})

export class modelFormComponent{
    public title: string='Model driven form'

    public studentModel:FormGroup
    constructor(){
        this.studentModel= new FormGroup({
            name: new FormControl('',[Validators.required]),
            email: new FormControl(),
            zip: new FormControl()
        })
    }

    public saveStudent(studentInfo:any){
        console.log(JSON.stringify(studentInfo))
    }
}
