//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { AddPropertyComponent } from './components/add-property.component';
import { PropertyListComponent } from './components/property-list.component';
import { PropertyItemComponent } from './components/property-item.component';
import { PropertyService } from './services/property.service';

@NgModule({
    declarations: [
        AppComponent,
        AddPropertyComponent,
        PropertyListComponent,
        PropertyItemComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [PropertyService],
    bootstrap: [AppComponent],
})
export class AppModule { }
