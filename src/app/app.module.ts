import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DosboxService } from './dosbox.service';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { InventarComponent } from './inventar/inventar.component';
import { DbService } from './inventar/db.service';

@NgModule({
  declarations: [
    AppComponent,
    InventarComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DosboxService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
