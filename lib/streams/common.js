"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateStreamBase = void 0;
const faros_airbyte_cdk_1 = require("faros-airbyte-cdk");
const exchangeRate_1 = require("../exchangeRate/exchangeRate");
class ExchangeRateStreamBase extends faros_airbyte_cdk_1.AirbyteStreamBase {
    constructor(cfg, logger) {
        super(logger);
        this.cfg = cfg;
        this.logger = logger;
        this.exchangeRate = exchangeRate_1.ExchangeRate.instance(cfg, logger);
    }
}
exports.ExchangeRateStreamBase = ExchangeRateStreamBase;
//# sourceMappingURL=common.js.map