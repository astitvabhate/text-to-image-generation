# Pixora - AI Text-to-Image Generation App

A beautiful and modern web application that transforms text descriptions into stunning AI-generated images using the Clipboard API.

## 🚀 Features

- **Text-to-Image Generation**: Create images from text descriptions
- **User Authentication**: Sign up, login, and manage user accounts
- **Credit System**: Purchase credits to generate images
- **Beautiful UI**: Modern, responsive design with gradient themes
- **Download & Share**: Save and share your generated images
- **Real-time Generation**: Fast AI image generation with progress indicators

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Clipboard API key (get from https://clipdrop.co/apis)

### Backend Setup

1. **Navigate to Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the Backend directory with:
   ```env
   MONGODB_URL=mongodb://localhost:27017
   JWT_SECRET_KEY=your_super_secret_jwt_key_here
   PORT=5000
   CLIPDROP_API_KEY=your_clipdrop_api_key_here
   ```

4. **Start MongoDB:**
   - Local: Start MongoDB service
   - Atlas: Use your connection string

5. **Start the backend server:**
   ```bash
   npm run server
   ```

### Frontend Setup

1. **Navigate to Frontend directory:**
   ```bash
   cd Frontend/Pixora
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
text-to-image-generation/
├── Backend/
│   ├── config/
│   │   └── mongodb.js          # MongoDB connection
│   │   └── user_controller.js  # User authentication
│   │   └── image_controller.js # Image generation
│   │   └── middlewares/
│   │   └── auth.js            # JWT authentication
│   │   └── models/
│   │   └── user_model.js      # User schema
│   │   └── routes/
│   │   └── userRoutes.js      # User endpoints
│   │   └── imageRoutes.js     # Image endpoints
│   └── server.js              # Express server
└── Frontend/
    └── Pixora/
        ├── src/
        │   ├── components/
        │   │   ├── navbar.jsx  # Navigation bar
        │   │   └── footer.jsx  # Footer component
        │   │   └── Landingpage.jsx # Home page
        │   │   └── Generate.jsx    # Image generation
        │   │   └── Login.jsx       # User login
        │   │   └── Signup.jsx      # User registration
        │   │   └── Buy.jsx         # Credit purchase
        │   └── App.jsx             # Main app component
        └── package.json
```

## 🔧 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /credits` - Get user credits (protected)

### Image Routes (`/api/image`)
- `POST /generate` - Generate image from text
- `POST /generate-auth` - Generate image (authenticated)

## 🎨 Key Features

### Landing Page
- Hero section with quick generation
- Feature highlights
- Call-to-action buttons

### Image Generation
- Text input with suggestions
- Real-time generation with loading states
- Download and share functionality
- Tips for better results

### User Management
- Secure authentication with JWT
- Credit system with MongoDB
- User profile management

### Pricing Plans
- Multiple credit packages
- Attractive pricing display
- Feature comparison

## 🎯 Usage

1. **Visit the homepage** and try the quick generation
2. **Sign up** for an account to get free credits
3. **Describe your image** in detail for better results
4. **Generate images** using your credits
5. **Download or share** your creations
6. **Purchase more credits** when needed

## 💡 Tips for Better Results

- **Be Specific**: Instead of "a cat", try "a fluffy orange cat sitting on a windowsill in golden hour lighting"
- **Add Style Details**: Include art styles like "oil painting", "digital art", "photorealistic"
- **Describe Lighting**: Mention conditions like "sunset", "dramatic shadows", "soft natural light"
- **Include Composition**: Specify angles like "close-up", "wide shot", "bird's eye view"

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- Rate limiting (can be added)
- CORS configuration

## 🚀 Deployment

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables in production
- Use MongoDB Atlas for database

### Frontend Deployment
- Build the project: `npm run build`
- Deploy to Vercel, Netlify, or similar platforms
- Update API endpoints for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created by Astitva Bhate for educational and commercial purposes.

## 🆘 Support

For support, email: contact@pixora.ai

---

**Made with ❤️ by Astitva Bhate** 