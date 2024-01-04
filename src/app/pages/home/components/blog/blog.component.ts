import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { POSTS } from '@assets/data/blog.mock';
import { Post } from '@models';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [LinkIconComponent, DatePipe],
  template: `
    <h2 class="text-4xl font-semibold">Blog</h2>
    <ul class="mt-10 flex flex-wrap gap-3 justify-center">
      @for (post of posts; track post.id) {
        <li class="flex-[1_0_40%]">
          <a
            [href]="post.url"
            target="_blank"
            rel="noopener noreferrer"
            class="pt-3 flex-col pb-4 px-4 flex rounded-lg hover:scale-[102%] transition-all hover:bg-neutral-500/10 h-fit"
          >
            <header>
              <span class="text-neutral-500 font-bold text-sm">{{
                post.date | date
              }}</span>
              <h3 class="text-xl md:text-2xl font-semibold line-clamp-2 mb-1">
                {{ post.title }}
              </h3>
            </header>
            <p
              class="text-neutral-500 mt-1.5 dark:text-neutral-400/80 font-medium line-clamp-2 text-sm md:text-base"
            >
              {{ post.description }}
            </p>
            <footer class="flex flex-row gap-2 items-center mt-1.5">
              @for (tag of post.tags; track $index) {
                <div
                  class="font-semibold text-neutral-600 dark:text-neutral-300 text-sm md:text-base"
                >
                  #{{ tag }}
                </div>
              }
            </footer>
          </a>
        </li>
      }
    </ul>
  `,
})
export class BlogComponent {
  posts: Post[] = POSTS;
}
