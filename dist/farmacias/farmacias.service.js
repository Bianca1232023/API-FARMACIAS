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
exports.FarmaciasService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const farmacias_model_1 = require("./farmacias.model");
const sequelize_2 = require("sequelize");
const estoque_model_1 = require("../estoque/estoque.model");
let FarmaciasService = class FarmaciasService {
    farmaciaModel;
    constructor(farmaciaModel) {
        this.farmaciaModel = farmaciaModel;
    }
    async create(dto) {
        return await this.farmaciaModel.create({ ...dto });
    }
    async findAll() {
        return await this.farmaciaModel.findAll();
    }
    async findOne(id) {
        return await this.farmaciaModel.findByPk(id);
    }
    async findByBairro(bairro) {
        const farmacias = await this.farmaciaModel.findAll({
            where: (0, sequelize_2.where)((0, sequelize_2.fn)('LOWER', (0, sequelize_2.col)('bairro')), bairro.toLowerCase())
        });
        if (!farmacias || farmacias.length === 0) {
            throw new common_1.NotFoundException(`Nenhuma farmácia encontrada para o bairro: ${bairro}`);
        }
        return farmacias;
    }
    async findByCidade(cidade) {
        const farmacias = await this.farmaciaModel.findAll({
            where: (0, sequelize_2.where)((0, sequelize_2.fn)('LOWER', (0, sequelize_2.col)('cidade')), cidade.toLowerCase())
        });
        if (!farmacias || farmacias.length === 0) {
            throw new common_1.NotFoundException(`Nenhuma farmácia encontrada para a cidade: ${cidade}`);
        }
        return farmacias;
    }
    async update(id, updateDto) {
        const farmacia = await this.findOne(id);
        await farmacia.update(updateDto);
        return farmacia;
    }
    async patch(id, partialDto) {
        const farmacia = await this.findOne(id);
        await farmacia.update(partialDto);
        return farmacia;
    }
    async remove(id) {
        const farmacia = await this.farmaciaModel.findOne({ where: { farmaciaId: id } });
        if (farmacia)
            await farmacia.destroy();
        return { message: 'Farmácia removida' };
    }
    async findPharmaciesByRemedioId(remedioId) {
        const farmacias = await this.farmaciaModel.findAll({
            include: [{ model: estoque_model_1.Estoque, as: 'estoques', required: true,
                    where: { remedioId: remedioId, quantidade_disponivel: { [sequelize_2.Op.gt]: 0, }, },
                }],
        });
        if (!farmacias || farmacias.length === 0) {
            throw new common_1.NotFoundException(`Nenhuma farmácia encontrada com o remédio ID ${remedioId} em estoque.`);
        }
        return farmacias;
    }
};
exports.FarmaciasService = FarmaciasService;
exports.FarmaciasService = FarmaciasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(farmacias_model_1.Farmacia)),
    __metadata("design:paramtypes", [Object])
], FarmaciasService);
//# sourceMappingURL=farmacias.service.js.map