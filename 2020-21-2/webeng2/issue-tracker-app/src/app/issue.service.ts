import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issues: Issue[] = [
    { id: 1, title: 'title1', description: 'desc1', place: 'place1', status: 'NEW' },
    { id: 2, title: 'title2', description: 'desc2', place: 'place2', status: 'DOING' },
    { id: 3, title: 'title3', description: 'desc3', place: 'place3', status: 'DOING' },
    { id: 4, title: 'title4', description: 'desc4', place: 'place4', status: 'DONE' },
  ];

  constructor() {}

  public getIssues(): Issue[] {
    return this.issues;
  }

  public getIssue(id: number): Issue {
    return this.issues.find((issue) => issue.id === id);
  }
}
