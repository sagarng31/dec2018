import { Component } from '@angular/core';
import { studentService } from './student.sevice';
import { CountriesService } from './countries.service';

@Component({
    selector:'stud-comp-serv',
    templateUrl:'./student.component.html',
    providers:[studentService, CountriesService]
})

export class StudentComponentServ{
    public title:string = 'Service Demo';

    public studentInfo;
    public countryInfo: any;

    constructor(private kahipannavde: studentService, public cts: CountriesService){

    }

    public showStudent(){
        this.studentInfo = this.kahipannavde.getStudent();
    }

    public showCountries(){
        this.countryInfo = this.cts.getCountries();
    }
}
