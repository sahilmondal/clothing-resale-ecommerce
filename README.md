# Clothing Resale E-commerce Platform

A Next.js-based platform for buying and selling pre-loved clothing with integrated payment processing, authentication, and seller management.

## Features

- **Authentication**

  - Email/password login and registration
  - Social authentication (Google, Facebook)
  - Password reset functionality
  - Protected routes and role-based access

- **Product Management**

  - Browse products with advanced filtering
  - Search functionality
  - Product details with multiple images
  - Responsive product grid layout
  - Category and condition-based filtering

- **Shopping Features**

  - Shopping cart management
  - Wishlist functionality
  - Secure checkout with Razorpay
  - Order tracking
  - Purchase history

- **Seller Features**
  - Seller dashboard
  - Product upload with multiple images
  - Sales analytics
  - Order management
  - Seller profile management

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Payment**: Razorpay
- **Form Handling**: React Hook Form with Zod validation
- **Image Handling**: Next.js Image component

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd clothing-resale
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file with the following variables:

```env
# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Razorpay
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

4. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `/app` - Next.js 14 app directory with routes and API endpoints
- `/components` - React components organized using Atomic Design principles
  - `/atoms` - Basic building blocks (buttons, inputs)
  - `/molecules` - Combinations of atoms (forms, cards)
  - `/organisms` - Complex components (header, footer)
  - `/providers` - Context providers
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and libraries
- `/store` - Zustand store configurations
- `/types` - TypeScript type definitions
- `/public` - Static assets

## Key Features Implementation

### Authentication

- Uses NextAuth.js for authentication
- Protected routes with role-based access
- Custom auth hooks for easy access to user state

### Cart & Wishlist

- Persistent cart state using Zustand with localStorage
- Real-time cart updates
- Easy movement of items between cart and wishlist

### Payment Integration

- Secure payment processing with Razorpay
- Order verification and status updates
- Payment webhook handling

### Product Management

- Advanced filtering and sorting options
- Responsive image gallery
- Real-time stock updates

### Seller Dashboard

- Complete seller onboarding flow
- Product management interface
- Sales analytics and reporting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - See LICENSE file for details
