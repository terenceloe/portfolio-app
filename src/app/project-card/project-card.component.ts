import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IProject } from '../utils/IProject';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input('project') project: IProject;
  @Output('select') select = new EventEmitter();
  projects: IProject[];
  
  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(project: IProject) {
    this.select.emit({ project });
  }

}
