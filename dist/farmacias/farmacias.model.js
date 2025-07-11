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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const estoque_model_1 = require("../estoque/estoque.model");
let Farmacia = class Farmacia extends sequelize_typescript_1.Model {
    farmaciaId;
    cep;
    cidade;
    bairro;
    logradouro;
    numero;
};
exports.Farmacia = Farmacia;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Farmacia.prototype, "farmaciaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(10), allowNull: false }),
    __metadata("design:type", String)
], Farmacia.prototype, "cep", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(30), allowNull: false }),
    __metadata("design:type", String)
], Farmacia.prototype, "cidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(30), allowNull: false }),
    __metadata("design:type", String)
], Farmacia.prototype, "bairro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(30), allowNull: false }),
    __metadata("design:type", String)
], Farmacia.prototype, "logradouro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Farmacia.prototype, "numero", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => estoque_model_1.Estoque),
    __metadata("design:type", Array)
], Farmacia.prototype, "estoques", void 0);
exports.Farmacia = Farmacia = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'farmacias', timestamps: false })
], Farmacia);
//# sourceMappingURL=farmacias.model.js.map