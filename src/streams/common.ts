import {AirbyteLogger, AirbyteStreamBase} from 'faros-airbyte-cdk';

import { ExchangeRate } from '../exchangeRate/exchangeRate';
import type { ExchangeRateConfig, Rate } from '../exchangeRate/typing';


export abstract class ExchangeRateStreamBase extends AirbyteStreamBase {
    protected exchangeRate: ExchangeRate;

    constructor(
        protected readonly cfg: ExchangeRateConfig,
        protected readonly logger: AirbyteLogger
    ){
        super(logger);
        this.exchangeRate = ExchangeRate.instance(cfg, logger);
    }
}