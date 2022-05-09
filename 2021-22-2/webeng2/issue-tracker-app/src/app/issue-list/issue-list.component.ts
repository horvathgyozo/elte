import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  public issues: Issue[] = [];
  public status = 'ALL';
  public filteredIssues: Issue[] = [];
  public selectedIssue: Issue | null = null;

  constructor(private issueService: IssueService) {}

  async ngOnInit() {
    this.issues = await this.issueService.getIssues();
    this.filterIssues();
  }

  private filterIssues() {
    this.filteredIssues =
      this.status === 'ALL' ? this.issues : this.issues.filter((issue) => issue.status === this.status);
  }

  handleStatusChange(newStatus: string) {
    this.status = newStatus;
    this.filterIssues();
  }

  handleSave(issue: Issue) {
    Object.assign(this.selectedIssue, issue);
    this.selectedIssue = null;
  }
}
