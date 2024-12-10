import { Component, OnInit, inject } from '@angular/core';
import { Me } from '@models';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [TitleComponent, AsyncPipe],
  standalone: true,
  template: `
    <section id="skills">
      <app-title>Skills</app-title>
      <ul class="mt-10 flex flex-wrap justify-center gap-3">
        @for (skill of skills; track $index) {
          <li
            class="select-none rounded-md border border-neutral-600 px-2 py-1 text-base font-semibold text-neutral-400 transition-all hover:scale-105 hover:text-cyan-500"
          >
            {{ skill }}
          </li>
        }
      </ul>
    </section>
  `,
})
export class SkillsComponent {
  skills: string[] = [
    'Flutter',
    'Dart',
    'Firebase',
    'Google Map Integration',
    'sqflite',
    'Hive',
    'Shared preferences',
    'BloC',
    'Provider',
    'GetX',
    'GetIt',
    'MVC',
    'MVVM',
    'Injectable',
    'Rest API',
    'WebSockets',
    'GraphQL',
    'Localizations',
    'Google Play publishing',
    'App Store publishing',
    'more...',
  ];
}
