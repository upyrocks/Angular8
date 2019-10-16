import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TwowayComponent } from './twoway/twoway.component';
import { RegisterComponent } from './register/register.component';
import { IterationComponent } from './iteration/iteration.component';
import { ForindexComponent } from './forindex/forindex.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    TwowayComponent,
    RegisterComponent,
    IterationComponent,
    ForindexComponent,
    ClassbindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ForindexComponent]
})
export class AppModule { }
