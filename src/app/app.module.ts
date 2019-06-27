import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Components
 */
import { NavComponent } from './components/homepage/nav/nav.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { AppComponent } from './app.component';
import { HomepageModule } from './modules/homepage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * Routing
 */
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
