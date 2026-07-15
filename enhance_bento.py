import re

with open('src/app/page.tsx', 'r') as f:
    text = f.read()

# 1. Add Rohit Yadav explicitly to the quick stats box + add styling
old_stats_box = """            {/* Quick Stats Box (1x1) */}
            <div className="bg-[var(--accent)] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden />
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">RBSE 2025-26</span>
              <h4 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 tracking-tight">98.20%</h4>
              <p className="text-sm text-blue-100 relative z-10 font-medium">District Topper Score</p>
            </div>"""

new_stats_box = """            {/* Quick Stats Box (1x1) */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#172554] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-md relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden />
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="text-blue-200 text-xs font-bold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">RBSE 2025-26</span>
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              <h4 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 tracking-tight drop-shadow-sm text-white">
                98.20%
              </h4>
              <p className="text-lg md:text-xl font-bold text-white relative z-10 mt-1">{t.home.toppers[0].name}</p>
              <p className="text-xs text-blue-300 relative z-10 font-bold uppercase tracking-widest mt-1">District Topper</p>
            </div>"""

text = text.replace(old_stats_box, new_stats_box)

# 2. Add subtle gradient and floating animation to the main Hero box
old_hero_box = """            {/* Main Hero Box (2x2) */}
            <div className="bg-white border border-[var(--line)] rounded-[2rem] p-8 md:p-12 md:col-span-2 md:row-span-2 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">"""

new_hero_box = """            {/* Main Hero Box (2x2) */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 border border-[var(--line)] rounded-[2rem] p-8 md:p-12 md:col-span-2 md:row-span-2 flex flex-col justify-center shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl group-hover:bg-blue-200/40 transition-colors duration-700" aria-hidden />"""

text = text.replace(old_hero_box, new_hero_box)


# 3. Add crown icon for Rohit Yadav in the regular topper section below
old_is_first = """                  className={
                    "card-flat p-5 text-center " +
                    (isFirst ? "ring-1 ring-[var(--accent)] border-[var(--accent)]" : "")
                  }
                >"""

new_is_first = """                  className={
                    "card-flat p-5 text-center relative " +
                    (isFirst ? "ring-1 ring-[var(--accent)] border-[var(--accent)] shadow-md bg-blue-50/20" : "")
                  }
                >
                  {isFirst && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center shadow-sm ring-2 ring-white">
                      <Trophy className="w-3 h-3" />
                    </div>
                  )}"""

text = text.replace(old_is_first, new_is_first)


# 4. Refine Quick Contact box hover effect
old_contact_box = """            {/* Quick Contact Box (1x1) */}
            <div className="bg-[var(--maroon)] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-sm relative overflow-hidden group">"""

new_contact_box = """            {/* Quick Contact Box (1x1) */}
            <div className="bg-gradient-to-br from-[#800000] to-[#5c0000] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-md relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">"""

text = text.replace(old_contact_box, new_contact_box)


# 5. Refine Announcements box
old_announcement_box = """            {/* Announcements Box (2x1) */}
            <div className="bg-white border border-[var(--line)] rounded-[2rem] p-8 md:col-span-2 md:row-span-1 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">"""

new_announcement_box = """            {/* Announcements Box (2x1) */}
            <div className="bg-white border border-[var(--line)] rounded-[2rem] p-8 md:col-span-2 md:row-span-1 flex flex-col justify-center shadow-sm hover:shadow-md transition-all group">"""

text = text.replace(old_announcement_box, new_announcement_box)

with open('src/app/page.tsx', 'w') as f:
    f.write(text)

