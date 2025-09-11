export type FSHubFlightDepartedEvent = {
    id: number;
    user: FSHubFlightDepartedEventUser;
    aircraft: FSHubFlightDepartedEventAircraft;
    airline: FSHubFlightDepartedEventAirline;
    plan: FSHubFlightDepartedEventPlan;
    schedule: FSHubFlightDepartedEventSchedule;
    airport: FSHubFlightDepartedEventAirport;
    speed_tas: number;
    heading: FSHubFlightDepartedEventHeading;
    wind: FSHubFlightDepartedEventWind;
    weight: FSHubFlightDepartedEventWeight;
    gps: FSHubFlightDepartedEventGps;
    datetime: string;
    departure_at: string;
    landing_rate?: number;
    pitch?: number;
    bank?: number;
    country?: string;
    country_emoji?: string;
};
export type FSHubFlightDepartedEventUser = {
    id: number;
    name: string;
    email: string;
    profile: FSHubFlightDepartedEventProfile;
    locations: FSHubFlightDepartedEventLocations;
    handles: FSHubFlightDepartedEventHandles;
    timezone: string;
    country: string;
};
export type FSHubFlightDepartedEventProfile = {
    avatar_url: string;
    bio: string;
};
export type FSHubFlightDepartedEventLocations = {
    base: string;
    locale: string;
};
export type FSHubFlightDepartedEventHandles = {
    website: any;
    twitter: string;
    facebook: any;
    vatsim: string;
    ivao: string;
};
export type FSHubFlightDepartedEventAircraft = {
    icao: string;
    icao_name: string;
    name: string;
    type: string;
    user_conf: FSHubFlightDepartedEventUserConf;
};
export type FSHubFlightDepartedEventUserConf = {
    tail: string;
    icao: string;
};
export type FSHubFlightDepartedEventAirline = {
    id: number;
    owner: FSHubFlightDepartedEventOwner;
    name: string;
    profile: FSHubFlightDepartedEventAirlineProfile;
    handles: FSHubFlightDepartedEventHandles;
};
export type FSHubFlightDepartedEventAirlineProfile = {
    abbreviation: string;
    bio?: string;
};
export type FSHubFlightDepartedEventOwner = {
    id: number;
    name: string;
    email: string;
    profile: FSHubFlightDepartedEventProfile;
    locations: FSHubFlightDepartedEventLocations;
    handles: FSHubFlightDepartedEventHandles;
    timezone: string;
    country: string;
};
export type FSHubFlightDepartedEventPlan = {
    callsign: any;
    icao_arr: any;
    icao_dep: any;
    flight_no: string;
    cruise_lvl: number;
    departure: string;
    arrival: string;
    route?: string;
};
export type FSHubFlightDepartedEventSchedule = {
    status: string;
    time: string;
};
export type FSHubFlightDepartedEventAirport = {
    icao: string;
    iata: string;
    name: string;
    locale: FSHubFlightDepartedEventLocale;
};
export type FSHubFlightDepartedEventLocale = {
    city: string;
    state: any;
    country: string;
    gps: FSHubFlightDepartedEventGps;
};
export type FSHubFlightDepartedEventGps = {
    lat: number;
    lng: number;
};
export type FSHubFlightDepartedEventHeading = {
    true: number;
    magnetic: number;
};
export type FSHubFlightDepartedEventWind = {
    speed: number;
    direction: number;
};
export type FSHubFlightDepartedEventWeight = {
    fuel: number;
    zfw: number;
};
