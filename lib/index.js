"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateSource = exports.mainCommand = void 0;
const faros_airbyte_cdk_1 = require("faros-airbyte-cdk");
const streams_1 = require("./streams");
const exchangeRate_1 = require("./exchangeRate/exchangeRate");
/** The main entry point. */
function mainCommand() {
    const logger = new faros_airbyte_cdk_1.AirbyteLogger();
    const source = new ExchangeRateSource(logger);
    return new faros_airbyte_cdk_1.AirbyteSourceRunner(logger, source).mainCommand();
}
exports.mainCommand = mainCommand;
/** Example source implementation. */
class ExchangeRateSource extends faros_airbyte_cdk_1.AirbyteSourceBase {
    async spec() {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return new faros_airbyte_cdk_1.AirbyteSpec(require('../resources/spec.json'));
    }
    async checkConnection(config) {
        try {
            const exchangeRate = exchangeRate_1.ExchangeRate.instance(config, this.logger);
            await exchangeRate.checkConnection(config);
        }
        catch (error) {
            return [false, error];
        }
        return [true, undefined];
    }
    streams(config) {
        return [new streams_1.Rates(config, this.logger)];
    }
}
exports.ExchangeRateSource = ExchangeRateSource;
//# sourceMappingURL=index.js.map