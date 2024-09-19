<h1 align="center">ChaosCrowd</h1>
<p align="center">
  Create donation-based Solana blinks for peer-to-peer fundraising.
</p>
<p align="center">
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#setup">Setup</a> •
  <a href="#contributing">Contributing</a> •
</p>
<hr>
Prerequisites
<ul>
  <li><a href="https://bun.sh/">Bun</a> (as runtime)</li>
  <li><a href="https://www.docker.com/">Docker</a> (recommended for database setup)</li>
</ul>
Setup
<ol>
  <li>
    <p>Clone the repository:</p>
    <pre><code>git clone https://github.com/yourusername/ChaosCrowd.git
cd ChaosCrowd</code></pre>
  </li>
  <li>
    <p>Install dependencies:</p>
    <pre><code>bun install</code></pre>
  </li>
  <li>
    <p>Set up environment variables:</p>
    <p>Create a <code>.env</code> file in the root directory with the following content:</p>
    <pre><code>DATABASE_URL=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
NEXTAUTH_SECRET="" # Generate using: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"</code></pre>
  </li>
  <li>
    <p>Set up the database:</p>
    <ul>
      <li>Using Docker (recommended):
        <pre><code>docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres</code></pre>
      </li>
      <li>Database URL for local Docker setup:
        <pre><code>DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"</code></pre>
      </li>
      <li>Alternatively, you can use any online PostgreSQL database service.</li>
    </ul>
  </li>
  <li>
    <p>Initialize the database:</p>
    <pre><code>npx prisma db push
npx prisma db migrate dev
npx prisma generate</code></pre>
  </li>
  <li>
    <p>Start the development server:</p>
    <pre><code>bun run dev</code></pre>
  </li>
</ol>
<p>Your ChaosCrowd project should now be running at <code>http://localhost:3000</code>.</p>
<h2>Contributing</h2>
<p>We welcome contributions to ChaosCrowd! Please feel free to submit issues, create pull requests, or fork the repository to make your own changes.</p>
<ol>
  <li>Fork the repository</li>
  <li>Create your feature branch: <code>git checkout -b feature/AmazingFeature</code></li>
  <li>Commit your changes: <code>git commit -m 'Add some AmazingFeature'</code></li>
  <li>Push to the branch: <code>git push origin feature/AmazingFeature</code></li>
  <li>Open a pull request</li>
</ol>
