import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer
      class="mb-8 mt-24 text-neutral-500 dark:text-neutral-400 text-sm px-5 flex flex-col items-center gap-4"
    >
      <div class="flex items-center gap-4 flex-col md:flex-row">
        <section class="flex items-center gap-3">
          <div class="avatar"></div>
          <a href="/" class="text-lg font-semibold"
            >Uriel Spiridione | Devlyz</a
          >
        </section>
        <section class="flex gap-4 items-center">
          <a
            href="https://github.com/USpiri/"
            target="_blank"
            class="rounded-lg transition-all hover:scale-110 active:scale-90"
            title="Github"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/urielspiridione/"
            target="_blank"
            class="rounded-lg transition-all hover:scale-110 active:scale-90"
            title="Linkedin"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/UrielSpiridione"
            target="_blank"
            class="rounded-lg transition-all hover:scale-110 active:scale-90"
            title="X Twitter"
            >Twitter
          </a>
        </section>
      </div>
      <p class="text-center text-sm">
        &copy; {{ year }}
        <span class="font-semibold"> Uriel Spiridione</span>
      </p>
    </footer>
  `,
  styles: `
    .avatar {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    @apply bg-neutral-950 border border-neutral-600 relative;
    &::before {
      content: "";
      height: 4px;
      width: 4px;
      border-radius: 100%;
      @apply bg-neutral-400 dark:bg-neutral-500;
      position: absolute;
      top: 10px;
      left: 10px;
      animation: eye-movement 8s infinite ease;
    }
    &::after {
      content: "";
      height: 4px;
      width: 4px;
      border-radius: 100%;
      @apply bg-neutral-400 dark:bg-neutral-500;
      position: absolute;
      top: 10px;
      left: 20px;
      animation: eye-movement 8s infinite ease;
    }
  }
  @keyframes eye-movement {
    0% {
      transform: translateX(0px) translateY(0) scaleY(1);
    }
    20% {
      transform: translateX(2px) translateY(0) scaleY(1);
    }
    30% {
      transform: translateX(-2px) translateY(0) scaleY(1);
    }
    55% {
      transform: translateX(0px) translateY(4px) scaleY(1);
    }
    65% {
      transform: translateX(0px) translateY(0px) scaleY(0.5);
    }
    70% {
      transform: translateX(0px) translateY(0px) scaleY(1);
    }
    100% {
      transform: translateX(0px) translateY(0px) scaleY(1);
    }
  }
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
