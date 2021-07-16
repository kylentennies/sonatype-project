import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Array<any>;
  
  constructor(private githubService:GithubService) {
    this.projects = [];
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.githubService.getProjects().subscribe((data) => {
      console.log(data)
      this.projects = data;
    });
  }
}
