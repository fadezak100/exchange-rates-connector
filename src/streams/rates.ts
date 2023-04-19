import {SyncMode} from 'faros-airbyte-cdk';
import {Dictionary} from 'ts-essentials';
import {ExchangeRateStreamBase} from './common'
import type {Rate} from '../exchangeRate/typing'

type StreamSlice = {
    base: string
}

export class Rates extends ExchangeRateStreamBase {
    getJsonSchema(): Dictionary<any, string> {
        return require('../../resources/schemas/rates.json');
    }

    get primaryKey(): string {
        return 'base'
    }

    async *readRecords( syncMode: SyncMode, cursorField?: string[], streamSlice?: StreamSlice): AsyncGenerator<Rate, void, unknown> {
        yield await this.exchangeRate.getExchangeRate(streamSlice.base)
    }
}