import { Component, OnInit, Output, Input, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { IProject } from '../utils/IProject';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input('project') project: IProject;
  @Output('select') select = new EventEmitter();

  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onCardClick(project: IProject) {
    this.select.emit({ project });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }
  
  
}
