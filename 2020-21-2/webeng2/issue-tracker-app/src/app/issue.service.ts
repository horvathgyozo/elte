import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from './issue';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
    // Authorization: 'Bearer 3|ckME925cMSOtildNihYZWlIWjDx2UupHqt16P3qY',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueUrl = 'http://localhost:3000/api/issues';

  constructor(private http: HttpClient) {}

  public getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(this.issueUrl, httpOptions).toPromise();
  }

  public getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

  public updateIssue(id: number, modifiedIssue: Issue): Promise<Issue> {
    return this.http.patch<Issue>(`${this.issueUrl}/${id}`, modifiedIssue, httpOptions).toPromise();
  }

  public addIssue(newIssue: Issue): Promise<Issue> {
    return this.http.post<Issue>(this.issueUrl, newIssue, httpOptions).toPromise();
  }

  public deleteIssue(id: number): Promise<void> {
    return this.http.delete<void>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }
}
