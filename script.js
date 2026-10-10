const notices = [
    {
        title: "Internal Examination Update",
        category: "Exam",
        date: "14 December 2026",
        description: "Check the examination schedule announced by your department."
    },
    {
        title: "College Event Announcement",
        category: "Event",
        date: "5 December 2026",
        description: "Check the official college notice for event details."
    },
    {
        title: "Important Student Information",
        category: "General",
        date: "10 October 2026",
        description: "Students should check official college updates regularly."
    }
];

const noticeList = document.getElementById("noticeList");
const searchInput = document.getElementById("search");

function displayNotices(list) {
    noticeList.innerHTML = "";

    if (list.length === 0) {
        noticeList.innerHTML = "<p>No matching notices found.</p>";
        return;
    }

    list.forEach(function(notice) {
        noticeList.innerHTML += `
            <article class="notice">
                <h3>${notice.title}</h3>
                <small>${notice.category} | ${notice.date}</small>
                <p>${notice.description}</p>
            </article>
        `;
    });
}

function filterNotices(category) {
    const query = searchInput.value.toLowerCase();

    const filtered = notices.filter(function(notice) {
        const matchesCategory =
            category === "All" || notice.category === category;

        const matchesSearch =
            notice.title.toLowerCase().includes(query) ||
            notice.description.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    displayNotices(filtered);
}

searchInput.addEventListener("input", function() {
    filterNotices("All");
});

displayNotices(notices);