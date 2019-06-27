import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoriesLayoutComponent } from './components/homepage/categories/categories-layout/categories-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesLayoutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
