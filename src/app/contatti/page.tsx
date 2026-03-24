import { Metadata } from 'next';
import ContactEmail from '@/components/ContactEmail';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta IKTA. Sede nazionale, telefono, email e modulo di contatto per informazioni su affiliazione, formazione e gare.',
};

const contactInfo = [
  {
    title: 'Sede Nazionale',
    content: 'Via Ticino 15, 00053 Civitavecchia (RM)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    title: 'Telefono',
    content: '+39 338 4012397',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    content: 'email-protected',
    isEmail: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Orari',
    content: 'Lun - Ven: 9:00 - 18:00',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];


export default function ContattiPage() {
  return (
    <>
      {/* Contact Section */}
      <section className="section" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-8">Informazioni di Contatto</h1>

              <div className="space-y-5 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-700">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-500">{info.title}</h3>
                      {(info as any).isEmail ? (
                        <ContactEmail />
                      ) : (
                        <p className="text-gray-900 font-medium">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <h3 className="font-semibold" style={{ marginBottom: '1.5rem' }}>Seguici sui Social</h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.facebook.com/share/18EuJXyjK5/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/iktaitalia?igsh=MWhxb3A1b2QxMHc2OQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2.16c3.2,0,3.58.01,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.17,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33.01,7.05.07c-4.27.2-6.78,2.71-6.98,6.98C.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.2,4.27,2.71,6.78,6.98,6.98,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c4.27-.2,6.78-2.71,6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://maps.google.com/maps?q=Via+Ticino+15,+Civitavecchia,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="IKTA Sede Nazionale - Civitavecchia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
