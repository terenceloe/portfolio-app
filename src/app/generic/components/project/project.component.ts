import { Component, OnInit } from '@angular/core';
import { GenericTagService } from '../../services/generic-tag.service';
import { IProject } from 'src/app/utils/IProject';
import { ALL_PROJECT_DATA } from 'src/app/utils/project-data';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: BehaviorSubject<IProject[]> = this.projectService.subject;
  filteredProjects: BehaviorSubject<IProject[]> = this.projectService.filteredSubjects;

  tagData = [
    "Angular",
    "Java",
    "Bootstrap"
  ]
  filteredTags = [];
  constructor(private projectService: GenericTagService<IProject>) { }

  ngOnInit(): void {
    this.projectService.add(ALL_PROJECT_DATA);
    // this.projectService.filterReset();
     
  }
  filter(tag) {
    this.filteredTags.includes(tag) ? this.filteredTags = this.filteredTags.filter(x => x !== tag) : this.filteredTags.push(tag);
    this.filteredTags.length < 1?  this.projectService.filterReset() : this.projectService.filter(this.filteredTags);
  }

  getStream() {
    return this.filteredProjects.value === null? this.projects : this.filteredProjects;
  }

}
