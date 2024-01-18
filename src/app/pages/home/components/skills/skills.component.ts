import { Component } from '@angular/core';
import { SKILLS } from '@shared/data/skills.mock';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills">
      <h2 class="text-4xl font-semibold">Skills</h2>
      <ul class="mt-10 flex flex-wrap justify-center gap-3">
        @for (skill of skills; track $index) {
          <li
            class="rounded-lg border border-neutral-600 px-2 py-1 text-base font-semibold text-neutral-400 transition-all hover:scale-110 hover:text-cyan-500"
          >
            {{ skill }}
          </li>
        }
      </ul>
    </section>
  `,
})
export class SkillsComponent {
  skills: string[] = SKILLS;
}
