// Add new clubs by copying one { ... } block and pasting it inside the brackets!
const CLUBS = [
  const clubs = [
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
    category: "STEM",
    days: ["Monday"],
    meetingTime: "First Monday of every month",
    location: "Room 423",
    description: "The purpose of the Architecture Club is to teach students interested in architecture more about the field, and to learn more about the architecture around us. Architecture is a popular field that involves creative elements, as well as math and science. Members of the club will get to do artistic activities like sculpting and drawing. They will also have opportunities to learn from guest speakers and possible field trips! This club will meet on the first Monday of every month.",
    advisor: "Ms. Sarracco",
    email: "csarracco@byramhills.net"
  },
  {
    name: "Astronomy Club",
    category: "STEM",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "If you have ever looked up at the night sky and wondered at the vast view of the stars and the worlds that we now know are pretty common, this might be the place for you. Astronomy is far more than just gazing at the night sky; did you know that looking up is like peering through a time machine into the distant past? Much of what we understand about the fundamental operating manual of our universe was learned simply by observing the cosmos. Driven by our members' curiosity, we will explore many different aspects of astronomy, ranging from the dynamics of our own solar system to local stellar groups and their surrounding exoplanets. We will also delve into exotic cosmic phenomena such as neutron stars, supermassive black holes, and the mysteries of deep space, alongside an occasional foray into the rich history and culture of astronomical observation. Our hands-on club activities include building educational presentations for younger students and partner schools, engaging in hands-on nighttime observation sessions using telescopes, analyzing real observational data, and examining the modern tools and methods astronomers use to investigate the surrounding universe.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Engineering Club",
    category: "STEM",
    days: [],
    meetingTime: "TBD",
    location: "TBD",
    description: "This year, the Engineering Club and eNable Club have officially merged under the single banner of the Engineering Club. Building on eNable's rich history of designing and manufacturing 3D-printed assistive devices as well as the Engineering Club's focus on multidisciplinary technical projects, the newly unified club is expanding its mission to center heavily on community service and applied engineering. Members will engage in the end-to-end design, implementation, and maintenance of real-world solutions that directly benefit our school and local community. A core component of our activities includes collaborating with local programs such as the Learning Center Classroom (LCC) and Flexible Support Program (FSP) to develop custom assistive technologies, facility modifications, and operational tools. Through these hands-on initiatives, students will gain practical experience across mechanical, electrical, biomedical, and systems engineering disciplines. In addition to technical skills—ranging from Computer-Aided Design (CAD) modeling in Onshape to 3D printing, laser cutting, and embedded electronics—students will learn essential engineering management practices. The club will utilize Gantt charts, project management frameworks, and team-based workflows to coordinate timelines and allocate resources effectively. Whether designing supportive devices or building infrastructure for school activities, members will apply real-world engineering principles to make a meaningful, lasting impact.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Government & Politics Club",
    category: "Government & Law",
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
    category: "Government & Law",
    days: ["Tuesday"],
    meetingTime: "Tuesdays from 2:30-3:30 after school",
    location: "Room 411",
    description: "The Mock Trial Club is an association that looks at debatable cases of law that have been settled in the Courts of America. Both sides of a case are presented through evidence, witness affidavits, evidence and case law. The students who participate break down the case and act as lawyers and witnesses representing the two sides of the case. Here, students learn how to debate and how to put forward a case for their particular side: prosecution or defense. The Club participates in two competitions during the year including a county-wide tournament in March. Here, twelve to fifteen members of the club are selected to put on the case at the Westchester County Courthouse in front of a real judge in a real courtroom. If you are interested in learning more about the law and want to participate in lively debate, mock trial is certainly the club for you.",
    advisor: "Mr. Gilbert and Mr. Allen",
    email: "mgilbert@byramhills.net and mallen@byramhills.net"
  },
  {
    name: "Model United Nations",
    category: "Government & Law",
    days: [],
    meetingTime: "Contact advisor",
    location: "TBD",
    description: "Have you ever wondered what it takes to negotiate a peace treaty, resolve an international crisis, or represent a nation on the world stage? Model United Nations (Model UN) gives students the opportunity to step into the shoes of global diplomats and tackle some of the world's most pressing challenges. Through engaging simulations of the United Nations, members represent countries, debate international issues, build alliances, negotiate agreements, and collaborate to develop solutions to real-world problems. At Byram Hills, Model UN brings international affairs to life through lively debates, interactive committee simulations, and opportunities to compete at conferences hosted by colleges and universities. During weekly meetings, members develop essential skills in public speaking, diplomacy, critical thinking, research, and leadership while gaining a deeper understanding of global politics and international relations. Beyond the classroom, conferences offer students the chance to put their skills into practice, engage with delegates from other schools, and experience the excitement of international diplomacy firsthand. No prior experience is necessary, and students of all grade levels are welcome! Whether you're passionate about international affairs, looking to become a more confident public speaker, or simply eager to challenge yourself and meet new people, Model UN offers an exciting and supportive environment to learn, lead, and grow. Join us and discover the power of diplomacy, collaboration, and making your voice heard!",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "Peer Tutoring Club",
    category: "Service",
    days: [],
    meetingTime: "Tutors meet once a month to review experiences (15-20 minutes)",
    location: "TBD",
    description: "The Peer Tutoring Club's goals are to set up students who are struggling with their classes with older students who know the material. This club operates on a volunteer basis where students are matched up with one another once the tutor is granted permission from their teacher of the past. To get the ball rolling, tutorees are asked to fill out a tutor form and submit it back to Mr. Allen.",
    advisor: "Mr. Allen",
    email: "mallen@byramhills.net"
  },
  {
    name: "The Pre-Pre Med Club",
    category: "STEM",
    days: ["Monday"],
    meetingTime: "First Monday of each month",
    location: "Room 209",
    description: "The Pre-Pre Med Club is a community for young students who are interested in pursuing a career in medicine and/or science. Our club provides a supportive environment for students for learn about the medical field, participate in relevant activities, and connect with like minded peers.",
    advisor: "Mr. Gulick",
    email: "jgulick@byramhills.net"
  },
  {
    name: "Science Olympiad",
    category: "STEM",
    days: [],
    meetingTime: "Varies depending on the events and level of preparation",
    location: "TBD",
    description: "Science Olympiad is a national organization supported at the State and Regional level. The Science Olympiad C division, open to high school students from 9th to 12th grade, allows students to compete in three general categories of events for all disciplines of Science and Engineering with other schools. Some events are purely knowledge-based, consisting of a written exam testing students in specific areas. Other events are hands-on, requiring students to assemble or dissect objects during the actual event. Still others are 'build-based': students are expected to construct operational systems beforehand to be tested during the actual event. Of course, some events combine elements of all three, so be prepared for anything. During the 2024-25 season, the Science Olympiad team had two teams participate in the Regional competition at Byram Hills High School on February 8th, 2025. Approximately 900 students from 50 schools attended the competition, where students competed in 23 different events. The two teams finished 16th and 29th overall out of 50 teams in the Lower Hudson Valley Region, and Byram Hills students received medals in six of the events. In the 2009 season, as a first year team, Byram Hills took the Regional competition by surprise, finishing in third place with 7 medals in 16 events and qualifying for the State competition at West Point. Since then, Byram Hills has returned to the States 11 more times. In accordance with our push forward with STEAM initiatives, we will be having two teams at the Regional competition which will be once again, hosted by Byram Hills High School. It is our hope to continue growing and cultivating a love for all fields of Science and the Scientific method of discovery. If you have any questions, please be sure to contact any of the senior members of the club or our advisor.",
    advisor: "Dr. Beeken",
    email: "pbeeken@byramhills.net"
  },
  {
    name: "Shark Tank Club",
    category: "Business",
    days: [],
    meetingTime: "TBD (meets once a month)",
    location: "TBD",
    description: "Shark Tank Club meets once a month and gives students the chance to develop as entrepreneurs, sharpening their public speaking and pitching skills through hands-on projects such as product elevator pitches. Members learn to turn ideas into pitches, think on their feet, and lead with confidence in a dynamic, team-driven environment. Our mission is to build the innovation and communication skills students need to make an impact in their future careers and communities.",
    advisor: "Ms. Sheeley",
    email: "ksheeley@byramhills.net"
  },
  {
    name: "Speech and Debate",
    category: "Government & Law",
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
    
  }
];