"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rates = void 0;
const common_1 = require("./common");
class Rates extends common_1.ExchangeRateStreamBase {
    getJsonSchema() {
        return require('../../resources/schemas/rates.json');
    }
    get primaryKey() {
        return 'base';
    }
    async *streamSlices() {
        yield { base: this.cfg.base };
    }
    async *readRecords(syncMode, cursorField, streamSlice) {
        yield await this.exchangeRate.getExchangeRate(streamSlice.base);
    }
}
exports.Rates = Rates;
//# sourceMappingURL=rates.js.map