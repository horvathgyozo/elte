import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    private router: Router,
    private location: Location
  ) {}

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

  async handleSave(issue: Issue) {
    if (this.issue.id === 0) {
      await this.issueService.addIssue(issue);
      this.router.navigate(['/issues']);
    } else {
      await this.issueService.updateIssue(this.issue.id, issue);
      this.location.back();
    }
  }
}
