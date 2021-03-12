import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeCookedApiRecipesModule } from '@coderisland/home-cooked/api/recipes';

@Module({
  imports: [HomeCookedApiRecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
