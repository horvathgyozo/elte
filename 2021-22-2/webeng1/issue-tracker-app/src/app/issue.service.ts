import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'PC11', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'PC11', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'PC11', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'PC11', status: 'NEW' },
  ];

  getIssues() {
    return this.issues;
  }

  getIssue(id: number): Issue | undefined {
    return this.issues.find((issue) => issue.id === id);
  }

  updateIssue(id: number, modifiedIssue: Issue) {
    const issue = this.getIssue(id);
    if (issue) {
      Object.assign(issue, modifiedIssue);
      return issue;
    }
    return;
  }

  addIssue(newIssue: Issue) {
    const id = this.issues.length + 1;
    newIssue.id = id;
    this.issues.push(newIssue);
    return newIssue;
  }

  deleteIssue(id: number) {
    this.issues = this.issues.filter((issue) => issue.id !== id);
  }
}
