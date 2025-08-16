import { Injectable } from '@angular/core';
import { ContactInfo } from '../models/contact-info';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})

export class ContactInfoService {

  private contactInfo: ContactInfo  = new ContactInfo(
    new Address("Club d'éducation canine de Vienne","3597, Montée Coupe Jarret", "38200", "VIENNE", "France","/assets/images/contact/address_on_map.png"),
    "06 74 03 50 61",
    "clubcaninvienne38200@gmail.com") ;

    getContactInfo(): ContactInfo {
        return this.contactInfo;
    }

}
