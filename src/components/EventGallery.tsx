import Image from 'next/image';

const eventPhotos = [
  { src: '/foto-eventi/28SETT.jpg', alt: 'Evento 28 Settembre' },
  { src: '/foto-eventi/7DIC.jpg', alt: 'Evento 7 Dicembre' },
  { src: '/foto-eventi/8MARZ.jpg', alt: 'Evento 8 Marzo' },
  { src: '/foto-eventi/20GIUGNO.jpg', alt: 'Evento 20 Giugno' },
];

export default function EventGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {eventPhotos.map((photo, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-gray-50 hover:-translate-y-1"
        >
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
