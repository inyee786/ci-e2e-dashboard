import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Overview | OpenEBS CI/E2E");
  }

  ngOnInit() {}
}
