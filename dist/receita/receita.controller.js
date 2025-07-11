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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmaciaController = exports.ReceitaController = void 0;
const common_1 = require("@nestjs/common");
const receita_service_1 = require("./receita.service");
const create_receita_dto_1 = require("./dto/create-receita.dto");
const update_receita_dto_1 = require("./dto/update-receita.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const external_api_guard_1 = require("../auth/external-api.guard");
let ReceitaController = class ReceitaController {
    service;
    ReceitaService;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findById(id) {
        return this.service.findById(id);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    delete(id) {
        return this.service.delete(id);
    }
    async verificarValidade(id) {
        return this.ReceitaService.verificarValidade(id);
    }
};
exports.ReceitaController = ReceitaController;
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receita_dto_1.CreateReceitaDto]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_receita_dto_1.UpdateReceitaDto]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReceitaController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/validade'),
    (0, swagger_1.ApiOperation)({ summary: 'Verifica a validade da receita' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status de validade retornado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Receita não encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReceitaController.prototype, "verificarValidade", null);
exports.ReceitaController = ReceitaController = __decorate([
    (0, common_1.Controller)('receitas'),
    __metadata("design:paramtypes", [receita_service_1.ReceitaService])
], ReceitaController);
let FarmaciaController = class FarmaciaController {
    findAll() {
        return [];
    }
};
exports.FarmaciaController = FarmaciaController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todas as farmácias' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FarmaciaController.prototype, "findAll", null);
exports.FarmaciaController = FarmaciaController = __decorate([
    (0, swagger_1.ApiTags)('farmacias'),
    (0, common_1.Controller)('farmacias')
], FarmaciaController);
//# sourceMappingURL=receita.controller.js.map