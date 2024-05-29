import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "./store/store.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}