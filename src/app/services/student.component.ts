import { Component } from '@angular/core';
import { studentService } from './student.sevice';

@Component({
    selector:'stud-comp-serv',
    templateUrl:'./student.component.html',
    providers:[studentService]
})

export class StudentComponentServ{
    public title:string = 'Service Demo';

    public studentInfo;

    constructor(private st: studentService){

    }

    public showStudent(){
        this.studentInfo = this.st.getStudent();
    }
}