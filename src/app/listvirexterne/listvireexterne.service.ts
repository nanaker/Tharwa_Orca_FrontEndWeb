import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class Service{

    constructor(private httpClient : HttpClient){}

    getVirementEx( )
    {
        var headers = new HttpHeaders();
        headers = headers.append("token",localStorage.getItem('token_access'));
    
        return this.httpClient.get('http://192.168.0.164:8080/gestionnaire/listVirementEx',{headers:headers})
    }

}