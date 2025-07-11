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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const usuarios_model_1 = require("./usuarios.model");
let UsuariosService = class UsuariosService {
    usuarioModel;
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async create(createUsuarioDto) {
        return this.usuarioModel.create(createUsuarioDto);
    }
    async findAll() {
        return this.usuarioModel.findAll();
    }
    async findOne(id) {
        return this.usuarioModel.findByPk(id);
    }
    async findByEmail(email) {
        return this.usuarioModel.findOne({ where: { email } });
    }
    async findFuncionarios() {
        return this.usuarioModel.findAll({ where: { funcionario: true } });
    }
    async update(id, updateUsuarioDto) {
        await this.usuarioModel.update(updateUsuarioDto, { where: { id } });
        return this.findOne(id);
    }
    async patch(id, data) {
        await this.usuarioModel.update(data, { where: { id } });
        return this.findOne(id);
    }
    async remove(id) {
        await this.usuarioModel.destroy({ where: { id } });
    }
    async findByFarmaciaId(farmaciaId) {
        return this.usuarioModel.findAll({ where: { farmaciaId } });
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(usuarios_model_1.Usuario)),
    __metadata("design:paramtypes", [Object])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map