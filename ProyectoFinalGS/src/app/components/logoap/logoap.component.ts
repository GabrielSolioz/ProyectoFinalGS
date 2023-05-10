import { Component } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoap',
  templateUrl: './logoap.component.html',
  styleUrls: ['./logoap.component.css']
})
export class LogoapComponent {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }
  onLogout() {
    this.tokenService.logOut();
    window.location.reload();
  }
  login() {
    this.router.navigate(['/login']);
  }

}
