import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class studentService {
    public student:any = [
        { name: 'Sagar', course: 'Angular'},
        { name: 'Pandurang', course: '.Net'},
        { name: 'Sanjay', course: 'React'},
    ];

    constructor (private http:HttpClient){

    }

    public getStudent(): any {
        return this.student;
    }

    public studDetails;

    public saveStudent(data){
        const url = 'https://reqres.in/api/users'
        this.http.post(url, data)
            .subscribe(res => { this.studDetails = res },
            err => { this.studDetails = err}
        );
        return this.studDetails;
    }
}