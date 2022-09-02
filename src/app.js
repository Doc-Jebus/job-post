//Form input values - global variables
const jobPostBtn = document.getElementById('job-post-btn');
const closeModalBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('modal-form');
const jobSubmitBtn = document.getElementById('job-submit-btn');
const overlay = document.getElementById('overlay');
const inputs = document.querySelectorAll('input');
const jobPostForm = document.getElementById('job-post-form');


//Job Class: Represents the job position.
class JobPost {
  constructor(company, jobPosition, location, jobStatus, salary, applicationStartDate, applicationEndDate, jobDescription) {
    this.company = company;
    this.jobPosition = jobPosition;
    this.location = location;
    this.jobStatus = jobStatus;
    this.salary = salary;
    this.applicationStartDate = applicationStartDate;
    this.applicationEndDate = applicationEndDate;
    this.jobDescription = jobDescription;
  }
}


//UI Class to handle UI tasks
class UI {
  //Retrieve local storage and display
  static displayPostedJobs() {
    const jobs = Store.getJob();

    jobs.forEach((job)=> UI.addJobToList(job));
  }

  //Dynamic table contents
  static addJobToList(job) { 
    const list = document.querySelector('#job-table-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${job.company}</td>
    <td>${job.jobPosition}</td>
    <td>${job.location}</td>
    <td>${job.jobStatus}</td>
    <td>${job.salary}</td>
    <td>${job.applicationStartDate}</td>
    <td>${job.applicationEndDate}</td>
    <td>${job.jobDescription}</td>
    <td>
      <a href='#'>
        <button type="button" 
        class="
        delete
        inline-block 
        px-4 
        py-2 
        bg-red-600 
        text-white 
        font-bold 
        text-md 
        leading-tight 
        uppercase 
        rounded-md 
        shadow-md 
        hover:bg-red-700 
        hover:shadow-lg 
        focus:bg-red-700 
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:bg-red-800 
        active:shadow-lg 
        transition 
        duration-150 
        ease-in-out
        ">
        x</button></a></td>
    `;

    list.appendChild(row);
  }
  //Button: Function to delete job post
  static deleteJob(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }
}


//Store Class: Handle storage
class Store {

  //Retrieve from local storage
 static getJob() {
    let jobs;
    if(localStorage.getItem('jobs') === null) {
      jobs = [];
    } else {
    jobs = JSON.parse(localStorage.getItem('jobs'));
    }

    return jobs;
  }

  //Store in local storage
  static addJob(job) {
    const jobs = Store.getJob();

    jobs.push(job);

    localStorage.setItem('jobs', JSON.stringify(jobs));
  }

  //Remove from local storage
  static removeJob(jobDescription) {
    const jobs = Store.getJob()

    jobs.forEach((job, index) => {
      if(job.jobDescription === jobDescription) {
        jobs.splice(index, 1);
      }
    });
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }
}


//Event: Display Jobs
document.addEventListener('DOMContentLoaded', UI.displayPostedJobs);


//Event: Add new job to the list
jobPostForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  //Get form values
  const company = document.getElementById('company-name').value; 
  const jobPosition = document.getElementById('job-title').value;
  const location = document.getElementById('job-location').value; 
  const jobStatus = document.querySelector('input[name="online-onsite"]:checked').value;
  const salary = document.getElementById('job-salary').value; 
  const applicationStartDate = document.getElementById('application-period-start').value; 
  const applicationEndDate = document.getElementById('application-period-end').value;
  const jobDescription = document.getElementById('job-description').value;

  //Instantiate the job object
    const job = new JobPost(company, jobPosition, location, jobStatus, salary, applicationStartDate, applicationEndDate, jobDescription); 
  
  //Add job to UI 
  UI.addJobToList(job);

  //Add job to Store
  Store.addJob(job);

  //Close the form
  jobPostForm.reset()
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});


//Event: Remove job post from table
document.querySelector('#job-table-list').addEventListener('click', (e) => {
  //Remove job post from UI.
  UI.deleteJob(e.target);

  //Remove job post from store
  Store.removeJob(e.target.parentElement.parentElement.previousElementSibling.textContent);
});



//Button: Open new job form.
jobPostBtn.addEventListener('click', () => {
  modalForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
}) 


//Remove: Form close button (reset the input fields of the form modal).
closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  jobPostForm.reset()
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

