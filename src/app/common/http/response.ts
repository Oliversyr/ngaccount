// 响应参数
export interface MyResponse {
    /**
     * 返回码
     * 0--SUCCESS ; 11--FAIL
     */
    retCode: ResponseRetCode;
    /**
     * 请求返回值
     */
    result: any;
    /**
     * 返回提示信息
     */
    retMsg: string;
}

// 响应代码
export enum ResponseRetCode {
    /**
     * 成功
     * 0
     */
    SUNCCESS = "SUCCESS",
    /**
     * 失败
     * 11
     */
    FAIL = "FAIL"

}