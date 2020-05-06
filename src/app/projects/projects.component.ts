import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { IProject } from '../utils/IProject';
import { TagsService } from '../services/tags.service';
import { ProjectDataService } from '../services/project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: IProject[];
  tagSubscription: EventEmitter<any>;
  selectedProject: IProject;


  constructor(
    private tagsService: TagsService,
    private projectService: ProjectDataService
  ) { }

  ngOnInit() {
    console.log('project component created');
    this.renderProjects();
    this.tagSubscription = this.tagsService.onTagUpdate;
    this.tagSubscription.subscribe(() => {
      if (this.projects.length === 0) this.renderProjects();
      else this.projects = [];
    });
  }

  ngOnDestroy() {
    // console.log('project component destroyed');
  }

  onProjectCardClick(data) {
    this.selectedProject = data.project;
  }

  renderProjects() {
    this.projects = this.projectService
      .getProjects()
      .filter(project => this.tagsService.tags
        .filter(tag => tag.isSelected)
        .reduce(
          (prev, tag) =>
            prev || project.tags.indexOf(tag.displayName.toLowerCase()) !== -1, false
        )
      );
  }
}
