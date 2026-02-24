// Create Arrays for tracking
let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

// get Count elements
let totalCount = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");

// Get Containers
const cardContainer = document.getElementById("card-container"); // All cards
const filterContainer = document.getElementById("filter-section"); // Filter view
const mainContainer = document.getElementById("main-container");

// get Filter buttons
const allFilterBtn = document.getElementById('all-filter-btn');
const allInterviewBtn = document.getElementById('interview-filter-btn');
const allRejectBtn = document.getElementById('rejected-filter-btn');