import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../infrastructure/services/auth.service';
import { DbService } from '../../infrastructure/services/db.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { BookingInterface } from '../../shared/booking.interface';
import { TimestampToDatePipe } from '../../shared/timestamp-to-date.pipe';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, TimestampToDatePipe ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements AfterViewInit {
  JSON = JSON;

  displayedColumns: string[] = ['roomType', 'noOfRooms', 'checkInDate', 'checkOutDate', 'noOfAdults', 'noOfChildren'];
  dataSource = new MatTableDataSource<BookingInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public authService: AuthService,
    public db: DbService,
    private cdref: ChangeDetectorRef
  ) { }

  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator;
    
    this.db.bookings$.subscribe( ( bookings ) => {
      console.log(bookings)
      this.dataSource.data = bookings;
      this.cdref.detectChanges(); // Update the view
    });
  }
}
