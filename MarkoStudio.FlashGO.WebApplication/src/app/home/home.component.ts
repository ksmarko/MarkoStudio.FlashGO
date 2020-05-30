import { Component, OnInit } from '@angular/core';
import { FlashCard } from '../services/models/flash-card.model';
import { DataFetchService } from '../services/data-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public records: FlashCard[];

  constructor(
    private service: DataFetchService
  ) { }

  ngOnInit(): void {
    this.service.getFlashCards().subscribe(
      records => this.records = records,
      error => {
        console.log("Error during getting records: " + error);
      }
    );
  }

  public addRandomValue(): void {
    this.service.addFlashCard({
      front: {
        term: "random term",
        transcription: "random transcription"
      },
      back: {
        translation: "random translation",
        definition: "random description",
        example: "random example"
      }
    });
  }
}
