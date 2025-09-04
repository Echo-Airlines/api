export default [
    {
        Slug: 'flight.departed',
        Name: 'Flight Departed',
        Description: 'Flight Departed',
        Content: '[{{airline.profile.abbreviation}}] {{airline.name}} 🧑‍✈️**{{user.name}}**{{#if plan}} flight {{plan.flight_no}} has departed **{{plan.departure}}** for **{{plan.arrival}}**{{else}} has departed{{#if airport}} {{airport.icao}}{{/if}}{{/if}} via {{#if aircraft.user_conf.tail}}{{aircraft.user_conf.tail}}{{else}}{{aircraft.icao}} {{aircraft.icao_name}}{{/if}}.',
    },
    {
        Slug: 'flight.arrived',
        Name: 'Flight Arrived',
        Description: 'Flight Arrived',
        Content: '[{{airline.profile.abbreviation}}] {{airline.name}}{{#if plan}} flight {{plan.flight_no}} has arrived{{#if airport}} at **{{airport.icao}}**{{/if}}{{#if plan.departure}} from **{{plan.departure}}**{{/if}}{{else}} has arrived{{#if airport}} {{airport.icao}}{{/if}}{{/if}} via {{#if aircraft.user_conf.tail}}{{aircraft.user_conf.tail}}{{else}}{{aircraft.icao}} {{aircraft.icao_name}}{{/if}}.\n{{#if user.name}}\n**Pilot:** {{user.name}}{{/if}}{{#if landing_rate}}\n**Landing Rate:** {{landing_rate}}{{/if}}{{#if speed_tas}}\n**Speed:** {{speed_tas}} kts{{/if}}{{#if wind}}\n**Wind:** {{wind.speed}}@{{wind.direction}}°{{/if}}'
    },
    {
        Slug: 'flight.updated',
        Name: 'Flight Updated',
        Description: 'Flight Updated',
        Content: '{{airline}} {{aircraft}} #{{flight_no}} {{departure}} to {{arrival}} has been updated.\n```{{pitch}} deg {{bank}} deg {{speed_tas}} kts {{wind}} {{heading}}°```'
    }
]