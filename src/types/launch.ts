export interface NextLaunch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: null | any;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        core_serial: string;
        flight: number;
        block: number;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success: null | boolean;
        landing_intent: boolean;
        landing_type: string;
        landing_vehicle: null | string;
      }[];
    };
    second_stage: {
      block: number;
      payloads: {
        payload_id: string;
        norad_id: any[];
        cap_serial: string;
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: null | number;
        payload_mass_lbs: null | number;
        orbit: string;
        orbit_params: {
          reference_system: string;
          regime: string;
          longitude: null | number;
          semi_major_axis_km: null | number;
          eccentricity: null | number;
          periapsis_km: null | number;
          apoapsis_km: null | number;
          inclination_deg: null | number;
          period_min: null | number;
          lifespan_years: null | number;
          epoch: null | number;
          mean_motion: null | number;
          raan: null | number;
          arg_of_pericenter: null | number;
          mean_anomaly: null | number;
        };
        mass_returned_kg: null | number;
        mass_returned_lbs: null | number;
        flight_time_sec: null | number;
        cargo_manifest: null | any;
      }[];
    };
    fairings: null | any;
  };
  ships: any[];
  telemetry: {
    flight_club: null | any;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: null | boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: null | string;
    reddit_recovery: null | string;
    reddit_media: null | string;
    presskit: null | string;
    article_link: null | string;
    wikipedia: null | string;
    video_link: null | string;
    youtube_id: null | string;
    flickr_images: string[];
  };
  details: string;
  upcoming: boolean;
  static_fire_date_utc: null | string;
  static_fire_date_unix: null | number;
  timeline: null | any;
  crew: null | any;
  last_date_update: string;
  last_ll_launch_date: null | string;
  last_ll_update: null | string;
  last_wiki_launch_date: string;
  last_wiki_revision: string;
  last_wiki_update: string;
  launch_date_source: string;
}
