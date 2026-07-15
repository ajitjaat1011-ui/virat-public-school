import re
with open('src/app/page.tsx', 'r') as f:
    home = f.read()

# Replace the remaining text-white/bg-transparent secondary buttons that were missed
home = home.replace(
    'className="border-white/30 text-white hover:bg-[var(--surface)] hover:text-[var(--accent)] bg-transparent"',
    'className="border-blue-200 text-[var(--accent)] hover:bg-white hover:text-[var(--maroon)] bg-white/50 backdrop-blur-sm shadow-sm hover:-translate-y-0.5 transition-transform duration-300 relative z-10"'
)
home = home.replace(
    'className="border-white/30 text-white hover:bg-[var(--surface)] hover:text-[var(--maroon)] bg-transparent"',
    'className="border-blue-200 text-[var(--accent)] hover:bg-white hover:text-[var(--maroon)] bg-white/50 backdrop-blur-sm shadow-sm hover:-translate-y-0.5 transition-transform duration-300 relative z-10"'
)

with open('src/app/page.tsx', 'w') as f:
    f.write(home)
