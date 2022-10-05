import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyValueService {
  private readonly store = new Map<string, Subject<unknown>>();
  constructor() {}

  public set(key: string, value?: unknown): void {
    if (this.store.has(key)) {
      this.store.get(key)!.next(value);
      return;
    }

    this.store.set(key, new Subject<unknown>());
  }

  public get<T>(key: string): Observable<T> {
    if (this.store.has(key)) {
      return this.store.get(key) as Observable<T>;
    }

    const subject = new Subject<unknown>();
    this.store.set(key, subject);

    return subject as Observable<T>;
  }
}
