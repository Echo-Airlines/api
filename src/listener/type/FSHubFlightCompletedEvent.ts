export type FSHubFlightCompletedEvent = {
    id: number
    geo: string
    max: FSHubFlightCompletedEventMax
    plan: FSHubFlightCompletedEventPlan
    tags: any
    user: FSHubFlightCompletedEventUser
    chart: string
    airline: FSHubFlightCompletedEventAirline
    arrival: FSHubFlightCompletedEventArrival
    remarks: any
    aircraft: FSHubFlightCompletedEventAircraft
    distance: FSHubFlightCompletedEventDistance
    departure: FSHubFlightCompletedEventDeparture
    fuel_burnt: number
    schedule_status: any
}

export type FSHubFlightCompletedEventMax = {
    alt: number
    spd: number
}

export type FSHubFlightCompletedEventPlan = {
    route: string
    callsign: string
    icao_arr: string
    icao_dep: string
    cruise_lvl: number
}

export type FSHubFlightCompletedEventUser = {
    id: number
    name: string
    email: string
    country: string
    handles: FSHubFlightCompletedEventHandles
    profile: FSHubFlightCompletedEventProfile
    timezone: string
    locations: FSHubFlightCompletedEventLocations
}

export type FSHubFlightCompletedEventHandles = {
    ivao: any
    vatsim: any
    twitter: any
    website: any
    facebook: any
}

export type FSHubFlightCompletedEventProfile = {
    abbreviation: string
    bio: string
    avatar_url: string
}

export type FSHubFlightCompletedEventLocations = {
    base: string
    locale: string
}

export type FSHubFlightCompletedEventAirline = {
    id: number
    name: string
    owner: FSHubFlightCompletedEventOwner
    handles: FSHubFlightCompletedEventHandles
    profile: FSHubFlightCompletedEventProfile
}

export type FSHubFlightCompletedEventOwner = {
    id: number
    name: string
    email: string
    country: string
    handles: FSHubFlightCompletedEventHandles
    profile: FSHubFlightCompletedEventProfile
    timezone: string
    locations: FSHubFlightCompletedEventLocations
}

export type FSHubFlightCompletedEventArrival = {
    id: number
    gps: FSHubFlightCompletedEventGps
    bank: number
    plan: FSHubFlightCompletedEventPlan
    user: FSHubFlightCompletedEventUser
    wind: FSHubFlightCompletedEventWind
    pitch: number
    weight: FSHubFlightCompletedEventWeight
    airline: FSHubFlightCompletedEventAirline
    airport: FSHubFlightCompletedEventAirport
    heading: FSHubFlightCompletedEventHeading
    aircraft: FSHubFlightCompletedEventAircraft
    datetime: string
    schedule: FSHubFlightCompletedEventSchedule
    speed_tas: number
    arrival_at: string
    landing_rate: number
}

export type FSHubFlightCompletedEventGps = {
    lat: number
    lng: number
}

export type FSHubFlightCompletedEventWind = {
    speed: number
    direction: number
}

export type FSHubFlightCompletedEventWeight = {
    zfw: number
    fuel: number
}

export type FSHubFlightCompletedEventHandles5 = {
    ivao: any
    vatsim: any
    twitter: any
    website: any
    facebook: any
}

export type FSHubFlightCompletedEventAirport = {
    iata: string
    icao: string
    name: string
    locale: FSHubFlightCompletedEventLocale
}

export type FSHubFlightCompletedEventLocale = {
    gps: FSHubFlightCompletedEventGps
    city: string
    state: string
    country: string
}
export type FSHubFlightCompletedEventHeading = {
    true: number
    magnetic: number
}

export type FSHubFlightCompletedEventAircraft = {
    icao: string
    name: string
    type: string
    icao_name: string
    user_conf: FSHubFlightCompletedEventUserConf
}

export type FSHubFlightCompletedEventUserConf = {
    icao: string
    tail: string
}

export type FSHubFlightCompletedEventSchedule = {
    time: any
    status: any
}

export type FSHubFlightCompletedEventDistance = {
    km: number
    nm: number
}

export type FSHubFlightCompletedEventDeparture = {
    id: number
    gps: FSHubFlightCompletedEventGps
    bank: number
    plan: FSHubFlightCompletedEventPlan
    user: FSHubFlightCompletedEventUser
    wind: FSHubFlightCompletedEventWind
    pitch: number
    weight: FSHubFlightCompletedEventWeight
    airline: FSHubFlightCompletedEventAirline
    airport: FSHubFlightCompletedEventAirport
    heading: FSHubFlightCompletedEventHeading
    aircraft: FSHubFlightCompletedEventAircraft
    datetime: string
    schedule: FSHubFlightCompletedEventSchedule
    speed_tas: number
    departure_at: string
}