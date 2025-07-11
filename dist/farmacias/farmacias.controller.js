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
exports.FarmaciaController = exports.FarmaciasController = void 0;
const common_1 = require("@nestjs/common");
const farmacias_service_1 = require("./farmacias.service");
const create_farmacia_dto_1 = require("./dto/create-farmacia.dto");
const update_farmacia_dto_1 = require("./dto/update-farmacia.dto");
const swagger_1 = require("@nestjs/swagger");
const external_api_guard_1 = require("../auth/external-api.guard");
let FarmaciasController = class FarmaciasController {
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
    findByBairro(bairro) {
        return this.service.findByBairro(bairro);
    }
    findByCidade(cidade) {
        return this.service.findByCidade(cidade);
    }
    patch(id, dto) {
        return this.service.patch(+id, dto);
    }
    async update(id, updateDto) {
        return await this.service.update(id, updateDto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
    async findPharmaciesByRemedioId(remedioId) {
        return await this.service.findPharmaciesByRemedioId(remedioId);
    }
};
exports.FarmaciasController = FarmaciasController;
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova farmácia' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Farmácia criada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_farmacia_dto_1.CreateFarmaciaDto]),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as farmácias' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de farmácias retornada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Nenhuma farmácia encontrada.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar farmácia por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da farmácia' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Farmácia encontrada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Farmácia não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('bairro/:bairro'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar farmácias por bairro' }),
    (0, swagger_1.ApiParam)({ name: 'bairro', description: 'Nome do bairro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de farmácias encontradas.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Nenhuma farmácia encontrada para o bairro especificado.' }),
    __param(0, (0, common_1.Param)('bairro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "findByBairro", null);
__decorate([
    (0, common_1.Get)('cidade/:cidade'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar farmácias por cidade' }),
    (0, swagger_1.ApiParam)({ name: 'cidade', description: 'Nome da cidade' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de farmácias encontradas.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Nenhuma farmácia encontrada para a cidade especificada.' }),
    __param(0, (0, common_1.Param)('cidade')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "findByCidade", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar farmácia' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da farmácia' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Farmácia atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_farmacia_dto_1.UpdateFarmaciaDto]),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "patch", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza farmácia por completo (PUT)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Farmácia atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Farmácia não encontrada.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID da farmácia a ser atualizada.' }),
    (0, swagger_1.ApiBody)({ type: update_farmacia_dto_1.UpdateFarmaciaDto, description: 'Dados completos da farmácia para atualização.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_farmacia_dto_1.UpdateFarmaciaDto]),
    __metadata("design:returntype", Promise)
], FarmaciasController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover farmácia' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da farmácia' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Farmácia removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Farmácia não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FarmaciasController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('tem-remedio/:remedioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar farmácias que possuem um remédio específico em estoque' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de farmácias com o remédio em estoque.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Nenhuma farmácia encontrada com o remédio especificado em estoque.' }),
    (0, swagger_1.ApiParam)({ name: 'remedioId', type: Number, description: 'ID do remédio para buscar.' }),
    __param(0, (0, common_1.Param)('remedioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmaciasController.prototype, "findPharmaciesByRemedioId", null);
exports.FarmaciasController = FarmaciasController = __decorate([
    (0, swagger_1.ApiTags)('Farmácias'),
    (0, common_1.Controller)('farmacias'),
    __metadata("design:paramtypes", [farmacias_service_1.FarmaciasService])
], FarmaciasController);
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
//# sourceMappingURL=farmacias.controller.js.map