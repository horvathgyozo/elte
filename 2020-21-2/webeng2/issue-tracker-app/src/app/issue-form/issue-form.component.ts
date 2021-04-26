import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
})
export class IssueFormComponent implements OnInit, OnChanges {
  @Input() issue = null;
  @Output() save = new EventEmitter<Issue>();

  issueForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]],
    status: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  get title(): AbstractControl {
    return this.issueForm.get('title');
  }
  get description(): AbstractControl {
    return this.issueForm.get('description');
  }
  get place(): AbstractControl {
    return this.issueForm.get('place');
  }
  get status(): AbstractControl {
    return this.issueForm.get('status');
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.issueForm.patchValue(this.issue);
  }

  onSubmit(): void {
    if (this.issueForm.valid) {
      this.save.emit(this.issueForm.value);
    }
  }
}
