import CopyEmail from "./components/CopyEmail";
import Section from "./components/Section";
import { about, education, experience, numbers, profile, projects, skills, status } from "./data";

const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent("Hello Ronak")}`;

const navLinks = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

export default function Home() {
  return (
    <>
      <nav aria-label="Main">
        <div className="wrap">
          <a className="brand" href="#top">
            ronak<span>.</span>patel
          </a>
          <div className="links">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="who">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="avatar" src="/photo.jpg" alt="Portrait of Ronak Patel" width={88} height={88} />
                <div>
                  <p className="kicker">
                    {profile.title}, {profile.location}
                  </p>
                  <span className="open">● Open to work</span>
                </div>
              </div>
              <h1>
                {profile.name.first}
                <br />
                <span className="last">{profile.name.last}</span>
              </h1>
              <p className="lede">
                I build and test <strong>web apps, REST APIs and backend services</strong> in Python and JavaScript, and
                ship them with Docker, CI/CD and AWS.
              </p>
              <div className="cta">
                <a className="btn primary" href="#contact">
                  Get in touch
                </a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noopener">
                  LinkedIn
                </a>
                <a className="btn" href={profile.github} target="_blank" rel="noopener">
                  GitHub
                </a>
              </div>
            </div>

            <div className="status" aria-label="Quick facts">
              <div className="bar">
                <span>$ ronak --status</span>
                <b>● available</b>
              </div>
              <dl>
                {status.map((s) => (
                  <div className="row" key={s.key}>
                    <dt>{s.key}</dt>
                    <dd>
                      {s.highlight && <span className="ok">{s.highlight}</span>}
                      {s.value}
                      {s.key === "open to" && <span className="cursor" aria-hidden="true" />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="wrap" style={{ marginTop: 48 }}>
            <div className="numbers">
              {numbers.map((n) => (
                <div key={n.label}>
                  <b>{n.value}</b>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <Section id="about" title="About" label="who I am">
          <div className="prose">
            {about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" label="where I've worked">
          {experience.map((job) => (
            <div className="job" key={job.company}>
              <h3>
                {job.role}, {job.company}
              </h3>
              <div className="meta">
                {job.place} · {job.dates}
              </div>
              <ul>
                {job.points.map((p) => (
                  <li key={p.slice(0, 24)}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <section id="projects">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 24 }}>
              <div>
                <h2>Projects</h2>
                <div className="sec-label">what I&apos;ve built</div>
              </div>
              <p className="sub">Work projects from Nexowa, systems projects from college, and this site.</p>
            </div>
            <div className="cards">
              {projects.map((p) => (
                <article className="card" key={p.title}>
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="chips">
                    {p.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 24 }}>
              <div>
                <h2>Skills</h2>
                <div className="sec-label">what I work with</div>
              </div>
              <span />
            </div>
            <div className="skills">
              {skills.map((g) => (
                <div key={g.group}>
                  <h3>{g.group}</h3>
                  <div className="chips">
                    {g.items.map((i) => (
                      <span className="chip" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section id="education" title="Education" label="where I've studied">
          <div className="edu">
            {education.map((e) => (
              <div className="edu-item" key={e.title}>
                <h3>{e.title}</h3>
                <div className="when">{e.when}</div>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="wrap">
          <div className="contact" id="contact">
            <h2>Hiring for a developer role? Let&apos;s talk.</h2>
            <div className="row">
              <span className="addr">{profile.email}</span>
              <CopyEmail email={profile.email} />
              <a className="btn" href={gmailLink} target="_blank" rel="noopener">
                Email me on Gmail
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="wrap">
          {profile.name.first} {profile.name.last} · {profile.location} · {profile.languages} · Built with Next.js
        </div>
      </footer>
    </>
  );
}
