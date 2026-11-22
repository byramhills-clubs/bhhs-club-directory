const clubGrid = document.getElementById("clubGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const dayFilter = document.getElementById("dayFilter");
const resultCount = document.getElementById("resultCount");

const PREVIEW_LIMIT = 240;

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
    .map((club, index) => {
      const isLong = club.description.length > PREVIEW_LIMIT;
      const shortText = isLong
        ? `${club.description.slice(0, PREVIEW_LIMIT).trim()}...`
        : club.description;

      return `
        <article class="club-card">
          <div class="card-top">
            <h2>${club.name}</h2>
            <span class="badge">${club.category}</span>
          </div>

          <p class="description" id="desc-${index}" data-full="${encodeURIComponent(
            club.description
          )}" data-short="${encodeURIComponent(shortText)}" data-expanded="false">
            ${shortText}
          </p>

          ${
            isLong
              ? `<button type="button" class="toggle-btn" data-target="desc-${index}">Read more</button>`
              : ""
          }

          <div class="details">
            <p><strong>Meeting Information:</strong> ${club.meetingTime}</p>
            <p><strong>Location:</strong> ${club.location}</p>
            <p><strong>Advisor:</strong> ${club.advisor}</p>
            ${
              club.email
                ? `<a class="advisor-link" href="mailto:${club.email}?subject=Interest%20in%20${encodeURIComponent(
                    club.name
                  )}">Email Advisor (${club.email}) →</a>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

clubGrid.addEventListener("click", (event) => {
  const btn = event.target.closest(".toggle-btn");
  if (!btn) return;

  const descEl = document.getElementById(btn.dataset.target);
  const expanded = descEl.dataset.expanded === "true";

  descEl.textContent = decodeURIComponent(
    expanded ? descEl.dataset.short : descEl.dataset.full
  );
  descEl.dataset.expanded = String(!expanded);
  btn.textContent = expanded ? "Read more" : "Show less";
});

searchInput.addEventListener("input", renderClubs);
categoryFilter.addEventListener("change", renderClubs);
dayFilter.addEventListener("change", renderClubs);

renderClubs();

const searchMarquee = document.getElementById("searchMarquee");

function updateMarqueeVisibility() {
  if (!searchMarquee) return;
  const hasValue = searchInput.value.length > 0;
  const isFocused = document.activeElement === searchInput;
  searchMarquee.classList.toggle("is-hidden", hasValue || isFocused);
}

searchInput.addEventListener("input", updateMarqueeVisibility);
searchInput.addEventListener("focus", updateMarqueeVisibility);
searchInput.addEventListener("blur", updateMarqueeVisibility);
updateMarqueeVisibility();