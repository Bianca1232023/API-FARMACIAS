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
exports.ReceitaService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const receita_model_1 = require("./receita.model");
let ReceitaService = class ReceitaService {
    receitaModel;
    constructor(receitaModel) {
        this.receitaModel = receitaModel;
    }
    async create(dto) {
        return this.receitaModel.create(dto);
    }
    async findAll() {
        return this.receitaModel.findAll();
    }
    async findById(id) {
        const receita = await this.receitaModel.findByPk(id);
        if (!receita)
            throw new common_1.NotFoundException('Receita não encontrada');
        return receita;
    }
    async update(id, dto) {
        const receita = await this.findById(id);
        return receita.update(dto);
    }
    async delete(id) {
        const receita = await this.findById(id);
        await receita.destroy();
    }
    async verificarValidade(id) {
        const receita = await this.receitaModel.findByPk(id);
        if (!receita) {
            throw new common_1.NotFoundException('Receita não encontrada.');
        }
        const hoje = new Date();
        const dataCriacao = new Date(receita.dataReceita);
        const diasDeValidade = 30;
        const diferencaEmMilissegundos = hoje.getTime() - dataCriacao.getTime();
        const diasPassados = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        const diasRestantes = diasDeValidade - diasPassados;
        return {
            validade: diasRestantes > 0,
            diasRestantes: diasRestantes < 0 ? 0 : diasRestantes,
        };
    }
};
exports.ReceitaService = ReceitaService;
exports.ReceitaService = ReceitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(receita_model_1.Receita)),
    __metadata("design:paramtypes", [Object])
], ReceitaService);
//# sourceMappingURL=receita.service.js.map