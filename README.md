# iSAX Tech Hub - Professional Digital Services Platform

A comprehensive full-stack web platform providing digital services including document writing, web development, graphic design, and IT support, combined with an educational learning hub and client management system.

## 🎯 Features

### 📄 Document Services
- Professional CV Writing
- Cover Letters
- PDF Editing & Formatting
- Reports and Document Services

### 🌐 Web Development
- Portfolio Websites
- Business Websites
- Landing Pages

### 🎨 Graphics Design
- Logo Design
- Poster Design
- Flyers & Business Cards

### 💻 IT Support
- Software Installation
- PC Troubleshooting
- Linux Support
- Tech Guidance

### 📚 Learning Hub
- Web Development Tutorials
- Python Programming
- Linux Guides
- Cybersecurity Basics
- Student Guides

### 💼 Additional Features
- Blog with tutorials and insights
- Portfolio showcase
- Free resources and downloads
- Client portal for order tracking
- Admin dashboard for management
- Contact and inquiry management

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3 (with responsive design)
- JavaScript (Vanilla)
- Mobile-responsive

### Backend
- Node.js
- Express.js
- RESTful API

### Database
- MySQL 8.0+

### Additional Tools
- JWT for Authentication
- bcryptjs for Password Hashing
- Multer for File Uploads
- CORS for Cross-Origin Resource Sharing

## 📋 Project Structure

```
isax-tech-hub/
├── public/                 # Frontend files
│   ├── index.html         # Home page
│   ├── about.html         # About us
│   ├── services.html      # Services listing
│   ├── learning-hub.html  # Learning resources
│   ├── portfolio.html     # Portfolio showcase
│   ├── resources.html     # Free downloads
│   ├── blog.html          # Blog posts
│   ├── contact.html       # Contact form
│   ├── client-portal.html # Client dashboard
│   ├── admin-dashboard.html # Admin panel
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   └── admin.css      # Admin styles
│   ├── js/
│   │   ├── main.js        # Core JavaScript
│   │   ├── portfolio.js   # Portfolio functionality
│   │   ├── contact.js     # Contact form
│   │   ├── client-portal.js # Client portal
│   │   └── admin.js       # Admin dashboard
│   └── assets/
│       └── images/        # Image assets
├── src/
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── middleware/       # Custom middleware
│   └── config/
│       ├── database.js    # Database connection
│       └── database-setup.sql # Database schema
├── server.js             # Main server file
├── package.json          # Project dependencies
├── .env.example          # Environment template
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14.x or higher
- MySQL 8.0 or higher
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd d:/isax\ tech\ hub
```

2. **Copy environment file**
```bash
copy .env.example .env
```

3. **Edit .env with your configuration**
```bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=isax_tech_hub
JWT_SECRET=your_super_secret_key
```

4. **Install dependencies**
```bash
npm install
```

5. **Setup Database**
   - Open your MySQL client
   - Run the SQL script from `src/config/database-setup.sql`
   ```bash
   mysql -u root -p < src/config/database-setup.sql
   ```

6. **Start the server**
```bash
npm run dev
```

The application will run on `http://localhost:3000`

## 📚 API Routes

### Authentication Routes (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - User login
- `POST /logout` - User logout

### Services Routes (`/api/services`)
- `GET /` - Get all services
- `GET /:id` - Get service by ID

### Orders Routes (`/api/orders`)
- `POST /` - Create new order
- `GET /` - Get user's orders
- `GET /:id` - Get specific order

### Blog Routes (`/api/blog`)
- `GET /` - Get all blog posts
- `GET /:id` - Get specific blog post

### Portfolio Routes (`/api/portfolio`)
- `GET /` - Get all portfolio items
- `GET /:id` - Get specific portfolio item

### Contact Routes (`/api/contact`)
- `POST /` - Submit contact message
- `GET /` - Get all messages (admin)

### Admin Routes (`/api/admin`)
- `GET /stats` - Dashboard statistics
- `GET /orders` - All orders (admin)
- `GET /blog` - All blog posts (admin)

## 🔐 Admin Credentials

Admin dashboard is available at `/admin`. Initial setup required.

## 📱 Pages

- **Home** - Hero section with service preview, testimonials, and latest projects
- **About** - Company information, mission, vision, and team skills
- **Services** - Detailed service offerings by category
- **Learning Hub** - Educational resources and tutorials
- **Portfolio** - Showcase of completed projects with filtering
- **Resources** - Free downloads (templates, cheatsheets, guides)
- **Blog** - Articles about tech, tutorials, and industry news
- **Contact** - Contact form and communication methods
- **Client Portal** - Order management and tracking
- **Admin Dashboard** - Complete management panel

## 🎨 Customization

### Colors
Edit the CSS variables in `public/css/style.css`:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... more colors */
}
```

### Services
Add or modify services in the `services.html` page or through the admin dashboard.

### Blog Posts
Create blog posts through the admin dashboard or directly in the database.

## 📦 Database Schema

### Users
- id, fullname, email, password, role, phone, address, created_at, updated_at

### Services
- id, name, category, description, price, image, created_at, updated_at

### Orders
- id, user_id, service_id, status, amount, file, description, due_date, created_at, updated_at

### Blog
- id, title, slug, content, author_id, category, image, views, published, created_at, updated_at

### Portfolio
- id, title, description, category, image, technologies, link, created_at, updated_at

### Messages
- id, name, email, service_needed, message, read_status, created_at

## 🔧 Environment Variables

```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=isax_tech_hub
DB_PORT=3306

JWT_SECRET=your_super_secret_jwt_key_change_this

MAX_FILE_SIZE=10485760

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password
```

## 📞 Contact & Support

- Email: isaacokonya1@gmail.com
- WhatsApp: +256 785 874 322
- Location: uganda

## 📄 License

MIT License - Feel free to use this for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🎓 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📈 Future Enhancements

- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Real-time chat support
- [ ] Video tutorials
- [ ] Analytics dashboard
- [ ] Social media integration
- [ ] Mobile app
- [ ] Advanced search functionality
- [ ] User reviews and ratings
- [ ] Automated invoicing

---

**Version**: 1.0.0  
**Last Updated**: June 3, 2026

Made with ❤️ by iSAX Tech Hub
