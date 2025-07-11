"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalApiAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let ExternalApiAuthGuard = class ExternalApiAuthGuard {
    constructor() { }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Token de autorização não encontrado ou mal formatado.');
        }
        const token = authHeader.split(' ')[1];
        try {
            const response = await (0, node_fetch_1.default)('http://localhost:3000/auth/validate', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                request.user = data;
                return true;
            }
            else {
                throw new common_1.UnauthorizedException('Token inválido ou sessão expirada.');
            }
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            throw new common_1.UnauthorizedException('Erro ao conectar com o serviço de autenticação.');
        }
    }
};
exports.ExternalApiAuthGuard = ExternalApiAuthGuard;
exports.ExternalApiAuthGuard = ExternalApiAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ExternalApiAuthGuard);
//# sourceMappingURL=external-api.guard.js.map