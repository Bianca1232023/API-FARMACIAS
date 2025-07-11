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
exports.SolicitacoesController = exports.SolicitacaoController = exports.FarmaciaController = void 0;
const common_1 = require("@nestjs/common");
const solicitacao_service_1 = require("./solicitacao.service");
const create_solicitacao_dto_1 = require("./dto/create-solicitacao.dto");
const update_solicitacao_dto_1 = require("./dto/update-solicitacao.dto");
const swagger_1 = require("@nestjs/swagger");
const external_api_guard_1 = require("../auth/external-api.guard");
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
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Solicitação aprovada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Estoque insuficiente.' }),
    (0, swagger_1.ApiTags)('farmacias'),
    (0, common_1.Controller)('farmacias')
], FarmaciaController);
let SolicitacaoController = class SolicitacaoController {
    solicitacaoService;
    constructor(solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }
    async HistoricoSolicitacao() {
        return this.solicitacaoService.HistoricoSolicitacao();
    }
};
exports.SolicitacaoController = SolicitacaoController;
__decorate([
    (0, common_1.Get)('historico'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar histórico de todas as solicitações' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Histórico retornado com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SolicitacaoController.prototype, "HistoricoSolicitacao", null);
exports.SolicitacaoController = SolicitacaoController = __decorate([
    (0, swagger_1.ApiTags)('HistoricoSolicitacao'),
    (0, common_1.Controller)('solicitacoes'),
    __metadata("design:paramtypes", [solicitacao_service_1.SolicitacoesService])
], SolicitacaoController);
let SolicitacoesController = class SolicitacoesController {
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
    findById(id) {
        return this.service.findById(Number(id));
    }
    update(id, dto) {
        return this.service.update(Number(id), dto);
    }
    remove(id) {
        return this.service.remove(Number(id));
    }
};
exports.SolicitacoesController = SolicitacoesController;
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solicitacao_dto_1.CreateSolicitacaoDto]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_solicitacao_dto_1.UpdateSolicitacaoDto]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(external_api_guard_1.ExternalApiAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "remove", null);
exports.SolicitacoesController = SolicitacoesController = __decorate([
    (0, common_1.Controller)('solicitacoes'),
    __metadata("design:paramtypes", [solicitacao_service_1.SolicitacoesService])
], SolicitacoesController);
//# sourceMappingURL=solicitacao.controller.js.map