import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { NameFormatterPipe } from './name-formatter.pipe';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NameFormatterPipe,
    TdfDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
