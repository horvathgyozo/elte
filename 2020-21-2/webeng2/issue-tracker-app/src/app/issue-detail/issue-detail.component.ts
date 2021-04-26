import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  issue = new Issue();

  constructor(private route: ActivatedRoute, private issueService: IssueService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = this.issueService.getIssue(id);
  }
}
