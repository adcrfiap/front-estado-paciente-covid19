import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";


const baseURL = 'server/paciente';
const urlToken = "https://adcrfiap-eval-test.apigee.net/oauth/client_credential/accesstoken?grant_type=client_credentials";

@Injectable()
export class PacienteService {

    constructor(private httpClient: HttpClient) { }
    
    readAll(): Observable<any> {
        return this.httpClient.get(baseURL);
      }

    read(cpf): Observable<any> {
        return this.httpClient.get(`${baseURL}/${cpf}`);
    }

    create(paciente): Observable<any> {
        return this.httpClient.post(`${baseURL}/${'pacientes'}`, paciente);
      }

    update(cpf, paciente): Observable<any> {
        return this.httpClient.put(`${baseURL}/${cpf}`, paciente);
      }


    gerarToken(){
        const body = new HttpParams()
          .set('client_id', "NFoPG1vaqegNZkaZ9MGmr0lv9aOHseIf")
          .set('client_secret', "SrcnF3iA32G34AHe");

        return this.httpClient.post(urlToken, body.toString(), {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          })
    }  
}
