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
            'Frappe Framework (ERPNext backend)',
            'BLoC (State Management)',
            'GetIt (Dependency Injection)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Hive (Offline Persistence)',
            'Localization',
            'Google Maps (Navigation & Directions)',
            'Geolocation & Distance Calculation',
        ],


        features: [
            {
                title: 'Sales Team Management',
                items: [
                    'Assign and monitor team performance',
                    'Task tracking and delegation'
                ],
            },
            {
                title: 'Territory Management',
                items: [
                    'Allocate sales regions',
                    'Monitor progress across territories'
                ],
            },
            {
                title: 'Customer Management',
                items: [
                    'Manage profiles, interactions, and purchase history',
                    'Credit limit enforcement',
                    'Customer segmentation and categorization'
                ],
            },
            {
                title: 'Sales Order Management',
                items: [
                    'Create, edit, and track sales orders',
                    'Real-time inventory and stock validation',
                    'Price lists, discounts, and approval workflows'
                ],
            },
            {
                title: 'Payment Processing',
                items: [
                    'Support for multiple payment methods',
                    'Payment tracking and automated reconciliation',
                    'Instant receipt generation and logs'
                ],
            },
            {
                title: 'Route Optimization & Trip Management',
                items: [
                    'Plan and optimize sales routes',
                    'Track visit history and coverage'
                ],
            },
            {
                title: 'Stock Tracking',
                items: [
                    'Real-time inventory updates',
                    'Low stock and expiry alerts'
                ],
            },
            {
                title: 'Reporting & Analytics',
                items: [
                    'Sales, collection, and team performance reports',
                    'Custom dashboards and exportable analytics'
                ],
            }
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
            'Frappe Framework (ERPNext backend)',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Firebase (Notifications, Analytics)',
            'SQLite (Local Storage)',
            'Geofencing',
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
            'Cross-platform Flutter app (Android & Windows) for creating and managing restaurant orders with role-based workflows.',
        image: 'lucrum-order/home.png',
        overview:
            'Lucrum Order Taking is an end-to-end digital ordering system built to streamline restaurant operations. Designed with an intuitive interface, it enables staff to efficiently manage dine-in orders, while real-time kitchen updates enhance communication and reduce service delays. The system includes a call center module for managing takeaway and delivery orders, and a dispatcher dashboard for workflow automation, rider assignments, and order tracking.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
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
            },
            {
                title: 'Cross-Platform Responsiveness',
                items: [
                    'Android & Windows support',
                    "Optimized for low-end devices",
                    "Responsive across all screen sizes",
                    'Complex call center/dispatcher workflows',
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-order/Home.png', alt: 'Home Menu' },
            { src: 'lucrum-order/Item customization.png', alt: 'Item Customization' },
            { src: 'lucrum-order/Customer Creation.png', alt: 'Customer Creation' },
            { src: 'lucrum-order/Cart.png', alt: 'Cart' },
            { src: 'lucrum-order/Orders.png', alt: 'Orders' },
            { src: 'lucrum-order/OrdersTablet.png', alt: 'Orders Tablet' },
            { src: 'lucrum-order/Order Details.png', alt: 'Order Details' },

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
        image: 'lucrum-kds/home.png',
        overview: 'Lucrum KDS is a real-time kitchen display system designed to streamline restaurant kitchen operations. It provides instant order visibility, preparation tracking, and efficient communication between front-of-house and kitchen staff.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'Getx (State Management & Routing & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Hive (Local Storage)',
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
        ],
        gallery: [
            {
                src: 'lucrum-kds/home.png',
                alt: 'Kitchen Display Interface'
            },

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
        description: 'A workforce management solution with secure attendance, leave, and HR operations.',
        image: 'lucrum-employee.jpg',
        overview: 'Lucrum Employee App streamlines workforce management by enabling employees to mark attendance, apply for leave, and manage HR interactions with ease. Featuring geofencing for accurate location-based check-ins and UUID-based device locking, it ensures data integrity and enhances operational accountability.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Firebase (Notifications, Crashlytics, Analytics)',
            'Sembast (Local Storage)',
            'Geofencing',
            'Device UUID Lock',
            'Mock Location Protection',
            'Localization'
        ],
        features: [
            {
                title: 'Employee Management',
                items: [
                    'Profile updates and personal info',
                    'Access to HR documents',
                    'Track skills and certifications'
                ]
            },
            {
                title: 'Attendance & Leave',
                items: [
                    'Clock in/out with geofencing',
                    'Leave application and tracking',
                    'Attendance logs and history',
                    'Overtime management'
                ]
            },
            {
                title: 'HR Tools',
                items: [
                    'Leave balance insights',
                    'Payroll information access',
                    'Performance review tracking',
                    'Training and development modules'
                ]
            },
            {
                title: 'Internal Communication',
                items: [
                    'In-app messaging',
                    'HR and department announcements',
                    'Push notifications for updates',
                    'Company events and alerts'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-employee-1.jpg', alt: 'Employee Dashboard' },
            { src: 'lucrum-employee-2.jpg', alt: 'Attendance Management' },
            { src: 'lucrum-employee-3.jpg', alt: 'Document Management' }
        ],
        developmentProcess: 'Developed using Clean Architecture and GetX for robust state management. The app includes advanced security measures like mock location detection and device-level login binding using UUID.',
        impactResults: [
            '50% reduction in HR workload',
            'Improved employee self-service efficiency',
            'Secure and accurate attendance tracking',
            'Faster communication and HR response times'
        ]
    },

    'lucrum-bridal': {
        title: 'Lucrum Bridal Store',
        description: 'An order management solution tailored for bridal and clothing retailers.',
        image: 'lucrum-bridal.jpg',
        overview: 'Specifically designed for bridal suit retailers, Lucrum Bridal Store simplifies inventory and order management. Retailers can manage customer profiles, capture detailed measurements, browse a design catalog, and streamline custom order workflows. The app enhances operational efficiency and elevates the customer shopping experience.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Firebase (Crashlytics, Analytics)',
            'Hive (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'Customer Management',
                items: [
                    'Customer profile creation',
                    'Detailed measurement tracking',
                    'Order history',
                    'Preference and style management'
                ]
            },
            {
                title: 'Order Management',
                items: [
                    'Custom bridal order creation',
                    'Integrated size specifications',
                    'Design catalog browsing',
                    'Fitting and delivery scheduling'
                ]
            },
            {
                title: 'Inventory & Stock',
                items: [
                    'Fabric and stock tracking',
                    'Bridal design catalog',

                ]
            },
            {
                title: 'Payment Handling',
                items: [
                    'Support for multiple payment modes',
                    'Installment and due tracking',
                    'Split payments',
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-bridal-1.jpg', alt: 'Order Management' },
            { src: 'lucrum-bridal-2.jpg', alt: 'Customer Management' },
            { src: 'lucrum-bridal-3.jpg', alt: 'Inventory Management' }
        ],
        developmentProcess: 'Built with Clean Architecture and GetX for modular state management. Focus areas included accurate measurement capture, seamless order processing, and a user-centric experience for retail shopkeepers.',
        impactResults: [
            'Reduced order processing time by 45%',
            'Enhanced customer experience and satisfaction',
            'Improved inventory visibility and control',
            'Simplified payment and installment tracking'
        ]
    },
    'lucrum-food': {
        title: 'Lucrum Food Delivery',
        description: 'A customer-facing food delivery app with real-time order tracking and seamless UX.',
        image: 'lucrum-food.jpg',
        overview: 'Lucrum Food Delivery is a mobile-first food ordering platform built for end users. It offers a smooth and engaging experience, allowing users to browse nearby restaurants, explore menus, place orders, track rider location in real-time, and manage order history. Inspired by modern delivery standards, it brings reliability, speed, and user convenience to the forefront.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics, Notifications)',
            'Google Maps API (Live Tracking)',
            'Payment Integrations',
            'Hive (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'User Experience',
                items: [
                    'Restaurant discovery and search',
                    'Menu browsing and item customization',
                    'Cart and order checkout',
                    'Live order status and rider location tracking',
                    'Push notifications for status updates'
                ]
            },
            {
                title: 'Order Management',
                items: [
                    'Order history and reordering',
                    'Rating and feedback submission',
                    'Complaint and support ticket creation',
                    'Refund status visibility'
                ]
            },
            {
                title: 'Payments',
                items: [
                    'Multiple payment methods',
                    'Transaction history and receipts'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-food-1.jpg', alt: 'Home Screen – Restaurant Listing' },
            { src: 'lucrum-food-2.jpg', alt: 'Live Order Tracking' },
            { src: 'lucrum-food-3.jpg', alt: 'Order History & Complaints' }
        ],
        developmentProcess: 'Developed using Clean Architecture and GetX for scalable, maintainable code. Focused on real-time experience with WebSockets, Google Maps tracking, and seamless payment integration.',
        impactResults: [
            'Enhanced customer ordering experience',
            'Faster delivery visibility with live tracking',
            'Reduced complaints through better transparency',
            'Improved app engagement and retention'
        ]
    },

    'lucrum-rider': {
        title: 'Lucrum Rider',
        description: 'A smart delivery app for riders to manage, track, and fulfill orders efficiently.',
        image: 'lucrum-rider.jpg',
        overview: 'Lucrum Rider is a purpose-built delivery application designed to streamline the daily operations of delivery agents. With real-time order updates, integrated navigation, and optimized workflows, it empowers riders to manage deliveries efficiently while ensuring fast, accurate, and transparent customer service.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io) – Live Order Sync',
            'Firebase (Crashlytics, Analytics, Notifications)',
            'Google Maps API (Navigation & Routing)',
            'Background Location & Geofencing',
            'Hive (Local Storage)',
            'Localization'
        ],
        features: [
            {
                title: 'Order Management',
                items: [
                    'Instant order notifications',
                    'Accept/reject workflow',
                    'Order detail view',
                    'Status update controls (picked, delivered)'
                ]
            },
            {
                title: 'Navigation & Routing',
                items: [
                    'Integrated turn-by-turn navigation',
                    'Route optimization with live traffic',
                    'Delivery address mapping',
                    'Offline fallback support'
                ]
            },
            {
                title: 'Rider Location Services',
                items: [
                    'Real-time GPS tracking',
                    'Background location updates',
                    'Geofence triggers',
                    'Location sharing with dispatch'
                ]
            },
            {
                title: 'Rider Experience',
                items: [
                    'Profile and earnings overview',
                    'Order history access',
                    'Support contact & resources',
                    'Push notifications and status alerts'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-rider-1.jpg', alt: 'Order Management Interface' },
            { src: 'lucrum-rider-2.jpg', alt: 'Live Navigation View' },
            { src: 'lucrum-rider-3.jpg', alt: 'Earnings & History Dashboard' }
        ],
        developmentProcess: 'Built with Clean Architecture and GetX, the app emphasizes real-time performance, optimized battery usage, and seamless rider UX. WebSocket and background services power uninterrupted delivery operations.',
        impactResults: [
            '25% faster delivery turnaround',
            'Higher rider productivity and satisfaction',
            'Reduced missed deliveries and delays',
            'Improved customer experience through accurate ETAs'
        ]
    },

    'lucrum-scanner': {
        title: 'Lucrum Scanner',
        description: 'A factory-grade scanning utility for real-time ERP sync and offline operations.',
        image: 'lucrum-scanner.jpg',
        overview: 'Lucrum Scanner is a purpose-built application for factory environments, enabling fast and accurate barcode/QR code scanning with robust offline storage and seamless ERP integration. Designed for carton and item scanning machines, it supports high-volume batch scanning while ensuring data integrity and operational continuity.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Firebase (Crashlytics, Analytics)',
            'Local Database (Hive/Sembast)',
            'Offline-first Architecture'
        ],
        features: [
            {
                title: 'Scanning Operations',
                items: [
                    'Fast barcode/QR scanning',
                    'Batch & continuous scan mode',
                    'Offline-first support',
                    'Validation and duplicate detection'
                ]
            },
            {
                title: 'Data Handling',
                items: [
                    'Local database with sync queue',
                    'Auto sync on connectivity',
                    'Conflict resolution logic',
                    'Real-time data validation'
                ]
            },
            {
                title: 'ERP Sync',
                items: [
                    'Real-time ERPNext updates',
                    'Reliable sync engine',
                    'Error capture and retry mechanism',
                    'Consistency validation'
                ]
            },
            {
                title: 'Insights & Reports',
                items: [
                    'Daily scan logs',
                    'Error reporting & diagnostics',
                    'Performance metrics',
                    'Export (CSV/PDF) capabilities'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-scanner-1.jpg', alt: 'Live Scanning Interface' },
            { src: 'lucrum-scanner-2.jpg', alt: 'Data Sync & Offline Queue' },
            { src: 'lucrum-scanner-3.jpg', alt: 'Scan Summary Dashboard' }
        ],
        developmentProcess: 'Built using Clean Architecture with GetX for reactive state handling. Designed for rugged industrial use cases with offline-first architecture, scan reliability, and ERP integration as core pillars.',
        impactResults: [
            '70% faster scanning in production lines',
            '95% reduction in manual data errors',
            'Zero data loss with offline queueing',
            'Streamlined ERP sync and inventory updates'
        ]
    },

    'lucrum-weighbridge': {
        title: 'Lucrum WeighBridge',
        description: 'Offline-first weighbridge system with ERP & machine integration.',
        image: 'lucrum-weighbridge.jpg',
        overview: 'Lucrum WeighBridge is a Windows-based industrial-grade application designed to capture real-time truck weight data from weighbridge machines, log it securely, and sync with ERP systems. It supports offline-first workflows, CCTV camera feeds, and full audit trails, ensuring operational continuity and data accuracy at loading/unloading stations.',
        techStack: [
            'Flutter (Windows Build)',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'Firebase (Crashlytics, Analytics)',
            'Native Serial Port Integration (Weighbridge)',
            'Offline-first Architecture (SQLite/Isar)',
            'CCTV Camera Integration',
            'ERPNext Sync'
        ],
        features: [
            {
                title: 'Weighing Operations',
                items: [
                    'Live weight capture from weighbridge',
                    'Gross/Tare/Net weight calculation',
                    'Auto/manual validation',
                    'Calibration logs'
                ]
            },
            {
                title: 'Vehicle & Trip Logging',
                items: [
                    'Vehicle & driver registration',
                    'Trip and load tracking',
                    'Attach weight to delivery note or item',
                    'Document and license capture'
                ]
            },
            {
                title: 'Offline-first Data Handling',
                items: [
                    'Local weight log storage',
                    'Auto-sync to ERPNext when online',
                    'Sync conflict resolution',
                    'Audit trail for each record'
                ]
            },
            {
                title: 'Integrations',
                items: [
                    'Weighbridge machine (serial port/USB)',
                    'ERPNext for DN & stock entry sync',
                    'CCTV camera snapshots',
                    'Thermal/receipt printer support'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-weighbridge-1.jpg', alt: 'Live Weight Interface' },
            { src: 'lucrum-weighbridge-2.jpg', alt: 'Vehicle & Trip Management' },
            { src: 'lucrum-weighbridge-3.jpg', alt: 'CCTV & Sync Dashboard' }
        ],
        developmentProcess: 'Built with Clean Architecture principles using GetX for reactive flows and modularity. Focused on hardware integration, accurate offline data capture, and secure ERP syncing to streamline weighbridge checkpoints.',
        impactResults: [
            '60% faster truck processing',
            'Real-time ERP weight logging',
            'Near-zero weight logging errors',
            'Full traceability via CCTV & audit logs'
        ]
    },
    'lucrum-access': {
        title: 'Lucrum Access Control',
        description: 'Biometric access and attendance system with ERPNext integration.',
        image: 'lucrum-access.jpg',
        overview: 'Lucrum Access Control is a powerful biometric and access management system that integrates ZKTeco hardware (fingerprint, face, RFID) with Frappe ERP. Built for security-critical environments, it automates attendance, restricts access based on policies, and syncs data with HR modules in real-time.',
        techStack: [
            'Flutter (Desktop + Android)',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'GetX (State Management, Routing, DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'WebSockets (Socket.io)',
            'ZKTeco SDK (Face, Finger, RFID)',
            'Firebase (Crashlytics, Analytics)',
            'Frappe ERP Integration',
            'Offline-first Support'
        ],
        features: [
            {
                title: 'Biometric Integration',
                items: [
                    'Fingerprint & face recognition',
                    'RFID/card-based login',
                    'Multi-device sync',
                    'Local log fallback in case of network loss'
                ]
            },
            {
                title: 'Access Control',
                items: [
                    'Time-slot based entry',
                    'Location-based door control',
                    'Restricted zone policies',
                    'Full access logs with tamper alerts'
                ]
            },
            {
                title: 'Attendance Automation',
                items: [
                    'Auto punch-in/out logging',
                    'Overtime and leave tracking',
                    'Department-level filters',
                    'Compliance-ready reports'
                ]
            },
            {
                title: 'ERP Integration',
                items: [
                    'Real-time Frappe HR sync',
                    'Employee & shift management',
                    'Trigger-based record syncing',
                    'Custom report generation'
                ]
            }
        ],
        gallery: [
            { src: 'lucrum-access-1.jpg', alt: 'Access Control Interface' },
            { src: 'lucrum-access-2.jpg', alt: 'Attendance Dashboard' },
            { src: 'lucrum-access-3.jpg', alt: 'Biometric Logs' }
        ],
        developmentProcess: 'Built with Clean Architecture and GetX, the system emphasizes low-latency sync, fail-safe offline fallback, and deep hardware-level biometric integration. Designed for high-availability environments with security-first requirements.',
        impactResults: [
            'Eliminated manual attendance entry',
            'Reduced unauthorized access incidents by 90%',
            'Streamlined HR record keeping',
            'Automated compliance reporting'
        ]
    },
    'shorasha-consultant': {
        title: 'Shorasha Consultant',
        description: 'A consultancy management app for appointments, clients, and practice analytics.',
        image: 'shorasha-consultant.jpg',
        overview: 'Shorasha Consultant is a professional-grade platform tailored for consultants to manage their appointments, clients, and operations. It includes scheduling tools, session tracking, client communication, and real-time practice insights — all in one seamless app.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'BLoC & GetIt (State Management & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Firebase (Notifications, Analytics)',
            'In-App Calendar & Localization'
        ],
        features: [
            {
                title: 'Appointment Management',
                items: [
                    'Real-time appointment booking',
                    'Calendar integration',
                    'Automated reminders',
                    'Multi-day and recurring sessions'
                ]
            },
            {
                title: 'Client Management',
                items: [
                    'Detailed client profiles',
                    'Session & treatment history',
                    'Encrypted notes and attachments',
                    'Consent & document handling'
                ]
            },
            {
                title: 'Practice Management',
                items: [
                    'Revenue dashboards',
                    'Consultation analytics',
                    'Session-based billing',
                    'Reports & exports'
                ]
            },
            {
                title: 'Communication & Engagement',
                items: [
                    'In-app chat',
                    'Push/email notifications',
                    'Feedback forms',
                    'Secure message history'
                ]
            }
        ],
        gallery: [
            { src: 'shorasha-consultant-1.jpg', alt: 'Appointments Interface' },
            { src: 'shorasha-consultant-2.jpg', alt: 'Client Profiles' },
            { src: 'shorasha-consultant-3.jpg', alt: 'Practice Analytics' }
        ],
        developmentProcess: 'Developed using Clean Architecture with BLoC and GetIt, the system prioritizes modularity, maintainability, and security. Focus was on consultant productivity, client confidentiality, and seamless user workflows.',
        impactResults: [
            'Reduced no-shows by 40% via auto reminders',
            'Boosted client retention through better engagement',
            'Simplified recordkeeping and compliance',
            'Improved operational efficiency for consultants'
        ]
    },

    'shorasha-user': {
        title: 'Shorasha User',
        description: 'A client app for discovering consultants, booking sessions, and managing appointments with ease.',
        image: 'shorasha-user.jpg',
        overview: 'Shorasha User is a seamless end-user application that empowers clients to discover consultants, schedule sessions, and manage appointments efficiently. It integrates payments, real-time notifications, and communication tools for a smooth consultation experience.',
        techStack: [
            'Flutter',
            'Dart',
            'Frappe Framework (ERPNext backend)',
            'BLoC & GetIt (State Management & DI)',
            'Clean Architecture',
            'SOLID Principles',
            'RESTful APIs',
            'Firebase (Notifications, Analytics)',
            'In-App Calendar & Localization',
            'MyFatoorah (Payment Gateway)'
        ],
        features: [
            {
                title: 'Consultant Discovery',
                items: [
                    'Advanced search and filtering',
                    'View consultant profiles',
                    'Browse by specialization',
                    'Ratings and reviews system'
                ]
            },
            {
                title: 'Appointment Booking',
                items: [
                    'Real-time schedule availability',
                    'Instant booking confirmation',
                    'Secure payment integration',
                    'Multi-timezone support'
                ]
            },
            {
                title: 'Session Management',
                items: [
                    'Past & upcoming appointments',
                    'Session notes & attachments',
                    'Document access',
                    'Post-session feedback'
                ]
            },
            {
                title: 'Communication Tools',
                items: [
                    'In-app chat',
                    'Video consultation support',
                    'Push notifications & reminders',
                    'Consultant-client message history'
                ]
            }
        ],
        gallery: [
            { src: 'shorasha-user-1.jpg', alt: 'Consultant Search Interface' },
            { src: 'shorasha-user-2.jpg', alt: 'Booking System' },
            { src: 'shorasha-user-3.jpg', alt: 'Appointment Dashboard' }
        ],
        developmentProcess: 'Built with Clean Architecture using BLoC and GetIt for state and dependency management. The app emphasizes usability, reliability, and real-time experience for both appointment handling and communication.',
        impactResults: [
            'Boosted booking success rate by 45%',
            'Improved user retention and satisfaction',
            'Minimized no-shows via reminders',
            'Streamlined client-consultant interactions'
        ]
    }

};

module.exports = projects; 