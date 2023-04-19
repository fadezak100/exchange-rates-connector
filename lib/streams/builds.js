"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builds = void 0;
const faros_airbyte_cdk_1 = require("faros-airbyte-cdk");
class Builds extends faros_airbyte_cdk_1.AirbyteStreamBase {
    getJsonSchema() {
        return require('../../resources/schemas/builds.json');
    }
    get primaryKey() {
        return ['uid', 'source'];
    }
    get cursorField() {
        return 'updated_at';
    }
    async *readRecords(syncMode, cursorField, streamSlice, streamState) {
        var _a;
        const lastCutoff = (_a = streamState === null || streamState === void 0 ? void 0 : streamState.cutoff) !== null && _a !== void 0 ? _a : 0;
        if (lastCutoff > Date.now()) {
            this.logger.info(`Last cutoff ${lastCutoff} is greater than current time`);
            return;
        }
        const numBuilds = 5;
        for (let i = 1; i <= numBuilds; i++) {
            yield this.newBuild(i, lastCutoff);
        }
    }
    getUpdatedState(currentStreamState, latestRecord) {
        var _a, _b;
        return {
            cutoff: Math.max((_a = currentStreamState.cutoff) !== null && _a !== void 0 ? _a : 0, (_b = latestRecord.updated_at) !== null && _b !== void 0 ? _b : 0),
        };
    }
    newBuild(uid, cutoff) {
        return {
            uid: uid.toString(),
            source: 'Jenkins',
            updated_at: cutoff + uid,
            fields: {
                command: `command ${uid}`,
            },
            more_fields: [
                {
                    name: `key${uid}`,
                    value: `value${uid}`,
                    nested: {
                        value: `nested ${uid}`,
                    },
                },
            ],
        };
    }
}
exports.Builds = Builds;
//# sourceMappingURL=builds.js.map