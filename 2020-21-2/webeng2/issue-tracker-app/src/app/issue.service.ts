import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueUrl = 'http://localhost:3000/api/issues';

  constructor(private http: HttpClient) {}

  public getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(this.issueUrl).toPromise();
  }

  public getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`).toPromise();
  }

  public updateIssue(id: number, modifiedIssue: Issue): Promise<Issue> {
    return this.http.patch<Issue>(`${this.issueUrl}/${id}`, modifiedIssue).toPromise();
  }

  public addIssue(newIssue: Issue): Promise<Issue> {
    return this.http.post<Issue>(this.issueUrl, newIssue).toPromise();
  }

  public deleteIssue(id: number): Promise<void> {
    return this.http.delete<void>(`${this.issueUrl}/${id}`).toPromise();
  }
}
