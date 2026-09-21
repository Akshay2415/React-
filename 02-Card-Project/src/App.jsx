import React from 'react'
import Cards from './components/Cards'

const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    posted: "5 days ago",
    title: "Senior UI/UX Developer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://www.google.com/favicon.ico",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico",
    posted: "1 week ago",
    title: "React Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://www.facebook.com/favicon.ico",
    posted: "3 days ago",
    title: "UI/UX Designer",
    type: "Part Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Mumbai, India",
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://www.netflix.com/favicon.ico",
    posted: "4 days ago",
    title: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Remote",
  },
  {
    id: 6,
    company: "Apple",
    logo: "https://www.apple.com/favicon.ico",
    posted: "6 days ago",
    title: "Frontend Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Bangalore, India",
  },
  {
    id: 7,
    company: "Adobe",
    logo: "https://www.adobe.com/favicon.ico",
    posted: "1 day ago",
    title: "UX Researcher",
    type: "Part Time",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    company: "Spotify",
    logo: "https://www.spotify.com/favicon.ico",
    posted: "2 weeks ago",
    title: "Web Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Remote",
  },
  {
    id: 9,
    company: "Flipkart",
    logo: "https://www.flipkart.com/favicon.ico",
    posted: "3 days ago",
    title: "Software Developer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Bangalore, India",
  },
  {
    id: 10,
    company: "NVIDIA",
    logo: "https://www.nvidia.com/favicon.ico",
    posted: "2 days ago",
    title: "Frontend Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$135/hr",
    location: "Bangalore, India",
  },
  {
    id: 11,
    company: "Tesla",
    logo: "https://www.tesla.com/favicon.ico",
    posted: "4 days ago",
    title: "Software Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$125/hr",
    location: "Pune, India",
  },
  {
    id: 12,
    company: "Uber",
    logo: "https://www.uber.com/favicon.ico",
    posted: "1 week ago",
    title: "Senior React Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Bangalore, India",
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobs.map(function(elem,id){
        return <div key={id}>
            <Cards company={elem.company}
                  logo = {elem.logo}
                  posted = {elem.posted}
                  type = {elem.type}
                  title = {elem.title}
                  level = {elem.level}
                  salary= {elem.salary}
                  location = {elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
