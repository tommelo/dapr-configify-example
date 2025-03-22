import { ConfigifyModule } from '@itgorillaz/configify';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlConfigurationFactory } from './configuration/mysql/mysql-configuration.factory';
import { DaprSecretsResolverFactory } from './configuration/resolvers/dapr-secrets.factory';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    ConfigifyModule.forRootAsync({
      secretsResolverStrategies: [DaprSecretsResolverFactory.defaultResolver()],
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigurationFactory,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
