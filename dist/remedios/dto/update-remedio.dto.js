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
exports.UpdateRemedioDto = void 0;
const mapped_types_1 = require("../../../node_modules/@nestjs/mapped-types");
const create_remedio_dto_1 = require("./create-remedio.dto");
const api_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-property.decorator");
const class_validator_1 = require("class-validator");
class UpdateRemedioDto extends (0, mapped_types_1.PartialType)(create_remedio_dto_1.CreateRemedioDto) {
    nome;
    principio_ativo;
    categoria;
    dosagem;
    fabricante;
}
exports.UpdateRemedioDto = UpdateRemedioDto;
__decorate([
    (0, api_property_decorator_1.ApiPropertyOptional)({ example: 'puran', description: 'nome do remedio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRemedioDto.prototype, "nome", void 0);
__decorate([
    (0, api_property_decorator_1.ApiPropertyOptional)({ example: 'levotiroxina', description: 'principio ativo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRemedioDto.prototype, "principio_ativo", void 0);
__decorate([
    (0, api_property_decorator_1.ApiPropertyOptional)({ example: 'hormonio tireoidiano', description: 'categoria do remedio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRemedioDto.prototype, "categoria", void 0);
__decorate([
    (0, api_property_decorator_1.ApiPropertyOptional)({ example: '25 mg', description: 'dosagem junto a unidade de medida do principio ativo' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRemedioDto.prototype, "dosagem", void 0);
__decorate([
    (0, api_property_decorator_1.ApiPropertyOptional)({ example: 'sanofi', description: 'fabricante do remedio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRemedioDto.prototype, "fabricante", void 0);
//# sourceMappingURL=update-remedio.dto.js.map