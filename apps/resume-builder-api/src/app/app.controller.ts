import { Resume } from '@coderisland/resume-builder/domain/interfaces';
import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('resumes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getData(@Param() params): Resume {
    return this.appService.getResume(params.id);
  }

  @Get()
  get(): Resume[] {
    return this.appService.getResumes();
  }
}
