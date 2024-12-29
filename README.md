# Shrinkify - A URL Shortener

Shrinkify is a modern URL shortener built using **Next.js** and **MongoDB**. This application allows users to shorten long URLs into concise, shareable links. It includes features such as analytics tracking, custom slugs, and user-friendly design.

---

## Features

- **Shorten URLs**: Quickly generate short URLs for any link.
- **Custom Text**: Users can specify their own short text.
- **Analytics**: Track click counts and usage statistics.
- **Responsive UI**: Designed with a modern, mobile-first approach.
- **Secure**: Leveraging MongoDB for a robust and scalable backend.

---

## Tech Stack

- **Frontend**: Next.js
- **Backend**: API routes in Next.js
- **Database**: MongoDB
- **Styling**: CSS/SCSS or Tailwind CSS
- **Deployment**: Vercel/Other platforms

---

## Installation

Follow these steps to set up Shrinkify locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd shrinkify
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
   BASE_URL=http://localhost:3000
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Access the app at `http://localhost:3000`.

---

## Usage

1. Navigate to the homepage.
2. Paste a URL in the input box.
3. Optionally, provide a custom text.
4. Click "Shorten URL" to generate your short link.

---

## API Endpoints

- **POST** `/api/shorten`
  - Create a new short URL.
  - Request Body:
    ```json
    {
      "longUrl": "https://example.com",
      "customText": "custom-text" // Optional
    }
    ```
- **GET** `/api/redirect/:custom-text`
  - Redirect to the original URL based on the custom text.

---

## Deployment

This project is designed to be deployed easily on platforms like Vercel:

1. Push your repository to GitHub or another Git provider.
2. Connect your repository to Vercel.
3. Add environment variables in the Vercel dashboard.
4. Deploy the app.

---

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.