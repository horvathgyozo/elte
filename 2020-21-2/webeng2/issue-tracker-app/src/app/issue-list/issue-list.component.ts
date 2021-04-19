import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues = [
    { id: 1, title: 'title1', description: 'desc1', place: 'place1', status: 'NEW' },
    { id: 2, title: 'title2', description: 'desc2', place: 'place2', status: 'DOING' },
    { id: 3, title: 'title3', description: 'desc3', place: 'place3', status: 'DOING' },
    { id: 4, title: 'title4', description: 'desc4', place: 'place4', status: 'DONE' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
