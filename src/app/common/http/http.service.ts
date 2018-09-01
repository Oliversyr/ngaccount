import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyResponse } from './response';

/**
 * 请求参数
 */
interface RequestParams {
    url: string;
    method:  string;
    params?: any;
    
}

@Injectable()

export class MyHttpService {
    // rootUrl = "http://127.0.0.1:8085/";
    rootUrl = "http://118.24.169.107:8082/";

    constructor(
        public http: HttpClient
    ) {

    }

    // request = this.http.request;
    request(reqParams: RequestParams) {
        let method = reqParams.method.toUpperCase() === "POST" ? "POST" : "GET";
        let url = reqParams.url.indexOf("http://") === -1 ? this.rootUrl + reqParams.url : reqParams.url;
        
        let params = method === "GET" ? new HttpParams({fromString: reqParams.params}) : new HttpParams();

        let body = method === "POST" ? new HttpParams({fromObject: reqParams.params}) : new HttpParams();

        return new Observable<MyResponse>(observable => {
            this.http.request(method, url, {body, params}).subscribe((res) => {
                let obj = {
                    retCode: res["retCode"],
                    result: res["result"],
                    retMsg: res["retMsg"]
                }

                observable.next(obj);

                observable.complete();
            })
        }) 
    }




}