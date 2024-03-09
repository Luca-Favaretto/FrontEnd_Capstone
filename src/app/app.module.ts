import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DatailsComponent } from './views/datails/datails.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { ProfileComponent } from './views/profile/profile.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, NotFoundComponent, DatailsComponent, NavabarComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
