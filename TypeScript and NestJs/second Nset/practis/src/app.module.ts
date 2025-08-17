import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookmarkrModule } from './boo/bookmarkr.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [UserModule, BookmarkrModule, BookmarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
