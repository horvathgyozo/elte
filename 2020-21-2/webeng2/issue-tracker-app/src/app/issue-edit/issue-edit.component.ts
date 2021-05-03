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
  issue = new Issue();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.issue = await this.issueService.getIssue(+id);
    }
  }

  async handleSave(issue): Promise<void> {
    if (this.issue.id) {
      await this.issueService.updateIssue(this.issue.id, issue);
      this.location.back();
    } else {
      await this.issueService.addIssue(issue);
      this.router.navigate(['/issues']);
    }
  }
}
