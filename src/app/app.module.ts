import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoordinateFormComponent } from './coordinate-form/coordinate-form.component';
import { LiveWeatherComponent } from './live-weather/live-weather.component';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordinateFormComponent,
    LiveWeatherComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
