import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit {
  formVar: FormGroup;
  @ViewChild('username') private username: ElementRef;
  @ViewChild('email') private email: ElementRef;
  @ViewChild('message') private message: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formVar = this.fb.group({
      username: '',
      email: '',
      message: ''
    });
  }
  
  onSubmit() {
    console.log(this.formVar.value);
  }

  clearForm() {
    this.username.nativeElement.value = this.email.nativeElement.value = this.message.nativeElement.value = '';
  }

  ngAfterViewInit() {}

  long = 44.8271;
  lat = 41.7151;
  googleMapType = 'roadmap';
  zoome: 10;
}
