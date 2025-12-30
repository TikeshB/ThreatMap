import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Briefcase, Target, TrendingUp, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "fintech-grc",
    industry: "Fintech / Digital Lending",
    title: "Scaling a Fintech's GRC Program for Rapid Growth",
    clientSize: "Series C, 800+ employees",
    challenge:
      "A fast-growing fintech needed to formalize its governance, risk, and compliance posture to satisfy investors and regulators without slowing product delivery.",
    approach: [
      "Performed a current-state GRC maturity assessment across people, process, and tooling.",
      "Mapped existing controls to ISO 27001 and SOC 2 Trust Services Criteria.",
      "Defined a risk register, scoring model, and executive reporting cadence.",
      "Implemented lightweight workflows for policy approvals and exception handling.",
    ],
    outcomes: [
      { label: "Audit findings reduced", value: "-65%", icon: TrendingUp },
      { label: "Time to evidence", value: "< 48 hrs", icon: Clock },
      { label: "Coverage of key risks", value: "> 90%", icon: ShieldCheck },
    ],
  },
  {
    id: "healthcare-cloud",
    industry: "Healthcare SaaS",
    title: "Hardening a Multi-Cloud Healthcare Platform",
    clientSize: "Global SaaS, 1,200+ employees",
    challenge:
      "A healthcare SaaS provider operating on AWS and Azure needed to tighten cloud security and align with HIPAA and SOC 2 requirements.",
    approach: [
      "Reviewed current architecture and identity model across AWS and Azure.",
      "Implemented guardrails for least-privilege IAM and baseline configurations.",
      "Defined a tagging strategy tied to data sensitivity and environments.",
      "Integrated misconfiguration alerts into the client’s existing SOC runbooks.",
    ],
    outcomes: [
      { label: "Critical misconfigs closed", value: "40+", icon: ShieldCheck },
      { label: "Mean time to resolution", value: "-50%", icon: TrendingUp },
      { label: "Cloud security posture score", value: "+28 pts", icon: Target },
    ],
  },
  {
    id: "banking-appsec",
    industry: "Banking / Mobile",
    title: "Raising the Bar on Mobile App Security for a Bank",
    clientSize: "Retail bank, 10M+ customers",
    challenge:
      "A retail bank wanted independent assurance that its mobile apps and APIs were resilient against modern attack techniques before a major feature launch.",
    approach: [
      "Conducted mobile application security testing aligned to OWASP MASVS.",
      "Assessed API endpoints for authentication, authorization, and input validation issues.",
      "Worked hand-in-hand with product and engineering teams on remediation sprints.",
      "Established a repeatable pre-release security testing checklist.",
    ],
    outcomes: [
      { label: "High/critical issues", value: "0 in go-live", icon: ShieldCheck },
      { label: "Time from finding to fix", value: "< 7 days", icon: Clock },
      { label: "Security rating in app stores", value: "4.8★", icon: TrendingUp },
    ],
  },
];

export default function CaseStudies() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              <Briefcase className="w-4 h-4" />
              Case Studies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Real Outcomes for Security & Risk Programs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              A snapshot of how we help organizations across industries strengthen governance,
              harden infrastructure, and ship secure products without slowing down the business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/60 shadow-sm shadow-primary/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span>{study.industry}</span>
                    </div>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary font-mono uppercase tracking-wide">
                      {study.clientSize}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {study.title}
                  </h2>

                  {/* Challenge */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                      <Target className="w-3 h-3 text-primary" />
                      Challenge
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      Approach
                    </h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {study.approach.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      Outcomes
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {study.outcomes.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl bg-background/80 border border-border/50 px-3 py-2 flex flex-col gap-1 items-start"
                        >
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <metric.icon className="w-3 h-3 text-primary" />
                            <span>{metric.label}</span>
                          </div>
                          <div className="font-mono text-sm text-foreground">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/30 px-8 py-10 lg:px-14 lg:py-14 text-center"
          >
            <div className="max-w-2xl mx-auto space-y-5">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Want to See What This Could Look Like for You?
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Book a 30-minute discovery call and we'll walk through a sample
                engagement, deliverables, and timeline tailored to your environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
                  <Link to="/contact">
                    Book a 30-min discovery call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/60 bg-background/80 hover:bg-background"
                  asChild
                >
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
