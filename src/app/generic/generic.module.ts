import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectComponent } from './components/project/project.component';
import { SelectButtonComponent } from './components/select-button/select-button.component';



@NgModule({
  declarations: [ ProjectCardComponent, ProjectComponent, SelectButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class GenericModule { }
