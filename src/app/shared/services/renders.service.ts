import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root',
})
export class RendersService {
  constructor(private firestore: AngularFirestore) {}

  getProjects(): Observable<any>{
    return this.firestore.collection('users').snapshotChanges()
  }
}
