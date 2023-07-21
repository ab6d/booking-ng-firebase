import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../infrastructure/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn =     (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if ( inject( AuthService ).isLoggedIn === true ) {
    return true
  };
  inject( Router ).navigate(['/admin/sign-in'])
  return false
};

