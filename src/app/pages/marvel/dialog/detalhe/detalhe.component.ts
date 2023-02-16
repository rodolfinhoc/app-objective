import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HttpService } from "src/app/service/http.service";

@Component({
  selector: "app-detalhe",
  templateUrl: "./detalhe.component.html",
  styleUrls: ["./detalhe.component.scss"],
})
export class DetalheComponent {
  name!: string;
  imgPath!: string;
  series: any[] = [];
  events: any[] = [];
  stories: any[] = [];
  comics: any[] = [];
  urls: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<DetalheComponent>,
    private http: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  async ngOnInit() {
    await this.loadDados();
  };

  async loadDados() {
    await this.http.getCharactersById(this.data.codigo).then((retorno) => {
      this.name = retorno.data.results[0].name;
      this.imgPath = `${retorno.data.results[0].thumbnail.path}.${retorno.data.results[0].thumbnail.extension}`;
      this.series = retorno.data.results[0].series.items;
      this.events = retorno.data.results[0].events.items;
      this.stories = retorno.data.results[0].stories.items;
      this.comics = retorno.data.results[0].comics.items;
      this.urls = retorno.data.results[0].urls;
    });
  };

  close() {
    this.dialogRef.close();
  };
}
