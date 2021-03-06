const defaultSearchProviders = [
  {
    id: 'ob1',
    name: 'OB1',
    logo: '../imgs/ob1searchLogo.png',
    search: 'https://search.ob1.io/search',
    listings: 'https://search.ob1.io/search/listings',
    reports: 'https://search.ob1.io/reports',
    torsearch: 'http://my7nrnmkscxr32zo.onion/search',
    torlistings: 'http://my7nrnmkscxr32zo.onion/search/listings',
    locked: true,
  },
  {
    id: 'duo',
    name: 'Duo',
    logo: '../imgs/duoSearchLogo.png',
    search: '',
    listings: 'https://ob2.duosear.ch/search/listings',
    torsearch: '',
    torlistings: '',
    locked: true,
  },
  {
    id: 'rawflood',
    name: 'Raw Flood',
    logo: '../imgs/rawFloodLogo.png',
    search: '',
    listings: 'https://search.rawflood.com/ob/search/listings',
    torsearch: '',
    torlistings: '',
    locked: true,
  },
];

export default defaultSearchProviders;
