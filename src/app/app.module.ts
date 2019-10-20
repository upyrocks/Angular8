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
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ChangedemoComponent } from './changedemo/changedemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { ProductdataService } from './productdata.service';

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
    ClassbindingComponent,
    PropertybindingComponent,
    ChangedemoComponent,
    ParentComponent,
    ChildComponent,
    FilterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductsComponent]
})
export class AppModule { }
