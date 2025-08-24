export default ((process.env.ONAIRVIRTUALAIRLINEID && process.env.ONAIRAPIKEY) ? {
    Id: process.env.ONAIRVIRTUALAIRLINEID,
    ApiKey: process.env.ONAIRAPIKEY,
    IsPrimary: true
} : undefined);