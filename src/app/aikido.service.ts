import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class AikidoService {
  constructor(private http: HttpClient) {}

  getData() {
    const url = "http://localhost:4000/";
    const query = `{
      waza {
        id
        attack
        response
      }
    }`;
    const body = JSON.stringify({ query });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    };
    return this.http.post(url, body, options);
  }
}
