import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://iktaworld.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://iktaworld.com/chi-siamo', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://iktaworld.com/chi-siamo/organigramma', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://iktaworld.com/discipline', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://iktaworld.com/formazione', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://iktaworld.com/gare', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://iktaworld.com/affiliazione', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://iktaworld.com/contatti', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://iktaworld.com/ikta-world/news', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://iktaworld.com/ikta-world/organigramma', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://iktaworld.com/ikta-world/titoli', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://iktaworld.com/ikta-world/ranking', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://iktaworld.com/ikta-world/cinture-kick-boxe', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://iktaworld.com/ikta-world/cinture-krav-maga', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://iktaworld.com/ikta-world/new-world-record', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
