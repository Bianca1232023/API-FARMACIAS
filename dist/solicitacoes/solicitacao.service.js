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
exports.SolicitacoesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const solicitacao_model_1 = require("./solicitacao.model");
const remedios_model_1 = require("../remedios/remedios.model");
let SolicitacoesService = class SolicitacoesService {
    solicitacaoModel;
    remedioModel;
    constructor(solicitacaoModel, remedioModel) {
        this.solicitacaoModel = solicitacaoModel;
        this.remedioModel = remedioModel;
    }
    async create(dto) {
        return this.solicitacaoModel.create(dto);
    }
    async findAll() {
        return this.solicitacaoModel.findAll();
    }
    async findById(id) {
        const solicitacao = await this.solicitacaoModel.findByPk(id);
        if (!solicitacao) {
            throw new common_1.NotFoundException('Solicitação não encontrada');
        }
        return solicitacao;
    }
    async listarSolicitacoesPorUsuario(usuarioId) {
        return this.solicitacaoModel.findAll({
            where: { usuarioId },
        });
    }
    async update(id, dto) {
        const solicitacao = await this.findById(id);
        return solicitacao.update(dto);
    }
    async remove(id) {
        const solicitacao = await this.findById(id);
        await solicitacao.destroy();
    }
    async HistoricoSolicitacao() {
        return this.solicitacaoModel.findAll({
            order: [['dataCriacao', 'DESC']],
        });
    }
};
exports.SolicitacoesService = SolicitacoesService;
exports.SolicitacoesService = SolicitacoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(solicitacao_model_1.Solicitacao)),
    __param(1, (0, sequelize_1.InjectModel)(remedios_model_1.Remedio)),
    __metadata("design:paramtypes", [Object, Object])
], SolicitacoesService);
//# sourceMappingURL=solicitacao.service.js.map