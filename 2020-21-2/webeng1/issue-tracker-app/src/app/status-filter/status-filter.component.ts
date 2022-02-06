import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css'],
})
export class StatusFilterComponent implements OnInit {
  // status = 'DOING';
  @Input() status = '';
  @Output() statusChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleStatusChange(): void {
    this.statusChange.emit(this.status);
  }
}
