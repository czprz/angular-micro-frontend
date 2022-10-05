import { Injectable } from '@angular/core';
import { ConfigRepositoryService } from './config-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigFacadeService {
  constructor(private readonly configRepository: ConfigRepositoryService) {}

  isSet(): boolean {
    return !!this.getToken() && !!this.getUri() && !!this.getUsers();
  }

  getUsers(): string[] {
    const users = this.configRepository.get('users');
    return users ? JSON.parse(users) : [];
  }

  setUsers(users: string[]): void {
    this.configRepository.set('users', JSON.stringify(users));
  }

  getToken(): string | null {
    return this.configRepository.get('token');
  }

  setToken(token: string): void {
    this.configRepository.set('token', token);
  }

  getUri(): string | null {
    return this.configRepository.get('uri');
  }

  setUri(uri: string): void {
    this.configRepository.set('uri', uri);
  }

  getTheme(): string | null {
    return this.configRepository.get('theme');
  }

  setTheme(theme: string): void {
    this.configRepository.set('theme', theme);
  }
}
