import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'PC1', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'place2', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'place3', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'place4', status: 'DONE' },
  ];
  private issueUrl = 'http://localhost:8000/api/issues';

  constructor(private http: HttpClient) {}

  getIssues() {
    // return this.issues;
    return lastValueFrom(this.http.get<Issue[]>(this.issueUrl));
  }

  getIssue(id: number) {
    // return this.issues.find((issue) => issue.id === id);
    return lastValueFrom(this.http.get<Issue>(`${this.issueUrl}/${id}`));
  }

  addIssue(issue: Issue) {
    // issue.id = this.issues[this.issues.length - 1].id + 1;
    // this.issues.push(issue);
    return lastValueFrom(this.http.post<Issue>(this.issueUrl, issue));
  }

  updateIssue(id: number, issue: Issue) {
    // issue.id = id;
    // this.issues = this.issues.map((iss) => (iss.id === id ? issue : iss));
    return lastValueFrom(this.http.patch<Issue>(`${this.issueUrl}/${id}`, issue));
  }

  deleteIssue(id: number) {
    // this.issues = this.issues.filter((issue) => issue.id !== id);
    return lastValueFrom(this.http.delete<Issue>(`${this.issueUrl}/${id}`));
  }
}
