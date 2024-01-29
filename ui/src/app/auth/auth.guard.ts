import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';
import { isDevMode } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginSerivce: LoginService = inject(LoginService);
  return isDevMode() ? true : loginSerivce.isAuthenticated() === true;
};
