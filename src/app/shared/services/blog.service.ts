import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '@models';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  API_URL = 'https://uspiri.github.io/blog/latests.json';
  private http = inject(HttpClient);

  getLatestsPosts() {
    return this.http.get<Post[]>(this.API_URL);
  }
}
