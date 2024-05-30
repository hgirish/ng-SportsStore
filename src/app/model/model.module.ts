import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { provideHttpClient } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    providers:[ProductRepository, StaticDataSource, Cart, Order, OrderRepository, 
        provideHttpClient(),
    {provide: StaticDataSource, useClass:RestDataSource}]
})
export class ModelModule{}