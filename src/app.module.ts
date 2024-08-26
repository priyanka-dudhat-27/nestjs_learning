import { Module } from '@nestjs/common';
import { UserModules } from './users/users.module';
import { JobModule } from './jobs/jobs.module';
// import { UserStore } from './user.store';


@Module({
    imports:[UserModules,JobModule]
})
export class AppModule {}
