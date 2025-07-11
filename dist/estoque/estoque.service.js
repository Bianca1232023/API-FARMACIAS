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
exports.EstoqueService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const estoque_model_1 = require("./estoque.model");
const sequelize_2 = require("sequelize");
let EstoqueService = class EstoqueService {
    estoqueModel;
    constructor(estoqueModel) {
        this.estoqueModel = estoqueModel;
    }
    async create(dto) {
        return await this.estoqueModel.create(dto);
    }
    async findAll() {
        return await this.estoqueModel.findAll();
    }
    async findOne(id) {
        const estoque = await this.estoqueModel.findByPk(id);
        if (!estoque)
            throw new common_1.NotFoundException('Estoque não encontrado');
        return estoque;
    }
    async update(id, updateDto) {
        const estoque = await this.findOne(id);
        await estoque.update(updateDto);
        if (estoque.quantidade_disponivel <= 0) {
            await this.remove(estoque.estoqueId);
            throw new common_1.NotFoundException(`Estoque com ID ${id} foi removido pois a quantidade zerou.`);
        }
        return estoque;
    }
    async patch(id, dto) {
        const estoque = await this.findOne(id);
        await estoque.update(dto);
        if (estoque.quantidade_disponivel <= 0) {
            await this.remove(estoque.estoqueId);
            throw new common_1.NotFoundException(`Estoque com ID ${id} foi removido pois a quantidade zerou.`);
        }
        return estoque;
    }
    async remove(id) {
        const estoque = await this.findOne(id);
        await estoque.destroy();
        return { message: 'Estoque removido com sucesso' };
    }
    async findByFarmacia(farmaciaId) {
        return await this.estoqueModel.findAll({ where: { farmaciaId } });
    }
    async findByRemedio(remedioId) {
        return await this.estoqueModel.findAll({ where: { remedioId } });
    }
    async verificarDisponibilidade(remedioId) {
        const remedio = await this.estoqueModel.findOne({
            where: { remedioId },
        });
        return !!remedio;
    }
    async findLowStock() {
        return await this.estoqueModel.findAll({
            where: {
                quantidade_disponivel: { [sequelize_2.Op.lte]: 3 },
            },
        });
    }
};
exports.EstoqueService = EstoqueService;
exports.EstoqueService = EstoqueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(estoque_model_1.Estoque)),
    __metadata("design:paramtypes", [Object])
], EstoqueService);
//# sourceMappingURL=estoque.service.js.map