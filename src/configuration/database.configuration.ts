import { Configuration, Value } from '@itgorillaz/configify';

@Configuration()
export class DatabaseConfiguration {
  @Value('DAPR_SECRETS_DB_HOST')
  host: string;

  @Value('DAPR_SECRETS_DB_PORT', { parse: parseInt })
  port: number;

  @Value('DAPR_SECRETS_DB_USER')
  user: string;

  @Value('DAPR_SECRETS_DB_PASSWORD')
  password: string;

  @Value('DAPR_SECRETS_DB_NAME')
  database: string;
}
