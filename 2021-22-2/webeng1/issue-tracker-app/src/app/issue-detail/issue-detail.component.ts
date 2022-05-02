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
  issue: Issue = new Issue();
  constructor(private route: ActivatedRoute, private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    const issue = this.issueService.getIssue(id);
    if (issue) {
      this.issue = issue;
    }
  }

  handleDelete() {
    this.issueService.deleteIssue(this.issue.id);
    this.router.navigate(['/issues']);
  }
}
