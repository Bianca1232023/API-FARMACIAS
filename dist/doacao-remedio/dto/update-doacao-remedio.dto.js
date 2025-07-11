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
exports.UpdateDoacaoRemedioDto = void 0;
const mapped_types_1 = require("../../../node_modules/@nestjs/mapped-types");
const create_doacao_remedio_dto_1 = require("./create-doacao-remedio.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateDoacaoRemedioDto extends (0, mapped_types_1.PartialType)(create_doacao_remedio_dto_1.CreateDoacaoRemedioDto) {
    doacaoRemedioId;
    solicitacaoId;
    usuarioId;
    remedioId;
    quantidade;
    data_doacao;
    data_fim_tratamento;
}
exports.UpdateDoacaoRemedioDto = UpdateDoacaoRemedioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, description: 'ID de doacaoRemedio' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateDoacaoRemedioDto.prototype, "doacaoRemedioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, description: 'ID da solicitacao' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateDoacaoRemedioDto.prototype, "solicitacaoId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, description: 'ID do usuário (opcional na atualização)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateDoacaoRemedioDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, description: 'ID do remédio (opcional na atualização)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateDoacaoRemedioDto.prototype, "remedioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2, description: 'Quantidade do remédio (opcional na atualização)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateDoacaoRemedioDto.prototype, "quantidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-06-01', description: 'Data da doação (opcional na atualização)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateDoacaoRemedioDto.prototype, "data_doacao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-07-01', description: 'Data fim do tratamento (opcional na atualização)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateDoacaoRemedioDto.prototype, "data_fim_tratamento", void 0);
//# sourceMappingURL=update-doacao-remedio.dto.js.map