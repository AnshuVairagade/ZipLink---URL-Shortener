# URL_Shortener_with_AWS_Deployment_using_CICD

A Node.js URL Shortener application with server-side rendered views using Express.js and EJS, connected to MongoDB Atlas for data storage. This project demonstrates automated deployment on AWS EC2 using GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

> **Apologies for the earlier confusion 🙏**  
> I mistakenly shared the wrong repository link.  
> Please refer to the correct project implementation here:  
> 👉 [URL Shortener with AWS Deployment using CI/CD](https://github.com/AnshuVairagade/URL_Shortener_with_AWS_Deployment_using_CICD)


# Archeitecture Daigram
<img width="1000" height="591" alt="Url Shortener Project drawio" src="https://github.com/user-attachments/assets/0625646e-3a37-4103-a19e-48cce3959758" />

# Proof of work
❗The CI/CD pipeline is non-operational because the dedicated self-hosted runner on the EC2 instance was deprovisioned.

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/1f0b9230-ef35-4d8b-97a7-23c708f6968d" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/e130642e-1c8e-42bd-bcb6-d34e0939ce88" />

# AWS EC2 deployment working
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/746c84aa-1da6-453a-bd84-e6028167217b" />

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Deployment](#deployment)  
- [Usage](#usage)  
- [CI/CD Pipeline](#cicd-pipeline)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

This application provides a URL shortening service with RESTful APIs to create, read, update, and delete shortened URLs. Views are rendered on the server using EJS templates. The app connects to MongoDB Atlas, a managed cloud NoSQL database. Deployment and updates are automated via GitHub Actions that push code to an AWS EC2 instance.

---

## Features

- Create shortened URLs and redirect to the original URL.
- Update and delete existing shortened URLs via API.
- EJS templating for rendering dynamic web pages.
- Secure connection to MongoDB Atlas.
- Automated deployment with GitHub Actions to AWS EC2.
- Environment variables management for secure credentials.

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Templates:** EJS  
- **Database:** MongoDB Atlas (cloud hosted)  
- **Cloud Hosting:** AWS EC2  
- **CI/CD:** GitHub Actions  

---

## Prerequisites

- Node.js and npm installed locally for testing.
- MongoDB Atlas account and cluster created.
- AWS account with EC2 instance setup for deployment.
- GitHub repository with GitHub Actions workflows configured.

---

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/URL_Shortener_with_AWS_Deployment_using_CICD.git
cd URL_Shortener_with_AWS_Deployment_using_CICD
```

2. Install dependencies:

```
npm install
```

---

## Configuration

Create a `.env` file in the root directory with the following variables:

```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=your_preferred_port (default 3000)
```


Ensure your MongoDB Atlas cluster allows connections from your AWS EC2 instance IP or network as per Atlas IP whitelisting.

---

## Deployment

Deployment to AWS EC2 is automated via GitHub Actions on pushes to the main branch. The workflow:

- Packages and tests the Node.js application.
- Connects to the AWS EC2 instance.
- Transfers updated code and installs dependencies.
- Restarts the Node.js application on EC2.

Manual deployment steps can be done using SSH to the EC2 instance if needed.

---

## Usage

Once deployed:

- Open the public EC2 URL in a browser.
- Access the URL shortener interface to create and manage shortened URLs.
- API endpoints are available for direct CRUD operations.

---

## CI/CD Pipeline

- GitHub Actions triggers on every push to the main branch.
- Pipeline builds and tests the app.
- Deploys seamlessly to AWS EC2, ensuring new features and fixes are live rapidly.
- Facilitates continuous delivery practices with minimal manual overhead.

---

## Contributing

Contributions are welcome! Please open issues for bug reports or feature requests. Submit pull requests with descriptive titles and comments.

---

## License

Distributed under the MIT License. See `LICENSE` for details.
