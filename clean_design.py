import re

# 1. Clean globals.css
with open('src/app/globals.css', 'r') as f:
    css = f.read()

# Revert radius slightly to be clean but soft
css = css.replace('--radius: 1.5rem; /* Claymorphism softness */', '--radius: 1rem;')

# Clean up cards (remove heavy glass & shadows)
old_card = r'\.card-flat\s*\{[\s\S]*?\}'
new_card = """.card-flat {
  background: #FFFFFF;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
}"""
css = re.sub(old_card, new_card, css)

old_card_hover = r'\.card-flat:hover\s*\{[\s\S]*?\}'
new_card_hover = """.card-flat:hover {
  border-color: rgba(30, 58, 138, 0.2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}"""
css = re.sub(old_card_hover, new_card_hover, css)

# Remove blobs
css = re.sub(r'@keyframes blob\s*\{[\s\S]*?\}\s*\.animate-blob\s*\{[\s\S]*?\}\s*\.animation-delay-[^\n]*\n\.animation-delay-[^\n]*\n', '', css)

with open('src/app/globals.css', 'w') as f:
    f.write(css)


# 2. Clean Button.tsx
with open('src/components/ui/button.tsx', 'r') as f:
    btn = f.read()

btn = btn.replace(
    'shadow-[0_8px_20px_-6px_rgba(128,0,0,0.5)] hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(128,0,0,0.6)] transition-all duration-300',
    'shadow-sm hover:bg-primary/90 transition-opacity'
)
btn = btn.replace(
    'border border-blue-100 bg-white/50 backdrop-blur-sm shadow-sm hover:bg-white hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-md transition-all duration-300',
    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors'
)

with open('src/components/ui/button.tsx', 'w') as f:
    f.write(btn)


# 3. Clean page-hero.tsx
with open('src/components/site/page-hero.tsx', 'r') as f:
    ph = f.read()

# Remove blobs
ph = re.sub(r'\{\/\* Fluid Glass Blobs \*\/\}.*?aria-hidden \/\>', '', ph, flags=re.DOTALL)
# Ensure clean bg
ph = ph.replace('bg-slate-50 text-[var(--accent)]', 'bg-[#F8FAFC] text-[var(--accent)] border-b border-[var(--line)]')

with open('src/components/site/page-hero.tsx', 'w') as f:
    f.write(ph)


# 4. Clean site-header.tsx
with open('src/components/site/site-header.tsx', 'r') as f:
    header = f.read()

header = header.replace('bg-blue-50/90 backdrop-blur-md text-[var(--accent)] border-b border-blue-100/50', 'bg-[var(--accent)] text-white')
header = header.replace('bg-white/70 backdrop-blur-xl border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]', 'bg-white/95 backdrop-blur-sm border-b border-[var(--line)]')

with open('src/components/site/site-header.tsx', 'w') as f:
    f.write(header)


# 5. Clean Home Page (page.tsx)
with open('src/app/page.tsx', 'r') as f:
    home = f.read()

# Remove blobs
home = re.sub(r'\{\/\* Fluid Blobs for 2026 Glassmorphism \*\/\}.*?aria-hidden \/\>', '', home, flags=re.DOTALL)
home = re.sub(r'<div className="absolute top-1/2.*?pointer-events-none" \/>', '', home, flags=re.DOTALL)
home = re.sub(r'<div className="absolute inset-0 bg-blue-100/30 backdrop-blur-3xl" \/>', '', home, flags=re.DOTALL)

# Simplify buttons in home
home = home.replace('shadow-sm hover:-translate-y-0.5 transition-transform duration-300 relative z-10', 'transition-colors')
home = home.replace('shadow-sm rounded-full', 'rounded-full')
home = home.replace('relative z-10', '')

# Clean up hero bg
home = home.replace('<section className="relative bg-white overflow-hidden">', '<section className="bg-[#F8FAFC] border-b border-[var(--line)]">')

# Clean up CTA bg
home = home.replace('className="relative py-16 md:py-24 overflow-hidden bg-blue-50/50"', 'className="bg-[#F8FAFC] py-16 md:py-24 border-t border-[var(--line)]"')

with open('src/app/page.tsx', 'w') as f:
    f.write(home)

