import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FloatButtonComponent } from './float-button/float-button.component';
import { GridContentComponent } from './grid-content/grid-content.component';

import { ProductService } from './service/product.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FloatButtonComponent,
    GridContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
