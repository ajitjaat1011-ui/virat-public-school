/**
 * Translation dictionary for Virat Public School.
 * Two locales: 'en' (English, default) and 'hi' (Hindi).
 *
 * Keys are organized by page/feature for easy maintenance.
 */

export type Locale = "en" | "hi";

export const LOCALES: Locale[] = ["en", "hi"];

export const translations = {
  en: {
    // Brand
    schoolName: "Virat Public School",
    tagline: "Knowledge. Discipline. Character.",
    motto: "Vidya Dadati Vinayam",
    mottoTranslation: "Knowledge Bestows Humility",

    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      academics: "Academics",
      admissions: "Admissions",
      news: "News & Events",
      contact: "Contact Us",
      apply: "Apply Online",
    },
    aboutSub: {
      history: "History & Heritage",
      visionMission: "Vision & Mission",
      principal: "Principal's Message",
      management: "Management Committee",
    },
    academicsSub: {
      curriculum: "Curriculum",
      classes: "Classes Offered",
      faculty: "Faculty",
      exams: "Examination Schedule",
    },
    admissionsSub: {
      process: "Admission Process",
      fees: "Fee Structure",
      apply: "Online Application",
      eligibility: "Eligibility & Documents",
    },
    newsSub: {
      announcements: "Announcements",
      calendar: "Event Calendar",
      gallery: "Photo Gallery",
    },

    // Home
    home: {
      heroCtaAcademics: "Explore Academics",
      heroCtaApply: "Apply Online",
      heroSubtitle:
        "Nurturing young minds in Viratnagar with knowledge, discipline, and character — rooted in values, ready for tomorrow.",
      welcomeTitle: "Welcome to Virat Public School",
      welcomeBody:
        "Virat Public School is a premier educational institution in Viratnagar, Kotputli-Behror district of Rajasthan, dedicated to holistic development of every child. Affiliated with the Rajasthan Board of Secondary Education (RBSE), we blend India's rich educational heritage with modern pedagogy, supported by experienced faculty, well-equipped facilities, and a caring community. Our mission is to shape confident, compassionate, and capable citizens who carry the values of humility, discipline, and lifelong learning wherever they go.",
      featuresTitle: "Why Families Choose Us",
      features: [
        {
          title: "Experienced Faculty",
          body: "Qualified, caring teachers with decades of combined experience guiding every learner.",
        },
        {
          title: "Modern Facilities",
          body: "Science and computer labs, a well-stocked library, sports ground, and digital classrooms.",
        },
        {
          title: "Holistic Development",
          body: "Academics balanced with sports, arts, cultural programs, and value-based education.",
        },
      ],
      latestNews: "Latest News & Announcements",
      resultsTitle: "RBSE Results 2025-26 — Our Toppers",
      resultsBody:
        "We are proud of our students' outstanding performance in the RBSE examinations. The toppers listed below reflect the hard work of our students, the dedication of our teachers, and the trust placed in us by parents. Congratulations to all!",
      toppers: [
        { name: "Rohit Yadav", subject: "Math", percent: "98.20%", position: "1" },
        { name: "Prince Saini", subject: "Agriculture", percent: "95.80%", position: "2" },
        { name: "Monika Saini", subject: "Bio", percent: "95.00%", position: "3" },
        { name: "Aryan Dodwadiya", subject: "Bio", percent: "91.40%", position: "4" },
        { name: "Bhagyashree", subject: "Math", percent: "90.20%", position: "5" },
      ],
      resultsMore: "View All Results",
      quickContactTitle: "Visit Our Campus",
      quickContactBody:
        "Located in the heart of Viratnagar. We welcome prospective parents for a campus tour and conversation with our admissions team.",
      directions: "Get Directions",
    },

    // About pages
    about: {
      heroTitle: "About Our School",
      heroBody:
        "Built on values, growing with purpose — discover the story, vision, and people behind Virat Public School.",
      overview:
        "Virat Public School was founded with a clear conviction: that every child in rural Rajasthan deserves access to quality education that respects tradition while embracing the modern world. Over the years, the school has grown from a small neighbourhood institution into a trusted centre of learning, serving families across Viratnagar and the wider Kotputli-Behror region. Our story is written in the curiosity of our students, the dedication of our teachers, and the trust of the parents who choose us year after year.",
      historyTitle: "Our History & Heritage",
      historyBody:
        "The story of Virat Public School is one of patient growth and unwavering purpose. From its founding by community-minded educators who believed that rural Rajasthan deserved the same educational opportunities as its cities, the school has steadily expanded its campus, its curriculum, and its reach. Milestones such as the construction of new science laboratories, the introduction of digital classrooms, and the establishment of dedicated sports and cultural programs mark a journey defined less by ambition for size than by commitment to quality. Archival photographs displayed throughout this section capture moments — first batch graduations, annual day celebrations, inter-school achievements — that together form the living memory of the institution.",
      visionTitle: "Vision, Mission & Values",
      vision: "To be a beacon of value-based education in rural Rajasthan, where every child develops the knowledge, character, and confidence to shape a better future.",
      mission: "To provide a nurturing, inclusive, and stimulating learning environment that combines academic rigour with moral grounding, modern skills with cultural roots, and individual growth with social responsibility.",
      values: [
        { title: "Excellence", body: "We pursue high standards in everything we teach and learn." },
        { title: "Integrity", body: "We act with honesty, fairness, and respect for all." },
        { title: "Compassion", body: "We care for one another and serve our community." },
        { title: "Curiosity", body: "We celebrate questions, exploration, and lifelong learning." },
        { title: "Discipline", body: "We build habits of focus, responsibility, and self-control." },
        { title: "Respect", body: "We honour our heritage, our teachers, and each other." },
      ],
      principalTitle: "Principal's Message",
      principalName: "Principal",
      principalBody:
        "It is my privilege to welcome you to Virat Public School. For us, education is far more than the transmission of facts — it is the gentle shaping of character, the careful cultivation of curiosity, and the steady building of confidence that lasts a lifetime. Our classrooms are spaces where questions are welcomed, where effort is celebrated, and where every child is seen. We believe that knowledge bestows humility, and we hold ourselves to that standard every day. I invite you to walk through our campus, meet our teachers, and experience the warmth of our community. Together, we can give your child not just an education, but a foundation for a meaningful life.",
      managementTitle: "Management Committee",
      managementBody:
        "The Virat Public School management committee brings together educators, community leaders, and professionals who collectively steward the institution's mission. Their guidance ensures that the school remains financially sound, academically ambitious, and deeply connected to the community it serves.",
      directorTitle: "Director",
      directorName: "Mahander Kumar Meena",
      directorBio:
        "Mahander Kumar Meena serves as the Director of Virat Public School, providing visionary leadership and unwavering commitment to value-based education in rural Rajasthan. Under his guidance, the school has grown into a trusted centre of learning, with a strong record of academic excellence — including outstanding RBSE results year after year — and a deep commitment to nurturing character, discipline, and curiosity in every child.",
      directorInstagram: "Follow on Instagram",
    },

    // Academics
    academics: {
      heroTitle: "Academics",
      heroBody:
        "A curriculum that balances rigour with curiosity — designed to develop independent thinkers and lifelong learners.",
      overview:
        "At Virat Public School, our academic program is built on the belief that every child can learn deeply when taught with care, challenged with high expectations, and supported with patience. We follow a structured curriculum aligned with national and state board standards, enriched with project-based learning, digital tools, and continuous assessment. Our teachers do not simply deliver content; they mentor, question, and inspire — guiding students to think critically, communicate clearly, and apply their learning to the world around them. The sections below describe in detail what we teach, the classes we offer, the people who teach them, and the assessment rhythm that anchors our academic year.",
      curriculumTitle: "Curriculum",
      curriculumBody:
        "Our curriculum is aligned with the Rajasthan Board of Secondary Education (RBSE) and is structured across three stages: primary (Classes I–V), upper primary (Classes VI–VIII), and secondary/senior secondary (Classes IX–XII). At the primary stage, the focus is on foundational literacy, numeracy, and curiosity-driven exploration through stories, play, and observation. Upper primary introduces formal subject disciplines — mathematics, science, social studies, languages — alongside computer literacy and creative arts. The secondary stage emphasises conceptual depth, laboratory practice, and analytical writing, culminating in the RBSE board examinations. Senior secondary students choose one of three streams — Science, Commerce, or Arts — and follow a specialisation path that prepares them for higher education and competitive examinations. Throughout, our pedagogical approach favours understanding over memorisation, classroom dialogue over one-way lectures, and continuous formative assessment alongside summative tests. Our students' consistent performance in RBSE board examinations — with multiple toppers scoring above 95% — is a testament to the rigour and care of our academic program.",
      classesTitle: "Classes Offered",
      classesIntro:
        "We offer continuous education from primary to senior secondary, with three streams at the senior secondary level. Each stage is designed to smoothly transition students to the next phase of learning.",
      classes: [
        { stage: "Primary", range: "Classes I–V", focus: "Foundational literacy, numeracy, environmental awareness, art, and physical education." },
        { stage: "Upper Primary", range: "Classes VI–VIII", focus: "Mathematics, science, social studies, languages, computer literacy, and creative arts." },
        { stage: "Secondary", range: "Classes IX–X", focus: "Board-aligned curriculum with laboratory practice and analytical writing." },
        { stage: "Senior Secondary", range: "Classes XI–XII", focus: "Specialised streams: Science (PCM/PCB), Commerce, and Arts — with career counselling." },
      ],
      streams: [
        { name: "Science", subjects: "Physics, Chemistry, Mathematics / Biology, English, Optional" },
        { name: "Commerce", subjects: "Accountancy, Business Studies, Economics, Mathematics, English" },
        { name: "Arts", subjects: "History, Political Science, Geography, Hindi/English, Optional" },
      ],
      facultyTitle: "Our Faculty",
      facultyBody:
        "Our faculty are the heart of the school. Each teacher brings subject expertise, classroom craft, and a genuine commitment to student wellbeing. The directory below lists our teaching staff organised by department. Brief profiles include qualifications, the subject they teach, and a short note on their teaching philosophy. We continually invest in our teachers through in-service training, peer observation, and curriculum workshops — because we believe that the best classrooms are taught by teachers who themselves never stop learning.",
      facultyPlaceholder: "Faculty profiles will be displayed here once published by the school office.",
      examsTitle: "Examination Schedule",
      examsBody:
        "Our academic year follows a continuous-assessment rhythm: two summative examinations (half-yearly and annual) interleaved with four formative assessments, alongside subject-specific practicals and project submissions. The schedule below lists upcoming examinations with downloadable PDF timetables where available. Parents and students are encouraged to review the schedule together and plan revision time well in advance. For any queries about examinations, please contact the academic coordinator through the school office.",
      examsPlaceholder: "Examination timetables will be published here as they are released.",
    },

    // Admissions
    admissions: {
      heroTitle: "Admissions",
      heroBody:
        "A clear, transparent, and welcoming admissions process — we are delighted you are considering Virat Public School for your child.",
      overview:
        "We are pleased that you are considering Virat Public School for your child's education. Our admissions process is designed to be transparent, fair, and supportive — guiding families through each step without pressure or ambiguity. The process typically begins with an inquiry (in person, by phone, or through this website), followed by form submission, an interaction round with the child and parents, and finally confirmation of admission upon completion of formalities and fee payment. The four steps below summarise the journey; detailed information on each step, the fee structure, the online application form, and the eligibility and document requirements can be found on the dedicated sub-pages. We encourage you to start early, especially for entry-level classes where seats fill quickly.",
      steps: [
        { title: "Inquiry", body: "Reach out to our admissions desk by phone, email, or in person. We will share the prospectus and answer your initial questions." },
        { title: "Form Submission", body: "Complete the online application form on this website or submit a printed form at the school office along with the required documents." },
        { title: "Interaction", body: "The child and parents meet with the principal and a senior teacher for a friendly conversation — not a test — to understand the child's background and needs." },
        { title: "Confirmation", body: "Upon successful interaction, complete the fee payment and formalities to confirm the seat. A welcome kit and joining instructions will be shared." },
      ],
      processTitle: "Admission Process",
      processBody:
        "The admission process at Virat Public School is structured to be welcoming and fair to every family. Below we describe each of the four steps in greater detail, including the typical timeline, what to bring, and what to expect. We have intentionally designed the process to minimise paperwork and anxiety — our goal is to get to know your child, not to put them through stressful tests. For entry classes (Class I and pre-primary where applicable), admissions typically open in February and continue until seats are filled. For higher classes, admissions are subject to seat availability and are usually completed before the new academic session begins in April.",
      feesTitle: "Fee Structure",
      feesBody:
        "We believe in complete transparency on fees. The table below lists the applicable fees for the current academic year, broken down by class. Fees include admission fee (one-time, payable at the time of joining), annual charges (payable at the start of each academic year), and tuition fee (payable monthly or quarterly as per school policy). Optional charges such as transport, hostel (if applicable), and extracurricular specialisations are listed separately. The school offers a sibling concession and limited need-based scholarships — please contact the accounts office for details. Fees may be revised annually; the table below reflects the current academic year.",
      feesNote: "Note: The figures shown below are indicative pending final approval by the management committee. Please confirm the current fee card with the school office before submitting any application.",
      applyTitle: "Online Application",
      applyBody:
        "Please complete the online application form below. Fields marked with an asterisk (*) are required. After submission, you will receive a confirmation email with a reference number — please save this for future correspondence. Our admissions desk will contact you within 2–3 working days to schedule the interaction round. If you encounter any issue with the form, please call the school office during working hours.",
      eligibilityTitle: "Eligibility & Documents",
      eligibilityBody:
        "Admission eligibility is primarily determined by the age criteria for each class as on 31 March of the academic year, alongside availability of seats. The table below lists the minimum age for each entry class. For mid-session admissions to higher classes, transfer cases (with a valid transfer certificate from the previous school) are given priority. The documents checklist that follows must be submitted along with the application form. Incomplete applications will not be processed — please ensure all documents are ready before starting the application.",
      ageCriteria: [
        { class: "Class I", age: "6 years" },
        { class: "Class II", age: "7 years" },
        { class: "Class III", age: "8 years" },
        { class: "Class IV", age: "9 years" },
        { class: "Class V", age: "10 years" },
        { class: "Class VI", age: "11 years" },
      ],
      documents: [
        "Birth certificate (issued by municipal authority)",
        "Two recent passport-size photographs of the child",
        "One passport-size photograph each of parents/guardians",
        "Aadhaar card of child and parents",
        "Caste/category certificate (if applicable)",
        "Previous school's transfer certificate (for Class II onwards)",
        "Previous class report card / mark sheet (for Class II onwards)",
        "Address proof of parent (electricity bill / voter ID / ration card)",
      ],
    },

    // News & Events
    news: {
      heroTitle: "News & Events",
      heroBody:
        "A glimpse into the life of our school — announcements, celebrations, and moments worth remembering.",
      announcementsTitle: "Announcements",
      announcementsBody:
        "Formal notices from the school office — holiday declarations, examination results, fee reminders, and circulars. Notices are listed in reverse-chronological order. Where a PDF is available, click the attachment link to download. To receive announcements by email, please subscribe at the bottom of this page.",
      calendarTitle: "Event Calendar",
      calendarBody:
        "Our academic year is filled with events that celebrate learning, culture, and sport. The calendar below shows the month-at-a-glance with events colour-coded by category: Academic (blue), Cultural (gold), Sports (green), and Holiday (red). Click on any event for details. Parents can export the calendar to their personal calendar app using the ICS link at the top of the page.",
      galleryTitle: "Photo Gallery",
      galleryBody:
        "A picture is worth a thousand words — and our photo gallery captures the spirit of Virat Public School. Browse albums from recent events below. Click any album to open a full-screen lightbox view. New albums are added shortly after each event; please check back regularly.",
      galleryPlaceholder: "Photo albums will appear here once published by the school office.",
      readMore: "Read more",
      noNews: "No items to display right now. Please check back soon.",
    },

    // Contact
    contact: {
      heroTitle: "Contact Us",
      heroBody:
        "We are here to help — reach out by phone, email, or the form below, or visit our campus in Viratnagar.",
      formTitle: "Send Us a Message",
      formBody: "Use the form below for general enquiries. For admission-specific queries, please use the Online Application page. We aim to respond within two working days.",
      addressTitle: "Our Address",
      address: "Virat Public School, Viratnagar, Kotputli-Behror district, Rajasthan — 324015.",
      phoneTitle: "Phone",
      phoneOffice: "Head Office: +91 96364 52501",
      phoneAdmissions: "Education Officer: +91 94141 53736",
      emailTitle: "Email",
      emailGeneral: "info@viratpublicschool.in",
      emailAdmissions: "admissions@viratpublicschool.in",
      hoursTitle: "Working Hours",
      hours: "Monday – Saturday, 8:00 AM – 3:00 PM (school office). Second Saturday is a holiday.",
      whatsapp: "Chat on WhatsApp",
      social: "Follow Us",
      submitSuccess: "Thank you. Your message has been received. We will respond within 2 working days.",
      submitError: "Sorry, something went wrong. Please try again or call the school office.",
    },

    // Footer
    footer: {
      about: "Virat Public School, Viratnagar — nurturing knowledge, discipline, and character since its founding.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "© {year} Virat Public School. All rights reserved.",
      developedBy: "Built with care for the Viratnagar community.",
    },

    // Language toggle
    language: {
      toggle: "हिंदी",
      label: "Language",
    },

    // Common
    common: {
      learnMore: "Learn More",
      viewAll: "View All",
      backToTop: "Back to Top",
      loading: "Loading…",
      error: "Something went wrong.",
      required: "Required",
      optional: "Optional",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
    },
  },

  hi: {
    schoolName: "विराट पब्लिक स्कूल",
    tagline: "ज्ञान। अनुशासन। चरित्र।",
    motto: "विद्या ददाति विनयम्",
    mottoTranslation: "ज्ञान विनम्रता प्रदान करता है",

    nav: {
      home: "होम",
      about: "हमारे बारे में",
      academics: "शैक्षणिक",
      admissions: "प्रवेश",
      news: "समाचार एवं कार्यक्रम",
      contact: "संपर्क करें",
      apply: "ऑनलाइन आवेदन",
    },
    aboutSub: {
      history: "इतिहास एवं विरासत",
      visionMission: "विजन एवं मिशन",
      principal: "प्रधानाचार्य का संदेश",
      management: "प्रबंध समिति",
    },
    academicsSub: {
      curriculum: "पाठ्यक्रम",
      classes: "कक्षाएँ",
      faculty: "शिक्षक मंडल",
      exams: "परीक्षा कार्यक्रम",
    },
    admissionsSub: {
      process: "प्रवेश प्रक्रिया",
      fees: "शुल्क संरचना",
      apply: "ऑनलाइन आवेदन",
      eligibility: "पात्रता एवं दस्तावेज़",
    },
    newsSub: {
      announcements: "घोषणाएँ",
      calendar: "कार्यक्रम कैलेंडर",
      gallery: "फ़ोटो गैलरी",
    },

    home: {
      heroCtaAcademics: "शैक्षणिक देखें",
      heroCtaApply: "ऑनलाइन आवेदन करें",
      heroSubtitle:
        "विराटनगर में ज्ञान, अनुशासन और चरित्र के साथ युवा मनों का संवर्धन — मूल्यों में जड़ित, कल के लिए तैयार।",
      welcomeTitle: "विराट पब्लिक स्कूल में आपका स्वागत है",
      welcomeBody:
        "विराट पब्लिक स्कूल राजस्थान के कोटपुतली-बहरोर जिले के विराटनगर में एक प्रमुख शैक्षणिक संस्थान है, जो प्रत्येक बच्चे के समग्र विकास के लिए समर्पित है। राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) से संबद्ध, हम भारत की समृद्ध शैक्षणिक विरासत को आधुनिक शिक्षण पद्धति के साथ जोड़ते हैं, जिसमें अनुभवी शिक्षक, सुसज्जित सुविधाएँ और एक चौकस समुदाय हमारे साथ है।",
      featuresTitle: "परिवार हमें क्यों चुनते हैं",
      features: [
        { title: "अनुभवी शिक्षक मंडल", body: "दशकों के संयुक्त अनुभव वाले योग्य, चौकस शिक्षक प्रत्येक शिक्षार्थी का मार्गदर्शन करते हैं।" },
        { title: "आधुनिक सुविधाएँ", body: "विज्ञान एवं कंप्यूटर प्रयोगशालाएँ, पुस्तकालय, खेल का मैदान और डिजिटल कक्षाएँ।" },
        { title: "समग्र विकास", body: "खेल, कला, सांस्कृतिक कार्यक्रमों और मूल्य-आधारित शिक्षा के साथ संतुलित अध्ययन।" },
      ],
      latestNews: "ताज़ा समाचार एवं घोषणाएँ",
      resultsTitle: "RBSE परिणाम 2025-26 — हमारे टॉपर्स",
      resultsBody:
        "हम अपने छात्रों के RBSE परीक्षाओं में उत्कृष्ट प्रदर्शन पर गर्व महसूस करते हैं। नीचे सूचीबद्ध टॉपर्स हमारे छात्रों की मेहनत, हमारे शिक्षकों के समर्पण और अभिभावकों द्वारा हम पर रखे गए विश्वास को दर्शाते हैं। सभी को बधाई!",
      toppers: [
        { name: "रोहित यादव", subject: "math", percent: "98.20%", position: "1" },
        { name: "प्रिंस सैनी", subject: "agriculture", percent: "95.80%", position: "2" },
        { name: "मोनिका सैनी", subject: "bio", percent: "95.00%", position: "3" },
        { name: "आर्यन डोडवाड़िया", subject: "bio", percent: "91.40%", position: "4" },
        { name: "भाग्यश्री", subject: "math", percent: "90.20%", position: "5" },
      ],
      resultsMore: "सभी परिणाम देखें",
      quickContactTitle: "हमारे परिसर में आइए",
      quickContactBody:
        "विराटनगर के मध्य में स्थित। हम भावी अभिभावकों का परिसर भ्रमण और प्रवेश टीम से बातचीत के लिए स्वागत करते हैं।",
      directions: "मार्गदर्शन प्राप्त करें",
    },

    about: {
      heroTitle: "हमारे स्कूल के बारे में",
      heroBody: "मूल्यों पर निर्मित, उद्देश्य के साथ बढ़ते हुए — विराट पब्लिक स्कूल के पीछे की कहानी, विजन और लोगों से परिचित हों।",
      overview: "विराट पब्लिक स्कूल की स्थापना इस दृढ़ विश्वास के साथ हुई थी कि ग्रामीण राजस्थान के प्रत्येक बच्चे को गुणवत्तापूर्ण शिक्षा तक पहुँच प्राप्त होनी चाहिए जो परंपरा का सम्मान करते हुए आधुनिक दुनिया को अपनाए।",
      historyTitle: "हमारा इतिहास एवं विरासत",
      historyBody: "विराट पब्लिक स्कूल की कहानी धैर्यपूर्वक वृद्धि और अटूट उद्देश्य की कहानी है। समुदाय-चेतन शिक्षाविदों द्वारा स्थापित, जो यह मानते थे कि ग्रामीण राजस्थान अपने शहरों के समान शैक्षणिक अवसरों का हकदार है, स्कूल ने अपने परिसर, पाठ्यक्रम और पहुँच को निरंतर विस्तार दिया है।",
      visionTitle: "विजन, मिशन एवं मूल्य",
      vision: "ग्रामीण राजस्थान में मूल्य-आधारित शिक्षा का प्रकाश स्तंभ बनना, जहाँ प्रत्येक बच्चा एक बेहतर भविष्य के निर्माण हेतु ज्ञान, चरित्र और आत्मविश्वास विकसित करे।",
      mission: "एक ऐसा पोषणकारी, समावेशी और प्रेरक शैक्षणिक वातावरण प्रदान करना जो अकादमिक कठोरता को नैतिक आधार के साथ, आधुनिक कौशल को सांस्कृतिक जड़ों के साथ, और व्यक्तिगत विकास को सामाजिक उत्तरदायित्व के साथ जोड़ता हो।",
      values: [
        { title: "उत्कृष्टता", body: "हम जो कुछ भी पढ़ाते और सीखते हैं उसमें उच्च मानकों का पीछा करते हैं।" },
        { title: "ईमानदारी", body: "हम सभी के प्रति ईमानदारी, निष्पक्षता और सम्मान के साथ कार्य करते हैं।" },
        { title: "करुणा", body: "हम एक-दूसरे की देखभाल करते हैं और अपने समुदाय की सेवा करते हैं।" },
        { title: "जिज्ञासा", body: "हम प्रश्नों, अन्वेषण और आजीवन सीखने का उत्सव मनाते हैं।" },
        { title: "अनुशासन", body: "हम ध्यान, उत्तरदायित्व और आत्म-नियंत्रण की आदतें बनाते हैं।" },
        { title: "सम्मान", body: "हम अपनी विरासत, अपने शिक्षकों और एक-दूसरे का सम्मान करते हैं।" },
      ],
      principalTitle: "प्रधानाचार्य का संदेश",
      principalName: "प्रधानाचार्य",
      principalBody: "यह मेरे लिए सम्मान की बात है कि आपका विराट पब्लिक स्कूल में स्वागत करूँ। हमारे लिए शिक्षा केवल तथ्यों का संप्रेषण नहीं है — यह चरित्र का कोमल शिल्प, जिज्ञासा का सावधानीपूर्वक खेती, और आजीवन बनी रहने वाली आत्मविश्वास की स्थिर नींव है।",
      managementTitle: "प्रबंध समिति",
      managementBody: "विराट पब्लिक स्कूल की प्रबंध समिति शिक्षाविदों, समुदाय नेताओं और पेशेवरों को एक साथ लाती है जो सामूहिक रूप से संस्थान के मिशन का मार्गदर्शन करते हैं।",
      directorTitle: "निदेशक",
      directorName: "महांदेर कुमार मीणा",
      directorBio:
        "महांदेर कुमार मीणा विराट पब्लिक स्कूल के निदेशक के रूप में कार्य करते हैं, ग्रामीण राजस्थान में मूल्य-आधारित शिक्षा के लिए दूरदर्शी नेतृत्व और अटूट प्रतिबद्धता प्रदान करते हैं। उनके मार्गदर्शन में, स्कूल सीखने का एक भरोसेमंद केंद्र बन गया है, जिसमें शैक्षणिक उत्कृष्टता का मजबूत रिकॉर्ड है — जिसमें हर वर्ष उत्कृष्ट RBSE परिणाम शामिल हैं — और हर बच्चे में चरित्र, अनुशासन और जिज्ञासा को पोषित करने की गहरी प्रतिबद्धता है।",
      directorInstagram: "इंस्टाग्राम पर फ़ॉलो करें",
    },

    academics: {
      heroTitle: "शैक्षणिक",
      heroBody: "एक पाठ्यक्रम जो कठोरता को जिज्ञासा के साथ संतुलित करता है — स्वतंत्र चिंतकों और आजीवन शिक्षार्थियों के विकास हेतु डिज़ाइन किया गया।",
      overview: "विराट पब्लिक स्कूल में, हमारा शैक्षणिक कार्यक्रम इस विश्वास पर निर्मित है कि प्रत्येक बच्चा गहराई से सीख सकता है जब उसे देखभाल के साथ पढ़ाया जाए, उच्च अपेक्षाओं के साथ चुनौती दी जाए, और धैर्य के साथ सहारा दिया जाए।",
      curriculumTitle: "पाठ्यक्रम",
      curriculumBody: "हमारा पाठ्यक्रम राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) के अनुरूप है और तीन चरणों में संरचित है — प्राथमिक (कक्षा I–V), उच्च प्राथमिक (कक्षा VI–VIII), और माध्यमिक/वरिष्ठ माध्यमिक (कक्षा IX–XII)। प्राथमिक चरण में, ध्यान बुनियादी साक्षरता, संख्या ज्ञान और कहानियों, खेल और अवलोकन के माध्यम से जिज्ञासा-संचालित अन्वेषण पर है। उच्च प्राथमिक औपचारिक विषय अनुशासन प्रस्तुत करता है। माध्यमिक चरण RBSE बोर्ड परीक्षाओं में समापन होता है। वरिष्ठ माध्यमिक छात्र तीन धाराओं में से एक चुनते हैं — विज्ञान, वाणिज्य, या कला। हमारे छात्रों का RBSE बोर्ड परीक्षाओं में निरंतर प्रदर्शन — कई टॉपर्स 95% से ऊपर — हमारे शैक्षणिक कार्यक्रम की कठोरता और देखभाल का प्रमाण है।",
      classesTitle: "पेश की जाने वाली कक्षाएँ",
      classesIntro: "हम प्राथमिक से वरिष्ठ माध्यमिक तक निरंतर शिक्षा प्रदान करते हैं, वरिष्ठ माध्यमिक स्तर पर तीन धाराएँ के साथ।",
      classes: [
        { stage: "प्राथमिक", range: "कक्षा I–V", focus: "बुनियादी साक्षरता, संख्या ज्ञान, पर्यावरण जागरूकता, कला और शारीरिक शिक्षा।" },
        { stage: "उच्च प्राथमिक", range: "कक्षा VI–VIII", focus: "गणित, विज्ञान, सामाजिक अध्ययन, भाषाएँ, कंप्यूटर साक्षरता और रचनात्मक कलाएँ।" },
        { stage: "माध्यमिक", range: "कक्षा IX–X", focus: "बोर्ड-संरेखित पाठ्यक्रम प्रयोगशाला अभ्यास और विश्लेषणात्मक लेखन के साथ।" },
        { stage: "वरिष्ठ माध्यमिक", range: "कक्षा XI–XII", focus: "विशेष धाराएँ: विज्ञान (PCM/PCB), वाणिज्य और कला — करियर परामर्श के साथ।" },
      ],
      streams: [
        { name: "विज्ञान", subjects: "भौतिकी, रसायन विज्ञान, गणित / जीव विज्ञान, अंग्रेज़ी, वैकल्पिक" },
        { name: "वाणिज्य", subjects: "लेखाशास्त्र, व्यवसाय अध्ययन, अर्थशास्त्र, गणित, अंग्रेज़ी" },
        { name: "कला", subjects: "इतिहास, राजनीति शास्त्र, भूगोल, हिंदी/अंग्रेज़ी, वैकल्पिक" },
      ],
      facultyTitle: "हमारे शिक्षक मंडल",
      facultyBody: "हमारे शिक्षक स्कूल का हृदय हैं। प्रत्येक शिक्षक विषय विशेषज्ञता, कक्षा-कौशल और छात्र कल्याण के लिए सच्ची प्रतिबद्धता लेकर आता है।",
      facultyPlaceholder: "स्कूल कार्यालय द्वारा प्रकाशित होने पर शिक्षक प्रोफ़ाइल यहाँ दिखाई देंगी।",
      examsTitle: "परीक्षा कार्यक्रम",
      examsBody: "हमारा शैक्षणिक वर्ष निरंतर-मूल्यांकन लय का अनुसरण करता है।",
      examsPlaceholder: "परीक्षा कार्यक्रम जारी होने पर यहाँ प्रकाशित किए जाएँगे।",
    },

    admissions: {
      heroTitle: "प्रवेश",
      heroBody: "एक स्पष्ट, पारदर्शी और स्वागतपूर्ण प्रवेश प्रक्रिया — हमें खुशी है कि आप अपने बच्चे के लिए विराट पब्लिक स्कूल पर विचार कर रहे हैं।",
      overview: "हमें प्रसन्नता है कि आप अपने बच्चे की शिक्षा के लिए विराट पब्लिक स्कूल पर विचार कर रहे हैं।",
      steps: [
        { title: "पूछताछ", body: "फ़ोन, ईमेल या व्यक्तिगत रूप से हमारी प्रवेश डेस्क से संपर्क करें।" },
        { title: "फ़ॉर्म जमा", body: "वेबसाइट पर ऑनलाइन आवेदन फ़ॉर्म भरें या स्कूल कार्यालय में मुद्रित फ़ॉर्म जमा करें।" },
        { title: "बातचीत", body: "बच्चे और अभिभावक प्रधानाचार्य और वरिष्ठ शिक्षक से मिलते हैं।" },
        { title: "पुष्टि", body: "सफल बातचीत के बाद, शुल्क भुगतान और औपचारिकताएँ पूरी कर सीट की पुष्टि करें।" },
      ],
      processTitle: "प्रवेश प्रक्रिया",
      processBody: "विराट पब्लिक स्कूल में प्रवेश प्रक्रिया प्रत्येक परिवार के लिए स्वागतपूर्ण और निष्पक्ष होने के लिए संरचित है।",
      feesTitle: "शुल्क संरचना",
      feesBody: "हम शुल्क पर पूर्ण पारदर्शिता में विश्वास करते हैं। नीचे दी गई तालिका वर्तमान शैक्षणिक वर्ष के लिए लागू शुल्क को कक्षा अनुसार दर्शाती है।",
      feesNote: "नोट: नीचे दर्शाए आँकड़े प्रबंध समिति के अंतिम अनुमोदन लंबित अनुक्रमणिक हैं।",
      applyTitle: "ऑनलाइन आवेदन",
      applyBody: "कृपया नीचे दिए गए ऑनलाइन आवेदन फ़ॉर्म को पूरा करें। तारांकित (*) फ़ील्ड अनिवार्य हैं।",
      eligibilityTitle: "पात्रता एवं दस्तावेज़",
      eligibilityBody: "प्रवेश पात्रता मुख्य रूप से शैक्षणिक वर्ष के 31 मार्च तक प्रत्येक कक्षा के लिए आयु मानदंड द्वारा निर्धारित होती है।",
      ageCriteria: [
        { class: "कक्षा I", age: "6 वर्ष" },
        { class: "कक्षा II", age: "7 वर्ष" },
        { class: "कक्षा III", age: "8 वर्ष" },
        { class: "कक्षा IV", age: "9 वर्ष" },
        { class: "कक्षा V", age: "10 वर्ष" },
        { class: "कक्षा VI", age: "11 वर्ष" },
      ],
      documents: [
        "जन्म प्रमाण पत्र (नगरपालिका प्राधिकारी द्वारा जारी)",
        "बच्चे के दो हाल के पासपोर्ट-आकार फ़ोटो",
        "अभिभावकों के प्रत्येक का एक पासपोर्ट-आकार फ़ोटो",
        "बच्चे और अभिभावकों का आधार कार्ड",
        "जाति/श्रेणी प्रमाण पत्र (यदि लागू हो)",
        "पिछले स्कूल का ट्रांसफ़र प्रमाण पत्र (कक्षा II से)",
        "पिछली कक्षा की रिपोर्ट कार्ड (कक्षा II से)",
        "अभिभावक का पता प्रमाण (बिजली बिल / वोटर आईडी / राशन कार्ड)",
      ],
    },

    news: {
      heroTitle: "समाचार एवं कार्यक्रम",
      heroBody: "हमारे स्कूल के जीवन में एक झलक — घोषणाएँ, उत्सव, और याद रखने लायक क्षण।",
      announcementsTitle: "घोषणाएँ",
      announcementsBody: "स्कूल कार्यालय से औपचारिक सूचनाएँ।",
      calendarTitle: "कार्यक्रम कैलेंडर",
      calendarBody: "हमारा शैक्षणिक वर्ष ऐसे कार्यक्रमों से भरा है जो शिक्षा, संस्कृति और खेल का उत्सव मनाते हैं।",
      galleryTitle: "फ़ोटो गैलरी",
      galleryBody: "एक तस्वीर हज़ार शब्दों के बराबर होती है — और हमारी फ़ोटो गैलरी विराट पब्लिक स्कूल की भावना को दर्शाती है।",
      galleryPlaceholder: "स्कूल कार्यालय द्वारा प्रकाशित होने पर फ़ोटो एल्बम यहाँ दिखाई देंगे।",
      readMore: "और पढ़ें",
      noNews: "अभी प्रदर्शित करने के लिए कोई आइटम नहीं। कृपया शीघ्र पुनः जाँचें।",
    },

    contact: {
      heroTitle: "संपर्क करें",
      heroBody: "हम सहायता के लिए यहाँ हैं — फ़ोन, ईमेल, या नीचे दिए फ़ॉर्म द्वारा संपर्क करें, या हमारे विराटनगर परिसर में आइए।",
      formTitle: "हमें संदेश भेजें",
      formBody: "सामान्य पूछताछ के लिए नीचे दिए फ़ॉर्म का उपयोग करें।",
      addressTitle: "हमारा पता",
      address: "विराट पब्लिक स्कूल, विराटनगर, कोटपुतली-बहरोर जिला, राजस्थान — 324015।",
      phoneTitle: "फ़ोन",
      phoneOffice: "हेड ऑफिस: +91 96364 52501",
      phoneAdmissions: "शिक्षा अधिकारी: +91 94141 53736",
      emailTitle: "ईमेल",
      emailGeneral: "info@viratpublicschool.in",
      emailAdmissions: "admissions@viratpublicschool.in",
      hoursTitle: "कार्य समय",
      hours: "सोमवार – शनिवार, सुबह 8:00 – दोपहर 3:00 (स्कूल कार्यालय)। द्वितीय शनिवार अवकाश।",
      whatsapp: "व्हाट्सएप पर चैट करें",
      social: "हमें फ़ॉलो करें",
      submitSuccess: "धन्यवाद। आपका संदेश प्राप्त हो गया है। हम 2 कार्य दिवसों के भीतर उत्तर देंगे।",
      submitError: "क्षमा करें, कुछ गलत हुआ। कृपया पुनः प्रयास करें या स्कूल कार्यालय को कॉल करें।",
    },

    footer: {
      about: "विराट पब्लिक स्कूल, विराटनगर — स्थापना से ज्ञान, अनुशासन और चरित्र का संवर्धन।",
      quickLinks: "त्वरित लिंक",
      contact: "संपर्क",
      rights: "© {year} विराट पब्लिक स्कूल। सर्वाधिकार सुरक्षित।",
      developedBy: "विराटनगर समुदाय के लिए प्रेम से निर्मित।",
    },

    language: {
      toggle: "English",
      label: "भाषा",
    },

    common: {
      learnMore: "और जानें",
      viewAll: "सभी देखें",
      backToTop: "ऊपर जाएँ",
      loading: "लोड हो रहा है…",
      error: "कुछ गलत हुआ।",
      required: "अनिवार्य",
      optional: "वैकल्पिक",
      submit: "जमा करें",
      cancel: "रद्द करें",
      save: "सहेजें",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
