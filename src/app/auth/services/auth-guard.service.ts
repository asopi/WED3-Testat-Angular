import {Injectable} from '@angular/core';
import {
  Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanLoad, Route
} from '@angular/router';
import {AuthService} from './auth.service';
import {NavigationService} from "../../core/services/navigation.service";

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router, private navigationService: NavigationService) {

  }

  canLoad(route: Route): boolean {
    return this.checkLogin(`/${route.path}`);
  }

  checkLogin(url: string): boolean {
    if (this.authService.hasCredentials) {
       return true;
    }
    // Navigate to the login page with extras
    this.navigationService.goToHome();
    return false;
  }
}
