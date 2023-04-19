import { Dictionary } from 'ts-essentials';
import { ExchangeRateStreamBase } from './common';
export declare abstract class Converts extends ExchangeRateStreamBase {
    getJsonSchema(): Dictionary<any, string>;
    get primaryKey(): string;
}
