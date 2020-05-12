import { Injectable } from '@angular/core';
import { ALL_PROJECT_DATA } from '../utils/project-data';
import { IProject } from '../utils/IProject';

@Injectable()
export class ProjectDataService {

  constructor() { }

  getProjects(): IProject[] {
    return ALL_PROJECT_DATA;
  }
}
