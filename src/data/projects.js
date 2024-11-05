import { Globe, Code2, Smartphone } from 'lucide-react';

export const projects = [
  {
    title: "UT-Online",
    description: "Enterprise system for service quality monitoring",
    tech: ["PHP", "Zend", "PostgreSQL", "Oracle", "Memcached", "Beanstalk", "Docker"],
    image: "/images/projects/ut.jpg",
    // demoUrl: "https://demo.example.com",
    // githubUrl: "https://github.com/yourusername/project1",
    features: [
        "Two-Factor Authentication (2FA)",
        "Beanstalk queue management",
        "Service management system integration",
        "Advanced analytics and reporting"
    ],
    icon: Globe
  },
  {
    title: "UT-Online Mobile",
    description: "Enterprise system for service quality monitoring",
    tech: ["ReactJS", "PWA", "MUI", "Oracle", "Memcached", "Beanstalk", "Docker"],
    image: "/images/projects/UTOM.jpg",
    // demoUrl: "https://demo.example.com",
    // githubUrl: "https://github.com/yourusername/project2",
    features: [
        "Two-Factor Authentication (2FA)",
        "Beanstalk queue management",
        "Service management system integration",
        "Advanced analytics and reporting"
    ],
    icon: Smartphone
  },
  {
    title: "My Wifi Backend",
    description: "Order Management System (OMS) tool for business process automation",
    tech: ["PHP", "ZEND", "Oracle", "Docker"],
    image: "/images/projects/Mywifi.jpg",
    // demoUrl: "https://demo.example.com",
    // githubUrl: "https://github.com/yourusername/project3",
    features: [
      "Workflow automation",
      "Document management",
      "Integration with legacy systems",
      "Reporting and analytics"
    ],
    icon: Code2
  },
  {
    title: "Indibiz Partner & Customer Backend",
    description: "Order Management System (OMS) for business process automation",
    tech: ["PHP", "ZEND", "Oracle", "Docker"],
    image: "/images/projects/Indibiz.jpg",
    // demoUrl: "https://demo.example.com",
    // githubUrl: "https://github.com/yourusername/project3",
    features: [
      "Workflow automation",
      "Document management",
      "Integration with legacy systems",
      "Reporting and analytics"
    ],
    icon: Code2
  },
  {
    title: "Backend Helmet Store",
    description: "A Go-based backend for Order Management System (OMS) helmet store",
    tech: ["GO-Languange", "GIN", "Postgre", "JWT"],
    image: "/images/projects/helm.jpg",
    // demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/faizalnugraha1/helmet-store",
    features: [
      "JWT Authentication: Secure user access with token-based authentication",
      "Real-Time Inventory Updates: Instant stock level synchronization",
      "Role-Based Access: Permissions based on user roles for secure management."
    ],
    icon: Code2
  },
  {
    title: "Wardrobe Racing E-Commerce",
    description: "A Laravel e-commerce platform for Wardrobe Racing with Midtrans integration.",
    tech: ["Laravel", "E-Commerce", "Payment Gateway"],
    image: "/images/projects/WR.jpg",
    // demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/faizalnugraha1/wardroberacingmx-Web",
    features: [
      "Midtrans Payment Integration: Secure and seamless checkout",
      "Product & Inventory Management: Simplified product updates and stock control",
      "Order Tracking: Real-time updates for customer orders",
      "User Dashboard: Centralized management of orders and analytics."
    ],
    icon: Globe
  },
  {
    title: "LPPM ITENAS",
    description: "A Laravel Document Management System (DMS) platform for LPPM ITENAS.",
    tech: ["Laravel", "DMS", "Enterprise Document Processing System"],
    image: "/images/projects/surat.jpg",
    // demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/faizalnugraha1/lppm-itenas",
    features: [
      "Letter Generation",
      "Document Management",
      "Workflow Management",
      "User Management"
    ],
    icon: Globe
  },
];