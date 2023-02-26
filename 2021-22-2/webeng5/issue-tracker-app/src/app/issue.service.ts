import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Issue } from './issue';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'place1', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'place2', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'place3', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'place4', status: 'NEW' },
  ];
  private issuesUrl = 'http://localhost:8000/api/issues';

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
