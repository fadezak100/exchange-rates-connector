"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converts = void 0;
const common_1 = require("./common");
class Converts extends common_1.ExchangeRateStreamBase {
    getJsonSchema() {
        return require('../../resources/schemas/converts.json');
    }
    get primaryKey() {
        throw new Error('Not implemented');
    }
}
exports.Converts = Converts;
//# sourceMappingURL=converts.js.map