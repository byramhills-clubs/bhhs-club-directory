// Starter database with 1 BHHS club per official category.
// Club members: add new clubs by copying one { ... } block and pasting it inside the brackets!
const CLUBS = [
  {
    name: "Girls Who Code",
    category: "Academic",
    days: ["Tuesday"],
    meetingTime: "Tuesdays, 2:30–3:30 PM",
    location: "TBD",
    description: "Build real coding projects for our school community, learn web development, and grow together in a welcoming tech space.",
    advisor: "Faculty Advisor",
    email: ""
  },
  {
    name: "Academic Challenge",
    category: "Academic",
    days: ["Thursday"],
    meetingTime: "Thursdays, 2:30–4:00 PM",
    location: "Room 409",
    description: "Two 4-person teams compete with buzzers in MACC, WACKO, and NAQT trivia competitions covering physics, politics, pop culture, and current events.",
    advisor: "Mr. Gilbert",
    email: "mgilbert@byramhills.net"
  },
  {
    name: "The Oracle",
    category: "Community Building",
    days: ["Monday", "Tuesday"],
    meetingTime: "Mondays and/or Tuesdays (dates posted in Google Classroom)",
    location: "See Google Classroom",
    description: "The Byram Hills High School student newspaper, publishing articles online covering school and community issues.",
    advisor: "Mrs. Eshoo",
    email: "bhhsoracle@byramhills.net"
  },
  {
    name: "Interact",
    category: "Service Based",
    days: ["Monday"],
    meetingTime: "Every other Monday at 2:30 PM",
    location: "Room 108",
    description: "Affiliated with the Armonk Rotary Club, organizing community service events and fundraisers for local and national causes.",
    advisor: "Mr. Eagle",
    email: "eeagle@byramhills.net"
  },
  {
    name: "Byram Beat",
    category: "General Interests",
    days: ["Monday", "Tuesday"],
    meetingTime: "Mondays 2:45–3:30 PM & Tuesday rehearsals",
    location: "Choir Room",
    description: "Byram Hills' non-auditioned a cappella vocal group performing popular music selections throughout the school year.",
    advisor: "Dr. Coates",
    email: "dcoates@byramhills.net"
  }
];