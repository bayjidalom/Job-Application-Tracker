let currentTab = "all";

const tabActive = ['bg-sky-600', 'text-white'];
const tabInactive = ['bg-white', 'text-gray-600'];

function switchTab(tab){
    const tabs =["all", "interview", "rejected"];

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
}

switchTab(currentTab);

