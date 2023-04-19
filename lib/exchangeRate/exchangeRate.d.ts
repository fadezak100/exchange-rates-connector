import { AxiosInstance } from 'axios';
import { AirbyteLogger } from 'faros-airbyte-cdk/lib';
import { ExchangeRateConfig, Rate } from './typing';
export declare class ExchangeRate {
    private readonly logger;
    readonly axios: AxiosInstance;
    readonly base: string;
    private static exchangeRate;
    constructor(logger: AirbyteLogger, axios: AxiosInstance, base: string);
    static instance(config: ExchangeRateConfig, logger: AirbyteLogger): ExchangeRate;
    checkConnection(config: ExchangeRateConfig): Promise<void>;
    getExchangeRate(base: string): Promise<Rate>;
}
