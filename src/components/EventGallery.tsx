import Image from 'next/image';

type EventPhoto = {
  src: string;
  alt: string;
};

const eventiFuturi: EventPhoto[] = [
  { src: '/foto-eventi/19GIUGNO_1.jpg', alt: '19 giugno 2026, Full Contact International: Crescentini vs Zequiri' },
  { src: '/foto-eventi/19GIUGNO_2.jpg', alt: '19 giugno 2026, Titolo Nazionale Kick Boxing Light: Castagnari vs Antegiovanni' },
  { src: '/foto-eventi/19GIUGNO_3.jpg', alt: '19 giugno 2026, Titolo Nazionale Kick Boxing Light Junior: Battaglini vs Pierini' },
  { src: '/foto-eventi/20GIUGNO.jpg', alt: '20 giugno 2026, Stage Nazionale Difesa Personale' },
  { src: '/foto-eventi/20GIUGNO_boxe.jpg', alt: '20 giugno 2026, Cintura The Best Fighter Boxe: Della Rocca vs La Torre' },
  { src: '/foto-eventi/20GIUGNO_freeboxing.jpg', alt: '20 giugno 2026, Titolo Intercontinentale Free Boxing: Gicco vs Caramelli' },
  { src: '/foto-eventi/20GIUGNO_mondiale.jpg', alt: '20 giugno 2026, Titolo Mondiale WPKO Full Contact: Patrignani vs Thiago Luk' },
  { src: '/foto-eventi/20GIUGNO_nazionale.jpg', alt: '20 giugno 2026, Titolo Nazionale IKTA Full Contact: Boccetta vs Liccardo' },
];

const eventiPassati: EventPhoto[] = [
  { src: '/foto-eventi/8MARZ.jpg', alt: '8 marzo 2026, Golden Warrior' },
  { src: '/foto-eventi/alghero1.jpg', alt: '1 agosto 2025, evento Alghero, Sardegna (1 di 4)' },
  { src: '/foto-eventi/alghero2.jpg', alt: '1 agosto 2025, evento Alghero, Sardegna (2 di 4)' },
  { src: '/foto-eventi/alghero3.jpg', alt: '1 agosto 2025, evento Alghero, Sardegna (3 di 4)' },
  { src: '/foto-eventi/alghero4.jpg', alt: '1 agosto 2025, evento Alghero, Sardegna (4 di 4)' },
  { src: '/foto-eventi/7DIC.jpg', alt: 'Evento 7 dicembre' },
  { src: '/foto-eventi/28SETT.jpg', alt: 'Evento 28 settembre' },
];

function PhotoGrid({ photos }: { photos: EventPhoto[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-gray-50 hover:-translate-y-1"
        >
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventGallery() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <div className="text-center mb-8">
          <span className="eyebrow">Prossimi eventi</span>
          <h3 className="mt-2">In arrivo a giugno 2026</h3>
        </div>
        <PhotoGrid photos={eventiFuturi} />
      </div>

      <div>
        <div className="text-center mb-8">
          <span className="eyebrow">Eventi passati</span>
          <h3 className="mt-2">Locandine archivio</h3>
        </div>
        <PhotoGrid photos={eventiPassati} />
      </div>
    </div>
  );
}
