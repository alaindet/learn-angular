import { Observable, from } from 'rxjs';
import { DocumentData, Query, QuerySnapshot, getDocs } from '@angular/fire/firestore';

export function convertSnapshots<T = any>(
  snapshots: QuerySnapshot<DocumentData>,
): T[] {
  return snapshots.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as T;
  });
}

export function firebaseQueryToObservable<T = any>(
  query: Query<DocumentData>,
): Observable<T[]> {
  return from(getDocs(query).then(snaps => convertSnapshots<T>(snaps)));
}
