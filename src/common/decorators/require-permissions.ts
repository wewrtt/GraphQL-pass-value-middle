import { SetMetadata } from '@nestjs/common';
import { PERMISSION_METADATA } from '../constants/app/app.constant';

export const RequirePermissions = (...permissions: string[]) => SetMetadata(PERMISSION_METADATA, permissions);
