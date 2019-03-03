import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, I18nService, Logger } from '@app/core';
import { ConfigService } from '@app/core/config.service';
import { IConfig } from '@models/Config';
import { Subscription } from 'rxjs';
import { CartItem } from '@models/Cart';
import { CartService } from '@app/shop/services/cart.service';

const log = new Logger('Header Component');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  config: IConfig = null;
  cart: CartItem[] = null;
  private subscription = new Subscription();
  menuHidden = true;

  constructor(
    private cartService: CartService,
    private configService: ConfigService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.configService.ConfigReady.subscribe(config => {
        this.config = config;
      })
    );

    this.subscription.add(
      this.cartService.$Cart().subscribe(cart => {
        this.cart = cart;
      })
    );
  }

  ngOnDestroy() {
    log.info('HeaderComponent ngOnDestroy');
    this.subscription.unsubscribe();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }
}
