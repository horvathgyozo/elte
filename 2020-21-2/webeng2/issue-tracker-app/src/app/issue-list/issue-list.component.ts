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
  status = 'ALL';
  filteredIssues = this.issues;
  selectedIssue: Issue = null;

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issues = this.issueService.getIssues();
    this.filterIssues();
  }

  filterIssues(): void {
    this.filteredIssues =
      this.status === 'ALL' ? this.issues : this.issues.filter((issue) => issue.status === this.status);
  }

  handleStatusChange(newStatus: string): void {
    this.status = newStatus;
    this.filterIssues();
  }

  handleSave(issue): void {
    Object.assign(this.selectedIssue, issue);
    this.selectedIssue = null;
  }
}
