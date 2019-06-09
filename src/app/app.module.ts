import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { LandpageComponent } from './landpage/landpage.component';
import {RoutingModule} from './routing/routing.module';
import { GitserviceService } from './gitservice.service';


@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
