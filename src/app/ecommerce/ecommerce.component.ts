import { Component, OnInit, OnChanges } from "@angular/core";
import { productList } from "./constants";

@Component({
  selector: "app-ecommerce",
  templateUrl: "./ecommerce.component.html",
  styleUrls: ["./ecommerce.component.scss"],
})
export class EcommerceComponent implements OnInit {
  products: {
    id: number;
    product_name: string;
    description: string;
    price: number;
    image: string;
  }[];
  priceList: number[];
  isGridSelected: boolean;
  filteredProducts: {
    id: number;
    product_name: string;
    description: string;
    price: number;
    image: string;
  }[];
  filteredPrice: number[];
  filterOpen: boolean;
  constructor() {
    this.products = productList;
    this.isGridSelected = true;
    this.priceList = [];
    this.filteredProducts = [];
    this.filteredPrice = [];
    this.filterOpen = false;
  }

  ngOnInit(): void {
    this.products.map((product) => {
      if (!this.priceList.includes(product.price)) {
        this.priceList.push(product.price);
      }
    });
    this.filteredProducts = this.products;
  }

  onGridSelected(): void {
    this.isGridSelected = true;
  }

  onListSelected(): void {
    this.isGridSelected = false;
  }

  getFilteredItem(): void {
    this.filteredProducts = [];
    if (this.filteredPrice.length === 0) {
      this.filteredProducts = this.products;
    }
    this.products.map((data) => {
      if (this.filteredPrice.includes(data.price)) {
        this.filteredProducts.push(data);
      }
    });
  }
  removePrice(price: number): void {
    const index: number = this.filteredPrice.indexOf(price);
    this.filteredPrice.splice(index, 1);
    this.getFilteredItem();
  }

  filteredList(price: number): void {
    if (this.filteredPrice.includes(price)) {
      this.removePrice(price);
    } else {
      this.filteredPrice.push(price);
      this.getFilteredItem();
    }
  }

  filterToggle() {
    this.filterOpen = !this.filterOpen;
  }
}
