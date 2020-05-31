import { Component, OnInit, Output, Input, EventEmitter, ViewChild, TemplateRef, Inject } from '@angular/core';
import { IProject } from '../utils/IProject';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input('project') project: IProject;
  
  constructor(public dialog: MatDialog) { }

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
  templateUrl: './dialog-content.component.html',
})
export class DialogContent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
  }
}
