export const ASSETS_PATH = "/assets/img/regional_wx";

export type RegionalWeatherInfo = {
    summary: string;
    icon: string;
}

export default interface RegionalWeather {
    getInfo(region?: string): Promise<RegionalWeatherInfo[]>;
}
