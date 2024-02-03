import { CanDeactivateFn } from '@angular/router';
import { AdminService } from '../admin.service';
import { inject } from '@angular/core';

export const preventBackGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const adminService : AdminService = inject(AdminService);
  return adminService.canGoHome() === true;
};
