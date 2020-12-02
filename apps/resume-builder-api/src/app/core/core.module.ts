import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resumex, ResumeSchema } from '../schemas/resume.schema';

/**
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: Resumex.name, schema: ResumeSchema }])],
  exports: [MongooseModule]
})
export class CoreModule {}
