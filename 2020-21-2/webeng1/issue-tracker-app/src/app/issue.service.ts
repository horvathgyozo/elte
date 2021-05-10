import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from './issue';

const httpOptions = {
  headers: new HttpHeaders({
    // Authorization: `Bearer 4|sBh5GPRaPQ2SmDcEQ3sasXk45sCuKubyNHkRYkeA`,
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

  public updateIssue(id: number, data: Issue): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${id}`, data, httpOptions).toPromise();
  }

  public addIssue(newIssue: Issue): Promise<Issue> {
    return this.http.post<Issue>(this.issueUrl, newIssue, httpOptions).toPromise();
  }

  public deleteIssue(id: number): Promise<Issue> {
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }
}
