import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '@app/store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '@app/store/effects/product.effects';
import { ConfigEffects } from '@app/store/effects/config.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { CartEffects } from '@app/store/effects/cart.effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductEffects, CartEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FontAwesomeModule,
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
