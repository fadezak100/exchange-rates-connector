export interface ExchangeRateConfig {
    accessKey: string;
    base: string;
}
export interface Rate {
    readonly base: string;
    readonly date: string;
    readonly rates: Record<string, number>;
}
