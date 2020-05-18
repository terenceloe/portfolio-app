import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { IProject } from '../utils/IProject';
import { GenericTagService } from '../generic/services/generic-tag.service';
import { BehaviorSubject } from 'rxjs';
import { ALL_PROJECT_DATA } from '../utils/project-data';
import { trigger, transition, query, style, stagger, animate, keyframes, animateChild } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', style({ transform: 'translateY(-25%)', opacity: 0 }), {
          optional: true
        }),
        query(':leave', style({ transform: 'translateY(0%)', opacity: 1 }), {
          optional: true
        }),
        query(
          ':enter',
          [
            stagger('0.05s', [
              animate(
                '0.2s ease-out',
                keyframes([
                  style({
                    transform: 'translateY(-25%)',
                    opacity: 0,
                    offset: 0
                  }),
                  style({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('0.05s', [
              animate(
                '0.2s ease-in',
                keyframes([
                  style({ transform: 'translateY(0%)', offset: 0 }),
                  style({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        )
      ])
    ]),
  ]
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
