import { DaprClient } from '@dapr/dapr';
import {
  ConfigurationResolver,
  RemoteConfigurationResolver,
} from '@itgorillaz/configify';
import { DaprSecretsResolver } from './dapr-secrets.resolver';

/**
 *
 */
export class DaprSecretsResolverFactory {
  /**
   *
   * @returns
   */
  static defaultResolver(): ConfigurationResolver {
    const daprHost = process.env.DAPR_CLIENT_HOST;
    const daprPort = process.env.DAPR_CLIENT_PORT;
    const secretStoreName = process.env.DAPR_SECRET_STORE_NAME;

    const client = new DaprClient({
      daprHost,
      daprPort,
    });

    const strategy = new DaprSecretsResolver(secretStoreName, client);

    return new RemoteConfigurationResolver(strategy);
  }
}
