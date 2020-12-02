import { Resume } from '@coderisland/resume-builder/domain/interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AppService } from './app.service';
import { ResumeDocument } from './schemas/resume.schema';

@Controller('resumes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getData(@Param() params): Observable<ResumeDocument> {
    return this.appService.getResume(params.id);
  }

  @Get()
  get(): Observable<ResumeDocument[]> {
    return this.appService.getResumes();
  }
}
