import { Component, OnInit } from '@angular/core';
import { ISkill } from '../utils/ISkill';
import { SkillsService } from '../services/skills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills: ISkill[];
  constructor(
    private skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

}
