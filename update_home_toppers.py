import re

with open('src/app/page.tsx', 'r') as f:
    text = f.read()

# Fix the Bento static score from 98.5% to 98.20%
text = text.replace(
    '<h4 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 tracking-tight">98.5%</h4>',
    '<h4 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 tracking-tight">98.20%</h4>'
)

# Render the subject in the toppers grid
old_topper_render = """                  <p className="mt-2 text-xs md:text-sm font-medium text-[var(--ink)] leading-tight">
                    {topper.name}
                  </p>"""

new_topper_render = """                  <p className="mt-2 text-xs md:text-sm font-bold text-[var(--ink)] leading-tight">
                    {topper.name}
                  </p>
                  <p className="mt-1 text-[10px] md:text-xs font-semibold text-[var(--maroon)] uppercase tracking-wider">
                    ({topper.subject})
                  </p>"""

text = text.replace(old_topper_render, new_topper_render)

with open('src/app/page.tsx', 'w') as f:
    f.write(text)

