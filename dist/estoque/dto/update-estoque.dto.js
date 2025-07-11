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
exports.UpdateEstoqueDto = void 0;
const mapped_types_1 = require("../../../node_modules/@nestjs/mapped-types");
const create_estoque_dto_1 = require("./create-estoque.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateEstoqueDto extends (0, mapped_types_1.PartialType)(create_estoque_dto_1.CreateEstoqueDto) {
    farmaciaId;
    remedioId;
    quantidade_disponivel;
}
exports.UpdateEstoqueDto = UpdateEstoqueDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, description: 'Identificador da farmácia' }),
    __metadata("design:type", Number)
], UpdateEstoqueDto.prototype, "farmaciaId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2, description: 'Identificador do remédio' }),
    __metadata("design:type", Number)
], UpdateEstoqueDto.prototype, "remedioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100, description: 'Quantidade disponível em estoque' }),
    __metadata("design:type", Number)
], UpdateEstoqueDto.prototype, "quantidade_disponivel", void 0);
//# sourceMappingURL=update-estoque.dto.js.map