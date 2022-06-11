import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { ShadowDOMComponent } from './shadow-dom/shadow-dom.component';
import { NoneComponent } from './none/none.component';
// import { ChildComponent } from './none/child/child.component';
// import { Child1Component } from './none/child1/child1.component';
import { Child1Component } from './emulated/child1/child1.component';
import { Child2Component } from './none/child2/child2.component';
import { Child3Component } from './shadow-dom/child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    ShadowDOMComponent,
    NoneComponent,
    // ChildComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
