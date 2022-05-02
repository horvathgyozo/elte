import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css'],
})
export class IssueEditComponent implements OnInit {
  issue: Issue = new Issue();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (urlId) {
      const id = parseInt(urlId);
      const issue = this.issueService.getIssue(id);
      if (issue) {
        this.issue = issue;
      }
    }
  }

  handleSave(issue: Issue) {
    if (this.issue.id) {
      this.issueService.updateIssue(this.issue.id, issue);
      this.location.back();
    } else {
      const newIssue = this.issueService.addIssue(issue);
      this.router.navigate(['/issues']);
    }
  }
}
