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
import { myRoutes } from './routing/route.config';
import { HomeComponent } from './routing/home.component';
import { AboutComponent } from './routing/about.component';
import { ContactComponent } from './routing/contact.component';
import { MainComponent } from './routing/main.component';
import { VisionComponent } from './routing/vision.component';

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
    ViewChildComm,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainComponent,
    VisionComponent
  ],
  // will have Modules only
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  // will have services only
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
