import React from 'react';
import './App.css';
import Card from './components/card';

const jobData = [
  {
    id: 1,
    company: "Meta",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    postedTime: "2 days ago",
    role: "Senior Product Designer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$150/hr",
    location: "Menlo Park, CA"
  },
  {
    id: 2,
    company: "Apple",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    postedTime: "1 day ago",
    role: "UI/UX Researcher",
    tags: ["Full-Time", "Mid Level"],
    salary: "$140/hr",
    location: "Cupertino, CA"
  },
  {
    id: 3,
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    postedTime: "5 days ago",
    role: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
    postedTime: "3 days ago",
    role: "Lead Interaction Designer",
    tags: ["Remote", "Expert Level"],
    salary: "$165/hr",
    location: "Los Gatos, CA"
  },
  {
    id: 5,
    company: "Google",
    logo: "https://1000logos.net/wp-content/uploads/2016/11/Google-Logo.png",
    postedTime: "Just now",
    role: "Staff UX Designer",
    tags: ["Full-Time", "Director Level"],
    salary: "$180/hr",
    location: "Bangalore, India"
  },
  {
    id: 6,
    company: "Microsoft",
    logo: "https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo.png",
    postedTime: "4 days ago",
    role: "Product Designer II",
    tags: ["Full-Time", "Mid Level"],
    salary: "$115/hr",
    location: "Hyderabad, India"
  },
  {
    id: 7,
    company: "Netflix",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
    postedTime: "1 week ago",
    role: "UI Designer",
    tags: ["Contract", "Entry Level"],
    salary: "$95/hr",
    location: "Remote (US)"
  },
  {
    id: 8,
    company: "Meta",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    postedTime: "6 days ago",
    role: "AR/VR Product Designer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$160/hr",
    location: "London, UK"
  },
  {
    id: 9,
    company: "Google",
    logo: "https://1000logos.net/wp-content/uploads/2016/11/Google-Logo.png",
    postedTime: "2 weeks ago",
    role: "Visual Designer",
    tags: ["Part-Time", "Mid Level"],
    salary: "$105/hr",
    location: "Tokyo, Japan"
  },
  {
    id: 10,
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    postedTime: "3 days ago",
    role: "Design Systems Engineer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$135/hr",
    location: "Seattle, WA"
  }
];

const App = () => {
  return (
    <div className="app">
      {
      jobData.map(
        (job) => (
        <Card key={job.id} data={job} />
      )
    )
      }
    </div>
  );
};

export default App;