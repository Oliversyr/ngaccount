import { NgModule, Component, ElementRef, Injectable, NO_ERRORS_SCHEMA, ViewChild, TemplateRef, Input, Inject } from '@angular/core';
import { OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MyHttpService } from '../../common/http/http.service'; 

@Injectable()

export class AccountService {
    constructor(
        private myhttp: MyHttpService
    ) {
        
    }


    getAccountList() {
        console.log(1);
        let serObj = {
            url: 'account/getAccountList',
            method: "GET"
        }
        return this.myhttp.request(serObj);
    }


}
