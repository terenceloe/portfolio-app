import { Component, OnInit, Input, Inject } from '@angular/core';
import { IProject } from '../utils/IProject';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: IProject;
  
  constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/icons8-github-64.svg'));
   }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      data: {
        project: this.project
      }
    });

  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
})
export class DialogContent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
  }
}
