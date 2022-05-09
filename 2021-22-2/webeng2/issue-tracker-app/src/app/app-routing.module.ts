import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'issues/new',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
