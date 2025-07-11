"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacoesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const solicitacao_model_1 = require("./solicitacao.model");
const solicitacao_service_1 = require("./solicitacao.service");
const solicitacao_controller_1 = require("./solicitacao.controller");
const remedios_model_1 = require("../remedios/remedios.model");
const farmacias_model_1 = require("../farmacias/farmacias.model");
let SolicitacoesModule = class SolicitacoesModule {
};
exports.SolicitacoesModule = SolicitacoesModule;
exports.SolicitacoesModule = SolicitacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([solicitacao_model_1.Solicitacao, remedios_model_1.Remedio, farmacias_model_1.Farmacia])],
        controllers: [solicitacao_controller_1.SolicitacoesController],
        providers: [solicitacao_service_1.SolicitacoesService, remedios_model_1.Remedio],
        exports: [solicitacao_service_1.SolicitacoesService]
    })
], SolicitacoesModule);
//# sourceMappingURL=solicitacao.module.js.map