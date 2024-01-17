import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  standalone: true,
  template: `
    <a
      class="block rounded-lg border border-neutral-500 fill-neutral-50 p-2 transition-all hover:scale-110"
      [href]="href"
      target="_blank"
      rel="noopener noreferrer"
      [title]="title"
    >
      <ng-content />
    </a>
  `,
})
export class LinkButtonComponent {
  @Input({ required: true }) href!: string;
  @Input() title = '';
}
