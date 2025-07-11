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
exports.DoacaoRemedio = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const usuarios_model_1 = require("../usuarios/usuarios.model");
const remedios_model_1 = require("../remedios/remedios.model");
const solicitacao_model_1 = require("../solicitacoes/solicitacao.model");
let DoacaoRemedio = class DoacaoRemedio extends sequelize_typescript_1.Model {
};
exports.DoacaoRemedio = DoacaoRemedio;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], DoacaoRemedio.prototype, "doacaoRemedioId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => solicitacao_model_1.Solicitacao),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], DoacaoRemedio.prototype, "solicitacaoId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => usuarios_model_1.Usuario),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], DoacaoRemedio.prototype, "usuarioId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => remedios_model_1.Remedio),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], DoacaoRemedio.prototype, "remedioId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], DoacaoRemedio.prototype, "quantidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATEONLY, defaultValue: sequelize_typescript_1.DataType.NOW }),
    __metadata("design:type", Date)
], DoacaoRemedio.prototype, "data_doacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATEONLY, allowNull: false }),
    __metadata("design:type", Date)
], DoacaoRemedio.prototype, "data_fim_tratamento", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => usuarios_model_1.Usuario),
    __metadata("design:type", usuarios_model_1.Usuario)
], DoacaoRemedio.prototype, "usuario", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => remedios_model_1.Remedio),
    __metadata("design:type", remedios_model_1.Remedio)
], DoacaoRemedio.prototype, "remedio", void 0);
exports.DoacaoRemedio = DoacaoRemedio = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'doacoes_remedios', timestamps: false })
], DoacaoRemedio);
//# sourceMappingURL=doacao-remedio.model.js.map