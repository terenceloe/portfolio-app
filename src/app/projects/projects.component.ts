import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { IProject } from '../utils/IProject';
import { GenericTagService } from '../generic/services/generic-tag.service';
import { BehaviorSubject } from 'rxjs';
import { ALL_PROJECT_DATA } from '../utils/project-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: BehaviorSubject<IProject[]> = this.projectService.subject;
  filteredProjects: BehaviorSubject<IProject[]> = this.projectService.filteredSubjects;
  
  tagData = [
    "Angular",
    "Java",
    "Bootstrap",
    "Typescript",
    "Others"
  ]

  filteredTags = [];

  constructor(private projectService: GenericTagService<IProject>) { }

  ngOnInit(): void {
    this.projectService.add(ALL_PROJECT_DATA);
  }

  filter(tag) {
    this.filteredTags.includes(tag) ? this.filteredTags = this.filteredTags.filter(x => x !== tag) : this.filteredTags.push(tag);
    this.filteredTags.length < 1?  this.projectService.filterReset() : this.projectService.filter(this.filteredTags);
  }

  getStream() {
    return this.filteredProjects.value === null? this.projects : this.filteredProjects;
  }
}
