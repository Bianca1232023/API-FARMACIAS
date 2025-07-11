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
exports.Solicitacao = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const receita_model_1 = require("../receita/receita.model");
const remedios_model_1 = require("../remedios/remedios.model");
const farmacias_model_1 = require("../farmacias/farmacias.model");
let Solicitacao = class Solicitacao extends sequelize_typescript_1.Model {
};
exports.Solicitacao = Solicitacao;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Solicitacao.prototype, "solicitacaoId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Solicitacao.prototype, "usuarioId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => remedios_model_1.Remedio),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Solicitacao.prototype, "remedioId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => farmacias_model_1.Farmacia),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Solicitacao.prototype, "farmaciaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Solicitacao.prototype, "justificativa", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: 'pendente' }),
    __metadata("design:type", String)
], Solicitacao.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => receita_model_1.Receita),
    __metadata("design:type", receita_model_1.Receita)
], Solicitacao.prototype, "receita", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => receita_model_1.Receita),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Solicitacao.prototype, "receitaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], Solicitacao.prototype, "dataCriacao", void 0);
exports.Solicitacao = Solicitacao = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'solicitacoes', timestamps: false })
], Solicitacao);
//# sourceMappingURL=solicitacao.model.js.map