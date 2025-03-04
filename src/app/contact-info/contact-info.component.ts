import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../models/contact-info';
import { ContactInfoService } from '../services/contact-info.service';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent implements OnInit {

  contactInfo !: ContactInfo;

  constructor(private contactInfoService: ContactInfoService) { }

  ngOnInit(): void {
    this.contactInfo = this.contactInfoService.getContactInfo();
  }

}
