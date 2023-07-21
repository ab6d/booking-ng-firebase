import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { importProvidersFrom } from '@angular/core';

export const INFRA_PROVIDERS = [
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom( provideFunctions( () => getFunctions() ) ),
    ScreenTrackingService,
    UserTrackingService
]
