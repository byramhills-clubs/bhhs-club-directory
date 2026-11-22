const clubGrid = document.getElementById("clubGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const dayFilter = document.getElementById("dayFilter");
const resultCount = document.getElementById("resultCount");

function renderClubs() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const selectedDay = dayFilter.value;

  const filtered = CLUBS.filter((club) => {
    const matchesCategory = selectedCategory === "all" || club.category === selectedCategory;
    const matchesDay = selectedDay === "all" || club.days.includes(selectedDay);
    const matchesSearch =
      club.name.toLowerCase().includes(query) ||
      club.description.toLowerCase().includes(query) ||
      club.advisor.toLowerCase().includes(query);

    return matchesCategory && matchesDay && matchesSearch;
  });

  resultCount.textContent = `Showing ${filtered.length} of ${CLUBS.length} clubs`;

  if (filtered.length === 0) {
    clubGrid.innerHTML = "<p>No clubs match those filters yet. Try clearing your search or day filter.</p>";
    return;
  }

  clubGrid.innerHTML = filtered
    .map(
      (club) => `
      <article class="club-card">
        <span class="badge">${club.category}</span>
        <h2>${club.name}</h2>
        <p>${club.description}</p>
        <p class="meta"><strong>When:</strong> ${club.meetingTime}</p>
        <p class="meta"><strong>Where:</strong> ${club.location}</p>
        <p class="meta"><strong>Advisor:</strong> ${club.advisor}</p>
        ${
          club.email
            ? `<a class="advisor-link" href="mailto:${club.email}?subject=Interest%20in%20${encodeURIComponent(
                club.name
              )}">Email Advisor (${club.email}) →</a>`
            : ""
        }
      </article>
    `
    )
    .join("");
}

searchInput.addEventListener("input", renderClubs);
categoryFilter.addEventListener("change", renderClubs);
dayFilter.addEventListener("change", renderClubs);

renderClubs();