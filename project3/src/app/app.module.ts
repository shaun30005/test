import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    PaginatorModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
