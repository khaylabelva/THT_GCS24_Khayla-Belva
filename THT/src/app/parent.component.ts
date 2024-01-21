// src/app/parent.component.ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <p>Data dari Service: {{ dataService.sharedData }}</p>
    <app-child [data]="parentData" (childEvent)="onChildEvent($event)"></app-child>
  `
})
export class ParentComponent {
  parentData = 'Data dari Parent';

  constructor(public dataService: DataService) {}

  onChildEvent(data: string) {
    console.log('Event dari Child:', data);
  }
}

