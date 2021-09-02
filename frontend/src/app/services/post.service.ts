import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private env: string;
  constructor(private _http: HttpClient, private _router: Router) {
    this.env = environment.APP_URL;
  }

  savePost(post: any) {
    return this._http.post<any>(this.env + 'post/registerPost', post);
  }

  listPost() {
    return this._http.get<any>(this.env + 'post/listPost');
  }
  deletePost(post: any) {
    return this._http.delete<any>(this.env + 'post/deletePost/' + post._id);
  }
}
