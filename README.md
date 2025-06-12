# Nimbus Tech CMS

A modern Headless CMS for [nimbus-tech.de](https://nimbus-tech.de), built with [Strapi](https://strapi.io/) and deployed on [Heroku](https://heroku.com).  
Easily manage your business website content with an intuitive admin panel and robust API.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Deployment (Heroku)](#deployment-heroku)
- [Content Management](#content-management)
- [API Usage](#api-usage)
- [Security & Permissions](#security--permissions)
- [License](#license)

---

## Features

- 🚀 **Headless CMS**: Manage content for your business website with a user-friendly interface.
- 🌐 **RESTful & GraphQL APIs**: Flexible content delivery for any frontend.
- ☁️ **Heroku Deployment**: Scalable cloud hosting.
- 🔒 **Role-based Permissions**: Control access to your content.
- 🖼️ **Media Library**: Upload and organize images and files.
- 🛠️ **Custom Content Types**: Tailor the CMS to your business needs.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (for deployment)
- [Git](https://git-scm.com/)

---

## Local Development

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-org/nimbus-tech-cms.git
   cd nimbus-tech-cms
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Strapi in development mode**  
   ```bash
   npm run develop
   # or
   yarn develop
   ```
   Visit [http://localhost:1337/admin](http://localhost:1337/admin) to set up your admin account.

---

## Deployment (Heroku)

1. **Create a Heroku app**  
   ```bash
   heroku login
   heroku create nimbus-tech-cms
   ```

2. **Set environment variables** (in Heroku dashboard or CLI):  
   - `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `JWT_SECRET`, etc.
   - Database credentials (Postgres is recommended for production)

3. **Deploy to Heroku**  
   ```bash
   git push heroku main
   ```

4. **Open your deployed app**  
   ```bash
   heroku open
   ```

For detailed steps, see [Strapi’s Heroku deployment guide][5][4].

---

## Content Management

- **Login to the Strapi Admin Panel**:  
  Visit `/admin` on your deployed instance (e.g., `https://nimbus-tech-cms.herokuapp.com/admin`).
- **Create and Manage Content Types**:  
  Use the Content-Type Builder to define your business data models.
- **Add/Edit Content**:  
  Use the Content Manager to create, update, and publish entries.
- **Media Library**:  
  Upload and manage images and documents.

---

## API Usage

- **REST API**:  
  Access your content at `/api/[collection]` (e.g., `/api/articles`).
- **GraphQL API** (if enabled):  
  Access at `/graphql`.

Example:
```http
GET https://nimbus-tech-cms.herokuapp.com/api/articles
```

- **Populate media and relations** using the `populate` parameter.

---

## Security & Permissions

- **Set Public API Permissions**:  
  Go to `Settings > Users & Permissions > Roles > Public` and enable `find` and `findOne` for content types you want public[1][2].
- **Use Environment Variables**:  
  Store secrets and API keys securely in Heroku config vars[4][5].

---

## License

This project is licensed under the MIT License.

---

> For support or questions, contact [info@nimbus-tech.de](mailto:info@nimbus-tech.de).