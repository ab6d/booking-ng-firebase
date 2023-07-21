import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookingFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showFullContent: boolean = false;

  toggleContent(): void {
      this.showFullContent = !this.showFullContent;
  }
}
