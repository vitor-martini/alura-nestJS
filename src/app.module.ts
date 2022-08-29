import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Produto } from './produto.model';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [    
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.USUARIO_BANCO_DADOS,
    password: process.env.SENHA_BANCO_DADOS,
    database: 'aluraNestJS',
    autoLoadModels: true,
    synchronize: true,
  }),
  SequelizeModule.forFeature([Produto])
],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
