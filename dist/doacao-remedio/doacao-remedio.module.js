"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoacaoRemedioModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const doacao_remedio_service_1 = require("./doacao-remedio.service");
const doacao_remedio_controller_1 = require("./doacao-remedio.controller");
const doacao_remedio_model_1 = require("./doacao-remedio.model");
const estoque_model_1 = require("../estoque/estoque.model");
const solicitacao_model_1 = require("../solicitacoes/solicitacao.model");
let DoacaoRemedioModule = class DoacaoRemedioModule {
};
exports.DoacaoRemedioModule = DoacaoRemedioModule;
exports.DoacaoRemedioModule = DoacaoRemedioModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([doacao_remedio_model_1.DoacaoRemedio, estoque_model_1.Estoque, solicitacao_model_1.Solicitacao]),
        ],
        exports: [doacao_remedio_service_1.DoacaoRemedioService],
        controllers: [doacao_remedio_controller_1.DoacaoRemedioController],
        providers: [doacao_remedio_service_1.DoacaoRemedioService],
    })
], DoacaoRemedioModule);
//# sourceMappingURL=doacao-remedio.module.js.map