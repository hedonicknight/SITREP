import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { GameComponent } from './game/game.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { StatusLightComponent } from './status-light/status-light.component';
import { LayoutPanelComponent } from './store/layout-panel/layout-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    GameComponent,
    StatusIndicatorComponent,
    StatusLightComponent,
    LayoutPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
