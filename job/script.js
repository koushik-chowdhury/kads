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
