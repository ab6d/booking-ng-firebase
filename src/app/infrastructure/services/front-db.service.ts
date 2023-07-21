import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontDbService {
  firestore: Firestore = inject(Firestore)
  rooms: any[] = [ {
    name: 'Deluxe'
  }, {
    name: 'Normal'
  }];
  constructor() { 
    return;
    getDocs( collection( this.firestore, "rooms" ) ).then( ( res ) => {
      res.forEach( ( doc ) => {
        this.rooms.push( doc.data() );
      });
    });
  }

  submitBooking ( doc: any ) {
    return addDoc( collection( this.firestore, 'bookings' ), doc );
  }
}
