import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FrontDbService } from '../../infrastructure/services/front-db.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule ],
  providers: [
    FrontDbService
  ],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  bookingForm: FormGroup;
  submitted = false;
  minDateFormatted: string;

  constructor(private formBuilder: FormBuilder, public db: FrontDbService) {
    this.bookingForm = this.formBuilder.group({
      roomType: [''],
      noOfRooms: [1],
      checkInDate: [''],
      checkOutDate: [''],
      noOfAdults: [1],
      noOfChildren: [0]
    } );
    
    // Set the minimum date as the current date
    const currentDate = new Date();
    this.minDateFormatted = currentDate.toISOString().split('T')[0];
  }

  handleSubmit(): void {
    // Submit form logic here
    // You can access the form values using the bookingForm controls
    const data = this.bookingForm.value;
    this.db.submitBooking( data ).then( () => {
      console.log( data );
      this.submitted = true;
    })
  }

  checkOutDateFilter = (date: Date | null): boolean => {
    const checkInDate = this.bookingForm.get('checkInDate')?.value;
    return !(date && checkInDate && date < checkInDate);
  };
}