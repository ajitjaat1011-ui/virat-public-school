import re

with open('src/components/site/site-footer.tsx', 'r') as f:
    footer = f.read()

# Fix mobile vertical padding and gaps
footer = footer.replace('py-12 md:py-14', 'py-8 md:py-12')
footer = footer.replace('gap-10 md:grid-cols-12', 'gap-6 md:gap-10 md:grid-cols-12')
footer = footer.replace('mb-4', 'mb-3 md:mb-4')
footer = footer.replace('space-y-3', 'space-y-2 md:space-y-3')
footer = footer.replace('space-y-2.5', 'space-y-1.5 md:space-y-2.5')
footer = footer.replace('mt-5', 'mt-4 md:mt-5')
footer = footer.replace('mt-10 pt-6', 'mt-6 md:mt-8 pt-6')

with open('src/components/site/site-footer.tsx', 'w') as f:
    f.write(footer)

with open('src/app/page.tsx', 'r') as f:
    home = f.read()

# Fix massive padding on mobile in sections
home = home.replace('py-16 md:py-24', 'py-10 md:py-20')
home = home.replace('py-14 md:py-20', 'py-10 md:py-16')
home = home.replace('py-12 md:py-14', 'py-10 md:py-14')
home = home.replace('gap-10 md:grid-cols-2', 'gap-6 md:gap-10 md:grid-cols-2')
home = home.replace('gap-5 md:grid-cols-3', 'gap-4 md:gap-6 md:grid-cols-3')
home = home.replace('mb-10 max-w-2xl', 'mb-6 md:mb-10 max-w-2xl')
home = home.replace('mb-8 gap-4', 'mb-5 md:mb-8 gap-4')

with open('src/app/page.tsx', 'w') as f:
    f.write(home)
