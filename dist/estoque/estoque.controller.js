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
exports.EstoqueController = void 0;
const common_1 = require("@nestjs/common");
const estoque_service_1 = require("./estoque.service");
const create_estoque_dto_1 = require("./dto/create-estoque.dto");
const update_estoque_dto_1 = require("./dto/update-estoque.dto");
const estoque_model_1 = require("./estoque.model");
const swagger_1 = require("@nestjs/swagger");
const external_api_guard_1 = require("../auth/external-api.guard");
let EstoqueController = class EstoqueController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findLowStock() {
        return this.service.findLowStock();
    }
    create(createDto) {
        return this.service.create(createDto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    async update(id, updateDto) {
        return await this.service.update(id, updateDto);
    }
    async patch(id, dto) {
        return await this.service.patch(id, dto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
    findByFarmacia(farmaciaId) {
        return this.service.findByFarmacia(+farmaciaId);
    }
    findByRemedio(remedioId) {
        return this.service.findByRemedio(+remedioId);
    }
    async verificarDisponibilidade(remedioId) {
        const disponivel = await this.service.verificarDisponibilidade(remedioId);
        return { disponivel };
    }
};
exports.EstoqueController = EstoqueController;
__decorate([
    (0, common_1.Get)('aviso'),
    (0, swagger_1.ApiOperation)({ summary: 'Lista remédios com estoque baixo (<= 3)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de remédios com estoque baixo.' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Não tem nennhum remédio com estoque baixo.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "findLowStock", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'criar um novo item de estoque' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'estoque criado com sucesso.', type: estoque_model_1.Estoque }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiBody)({ type: create_estoque_dto_1.CreateEstoqueDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estoque_dto_1.CreateEstoqueDto]),
    __metadata("design:returntype", void 0)
], EstoqueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'retorna todos os estoques' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de estoque retornada com sucesso.', type: [estoque_model_1.Estoque] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstoqueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'retorna estoque por id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estoque encontrado.', type: estoque_model_1.Estoque }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstoqueController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza item de estoque por completo PUT' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estoque atualizado com sucesso.', type: estoque_model_1.Estoque }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Estoque não encontrado ou removido pois a quantidade zerou.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_estoque_dto_1.UpdateEstoqueDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estoque_dto_1.UpdateEstoqueDto]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza parcialmente um estoque com patch' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estoque atualizado parcialmente com sucesso.', type: estoque_model_1.Estoque }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Estoque não encontrado ou removido pois a quantidade zerou.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_estoque_dto_1.UpdateEstoqueDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "patch", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'remove um estoque' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'estoque removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstoqueController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/farmacia/:farmaciaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna estoque por farmácia' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'estoque da farmácia encontrados.', type: [estoque_model_1.Estoque] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiParam)({ name: 'farmaciaId', type: Number }),
    __param(0, (0, common_1.Param)('farmaciaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstoqueController.prototype, "findByFarmacia", null);
__decorate([
    (0, common_1.Get)('/remedio/:remedioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna estoque por remedio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'estoque de remedios encontrados.', type: [estoque_model_1.Estoque] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    (0, swagger_1.ApiParam)({ name: 'remedioId', type: Number }),
    __param(0, (0, common_1.Param)('remedioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstoqueController.prototype, "findByRemedio", null);
__decorate([
    (0, common_1.Get)(':remedioId/disponivel'),
    (0, swagger_1.ApiOperation)({ summary: 'Verificar se um remédio está disponível no estoque' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidade do remédio verificada com sucesso.', type: Boolean }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Ocorreu um erro na requisição' }),
    (0, swagger_1.ApiParam)({ name: 'remedioId', type: Number }),
    __param(0, (0, common_1.Param)('remedioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "verificarDisponibilidade", null);
exports.EstoqueController = EstoqueController = __decorate([
    (0, swagger_1.ApiTags)('estoque'),
    (0, common_1.Controller)('estoque'),
    __metadata("design:paramtypes", [estoque_service_1.EstoqueService])
], EstoqueController);
//# sourceMappingURL=estoque.controller.js.map