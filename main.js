// Arrays for tracking
let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

// Get Count elements
let totalCount = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");
const jobsCount = document.getElementById('jobs-count');

// Get Containers
const cardContainer = document.getElementById("card-container");
const filterContainer = document.getElementById("filter-section");
const mainContainer = document.getElementById("main-container");

// Get Filter buttons
const allFilterBtn = document.getElementById('all-filter-btn');
const allInterviewBtn = document.getElementById('interview-filter-btn');
const allRejectBtn = document.getElementById('rejected-filter-btn');

// Initial count
calculateCount();

// Function to calculate all counts and update jobs-count
function calculateCount() {
    totalCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    // Update jobs-count according to current tab
    if(currentStatus === 'all-filter-btn'){
        jobsCount.innerText = `${cardContainer.children.length} Jobs`;
    } else if(currentStatus === 'interview-filter-btn'){
        jobsCount.innerText = `${interviewList.length} Jobs`;
    } else if(currentStatus === 'rejected-filter-btn'){
        jobsCount.innerText = `${rejectedList.length} Jobs`;
    }
}

// Toggle filter button styles
function toggleStyle(id) {

    let buttons = [allFilterBtn, allInterviewBtn, allRejectBtn];

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('bg-blue-500','text-white');
        buttons[i].classList.add('bg-gray-50','text-black');
    }

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-50','text-black');
    selected.classList.add('bg-blue-500','text-white');

    currentStatus = id;

    if(id === 'all-filter-btn') {
        cardContainer.classList.remove('hidden');
        filterContainer.classList.add('hidden');
    } else {
        cardContainer.classList.add('hidden');
        filterContainer.classList.remove('hidden');

        if(id === 'interview-filter-btn') renderInterview();
        if(id === 'rejected-filter-btn') renderRejected();
    }

    calculateCount();
}

// Find card by name
function findCardByName(name) {
    for(let i=0; i<cardContainer.children.length; i++){
        if(cardContainer.children[i].querySelector('.job-name').innerText === name){
            return cardContainer.children[i];
        }
    }
    return null;
}

// Render Interview
function renderInterview() {
    filterContainer.innerHTML = '';

    if(interviewList.length === 0){
        filterContainer.innerHTML = `
            <div class="card flex flex-col justify-center items-center p-8 gap-2 bg-white shadow-xl">
               <img src="jobs.png" alt="No job">
                <h2 class="text-blue-900 text-xl font-bold">No Interview Jobs</h2>
                <p class="text-gray-600 text-[14px]">No jobs have been marked for interview yet.</p>
            </div>
        `;
        return;
    }

    for(let i=0; i<interviewList.length; i++){
        let cardClone = findCardByName(interviewList[i].jobName).cloneNode(true);
        cardClone.querySelector('.status').innerText = 'Interview';
        filterContainer.appendChild(cardClone);
    }
}

// Render Rejected
function renderRejected() {
    filterContainer.innerHTML = '';

    if(rejectedList.length === 0){
        filterContainer.innerHTML = `
            <div class="card flex flex-col justify-center items-center p-8 gap-2 bg-white shadow-xl">
               <img src="jobs.png" alt="No job">
                <h2 class="text-blue-900 text-xl font-bold">No Rejected Jobs</h2>
                <p class="text-gray-600 text-[14px]">No jobs have been rejected yet.</p>
            </div>
        `;
        return;
    }

    for(let i=0; i<rejectedList.length; i++){
        let cardClone = findCardByName(rejectedList[i].jobName).cloneNode(true);
        cardClone.querySelector('.status').innerText = 'Rejected';
        filterContainer.appendChild(cardClone);
    }
}

// Add Event listeners for card actions
mainContainer.addEventListener('click', function(event) {

    const target = event.target;
    const card = target.closest('.card');
    if(!card) return;

    const jobName = card.querySelector('.job-name').innerText;

    // Interview button clicked
    if(target.classList.contains('interview-btn')){

        card.querySelector('.status').innerText = 'Interview';

        // Add to interviewList if its not exists
        let found = false;
        for(let i=0; i<interviewList.length; i++){
            if(interviewList[i].jobName === jobName) found = true;
        }
        if(!found) interviewList.push({jobName});

        // Remove from rejectedList
        let newRejected = [];
        for(let i=0; i<rejectedList.length; i++){
            if(rejectedList[i].jobName !== jobName) newRejected.push(rejectedList[i]);
        }
        rejectedList = newRejected;

        if(currentStatus === 'interview-filter-btn') renderInterview();
        if(currentStatus === 'rejected-filter-btn') renderRejected();
    }

    // Rejected button clicked
    if(target.classList.contains('rejected-btn')){

        card.querySelector('.status').innerText = 'Rejected';

        // Add to rejectedList if not exists
        let found = false;
        for(let i=0; i<rejectedList.length; i++){
            if(rejectedList[i].jobName === jobName) found = true;
        }
        if(!found) rejectedList.push({jobName});

        // Remove from interviewList
        let newInterview = [];
        for(let i=0; i<interviewList.length; i++){
            if(interviewList[i].jobName !== jobName) newInterview.push(interviewList[i]);
        }
        interviewList = newInterview;

        if(currentStatus === 'interview-filter-btn') renderInterview();
        if(currentStatus === 'rejected-filter-btn') renderRejected();
    }

    // Delete button clicked
    if(target.classList.contains('ri-delete-bin-6-line')){

        // Remove from both lists
        let newInterview = [];
        for(let i=0; i<interviewList.length; i++){
            if(interviewList[i].jobName !== jobName) newInterview.push(interviewList[i]);
        }
        interviewList = newInterview;

        let newRejected = [];
        for(let i=0; i<rejectedList.length; i++){
            if(rejectedList[i].jobName !== jobName) newRejected.push(rejectedList[i]);
        }
        rejectedList = newRejected;

        // Remove card
        card.remove();

        if(currentStatus === 'interview-filter-btn') renderInterview();
        if(currentStatus === 'rejected-filter-btn') renderRejected();
    }

    // Update all counts including jobs-count
    calculateCount();

});
