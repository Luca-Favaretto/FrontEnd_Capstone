import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DatailsComponent } from './views/datails/datails.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ErrorInterceptor } from './auth/interceptor/error.interceptor';
import { AutorizationInterceptor } from './auth/interceptor/autorization.interceptor';
import { SliderComponent } from './components/slider/slider.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [
    {
      useClass: AutorizationInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
    {
      useClass: ErrorInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
