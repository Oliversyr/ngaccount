import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'element-angular'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { MainComponent } from './main/main.component';

import { MainModule } from './main/main.module';

const router: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(router),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
