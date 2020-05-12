import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/app/utils/IProject';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') project: IProject;

  ngOnInit(): void {
  }

}
