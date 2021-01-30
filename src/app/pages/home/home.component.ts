import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  error = null;

  constructor(
    private ref: ChangeDetectorRef,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {}

  handleFind() {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.ref.detectChanges();
        this.error = null;
      },
      (err) => {
        this.user = null;
        this.error = "Can't find user";
        this.ref.detectChanges();
      }
    );
  }
}
