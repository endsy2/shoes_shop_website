import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { SharedService } from './shared.service';

@Module({
  imports: [PrismaModule],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
