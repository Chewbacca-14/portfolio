import { NgClass } from '@angular/common';
import {
  Component,
  Input,
  Output,
  booleanAttribute,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      class="block rounded-lg border border-neutral-500 fill-neutral-50 p-2 transition-all hover:scale-110"
      (click)="btnClick.emit()"
      [ngClass]="icon ? 'px-2' : 'px-3'"
      [title]="title"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Input({ transform: booleanAttribute }) icon = false;
  @Input() title = '';
  @Output() btnClick = new EventEmitter<null>();
}
