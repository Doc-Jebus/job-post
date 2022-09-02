//Button control
const jobPostBtn = document.getElementById('job-post-btn');
const closeModalBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('modal-form');
const jobSubmitBtn = document.getElementById('job-submit-btn');
const overlay = document.getElementById('overlay');
const inputs = document.querySelectorAll('input');

//Form input values
const jobPostForm = document.getElementById('job-post-form');
const companyName = document.getElementById('company-name').value;
const jobTitle = document.getElementById('job-title').value;
const jobSalary = document.getElementById('job-salary').value;
const jobLocation = document.getElementById('job-location').value;
const onlineStatus = document.querySelector('input[name="online-onsite"]:checked').value;
const applicationStartDate = document.getElementById('application-period-start').value;
const applicationEndDate = document.getElementById('application-period-end').value;
const jobDescription = document.getElementById('job-description').value;

//Job Class: Represents the job positions.
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
  static displayPostedJobs() {
    const StoredPosting = [
      {
        company: 'Google',
        jobPosition: 'UI/UX Designer',
        location: 'Sydney',
        jobStatus: 'online',
        salary: '$120,000',
        applicationStartDate: '09/10/2022',
        applicationEndDate: '10/10/2022',
        jobDescription: 'This is a famous company.'
      }
    ];
    const jobs = StoredPosting;

    books.forEach((job)=> UI.addJobToList(job));
  }

  static addJobToList(job) { 
    const list = document.querySelector('#job-table');
}


jobPostForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  let jobProfile = new JobPost(
    document.getElementById('company-name').value, 
    document.getElementById('job-title').value,
    document.getElementById('job-location').value, 
    document.querySelector('input[name="online-onsite"]:checked').value,
    document.getElementById('job-salary').value, 
    document.getElementById('application-period-start').value, 
    document.getElementById('application-period-end').value,
    document.getElementById('job-description').value
  )

  let jobListingArray = [];

  
  
  let storeData = localStorage.setItem('job-listing', JSON.stringify(jobProfile));

  let getData = JSON.parse(localStorage.getItem('lob-listing'));

  if(getData === null) {
    jobListingArray.push(jobProfile);
  }


 

  jobPostForm.reset()
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});



//Button to open new job post.
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
  jobPostForm.reset()
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

