import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  public issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'place1', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'place2', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'place3', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'place4', status: 'NEW' },
  ];
  public status = 'ALL';
  public filteredIssues: Issue[] = [];
  public selectedIssue: Issue | null = null;

  constructor() {}

  ngOnInit(): void {
    this.filterIssue();
  }

  private filterIssue() {
    this.filteredIssues =
      this.status === 'ALL' ? this.issues : this.issues.filter((issue) => issue.status === this.status);
  }

  handleStatusChange(newStatus: string) {
    this.status = newStatus;
    this.filterIssue();
  }
}
