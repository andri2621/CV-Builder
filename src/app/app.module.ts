import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './views/example/example.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    NotFoundComponent,
    LandingPageComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
