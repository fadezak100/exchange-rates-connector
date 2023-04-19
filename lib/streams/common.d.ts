import { AirbyteLogger, AirbyteStreamBase } from 'faros-airbyte-cdk';
import { ExchangeRate } from '../exchangeRate/exchangeRate';
import type { ExchangeRateConfig } from '../exchangeRate/typing';
export declare abstract class ExchangeRateStreamBase extends AirbyteStreamBase {
    protected readonly cfg: ExchangeRateConfig;
    protected readonly logger: AirbyteLogger;
    protected exchangeRate: ExchangeRate;
    constructor(cfg: ExchangeRateConfig, logger: AirbyteLogger);
}
