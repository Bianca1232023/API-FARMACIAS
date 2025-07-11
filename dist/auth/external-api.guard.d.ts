import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ExternalApiAuthGuard implements CanActivate {
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
}
