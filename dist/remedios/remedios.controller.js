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
exports.FarmaciaController = exports.RemediosController = void 0;
const common_1 = require("@nestjs/common");
const remedios_service_1 = require("./remedios.service");
const create_remedio_dto_1 = require("./dto/create-remedio.dto");
const update_remedio_dto_1 = require("./dto/update-remedio.dto");
const swagger_1 = require("@nestjs/swagger");
const external_api_guard_1 = require("../auth/external-api.guard");
let RemediosController = class RemediosController {
    remediosService;
    constructor(remediosService) {
        this.remediosService = remediosService;
    }
    create(dto) {
        return this.remediosService.create(dto);
    }
    findAll() {
        return this.remediosService.findAll();
    }
    findOne(id) {
        return this.remediosService.findOne(+id);
    }
    findByCategoria(categoria) {
        return this.remediosService.findByCategoria(categoria);
    }
    listAllCategorias() {
        return this.remediosService.listAllCategorias();
    }
    findByPrincipio_Ativo(principio_ativo) {
        return this.remediosService.findByPrincipio_Ativo(principio_ativo);
    }
    updateAll(id, updateRemedioDto) {
        return this.remediosService.updateAll(+id, updateRemedioDto);
    }
    updatePrincipioAtivo(id, body) {
        return this.remediosService.updatePrincipioAtivo(id, body.principio_ativo);
    }
    findByNome(nome) {
        return this.remediosService.findByNome(nome);
    }
    update(id, updateRemedioDto) {
        return this.remediosService.update(+id, updateRemedioDto);
    }
    updateCategoria(id, body) {
        return this.remediosService.updateCategoria(+id, body.categoria);
    }
    remove(id) {
        return this.remediosService.remove(+id);
    }
};
exports.RemediosController = RemediosController;
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'cria novo remedio' }),
    (0, swagger_1.ApiBody)({ type: create_remedio_dto_1.CreateRemedioDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Remedio criado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'dados invalidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_remedio_dto_1.CreateRemedioDto]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os remedios criados' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lista retornada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'nenhum remedio encontrado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar um dos remedios criados' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lista retornada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'nenhum remedio encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('categoria/:categoria'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar uma categoria de remedios' }),
    (0, swagger_1.ApiParam)({ name: 'categoria', type: String }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'categoria retornada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'nenhuma categoria encontrada' }),
    __param(0, (0, common_1.Param)('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "findByCategoria", null);
__decorate([
    (0, common_1.Get)('categorias'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as categorias existentes' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lista de todas as categorias retornada com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'nenhuma categoria encontrada' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "listAllCategorias", null);
__decorate([
    (0, common_1.Get)('principio_ativo/:principio_ativo'),
    (0, swagger_1.ApiOperation)({ summary: 'Lista remedios com o principio ativo escrito' }),
    (0, swagger_1.ApiParam)({ name: 'principio_ativo', type: String }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'principio ativo retornado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'nenhuma categoria encontrada' }),
    __param(0, (0, common_1.Param)('principio_ativo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "findByPrincipio_Ativo", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar remédio por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_remedio_dto_1.UpdateRemedioDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Remedio atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Remedio não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_remedio_dto_1.UpdateRemedioDto]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "updateAll", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id/principio_ativo'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar princípio ativo de um remédio por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ schema: { properties: { principio_ativo: { type: 'string' } } } }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Princípio ativo atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Remédio não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "updatePrincipioAtivo", null);
__decorate([
    (0, common_1.Get)('nome/:nome'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar nome do remedio' }),
    (0, swagger_1.ApiParam)({ name: 'nome', type: String }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'nome retornado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'nenhum nome encontrado' }),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "findByNome", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar parcialmente um remédio por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_remedio_dto_1.UpdateRemedioDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Remédio atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Remédio não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_remedio_dto_1.UpdateRemedioDto]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id/atualizar-categoria'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar categoria de um remédio por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Categoria atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Remédio não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "updateCategoria", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um remédio por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Remédio removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Remédio não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RemediosController.prototype, "remove", null);
exports.RemediosController = RemediosController = __decorate([
    (0, swagger_1.ApiTags)('remedios'),
    (0, common_1.Controller)('remedios'),
    __metadata("design:paramtypes", [remedios_service_1.RemediosService])
], RemediosController);
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
//# sourceMappingURL=remedios.controller.js.map