import { Injectable } from '@angular/core';
import { interval, Observable, Subject, takeUntil } from 'rxjs';
import { ConfigRepositoryService } from './config/config-repository.service';

@Injectable({
  providedIn: 'root',
})
export class BrokerService {
  constructor(private readonly repository: ConfigRepositoryService) {}

  public set(key: string, value?: unknown): void {
    this.repository.set(key, value as string);
  }

  public get<T>(key: string): Observable<T> {
    const end = new Subject<void>();
    const subject = new Subject<T>();
    let lastValue: T;

    interval(1000)
      .pipe(takeUntil(end))
      .subscribe(() => {
        if (subject.closed) {
          end.next();
          return;
        }

        const latestValue = this.repository.get(key) as unknown as T;
        if (latestValue === lastValue) {
          return;
        }

        lastValue = latestValue;
        subject.next(latestValue);
      });

    return subject;
  }
}
