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
exports.RemediosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const remedios_model_1 = require("./remedios.model");
let RemediosService = class RemediosService {
    remedioModel;
    constructor(remedioModel) {
        this.remedioModel = remedioModel;
    }
    async create(dto) {
        return await this.remedioModel.create({ ...dto });
    }
    async findAll() {
        return await this.remedioModel.findAll();
    }
    async findOne(id) {
        return await this.remedioModel.findByPk(id);
    }
    async findByPrincipio_Ativo(principio_ativo) {
        return await this.remedioModel.findAll({ where: { principio_ativo } });
    }
    async findByCategoria(categoria) {
        return await this.remedioModel.findAll({ where: { categoria } });
    }
    async listAllCategorias() {
        const remedios = await this.remedioModel.findAll();
        const categorias = remedios.map(r => r.categoria);
        return Array.from(new Set(categorias));
    }
    async findByNome(nome) {
        return await this.remedioModel.findAll({ where: { nome } });
    }
    async findByDosagem(dosagem) {
        return await this.remedioModel.findAll({ where: { dosagem } });
    }
    async findByFabricante(fabricante) {
        return await this.remedioModel.findAll({ where: { fabricante } });
    }
    async update(id, dto) {
        return await this.remedioModel.update(dto, { where: { remedioId: id } });
    }
    async updateCategoria(id, categoria) {
        const remedio = await this.findOne(id);
        if (!remedio)
            throw new common_1.NotFoundException('Remédio não encontrado');
        remedio.categoria = categoria;
        await remedio.save();
        return remedio;
    }
    async updateAll(id, dto) {
        const remedio = await this.findOne(id);
        if (!remedio)
            throw new common_1.NotFoundException('Remédio não encontrado');
        await remedio.update(dto);
        return remedio;
    }
    async replaceNome(id, nome) {
        const remedio = await this.findOne(id);
        if (!remedio)
            throw new common_1.NotFoundException('Remédio não encontrado');
        remedio.nome = nome;
        await remedio.save();
        return remedio;
    }
    async remove(id) {
        const remedio = await this.findOne(id);
        if (!remedio)
            throw new common_1.NotFoundException('Remédio não encontrado');
        await remedio.destroy();
        return { message: 'Remédio removido' };
    }
    async updateFabricante(id, fabricante) {
        const remedio = await this.findOne(id);
        if (!remedio) {
            throw new common_1.NotFoundException('Remédio não encontrado');
        }
        remedio.fabricante = fabricante;
        await remedio.save();
        return remedio;
    }
    async updatePrincipioAtivo(id, principio_ativo) {
        const [updatedCount] = await this.remedioModel.update({ principio_ativo }, { where: { id } });
        if (updatedCount === 0) {
            throw new common_1.NotFoundException('Remédio não encontrado ou princípio ativo igual ao atual.');
        }
        return { message: 'Princípio ativo atualizado com sucesso' };
    }
};
exports.RemediosService = RemediosService;
exports.RemediosService = RemediosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(remedios_model_1.Remedio)),
    __metadata("design:paramtypes", [Object])
], RemediosService);
//# sourceMappingURL=remedios.service.js.map