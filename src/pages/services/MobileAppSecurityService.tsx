import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export default function MobileAppSecurityService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Eye className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Mobile App Security</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Mobile applications are prime targets for attackers due to the sensitive data they process. RNR's Mobile App Security service ensures your Android and iOS applications are tested against the latest OWASP MASVS standards.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-muted/30 border border-border/40 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Mobile Vulnerability Assessment Penetration Testing (VAPT)</h3>
                <div className="space-y-4 text-muted-foreground">
                  <strong>What is Mobile Application VAPT?</strong>
                  <div>Mobile Application VAPT is a specialized security service aimed at identifying and addressing vulnerabilities in Android and iOS applications. It involves a thorough assessment of the app’s architecture, code behavior, and communication with back-end services, focusing on issues like insecure data storage, session handling, broken authentication, insecure APIs, weak encryption, and exposure of sensitive information.</div>
                  <strong>Vulnerability Assessment (VA)</strong>
                  <div>Systematic process to identify, analyze, and report security weaknesses such as outdated software, misconfigurations, weak access controls, or missing patches.</div>
                  <strong>Penetration Testing (PT)</strong>
                  <div>Controlled, simulated cyberattack to actively attempt to exploit detected weaknesses, just like a real attacker would.</div>
                  <strong>Why is it important?</strong>
                  <ul className="list-disc pl-5">
                    <li>Protects sensitive user data (passwords, credit card info, personal info)</li>
                    <li>Prevents unauthorized access or data breaches</li>
                    <li>Ensures compliance with OWASP Mobile Top 10, MASVS, GDPR, etc.</li>
                    <li>Builds user trust and app store credibility</li>
                  </ul>
                  <strong>Our Methodology</strong>
                  <ol className="list-decimal pl-5">
                    <li>Pre-Engagement & Scoping: Define scope, test type, gather artifacts</li>
                    <li>Reconnaissance / Information Gathering</li>
                    <li>Static Application Security Testing (SAST)</li>
                    <li>Dynamic Application Security Testing (DAST)</li>
                    <li>Reporting & Remediation Guidance: Detailed report with practical solutions</li>
                  </ol>
                  <strong>What we deliver</strong>
                  <ol className="list-decimal pl-5">
                    <li>Scope Document / Proposal / SOW</li>
                    <li>Technical Vulnerability Report</li>
                    <li>Executive Summary Report</li>
                    <li>Walkthrough Session (Optional)</li>
                  </ol>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-muted/30 border border-border/40 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Application Source Code Review</h3>
                <div className="space-y-4 text-muted-foreground">
                  <strong>What is Mobile Source Code Review?</strong>
                  <div>Mobile Source Code Review is a detailed manual and automated analysis of your mobile app’s source code to detect security vulnerabilities, weak coding practices, and hidden risks before they can be exploited.</div>
                  <strong>Why is Source Code Review important?</strong>
                  <ul className="list-disc pl-5">
                    <li>Better Security Assurance: Deep visibility into app security, not just surface-level</li>
                    <li>Detect Hidden Risks: Find hardcoded credentials, API keys, sensitive data</li>
                    <li>Catch Insecure Coding Practices: Prevent data leaks, broken authentication, insecure storage</li>
                    <li>Uncover Third-party SDK Issues: Check for vulnerabilities in external libraries</li>
                    <li>Meets Compliance Requirements: Required for audits, certifications, regulations</li>
                    <li>Improves Developer Awareness: Shows where to fix and how to write secure code</li>
                    <li>Reduces Cost of Future Fixes: Cheaper to fix during development than after release</li>
                  </ul>
                  <strong>Methodology</strong>
                  <ol className="list-decimal pl-5">
                    <li>Access Setup: Source code, docs, build environment</li>
                    <li>Automated Scanning: Tools like MobSF, SonarQube, Semgrep</li>
                    <li>Manual Code Review: Auth logic, API handling, secrets, storage, SDKs</li>
                    <li>Risk Categorization: Severity, OWASP MASVS & CWE mapping, PoC</li>
                    <li>Reporting: Detailed report with file names, code snippets, risks, fixes</li>
                  </ol>
                </div>
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
