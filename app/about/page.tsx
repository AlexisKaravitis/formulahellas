import { generateMetadata as generateSEOMetadata, generateBreadcrumbStructuredData } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import VenueShowcase from '@/components/VenueShowcase';
import Badge from '@/components/ui/Badge';
import { Tent, Warehouse, Flag } from 'lucide-react';
import { about } from '@/content/site';
import { SITE_URL } from '@/lib/site-config';

export const metadata = generateSEOMetadata({
  title: 'About',
  description:
    'About Formula Hellas: a new Formula Student competition hosted at the Serres Racing Circuit. Our mission, the 2026 classes, and the venue.',
  url: '/about',
});

const facilityIcons = [Warehouse, Tent, Flag];

export default function AboutPage() {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'About', url: `${SITE_URL}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'About' }]} className="mb-6" />
            <span className="eyebrow">About</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{about.title}</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-10">{about.intro}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{about.whatIs.heading}</h2>
              <p className="mb-8">{about.whatIs.body}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{about.mission.heading}</h2>
              <p className="mb-8">{about.mission.body}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{about.organisers.heading}</h2>
              <p className="mb-2">{about.organisers.body}</p>
            </div>
          </div>

          {/* Classes */}
          <section id="classes" className="max-w-4xl mx-auto mt-20 scroll-mt-24">
            <span className="eyebrow">Classes</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">{about.classes.heading}</h2>
            <div className="mt-4 rule-accent" />
            <p className="mt-5 text-gray-600 mb-8">{about.classes.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.classes.items.map((cls) => (
                <div
                  key={cls.name}
                  className="group rounded-2xl bg-white border border-gray-200/80 shadow-sm p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elev-3 hover:border-primary-blue/40"
                >
                  <Badge variant="soft" className="mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                    {cls.slots}
                  </Badge>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cls.name}</h3>
                  <p className="text-gray-600 text-sm">{cls.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-gray-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
              {about.classes.note}
            </p>
          </section>

          {/* Venue */}
          <section id="venue" className="max-w-4xl mx-auto mt-20 scroll-mt-24">
            <span className="eyebrow">The Venue</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">{about.venue.heading}</h2>
            <div className="mt-4 rule-accent" />
            <p className="mt-5 text-gray-700 leading-relaxed mb-8">{about.venue.body}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {about.venue.facilities.map((facility, i) => {
                const Icon = facilityIcons[i % facilityIcons.length];
                return (
                  <div key={facility.title} className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200/80 rounded-2xl overflow-hidden border border-gray-200/80">
              {[
                ['1998', 'Operating since'],
                ['#1', 'Circuit in the Balkans'],
                ['FIA · FIM', 'Accredited'],
                ['F3', 'Built to standard'],
              ].map(([n, l]) => (
                <div key={l} className="bg-paper p-5 text-center">
                  <div className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-primary-blue-dark">{n}</div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-wider text-gray-500">{l}</div>
                </div>
              ))}
            </div>

            <VenueShowcase
              aerialImage={about.venue.aerialImage}
              aerialAlt={about.venue.aerialAlt}
              collageImage={about.venue.collageImage}
              logoDarkImage={about.venue.logoDarkImage}
              mediaHeading={about.venue.mediaHeading}
              mediaIntro={about.venue.mediaIntro}
              socialHeading={about.venue.socialHeading}
              videos={about.venue.videos}
              locationHeading={about.venue.locationHeading}
            />
          </section>
        </div>
      </div>
    </>
  );
}
