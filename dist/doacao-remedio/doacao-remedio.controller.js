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
exports.FarmaciaController = exports.DoacaoRemedioController = void 0;
const common_1 = require("@nestjs/common");
const doacao_remedio_service_1 = require("./doacao-remedio.service");
const create_doacao_remedio_dto_1 = require("./dto/create-doacao-remedio.dto");
const update_doacao_remedio_dto_1 = require("./dto/update-doacao-remedio.dto");
const swagger_1 = require("@nestjs/swagger");
const external_api_guard_1 = require("../auth/external-api.guard");
let DoacaoRemedioController = class DoacaoRemedioController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    findByUsuario(usuarioId) {
        return this.service.findByUsuarioId(+usuarioId);
    }
    update(id, dto) {
        return this.service.update(+id, dto);
    }
    patch(id, dto) {
        return this.service.patch(+id, dto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.DoacaoRemedioController = DoacaoRemedioController;
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova doação de remédio' }),
    (0, swagger_1.ApiBody)({ type: create_doacao_remedio_dto_1.CreateDoacaoRemedioDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Doação criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doacao_remedio_dto_1.CreateDoacaoRemedioDto]),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as doações de remédios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de doações retornada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Nenhuma doação encontrada.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar doação por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Doação encontrada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Doação não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar doações de um usuário' }),
    (0, swagger_1.ApiParam)({ name: 'usuarioId', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Doações do usuário retornadas com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Nenhuma doação encontrada para o usuário.' }),
    __param(0, (0, common_1.Param)('usuarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar doação de remédio por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_doacao_remedio_dto_1.UpdateDoacaoRemedioDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Doação atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Doação não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doacao_remedio_dto_1.UpdateDoacaoRemedioDto]),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar doação' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da doação' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'doação atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doacao_remedio_dto_1.UpdateDoacaoRemedioDto]),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "patch", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover doação por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Doação removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Doação não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoacaoRemedioController.prototype, "remove", null);
exports.DoacaoRemedioController = DoacaoRemedioController = __decorate([
    (0, swagger_1.ApiTags)('Doações-Remédios'),
    (0, common_1.Controller)('doacoes-remedios'),
    __metadata("design:paramtypes", [doacao_remedio_service_1.DoacaoRemedioService])
], DoacaoRemedioController);
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
//# sourceMappingURL=doacao-remedio.controller.js.map