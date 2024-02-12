import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css'],
})
export class StatusFilterComponent {
  @Input() status = '';
  @Output() statusChange = new EventEmitter<string>();

  handleStatusClick(newStatus: string) {
    this.status = newStatus;
    this.statusChange.emit(newStatus);
  }
}
