import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import {AirbyteLogger} from 'faros-airbyte-cdk/lib';
import {VError} from 'verror';
import {ExchangeRateConfig, Rate } from './typing';
import {Memoize} from 'typescript-memoize';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data';

export class ExchangeRate {
  private static exchangeRate: ExchangeRate = undefined;

  constructor(
    private readonly logger: AirbyteLogger,
    readonly axios: AxiosInstance,
    readonly base: string,
  ) {}

  static instance(
    config: ExchangeRateConfig,
    logger: AirbyteLogger
  ): ExchangeRate {
    if (ExchangeRate.exchangeRate) return ExchangeRate.exchangeRate;

    if (!config.accessKey) {
      throw new VError('No access token provided');
    }

    if (!config.base) {
      throw new VError('No base was provided');
    }

    ExchangeRate.exchangeRate = new ExchangeRate(
      logger,
      axios.create({
        baseURL: BASE_URL,
        headers: {
          "accept": 'application/json',
          "apikey": config.accessKey,
        },
      }),
      config.base,
    );

    return ExchangeRate.exchangeRate;
  }

  async checkConnection(config: ExchangeRateConfig): Promise<void> {
    try {
      await this.axios.get(
        `latest?base=${config.base}`
      );
    } catch (error) {
      if (
        (error as AxiosError).response &&
        (error as AxiosError).response.status === 401
      ) {
        throw new VError(
          'ExampleRate API authorization failed. Try changing your app api token'
        );
      }
      console.log(error)
      throw new VError(
        `ExampleRate API request failed: ${(error as Error).message}`
      );
    }
  }

  async getExchangeRate(base: string): Promise<Rate> {
      return (await this.axios.get(`latest?base=${base}`)).data
  }
}