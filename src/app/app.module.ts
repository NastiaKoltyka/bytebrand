import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DetailsPageComponent } from './details-page/details-page.component';
import { PaginationService } from './core/pagination.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
