with open('src/app/page.tsx', 'r') as f:
    home = f.read()

home = home.replace(
    'className="border-blue-200 text-[var(--accent)] hover:bg-white hover:text-[var(--maroon)] bg-white/50 backdrop-blur-sm transition-colors"',
    'className="border border-[var(--line)] text-[var(--accent)] hover:bg-[var(--line)] hover:text-[var(--accent)] bg-white transition-colors rounded-full"'
)

home = home.replace('rounded-full"', 'rounded-full"')

with open('src/app/page.tsx', 'w') as f:
    f.write(home)
