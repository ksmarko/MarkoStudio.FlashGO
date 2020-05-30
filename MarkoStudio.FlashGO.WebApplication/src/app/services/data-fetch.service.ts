import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore/interfaces';
import { FlashCard } from './models/flash-card.model';

@Injectable()
export class DataFetchService {
    
    constructor(
        public db: AngularFirestore
    ) {}

    public getFlashCards(): Observable<FlashCard[]> {
        return this.db.collection('words').snapshotChanges()
        .pipe(
            map(records => {
                return records.map(record => record.payload.doc.data() as FlashCard);
            })
        );
    }

    public addFlashCard(record: FlashCard) : Observable<DocumentReference> {
        return from(this.db.collection('words').add(record));
    }
}