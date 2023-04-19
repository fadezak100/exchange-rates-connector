"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRate = void 0;
const axios_1 = __importDefault(require("axios"));
const verror_1 = require("verror");
const BASE_URL = 'https://api.apilayer.com/exchangerates_data';
class ExchangeRate {
    constructor(logger, axios, base) {
        this.logger = logger;
        this.axios = axios;
        this.base = base;
    }
    static instance(config, logger) {
        if (ExchangeRate.exchangeRate)
            return ExchangeRate.exchangeRate;
        if (!config.accessKey) {
            throw new verror_1.VError('No access token provided');
        }
        if (!config.base) {
            throw new verror_1.VError('No base was provided');
        }
        ExchangeRate.exchangeRate = new ExchangeRate(logger, axios_1.default.create({
            baseURL: BASE_URL,
            headers: {
                "accept": 'application/json',
                "apikey": config.accessKey,
            },
        }), config.base);
        return ExchangeRate.exchangeRate;
    }
    async checkConnection(config) {
        try {
            await this.axios.get(`latest?base=${config.base}`);
        }
        catch (error) {
            if (error.response &&
                error.response.status === 401) {
                throw new verror_1.VError('ExampleRate API authorization failed. Try changing your app api token');
            }
            console.log(error);
            throw new verror_1.VError(`ExampleRate API request failed: ${error.message}`);
        }
    }
    async getExchangeRate(base) {
        return (await this.axios.get(`latest?base=${base}`)).data;
    }
}
exports.ExchangeRate = ExchangeRate;
ExchangeRate.exchangeRate = undefined;
//# sourceMappingURL=exchangeRate.js.map