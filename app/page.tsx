import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Phone,
  ExternalLink,
  Download,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Hero/About Section */}
        <section id="about" className="mb-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">Pritam Kumar Singh</h1>
              <h2 className="text-2xl text-muted-foreground mb-6">
                Software Engineering Leader / Developer
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Results-driven Software Engineering Leader/Developer with 9+
                years of experience building scalable mobile and web
                applications from scratch, leading high-performing teams, and
                driving product adoption. Seeking to leverage expertise in
                ReactJS, React Native, Next.js, Nodejs and cloud platforms to
                deliver user-centric, high-performance digital products while
                contributing to organizational growth and innovation.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Gurgaon, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:pritamparker@gmail.com"
                    className="hover:text-foreground transition-colors"
                  >
                    pritamparker@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+919661086188"
                    className="hover:text-foreground transition-colors"
                  >
                    +91-9661086188
                  </a>
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://linkedin.com/in/pritamparker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/pritamparker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://pritamparker.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="Portfolio"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <a
                href="/PritamResume.pdf"
                download="PritamResume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Experience (9.3 Years)</h2>
          </div>
          <div className="space-y-8">
            {/* SaveIN */}
            <div className="border-l-2 border-primary pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">Frontend Team Lead</h3>
                <span className="text-sm text-muted-foreground">
                  Sep 2022 - Present
                </span>
              </div>
              <p className="text-lg text-primary mb-2">
                SaveIN Fintech Private Limited (Fintech Rising Star of the year
                2023)
              </p>
              <p className="text-muted-foreground mb-3">Gurgaon</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Revitalized company technology stack: by re-architecting
                  mobile apps, web portals, and internal admin panels; scaled
                  monthly loan disbursements from 3–4 crore to 40 crore within
                  the tenure.
                </li>
                <li>
                  Delivered high-impact products: including 2 flagship mobile
                  applications, 4–5 business-critical web applications, and an
                  SEO-optimized website, significantly boosting merchant
                  adoption and online visibility.
                </li>
                <li>
                  Overhauled infrastructure and security: by restructuring AWS
                  architecture, implementing VAPT and CICRA compliance, and
                  streamlining CI/CD pipelines for faster, more secure
                  deployments.
                </li>
              </ul>
            </div>

            {/* Digichal */}
            <div className="border-l-2 border-primary pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  Senior Software Developer
                </h3>
                <span className="text-sm text-muted-foreground">
                  Apr 2021 - Aug 2022
                </span>
              </div>
              <p className="text-lg text-primary mb-2">
                Digichal Consultancy Private Limited
              </p>
              <p className="text-muted-foreground mb-3">Gurgaon</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Built DigiChal&apos;s product ecosystem from the ground up:
                  including the flagship shopkeeper mobile app and a
                  customer-facing web portal, onboarded 5,000+ vendors and
                  achieved 10K+ app downloads within the first 6 months.
                </li>
                <li>
                  Delivered high-performance, scalable applications: by
                  optimizing API architecture, enhancing load speeds, and
                  ensuring a seamless user experience across mobile and web
                  platforms, resulting in 10K+ app downloads and strong
                  adoption.
                </li>
              </ul>
            </div>

            {/* Pidge */}
            <div className="border-l-2 border-primary pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  Senior Software Developer
                </h3>
                <span className="text-sm text-muted-foreground">
                  Aug 2019 - Mar 2021
                </span>
              </div>
              <p className="text-lg text-primary mb-2">
                Pidge (Silicon India Spotlight Award 2022)
              </p>
              <p className="text-muted-foreground mb-3">Gurgaon</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Developed and launched: customer- and rider-facing mobile
                  applications with real-time order tracking and delivery
                  capabilities, driving 100K+ downloads and improving delivery
                  efficiency.
                </li>
                <li>
                  Built and optimized: internal web applications and the
                  company&apos;s marketing website, enhancing UI/UX and
                  improving site performance through code optimization, caching
                  strategies, and responsive design.
                </li>
              </ul>
            </div>

            {/* Binbill */}
            <div className="border-l-2 border-primary pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <span className="text-sm text-muted-foreground">
                  Aug 2017 - Jul 2019
                </span>
              </div>
              <p className="text-lg text-primary mb-2">
                Binbill Service Private Limited
              </p>
              <p className="text-muted-foreground mb-3">Gurgaon</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Led development: of mobile applications for bill tracking and
                  shopkeeper sales management, reducing manual billing processes
                  by 40% and increasing merchant engagement by 30%.
                </li>
                <li>
                  Automated internal processes: via custom web applications and
                  maintained customer-facing websites, implementing promotional
                  strategies that improved user retention and conversion rates.
                </li>
              </ul>
            </div>

            {/* Creative Appography */}
            <div className="border-l-2 border-primary pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <span className="text-sm text-muted-foreground">
                  Jul 2016 - Jul 2017
                </span>
              </div>
              <p className="text-lg text-primary mb-2">
                Creative Appography Research Labs Private Limited
              </p>
              <p className="text-muted-foreground mb-3">New Delhi</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Developed and maintained: responsive, secure web applications
                  for fantasy sports leagues and government fund management,
                  ensuring cross-device compatibility and data protection.
                </li>
                <li>
                  Built a full-featured e-commerce platform: for online wire and
                  cable sales, improving checkout flow and boosting conversion
                  rates by 20% within the first quarter after launch.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  Bachelor of Engineering - Computer Science and Technology
                </h3>
                <span className="text-sm text-muted-foreground">
                  July 2012 - June 2016
                </span>
              </div>
              <p className="text-lg text-primary mb-1">
                Birla Institute of Technology, Mesra
              </p>
              <p className="text-muted-foreground">Jharkhand</p>
              <p className="text-sm text-muted-foreground mt-2">CGPA: 7.2</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  ReactJS
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  NextJS
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  React Native
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Angular(2+)
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  HTML/CSS
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  NodeJs
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  SQL
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Bootstrap
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Material UI
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Tailwind
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  AntD
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  HapiJS
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Git
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  GitHub
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Bitbucket
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Postman
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Docker
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Figma
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Jira
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Trello
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Linux
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Windows
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Raspberry
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  AWS
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  GCP
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Digital Ocean
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Leadership
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Time Management
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Strategic Planning
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Agile/Scrum
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Honors and Awards</h2>
          </div>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Best Techie Award</h3>
              <p className="text-muted-foreground mb-2">SaveIN (2023)</p>
              <p className="text-sm text-muted-foreground">
                For outstanding contributions to technology and innovation.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Best Employee Award
              </h3>
              <p className="text-muted-foreground mb-2">Pidge (2020)</p>
              <p className="text-sm text-muted-foreground">
                For exceptional technical expertise and leadership.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Google Code Jam 2014
              </h3>
              <p className="text-muted-foreground mb-2">Qualified</p>
              <p className="text-sm text-muted-foreground">
                Qualified in this prestigious global coding competition.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                1st Place - WriteACode
              </h3>
              <p className="text-muted-foreground mb-2">IEEE 2014</p>
              <p className="text-sm text-muted-foreground">
                Competitive programming event.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                3rd Place - ACM Chapter
              </h3>
              <p className="text-muted-foreground mb-2">BIT Mesra (2013–14)</p>
              <p className="text-sm text-muted-foreground">
                Weekly coding competition.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:pritamparker@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/pritamparker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a
                href="tel:+919661086188"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Pritam Kumar Singh. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
