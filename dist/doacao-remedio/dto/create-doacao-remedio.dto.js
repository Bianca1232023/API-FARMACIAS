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
exports.CreateDoacaoRemedioDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateDoacaoRemedioDto {
    solicitacaoId;
    usuarioId;
    remedioId;
    quantidade;
    data_doacao;
    data_fim_tratamento;
}
exports.CreateDoacaoRemedioDto = CreateDoacaoRemedioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da solicitação' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDoacaoRemedioDto.prototype, "solicitacaoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do usuário' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDoacaoRemedioDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do remédio' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDoacaoRemedioDto.prototype, "remedioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Quantidade de unidades/caixas de remédio doadas' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateDoacaoRemedioDto.prototype, "quantidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-06-01', description: 'Data da doação' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateDoacaoRemedioDto.prototype, "data_doacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-07-01', description: 'Data fim do tratamento' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateDoacaoRemedioDto.prototype, "data_fim_tratamento", void 0);
//# sourceMappingURL=create-doacao-remedio.dto.js.map