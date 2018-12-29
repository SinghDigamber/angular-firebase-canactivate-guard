import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }