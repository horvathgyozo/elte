import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  issue: Issue = new Issue();
  constructor(private route: ActivatedRoute, private issueService: IssueService, private router: Router) {}

  async ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId !== null) {
      const id = parseInt(paramId);
      const issue = await this.issueService.getIssue(id);
      if (issue) {
        this.issue = issue;
      }
    }
  }

  async handleDelete() {
    await this.issueService.deleteIssue(this.issue.id);
    this.router.navigate(['/issues']);
  }
}
