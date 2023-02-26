import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Issue } from './issue';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issuesUrl = '/api/issues';

  constructor(private http: HttpClient) {}

  async getIssues() {
    return await lastValueFrom(this.http.get<Issue[]>(this.issuesUrl));
  }

  async getIssue(id: number) {
    return await lastValueFrom(this.http.get<Issue>(`${this.issuesUrl}/${id}`));
  }

  async updateIssue(id: number, modifiedIssue: Issue) {
    return await lastValueFrom(this.http.patch<Issue>(`${this.issuesUrl}/${id}`, modifiedIssue, httpOptions));
  }

  async addIssue(newIssue: Issue) {
    return await lastValueFrom(this.http.post<Issue>(this.issuesUrl, newIssue, httpOptions));
  }

  async deleteIssue(id: number) {
    return await lastValueFrom(this.http.delete<null>(`${this.issuesUrl}/${id}`, httpOptions));
  }
}
