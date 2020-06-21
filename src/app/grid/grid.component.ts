import { Component, OnInit, HostListener } from "@angular/core";
import debounce from "lodash/debounce";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridComponent implements OnInit {
  constructor() {
    this.arraySize = 9;
    this.gridData = Array(this.arraySize).fill(0);
    this.isLoading = false;
    this.heightLength = 100;
  }
  gridData: number[];
  arraySize: number;
  isLoading: boolean;
  heightLength: number;

  handleScroll = debounce(function () {
    this.arraySize = this.arraySize + 9;
    this.gridData = Array(this.arraySize).fill(0);
    this.isLoading = false;
  }, 2000);

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  scrollHandler(event): void {
    const element = event.target;
    if (
      element.scrollTop + element.clientHeight >=
      0.95 * element.scrollHeight
    ) {
      this.isLoading = true;
      this.handleScroll();
    }
  }

  handleAlert(index: number): void {
    alert(`Button ${index + 1} is clicked!`);
  }
}
