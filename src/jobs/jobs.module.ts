import {Module} from "@nestjs/common"
import { JobsController } from "./controllers/jobs.controller";
import { OfficeController } from "./controllers/office.controller";
import { JobsService } from "./services/jobs.services";
import { UserModules } from "src/users/users.module";//shared module

@Module({
    imports:[UserModules],
    controllers:[JobsController,OfficeController],
    providers:[JobsService],
    exports:[JobsService]
})

export class JobModule{}