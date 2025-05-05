import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login/login.service";

export const authGuard = () => {
    const loginService = inject(LoginService);
    const router = inject(Router);

  if (loginService.estaLogado()) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
  };