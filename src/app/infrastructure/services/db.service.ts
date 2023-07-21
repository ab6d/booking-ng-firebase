import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  firestore: Firestore = inject(Firestore)
  
    rooms$!: Observable<any[]>;
    bookings$: Observable<any[]>;
    
  constructor() { 
    // const roomCollection = collection(this.firestore, 'rooms')
    // this.rooms$ = collectionData( roomCollection );
      
    const bookingCollection = collection(this.firestore, 'bookings')
    this.bookings$ = collectionData(bookingCollection, { idField: 'id' });
  }
}
