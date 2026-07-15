import re

# 1. Update globals.css
with open('src/app/globals.css', 'r') as f:
    css = f.read()

css = css.replace('--radius: 1rem;', '--radius: 1.5rem; /* Claymorphism softness */')

old_card = r'\.card-flat\s*\{[\s\S]*?\}'
new_card = """.card-flat {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 40px -10px rgba(30, 58, 138, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}"""
css = re.sub(old_card, new_card, css)

old_card_hover = r'\.card-flat:hover\s*\{[\s\S]*?\}'
new_card_hover = """.card-flat:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -10px rgba(30, 58, 138, 0.12);
  border-color: rgba(255, 255, 255, 1);
}"""
css = re.sub(old_card_hover, new_card_hover, css)

keyframes = """
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob { animation: blob 10s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
"""
if 'blob' not in css:
    css += keyframes

with open('src/app/globals.css', 'w') as f:
    f.write(css)


# 2. Update site-header.tsx
with open('src/components/site/site-header.tsx', 'r') as f:
    header = f.read()

header = header.replace('bg-[var(--accent)] text-white', 'bg-blue-50/90 backdrop-blur-md text-[var(--accent)] border-b border-blue-100/50')
header = header.replace('text-white/85', 'text-[var(--accent)]/80')
header = header.replace('hover:text-white transition-colors', 'hover:text-[var(--maroon)] transition-colors') # Fixed top strip hover colors
header = header.replace('bg-[var(--background)]/95 backdrop-blur-sm border-[var(--line)]', 'bg-white/70 backdrop-blur-xl border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]')

with open('src/components/site/site-header.tsx', 'w') as f:
    f.write(header)


# 3. Update button.tsx
with open('src/components/ui/button.tsx', 'r') as f:
    btn = f.read()

btn = btn.replace(
    '"bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"',
    '"bg-primary text-primary-foreground shadow-[0_8px_20px_-6px_rgba(128,0,0,0.5)] hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(128,0,0,0.6)] transition-all duration-300"'
)
btn = btn.replace(
    '"border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"',
    '"border border-blue-100 bg-white/50 backdrop-blur-sm shadow-sm hover:bg-white hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"'
)

with open('src/components/ui/button.tsx', 'w') as f:
    f.write(btn)


# 4. Update page-hero.tsx
with open('src/components/site/page-hero.tsx', 'r') as f:
    ph = f.read()

ph = ph.replace('bg-[var(--accent)] text-white', 'bg-slate-50 text-[var(--accent)]')
ph = ph.replace('text-white', 'text-[var(--accent)]')
ph = ph.replace('text-blue-200', 'text-blue-600')
ph = ph.replace('text-[var(--accent)]/80', 'text-[var(--muted-ink)]')

old_pattern = r'\{\/\* Subtle dot pattern \*\/\}[\s\S]*?aria-hidden\s*\/\>'
new_blobs = """{/* Fluid Glass Blobs */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-full bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" aria-hidden />
      <div className="absolute top-[-20%] right-[-5%] w-[35%] h-[120%] bg-red-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" aria-hidden />
      <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[100%] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" aria-hidden />"""
ph = re.sub(old_pattern, new_blobs, ph)

with open('src/components/site/page-hero.tsx', 'w') as f:
    f.write(ph)


# 5. Update app/page.tsx (Home page)
with open('src/app/page.tsx', 'r') as f:
    home = f.read()

old_hero_start = r'<section className="relative bg-\[var\(--accent\)\] text-white overflow-hidden">'
new_hero_start = r'<section className="relative bg-white overflow-hidden">'
home = re.sub(old_hero_start, new_hero_start, home)

dots = r'<div className="absolute inset-0 bg-pattern-dots opacity-60 pointer-events-none" aria-hidden />\s*\{\/\* Subtle gold radial accent in corner \*\/\}[\s\S]*?aria-hidden\s*\/\>'
blobs = """{/* Fluid Blobs for 2026 Glassmorphism */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" aria-hidden />
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-red-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" aria-hidden />
        <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" aria-hidden />"""
home = re.sub(dots, blobs, home)

home = home.replace('text-blue-100 uppercase tracking-', 'text-blue-600 uppercase tracking-')
home = home.replace('text-white leading-[1.1]', 'text-[var(--accent)] leading-[1.1]')
home = home.replace('text-blue-100 font-medium', 'text-blue-700 font-medium')
home = home.replace('text-white/80 leading-relaxed', 'text-[var(--muted-ink)] leading-relaxed')
home = home.replace(
    'className="border-white/30 text-white hover:bg-[var(--surface)] hover:text-[var(--maroon-deep)] bg-transparent"',
    'className="border-blue-200 text-[var(--accent)] hover:bg-white hover:text-[var(--maroon)] bg-white/50 backdrop-blur-sm shadow-sm hover:-translate-y-0.5 transition-transform duration-300"'
)

old_cta = r'<section className="bg-\[var\(--accent\)\] py-12 md:py-14">'
new_cta = r'<section className="relative py-16 md:py-24 overflow-hidden bg-blue-50/50">\n        <div className="absolute inset-0 bg-blue-100/30 backdrop-blur-3xl" />\n        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />'
home = re.sub(old_cta, new_cta, home)

home = home.replace('font-bold text-white mb-3', 'font-bold text-[var(--accent)] mb-3 relative z-10')
home = home.replace('text-white/80 max-w-2xl mx-auto mb-6 text-sm md:text-base', 'text-[var(--muted-ink)] max-w-2xl mx-auto mb-6 text-sm md:text-base relative z-10')
home = home.replace('className="flex flex-col sm:flex-row gap-3 justify-center"', 'className="flex flex-col sm:flex-row gap-3 justify-center relative z-10"')

with open('src/app/page.tsx', 'w') as f:
    f.write(home)

