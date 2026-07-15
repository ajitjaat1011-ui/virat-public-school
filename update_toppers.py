import re

with open('src/lib/i18n/translations.ts', 'r') as f:
    text = f.read()

# Replace English toppers
old_en = """      toppers: [
        { name: "Ritesh Rajgarh", percent: "98.20%", position: "1" },
        { name: "Furti Rajgarh", percent: "95.80%", position: "2" },
        { name: "Aniket Rajgarh", percent: "95.00%", position: "3" },
        { name: "Shri Ram Sisodia", percent: "91.40%", position: "4" },
        { name: "Anurag", percent: "90.20%", position: "5" },
      ],"""

new_en = """      toppers: [
        { name: "Rohit Yadav", subject: "Math", percent: "98.20%", position: "1" },
        { name: "Prince Saini", subject: "Agriculture", percent: "95.80%", position: "2" },
        { name: "Monika Saini", subject: "Bio", percent: "95.00%", position: "3" },
        { name: "Aryan Dodwadiya", subject: "Bio", percent: "91.40%", position: "4" },
        { name: "Bhagyashree", subject: "Math", percent: "90.20%", position: "5" },
      ],"""

text = text.replace(old_en, new_en)

# Replace Hindi toppers
old_hi = """      toppers: [
        { name: "रितेश राजगढ़", percent: "98.20%", position: "1" },
        { name: "फूर्ति राजगढ़", percent: "95.80%", position: "2" },
        { name: "अनिकेत राजगढ़", percent: "95.00%", position: "3" },
        { name: "श्रीराम सिसोदिया", percent: "91.40%", position: "4" },
        { name: "अनुराग", percent: "90.20%", position: "5" },
      ],"""

new_hi = """      toppers: [
        { name: "रोहित यादव", subject: "math", percent: "98.20%", position: "1" },
        { name: "प्रिंस सैनी", subject: "agriculture", percent: "95.80%", position: "2" },
        { name: "मोनिका सैनी", subject: "bio", percent: "95.00%", position: "3" },
        { name: "आर्यन डोडवाड़िया", subject: "bio", percent: "91.40%", position: "4" },
        { name: "भाग्यश्री", subject: "math", percent: "90.20%", position: "5" },
      ],"""

text = text.replace(old_hi, new_hi)

with open('src/lib/i18n/translations.ts', 'w') as f:
    f.write(text)

