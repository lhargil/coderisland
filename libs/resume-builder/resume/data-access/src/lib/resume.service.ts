import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from '@coderisland/resume-builder/domain/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private readonly resumesUrl = 'api/resumes';
  constructor(private httpClient: HttpClient) { }

  getResume(id: string): Observable<Resume> {
    return this.httpClient.get<Resume>(`${this.resumesUrl}/${id}`);
  }

  getResumes(): Observable<Resume[]> {
    return this.httpClient.get<Resume[]>(this.resumesUrl);
  }
}
