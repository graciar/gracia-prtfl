const projectsList = [
  {
    id: "nina-studio",
    title: "nina studio - D2C Marketplace Platform",
    stack: "React, Flask, PostgreSQL, Supabase, JWT, Midtrans API, Supabase, JWT, Midtrans API",
    overview: "I developed a comprehensive Direct-to-Consumer (D2C) marketplace designed to streamline the shopping experience while providing robust administrative controls. The platform focuses on security, seamless payment processing, and efficient role-based navigation.",
    features: [
      "Built a decoupled system using Flask for a high-performance RESTful API and React for a dynamic, responsive user interface.",
      "Integrated Google reCAPTCHA to prevent bot-driven spam on forms and utilized Postman for rigorous API testing and documentation.",
      "Integrated the Midtrans Payment Gateway, allowing for secure, real-time transaction processing",
      "Leveraged Supabase Storage for optimized image hosting, ensuring fast load times for product catalogs.",
      "Polished the interface with Lucide-react icons for a clean, modern aesthetic",
      "Integrated Mailjet as the email service provider to handle password recovery and help-center messages."
    ],
    vid: [
      "https://hagdkgdrgqmvzyxcaazv.supabase.co/storage/v1/object/public/projects/ninastudio.mp4",
      "https://hagdkgdrgqmvzyxcaazv.supabase.co/storage/v1/object/public/projects/ninastudio2.mp4",
    ],
    // vid: "https://hagdkgdrgqmvzyxcaazv.supabase.co/storage/v1/object/public/projects/ninastudio.mp4",
    code: "",
    image: "./shop.png",
    year: "2025",
    note: "Product images were sourced via AI generation and Unsplash"
  },
  {
    id: "chat-app",
    title: "Chat App",
    stack: "React, Flask, PostgreSQL, JWT, Socketio",
    overview: "Real-time chat app with secure login, instant messaging, friend requests, and one-on-one chats",
    features: [
      "Developed core social features, including the ability to send, accept, and manage user-to-user friend requests.",
      "Implemented Socket.IO (WebSockets) for real-time message delivery and created one-on-one \"rooms\" for private conversations. ",
      "Secured the application with JWT (JSON Web Token) authentication for user registration, managing token lifecycle and secure login state on the client.",
    ],
    vid: ["https://hagdkgdrgqmvzyxcaazv.supabase.co/storage/v1/object/public/projects/chatapp.mp4"],
    code: "",
    image: "./chat.png",
    year: "2025",
    note: ""
  },
  {
    id: "event-management",
    title: "event manager - Ticket System",
    stack: "Laravel, MySQL, Bootstrap",
    overview: "A management system built to handle an event. I developed a platform where admins can create and organize events, while users can browse the schedule and purchase tickets directly through the app.",
    image: "/projects/event-manager.png", 
    features: [
      "Simple Role-Based Access: Separate permissions for Admins (manage events) and Users (view/buy tickets).",
      "Admin CRUD: Developed a dashboard to Create, Read, Update, and Delete event listings and ticket details.",
      "Database Management: Used MySQL to store and relate user accounts, event information, and ticket sales.",
      "Ticket Logic: Built functionality to define ticket prices and set limits on how many tickets are available for each event.",
      "Form Validation: Implemented Laravel's built-in validation to handle user registration and secure ticket booking."
    ],
    vid:[],
    code: "https://github.com/graciar/laravel-crud",
    image: "./cal.png",
    year: "2024",
    note: ""
  }
];

export default projectsList;
