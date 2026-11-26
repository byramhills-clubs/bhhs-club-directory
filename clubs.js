const CLUBS = [
  // ---------- ACADEMIC ----------
  {
    name: "Academic Challenge",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Thursdays 2:30-4:00",
    location: "Room 409",
    description: "A quiz bowl team. Two teams of four sit across from each other with buzzers and race to answer questions on anything from physics to politics to the Emmys. The team competes in MACC, WACKO, and NAQT tournaments, and there are usually donuts or bagels. New members are always welcome.",
    advisor: "Mr. Gilbert",
    email: "mgilbert@byramhills.net"
  },
  {
    name: "AI Roundtable",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Every other Thursday 2:30-3:15 (extra sessions for speakers and projects)",
    location: "Room 114",
    description: "A student-led club that looks at how AI affects learning and thinking. Members learn to use tools like ChatGPT, Gemini, Canva, and Copilot to help them learn instead of doing the thinking for them. Through debates, research, and talks with teachers, the club is writing a model AI policy for Byram Hills.",
    advisor: "Mrs. Greenwald and Dr. Matthew",
    email: "sgreenwald@byramhills.net,cmatthew@byramhills.net"
  },
  {
    name: "Architecture Club",
    category: "Academic",
    days: ["Monday"],
    meetingTime: "First Monday of every month",
    location: "Room 423",
    description: "For students curious about architecture, a field that mixes art with math and science. Members sculpt and draw, study the buildings around them, hear from guest speakers, and may go on field trips.",
    advisor: "Ms. Sarracco",
    email: "csarracco@byramhills.net"
  },
  {
    name: "Astronomy Club",
    category: "Academic",
    days: ["Flexible"],
    meetingTime: "TBD",
    location: "TBD",
    description: "Explores everything from our solar system and nearby exoplanets to neutron stars and black holes, plus the history of stargazing. Activities include nighttime telescope sessions, working with real observation data, and making presentations for younger students and partner schools.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Engineering Club",
    category: "Academic",
    days: ["Flexible"],
    meetingTime: "TBD",
    location: "TBD",
    description: "The Engineering Club and eNable Club have merged into one club focused on real projects that help the school and community, like 3D-printed assistive devices for the LCC and FSP programs. Members learn CAD in Onshape, 3D printing, laser cutting, and electronics, along with project planning tools like Gantt charts.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Government & Politics Club",
    category: "Academic",
    days: ["Wednesday"],
    meetingTime: "Every other Wednesday after school",
    location: "Room 201",
    description: "A place for civil discussion about elections, world events, and laws or opinions that are in the news. Members vote on the topic for the next meeting. Anyone can join, you can just listen if you want, and there are cookies.",
    advisor: "Dr. Abt",
    email: "sabt@byramhills.net"
  },
  {
    name: "Math Team",
    category: "Academic",
    days: ["Monday"],
    meetingTime: "Mondays 2:30-3:30",
    location: "Room 418",
    description: "For students who like math and want to compete at the school, county, state, and national level. Competitions happen every few weeks. At weekly meetings you can get homework help, try past contest problems, and talk about interesting math. Snacks at meetings, donuts at competitions.",
    advisor: "Mr. Kalish",
    email: "jkalish@byramhills.net"
  },
  {
    name: "Mock Trial",
    category: "Academic",
    days: ["Tuesday"],
    meetingTime: "Tuesdays 2:30-3:30",
    location: "Room 411",
    description: "Students act as lawyers and witnesses for both sides of a real legal case, using evidence, affidavits, and case law. The club enters two competitions a year, including a county tournament in March where 12 to 15 members argue in front of a real judge at the Westchester County Courthouse.",
    advisor: "Mr. Gilbert and Mr. Allen",
    email: "mgilbert@byramhills.net,mallen@byramhills.net"
  },
  {
    name: "Model United Nations",
    category: "Academic",
    days: ["Flexible"],
    meetingTime: "Contact advisor",
    location: "TBD",
    description: "Students represent countries, debate world problems, build alliances, and negotiate solutions in UN-style simulations. Weekly meetings build public speaking, research, and diplomacy skills, and members compete at conferences hosted by colleges. No experience needed and all grades are welcome.",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "Peer Tutoring Club",
    category: "Academic",
    days: ["Flexible"],
    meetingTime: "Tutors meet once a month for 15-20 minutes",
    location: "TBD",
    description: "Matches students who need help in a class with older students who already took it. Tutors volunteer once their past teacher approves. To get a tutor or become one, fill out the form and turn it in to Mr. Allen.",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "Pre-Pre Med Club",
    category: "Academic",
    days: ["Monday"],
    meetingTime: "First Monday of each month",
    location: "Room 209",
    description: "A community for students thinking about careers in medicine or science. Members learn about the medical field, do related activities, and meet other students with the same interests.",
    advisor: "Mr. Gulick",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Science Olympiad",
    category: "Academic",
    days: ["Flexible"],
    meetingTime: "Varies depending on events and preparation",
    location: "TBD",
    description: "A national science competition for grades 9-12. Events include written tests, hands-on lab tasks, and devices you build ahead of time. Byram Hills hosts the regional competition, sends two teams, and has made it to the state level 12 times since 2009.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Shark Tank Club",
    category: "Academic",
    days: ["Flexible"],
    meetingTime: "Once a month, TBD",
    location: "TBD",
    description: "Meets monthly to help students think like entrepreneurs. Members turn ideas into pitches, practice elevator pitches, and work on public speaking and thinking on their feet.",
    advisor: "Ms. Sheeley",
    email: "ksheeley@byramhills.net"
  },
  {
    name: "Speech and Debate",
    category: "Academic",
    days: ["Tuesday", "Thursday"],
    meetingTime: "Tuesdays and Thursdays 2:30-4:00",
    location: "TBD",
    description: "Students learn speech and debate skills and write cases for local, regional, and national tournaments. Events include Oratory, Interpretation, Extemporaneous, Lincoln-Douglas, and Public Forum. Tournaments run on Saturdays, and some start on Friday.",
    advisor: "Mr. Andriello and Ms. Smith",
    email: "tandriello@byramhills.net,ksmith@byramhills.net"
  },
  {
    name: "Students Who Code",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Thursdays after school",
    location: "Room 417",
    description: "Gives students the chance to learn coding and software skills for future STEM careers. This year the club is teaching website basics while building a site to organize Byram Hills clubs, and hosting discussions about tech culture and computer science education.",
    advisor: "Mr. Lewick",
    email: "clewick@byramhills.net"
  },

  // ---------- COMMUNITY BUILDING ----------
  {
    name: "Allergy Awareness Club",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "Once a month",
    location: "Room 318",
    description: "Spreads allergy awareness at Byram Hills. Money the club raises goes to allergy research and to allergy-friendly food for families in need, through the organization Free From Market.",
    advisor: "Mrs. Cohen",
    email: "ecohen@byramhills.net"
  },
  {
    name: "Arch Yearbook",
    category: "Community Building",
    days: ["Thursday"],
    meetingTime: "Thursdays after school",
    location: "Room 215",
    description: "Produces the Arch yearbook. Students can be editors, writers, designers, photographers, or business managers, and staff can attend journalism conferences at Columbia University. For school picture questions, call Lifetouch/Prestige Portraits at 800-426-9533.",
    advisor: "Ms. Vernola",
    email: "svernola@byramhills.net"
  },
  {
    name: "The Canvas",
    category: "Community Building",
    days: ["Wednesday"],
    meetingTime: "Every other Wednesday",
    location: "Mrs. Horn's Room",
    description: "The student-run art and literary magazine. It publishes poetry, short stories, and artwork by Byram Hills students and teachers in a winter issue and a spring issue.",
    advisor: "Mrs. Horn",
    email: "lhorn@byramhills.net"
  },
  {
    name: "Fighting Antisemitism Club",
    category: "Community Building",
    days: ["Tuesday"],
    meetingTime: "Tuesdays after school, once a month",
    location: "Room 213",
    description: "Works to prevent antisemitism through education, looking at current events and history. Meetings usually include a presentation and are a judgment-free place to share experiences. Jewish and non-Jewish students are all welcome.",
    advisor: "Ms. Squadron",
    email: "lsquadron@byramhills.net"
  },
  {
    name: "GSA: Gender and Sexuality Alliance",
    category: "Community Building",
    days: ["Monday"],
    meetingTime: "Most Mondays after school",
    location: "Band Room",
    description: "Works to make Byram Hills a more welcoming place by educating people about issues that affect LGBTQ+ youth, and by promoting respect for everyone no matter who they are.",
    advisor: "Mrs. Horn",
    email: "lhorn@byramhills.net"
  },
  {
    name: "High School Science Ambassadors",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "See advisor for details",
    location: "TBD",
    description: "For students who love science and want to share it with younger kids. Members film science experiment videos for a 2nd grade class, with a goal of at least five videos this year.",
    advisor: "Mr. Borneman",
    email: "sborneman@byramhills.net"
  },
  {
    name: "Helping Young People Excel (H.Y.P.E.)",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "Once a month",
    location: "Room 215",
    description: "Connects Byram Hills students with community members who have special needs. Monthly events include crafts, games, and making snacks together.",
    advisor: "Ms. Lewis",
    email: "klewis@byramhills.net"
  },
  {
    name: "MedEquity",
    category: "Community Building",
    days: ["Wednesday"],
    meetingTime: "Wednesdays twice a month, 2:30-3:00",
    location: "CCC",
    description: "A student-led group working for health equality in Westchester. Members collect medical supplies for underserved communities and raise awareness about overlooked health problems, picking a new focus every few months. Activities include donation drives, volunteering, and student presentations.",
    advisor: "Mrs. Berman",
    email: ""
  },
  {
    name: "Native American Rights Fund",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "Once a month after school (contact advisor)",
    location: "TBD",
    description: "Raises awareness about Native American reservations across the country and supports future generations of Native American communities. Meets monthly, and food is provided.",
    advisor: "Ms. Mirsky",
    email: "mmirsky@byramhills.net"
  },
  {
    name: "The Oracle",
    category: "Community Building",
    days: ["Monday", "Tuesday"],
    meetingTime: "Mondays and/or Tuesdays (dates posted in Google Classroom)",
    location: "TBD",
    description: "The Byram Hills High School newspaper, publishing new articles online every day at bhhsoracle.org. Students build journalism and writing skills while covering issues that matter to the school and community. Email bhhsoracle@byramhills.net to join.",
    advisor: "Mrs. Eshoo",
    email: "ceshoo@byramhills.org"
  },
  {
    name: "Social Media and Content Creation Club",
    category: "Community Building",
    days: ["Monday"],
    meetingTime: "First Monday of every month at 2:30",
    location: "Room 419",
    description: "Learn about social media, marketing, and advertising. The club talks about trends, how brands promote themselves, and how to stay safe online, with fun activities along the way.",
    advisor: "Mr. Ramos",
    email: "lramos@byramhills.net"
  },
  {
    name: "Students Against Destructive Decisions (SADD)",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "Once a month",
    location: "Room 206",
    description: "A student-led club that encourages smart choices. Members raise awareness about substance use, reckless driving, and peer pressure through school events, campaigns, and community outreach.",
    advisor: "Mr. Carpenter",
    email: "dcarpenter@byramhills.net"
  },
  {
    name: "Student Athletic Leadership Club (SALT/FAST)",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "Contact advisor for details",
    location: "TBD",
    description: "Builds sportsmanship and leadership among student athletes, focusing on teamwork, respect, and integrity. Members run workshops at HCC and help athletes become role models.",
    advisor: "Ms. Healy and Ms. Mirsky",
    email: "khealy@byramhills.net,mmirsky@byramhills.net"
  },
  {
    name: "Students of Cultural Association (SOCA)",
    category: "Community Building",
    days: ["Flexible"],
    meetingTime: "Every other week, dates TBD",
    location: "TBD",
    description: "Celebrates cultural diversity and helps students from all backgrounds feel included. Members plan events for heritage months, organize volunteer work, and hold discussions.",
    advisor: "Mr. Torres",
    email: "rtorres@byramhills.net"
  },
  {
    name: "Student Wellness Advisory Committee (SWAC)",
    category: "Community Building",
    days: ["Wednesday"],
    meetingTime: "Once a month on Wednesdays",
    location: "Room 203",
    description: "Plans events that help students handle stress and take care of their mental health. The biggest event is Wellness Day, when professionals come in to talk about issues students face and ways to cope.",
    advisor: "Mrs. Healy",
    email: "khealy@byramhills.net"
  },

  // ---------- SERVICE BASED ----------
  {
    name: "Byram Hills Sustainability Initiative",
    category: "Service Based",
    days: ["Wednesday"],
    meetingTime: "Every Wednesday",
    location: "Admin Conference Room",
    description: "Works to improve the environment and push for better sustainability practices at the school.",
    advisor: "Ms. Bogren",
    email: ""
  },
  {
    name: "Do Something Club",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "Once a month",
    location: "Room 119 (across from the theater)",
    description: "Meets monthly to run free or low-cost campaigns that make a difference, like leaving positive notes around school or making thank-you cards for teachers and custodians. Other campaigns cover the environment, racial equality, voting, and more.",
    advisor: "Ms. DeRosa",
    email: ""
  },
  {
    name: "Fuller Builders Club",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "Monthly (check the club's Google Classroom)",
    location: "TBD",
    description: "Fights poverty and homelessness by helping build low-income housing, and also helps with disaster relief. The club recently worked on a two-family home for low-income families in Chappaqua.",
    advisor: "Ms. Linares",
    email: "mlinares@byramhills.net"
  },
  {
    name: "Growth and Awareness Group for Alzheimer's (GAGA)",
    category: "Service Based",
    days: ["Monday", "Thursday"],
    meetingTime: "Usually Mondays and/or Thursdays after school",
    location: "Mr. Hubbs' Room",
    description: "Raises money and awareness to help end Alzheimer's disease. The club walks in the annual Walk to End Alzheimer's, runs bake sales and fundraisers, and has held a music event for memory care patients at the Bristal. Google Classroom code: hd5zs73.",
    advisor: "Ms. Dellacioppa",
    email: ""
  },
  {
    name: "Interact",
    category: "Service Based",
    days: ["Monday"],
    meetingTime: "Every other Monday at 2:30",
    location: "Room 108",
    description: "A community service club connected to the Armonk Rotary Club. It fundraises for groups like the Boys & Girls Club, Big Brothers Big Sisters, and Maria Fareri Children's Hospital, and throws a Halloween party for kids at the North Castle Public Library every year.",
    advisor: "Mr. Eagle",
    email: "eeagle@byramhills.net"
  },
  {
    name: "National Art Honor Society",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "Once a month (posted on Google Classroom)",
    location: "Room 316",
    description: "Uses art to serve the community. Activities include pumpkin painting, fundraisers, and art shows, plus projects with Coman Hill, Wampus, veterans, and children's hospitals.",
    advisor: "Ms. Karlin and Ms. Menasche",
    email: "jkarlin@byramhills.net,amenasche@byramhills.net"
  },
  {
    name: "One World Club",
    category: "Service Based",
    days: ["Thursday"],
    meetingTime: "Thursdays at 2:30",
    location: "TBD",
    description: "Raises money and awareness for local and global causes. Events include bake sales, a Mother's Day plant sale, a car wash, a benefit concert and talent show, and cooking brunch for the Ronald McDonald House.",
    advisor: "Mr. Lockwood",
    email: "alockwood@byramhills.net"
  },
  {
    name: "Paws for a Cause",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "About every three weeks, dates TBD",
    location: "Mrs. Barnum's Room",
    description: "A volunteer club that helps shelter animals in Westchester. Members partner with Paws Crossed in Elmsford to care for animals, spread awareness, and run fundraisers and donation drives.",
    advisor: "Ms. Barnum",
    email: "rbarnum@byramhills.net"
  },
  {
    name: "Shoot Your Shot",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "Once a month",
    location: "Room 424",
    description: "Collects and donates sports equipment to kids who can't afford it, so more kids get the chance to play.",
    advisor: "Mr. Bruskewicz",
    email: "dbruskewicz@byramhills.net"
  },
  {
    name: "Students Serving Soldiers",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "See advisor for details",
    location: "TBD",
    description: "Supports service members by sending care packages and letters, raising money for wounded soldiers and families of fallen soldiers, and volunteering at veterans events. Works with Operation Support Our Troops, Operation Gratitude, and Westchester County Veteran Affairs.",
    advisor: "Mr. Gulick",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Youth Against Cancer (YAC)",
    category: "Service Based",
    days: ["Tuesday", "Thursday"],
    meetingTime: "Tuesdays or Thursdays, once or twice a month",
    location: "Room 322",
    description: "Raises awareness about cancer prevention, detection, and treatment. The club raises money for groups like the American Cancer Society, Maria Fareri Children's Hospital, and Memorial Sloan Kettering, and takes part in local American Cancer Society events.",
    advisor: "Mr. Hubbs",
    email: "dhubbs@byramhills.net"
  },
  {
    name: "Youth to Youth (Y2Y)",
    category: "Service Based",
    days: ["Flexible"],
    meetingTime: "Twice a month after school",
    location: "Room 206",
    description: "Members pledge to stay drug- and alcohol-free and use positive peer pressure to encourage others to do the same. Open to all BHHS students.",
    advisor: "Ms. Pagan",
    email: "bpagan@byramhills.net"
  },

  // ---------- GENERAL INTERESTS ----------
  {
    name: "Art Works",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "TBD",
    location: "TBD",
    description: "A student-run art gallery that puts on themed shows during the year featuring work by students and staff, including painting, photography, music, and writing. Watch the Google Classroom for calls for entries, or help behind the scenes by learning to hang, mat, and select artwork.",
    advisor: "Ms. Karlin and Ms. Horn",
    email: "jkarlin@byramhills.net,lhorn@byramhills.net"
  },
  {
    name: "Byram Beat",
    category: "General Interests",
    days: ["Monday"],
    meetingTime: "Mondays 2:45-3:30",
    location: "Choir Room",
    description: "The school's only a cappella group. No audition or experience needed. The group rehearses pop songs and performs a few times during the year.",
    advisor: "Dr. Coates",
    email: "dcoates@byramhills.net"
  },
  {
    name: "Career Chats",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "Monthly after school, day TBD",
    location: "Room 108",
    description: "Students interview and talk with people working in different industries to explore possible career paths and get ready for the working world.",
    advisor: "Mr. Eagle",
    email: "eeagle@byramhills.net"
  },
  {
    name: "Ceramics Club",
    category: "General Interests",
    days: ["Monday"],
    meetingTime: "Every other Monday until 4:00",
    location: "Room 315",
    description: "A relaxed, creative place to work with clay, from hand sculpting to the pottery wheel. Open to everyone, no experience needed.",
    advisor: "Ms. Menasche",
    email: "amenasche@byramhills.net"
  },
  {
    name: "Chess Club",
    category: "General Interests",
    days: ["Thursday"],
    meetingTime: "Every other Thursday 2:30-3:30",
    location: "Room 418",
    description: "For anyone who likes chess, at any level. Boards are provided. Members play to improve and hang out, and the club also visits the Bristal to play chess with seniors. Munchkins provided.",
    advisor: "Mr. Kalish",
    email: "jkalish@byramhills.net"
  },
  {
    name: "Cooking and Baking Club",
    category: "General Interests",
    days: ["Wednesday"],
    meetingTime: "Every other Wednesday",
    location: "CCC",
    description: "Learn new recipes and cook and bake together with other students.",
    advisor: "Ms. Berman",
    email: "jberman@byramhills.net"
  },
  {
    name: "Film Club",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "TBD",
    location: "TBD",
    description: "Open to all students. Monthly activities include short film screenings, director Q&As, technical demos, and discussions about favorite movies. A good fit if you're interested in writing, directing, producing, acting, or editing.",
    advisor: "Ms. Medrano",
    email: "gmedrano@byramhills.net"
  },
  {
    name: "Interior Design Club",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "TBD",
    location: "TBD",
    description: "A fun, low-pressure club for designing spaces. Members learn to take measurements, recognize fabrics, woods, and colors, study design history, and see how a design business works with clients. Google Classroom code: a2au6wln.",
    advisor: "Mrs. Cohen",
    email: "ecohen@byramhills.net"
  },
  {
    name: "Lift Up",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "Once a month",
    location: "Weight Room",
    description: "Encourages students to get in shape and stay active, whether for sports or personal health. The club meets monthly to talk about workouts and nutrition and runs fundraisers for new weight room equipment.",
    advisor: "Mr. Twardy",
    email: "btwardy@byramhills.net"
  },
  {
    name: "Marketing & Media Club",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "See advisor for details",
    location: "TBD",
    description: "Runs like a student marketing and video studio. Members make content and campaigns for other clubs, school plays, athletics, and events like the Talent Show, and can join workshops on graphic design, video editing, and web design. Graphic designers and video editors are especially wanted.",
    advisor: "Mr. Melso",
    email: "bmelso@byramhills.net"
  },
  {
    name: "Outdoor Adventure Club",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "After school to prepare for trips",
    location: "TBD",
    description: "Gets students outside for hiking, fishing, kayaking, indoor rock climbing, and ropes courses, while building responsibility and teamwork. The club also helps with environmental cleanup days around Westchester.",
    advisor: "Mr. Gulick and Mr. Clark",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Reading Between the Lines",
    category: "General Interests",
    days: ["Wednesday"],
    meetingTime: "First Wednesday of the month 2:30-3:00",
    location: "Library",
    description: "A book club where members vote on a new book each month from different genres and discuss it together.",
    advisor: "Ms. Nardone",
    email: "lnardone@byramhills.net"
  },
  {
    name: "Strings and Things",
    category: "General Interests",
    days: ["Friday"],
    meetingTime: "Every Friday after school",
    location: "Room 114 (Science Research Room)",
    description: "Knitting, crochet, embroidery, sewing, and friendship bracelets. Members of all skill levels learn and teach each other, and give back through craft fairs and donations. A relaxing way to end the week.",
    advisor: "Dr. Matthew",
    email: "cmatthew@byramhills.net"
  },
  {
    name: "Talkin' Business",
    category: "General Interests",
    days: ["Tuesday"],
    meetingTime: "Once a month on Tuesdays after school",
    location: "Mr. Naughton's Room",
    description: "Learn about finance, real estate, and entrepreneurship from guest speakers. When there's no speaker, members pitch and develop their own business ideas in a Shark Tank style setup.",
    advisor: "Mr. Naughton",
    email: "jnaughton@byramhills.net"
  },
  {
    name: "Tech Club",
    category: "General Interests",
    days: ["Tuesday"],
    meetingTime: "Tuesdays after school",
    location: "TBD",
    description: "Members teach each other tech skills and work together on hardware and software projects, like building a website or a video game. Open to anyone who likes technology, no matter how much you already know.",
    advisor: "Mr. Lewick",
    email: "clewick@byramhills.net"
  },
  {
    name: "The Varley Players",
    category: "General Interests",
    days: ["Flexible"],
    meetingTime: "Based on each show's rehearsal calendar",
    location: "TBD",
    description: "The high school's theater group, putting on three shows a year from plays to musicals. Named after Joy Varley, who led the program for 28 years. This year is the group's 60th anniversary.",
    advisor: "Dr. Coates",
    email: "dcoates@byramhills.net"
  },
  {
    name: "Turning Point USA",
    category: "General Interests",
    days: ["Tuesday"],
    meetingTime: "First Tuesday of every month 2:30-3:15",
    location: "TBD",
    description: "A chapter of the national conservative student organization Turning Point USA. Members meet to learn about and discuss current events, with debates and chances for students to share their views.",
    advisor: "Ms. Montalbano",
    email: "mmontalbano@byramhills.net"
  }
];

function displayClubs() {
  const clubList = document.getElementById("clubList");
  clubList.innerHTML = "";

  CLUBS.forEach(club => {
    const card = document.createElement("div");
    card.className = "club-card";

    card.innerHTML = `
      <h2>${club.name}</h2>
      <span class="club-category">${club.category}</span>
      <p><strong>Days:</strong> ${club.days.join(", ")}</p>
      <p><strong>Meeting Time:</strong> ${club.meetingTime}</p>
      <p><strong>Location:</strong> ${club.location}</p>
      <p>${club.description}</p>
      <p><strong>Advisor:</strong> ${club.advisor}</p>
      ${club.email ? `<p><strong>Email:</strong> ${club.email.split(",").map(email => `<a href="mailto:${email.trim()}">${email.trim()}</a>`).join(", ")}</p>` : ""}
    `;

    clubList.appendChild(card);
  });
}
