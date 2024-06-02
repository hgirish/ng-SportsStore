import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "./store/store.module";
import { RouterModule } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { StoreFirstGuard } from "./storeFirst.guard";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([
            {path:"store",component: StoreComponent,canActivate:[StoreFirstGuard]},
            {path:"cart",component:CartDetailComponent,canActivate:[StoreFirstGuard]},
            {path:"checkout",component: CheckoutComponent,canActivate:[StoreFirstGuard]},
            {path: "admin",
                loadChildren: () => import("./admin/admin.module")
                .then(m=> m.AdminModule),
                canActivate: [StoreFirstGuard]
            },
            {path:"**", redirectTo: "/store"}
        ]),
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [StoreFirstGuard, provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule{}