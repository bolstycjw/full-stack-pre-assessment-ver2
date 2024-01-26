interface LaunchpadQuery {
    docs: Launchpad[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
}

interface Launchpad {
    name: string;
    full_name: string;
    locality: string;
    region: string;
    timezone: string;
    latitude: number;
    longitude: number;
    launch_attempts: number;
    launch_successes: number;
    rockets: string[];
    launches: Launch[];
    status: string;
    id: string;
}

interface Launch {
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    tdb: boolean;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: Failure[];
    details: string;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    auto_update: boolean;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    id: string;
}

interface Failure {
    time: number;
    altitude: number;
    reason: string;

}

interface StarlinkSatellite {
    spaceTrack: {
        CCSDS_OMM_VERS: string;
        COMMENT: string;
        CREATION_DATE: string;
        ORIGINATOR: string;
        OBJECT_NAME: string;
        OBJECT_ID: string;
        CENTER_NAME: string;
        REF_FRAME: string;
        TIME_SYSTEM: string;
        MEAN_ELEMENT_THEORY: string;
        EPOCH: string;
        MEAN_MOTION: number;
        ECCENTRICITY: number;
        INCLINATION: number;
        RA_OF_ASC_NODE: number;
        ARG_OF_PERICENTER: number;
        MEAN_ANOMALY: number;
        EPHEMERIS_TYPE: number;
        CLASSIFICATION_TYPE: string;
        NORAD_CAT_ID: number;
        ELEMENT_SET_NO: number;
        REV_AT_EPOCH: number;
        BSTAR: number;
        MEAN_MOTION_DOT: number;
        MEAN_MOTION_DDOT: number;
        SEMIMAJOR_AXIS: number;
        PERIOD: number;
        APOAPSIS: number;
        PERIAPSIS: number;
        OBJECT_TYPE: string;
        RCS_SIZE: null;
        COUNTRY_CODE: string;
        LAUNCH_DATE: string;
        SITE: string;
        DECAY_DATE: null;
        DECAYED: number;
        FILE: number;
        GP_ID: number;
        TLE_LINE0: string;
        TLE_LINE1: string;
        TLE_LINE2: string;
    };
    version: string;
    launch: Launch;
    longitude: number;
    latitude: number;
    height_km: number;
    velocity_kms: number;
    id: string;
}

