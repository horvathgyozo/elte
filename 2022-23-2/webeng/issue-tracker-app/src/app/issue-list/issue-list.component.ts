import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  status = '';
  filteredIssues: Issue[] = [];
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssueService) {}

  async ngOnInit() {
    this.issues = await this.issueService.getIssues();
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues =
      this.status === '' ? this.issues : this.issues.filter((issue) => issue.status === this.status);
  }

  handleStatusClick(newStatus: string) {
    this.status = newStatus;
    this.filterIssues();
  }

  handleSave(issue: Issue) {
    if (this.selectedIssue !== null) {
      Object.assign(this.selectedIssue, issue);
      this.selectedIssue = null;
    }
  }
}
