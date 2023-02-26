import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { IssueFilterComponent } from './issue-filter/issue-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    NavBarComponent,
    IssueFilterComponent,
    IssueEditComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
