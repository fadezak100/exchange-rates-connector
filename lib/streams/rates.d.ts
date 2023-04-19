import { SyncMode } from 'faros-airbyte-cdk';
import { Dictionary } from 'ts-essentials';
import { ExchangeRateStreamBase } from './common';
import type { Rate } from '../exchangeRate/typing';
declare type StreamSlice = {
    base: string;
};
export declare class Rates extends ExchangeRateStreamBase {
    getJsonSchema(): Dictionary<any, string>;
    get primaryKey(): string;
    streamSlices(): AsyncGenerator<StreamSlice, void, unknown>;
    readRecords(syncMode: SyncMode, cursorField?: string[], streamSlice?: StreamSlice): AsyncGenerator<Rate, void, unknown>;
}
export {};
