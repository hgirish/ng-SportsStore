import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "productEditor.component.html",
})
export class ProductEditorComponent{
    editing:boolean=false;
    product:Product = new Product();

    constructor(private repository: ProductRepository,
        private router: Router,
        acitveRoute: ActivatedRoute
    ){
        this.editing = acitveRoute.snapshot.params["mode"] == "edit";
        if (this.editing){
            Object.assign(this.product, repository.getProduct(acitveRoute.snapshot.params["id"]));
        }
    }

    save(){
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
}