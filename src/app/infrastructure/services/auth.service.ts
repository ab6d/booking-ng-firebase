import { Injectable, NgZone, inject } from '@angular/core';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    user: any = null;
    afs: Firestore = inject( Firestore )
    auth = getAuth();

      // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    onAuthStateChanged(this.auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
            this.user = user;
            this.router.navigate(['/admin/dashboard'])
          // ...
        } else {
          // User is signed out
          // ...
            this.user = null;
        }
      });
    }

    signIn ( email: string, password: string ) {
        signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential: any) => {
                // Signed in 
                this.user = userCredential.user;
                this.router.navigate( ["/admin/dashboard"] );
            })
            .catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log( 'rip' );
                console.log(errorMessage)
            });
    }


  // Sign out
    signOut () {
        signOut(this.auth).then(() => {
        // Sign-out successful.
            console.log("Sign-out successful.")
            this.user = null;
            this.router.navigate(['/admin/sign-in']);
        }).catch((error) => {
        // An error happened.
            console.log(error)
        });
  }
}
