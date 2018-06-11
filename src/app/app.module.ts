import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { DemoMaterialModule } from './utils/demo-material/demo-material.module';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SparklineLineComponent } from './components/sparkline-line/sparkline-line.component';
import { AppRoutingModule } from './app-roouting.module';
import { SimpleComponent } from './sparklines/inline/simple/simple.component';
import { SimpleShaddedComponent } from './sparklines/inline/simple-shadded/simple-shadded.component';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        AppComponent,
        LandingPageComponent,
        SparklineLineComponent,
        SimpleComponent,
        SimpleShaddedComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        DemoMaterialModule,
        ReactiveFormsModule,
        DemoMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
