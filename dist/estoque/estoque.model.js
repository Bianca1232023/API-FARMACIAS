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
exports.Estoque = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const farmacias_model_1 = require("../farmacias/farmacias.model");
let Estoque = class Estoque extends sequelize_typescript_1.Model {
};
exports.Estoque = Estoque;
__decorate([
    (0, swagger_1.ApiProperty)(),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Estoque.prototype, "estoqueId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => farmacias_model_1.Farmacia),
    (0, swagger_1.ApiProperty)(),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Estoque.prototype, "farmaciaId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => farmacias_model_1.Farmacia),
    (0, swagger_1.ApiProperty)(),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Estoque.prototype, "remedioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: { min: 0 },
        field: 'quantidade_disponivel',
    }),
    __metadata("design:type", Number)
], Estoque.prototype, "quantidade_disponivel", void 0);
exports.Estoque = Estoque = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'estoque', timestamps: false })
], Estoque);
//# sourceMappingURL=estoque.model.js.map