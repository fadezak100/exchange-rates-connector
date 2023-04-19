import { AirbyteStreamBase, StreamKey, SyncMode } from 'faros-airbyte-cdk';
import { Dictionary } from 'ts-essentials';
export declare class Builds extends AirbyteStreamBase {
    getJsonSchema(): Dictionary<any, string>;
    get primaryKey(): StreamKey;
    get cursorField(): string | string[];
    readRecords(syncMode: SyncMode, cursorField?: string[], streamSlice?: Dictionary<any, string>, streamState?: Dictionary<any, string>): AsyncGenerator<Dictionary<any, string>, any, unknown>;
    getUpdatedState(currentStreamState: Dictionary<any>, latestRecord: Dictionary<any>): Dictionary<any>;
    private newBuild;
}
