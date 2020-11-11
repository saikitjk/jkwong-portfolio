import PwGen from "../../assets/project_images/pwGenerator.png";
import CodeQuiz from "../../assets/project_images/codeQuiz.png";
import DayPlan from "../../assets/project_images/DayPlan.png";
import EatBurger from "../../assets/project_images/eat-da-burger.png";
import EmpTracker from "../../assets/project_images/emp_tracker.png";
import empTempEngine from "../../assets/project_images/empTempEngine.png";
import JobFinder from "../../assets/project_images/jobFinder.png";
import NoteTaker from "../../assets/project_images/NoteTaker.png";
import Project1 from "../../assets/project_images/Project1.png";
import ResumeGen from "../../assets/project_images/readmeGenerator.png";
import WeatherDash from "../../assets/project_images/weatherDash.png";
import FitTracker from "../../assets/project_images/fitnessTracker.png";
import ReactEmpDir from "../../assets/project_images/reactEmpDir.png";
import Coming from "../../assets/project_images/coming.jpg";

const projectData = [
  {
    title: "Password Generator",
    snapShot: PwGen,
    desc:
      "A password generator that generates passwords based on user's desired format.",
    demoURL: "https://saikitjk.github.io/PasswordGenerator/PWGenerator.html",
    githubURL: "https://github.com/saikitjk/PasswordGenerator",
    category: ["html", "css", "javascript"],
  },
  {
    title: "Coding Quiz Challenge",
    snapShot: CodeQuiz,
    desc:
      "A Coding quiz games that provides Javascript related questions for users to practice.",
    demoURL: "https://saikitjk.github.io/CodingQuizChallenge/main.html",
    githubURL: "https://github.com/saikitjk/CodingQuizChallenge",
    category: ["html", "css", "Javascript", "jQuery"],
  },
  {
    title: "Day Planner",
    snapShot: DayPlan,
    desc:
      "A day planner that helps users to plan and organize their daily plans.",
    demoURL: "https://saikitjk.github.io/DayPlanner/main.html",
    githubURL: "https://github.com/saikitjk/DayPlanner",
    category: ["html", "css", "Javascript", "jQuery"],
  },
  {
    title: "Weather Dashboard",
    snapShot: WeatherDash,
    desc:
      "A  weather dashboard that provides current weather and forecast data by cities and user's geocode.",
    demoURL: "https://saikitjk.github.io/WeatherDashboard/weatherDash.html",
    githubURL: "https://github.com/saikitjk/WeatherDashboard",
    category: ["html", "css", "Javascript", "jQuery", "API"],
  },
  {
    title: "Newletter-Made-EZ",
    snapShot: Project1,
    desc: "A Newsletter application",
    demoURL: "https://sheikb08.github.io/UW-Project-1/",
    githubURL: "https://github.com/saikitjk/Newletter-Made-EZ-Project",
    category: ["html", "css", "Javascript", "jQuery", "API"],
  },
  {
    title: "Readme Generator",
    snapShot: ResumeGen,
    desc:
      "A Readme generator is a CLI application that helps users quickly create a professional README for a project",
    demoURL:
      "https://drive.google.com/file/d/1cA9iO_rHOPvi6n-X92jT8BCtyjEPQMTV/preview",
    githubURL: "https://github.com/saikitjk/ReadmeGenerator",
    category: ["html", "css", "Javascript", "Nodejs"],
  },
  {
    title: "Note Taker",
    snapShot: NoteTaker,
    desc: "A note taking application that allows use to manage their notes.",
    demoURL: "https://notestaker-jk.herokuapp.com/",
    githubURL: "https://github.com/saikitjk/NoteTaker",
    category: ["html", "css", "Javascript", "Nodejs", "Expressjs"],
  },
  {
    title: "Employee Summary Template Engine",
    snapShot: empTempEngine,
    desc:
      "A CLI application that helps users quickly generate a employee summary page.",
    demoURL:
      "https://drive.google.com/file/d/1zLFFWpwv2SVITyzmE1PLB-HOlbScdpPs/preview",
    githubURL: "https://github.com/saikitjk/Employee-Summary-Template-Engine",
    category: ["html", "css", "Javascript", "Nodejs", "Expressjs"],
  },
  {
    title: "Employee Tracker",
    snapShot: EmpTracker,
    desc:
      "A CLI app that helps users to interact with employee information stored in database.",
    demoURL:
      "https://drive.google.com/file/d/1Y4rvHJFNd9zKx8uDWNMWYE6yTSP1y5Ga/preview",
    githubURL: "https://github.com/saikitjk/Employee_Tracker",
    category: [
      "html",
      "css",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "MySQL",
      "jQuery",
    ],
  },
  {
    title: "Eat-da-burger",
    snapShot: EatBurger,
    desc:
      "A burger logger that helps users tracking the status of their burgers.",
    demoURL: "https://eat-da-burger-jk5.herokuapp.com",
    githubURL: "https://github.com/saikitjk/Eat-Da-Burger",
    category: [
      "html",
      "css",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "MySQL",
      "ORM",
      "Handlebars",
    ],
  },
  {
    title: "Job Finder",
    snapShot: JobFinder,
    desc: "A simple Job Finder app that helps users' job searhing experience.",
    demoURL: "https://uw-jobfinder.herokuapp.com",
    githubURL: "https://github.com/saikitjk/JobFinder",
    category: [
      "html",
      "css",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "MySQL",
      "ORM",
      "Handlebars",
      "Sequelize",
      "Passport",
      "bcryptjs",
    ],
  },
  {
    title: "Fitness Tracker",
    snapShot: FitTracker,
    desc:
      "A full-stack workout tracker application that helps users to track their workout routine and performance",
    demoURL:
      "https://uw-fitness-tracker.herokuapp.com/?id=5f9731b952b32c002e23e352",
    githubURL: "https://github.com/saikitjk/FitnessTracker",
    category: [
      "html",
      "css",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "MySQL",
      "ORM",
      "Handlebars",
    ],
  },
  {
    title: "React Employee Directory",
    snapShot: ReactEmpDir,
    desc:
      "A React app that provides you a list of employees with their avators, names, emails, phone numbers, DOBs and ages.",
    demoURL:
      "https://uw-fitness-tracker.herokuapp.com/?id=5f9731b952b32c002e23e352",
    githubURL: "https://saikitjk.github.io/react-employee-directory",
    category: ["html", "css", "Javascript", "Nodejs", "React", "Bootstrap"],
  },
];

export default projectData;
