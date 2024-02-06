import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '@models';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  BLOG_API = 'https://blog.uspiri.com/api';
  CV_API = 'https://cv.uspiri.com/api';
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>(`${this.BLOG_API}/posts/latests.json`);
  }

  getExperience() {
    return this.http.get(`${this.CV_API}/api/experience.json`);
  }

  getProjects() {
    return this.http.get(`${this.CV_API}/api/projects.json`);
  }

  getSkills() {
    return this.http.get(`${this.CV_API}/api/skills.json`);
  }

  getUser() {
    return this.http.get(`${this.CV_API}/api/user.json`);
  }
}
