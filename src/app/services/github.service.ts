import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://api.github.com/"
  repoName!: string;
  userName!: string;

  constructor(private http:HttpClient) {
  }

  getProjects(userName: string):Observable<any> {
    return this.http.get<any>(this.baseUrl + "orgs/" + userName + "/repos");
  }

  getCommits(userName: string, repoName: string):Observable<any> {
    return this.http.get<any>(this.baseUrl + "repos/" + userName + "/" + repoName + "/commits");
  }
}
