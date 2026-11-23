// Add new clubs by copying one { ... } block and pasting it inside the brackets!
  const clubs = [
  // ===== ACADEMIC =====
  {
    name: "Academic Challenge",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Thursdays from 2:30-4:00",
    location: "Room 409",
    description: "This club is all about knowing random facts and having lightning reflexes. Two 4-person teams sit across from each other and listen as a moderator reads from a packet of questions. Each student has a buzzer to ring and answer the question. Questions may be about physics or politics or the Emmys—you never know. The Byram Hills Academic Team participates in many types of competitions. First there are your basic MACC and WACKO competitions with 4 rounds per game: Toss-up, Bonus, 60 Seconds, and Stump the Experts. As a plus, these competitions offer donuts or bagels to the students. Then, there is the NAQT with bonus questions and exciting topics dealing with current events. Sound fun? Well, it is. New members are always welcome.",
    advisor: "Mr. Gilbert",
    email: "mgilbert@byramhills.net"
  },
  {
    name: "AI Roundtable",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Every other Thursday from 2:30-3:15; additional sessions may be needed for guest speakers, research presentations, or policy project work",
    location: "Room 114",
    description: "The AI Roundtable is a student-led club that explores the impact of artificial intelligence (AI) on learning, memory, and cognitive development. Our mission is to promote the responsible and ethical use of AI among students by encouraging critical thinking, creativity, and collaboration. We aim to teach students how to utilize different AI platforms (ChatGPT, Canva, Gemini, Co-Pilot) as a learning tool, rather than as a substitute for critical thinking. Through debates, research projects, and discussions with educators, we aim to develop a model school policy that promotes the smarter and more ethical use of AI in our Byram Hills community.",
    advisor: "Mrs. Greenwald and Dr. Matthew",
    email: "sgreenwald@byramhills.net and cmatthew@byramhills.net"
  },
  {
    name: "Architecture Club",
    category: "Academic",
    days: ["Monday"],
    meetingTime: "First Monday of every month",
    location: "Room 423",
    description: "The purpose of the Architecture Club is to teach students interested in architecture more about the field, and to learn more about the architecture around us. Architecture is a popular field that involves creative elements, as well as math and science. Members of the club will get to do artistic activities like sculpting and drawing. They will also have opportunities to learn from guest speakers and possible field trips! This club will meet on the first Monday of every month.",
    advisor: "Ms. Sarracco",
    email: "csarracco@byramhills.net"
  },
  {
    name: "Astronomy Club",
    category: "Academic",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "If you have ever looked up at the night sky and wondered at the vast view of the stars and the worlds that we now know are pretty common, this might be the place for you. Astronomy is far more than just gazing at the night sky; did you know that looking up is like peering through a time machine into the distant past? Much of what we understand about the fundamental operating manual of our universe was learned simply by observing the cosmos. Driven by our members' curiosity, we will explore many different aspects of astronomy, ranging from the dynamics of our own solar system to local stellar groups and their surrounding exoplanets. We will also delve into exotic cosmic phenomena such as neutron stars, supermassive black holes, and the mysteries of deep space, alongside an occasional foray into the rich history and culture of astronomical observation. Our hands-on club activities include building educational presentations for younger students and partner schools, engaging in hands-on nighttime observation sessions using telescopes, analyzing real observational data, and examining the modern tools and methods astronomers use to investigate the surrounding universe.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Engineering Club",
    category: "Academic",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "This year, the Engineering Club and eNable Club have officially merged under the single banner of the Engineering Club. Building on eNable's rich history of designing and manufacturing 3D-printed assistive devices as well as the Engineering Club's focus on multidisciplinary technical projects, the newly unified club is expanding its mission to center heavily on community service and applied engineering. Members will engage in the end-to-end design, implementation, and maintenance of real-world solutions that directly benefit our school and local community. A core component of our activities includes collaborating with local programs such as the Learning Center Classroom (LCC) and Flexible Support Program (FSP) to develop custom assistive technologies, facility modifications, and operational tools. Through these hands-on initiatives, students will gain practical experience across mechanical, electrical, biomedical, and systems engineering disciplines. In addition to technical skills—ranging from Computer-Aided Design (CAD) modeling in Onshape to 3D printing, laser cutting, and embedded electronics—students will learn essential engineering management practices. The club will utilize Gantt charts, project management frameworks, and team-based workflows to coordinate timelines and allocate resources effectively. Whether designing supportive devices or building infrastructure for school activities, members will apply real-world engineering principles to make a meaningful, lasting impact.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Government & Politics Club",
    category: "Academic",
    days: ["Wednesday"],
    meetingTime: "Every other Wednesday after school",
    location: "Room 201",
    description: "The Government and Politics Club wants to give an opportunity to people who are interested in the modern world the opportunity to share their views through a civil discussion on a wide variety of subjects. Such subjects can include the election, major world events, and controversial laws and opinions that have been trending, and more. We want to provide an open floor to let people share their variety of views, no matter what they may be. We also want to give members a voice on the meeting's subjects by letting them choose a topic for our next meeting. We aspire to give an open space and have a fun time while potentially building relationships with people you may not have talked to before. (We also have cookies!) Anyone can join and is invited to, you don't need to talk, you can just listen to others and what they have to say. There are no prerequisites, just come, eat some cookies, and have a good time by sharing a couple laughs with us.",
    advisor: "Dr. Abt",
    email: "sabt@byramhills.net"
  },
  {
    name: "Math Team",
    category: "Academic",
    days: ["Monday"],
    meetingTime: "Monday from 2:30-3:30",
    location: "Room 418",
    description: "The goal of the BHHS Math Team is to provide a venue in which students who enjoy math can participate in a competitive manner (while eating donuts) with other mathletes sharing this interest on the school, county, state and national levels. Competitions are hosted every two weeks to a month and will involve donuts, while weekly meetings will have a variety of snacks including candy, chips, and oranges. You can work on homework (and get help), challenge yourself with past math competitions, and discuss interesting math related topics during meetings.",
    advisor: "Mr. Kalish",
    email: "jkalish@byramhills.net"
  },
  {
    name: "Mock Trial",
    category: "Academic",
    days: ["Tuesday"],
    meetingTime: "Tuesdays from 2:30-3:30 after school",
    location: "Room 411",
    description: "The Mock Trial Club is an association that looks at debatable cases of law that have been settled in the Courts of America. Both sides of a case are presented through evidence, witness affidavits, evidence and case law. The students who participate break down the case and act as lawyers and witnesses representing the two sides of the case. Here, students learn how to debate and how to put forward a case for their particular side: prosecution or defense. The Club participates in two competitions during the year including a county-wide tournament in March. Here, twelve to fifteen members of the club are selected to put on the case at the Westchester County Courthouse in front of a real judge in a real courtroom. If you are interested in learning more about the law and want to participate in lively debate, mock trial is certainly the club for you.",
    advisor: "Mr. Gilbert and Mr. Allen",
    email: "mgilbert@byramhills.net and mallen@byramhills.net"
  },
  {
    name: "Model United Nations",
    category: "Academic",
    days: [],
    meetingTime: "Contact advisor",
    location: "TBD",
    description: "Have you ever wondered what it takes to negotiate a peace treaty, resolve an international crisis, or represent a nation on the world stage? Model United Nations (Model UN) gives students the opportunity to step into the shoes of global diplomats and tackle some of the world's most pressing challenges. Through engaging simulations of the United Nations, members represent countries, debate international issues, build alliances, negotiate agreements, and collaborate to develop solutions to real-world problems. At Byram Hills, Model UN brings international affairs to life through lively debates, interactive committee simulations, and opportunities to compete at conferences hosted by colleges and universities. During weekly meetings, members develop essential skills in public speaking, diplomacy, critical thinking, research, and leadership while gaining a deeper understanding of global politics and international relations. Beyond the classroom, conferences offer students the chance to put their skills into practice, engage with delegates from other schools, and experience the excitement of international diplomacy firsthand. No prior experience is necessary, and students of all grade levels are welcome! Whether you're passionate about international affairs, looking to become a more confident public speaker, or simply eager to challenge yourself and meet new people, Model UN offers an exciting and supportive environment to learn, lead, and grow. Join us and discover the power of diplomacy, collaboration, and making your voice heard!",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "Peer Tutoring Club",
    category: "Academic",
    days: [],
    meetingTime: "Tutors meet once a month to review experiences (15-20 minutes)",
    location: "TBD",
    description: "The Peer Tutoring Club's goals are to set up students who are struggling with their classes with older students who know the material. This club operates on a volunteer basis where students are matched up with one another once the tutor is granted permission from their teacher of the past. To get the ball rolling, tutorees are asked to fill out a tutor form and submit it back to Mr. Allen.",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "The Pre-Pre Med Club",
    category: "Academic",
    days: ["Monday"],
    meetingTime: "First Monday of each month",
    location: "Room 209",
    description: "The Pre-Pre Med Club is a community for young students who are interested in pursuing a career in medicine and/or science. Our club provides a supportive environment for students for learn about the medical field, participate in relevant activities, and connect with like minded peers.",
    advisor: "Mr. Gulick",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Science Olympiad",
    category: "Academic",
    days: [],
    meetingTime: "Varies depending on the events and level of preparation",
    location: "TBD",
    description: "Science Olympiad is a national organization supported at the State and Regional level. The Science Olympiad C division, open to high school students from 9th to 12th grade, allows students to compete in three general categories of events for all disciplines of Science and Engineering with other schools. Some events are purely knowledge-based, consisting of a written exam testing students in specific areas. Other events are hands-on, requiring students to assemble or dissect objects during the actual event. Still others are 'build-based': students are expected to construct operational systems beforehand to be tested during the actual event. Of course, some events combine elements of all three, so be prepared for anything. During the 2024-25 season, the Science Olympiad team had two teams participate in the Regional competition at Byram Hills High School on February 8th, 2025. Approximately 900 students from 50 schools attended the competition, where students competed in 23 different events. The two teams finished 16th and 29th overall out of 50 teams in the Lower Hudson Valley Region, and Byram Hills students received medals in six of the events. In the 2009 season, as a first year team, Byram Hills took the Regional competition by surprise, finishing in third place with 7 medals in 16 events and qualifying for the State competition at West Point. Since then, Byram Hills has returned to the States 11 more times. In accordance with our push forward with STEAM initiatives, we will be having two teams at the Regional competition which will be once again, hosted by Byram Hills High School. It is our hope to continue growing and cultivating a love for all fields of Science and the Scientific method of discovery. If you have any questions, please be sure to contact any of the senior members of the club or our advisor.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Shark Tank Club",
    category: "Academic",
    days: [],
    meetingTime: "TBD (meets once a month)",
    location: "TBD",
    description: "Shark Tank Club meets once a month and gives students the chance to develop as entrepreneurs, sharpening their public speaking and pitching skills through hands-on projects such as product elevator pitches. Members learn to turn ideas into pitches, think on their feet, and lead with confidence in a dynamic, team-driven environment. Our mission is to build the innovation and communication skills students need to make an impact in their future careers and communities.",
    advisor: "Ms. Sheeley",
    email: "ksheeley@byramhills.net"
  },
  {
    name: "Speech and Debate",
    category: "Academic",
    days: ["Tuesday", "Thursday"],
    meetingTime: "Tuesdays and Thursdays 2:30-4:00",
    location: "TBD",
    description: "Students work together to learn basic speech and debating skills, researching and writing casework to compete in local, regional and national tournaments which include a variety of Speech (Oratory, Interpretation, and Extemporaneous) and Debate (Lincoln-Douglas and Public Forum) events. The team meets every Tuesday and Thursday, with additional work at home to prepare for the weekend debate tournaments that run Saturdays, with many events beginning Fridays, and continuing into Saturday.",
    advisor: "Mr. Andriello (Head Coach) and Ms. Smith (Assistant Coach)",
    email: "tandriello@byramhills.net and ksmith@byramhills.net"
  },
  {
    name: "Students Who Code",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Thursday in room 417 after school",
    location: "Room 417",
    description: "The Byram Hills Students Who Code Club provides students with the means, knowledge, and opportunity to explore and participate in coding and software. The Students Who Code Club seeks to prepare BHHS students with 21st century skills and the confidence to pursue future careers in STEM. This year, the club will be teaching the basics of website development whilst coding a website to organize Byram Hills school-wide clubs. The club will also host a series of discussions on the current culture of technology and the importance of expanding computer science education.",
    advisor: "Mr. Lewick",
    email: "clewick@byramhills.net"
  },

  // ===== COMMUNITY BUILDING =====
  {
    name: "Allergy Awareness Club",
    category: "Community Building",
    days: [],
    meetingTime: "Once a month",
    location: "Room 318",
    description: "The Allergy Awareness Club's mission is to bring out allergy awareness at Byram Hills. Any money we collect will be donated to allergy research and to buy allergy friendly foods that will be donated to families who are underprivileged. We will be working with the organization Free From Market. The families that work with Free From Market have one or more family members that have an allergy. Students who are passionate about making a difference in the allergy community and desire to get involved in high school should join the AAC in the fight for allergy awareness!",
    advisor: "Mrs. Cohen",
    email: "ecohen@byramhills.net"
  },
  {
    name: "Arch Yearbook",
    category: "Community Building",
    days: ["Thursday"],
    meetingTime: "Thursdays after school",
    location: "Room 215",
    description: "Students involved in this club take on the responsibility for producing the Arch yearbook. Students have the chance to assume leadership roles as editors, writers, designers, photographers, and business managers, while collaborating with other students to plan and create content, meet deadlines, and interact with students, parents, administrators, and community members. Staff members also have opportunities to attend national journalism conferences at Columbia University and workshops elsewhere to learn cutting-edge trends in both print and digital journalism. For questions regarding school pictures, contact Lifetouch/Prestige Portraits: 800-426-9533",
    advisor: "Ms. Vernola",
    email: "svernola@byramhills.net"
  },
  {
    name: "The Canvas",
    category: "Community Building",
    days: ["Wednesday"],
    meetingTime: "Every other Wednesday",
    location: "Mrs. Horn's Room",
    description: "The Canvas! This is a student run art and literary publication that includes poetry, short stories, and various forms of artwork. Through our winter and spring issues, we seek to expose the creative works of Byram Hills students and faculty.",
    advisor: "Mrs. Horn",
    email: "lhorn@byramhills.net"
  },
  {
    name: "Fighting Anti Semitism Club",
    category: "Community Building",
    days: ["Tuesday"],
    meetingTime: "Tuesdays after school, once a month",
    location: "Room 213",
    description: "The Byram Hills Fighting Against Anti-Semitism club believes that through education, antisemitism can be prevented in our community. We look at current events while also acknowledging history, when necessary. The FAAS club is a judgement free space for students to share any past experiences regarding antisemitism. While a presentation is usually made, student participation and involvement is something we value. All Byram Hills students, Jewish and non-Jewish are welcome to participate.",
    advisor: "Ms. Squadron",
    email: "lsquadron@byramhills.net"
  },
  {
    name: "GSA: Gender and Sexuality Alliance",
    category: "Community Building",
    days: ["Monday"],
    meetingTime: "Most Mondays after school",
    location: "Band Room",
    description: "The goal of the Genders and Sexualities Alliance Club (GSA) is to improve the environment and the community at Byram Hills. We strive to educate and spread knowledge and awareness about the issues that have an impact on gay, lesbian, straight, bisexual, transgender, and questioning youth. We want this club to represent the best of Byram Hills--respect for others regardless of who they are. Help us create a more welcoming school here at Byram Hills!",
    advisor: "Mrs. Horn",
    email: "lhorn@byramhills.net"
  },
  {
    name: "High School Science Ambassadors",
    category: "Community Building",
    days: [],
    meetingTime: "See advisor for details",
    location: "TBD",
    description: "High School Science Ambassadors, or HSSA, is a club for students who love science and want to share their passion with elementary students. In this club, members will make videos of science experiments which will be shared with a 2nd grade class. While this club will be a lot of fun, members should also know that they will have to put in some work to ensure that all of our videos are complete. We would like to make at least 5 videos this school year.",
    advisor: "Mr. Borneman",
    email: "sborneman@byramhills.net"
  },
  {
    name: "Helping Young People Excel (H.Y.P.E.)",
    category: "Community Building",
    days: [],
    meetingTime: "Once a month",
    location: "Room 215",
    description: "The purpose of Helping Young People Excel is to develop an awareness, understanding, and connection between Byram Hills High School students and members of the community who have special needs. We plan monthly events during which we engage in fun and skill-building activities such as crafts, games, and snack making. This experience allows Byram Hills students and the guests to expand their understanding and acceptance of all individuals.",
    advisor: "Ms. Lewis",
    email: "klewis@byramhills.net"
  },
  {
    name: "Medequity",
    category: "Community Building",
    days: ["Wednesday"],
    meetingTime: "Wednesdays twice a month from 2:30-3:00",
    location: "CCC",
    description: "MedEquity is a student-led organization dedicated to promoting health equality throughout Westchester by providing essential medical supplies to underserved communities and raising awareness about overlooked medical issues and diseases. Our mission is to educate students about the causes they support and empower them to take meaningful action, making a positive impact on public health. The club focuses on medical concerns that often go unnoticed, rotating its attention every few months to highlight various health disparities. Through donation drives, volunteer events, and student-led educational presentations, MedEquity encourages compassion, community connection, and lasting engagement.",
    advisor: "Mrs. Berman",
    email: ""
  },
  {
    name: "Native American Rights Fund",
    category: "Community Building",
    days: [],
    meetingTime: "Contact advisor for details (meets once a month after school)",
    location: "TBD",
    description: "The Native American Rights Fund raises awareness for Native American Reservations nationwide! We hope to build a community that inspires hope for future generations of the Native American community. We meet once a month after school and food is provided! We are excited about this year and have new and exciting things planned.",
    advisor: "Ms. Mirsky",
    email: "mmirsky@byramhills.net"
  },
  {
    name: "The Oracle",
    category: "Community Building",
    days: ["Monday", "Tuesday"],
    meetingTime: "Mondays and/or Tuesdays; dates are posted in the Google Classroom. Email bhhsoracle@byramhills.net to join",
    location: "TBD",
    description: "The Oracle is the Byram Hills High School newspaper. We are dedicated to helping students build skills in journalism and public expression, in addition to helping students establish a sense of community. The Oracle publishes new articles online daily throughout the year. Articles focus on issues that concern students in Byram Hills and the community at large.",
    advisor: "Mrs. Eshoo",
    email: "ceshoo@byramhills.org"
  },
  {
    name: "Social Media and Content Creation Club",
    category: "Community Building",
    days: ["Monday"],
    meetingTime: "First Monday of every month starting at 2:30",
    location: "Room 419",
    description: "The Media Literacy Club is about learning more about social media, marketing, and advertising. We'll talk about popular trends, how brands promote themselves, and how to stay safe and smart while using social media. We'll also do fun activities and share ideas about what we see on social media.",
    advisor: "Mr. Ramos",
    email: "lramos@byramhills.net"
  },
  {
    name: "Students Against Destructive Decisions (SADD)",
    category: "Community Building",
    days: [],
    meetingTime: "Once a month",
    location: "Room 206",
    description: "SADD is a student-led club focusing on making positive choices and encouraging others to do the same. We work to spread awareness about the dangers of risky behaviors like substance use, reckless driving and peer pressure while promoting safe, healthy alternatives. Through school events, campaigns, and community outreach, we strive to create a supportive environment where every student can feel empowered to make smart devisions. Join us in making a difference and being a voice for change!",
    advisor: "Mr. Carpenter",
    email: "dcarpenter@byramhills.net"
  },
  {
    name: "Student Athletic Leadership Club (SALT/FAST)",
    category: "Community Building",
    days: [],
    meetingTime: "Contact advisor for details",
    location: "TBD",
    description: "The Student Athletic Leadership Club (SALT and/or FAST for short) aims to foster a culture of sportsmanship and leadership among student-athletes. Our mission is to engage and educate students about the values of teamwork, respect, and integrity both on and off the field. Through workshops at HCC- we aim to empower students to become role models in athletics, promoting a positive and inclusive environment where every participant can thrive.",
    advisor: "Ms. Healy and Ms. Mirsky",
    email: "khealy@byramhills.net and mirsky@byramhills.net"
  },
  {
    name: "Students of Cultural Association (SOCA)",
    category: "Community Building",
    days: [],
    meetingTime: "Every other week, dates TBD",
    location: "TBD",
    description: "Students in this club work to empower students from different backgrounds, celebrate cultural diversity, and foster inclusivity within the school community. Together we will plan and carry out events aligned with cultural and heritage months, organize volunteer opportunities, and participate in discussions that promote awareness.",
    advisor: "Mr. Torres",
    email: "rtorres@byramhills.net"
  },
  {
    name: "Student Wellness Advisory Committee",
    category: "Community Building",
    days: ["Wednesday"],
    meetingTime: "Once a month on Wednesdays",
    location: "Room 203",
    description: "Are you interested in helping students remain stress-free and thrive at Byram Hills? If so, the Student Wellness Advisory Committee (SWAC) may be the right club for you. We create and organize events which promote positive ways to deal with our emotions and improve mental health. Our largest event of the year is Wellness Day, where we invite professionals to speak about the most pressing issues affecting students. In addition, they provide new and different ways to cope with any issues students may be facing. We give a platform for students to improve their well-being when they may be struggling or scared to speak about the issues which are impacting them.",
    advisor: "Mrs. Healy",
    email: "kealy@byramhills.net"
  },

  // ===== SERVICE BASED =====
  {
    name: "The Byram Hills Sustainability Initiative",
    category: "Service Based",
    days: ["Wednesday"],
    meetingTime: "Every Wednesday",
    location: "Admin Conference Room",
    description: "The mission of The Byram Hills Sustainability Initiative is dedicated to improving the environment and advocating for positive change and improvement of our school's sustainability practices.",
    advisor: "Ms. Bogren",
    email: ""
  },
  {
    name: "Do Something Club",
    category: "Service Based",
    days: [],
    meetingTime: "Once a month",
    location: "Room 119 (across from the theater)",
    description: "The DoSomething Club's goal is to bring students together to create change and make a positive impact on the world. To do this, the club will meet once a month to complete campaigns that cost almost nothing to students. There are a multitude of amazing campaigns to take part in. Some campaigns are as simple as leaving positive post-it notes around school (on bathroom mirrors and lockers) to brighten someone's day or recognizing everyday heroes like teachers and custodians with cards of appreciation. Additionally, there are campaigns that address environmental issues, racial inequality, voting, and so much more. The final goal of this club is to make these acts of kindness available to all members of the school community. It's important to show high school students that they can create change and make a positive impact on the world all on their own.",
    advisor: "Ms. DeRosa",
    email: ""
  },
  {
    name: "Fuller Builders Club",
    category: "Service Based",
    days: [],
    meetingTime: "Monthly; check the Fuller Builders Club Google Classroom for meeting information",
    location: "TBD",
    description: "The Fuller Builders Club meets monthly with announcements coming via the Fuller Builders Club Google Classroom. The club meetings are usually to discuss upcoming builds in the area. We work to fight poverty and homelessness by building low-income housing. Just recently, the club worked on the construction of a building in Chappaqua that will be made into a two family home for two low income families. We also work to aid in disaster relief.",
    advisor: "Ms. Linares",
    email: "mlinares@byramhill.net"
  },
  {
    name: "Growth and Awareness Group for Alzheimer's",
    category: "Service Based",
    days: ["Monday", "Thursday"],
    meetingTime: "Typically Monday and/or Thursday after school",
    location: "Mr. Hubbs' Room",
    description: "The Growth and Awareness Group for Alzheimer's (GAGA) is aiming to help fight to end Alzheimer's disease. We can fight for the families witnessing their loved ones deteriorate. We can fight for the 44 million people worldwide suffering. And finally, we can fight for future generations who should never have to face such a tragic disease. In order to reach this goal, GAGA participates in the annual Walk to End Alzheimer's. The event is a super exciting time for GAGA as we celebrate our work and walk alongside hundreds of others fighting for the same cause. We also organize bake sales, host fundraisers at local retail shops, and are even planning a gaga tournament to raise money! Last but not least, our club has visited the Bristal in Armonk and conducted a music therapy event with memory care patients; we hope to plan more of these events this year. Join our Google Classroom with code \"hd5zs73\", and sign up for the walk or donate using this link: http://act.alz.org/goto/GAGA_BHHS",
    advisor: "Ms. Dellacioppa",
    email: ""
  },
  {
    name: "Interact",
    category: "Service Based",
    days: ["Monday"],
    meetingTime: "Every other Monday at 2:30",
    location: "Room 108",
    description: "The Interact Club is a community service club affiliated with the Armonk Rotary Club. The goal of the Interact Club is to provide young people with fun, meaningful community service opportunities while developing their leadership and interpersonal skills. The Interact Club supports a number of organizations through its fundraisers. In the past, we have worked with the Boys & Girls Club of America, Big Brothers Big Sisters, Maria Fareri Children's Hospital, Child's Play, the Pulsera Project, Team Rubicon, PolioPlus, and more. Additionally, every year, the Interact Club holds a Halloween Party at the North Castle Public Library in which younger children participate in Halloween festivities. The Interact Club is always looking for new members. If you have an interest in any of the causes we support or genuinely enjoy helping people in need, feel free to come to one of our meetings.",
    advisor: "Mr. Eagle",
    email: "eeagle@byramhills.net"
  },
  {
    name: "National Art Honors Society",
    category: "Service Based",
    days: [],
    meetingTime: "Once a month (posted on Classroom)",
    location: "Room 316",
    description: "We work to promote artistic expression and creativity through acts of service and community. In NAHS, we participate in many activities such as pumpkin painting, fundraisers, and art shows with the Byram Hills Community and surrounding organizations. In the past, we have worked with Coman Hill and Wampus, veterans and children's hospitals in order to share our passion and creativity.",
    advisor: "Ms. Karlin and Ms. Menashe",
    email: ""
  },
  {
    name: "One World Club",
    category: "Service Based",
    days: ["Thursday"],
    meetingTime: "Thursdays at 2:30",
    location: "TBD",
    description: "We aim to provide many opportunities for students to become proactive and responsible citizens by participating in or attending charity events and fundraisers that raise awareness and funds for various global and local organizations in need. Club events and activities include bake sales, a Mother's Day plant sale, cooking brunch for the Ronald McDonald House, an annual car wash, and an annual benefit concert/talent show.",
    advisor: "Mr. Lockwood",
    email: "alockwood@byramhills.net"
  },
  {
    name: "Paws for a Cause",
    category: "Service Based",
    days: [],
    meetingTime: "Every three weeks, times and dates TBD",
    location: "Mrs. Barnum's Room",
    description: "Paws for a Cause is a student-run volunteer club dedicated to supporting animal welfare in Westchester County. Our club allows us to make a difference for shelter animals. We are partnering with Paws Crossed in Elmsford to provide consistent animal care, raise awareness about animal welfare, and organize fundraising/donation drives to supply shelters with necessary resources. We will meet approximately every three weeks to discuss plans in Mrs. Barnum's room to visit Paws Crossed and fundraising.",
    advisor: "Ms. Barnum",
    email: "rbarnum@byramhills.net"
  },
  {
    name: "Shoot Your Shot",
    category: "Service Based",
    days: [],
    meetingTime: "Once a month",
    location: "Room 424",
    description: "The shoot your shot club is dedicated to donating sports equipment to underprivileged kids throughout the state, and hopefully even the country. Sports equipment is taken by granted by many kids, and it is a vital aspect of every child's life. The shoot your shot club wants to be able to help these kids use sports as a way to achieve their dreams, and additionally use sports as an escape and something they can go to when they need it.",
    advisor: "Mr. Bruskewicz",
    email: "dbruskewicz@byramhills.net"
  },
  {
    name: "Students Serving Soldiers",
    category: "Service Based",
    days: [],
    meetingTime: "See advisor for details",
    location: "TBD",
    description: "We raise awareness about the sacrifices servicemen and women make. We send care packages and letters to warzones to provide support and make their deployment a little bit easier. Raise money for wounded servicemen and women that can be used to make rehabilitation easier. We also raise money to support the families of fallen servicemen and women. Organizations we work with include OSOT (Operation Support our Troops), Operation Gratitude, and the Westchester County Department of Veteran Affairs. Ways to reach our goals include bake sales, collecting supplies, volunteering at events that support veterans, and visiting wounded warriors.",
    advisor: "Mr. Gulick",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Youth Against Cancer",
    category: "Service Based",
    days: ["Tuesday", "Thursday"],
    meetingTime: "Tuesdays or Thursdays, once or twice a month",
    location: "Room 322",
    description: "The primary purpose of YAC is to raise awareness in the school and community about cancer, its prevention, detection and treatment. Throughout the year, the club raises money for the American Cancer Society, Brain Tumor Network, Soul Ryders, Maria Fareri Children's Hospital, Children's Cancer Research Fund, Memorial Sloan Kettering Giving, Ty Louis Campbell Foundation. In addition, our members participate in local events sponsored by the American Cancer Society.",
    advisor: "Mr. Hubbs",
    email: "dhubbs@byramhills.net"
  },
  {
    name: "Youth to Youth",
    category: "Service Based",
    days: [],
    meetingTime: "Twice a month after school",
    location: "Room 206",
    description: "BHHS Y2Y is a club that believes in the power of youth to influence their peers through positive peer pressure. Members of Y2Y pledge to be drug and alcohol-free, and work toward influencing their peers to do the same. Activities are focused on raising awareness of the risks associated with drug and alcohol use and making healthy decisions. Participation in Y2Y is open to all BHHS students.",
    advisor: "Ms. Pagan",
    email: "bpagan@byramhills.net"
  },

  // ===== GENERAL INTERESTS =====
  {
    name: "Art Works",
    category: "General Interests",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "The Byram Hills Art Gallery/BH Art Works is a student-run art gallery that creates a series of themed art exhibitions throughout the school year. We showcase the extraordinary talent and creativity of The Byram Hills High School students, faculty, and staff while giving the community an opportunity for recognition. If you'd like to showcase your artistic talents, just look in our Google Classroom for upcoming announcements and Calls for Entries. Our themed shows will include opportunities for many disciplines (including music, writing, painting, photography, etc.). If you are interested in setting up the gallery and learning skills such as hanging and matting artwork, howt o compose a gallery, and how to select artwork, we are always looking for behind the scenes help.",
    advisor: "Ms. Karlin and Ms. Horn",
    email: "jkarlin@byramhills.net and lhorn@byramhills.net"
  },
  {
    name: "Byram Beat",
    category: "General Interests",
    days: ["Monday"],
    meetingTime: "Mondays 2:45-3:30",
    location: "Choir Room",
    description: "Byram Hills' only acapella club is open to all students regardless of training or experience. The Byram Beat is a non-auditioned vocal group which rehearses after school on Tuesdays and performs periodically throughout the school year. The goal of the club is to provide an all inclusive singing experience to those interested in acapella singing and to prepare and perform selections from popular music.",
    advisor: "Dr. Coates",
    email: "dcoates@byramhills.net"
  },
  {
    name: "Career Chats",
    category: "General Interests",
    days: [],
    meetingTime: "Monthly after school, day of the week TBD",
    location: "Room 108",
    description: "The Career Chats club inspires curiosity, enhances career readiness, and broadens exploration among Byram Hills students. Through meaningful interactions and interviews with industry professionals, students will gain a clear vision of future career paths, equipping them with the confidence and optimism to discover their passions and excel in the workforce of tomorrow.",
    advisor: "Mr. Eagle",
    email: "eeagle@byramhills.net"
  },
  {
    name: "Ceramics Club",
    category: "General Interests",
    days: ["Monday"],
    meetingTime: "Every other Monday until 4 pm",
    location: "Room 315",
    description: "The Ceramics Club offers an outlet of creativity for people interested in the arts and looking to try something new. Our club provides a fun, creative, supportive and relaxing environment for all members after school! From sculpting to shaping clay on the wheel, this club is open to all students regardless of past experience.",
    advisor: "Ms. Menasche",
    email: "amenasche@byramhills.net"
  },
  {
    name: "Chess Club",
    category: "General Interests",
    days: ["Thursday"],
    meetingTime: "Every other Thursday 2:30-3:30",
    location: "Room 418",
    description: "The Chess club is for anyone who enjoys chess. All levels are welcome and we provide boards and pieces. The goal of the club is for students to get better at chess and socialize with friends. In addition, we will go to the Bristal to play chess with the Seniors there. The club meets on the first and third Tuesday of each month from 2:30-3:30 in room 418. Munchkins will be provided!",
    advisor: "Mr. Kalish",
    email: "jkalish@byramhills.net"
  },
  {
    name: "Cooking and Baking Club",
    category: "General Interests",
    days: ["Wednesday"],
    meetingTime: "Every other Wednesday",
    location: "CCC",
    description: "The Cooking and Baking Club is a great opportunity for students to not only engage with their peers but also have the ability to learn fun and exciting recipes to make and create. The club allows students to take part in collaborative recipes every other Wednesday in Room 317.",
    advisor: "Ms. Berman",
    email: "jberman@byramhills.net"
  },
  {
    name: "Film Club",
    category: "General Interests",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "Open to all students at any level & interest, the Film Club provides an opportunity for students to be part of something fun, creative, and in a friendly environment. It's the perfect way to enjoy quality screen time from the comfort of your sofa; monthly topics include short film screenings, director Q&As, interviews, technical demonstrations, and lively discussions about movies we've seen and loved! If you are interested in watching movies and learning how to create them, attend a meeting of the Film Club at Byram. With this club, you can explore your interest in the film industry, such as writing, directing, producing, acting, and film editing.",
    advisor: "Ms. Medrano",
    email: "gmedrano@byramhills.net"
  },
  {
    name: "Interior Design Club",
    category: "General Interests",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "The Interior Design Club provides a safe space for BHHS students to design, learn, and have fun. Members develop many new skills, such as collecting measurements and calculating data, recognizing fabrics/woods/textures/and colors, building a successful business, dealing with clientele, knowledge of art history/past trends, and working as a team. Whether you plan on majoring in art or are just looking for a low-stakes, fun, and creative environment, The Interior Design Club is open to all interested! Class Code: a2au6wln",
    advisor: "Mrs. Cohen",
    email: "ecohen@byramhills.net"
  },
  {
    name: "Lift Up",
    category: "General Interests",
    days: [],
    meetingTime: "Once a month",
    location: "Weight Room",
    description: "Our mission as a club is to encourage the student body to stay or get into shape. Whether it is for personal well being or working out for athletics we strive to promote all forms of exercise. Our club will be running some fundraisers to fund new equipment for the weight room. We will meet once a month to discuss dieting and exercise plans.",
    advisor: "Mr. Twardy",
    email: "btwardy@byramhills.net"
  },
  {
    name: "Marketing & Media Club",
    category: "General Interests",
    days: [],
    meetingTime: "See advisor for details",
    location: "TBD",
    description: "The Marketing & Media Club is perfect for students who have interests in digital marketing, media production, social media, communications, and design. We work as a marketing and production studio where each student has the opportunity to take on different roles to create content and marketing campaigns. Students learn to work as content creators, graphic designers, marketers, talent, and team members. We constantly have projects in production, so students can jump in and help when their schedules allow. This year's focus includes group marketing brainstorming sessions to help advocate and advertise for other clubs or events; district-based marketing/media projects; individual or group workshops based on student interest such as Knowing Your Target Audience, How to Reach Your Target Audience, Platform Usage, Photoshop, Video Content during a Pandemic, Video Editing, Front End Web Design, Graphic Design, and more; social media production for athletics including interviews for instagram content; and marketing projects for school plays, and general events like the Talent Show and Halloween Costume Contest. We are looking for Graphic Designers and video editors to make production easier.",
    advisor: "Mr. Melso",
    email: "bmelso@byramhills.net"
  },
  {
    name: "Outdoor Adventure Club",
    category: "General Interests",
    days: [],
    meetingTime: "After school to prepare for scheduled events like hiking, fishing, kayaking, indoor rock climbing, and ropes courses",
    location: "TBD",
    description: "The Outdoor Adventure Club is an organization designed to create opportunities for its members to appreciate the great outdoors and its many wonders. Club members are faced with outdoor challenges both as individuals and as a group. Each member is encouraged to understand the importance of responsibility for self and others and being dependable, especially in the outdoors. The club also participates in many community events, such as environmental cleanup days across Westchester County.",
    advisor: "Mr. Gulick and Mr. Clark",
    email: "jgulick@byramhills.net and jclarck@bryamhills.net"
  },
  {
    name: "Reading Between the Lines",
    category: "General Interests",
    days: ["Wednesday"],
    meetingTime: "Every first Wednesday of the month from 2:30-3:00",
    location: "Library",
    description: "We hope to encourage more discussions about literature and create a space where students can learn from the perspectives of others! The Reading Between the Lines Club meets the second Wednesday of every month in the library. Each month we vote on a new book from a variety of different genres.",
    advisor: "Ms. Nardone",
    email: "lnardone@byramhills.net"
  },
  {
    name: "Strings and Things",
    category: "General Interests",
    days: ["Friday"],
    meetingTime: "Every Friday after school",
    location: "Room 114 (Science Research Room)",
    description: "The Byram Hills Strings and Things Club is an interest club about all things, knitting, crochet, embroidery, sewing, string and friendship bracelets. We have it all! We meet to learn and teach new skills and create together, a fun and relaxing way to end the week. We welcome people of all skills and levels to strive to create a helpful, uplifting and productive community for everyone to practice their craft and give back through craft fairs and donations.",
    advisor: "Dr. Matthew",
    email: "cmatthew@byramhills.net"
  },
  {
    name: "Talkin' Business",
    category: "General Interests",
    days: ["Tuesday"],
    meetingTime: "Once a month on Tuesdays after school",
    location: "Mr. Naughton's Room",
    description: "Talkin' Business is a group that will allow you to learn the ways of entrepreneurship and business in a fun and outgoing environment. We will be having meetings 1-2 times a month in which we will gain knowledge about finance, real estate, entrepreneurship, and more from a first-hand perspective. We hope that hearing from multiple business gurus during guest speaker days will inspire you all to gain interest and potentially follow careers in this field. In the case where we are not hearing from a speaker, we will work in a \"shark tank\" environment where YOU will have the opportunity to collaborate with your peers and bring new ideas to the table.",
    advisor: "Mr. Naughton",
    email: "jnaughton@byramhills.net"
  },
  {
    name: "Tech Club",
    category: "General Interests",
    days: ["Tuesday"],
    meetingTime: "Tuesdays after school",
    location: "TBD",
    description: "To teach those who want to learn various technology-related skills. The Tech Club is open to anyone who has a passion for technology. Anyone who wants to come in and learn from someone who enjoys teaching the subject. If there aren't any club members well-versed on the topic, they may be able to find another person also interested in learning the same topic, and may be able to work with that person. To allow those who have technology related knowledge to solidify that knowledge by teaching it. Teaching a topic can help the teacher to better understand the subject, and may offer them a new perspective on the topic. In the case of the Tech Club, teachers will be the members of the club, and won't necessarily be expected to know everything about what they're teaching, but will be encouraged to share what they know. Working together, members of the Tech Club can fine tune their skills by creating useful and/or interesting hardware or software projects. Members can show each other different ways to approach and solve a problem. Some potential projects include designing a website or creating a video game.",
    advisor: "Mr. Lewick",
    email: "clewick@byramhills.net"
  },
  {
    name: "The Varley Players",
    category: "General Interests",
    days: [],
    meetingTime: "Based on rehearsal calendar for each show; see advisor for details",
    location: "TBD",
    description: "The Varley Players are the Theatrical Performing Arts Ensemble of Byram Hills High School. They produce three shows a year, ranging from plays to musical theatre. They are named after longtime director and supporter Joy Varley who helmed and helped guide the program for 28 years as a teacher and Director of Fine Arts. This is the 60th Anniversary of the Varley Players!",
    advisor: "Dr. Coates",
    email: "dcoates@byramhills.net"
  },
  {
    name: "Turning Point USA",
    category: "General Interests",
    days: ["Tuesday"],
    meetingTime: "First Tuesday of every month 2:30-3:15 pm",
    location: "TBD",
    description: "Our Mission for this Turning Point USA club is ultimately to bring other students with similar views to come together and talk about all of the crises occurring in today's world. After witnessing the loss of Charlie Kirk and watching how much of an impact he has created, we would love to continue his legacy. Our plan is to begin by starting a chapter directly affiliated with the Turning Point USA program so that we can truly make a difference and become active participants. This club will serve largely for educational purposes, but will also include debates and other opportunities for students to speak up on our discussed topics.",
    advisor: "Ms. Montalbano",
    email: "mmontalbano@byramhills.net"
  }
  {
    name: "Architecture Club",
    category: "General Interests",
    days: ["Monday"],
    meetingTime: "First Monday of every month in Room 423",
    location: "Room 423",
    description: "The purpose of the Architecture Club is to teach students interested in architecture more about the field, and to learn more about the architecture around us. Architecture is a popular field that involves creative elements, as well as math and science. Members of the club will get to do artistic activities like sculpting and drawing. They will also have opportunities to learn from guest speakers and possible field trips! This club will meet on the first Monday of every month.",
    advisor: "Ms. Sarracco",
    email: "csarracco@byramhills.net"
  }
  {
    name: "Academic Challenge",
    category: "Academic & Competition",
    days: ["Thursday"],
    meetingTime: "Thursdays from 2:30-4:00 in Room 409",
    location: "Room 409",
    description: "This club is all about knowing random facts and having lightning reflexes. Two 4-person teams sit across from each other and listen as a moderator reads from a packet of questions. Each student has a buzzer to ring and answer the question. Questions may be about physics or politics or the Emmys—you never know. The Byram Hills Academic Team participates in many types of competitions. First there are your basic MACC and WACKO competitions with 4 rounds per game: Toss-up, Bonus, 60 Seconds, and Stump the Experts. As a plus, these competitions offer donuts or bagels to the students. Then, there is the NAQT with bonus questions and exciting topics dealing with current events. Sound fun? Well, it is. New members are always welcome.",
    advisor: "Mr. Gilbert",
    email: "mgilbert@byramhills.net"
  },
  {
    name: "AI Roundtable",
    category: "STEM & Technology",
    days: ["Thursday"],
    meetingTime: "Every other Thursday from 2:30-3:15 in Room 114 (Additional sessions may be needed for guest speakers, research presentations, or policy project work etc.)",
    location: "Room 114",
    description: "The AI Roundtable is a student-led club that explores the impact of artificial intelligence (AI) on learning, memory, and cognitive development. Our mission is to promote the responsible and ethical use of AI among students by encouraging critical thinking, creativity, and collaboration. We aim to teach students how to utilize different AI platforms (ChatGPT, Canva, Gemini, Co-Pilot) as a learning tool, rather than as a substitute for critical thinking. Through debates, research projects, and discussions with educators, we aim to develop a model school policy that promotes the smarter and more ethical use of AI in our Byram Hills community.",
    advisor: "Mrs. Greenwald and Dr. Matthew",
    email: "sgreenwald@byramhills.net, cmatthew@byramhills.net"
  },
  {
    name: "Astronomy Club",
    category: "STEM & Technology",
    days: ["TBD"],
    meetingTime: "TBD",
    location: "TBD",
    description: "If you have ever looked up at the night sky and wondered at the vast view of the stars and the worlds that we now know are pretty common, this might be the place for you. Astronomy is far more than just gazing at the night sky; did you know that looking up is like peering through a time machine into the distant past? Much of what we understand about the fundamental operating manual of our universe was learned simply by observing the cosmos. Driven by our members' curiosity, we will explore many different aspects of astronomy, ranging from the dynamics of our own solar system to local stellar groups and their surrounding exoplanets. We will also delve into exotic cosmic phenomena such as neutron stars, supermassive black holes, and the mysteries of deep space, alongside an occasional foray into the rich history and culture of astronomical observation. Our hands-on club activities include building educational presentations for younger students and partner schools, engaging in hands-on nighttime observation sessions using telescopes, analyzing real observational data, and examining the modern tools and methods astronomers use to investigate the surrounding universe.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Engineering Club",
    category: "STEM & Technology",
    days: ["TBD"],
    meetingTime: "TBD",
    location: "TBD",
    description: "This year, the Engineering Club and eNable Club have officially merged under the single banner of the Engineering Club. Building on eNable's rich history of designing and manufacturing 3D-printed assistive devices as well as the Engineering Club's focus on multidisciplinary technical projects, the newly unified club is expanding its mission to center heavily on community service and applied engineering. Members will engage in the end-to-end design, implementation, and maintenance of real-world solutions that directly benefit our school and local community. A core component of our activities includes collaborating with local programs such as the Learning Center Classroom (LCC) and Flexible Support Program (FSP) to develop custom assistive technologies, facility modifications, and operational tools. Through these hands-on initiatives, students will gain practical experience across mechanical, electrical, biomedical, and systems engineering disciplines. In addition to technical skills—ranging from Computer-Aided Design (CAD) modeling in Onshape to 3D printing, laser cutting, and embedded electronics—students will learn essential engineering management practices. The club will utilize Gantt charts, project management frameworks, and team-based workflows to coordinate timelines and allocate resources effectively. Whether designing supportive devices or building infrastructure for school activities, members will apply real-world engineering principles to make a meaningful, lasting impact.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Government & Politics Club",
    category: "Politics & Debate",
    days: ["Wednesday"],
    meetingTime: "Every Other Wednesday after school in Room 201",
    location: "Room 201",
    description: "The Government and Politics Club wants to give an opportunity to people who are interested in the modern world the opportunity to share their views through a civil discussion on a wide variety of subjects. Such subjects can include the election, major world events, and controversial laws and opinions that have been trending, and more. We want to provide an open floor to let people share their variety of views, no matter what they may be. We also want to give members a voice on the meeting’s subjects by letting them choose a topic for our next meeting. We aspire to give an open space and have a fun time while potentially building relationships with people you may not have talked to before. (We also have cookies!) Anyone can join and is invited to, you don’t need to talk, you can just listen to others and what they have to say. There are no prerequisites, just come, eat some cookies, and have a good time by sharing a couple laughs with us.",
    advisor: "Dr. Abt",
    email: "sabt@byramhills.net"
  },
  {
    name: "Math Team",
    category: "Academic & Competition",
    days: ["Monday"],
    meetingTime: "Monday from 2:30-3:30 in Room 418",
    location: "Room 418",
    description: "The goal of the BHHS Math Team is to provide a venue in which students who enjoy math can participate in a competitive manner (while eating donuts) with other mathletes sharing this interest on the school, county, state and national levels. Competitions are hosted every two weeks to a month and will involve donuts, while weekly meetings will have a variety of snacks including candy, chips, and oranges. You can work on homework (and get help), challenge yourself with past math competitions, and discuss interesting math related topics during meetings.",
    advisor: "Mr. Kalish",
    email: "jkalish@byramhills.net"
  },
  {
    name: "Mock Trial",
    category: "Politics & Debate",
    days: ["Tuesday"],
    meetingTime: "Tuesdays from 2:30-3:30 After School in Room 411",
    location: "Room 411",
    description: "The Mock Trial Club is an association that looks at debatable cases of law that have been settled in the Courts of America. Both sides of a case are presented through evidence, witness affidavits, evidence and case law. The students who participate break down the case and act as lawyers and witnesses representing the two sides of the case. Here, students learn how to debate and how to put forward a case for their particular side: prosecution or defense. The Club participates in two competitions during the year including a county-wide tournament in March. Here, twelve to fifteen members of the club are selected to put on the case at the Westchester County Courthouse in front of a real judge in a real courtroom. If you are interested in learning more about the law and want to participate in lively debate, mock trial is certainly the club for you.",
    advisor: "Mr. Gilbert and Mr. Allen",
    email: "mgilbert@byramhills.net, mallen@byramhills.net"
  },
  {
    name: "Model United Nations",
    category: "Politics & Debate",
    days: ["TBD"],
    meetingTime: "Contact advisor",
    location: "TBD",
    description: "Have you ever wondered what it takes to negotiate a peace treaty, resolve an international crisis, or represent a nation on the world stage? Model United Nations (Model UN) gives students the opportunity to step into the shoes of global diplomats and tackle some of the world's most pressing challenges. Through engaging simulations of the United Nations, members represent countries, debate international issues, build alliances, negotiate agreements, and collaborate to develop solutions to real-world problems. At Byram Hills, Model UN brings international affairs to life through lively debates, interactive committee simulations, and opportunities to compete at conferences hosted by colleges and universities. During weekly meetings, members develop essential skills in public speaking, diplomacy, critical thinking, research, and leadership while gaining a deeper understanding of global politics and international relations. Beyond the classroom, conferences offer students the chance to put their skills into practice, engage with delegates from other schools, and experience the excitement of international diplomacy firsthand. No prior experience is necessary, and students of all grade levels are welcome! Whether you're passionate about international affairs, looking to become a more confident public speaker, or simply eager to challenge yourself and meet new people, Model UN offers an exciting and supportive environment to learn, lead, and grow. Join us and discover the power of diplomacy, collaboration, and making your voice heard!",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "Peer Tutoring Club",
    category: "Service & Leadership",
    days: ["TBD"],
    meetingTime: "Tutors will meet once a month to review experiences (15-20 minutes)",
    location: "TBD",
    description: "The Peer Tutoring Club's goals are to set up students who are struggling with their classes with older students who know the material. This club operates on a volunteer basis where students are matched up with one another once the tutor is granted permission from their teacher of the past. To get the ball rolling, tutorees are asked to fill out a tutor form and submit it back to Mr. Allen.",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "The Pre-Pre Med Club",
    category: "STEM & Technology",
    days: ["Monday"],
    meetingTime: "First Monday of Each Month in Room 209",
    location: "Room 209",
    description: "The Pre-Pre Med Club is a community for young students who are interested in pursuing a career in medicine and/or science. Our club provides a supportive environment for students to learn about the medical field, participate in relevant activities, and connect with like-minded peers.",
    advisor: "Mr. Gulick",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Science Olympiad",
    category: "Academic & Competition",
    days: ["Vary"],
    meetingTime: "Vary depending on the events and level of preparation",
    location: "TBD",
    description: "Science Olympiad is a national organization supported at the State and Regional level. The Science Olympiad C division, open to high school students from 9th to 12th grade, allows students to compete in three general categories of events for all disciplines of Science and Engineering with other schools. Some events are purely knowledge-based, consisting of a written exam testing students in specific areas. Other events are hands-on, requiring students to assemble or dissect objects during the actual event. Still others are 'build-based': students are expected to construct operational systems beforehand to be tested during the actual event. Of course, some events combine elements of all three, so be prepared for anything. During the 2024-25 season, the Science Olympiad team had two teams participate in the Regional competition at Byram Hills High School on February 8th, 2025. Approximately 900 students from 50 schools attended the competition, where students competed in 23 different events. The two teams finished 16th and 29th overall out of 50 teams in the Lower Hudson Valley Region, and Byram Hills students received medals in six of the events. In the 2009 season, as a first year team, Byram Hills took the Regional competition by surprise, finishing in third place with 7 medals in 16 events and qualifying for the State competition at West Point. Since then, Byram Hills has returned to the States 11 more times. In accordance with our push forward with STEAM initiatives, we will be having two teams at the Regional competition which will be once again, hosted by Byram Hills High School. It is our hope to continue growing and cultivating a love for all fields of Science and the Scientific method of discovery. If you have any questions, please be sure to contact any of the senior members of the club or our advisor.",
    advisor: "Dr. Beeken",
  }

];
]