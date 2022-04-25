import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
})
export class IssueFormComponent implements OnInit {
  @Input() issue = new Issue();
  public issueForm = this.fb.group({
    title: [''],
    description: [''],
    place: [''],
    status: [''],
  });

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.issueForm.patchValue(this.issue);
  }
}
