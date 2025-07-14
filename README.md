# 🔗 ZipLink — A Scalable, Distributed URL Shortener

> **ZipLink** (formerly _urlly_) is a production-ready, scalable URL shortener with a fast backend, a clean UI, and Docker-based deployment. Ideal for self-hosting or cloud deployment.

---

## 🚀 Getting Started

### 🧱 Install Locally

```bash
# Clone the repo and enter the project directory
git clone https://github.com/seanharrison/urlly.git
cd urlly

# Build Docker containers
docker-compose build
🖥️ Run Locally
Set up environment variables using .envrc or .env:

bash
Copy
Edit
export STACK_NAME=urlly
export HOST_NAME=localhost
export SITE_URL=http://${HOST_NAME}
export POSTGRES_DB=${STACK_NAME}
export POSTGRES_USER=${STACK_NAME}
export POSTGRES_PASSWORD=${STACK_NAME}
Start the application:

bash
Copy
Edit
docker-compose up
Then access the app at: http://localhost

✅ Run Tests
bash
Copy
Edit
docker-compose run app ./runtests.sh
☁️ Deployment (Debian 10+)
⚙️ Recommended for VPS / EC2 / virtual servers

bash
Copy
Edit
wget https://raw.githubusercontent.com/seanharrison/urlly/main/debian-up.sh
chmod +x debian-up.sh
./debian-up.sh
Installs dependencies, clones the repo, sets up .envrc

Edit .envrc to match your environment

Refer to DEPLOY.md for further deployment or upgrade instructions

🧠 Architecture Overview
🔧 Services
Service	Description
router	Nginx reverse proxy with rate limits (e.g., 2 req/sec/IP)
app	Starlette app via Gunicorn + Uvicorn
db	PostgreSQL with persistent storage
/api	REST API (JSON responses)
/	UI rendered via Bootstrap + VueJS

📡 API Endpoints
All API routes are prefixed with /api

📥 Create Short URL
http
Copy
Edit
POST /api/urls
Content-Type: application/json
{
  "url": "https://example.com"
}
Responses:

201 Created:

json
Copy
Edit
{
  "status": 201,
  "message": "URL shortened",
  "data": { "url": { ... } }
}
422 Unprocessable Entity:

json
Copy
Edit
{
  "status": 422,
  "message": "didn't look like a URL to me, sorry."
}
📤 Retrieve URL Info
http
Copy
Edit
GET /api/urls/:id
200 OK:

json
Copy
Edit
{
  "status": 200,
  "data": { "url": { ... } }
}
404 Not Found:

json
Copy
Edit
{
  "status": 404,
  "message": "not found"
}
🌐 UI Features
🔘 Input field + “Shorten” button

📝 Shows recently created URLs (reverse-chronological)

🧠 Uses localForage for browser-local storage

🔁 Redirection handled via GET /:id (301 or 404 fallback)

🔐 Auth & Security [Planned]
🔐 Login via Google (OAuth2)

🔄 Sync browser-local URLs to user accounts

☁️ Enable HTTPS + secure cookie/session handling

🛡️ Full security hardening

🧬 URL ID Generation
🔢 Length & Charset
Uses 7-character IDs (like Bit.ly)

urlsafe_base64 charset

Auto-generated (not user-entered)

🔒 Secure Randomness
python
Copy
Edit
# Python
import secrets
secrets.token_bytes(length)
sql
Copy
Edit
-- PostgreSQL
SELECT gen_random_bytes(length);
🔗 Encoding
Encoded using base64 (strip trailing ==)

5-char output = 2^40 ≈ 1 trillion possible combinations
