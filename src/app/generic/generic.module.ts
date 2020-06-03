import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SelectButtonComponent } from '../select-button/select-button.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectsComponent,
    SelectButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectsComponent
  ]
})
export class GenericModule { }
