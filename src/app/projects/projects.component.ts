import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  commits: Array<any>;
  projects: Array<any>;
  repoName: string;
  userName: string = "Netflix";
  projectsArray: string[] = [];

  constructor(private githubService:GithubService) {
    this.commits = [];
    this.projects = [];
    this.repoName = "";
  }

  ngOnInit(): void {
    this.getProjects();
  }

  async getProjects() {
    this.githubService.getProjects(this.userName).subscribe((data) => {
      this.projects = data;

      for (let i = 0; i < this.projects.length; i++) {
        this.repoName = this.projects[i].name;
        this.getCommits(this.userName, this.repoName);
      }
    });
  }

  async getCommits(userName: string, repoName: string) {
    this.githubService.getCommits(userName, repoName).subscribe((data) => {
      this.commits = data;
      console.log(repoName, ":", this.commits)
    });
  }
  
}
