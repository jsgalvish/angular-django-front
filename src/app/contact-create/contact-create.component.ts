import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

 	constructor(private ApiService: ApiService) { }

 	ngOnInit() {}

 	private contact;
 	private response;

 	createContact(){
		this.contact  = {
			"name": "Doggy",
			"age": 2,
			"breed": "Pug",
			"color": "Brown",
		};
	
		this.ApiService.createContact(this.contact).subscribe((response) => {
    		this.response = response;
    		console.log(response);
		});
	}
}
