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
import { StudentComponentServ } from './services/student.component';
import { HttpClientModule } from '@angular/common/http';
import { parentComm } from './component-communication/parent.component';
import { childComm } from './component-communication/child.component';
import { ViewChildComm } from './component-communication/viewchild.component';
import { RouterModule } from '@angular/router';

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
    modelFormComponent,
    StudentComponentServ,
    parentComm,
    childComm,
    ViewChildComm
  ],
  // will have Modules only
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  // will have services only
  providers: [],
  bootstrap: [parentComm]
})
export class AppModule { }
