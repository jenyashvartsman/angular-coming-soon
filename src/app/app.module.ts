import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { CounterComponent } from './components/counter/counter.component';
import { TimeNumberPipe } from './pipes/time-number.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CounterComponent,
    TimeNumberPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
