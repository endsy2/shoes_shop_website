import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';

import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminService } from 'src/admin/admin.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
