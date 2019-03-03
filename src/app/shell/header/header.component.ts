import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService, I18nService} from '@app/core';
import {select, Store} from '@ngrx/store';
import {selectConfig} from '@app/store/selectors/config.selector';
import {IAppState} from '@app/store/state/app.state';
import {GetConfig} from '@app/store/actions/config.actions';
import {IConfig} from '@models/Config';
import {selectCartList} from '@app/store/selectors/cart.selector';
import {GetCart} from '@app/store/actions/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  config$ = this._store.pipe(select(selectConfig));
  cart$ = this._store.pipe(select(selectCartList));

  constructor(
    private _store: Store<IAppState>,
    private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
    this._store.dispatch(new GetCart());
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], {replaceUrl: true}));
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
