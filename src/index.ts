import {Command} from 'commander';
import {
  AirbyteConfig,
  AirbyteLogger,
  AirbyteSourceBase,
  AirbyteSourceRunner,
  AirbyteSpec,
  AirbyteStreamBase,
} from 'faros-airbyte-cdk';
import VError from 'verror';

import {Rates} from './streams';
import {ExchangeRateConfig} from './exchangeRate/typing'
import {ExchangeRate} from './exchangeRate/exchangeRate'

/** The main entry point. */
export function mainCommand(): Command {
  const logger = new AirbyteLogger();
  const source = new ExchangeRateSource(logger);
  return new AirbyteSourceRunner(logger, source).mainCommand();
}

/** Example source implementation. */
export class ExchangeRateSource extends AirbyteSourceBase<ExchangeRateConfig> {
  async spec(): Promise<AirbyteSpec> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return new AirbyteSpec(require('../resources/spec.json'));
  }
  async checkConnection(config: ExchangeRateConfig): Promise<[boolean, VError]> {
    try {
      const exchangeRate = ExchangeRate.instance(config, this.logger);
      await exchangeRate.checkConnection(config);
    } catch (error: any) {
      return [false, error];
    }
    return [true, undefined];
  }
  
  streams(config: ExchangeRateConfig): AirbyteStreamBase[] {
    return [new Rates(config, this.logger)];
  }
}
