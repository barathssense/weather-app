// Interface for weather conditions
interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

// Interface for main weather data
interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

// Interface for wind data
interface Wind {
    speed: number;
    deg: number;
}

// Interface for cloud coverage
interface Clouds {
    all: number;
}

// Interface for system data including sunrise and sunset
interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number; // Unix timestamp
    sunset: number; // Unix timestamp
}

// Interface for geographical coordinates
interface Coord {
    lon: number;
    lat: number;
}

// Interface for the complete weather data
export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number; // Unix timestamp
    sys: Sys;
    timezone: number; // Timezone offset in seconds
    id: number;
    name: string;
    cod: number;
}
