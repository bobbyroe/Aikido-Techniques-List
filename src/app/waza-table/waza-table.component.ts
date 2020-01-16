import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { WazaTableDataSource, WazaTableItem } from "./waza-table-datasource";
import { AikidoService } from "../aikido.service";

@Component({
  selector: "app-waza-table",
  templateUrl: "./waza-table.component.html",
  styleUrls: ["./waza-table.component.css"]
})
export class WazaTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<WazaTableItem>;
  dataSource: WazaTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  constructor(private wazaService: AikidoService) {}

  ngOnInit() {
    this.dataSource = new WazaTableDataSource();
    this.wazaService.getData().subscribe(res => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
