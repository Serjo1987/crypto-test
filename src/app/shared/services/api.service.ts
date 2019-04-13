import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public executeRequest<T>(method: string, address: string, queryParameters?: any, body?: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let headers = new HttpHeaders();
          headers.append("access-control-expose-headers", "Authorization");

      this.http.request(method, address, {
        body: body,
        headers: headers,
        observe: 'response'
      }).subscribe(result => {
        if (result) resolve(result as T);
        else reject(result);
      }, error => {
        reject(error);
      });
    });
  }

  public get<T>(url: string, queryParameters?: any): Promise<T> {
    return this.executeRequest('GET', url, queryParameters);
  }

  public post<T>(url: string, bodyParameters?: any): Promise<T> {
    return this.executeRequest('POST', url, {}, bodyParameters);
  }
}
