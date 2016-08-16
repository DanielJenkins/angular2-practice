import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import {ParentComponent} from "./parent/parent.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {}