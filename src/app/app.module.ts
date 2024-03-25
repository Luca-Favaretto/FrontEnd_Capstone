import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutorizationInterceptor } from './auth/interceptor/autorization.interceptor';
import { ErrorInterceptor } from './auth/interceptor/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DatailsComponent } from './views/datails/datails.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormEditProfileComponent } from './components/dialog forms/form-edit-profile/form-edit-profile.component';
import { ButtonBadgeComponent } from './components/button-badge/button-badge.component';
import { FormEditTaskComponent } from './components/dialog forms/form-edit-task/form-edit-task.component';
import { MyCourseComponent } from './components/dialog forms/my-course/my-course.component';
import { UserManagementComponent } from './views/user-management/user-management.component';
import { SliderRatingComponent } from './components/dialog forms/slider-rating/slider-rating.component';
import { ContractFormComponent } from './components/dialog forms/contract-form/contract-form.component';
import { TaskFormComponent } from './components/dialog forms/task-add-form/task-form.component';

import { MatSliderModule } from '@angular/material/slider';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddCourseComponent } from './components/dialog forms/add-course/add-course.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    DatailsComponent,
    NavabarComponent,
    ProfileComponent,
    TaskListComponent,
    SliderComponent,
    ProgressCircleComponent,
    ResultListComponent,
    CourseListComponent,
    FormEditProfileComponent,
    ButtonBadgeComponent,
    FormEditTaskComponent,
    MyCourseComponent,
    UserManagementComponent,
    SliderRatingComponent,
    ContractFormComponent,
    TaskFormComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutorizationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
