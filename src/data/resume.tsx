import { Icons } from "@/components/icons";
import { ResumeIcon } from "@radix-ui/react-icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { title } from "process";

// I'm currently advancing my skills as an IT Intern at Aveum Technologies

export const DATA = {
  name: "Aniruddh Nagare",
  initials: "AN",
  url: "https://codebyanii.vercel.app",
  location: "Thane, Maharashtra",
  locationLink: "https://www.google.com/maps/place/thane",
  description:
    "I'm a Developer in my 20s pursuing My Bachelor Degree at DMCE. My academic journey has been marked by continuous skill development and a diverse project portfolio. Currently, I'm broadening my expertise by diving deep into System Design and software architecture.",
  summary:
    "As a passionate Developer, I thrive on building innovative technology solutions. With lumpsome of hands-on experience working with React, Node.js, and MongoDB, My technical toolkit has expanded to include React Native and flutter for mobile development and Golang for backend programming, reflecting my commitment to continuous learning and technological growth ",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "Node.js",
    "Django",
    "React Native",
    "Flutter",
    "Firebase",
    "Postgres",
    "Java",
    "Python",
    "Golang",
  ],
  navbar: [
    // { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://drive.google.com/file/d/17Wg5VQvE03wxrxSVK5-HSyn2xQkE-_hQ/view", icon: ResumeIcon, label: "Resume" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "codebyanii@gmail.com",
    tel: "+91 7709966738",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ANNI69",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aniruddh-nagare-698787208/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AniruddhNagare",
        icon: Icons.x,

        navbar: true,
      },
      leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Anii77/",
        icon: Icons.LeetCode,
        navbar: true,
      },
      // instagram:{
      //   name: "Instagram",
      //   url: "https://www.instagram.com/framesbyanii/",
      //   icon: Icons.Instagram,
      //   navbar: true,
      // }
    },
  },

  work: [
    {
      company: "Aveum Technologies",
      href: "https://aevumsolutions.com/",
      badges: [],
      location: "Remote",
      title: "IT Intern",
      logoUrl: "/atomic.jpeg",
      start: "June 2023",
      end: "Aug 2023",
      description:
        "Developed a web application for the company's internal use. The application was built using React, Node.js, and MongoDB. The application was used to manage the Stock Prices and the company's internal data.",
    },
    {
      company: "CrossAsyst",
      badges: [],
      href: "https://www.crossasyst.com/",
      location: "Remote",
      title: "Java Developer",
      logoUrl: "/crossassyst.png",
      start: "May 2022",
      end: "Aug 2022",
      description:
        "Developed a Spring Boot Auction System for the company.The System was used to manage the Auctions and the Bids.",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Datta Meghe College of Engineering",
      href: "https://dmce.ac.in",
      degree: "Bachelor's Degree of Engineering (BE) in Information Technology",
      logoUrl: "/dmce.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Vidyankar Polytechnic",
      href: "https://vpt.edu.in/diploma/polytechnic/index.html",
      degree: "Diploma in Information Technology",
      logoUrl: "/vp_logo.jpeg",
      start: "2020",
      end: "2023",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "UNiShare",
      href: "https://projectunishare.vercel.app",
      dates: "July 2024 - September 2024",
      active: true,
      description:
        "Developed a web application for students to share their notes and study materials. The application was built using React, Node.js, and MongoDB.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://projectunishare.vercel.app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://www.pinoylinux.org/wp-content/uploads/2023/08/MERN.jpg",
      video:
        "",
    },
    {
      title: "Panels Clone | React Native and Clerk",
      href: "https://github.com/ANNI69/MKBHD-Panels-ReactNative-Clone-With-Clerk.git",
      dates: "Sept 2024 - Dec 2024",
      active: false,
      description:
        "Developed a clone of the Panels App by MKBHD using React Native and Clerk. The application is A Wallpaper Providing App.",
      technologies: [
        "React Native",
        "Typescript",
        "Firebase",
        "Clerk",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ANNI69/MKBHD-Panels-ReactNative-Clone-With-Clerk.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.ytimg.com/vi/65ciAONXv0M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs32a-FC2xpsh7quqSpgr__UylgA",
      video:
        "",
    },
    {
      title: "Feed Forward",
      href: "https://github.com/ANNI69/h2.0",
      dates: "April 2023 - June 2023",
      active: true,
      description:
        "Developed A Web App For Manage The Excess Food From The Events And Parties. The Application Was Built Using NextJS, Node.js, And MongoDB.",
      technologies: [
        "ReactJs",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ANNI69/h2.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://media.licdn.com/dms/image/D4E12AQEIIDCbb5draA/article-cover_image-shrink_720_1280/0/1696065152678?e=2147483647&v=beta&t=vplfPARtNBS22Cj-JVaqLwndsIwkKLcJpAjwNOyphDc",
      video: "",
    },
    {
      title: "AnimeChan",
      href: "https://github.com/ANNI69/animechan",
      dates: "January 2024 - March 2024",
      active: true,
      description:
        "A web application to watch anime and read manga. The application was built using NextJS, ShadCN , Node.js, and MongoDB.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Magic UI",
        "Prisma",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ANNI69/animechan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://www.cloudwards.net/wp-content/uploads/2023/10/Where-to-Watch-Anime-for-Free.png",
      video: "",
    },
    
  ],
  hackathons: [
    {
      title: "Mumbai Hacks 2024 ",
      dates: "October 11th - 13th, 2024",
      location: "Mumbai",
      description:
        "Developed a Cross Platform Mobile Application With Flutter and Ollama for Detecting Food Adulteration.",
      image: "https://mumbaihacks.com/_next/static/media/logo_team_dark.c05d6a0d.svg",
      mlh: "https://mumbaihacks.com/",
      links: [],
    },
    {
      title: "Web Cade",
      dates: "September 13th - 14th, 2024",
      location: "St. John College of Engineering and Technology, Palghar",
      description:
        "Cross Border Ecommerce Solution for Small Businesses. To Expand Their Business Globally.",
      image:
        "https://i.ibb.co/hmmnPjQ/Whats-App-Image-2024-10-11-at-11-54-53-AM.jpg",
      mlh: "https://in.linkedin.com/company/st-john-college-of-engineering-and-management",
      links: [],
    },
    {
      title: "Coherence",
      dates: "March 23rd - 24th, 2024",
      location: "Vidyavaridhi College of Engineering and Technology, Vasai",
      description:
        "Developed An Ai Model For Call Center To Predict The Customer's Mood And Sentiment.",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQHo9n_jD3BQ9A/company-logo_200_200/0/1693318376245/mlsc_vcet_logo?e=2147483647&v=beta&t=adyLMfJ3YuCqOvparS6b3YL8tlyhHE-Bs-bVof8bxnk",
      mlh: "https://in.linkedin.com/company/mlsc-vcet",
      links: [],
    },
    {
      title: "Datta Meghe College of Engineering, Hackathon 2.0",
      dates: "September 14th - 16th, 2024",
      location: "Airoli, Navi Mumbai",
      description:
        "Feed Forward is a web application that helps to manage the excess food from the events and parties. The application was built using NextJS, Node.js, and MongoDB.",
      image:
        "https://media.licdn.com/dms/image/C4E03AQEVCCTNkTw8tQ/profile-displayphoto-shrink_200_200/0/1624706070465?e=2147483647&v=beta&t=4AeArPToBXCoZqO1Y0hGBiqsobSGKHTDlcJcvzQGfwQ",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Vivekanand Education Society's Institute of Technology, Technothon 23",
      dates: "March 19th - 20th, 2023",
      location: "Chembur, Mumbai",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUXO9Kfj6AOWq_D7XjzAMmJop57DmDUQmnQ&s",
      links: [],
    },
    // {
    //   title: "Vivekanand Education Society's Institute of Technology, Technothon 23",
    //   dates: "April 11th, 2013",
    //   location: "Chembur, Mumbai",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const; 
