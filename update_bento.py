import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Replace the first two sections (Hero and Welcome) with the new Bento Grid
bento_grid = """      {/* BENTO GRID HERO */}
      <section className="bg-[#F8FAFC] border-b border-[var(--line)] pt-8 pb-12 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[500px]">
            
            {/* Main Hero Box (2x2) */}
            <div className="bg-white border border-[var(--line)] rounded-[2rem] p-8 md:p-12 md:col-span-2 md:row-span-2 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <span className="text-[var(--accent)] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                {t.motto}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-6 leading-[1.1] tracking-tight">
                {t.home.welcomeTitle}
              </h1>
              <p className="text-[var(--muted-ink)] mb-8 text-base md:text-lg leading-relaxed">
                {t.home.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-[var(--maroon)] hover:bg-[var(--maroon)]/90 text-white font-semibold rounded-full px-8">
                  <Link href="/admissions/apply">
                    {t.home.heroCtaApply}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border border-[var(--line)] text-[var(--accent)] hover:bg-slate-50 rounded-full px-8">
                  <Link href="/academics">{t.home.heroCtaAcademics}</Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats Box (1x1) */}
            <div className="bg-[var(--accent)] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden />
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">RBSE 2025-26</span>
              <h4 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 tracking-tight">98.5%</h4>
              <p className="text-sm text-blue-100 relative z-10 font-medium">District Topper Score</p>
            </div>

            {/* Quick Contact Box (1x1) */}
            <div className="bg-[var(--maroon)] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-sm relative overflow-hidden group">
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-black/10 rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden />
              <Phone className="w-7 h-7 mb-4 relative z-10 text-white/90" />
              <span className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Quick Contact</span>
              <a href="tel:+919636452501" className="text-xl md:text-2xl font-bold relative z-10 hover:text-red-100 transition-colors">
                {t.contact.phoneOffice}
              </a>
            </div>

            {/* Announcements Box (2x1) */}
            <div className="bg-white border border-[var(--line)] rounded-[2rem] p-8 md:col-span-2 md:row-span-1 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase">{t.home.latestNews}</span>
                <Link href="/news-events/announcements" className="text-[var(--maroon)] text-sm font-semibold hover:underline flex items-center">
                  {t.common.viewAll} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[var(--accent)] mb-2 leading-tight">Admissions Open for 2026-27</h4>
              <p className="text-sm md:text-base text-[var(--muted-ink)] line-clamp-2">
                Applications are now being accepted for all classes. Visit our Admissions page to apply online or contact the school office.
              </p>
            </div>

          </div>
        </div>
      </section>"""

# Find the start of the first section and the end of the second section
# Section 1: <section className="bg-[#F8FAFC] ...
# Section 2: {/* WELCOME ... </section>
p1 = content.split('      {/* HERO')[0]
p2 = content.split('      {/* FEATURES')[1]

new_content = p1 + bento_grid + '\n\n      {/* FEATURES' + p2

# Also change the background of features section to avoid matching colors
new_content = new_content.replace('<section className="pb-14 md:pb-20">', '<section className="py-12 md:py-20 bg-white">')

with open('src/app/page.tsx', 'w') as f:
    f.write(new_content)
