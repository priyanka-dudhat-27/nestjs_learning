import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';
import { AlbumsController } from './albums.controllers';

@Module({
  controllers: [UserController,AlbumsController],
})
export class AppModule {}
