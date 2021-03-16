import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeCookedApiRecipesModule } from '@coderisland/home-cooked/api/recipes';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from '@coderisland/home-cooked/shared/environments';

@Module({
  imports: [
    HomeCookedApiRecipesModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      load: [databaseConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get<string>('DATABASE.CONNECTION'));
        return {
          uri: configService.get<string>('DATABASE.CONNECTION'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
