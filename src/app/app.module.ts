import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ResourcesContainerComponent} from './containers/resources-container/resources-container.component';
import {ResourcesComponent} from './components/resources/resources.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {OauthInterceptorService} from './services/oauth-interceptor.service';
import {FormatFileSizePipe} from './pipes/file-size.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ResourcesContainerComponent,
        ResourcesComponent,
        BreadcrumbsComponent,
        FormatFileSizePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: OauthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
