const projects = {
    'lucrum-sales': {
        title: 'Lucrum Sales',
        description: 'Comprehensive sales management solution handling customers, sales orders, payments, stock, reports, and sales team operations.',
        image: 'lucrum-sales/lucrum-sales.jpg',
        overview: `The Lucrum Sales App is a comprehensive mobile solution designed to manage and streamline sales operations.
      It offers tools for sales team management, territory allocation, customer management, order processing, payments, and stock tracking.
      Features route optimization, trip management, and detailed reporting enabling real-time activity tracking.`,

        techStack: [
            'Flutter',
            'Dart',
            'BLoC (State Management)',
            'GetIt (Dependency Injection)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'SQLite (Offline Persistence)',
            'Localization',
        ],

        features: [
            {
                title: 'Sales Team Management',
                items: ['Assign and monitor team performance and tasks'],
            },
            {
                title: 'Territory Management',
                items: ['Allocate sales regions and track progress'],
            },
            {
                title: 'Customer Management',
                items: [
                    'Manage customer profiles, interactions, and history',
                    'Credit limit management',
                    'Customer categorization',
                ],
            },
            {
                title: 'Sales Order Management',
                items: [
                    'Create, track, and manage sales orders',
                    'Real-time inventory checking',
                    'Price management and discounts',
                ],
            },
            {
                title: 'Payment Processing',
                items: [
                    'Multiple payment methods',
                    'Payment tracking and reconciliation',
                    'Receipt generation',
                ],
            },
            {
                title: 'Route Optimization & Trip Management',
                items: ['Plan and optimize travel routes for sales visits'],
            },
            {
                title: 'Stock Tracking',
                items: ['Real-time inventory level tracking', 'Low stock alerts'],
            },
            {
                title: 'Reporting & Analytics',
                items: [
                    'Sales, payment, and performance reports',
                    'Custom report generation',
                ],
            },
        ],

        gallery: [
            { src: 'lucrum-sales/lucrum-sales-1.jpg', alt: 'Sales Dashboard' },
            { src: 'lucrum-sales/lucrum-sales-2.jpg', alt: 'Order Management' },
            { src: 'lucrum-sales/lucrum-sales-3.jpg', alt: 'Customer Management' },
        ],

        developmentProcess: `Built using Clean Architecture ensuring separation of concerns and maintainability.
      State management with BLoC and dependency injection via GetIt provide robustness and testability.
      Offline-first design with SQLite and real-time synchronization through WebSockets ensure seamless user experience.`,

        impactResults: [
            'Increased sales team efficiency by 40%',
            'Reduced order processing time by 60%',
            'Improved inventory accuracy by 95%',
            'Enhanced customer satisfaction through better service',
            'Streamlined payment collection process',
        ],
    },
    'lucops': {
        title: 'LucOPS',
        description: 'An operational management tool for shops, enabling KPI tracking, task assignments, and reporting.',
        image: 'lucops/lucops.png',
        overview: 'LucOPS is a comprehensive operational management tool tailored for retail shops and businesses, focusing on KPI tracking, task management, and on-site audits to optimize workflows and boost productivity. The app supports CCTV monitoring and detailed reporting to enhance accountability and operational oversight.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Frappe ERP Integration',
            'Firebase (Notifications, Analytics)',
            'SQLite (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'KPI Tracking',
                items: [
                    'Real-time performance metrics',
                    'Customizable KPI configurations',
                    'Historical data analysis',
                    'Performance threshold alerts'
                ]
            },
            {
                title: 'Task Management',
                items: [
                    'Task creation and assignment',
                    'Priority-based organization',
                    'Deadline tracking with notifications',
                    'Completion verification and auditing'
                ]
            },
            {
                title: 'Reporting System',
                items: [
                    'Custom report generation',
                    'Interactive data visualization',
                    'Custom templates for reports',
                    'Export options (CSV, PDF)'
                ]
            },
            {
                title: 'Team Management',
                items: [
                    'Role-based access control',
                    'Team performance monitoring',
                    'Built-in communication tools'
                ]
            },
            {
                title: 'Inventory Integration',
                items: [
                    'Stock level monitoring',
                    'Automated inventory alerts',
                    'Stock movement tracking'
                ]
            },
            {
                title: 'Analytics Dashboard',
                items: [
                    'Real-time business insights',
                    'Performance trend analysis',
                    'Customizable widgets and layouts'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucops/lucops-1.jpg',
                alt: 'KPI Dashboard'
            },
            {
                src: 'lucops/lucops-2.jpg',
                alt: 'Task Management Interface'
            },
            {
                src: 'lucops/lucops-3.jpg',
                alt: 'Analytics & Reporting View'
            }
        ],
        developmentProcess:
            'This project was architected using Clean Architecture principles for scalability and maintainability. GetX was used for state management, dependency injection, and routing, ensuring a reactive, modular codebase. It employs an offline-first model using SQLite for persistent local data and synchronizes with Firebase in real-time via WebSockets. Advanced features include image optimization, watermarking, geofencing, and a robust role-based permission system.',
        impactResults: [
            'Single-handedly improved operational efficiency by 45%',
            'Reduced task completion time by 30% through optimized workflows',
            'Boosted team productivity with effective task management features',
            'Streamlined reporting, reducing manual effort and errors',
            'Empowered data-driven decisions with advanced analytics and reports'
        ]
    },
    'lucrum-order': {
        title: 'Lucrum Order Taking',
        description:
            'A digital ordering solution designed for waiters and call center agents to streamline restaurant operations.',
        image: 'lucrum-order/lucrum-order.jpg',
        overview:
            'Lucrum Order Taking is an end-to-end digital ordering system built to streamline restaurant operations. Designed with an intuitive interface, it enables staff to efficiently manage dine-in orders, while real-time kitchen updates enhance communication and reduce service delays. The system includes a call center module for managing takeaway and delivery orders, and a dispatcher dashboard for workflow automation, rider assignments, and order tracking.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'Frappe ERP Integration',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'SQLite (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'Order Management',
                items: [
                    'Real-time order creation, updates, and modifications',
                    'Table and service area management with live status tracking',
                    'Order history, repeat ordering, and customer tagging'
                ]
            },
            {
                title: 'Menu Management',
                items: [
                    'Dynamic menu configuration with instant updates',
                    'Category-based organization and item-level customization',
                    'Support for discounts, offers, and time-based promotions'
                ]
            },
            {
                title: 'Kitchen Display System (KDS) Integration',
                items: [
                    'Real-time order push to kitchen displays',
                    'Live order status and preparation time tracking',
                    'Seamless coordination between waitstaff and kitchen'
                ]
            },
            {
                title: 'Call Center & Dispatcher Module',
                items: [
                    'Dedicated interface for agents to place delivery/takeaway orders',
                    'Integrated customer database with address autofill',
                    'Dispatcher dashboard for workflow and rider assignment'
                ]
            },
            {
                title: 'Payment Processing',
                items: [
                    'Support for multiple payment methods (cash, card, digital wallets)',
                    'Bill splitting and tip handling',
                    'Automated invoice and receipt generation'
                ]
            },
            {
                title: 'Printer Integration',
                items: [
                    'Multi-station printer configuration (kitchen, billing, dispatch)',
                    'Automatic print triggers on order placement or status updates',
                    'Customizable print templates and branding'
                ]
            },
            {
                title: 'Offline Mode & Sync',
                items: [
                    'Local data persistence with SQLite',
                    'Automatic background synchronization with cloud',
                    'Smart conflict resolution strategies'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-order/lucrum-order-1.jpg', alt: 'Order Interface' },
            { src: 'lucrum-order/lucrum-order-2.jpg', alt: 'Menu Management' },
            { src: 'lucrum-order/lucrum-order-3.jpg', alt: 'Payment Processing' }
        ],
        developmentProcess:
            'The project was architected using Clean Architecture to ensure modularity, testability, and scalability. GetX was adopted for state management, routing, and DI. SQLite enabled offline-first capability, with real-time sync via WebSockets. The system supports deep printer integration, image optimization, watermarking, geofencing, and camera-based order capture. Role-based access and permission controls were enforced. Performance tuning and modular design tackled real-time data consistency, low-end hardware responsiveness, and complex call center/dispatcher workflows.',
        impactResults: [
            'Reduced order processing time by 50%',
            'Improved order accuracy by 95%',
            'Enhanced customer satisfaction through faster service',
            'Streamlined kitchen operations and reduced errors',
            'Enabled data-driven menu optimization'
        ]
    },

    'lucrum-kds': {
        title: 'Lucrum KDS',
        description: 'A kitchen display system (KDS) for real-time order tracking and management.',
        image: 'lucrum-kds/lucrum-kds.jpg',
        overview: 'Lucrum KDS is a real-time kitchen display system designed to streamline restaurant kitchen operations. It provides instant order visibility, preparation tracking, and efficient communication between front-of-house and kitchen staff.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'SQLite (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'Order Management',
                items: [
                    'Real-time order display and updates',
                    'Order prioritization and timing',
                    'Preparation status tracking',
                    'Order completion confirmation'
                ]
            },
            {
                title: 'Kitchen Operations',
                items: [
                    'Station-based order routing',
                    'Preparation time tracking',
                    'Order modification handling',
                    'Special instructions display'
                ]
            },
            {
                title: 'Communication',
                items: [
                    'Real-time updates to waitstaff',
                    'Kitchen-to-server messaging',
                    'Order delay notifications',
                    'Status change alerts'
                ]
            },
            {
                title: 'Analytics & Reporting',
                items: [
                    'Preparation time analytics',
                    'Station performance metrics',
                    'Order volume tracking',
                    'Peak time analysis'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-kds/lucrum-kds-1.jpg',
                alt: 'Kitchen Display Interface'
            },
            {
                src: 'lucrum-kds/lucrum-kds-2.jpg',
                alt: 'Order Management'
            },
            {
                src: 'lucrum-kds/lucrum-kds-3.jpg',
                alt: 'Analytics Dashboard'
            }
        ],
        developmentProcess: 'The project was developed using Clean Architecture principles with GetX for state management. Special attention was paid to real-time updates and low-latency communication between different parts of the system.',
        impactResults: [
            'Reduced order preparation time by 30%',
            'Improved kitchen efficiency by 40%',
            'Enhanced communication between staff',
            'Reduced order errors by 95%'
        ]
    },
    'lucrum-employee': {
        title: 'Lucrum Employee App',
        description: 'A comprehensive employee portal managing HR-related functionalities.',
        image: 'lucrum-employee.jpg',
        overview: 'Lucrum Employee App is a comprehensive employee portal designed to streamline HR operations and enhance employee engagement. It provides tools for attendance management, leave requests, document access, and internal communication.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'SQLite (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'Employee Management',
                items: [
                    'Profile management and updates',
                    'Document access and storage',
                    'Personal information management',
                    'Skills and certifications tracking'
                ]
            },
            {
                title: 'Attendance System',
                items: [
                    'Clock in/out functionality',
                    'Leave request management',
                    'Attendance history',
                    'Overtime tracking'
                ]
            },
            {
                title: 'HR Operations',
                items: [
                    'Leave balance tracking',
                    'Payroll information access',
                    'Performance reviews',
                    'Training and development'
                ]
            },
            {
                title: 'Communication',
                items: [
                    'Internal messaging system',
                    'Announcement notifications',
                    'Department updates',
                    'Event notifications'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-employee-1.jpg',
                alt: 'Employee Dashboard'
            },
            {
                src: 'lucrum-employee-2.jpg',
                alt: 'Attendance Management'
            },
            {
                src: 'lucrum-employee-3.jpg',
                alt: 'Document Management'
            }
        ],
        developmentProcess: 'The project was built using Clean Architecture principles with GetX for state management. Special focus was placed on security, and data privacy.',
        impactResults: [
            'Reduced HR workload by 50%',
            'Improved employee satisfaction',
            'Enhanced communication efficiency',
            'Streamlined document management'
        ]
    },
    'lucrum-bridal': {
        title: 'Lucrum Bridal Store',
        description: 'A specialized order-taking app for clothing and bridal stores.',
        image: 'lucrum-bridal.jpg',
        overview: 'Lucrum Bridal Store is a specialized order management system designed for bridal and clothing stores. It streamlines the entire process from customer measurements to order fulfillment, ensuring efficient operations and customer satisfaction.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'SQLite (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'Customer Management',
                items: [
                    'Customer profile creation',
                    'Measurement tracking',
                    'Order history',
                    'Preference management'
                ]
            },
            {
                title: 'Order Management',
                items: [
                    'Custom order creation',
                    'Measurement integration',
                    'Design selection',
                    'Fitting scheduling'
                ]
            },
            {
                title: 'Inventory Management',
                items: [
                    'Fabric tracking',
                    'Design catalog',
                    'Stock management',
                    'Supplier integration'
                ]
            },
            {
                title: 'Payment Processing',
                items: [
                    'Multiple payment methods',
                    'Installment tracking',
                    'Payment scheduling',
                    'Receipt generation'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-bridal-1.jpg',
                alt: 'Order Management'
            },
            {
                src: 'lucrum-bridal-2.jpg',
                alt: 'Customer Management'
            },
            {
                src: 'lucrum-bridal-3.jpg',
                alt: 'Inventory Management'
            }
        ],
        developmentProcess: 'The project was developed using Clean Architecture principles with GetX for state management. Special attention was paid to measurement accuracy, order tracking, and customer relationship management.',
        impactResults: [
            'Reduced order processing time by 45%',
            'Improved customer satisfaction',
            'Enhanced inventory management',
            'Streamlined payment collection'
        ]
    },
    'lucrum-food': {
        title: 'Lucrum Food Delivery',
        description: 'A complete food delivery platform for customers.',
        image: 'lucrum-food.jpg',
        overview: 'Lucrum Food Delivery is a comprehensive food delivery platform connecting customers with restaurants. It provides a seamless experience for ordering food, tracking deliveries, and managing restaurant operations.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Google Maps API',
            'MyFatoorah Integration'
        ],
        features: [
            {
                title: 'Customer Features',
                items: [
                    'Restaurant browsing and searching',
                    'Menu viewing and ordering',
                    'Real-time order tracking',
                    'Payment processing'
                ]
            },
            {
                title: 'Restaurant Features',
                items: [
                    'Order management',
                    'Menu management',
                    'Analytics dashboard',
                    'Performance tracking'
                ]
            },
            {
                title: 'Delivery Management',
                items: [
                    'Route optimization',
                    'Real-time tracking',
                    'Delivery assignment',
                    'Status updates'
                ]
            },
            {
                title: 'Payment System',
                items: [
                    'Multiple payment methods',
                    'Secure transactions',
                    'Payment tracking',
                    'Refund management'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-food-1.jpg',
                alt: 'Customer Interface'
            },
            {
                src: 'lucrum-food-2.jpg',
                alt: 'Restaurant Dashboard'
            },
            {
                src: 'lucrum-food-3.jpg',
                alt: 'Delivery Tracking'
            }
        ],
        developmentProcess: 'The project was built using Clean Architecture principles with GetX for state management. Special focus was placed on real-time tracking, payment security, and user experience.',
        impactResults: [
            'Increased restaurant orders by 60%',
            'Reduced delivery time by 35%',
            'Enhanced customer satisfaction',
            'Improved restaurant efficiency'
        ]
    },
    'lucrum-rider': {
        title: 'Lucrum Rider',
        description: 'A delivery rider application for managing orders and deliveries.',
        image: 'lucrum-rider.jpg',
        overview: 'Lucrum Rider is a specialized mobile application designed for delivery riders to manage and fulfill orders efficiently. It provides real-time order tracking, route optimization, and seamless communication between riders, restaurants, and customers.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Google Maps API',
            'Background Location'
        ],
        features: [
            {
                title: 'Order Management',
                items: [
                    'Real-time order notifications',
                    'Order acceptance and rejection',
                    'Order status updates',
                    'Delivery confirmation'
                ]
            },
            {
                title: 'Navigation & Routing',
                items: [
                    'Turn-by-turn navigation',
                    'Route optimization',
                    'Traffic-aware routing',
                    'Offline maps support'
                ]
            },
            {
                title: 'Location Services',
                items: [
                    'Real-time location tracking',
                    'Background location updates',
                    'Geofencing support',
                    'Location sharing'
                ]
            },
            {
                title: 'Communication',
                items: [
                    'In-app messaging',
                    'Call integration',
                    'Push notifications',
                    'Status updates'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-rider-1.jpg',
                alt: 'Order Management'
            },
            {
                src: 'lucrum-rider-2.jpg',
                alt: 'Navigation'
            },
            {
                src: 'lucrum-rider-3.jpg',
                alt: 'Earnings Dashboard'
            }
        ],
        developmentProcess: 'The project was developed using Clean Architecture principles with GetX for state management. Special attention was paid to battery optimization, real-time tracking, and offline functionality.',
        impactResults: [
            'Reduced delivery time by 25%',
            'Improved rider efficiency',
            'Enhanced customer satisfaction',
            'Increased rider earnings'
        ]
    },
    'lucrum-scanner': {
        title: 'Lucrum Scanner',
        description: 'A factory utility for scanning items and syncing data with ERP systems.',
        image: 'lucrum-scanner.jpg',
        overview: 'Lucrum Scanner is a specialized utility application designed for factory operations, enabling efficient barcode scanning and data synchronization with ERP systems. It streamlines inventory management and quality control processes.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Barcode Scanner Integration',
            'ERPNext Integration'
        ],
        features: [
            {
                title: 'Scanning Operations',
                items: [
                    'Barcode and QR code scanning',
                    'Batch scanning support',
                    'Offline scanning capability',
                    'Scan validation'
                ]
            },
            {
                title: 'Data Management',
                items: [
                    'Real-time data synchronization',
                    'Offline data storage',
                    'Conflict resolution',
                    'Data validation'
                ]
            },
            {
                title: 'ERP Integration',
                items: [
                    'Seamless ERPNext integration',
                    'Real-time updates',
                    'Data consistency checks',
                    'Error handling'
                ]
            },
            {
                title: 'Reporting',
                items: [
                    'Scan statistics',
                    'Error reports',
                    'Performance metrics',
                    'Export capabilities'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-scanner-1.jpg',
                alt: 'Scanning Interface'
            },
            {
                src: 'lucrum-scanner-2.jpg',
                alt: 'Data Management'
            },
            {
                src: 'lucrum-scanner-3.jpg',
                alt: 'Reporting Dashboard'
            }
        ],
        developmentProcess: 'The project was built using Clean Architecture principles with GetX for state management. Special focus was placed on scanning accuracy, offline functionality, and ERP integration.',
        impactResults: [
            'Increased scanning efficiency by 70%',
            'Reduced data entry errors by 95%',
            'Improved inventory accuracy',
            'Enhanced ERP system integration'
        ]
    },
    'lucrum-weighbridge': {
        title: 'Lucrum WeighBridge',
        description: 'A specialized utility app for weighbridges to manage and log weight data.',
        image: 'lucrum-weighbridge.jpg',
        overview: 'Lucrum WeighBridge is a specialized application designed for weighbridge operations, enabling efficient weight measurement, data logging, and integration with ERP systems. It streamlines the process of vehicle weight monitoring at checkposts.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Weighbridge Integration',
            'ERPNext Integration'
        ],
        features: [
            {
                title: 'Weight Management',
                items: [
                    'Real-time weight measurement',
                    'Weight validation',
                    'Multiple weight types',
                    'Calibration support'
                ]
            },
            {
                title: 'Vehicle Management',
                items: [
                    'Vehicle registration',
                    'Driver information',
                    'Trip tracking',
                    'Document management'
                ]
            },
            {
                title: 'Data Management',
                items: [
                    'Weight data logging',
                    'Offline data storage',
                    'Data synchronization',
                    'Report generation'
                ]
            },
            {
                title: 'Integration',
                items: [
                    'ERP system integration',
                    'Printer integration',
                    'Camera integration',
                    'External system connectivity'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-weighbridge-1.jpg',
                alt: 'Weight Measurement'
            },
            {
                src: 'lucrum-weighbridge-2.jpg',
                alt: 'Vehicle Management'
            },
            {
                src: 'lucrum-weighbridge-3.jpg',
                alt: 'Data Dashboard'
            }
        ],
        developmentProcess: 'The project was developed using Clean Architecture principles with GetX for state management. Special attention was paid to measurement accuracy, data integrity, and system integration.',
        impactResults: [
            'Improved measurement accuracy',
            'Reduced processing time by 60%',
            'Enhanced data reliability',
            'Streamlined operations'
        ]
    },
    'lucrum-access': {
        title: 'Lucrum Access Control',
        description: 'A ZKTeco biometric integration with Frappe ERP.',
        image: 'lucrum-access.jpg',
        overview: 'Lucrum Access Control is a specialized application that integrates ZKTeco biometric systems with Frappe ERP, providing comprehensive access control and attendance management solutions.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'ZKTeco SDK Integration',
            'Frappe Integration'
        ],
        features: [
            {
                title: 'Biometric Integration',
                items: [
                    'Fingerprint recognition',
                    'Face recognition',
                    'Card-based access',
                    'Multi-device support'
                ]
            },
            {
                title: 'Access Control',
                items: [
                    'Door access management',
                    'Time-based access',
                    'Area restrictions',
                    'Access logs'
                ]
            },
            {
                title: 'Attendance Management',
                items: [
                    'Automated attendance tracking',
                    'Leave management',
                    'Overtime calculation',
                    'Report generation'
                ]
            },
            {
                title: 'ERP Integration',
                items: [
                    'Real-time data sync',
                    'Employee management',
                    'Department integration',
                    'Report automation'
                ]
            }
        ],
        gallery: [
            {
                src: 'lucrum-access-1.jpg',
                alt: 'Access Control'
            },
            {
                src: 'lucrum-access-2.jpg',
                alt: 'Attendance Management'
            },
            {
                src: 'lucrum-access-3.jpg',
                alt: 'Integration Dashboard'
            }
        ],
        developmentProcess: 'The project was built using Clean Architecture principles with GetX for state management. Special focus was placed on biometric integration, real-time synchronization, and security.',
        impactResults: [
            'Improved access control efficiency',
            'Reduced manual attendance errors',
            'Enhanced security measures',
            'Streamlined HR operations'
        ]
    },
    'shorasha-consultant': {
        title: 'Shorasha Consultant',
        description: 'A platform for consultants to manage appointments, schedules, and client interactions.',
        image: 'shorasha-consultant.jpg',
        overview: 'Shorasha Consultant is a comprehensive platform designed for consultants to manage their practice efficiently. It provides tools for appointment scheduling, client management, and practice analytics.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Localization',
            'Push Notifications'
        ],
        features: [
            {
                title: 'Appointment Management',
                items: [
                    'Schedule management',
                    'Appointment booking',
                    'Calendar integration',
                    'Reminder system'
                ]
            },
            {
                title: 'Client Management',
                items: [
                    'Client profiles',
                    'Session history',
                    'Notes and records',
                    'Document management'
                ]
            },
            {
                title: 'Practice Management',
                items: [
                    'Revenue tracking',
                    'Performance analytics',
                    'Resource management',
                    'Report generation'
                ]
            },
            {
                title: 'Communication',
                items: [
                    'In-app messaging',
                    'Email integration',
                    'Notification system',
                    'Client feedback'
                ]
            }
        ],
        gallery: [
            {
                src: 'shorasha-consultant-1.jpg',
                alt: 'Appointment Management'
            },
            {
                src: 'shorasha-consultant-2.jpg',
                alt: 'Client Management'
            },
            {
                src: 'shorasha-consultant-3.jpg',
                alt: 'Analytics Dashboard'
            }
        ],
        developmentProcess: 'The project was developed using Clean Architecture principles with GetX for state management. Special attention was paid to appointment scheduling, client privacy, and practice management features.',
        impactResults: [
            'Increased appointment efficiency',
            'Improved client satisfaction',
            'Enhanced practice management',
            'Streamlined communication'
        ]
    },
    'shorasha-user': {
        title: 'Shorasha User',
        description: 'An end-user application enabling customers to book and manage consultant appointments seamlessly.',
        image: 'shorasha-user.jpg',
        overview: 'Shorasha User is a client-facing application that enables users to book and manage appointments with consultants. It provides a seamless experience for finding consultants, scheduling sessions, and managing appointments.',
        techStack: [
            'Flutter',
            'Dart',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Localization',
            'Push Notifications'
        ],
        features: [
            {
                title: 'Consultant Discovery',
                items: [
                    'Search and filtering',
                    'Profile viewing',
                    'Specialization browsing',
                    'Rating and reviews'
                ]
            },
            {
                title: 'Appointment Booking',
                items: [
                    'Schedule viewing',
                    'Online booking',
                    'Payment processing',
                    'Confirmation system'
                ]
            },
            {
                title: 'Session Management',
                items: [
                    'Appointment history',
                    'Session notes',
                    'Document access',
                    'Feedback system'
                ]
            },
            {
                title: 'Communication',
                items: [
                    'In-app messaging',
                    'Video call integration',
                    'Notification system',
                    'Reminder service'
                ]
            }
        ],
        gallery: [
            {
                src: 'shorasha-user-1.jpg',
                alt: 'Consultant Search'
            },
            {
                src: 'shorasha-user-2.jpg',
                alt: 'Appointment Booking'
            },
            {
                src: 'shorasha-user-3.jpg',
                alt: 'Session Management'
            }
        ],
        developmentProcess: 'The project was built using Clean Architecture principles with GetX for state management. Special focus was placed on user experience, appointment scheduling, and communication features.',
        impactResults: [
            'Improved booking efficiency',
            'Enhanced user satisfaction',
            'Increased appointment completion',
            'Better client-consultant communication'
        ]
    }
};

module.exports = projects; 