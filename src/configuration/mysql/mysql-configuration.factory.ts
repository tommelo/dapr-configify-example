import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { DatabaseConfiguration } from '../database.configuration';

@Injectable()
export class MysqlConfigurationFactory implements TypeOrmOptionsFactory {
  /**
   *
   * @param config
   */
  constructor(private readonly config: DatabaseConfiguration) {}

  /**
   *
   * @returns
   */
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: this.config.host,
      port: this.config.port,
      username: this.config.user,
      password: this.config.password,
      database: this.config.database,
      entities: [UserEntity],
      synchronize: false,
    };
  }
}
