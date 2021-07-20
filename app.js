// Variables
const API_KEY = 'b883a5e72e8cc96222fa2acc3cc86b37';
const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=c5727eff&app_key=b883a5e72e8cc96222fa2acc3cc86b37&results_per_page=10&max_days_old=2';

// GOAL 1: Be able to see the data displayed from the API in the console.
// fetch(API_URL)
console.log(fetch(API_URL))


// Pseudo Code
// 1. Users can see 10 most recent jobs (index.html)
/*document.getElementById("index").addEventListener("load", (ev) => {

})*/
/// 1a. (new div created for each)

function jobAdItem_48(){
    document.createElement('div');
    // div.innerHTML =<p>${msg}</p>
    document.getElementById("most-recent").appendChild(div);
}

/// 1b. maximum of 10 divs at any time

    // @TODO if there are exactly 10 instances of jobAdItem ( === 10), return. else, do not append child. return;

// 2. Users can see all jobs (listings.html)

function jobAdItem_All(){
    document.createElement('div');
    // div.innerHTML = <h2>${msg}</h2><p>${msg}</p>;
    document.getElementById("all-listings").appendChild(div);
}

// 3. Users can search for all jobs within 48 hour period
/// 3a. set default date to current date
/*document.getElementById("date");*/

// 4. Users can change the date and it shows the last 48 hours from the date chosen (YYYY,MM,DD)
const form = document.getElementById("form");
const checkBox = document.getElementById("checkbox");
form.addEventListener("submit", (ev)=>{
    ev.preventDefault()
    // if date is specified, use specified date.
    // else, default = today's date.
    console.log(ev);
    return last2DJobs();
});

function last2DJobs() {
    console.log("These are jobs from the last 2 days.")
    /* Data from jobs in last 48 hours shown
    * (new div created for each job containing...
    * JOB TITLE | Job Description | ~ Salary | ~ Date listed )*/
}


checkBox.addEventListener('change', (ev)=>{
   if (checkBox.checked){
       console.log("Checkbox is checked");
   } else {
       console.log("Checkbox is not checked");
   };
});

// 5. Users can save a job

const star = document.getElementById("star")

star.addEventListener('click', (ev)=>{
    if (star.onselect){
        console.log("Job is saved");
    } else {
        console.log("Job is not saved");
    }
})

// 6. If users save a job, it shows on homepage (under the most recent jobs)


// Functions



// Event Listeners
