import { Component } from '@angular/core';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LinkIconComponent],
  template: `
    <section>
      <h2 class="text-4xl font-semibold">Experience</h2>
      <ul class="mt-10 flex flex-col gap-3">
        <li
          class="flex group/item hover:scale-[102%] transition-all flex-col md:flex-row md:gap-6 md:items-center border-neutral-800 rounded-lg py-3"
        >
          <div
            class="shrink-0 w-32 group-hover/item:text-cyan-500 transition-all text-neutral-400 font-medium md:text-right"
          >
            2022 - 2023
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl font-semibold flex items-center gap-2">
              <a href="/" class="hover:underline">Jojo Mobile</a>
              <app-link-icon class="h-4 w-4 fill-neutral-50" />
            </h3>
            <p class="text-neutral-300 text-sm font-medium">
              Android Developer → Lead Android Developer
            </p>
            <p class="text-neutral-400">
              Built an Android team, created Android apps for biggest Polish
              companies like LOT, Polskie Radio, Agora, PolskaPress
            </p>
          </div>
        </li>
        <li
          class="flex group/item hover:scale-[102%] transition-all flex-col md:flex-row md:gap-6 md:items-center border-neutral-800 rounded-lg py-3"
        >
          <div
            class="shrink-0 w-32 group-hover/item:text-cyan-500 transition-all text-neutral-400 font-medium md:text-right"
          >
            2022 - 2023
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl font-semibold flex items-center gap-2">
              <a href="/" class="hover:underline">Jojo Mobile</a>
              <app-link-icon class="h-4 w-4 fill-neutral-50" />
            </h3>
            <p class="text-neutral-300 text-sm font-medium">
              Android Developer → Lead Android Developer
            </p>
            <p class="text-neutral-400">
              Built an Android team, created Android apps for biggest Polish
              companies like LOT, Polskie Radio, Agora, PolskaPress
            </p>
          </div>
        </li>
        <li
          class="flex group/item hover:scale-[102%] transition-all flex-col md:flex-row md:gap-6 md:items-center border-neutral-800 rounded-lg py-3"
        >
          <div
            class="shrink-0 w-32 group-hover/item:text-cyan-500 transition-all text-neutral-400 font-medium md:text-right"
          >
            2022 - 2023
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl font-semibold flex items-center gap-2">
              <a href="/" class="hover:underline">Jojo Mobile</a>
              <!-- <app-link-icon class="h-4 w-4 fill-neutral-50" /> -->
            </h3>
            <p class="text-neutral-300 text-sm font-medium">
              Android Developer → Lead Android Developer
            </p>
            <p class="text-neutral-400">
              Built an Android team, created Android apps for biggest Polish
              companies like LOT, Polskie Radio, Agora, PolskaPress
            </p>
          </div>
        </li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class ExperienceComponent {}
