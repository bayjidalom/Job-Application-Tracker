let currentTab = "all";

const tabActive = ['bg-sky-600', 'text-white'];
const tabInactive = ['bg-white', 'text-gray-600'];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");


function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for (const section of pages) {
        section.classList.add("hidden");

        if (tab === "all") {
            allContainer.classList.remove("hidden");
        }
        if (tab === "interview") {
            interviewContainer.classList.remove("hidden");
        }
        if (tab === "rejected") {
            rejectedContainer.classList.remove("hidden");
        }
    }
}

const totalStat = document.getElementById("stat-total")
const interviewStat = document.getElementById("stat-interview")
const rejectStat = document.getElementById("stat-reject")

totalStat.innerText = allContainer.children.length;

switchTab(currentTab);

