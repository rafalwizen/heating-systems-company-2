export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Realization {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const companyData = {
  name: 'TWÓJSERWIS',
  tagline: 'Profesjonalne rozwiązania grzewcze dla Twojego domu',
  description: 'Zajmujemy się kompleksowymi usługami związanymi z ogrzewaniem domów i budynków użyteczności publicznej. Ponad 15 lat doświadczenia pozwala nam świadczyć usługi na najwyższym poziomie.',
  address: 'ul. Ciepła 12, 00-001 Warszawa',
  phone: '+48 123 456 789',
  email: 'kontakt@twojserwis.pl',
  workingHours: 'Pon-Pt: 8:00-18:00, Sob: 9:00-14:00',
  mapCoordinates: {
    lat: 52.2297,
    lng: 21.0122,
  },
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Montaż kotłów',
    description: 'Profesjonalny montaż kotłów gazowych, olejowych i na paliwa stałe. Dobór odpowiedniego kotła do potrzeb Twojego domu.',
    icon: 'Flame',
  },
  {
    id: '2',
    title: 'Serwis i przeglądy',
    description: 'Regularne przeglądy i serwis instalacji grzewczych. Zapewniamy bezpieczeństwo i efektywność Twojego systemu grzewczego.',
    icon: 'Wrench',
  },
  {
    id: '3',
    title: 'Modernizacja instalacji',
    description: 'Modernizacja starych instalacji grzewczych. Podnoszenie efektywności energetycznej i obniżanie rachunków za ogrzewanie.',
    icon: 'RefreshCw',
  },
  {
    id: '4',
    title: 'Instalacja pomp ciepła',
    description: 'Nowoczesne i ekologiczne rozwiązania grzewcze. Montaż pomp ciepła powietrze-woda i gruntowych.',
    icon: 'Thermometer',
  },
  {
    id: '5',
    title: 'Instalacja paneli słonecznych',
    description: 'Oszczędzaj na kosztach ogrzewania dzięki energii słonecznej. Montaż paneli fotowoltaicznych i solarnych.',
    icon: 'Sun',
  },
  {
    id: '6',
    title: 'Hydraulika i odprowadzanie',
    description: 'Kompleksowe usługi hydrauliczne. Instalacja, naprawa i modernizacja systemów wodno-kanalizacyjnych.',
    icon: 'Droplets',
  },
];

export const realizations: Realization[] = [
  {
    id: '1',
    title: 'Modernizacja systemu grzewczego - Dom jednorodzinny',
    description: 'Kompleksowa modernizacja instalacji grzewczej w domu 150m². Wymiana kotła na kondensacyjny, instalacja termostatów.',
    category: 'Modernizacja',
    image: '/images/realizations/0008.webp',
  },
  {
    id: '2',
    title: 'Instalacja pompy ciepła - Willa',
    description: 'Montaż pompy ciepła gruntowej w willi 250m². Roczna oszczędność na kosztach ogrzewania do 60%.',
    category: 'Pompy ciepła',
    image: '/images/realizations/0007.webp',
  },
  {
    id: '3',
    title: 'Serwis kotłowni - Budynek mieszkalny',
    description: 'Przegląd serwisowy kotłowni w budynku wielorodzinnym. Wymiana uszczelnień i podzespołów.',
    category: 'Serwis',
    image: '/images/realizations/0005.webp',
  },
  {
    id: '4',
    title: 'Ogrzewanie podłogowe - Nowy budynek',
    description: 'Profesjonalna instalacja ogrzewania podłogowego w nowo budowanym budynku. Płynna regulacja temperatury w każdym pomieszczeniu.',
    category: 'Instalacja',
    image: '/images/realizations/0003.webp',
  },
  {
    id: '5',
    title: 'Nowa instalacja CO - Nowy budynek',
    description: 'Kompleksowa instalacja centralnego ogrzewania w nowo budowanym budynku 300m².',
    category: 'Instalacja',
    image: '/images/realizations/0004.webp',
  },
  {
    id: '6',
    title: 'Hydraulika - Remont łazienki',
    description: 'Przebudowa instalacji hydraulicznej podczas remontu łazienki. Nowa armatura i odprowadzanie.',
    category: 'Hydraulika',
    image: '/images/realizations/0002.webp',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anna Kowalska',
    location: 'Warszawa',
    text: 'Profesjonalne podejście i szybka realizacja. Nowa instalacja grzewcza działa bez zarzutu. Polecam!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marek Nowicki',
    location: 'Łódź',
    text: 'Serwis kotła przeprowadzony terminowo i fachowo. Ekipa kompetentna i pomocna.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ewa Zielińska',
    location: 'Kraków',
    text: 'Po instalacji pompy ciepła rachunki za ogrzewanie spadły o połowę. Świetna inwestycja!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Tomasz Wójcik',
    location: 'Wrocław',
    text: 'Modernizacja instalacji przebiegła pomyślnie. Fachowcy z prawdziwego zdarzenia.',
    rating: 4,
  },
];
