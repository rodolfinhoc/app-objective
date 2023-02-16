import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/service/http.service';

import { DetalheComponent } from './dialog/detalhe/detalhe.component';


@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {
  dataSource: any;
  isLoading = true;
  displayedColumns: string[] = ['thumbnail', 'series', 'events'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  mobileQuery: MediaQueryList;


  constructor(
    public dialog: MatDialog,
    public platform: Platform,
    private http: HttpService,
    private media: MediaMatcher,
    private breakpointObserver: BreakpointObserver
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 3000px)');
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.displayedColumns = ['thumbnail'];
      } else {
        this.displayedColumns = ['thumbnail', 'series', 'events'];
      }
    });
  }

  async ngOnInit(){
    await this.loadTabela();
  }

  //TABLE
  async loadTabela(){
    await this.http.getAllCharacters().then(retorno => {
      this.dataSource = new MatTableDataSource(retorno.data.results);
      this.isLoading = false;
    });
    this.dataSource.paginator = this.paginator;
  };

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  showDialog(codigo: any){
    const modal = this.dialog.open(DetalheComponent, {
      data: {
        codigo
      },
      maxWidth: '100vw',
      height: '85%',
      width: '85%',
    },);
  };
}

