import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectsComponent,
    SelectButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class GenericModule { }
