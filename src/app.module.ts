import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { NosqlDataModule } from './modules/nosql-data/nosql-data.module';
import { SqlDataModule } from './modules/sql-data/sql-data.module';
import { SecurityModule } from './modules/security/security.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [NosqlDataModule, SqlDataModule, SecurityModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
