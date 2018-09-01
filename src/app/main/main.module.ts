import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'element-angular'
import { RouterModule, Routes } from '@angular/router';

import { RecordComponent } from '../record/record.component';
import { AccountComponent } from '../account/account.component';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { DataComponent } from '../data/data.component';
import { MainComponent } from './main.component';

const router: Routes = [
    { 
        path: 'main', 
        component: MainComponent,
        children: [
            { path: 'record', component: RecordComponent },
            { path: 'account', component: AccountComponent },
            { path: 'input', component: InputComponent },
            { path: 'output', component: OutputComponent },
            { path: 'data', component: DataComponent },
        ] 
    },
]

@NgModule({
  declarations: [
    MainComponent,
    InputComponent,
    OutputComponent,
    RecordComponent,
    AccountComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule,
    RouterModule.forChild(router),
  ],
  providers: [],
})

export class MainModule { }
