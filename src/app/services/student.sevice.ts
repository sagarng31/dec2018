import { Injectable } from '@angular/core';

@Injectable()

export class studentService {
    public student:any = [
        { name: 'Sagar', course: 'Angular'},
        { name: 'Pandurang', course: '.Net'},
        { name: 'Sanjay', course: 'React'},
    ]

    public getStudent(): any {
        return this.student;
    }
}