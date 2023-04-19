import { Command } from 'commander';
import { AirbyteSourceBase, AirbyteSpec, AirbyteStreamBase } from 'faros-airbyte-cdk';
import VError from 'verror';
import { ExchangeRateConfig } from './exchangeRate/typing';
/** The main entry point. */
export declare function mainCommand(): Command;
/** Example source implementation. */
export declare class ExchangeRateSource extends AirbyteSourceBase<ExchangeRateConfig> {
    spec(): Promise<AirbyteSpec>;
    checkConnection(config: ExchangeRateConfig): Promise<[boolean, VError]>;
    streams(config: ExchangeRateConfig): AirbyteStreamBase[];
}
