import { DaprClient } from '@dapr/dapr';
import { RemoteConfigurationResolverStrategy } from '@itgorillaz/configify';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DaprSecretsResolver
  implements RemoteConfigurationResolverStrategy
{
  configurationKeys: readonly string[] = ['dapr-secrets', 'DAPR_SECRETS'];

  constructor(
    private readonly secretStoreName: string,
    private readonly client: DaprClient,
  ) {}

  async resolveSecretValue(id: string): Promise<string | undefined> {
    const secret = await this.client.secret.get(this.secretStoreName, id);
    return secret[id];
  }
}
