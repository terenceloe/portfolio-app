import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent {

  @Input() tagName: string;
  @Output() tagNameChange = new EventEmitter();

  constructor() { }

  pushEvent() {
    this.tagNameChange.emit(this.tagName);
  }

}
