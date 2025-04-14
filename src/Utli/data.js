import frontend from '../assets/Frontend.png'
import backend from '../assets/Backend.png'
import tools from '../assets/Tools.png'
import database from '../assets/Database.png'
import soft from '../assets/SoftSkills.png'


export const SKILLS=[
    {
        title:"Frontend",
        icon:frontend,
        Skills:[
            {skill:"HTML5", percentage:"80%"},
            {skill:"CSS3", percentage:"90%"},
            {skill:"JavaScript", percentage:"75%"},
            {skill:"React.js", percentage:"70%"},
 ],
    },
    {
        title:"Backend",
        icon:backend,
        Skills:[
            {skill:"Node.js", percentage:"80%"},
            {skill:"Express.js", percentage:"70%"},
        ],
    },
    {
        title:"Tools",
        icon:tools,
        Skills:[
            {skill:"Git & GitHub", percentage:"80%"},
            {skill:"Visual Studio Code", percentage:"75%"},
            {skill:"Webpack", percentage:"60%"},
            {skill:"Responsive Design", percentage:"70%"},
        ],
    },
    {
        title:"Database",
        icon:database,
        Skills:[
            {skill:"MySQL", percentage:"60%"},
            {skill:"MongoDB", percentage:"80%"},
            {skill:"Firebase", percentage:"50%"},
        ],
    },
    {
        title:"Soft Skills",
        icon:soft,
        Skills:[
            {skill:"Problem-Solving", percentage:"70%"},
            {skill:"Collaboration", percentage:"60%"},
            {skill:"Attention to Detail", percentage:"50%"},
        ],
    },
    // {
    //     title:"Other",
    //     icon:"./assets/Other.png",
    //     Skills:[
    //         {skill:"Cloud Computing", percentage:"50%"},
    //         {skill:"Cybersecurity", percentage:"40%"},
    //         {skill:"Data Science", percentage:"30%"},
    //     ],
    // }
]

export const PROJECTS = [
    {
      title: "TO-DO List",
      date: "25-June-2024 To 30-June-2024",
      useTechnologies: "HTML, CSS, JavaScript",
      responsibilities: [
        "Developed a fully functional to-do list application from scratch.Implemented add, edit, delete, and save functionalities using local storage. Added filtering features based on task status (completed/pending).Ensured mobile responsiveness and a clean UI design.Used modular JavaScript for better code organization."
      ]
    },
    {
      title: "Weather App using API",
      date: "3-July-2024 To 15-July-2024",
      useTechnologies: "HTML, CSS, JavaScript, OpenWeatherMap API",
      responsibilities: [
        "Integrated real-time weather data using OpenWeatherMap API.Developed search functionality for cities across the globe.Displayed temperature, humidity, and weather condition with icons.Handled API error responses and empty search queries gracefully.Made UI interactive with CSS transitions and responsive layout."
      ]
    },
    {
      title: "Shopping Cart System",
      date:"1-August-2024 To 15-October-2024",
      useTechnologies: "React.js, Tailwind CSS, Redux",
      responsibilities: [
        "Built an e-commerce shopping cart with dynamic item addition and removal.Managed state globally using Redux for cart and product data.Integrated quantity control, subtotal, and total price calculation features.Implemented routing using React Router for product and checkout pages.Ensured responsiveness and optimized user experience on all devices."
      ]
    },
    {
      title: "Admin Panel for Spir HealthCare",
      date: " 1-November-2024 To 7-November-2024",
      useTechnologies: "React.js, Tailwind CSS, Chart.js, Firebase",
      responsibilities: [
        "Created secure login and role-based dashboard access using Firebase Authentication.Built reusable components like cards, tables, and charts.Implemented patient, doctor, and appointment management modules.Used Chart.js for visualizing health-related statistics.Focused on accessibility and clean UI for admin users."
      ]
    },
    {
      title: "Restaurant Website",
      date: "3-March-2024",
      useTechnologies: "HTML, CSS, JavaScript, Bootstrap",
      responsibilities: [
        "Designed a responsive restaurant website with menu, gallery, and reservation features.Integrated contact form and Google Maps for location visibility.Used Bootstrap for quick and responsive layout design.Optimized images and used lazy loading for better performance.Ensured smooth user experience with interactive navigation."
      ]
    },
    {
      title: "Attendance Sheet for Technorizen Office",
      date: "10-August-2024 To 15-October-2024",
      useTechnologies: "React.js, Node.js, MongoDB",
      responsibilities: [
        "Developed a web-based attendance tracking system for employees.Enabled login system with role-based access (Admin/Employee).Employees could mark attendance, and admins could view, filter, and export records.Used MongoDB for backend data storage and retrieval.Deployed the app and maintained it with real-time updates."
      ]
    }
  ];
  