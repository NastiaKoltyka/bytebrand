import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DetailsPageComponent } from './components/details-page/details-page.component';
import { PaginationService } from './core/pagination.service';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
