import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  commits: Array<any>;
  projects: Array<any>;
  repoName: any;
  userName: string = "Netflix";
  
  constructor(private githubService:GithubService) {
    this.commits = [];
    this.projects = [];
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.githubService.getProjects(this.userName).subscribe((data) => {
      this.projects = data;
      console.log("repos: ", this.projects[0].name)
      this.repoName = this.projects[0].name;
      this.getCommits(this.userName, this.repoName);
    });
  }

  getCommits(userName: string, repoName: string) {
    this.githubService.getCommits(userName, repoName).subscribe((data) => {
      console.log(this.repoName)
      this.commits = data;
    });
  }
  
}
