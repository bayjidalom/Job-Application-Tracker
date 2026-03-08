let currentTab = "all";

const tabActive = ['bg-sky-600', 'text-white']
const tabInactive = ['bg-white', 'text-gray-600']

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
console.log(allContainer, interviewContainer, rejectedContainer);

const emptyState = document.getElementById("empty-state");
const availableStat = document.getElementById("available");

function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];

    currentTab = tab;


    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t)
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive)
        } else {
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive)
        }

        updateStat()
    }


    const pages = [allContainer, interviewContainer, rejectedContainer];
    for (const section of pages) {
        section.classList.add("hidden");

    }
    emptyState.classList.add('hidden')

    if (tab === "all") {
        allContainer.classList.remove("hidden")
        if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden")
        if (interviewContainer.children.length < 1) {
            emptyState.classList.remove('hidden');

        }
    }
    else {
        rejectedContainer.classList.remove("hidden");
        if (rejectedContainer.children.length < 1) {
            emptyState.classList.remove('hidden');

        }
    }
}

const totalStat = document.getElementById("stat-total")
const interviewStat = document.getElementById("stat-interview")
const rejectStat = document.getElementById("stat-reject")


switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");


    const parent = card.parentNode;
    const status = card.querySelector(".status");



    if (clickedElement.classList.contains("interview")) {
        status.innerText = "interviewed";
        interviewContainer.appendChild(card);

    }
    if (clickedElement.classList.contains("rejected")) {
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);


    }
    if (clickedElement.classList.contains("delete")) {
        parent.removeChild(card)
    }

    updateStat();
})

function updateStat() {

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };

    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText = counts.rejected;

    availableStat.innerText = counts[currentTab];

    if (counts[currentTab] < 1) {
        emptyState.classList.remove("hidden")
    } else {
        emptyState.classList.add("hidden")

    }

}

updateStat()
