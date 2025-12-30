import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ApplicationSecurityService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Lock className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Application Security</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Applications are prime targets for attackers. Our Application Security services help identify and fix vulnerabilities across web, mobile, and cloud-native applications — right from the development phase to post-deployment.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-muted/30 border border-border/40 p-4 sm:p-6 lg:p-8"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Application Security Services
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="thick-client-vapt">
                    <AccordionTrigger className="text-sm sm:text-base text-left">
                      Thick Client VAPT
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      What is Thick Client VAPT?
              <div><strong>What is Thick Client VAPT?</strong></div>
              <div>Thick Client Vulnerability Assessment and Penetration Testing (VAPT) is a specialized security testing approach designed for desktop applications that process and store data locally. Unlike web applications, thick clients present unique security challenges that require dedicated testing methodologies to identify vulnerabilities in client-side processing, local data storage, and network communication.</div>
              <div><strong>Why Your Organization Needs Thick Client VAPT</strong></div>
              <ul>
                <li><strong>Data Protection:</strong> Thick clients often handle sensitive data locally. VAPT ensures this data is properly encrypted and protected from unauthorized access, preventing potential data breaches.</li>
                <li><strong>Compliance Requirements:</strong> Meet regulatory standards like PCI DSS, HIPAA, and GDPR by demonstrating that your desktop applications maintain appropriate security controls.</li>
                <li><strong>Business Continuity:</strong> Identify and fix vulnerabilities before they can be exploited, preventing potential service disruptions and maintaining operational stability.</li>
                <li><strong>Reputation Protection:</strong> Proactive security testing helps maintain customer trust and protects your organization's reputation from security incidents.</li>
              </ul>
              <div><strong>Our VAPT Testing Process</strong></div>
              <ol>
                <li><strong>Pre-Assessment Planning:</strong> We work with your team to understand your application architecture, define testing scope, and establish communication protocols. This phase includes documentation review and environment setup.</li>
                <li><strong>Static Application Analysis:</strong> Code review and binary analysis to identify hardcoded credentials, insecure configurations, and potential vulnerabilities in the application logic without executing the program.</li>
                <li><strong>Dynamic Runtime Testing:</strong> Live application testing including user interface manipulation, API endpoint testing, and real-time vulnerability exploitation to assess runtime security.</li>
                <li><strong>Network Communication Analysis:</strong> Comprehensive testing of all network protocols, encryption implementation, and data transmission security between client and server components.</li>
                <li><strong>Local Storage Security Assessment:</strong> Detailed examination of how sensitive data is stored, encrypted, and managed on client devices, including registry entries and file system analysis.</li>
                <li><strong>Detailed Reporting & Remediation:</strong> Comprehensive report with executive summary, technical findings, risk ratings, and actionable remediation recommendations with proof-of-concept demonstrations.</li>
              </ol>
              <div><strong>What You Can Expect from Our Service</strong></div>
              <ul>
                <li><strong>Comprehensive Documentation:</strong> You'll receive detailed reports including executive summaries for stakeholders, technical findings for development teams, and step-by-step remediation guides. All vulnerabilities are documented with risk ratings, impact assessments, and proof-of-concept demonstrations.</li>
                <li><strong>Minimal Business Disruption:</strong> Our testing methodologies are designed to minimize impact on your production environment. We work with your schedule and can perform testing in isolated environments or during maintenance windows.</li>
                <li><strong>Post-Assessment Support:</strong> We provide ongoing support during remediation efforts, including clarification of findings, validation of fixes, and guidance on security best practices for future development.</li>
              </ul>

Why Your Organization Needs Thick Client VAPT
Data Protection: Thick clients often handle sensitive data locally. VAPT ensures this data is properly encrypted and protected from unauthorized access, preventing potential data breaches.

Compliance Requirements: Meet regulatory standards like PCI DSS, HIPAA, and GDPR by demonstrating that your desktop applications maintain appropriate security controls.

Business Continuity: Identify and fix vulnerabilities before they can be exploited, preventing potential service disruptions and maintaining operational stability.

Reputation Protection: Proactive security testing helps maintain customer trust and protects your organization's reputation from security incidents.

Our VAPT Testing Process
1. Pre-Assessment Planning: We work with your team to understand your application architecture, define testing scope, and establish communication protocols. This phase includes documentation review and environment setup.

2. Static Application Analysis: Code review and binary analysis to identify hardcoded credentials, insecure configurations, and potential vulnerabilities in the application logic without executing the program.

3. Dynamic Runtime Testing: Live application testing including user interface manipulation, API endpoint testing, and real-time vulnerability exploitation to assess runtime security.

4. Network Communication Analysis: Comprehensive testing of all network protocols, encryption implementation, and data transmission security between client and server components.

5. Local Storage Security Assessment: Detailed examination of how sensitive data is stored, encrypted, and managed on client devices, including registry entries and file system analysis.

6. Detailed Reporting & Remediation: Comprehensive report with executive summary, technical findings, risk ratings, and actionable remediation recommendations with proof-of-concept demonstrations.

What You Can Expect from Our Service
Comprehensive Documentation: You'll receive detailed reports including executive summaries for stakeholders, technical findings for development teams, and step-by-step remediation guides. All vulnerabilities are documented with risk ratings, impact assessments, and proof-of-concept demonstrations.

Minimal Business Disruption: Our testing methodologies are designed to minimize impact on your production environment. We work with your schedule and can perform testing in isolated environments or during maintenance windows.

Post-Assessment Support: We provide ongoing support during remediation efforts, including clarification of findings, validation of fixes, and guidance on security best practices for future development.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="secure-sdlc">
                    <AccordionTrigger className="text-sm sm:text-base text-left">
                      Secure SDLC Integration
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                     What is SDLC?
            <div><strong>What is SDLC?</strong></div>
            <div>The Software Development Life Cycle (SDLC) is a systematic process for building software that ensures quality and correctness. It defines a methodology for improving the quality of software and the overall development process. SDLC includes detailed planning, design, building, testing, and deployment of software.</div>
            <div><strong>Key Phases of the SDLC Process</strong></div>
            <ol>
              <li><strong>Planning:</strong> Define goals, scope, resources, timeline, and budget.</li>
              <li><strong>Requirement Analysis:</strong> Gather detailed business and technical requirements. Understand user expectations and system needs.</li>
              <li><strong>Design:</strong> Convert requirements into technical architecture. Focus on system design, UI/UX, database schemas, etc.</li>
              <li><strong>Development:</strong> Write actual code based on the approved design. Use version control and adhere to coding standards.</li>
              <li><strong>Testing:</strong> Conduct various testing types (unit, integration, system, UAT). Identify and fix bugs before deployment.</li>
              <li><strong>Deployment:</strong> Release the application to production. May include a beta release or staged rollout.</li>
              <li><strong>Maintenance:</strong> Monitor performance. Apply updates, patches, and handle user feedback.</li>
            </ol>
            <div><strong>Popular SDLC Models</strong></div>
            <ol>
              <li><strong>Waterfall Model:</strong> Sequential, one-phase-at-a-time approach. <em>Pros:</em> Clear structure, easy to manage. <em>Cons:</em> Inflexible to change.</li>
              <li><strong>Agile Model:</strong> Iterative, collaborative approach. <em>Pros:</em> Adaptive to changes, fast delivery. <em>Cons:</em> Requires high involvement and discipline.</li>
              <li><strong>V-Model:</strong> Verification and validation go hand-in-hand. <em>Pros:</em> Focused on quality assurance. <em>Cons:</em> Rigid, not ideal for large projects.</li>
              <li><strong>Spiral Model:</strong> Combines iterative nature with risk analysis. <em>Pros:</em> Good for large, high-risk projects. <em>Cons:</em> Complex, expensive.</li>
              <li><strong>DevSecOps Model:</strong> Continuous integration and delivery with embedded security. <em>Pros:</em> Fast, secure, automated. <em>Cons:</em> Requires culture and toolchain change.</li>
            </ol>

Key Phases of the SDLC Process
1. Planning: Define goals, scope, resources, timeline, and budget.

2. Requirement Analysis: Gather detailed business and technical requirements. Understand user expectations and system needs.

3. Design: Convert requirements into technical architecture. Focus on system design, UI/UX, database schemas, etc.

4. Development: Write actual code based on the approved design. Use version control and adhere to coding standards.

5. Testing: Conduct various testing types (unit, integration, system, UAT). Identify and fix bugs before deployment.

6. Deployment: Release the application to production. May include a beta release or staged rollout.

7. Maintenance: Monitor performance. Apply updates, patches, and handle user feedback.

Popular SDLC Models
1. Waterfall Model: Sequential, one-phase-at-a-time approach. Pros: Clear structure, easy to manage. Cons: Inflexible to change.

2. Agile Model: Iterative, collaborative approach. Pros: Adaptive to changes, fast delivery. Cons: Requires high involvement and discipline.

3. V-Model: Verification and validation go hand-in-hand. Pros: Focused on quality assurance. Cons: Rigid, not ideal for large projects.

4. Spiral Model: Combines iterative nature with risk analysis. Pros: Good for large, high-risk projects. Cons: Complex, expensive.

5. DevSecOps Model: Continuous integration and delivery with embedded security. Pros: Fast, secure, automated. Cons: Requires culture and toolchain change.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="source-code-review">
                    <AccordionTrigger className="text-sm sm:text-base text-left">
                      Source Code Review
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      What is Source Code Review?
              <div><strong>What is Source Code Review?</strong></div>
              <div>Source Code Review is a deep analysis of your application’s codebase to uncover hidden security vulnerabilities, coding errors or logic flaws, and non-compliance with security best practices. We examine how your software is written — line by line — to ensure it doesn’t expose your business or user data to hackers.</div>
              <div><strong>Why You Need It</strong></div>
              <ul>
                <li>Prevent data breaches and cyberattacks</li>
                <li>Fix vulnerabilities before they go live</li>
                <li>Improve your team’s coding practices</li>
                <li>Comply with security standards like OWASP</li>
              </ul>
              <div><strong>Our Code Review Process</strong></div>
              <ol>
                <li><strong>Project Understanding:</strong> We start by understanding the architecture of your code, languages and frameworks used, and sensitive functions (e.g., login, payments, APIs).</li>
                <li><strong>Automated Scanning:</strong> We use industry-trusted tools to scan for insecure code patterns, outdated libraries, hardcoded secrets (like API keys), and vulnerabilities like XSS, SQL Injection, CSRF. <em>Tools We Use:</em> SonarQube, HCL APP-SCAN.</li>
                <li><strong>Manual Code Review:</strong> Our security engineers manually inspect critical parts of the code that tools can’t fully understand, such as business logic errors, broken authentication or access control, insecure data processing, and poor session handling.</li>
                <li><strong>Reporting & Recommendations:</strong> You get a clear and detailed report with description of each vulnerability, file name and line number, severity level (Low, Medium, High, Critical), developer-friendly fix suggestions, and OWASP mapping (where applicable).</li>
                <li><strong>Re-Testing:</strong> Once your developers apply the fixes, we re-run tests to verify that vulnerabilities are properly patched and the application is secure for release.</li>
              </ol>
              <div><strong>What We Cover</strong></div>
              <ul>
                <li>Authentication & Authorization</li>
                <li>Input Validation & Output Encoding</li>
                <li>Session & Token Management</li>
                <li>Database Queries (SQL/NoSQL)</li>
                <li>API Security</li>
                <li>Cryptography & Key Management</li>
                <li>Error Handling & Logging</li>
                <li>3rd Party Package/Library Security</li>
              </ul>
              <div><strong>Who Is This For?</strong></div>
              <ul>
                <li>Web & mobile apps in development or pre-launch</li>
                <li>Businesses undergoing security audits</li>
                <li>SaaS platforms, fintech apps, health tech, eCommerce</li>
                <li>Dev teams who want expert feedback on their code quality</li>
              </ul>
              <div><strong>Key Benefits</strong></div>
              <ul>
                <li>Catch vulnerabilities before deployment</li>
                <li>Reduce cost of post-launch bug fixing</li>
                <li>Improve your team's secure coding skills</li>
                <li>Build user trust & brand reputation</li>
              </ul>
              <div><strong>Deliverables You Receive</strong></div>
              <ul>
                <li>Full vulnerability report (PDF/Excel)</li>
                <li>Remediation guide with code snippets</li>
                <li>Post-fix verification report</li>
                <li>Optional developer consultation</li>
              </ul>

Why You Need It
- Prevent data breaches and cyberattacks

- Fix vulnerabilities before they go live

- Improve your team’s coding practices

- Comply with security standards like OWASP

Our Code Review Process
We follow a hybrid approach — combining automated tools and expert manual review — to provide thorough and reliable results.

1. Project Understanding: We start by understanding the architecture of your code, languages and frameworks used, and sensitive functions (e.g., login, payments, APIs).

2. Automated Scanning: We use industry-trusted tools to scan for insecure code patterns, outdated libraries, hardcoded secrets (like API keys), and vulnerabilities like XSS, SQL Injection, CSRF. Tools We Use: SonarQube, HCL APP-SCAN.

3. Manual Code Review: Our security engineers manually inspect critical parts of the code that tools can’t fully understand, such as business logic errors, broken authentication or access control, insecure data processing, and poor session handling.

4. Reporting & Recommendations: You get a clear and detailed report with description of each vulnerability, file name and line number, severity level (Low, Medium, High, Critical), developer-friendly fix suggestions, and OWASP mapping (where applicable).

5. Re-Testing: Once your developers apply the fixes, we re-run tests to verify that vulnerabilities are properly patched and the application is secure for release.

What We Cover
- Authentication & Authorization

- Input Validation & Output Encoding

- Session & Token Management

- Database Queries (SQL/NoSQL)

- API Security

- Cryptography & Key Management

- Error Handling & Logging

- 3rd Party Package/Library Security

Who Is This For?
- Web & mobile apps in development or pre-launch

- Businesses undergoing security audits

- SaaS platforms, fintech apps, health tech, eCommerce

- Dev teams who want expert feedback on their code quality

Key Benefits
- Catch vulnerabilities before deployment

- Reduce cost of post-launch bug fixing

- Improve your team's secure coding skills

- Build user trust & brand reputation

Deliverables You Receive
- Full vulnerability report (PDF/Excel)

- Remediation guide with code snippets

- Post-fix verification report

- Optional developer consultation
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="app-vapt">
                    <AccordionTrigger className="text-sm sm:text-base text-left">
                      App vulnerability Assessment and penetration testing
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      What is Application Vulnerability Assessment and Penetration Testing (VAPT)?
              <div><strong>What is Application Vulnerability Assessment and Penetration Testing (VAPT)?</strong></div>
              <div>Vulnerability Assessment and Penetration Testing (VAPT) is a combined approach used to find, analyse, and exploit security weaknesses in a web application, mobile app, or software system — so that they can be fixed before attackers find them.</div>
              <div><strong>It includes two key parts:</strong></div>
              <ol>
                <li><strong>Vulnerability Assessment (VA):</strong> This is the first step where we scan your application to detect known security vulnerabilities using automated tools. It answers: "Where are the weak points in your application?" <br /><em>What’s done in VA:</em> Automated scanning of the app using tools (e.g., Burp Suite, Nessus, OpenVAS), detecting misconfigurations, outdated components, exposed data, etc., generating a list of vulnerabilities (with severity ratings).</li>
                <li><strong>Penetration Testing (PT):</strong> After finding the weak points, our experts manually try to exploit them just like a real hacker would — but ethically and safely. It answers: "Can a hacker actually exploit this vulnerability to steal data or gain control?" <br /><em>What’s done in PT:</em> Manual testing by security professionals, simulated cyberattacks (without harming your system), testing login bypass, XSS, SQL injection, file upload flaws, privilege escalation, etc.</li>
              </ol>
              <div><strong>Combined Power: VAPT</strong></div>
              <div>Together, Vulnerability Assessment + Penetration Testing gives you a full picture of your security risks, validates how dangerous the vulnerabilities really are, and helps you fix both technical and business logic flaws.</div>
              <div><strong>What We Test in Application VAPT</strong></div>
              <ul>
                <li>Authentication & login mechanisms</li>
                <li>Session management</li>
                <li>File uploads & data handling</li>
                <li>Payment systems</li>
                <li>APIs & third-party integrations</li>
                <li>Database interactions (SQL/NoSQL injection)</li>
                <li>Input validation (XSS, CSRF, etc.)</li>
                <li>Access control & authorization flaws</li>
                <li>Error messages & debug info exposure</li>
              </ul>
              <div><strong>Tools We Use</strong></div>
              <ul>
                <li>Burp Suite Pro</li>
                <li>OWASP ZAP</li>
                <li>Nessus / OpenVAS</li>
                <li>Nikto, Nmap</li>
                <li>Custom scripts for manual testing</li>
              </ul>
              <div><strong>Deliverables You Get</strong></div>
              <ul>
                <li>Executive summary (for management)</li>
                <li>Detailed vulnerability report (technical)</li>
                <li>Screenshots & PoC (proof of concept) for critical issues</li>
                <li>Fix recommendations</li>
                <li>Optional retest after patching</li>
              </ul>
              <div><strong>Why Is VAPT Important?</strong></div>
              <ul>
                <li>Protects your website/app from real-world attacks</li>
                <li>Helps avoid costly breaches and data loss</li>
                <li>Builds trust with customers & investors</li>
                <li>Fulfills security compliance (e.g. ISO 27001, PCI-DSS, GDPR)</li>
              </ul>
              <div><strong>Who Needs It?</strong></div>
              <ul>
                <li>Businesses launching new websites or apps</li>
                <li>Companies handling sensitive customer data</li>
                <li>Startups before funding/security audits</li>
                <li>SaaS platforms, eCommerce stores, healthcare & finance apps</li>
              </ul>

It includes two key parts:

1. Vulnerability Assessment (VA): This is the first step where we scan your application to detect known security vulnerabilities using automated tools. It answers: "Where are the weak points in your application?". What’s done in VA: Automated scanning of the app using tools (e.g., Burp Suite, Nessus, OpenVAS), detecting misconfigurations, outdated components, exposed data, etc., generating a list of vulnerabilities (with severity ratings).

2. Penetration Testing (PT): After finding the weak points, our experts manually try to exploit them just like a real hacker would — but ethically and safely. It answers: "Can a hacker actually exploit this vulnerability to steal data or gain control?". What’s done in PT: Manual testing by security professionals, simulated cyberattacks (without harming your system), testing login bypass, XSS, SQL injection, file upload flaws, privilege escalation, etc.

Combined Power: VAPT
Together, Vulnerability Assessment + Penetration Testing gives you a full picture of your security risks, validates how dangerous the vulnerabilities really are, and helps you fix both technical and business logic flaws.

What We Test in Application VAPT
- Authentication & login mechanisms

- Session management

- File uploads & data handling

- Payment systems

- APIs & third-party integrations

- Database interactions (SQL/NoSQL injection)

- Input validation (XSS, CSRF, etc.)

