import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
})
export class IssueFormComponent implements OnChanges {
  @Input() issue = new Issue();
  @Output() save = new EventEmitter<Issue>();
  constructor(private fb: FormBuilder) {}

  issueForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]],
    status: ['', [Validators.required]],
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.issueForm.patchValue(changes['issue'].currentValue);
  }

  get title() {
    return this.issueForm.get('title');
  }
  get description() {
    return this.issueForm.get('description');
  }
  get place() {
    return this.issueForm.get('place');
  }
  get status() {
    return this.issueForm.get('status');
  }

  onSubmit() {
    // console.log(this.issueForm.value);
    const issue = new Issue();
    this.save.emit(Object.assign(issue, this.issueForm.value));
  }
}
