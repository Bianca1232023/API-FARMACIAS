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
exports.UpdateFarmaciaDto = void 0;
const mapped_types_1 = require("../../../node_modules/@nestjs/mapped-types");
const create_farmacia_dto_1 = require("./create-farmacia.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateFarmaciaDto extends (0, mapped_types_1.PartialType)(create_farmacia_dto_1.CreateFarmaciaDto) {
    farmaciaId;
    cep;
    cidade;
    bairro;
    logradouro;
    numero;
}
exports.UpdateFarmaciaDto = UpdateFarmaciaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, description: 'ID de farmácia' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateFarmaciaDto.prototype, "farmaciaId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '22222-222', description: 'CEP da farmácia' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmaciaDto.prototype, "cep", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Rio de Janeiro', description: 'cidade da farmácia' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmaciaDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Botafogo', description: 'Bairro da farmácia' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmaciaDto.prototype, "bairro", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Rua das Flores', description: 'Logradouro da farmácia' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmaciaDto.prototype, "logradouro", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '123', description: 'Número da farmácia' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateFarmaciaDto.prototype, "numero", void 0);
//# sourceMappingURL=update-farmacia.dto.js.map