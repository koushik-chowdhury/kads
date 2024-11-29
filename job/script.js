let jobSection = document.getElementsByClassName("job-post");
let endDate = document.getElementsByClassName("endDate");
let today = new Date();
let date;
function formatDate() {
  for (let i = 0; i < endDate.length; i++) {
    let rawDate = endDate[i].textContent.trim().replace("End Date:", "").trim();
    if (rawDate !== "NA") {
      let formatDate = rawDate.split("-");
      let dateParts = `${formatDate[2]}-${formatDate[1]}-${formatDate[0]}`;
      date = new Date(dateParts);
      if (!isNaN(date.getTime())) {
        if (today.getTime() > date.getTime()) {
          jobSection[i].remove();
        }
      }
    }
  }
}
window.addEventListener("load", formatDate);

// FILTER

const buttons = document.getElementById("button");
const jobs = document.querySelectorAll(".job-post");
const notice = document.querySelector(".notice");

function filterJobs(sector) {
  let visibleJobs = 0;
  jobs.forEach((job) => {
    if (sector === "all" || job.getAttribute("data-sector") === sector) {
      job.style.display = "block"; // Show job
      visibleJobs++;
    } else {
      job.style.display = "none"; // Hide job
    }
  });
  if (visibleJobs === 0) {
    console.log("hellow world");
    notice.innerHTML = `<h1> No Jobs available for ${sector} </h1>`;
    notice.style.display = "block";
  } else {
    notice.style.display = "none";
  }
}

// Event delegation: listen for click events on the button container
buttons.addEventListener("click", (e) => {
  const sector = e.target.getAttribute("data-sector"); // Get the sector from the clicked button's data attribute
  if (sector) {
    filterJobs(sector);
  }
  // if (window.getComputedStyle(filterSection).display === "block") {
  //   filterSection.style.display = "none";
  // }
});

// Optionally, show all jobs by default
filterJobs("all");

// HANDLE FILTER IN MOBILE DEVICE

let bar = document.getElementById("responsive-bar");
let filterSection = document.getElementById("filter-section");
const computedStyle = window.getComputedStyle(filterSection);
bar.addEventListener("click", () => {
  if (computedStyle.display === "none") {
    filterSection.style.display = "block";
  } else {
    filterSection.style.display = "none";
  }
});
