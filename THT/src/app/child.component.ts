// src/app/child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h3>Child Component</h3>
      <p>Data dari Parent: {{ data }}</p>
      <p>Data dari Service: {{ dataService.sharedData }}</p>
      <button (click)="sendEvent()">Kirim Event ke Parent</button>
    </div>
  `
})
export class ChildComponent {
  @Input() data: string;
  @Output() childEvent = new EventEmitter<string>();

  constructor(public dataService: DataService) {}

  sendEvent() {
    this.childEvent.emit('Event dari Child');
  }
}

