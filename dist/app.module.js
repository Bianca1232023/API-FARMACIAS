"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const farmacias_model_1 = require("./farmacias/farmacias.model");
const doacao_remedio_model_1 = require("./doacao-remedio/doacao-remedio.model");
const doacao_remedio_module_1 = require("./doacao-remedio/doacao-remedio.module");
const farmacias_module_1 = require("./farmacias/farmacias.module");
const usuarios_model_1 = require("./usuarios/usuarios.model");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const remedios_model_1 = require("./remedios/remedios.model");
const remedios_module_1 = require("./remedios/remedios.module");
const estoque_module_1 = require("./estoque/estoque.module");
const estoque_model_1 = require("./estoque/estoque.model");
const solicitacao_model_1 = require("./solicitacoes/solicitacao.model");
const solicitacao_module_1 = require("./solicitacoes/solicitacao.module");
const receita_model_1 = require("./receita/receita.model");
const receita_module_1 = require("./receita/receita-module");
const dotenv = require("dotenv");
const config_1 = require("@nestjs/config");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.DB_HOST_FARMACIAS,
                port: 5432,
                username: 'postgres',
                password: process.env.DB_SENHA_FARMACIAS,
                database: process.env.DB_NAME_FARMACIAS,
                models: [farmacias_model_1.Farmacia, doacao_remedio_model_1.DoacaoRemedio, usuarios_model_1.Usuario, remedios_model_1.Remedio, estoque_model_1.Estoque, solicitacao_model_1.Solicitacao, receita_model_1.Receita],
                autoLoadModels: true,
                synchronize: true,
            }),
            farmacias_module_1.FarmaciasModule, doacao_remedio_module_1.DoacaoRemedioModule, usuarios_module_1.UsuariosModule, remedios_module_1.RemediosModule, estoque_module_1.EstoqueModule, solicitacao_module_1.SolicitacoesModule, receita_module_1.ReceitaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map