import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  issue = new Issue();

  constructor(private route: ActivatedRoute, private issueService: IssueService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = await this.issueService.getIssue(id);
  }

  async handleDelete(): Promise<void> {
    await this.issueService.deleteIssue(this.issue.id);
    this.router.navigate(['/issues']);
  }
}
