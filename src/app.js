//Button control
const jobPostBtn = document.getElementById('job-post-btn');
const closeModalBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('modal-form');
const jobSubmitBtn = document.getElementById('job-submit-btn');
const overlay = document.getElementById('overlay');
const inputs = document.querySelectorAll('input');

//Form input values
const companyName = document.getElementById('company-name').value;
console.log(companyName);
const jobTitle = document.getElementById('job-title').value;
const salary = document.getElementById('job-salary').value;
const jobLocation = document.getElementById('job-location').value;
const onlineStatus = document.querySelector('input[name="online-onsite"]:checked').value;
const applicationStartDate = document.getElementById('application-period-start').value;
const applicationEndDate = document.getElementById('application-period-end').value;
const jobDescription = document.getElementById('job-description').value;


let jobListings = [];

class JobPost {
  constructor(company, jobPosition, location, salary, applicationStartDate, applicationEndDate, jobDescription) {
    this.company = company;
    this.jobPosition = jobPosition;
    this.location = location;
    this.salary = salary;
    this.applicationStartDate = applicationStartDate;
    this.applicationEndDate = applicationEndDate;
    this.jobDescription = jobDescription;
  }
}

function addJobToList() {
  
}

//Button to open new jon post.
jobPostBtn.addEventListener('click', () => {
  modalForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
}) 

//Press overlay background to close modal... Currently not supported.
overlay.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
  modalForm.classList.add('hidden');
  overlay.classList.remove('hidden');
  })

//Button to close and reset the input fields of the form modal.
closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach(input => input.value = '');
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

