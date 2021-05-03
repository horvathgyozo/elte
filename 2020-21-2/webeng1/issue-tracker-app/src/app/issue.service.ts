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

  public updateIssue(id: number, data: Issue): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${id}`, data).toPromise();
  }

  public addIssue(newIssue: Issue): Promise<Issue> {
    return this.http.post<Issue>(this.issueUrl, newIssue).toPromise();
  }

  public deleteIssue(id: number): Promise<Issue> {
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`).toPromise();
  }
}
