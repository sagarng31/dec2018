import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { TeacherComponent } from './teacher.component';
import { CustomOverDirective } from './directive/customeattribute.directive'
import { TestComponent } from './test.component';
import { CubePipe } from './pipe/cube.pipe';
import { templateFormComponent } from './form/templateform.component';
import { modelFormComponent } from './form2/modelform.component';

@NgModule({
  // will have Component, Pipe or Directive
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    CustomOverDirective,
    TestComponent,
    CubePipe,
    templateFormComponent,
    modelFormComponent
  ],
  // will have Modules only
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // will have services only
  providers: [],
  bootstrap: [modelFormComponent]
})
export class AppModule { }
