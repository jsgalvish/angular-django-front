import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	API_URL  =  'http://localhost:8000';
  
  constructor(private  httpClient:  HttpClient) { }

	getContacts(){
  	return this.httpClient.get(`${this.API_URL}/api/v1/puppies/`);
	}

	createContact(contact){
  	return this.httpClient.post(`${this.API_URL}/api/v1/puppies/`,contact);
	}
}