- Access control & authorization flaws

- Error messages & debug info exposure

Tools We Use
- Burp Suite Pro

- OWASP ZAP

- Nessus / OpenVAS

- Nikto, Nmap

- Custom scripts for manual testing

Deliverables You Get
- Executive summary (for management)

- Detailed vulnerability report (technical)

- Screenshots & PoC (proof of concept) for critical issues

- Fix recommendations

- Optional retest after patching

Why Is VAPT Important?
- Protects your website/app from real-world attacks

- Helps avoid costly breaches and data loss

- Builds trust with customers & investors

- Fulfills security compliance (e.g. ISO 27001, PCI-DSS, GDPR)

Who Needs It?
- Businesses launching new websites or apps

- Companies handling sensitive customer data

- Startups before funding/security audits

- SaaS platforms, eCommerce stores, healthcare & finance apps
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="api-security">
                    <AccordionTrigger className="text-sm sm:text-base text-left">
                      API Security Assessment
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      What is API Security Assessment?
              <div><strong>What is API Security Assessment?</strong></div>
              <div>API Security Assessment is the process of testing, analysing, and securing your APIs (Application Programming Interfaces) to identify vulnerabilities that could be exploited by attackers.</div>
              <div><strong>Why Is API Security So Important?</strong></div>
              <div>APIs power modern applications — mobile apps, cloud services, eCommerce platforms, SaaS products — and are often targeted by hackers because they expose backend logic and data, they often lack proper authentication or input validation, and many APIs are undocumented or forgotten (a.k.a. “shadow APIs”).</div>
              <div>A single vulnerable API endpoint can lead to data leaks (e.g., user info, credit cards), account takeovers, or full server compromise.</div>
              <div><strong>What Happens During an API Security Assessment?</strong></div>
              <div>We perform a deep security review of your APIs using both automated tools and manual penetration testing.</div>
              <div><strong>What we deliver</strong></div>
              <ul>
                <li>List of discovered vulnerabilities</li>
                <li>Proof of Concept (how they can be exploited)</li>
                <li>OWASP API Top 10 mapping</li>
                <li>Severity ratings (Low to Critical)</li>
                <li>Actionable remediation guidance</li>
                <li>Optional re-testing after fixes</li>
              </ul>
              <div><strong>Who Needs an API Security Assessment?</strong></div>
              <ul>
                <li>SaaS platforms</li>
                <li>Mobile apps using backend APIs</li>
                <li>eCommerce sites with payment APIs</li>
                <li>Fintech or Healthcare apps sharing sensitive data</li>
                <li>Any business using public or internal APIs</li>
              </ul>

APIs are the digital bridges between your app and other services — but if not secured properly, they can expose sensitive data, allow unauthorized access, or become entry points for cyberattacks.

Why Is API Security So Important?
APIs power modern applications — mobile apps, cloud services, eCommerce platforms, SaaS products — and are often targeted by hackers because they expose backend logic and data, they often lack proper authentication or input validation, and many APIs are undocumented or forgotten (a.k.a. “shadow APIs”).

A single vulnerable API endpoint can lead to data leaks (e.g., user info, credit cards), account takeovers, or full server compromise.

What Happens During an API Security Assessment?
We perform a deep security review of your APIs using both automated tools and manual penetration testing.

What we deliver
After the assessment, you receive a detailed security report that includes:

- List of discovered vulnerabilities

- Proof of Concept (how they can be exploited)

- OWASP API Top 10 mapping

- Severity ratings (Low to Critical)

- Actionable remediation guidance

- Optional re-testing after fixes

Who Needs an API Security Assessment?
- SaaS platforms

- Mobile apps using backend APIs

- eCommerce sites with payment APIs

- Fintech or Healthcare apps sharing sensitive data

- Any business using public or internal APIs
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild><Link to="/contact">Get Started <ArrowRight className="w-4 h-4" /></Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/services">View All Services</Link></Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
