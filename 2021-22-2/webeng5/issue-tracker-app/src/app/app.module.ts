import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueFilterComponent } from './issue-filter/issue-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    IssueFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
