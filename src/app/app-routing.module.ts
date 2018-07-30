import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

const routes: Routes = [
	{ path:  '', redirectTo:  'contacts', pathMatch:  'full' },
//	{ path:  'accounts', component:  AccountListComponent },
//	{ path:  'create-account', component:  AccountCreateComponent },
	{ path:  'contacts', component:  ContactListComponent },
	{ path:  'create-contact', component:  ContactCreateComponent },
//	{ path:  'leads', component:  LeadListComponent },
//	{ path:  'create-lead', component:  LeadCreateComponent },
//	{ path:  'opportunities', component:  OpportunityListComponent },
//	{ path:  'create-opportunity', component:  OpportunityCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
