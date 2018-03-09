// Vendor
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

// App
import { AppComponent } from './app.component';
import { TableComponent } from './views/table/table.component';
import {
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    // Vendor
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
