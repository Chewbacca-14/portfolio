import { Component } from '@angular/core';
import { SKILLS } from '@assets/data/skills.mock';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills">
      <h2 class="text-4xl font-semibold">Skills</h2>
      <ul class="mt-10 flex gap-3 flex-wrap justify-center">
        @for (skill of skills; track $index) {
          <li
            class="text-base hover:scale-110 transition-all hover:text-cyan-500 border border-neutral-600 rounded-lg px-2 py-1 font-semibold text-neutral-400"
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
