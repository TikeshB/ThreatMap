import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, FileCheck, CheckCircle, ArrowRight, Award, Clock, Users } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const frameworks = [
  {
    id: "soc2",
    name: "SOC 2",
    fullName: "Service Organization Control 2",
    description: "Demonstrate your commitment to security, availability, and confidentiality for service organizations.",
    features: [
      "Trust Services Criteria assessment",
      "Type I and Type II audits",
      "Continuous monitoring",
      "Gap remediation support",
    ],
  },
  {
    id: "iso27001",
    name: "ISO 27001",
    fullName: "Information Security Management",
    description: "Implement an internationally recognized information security management system (ISMS).",
    features: [
      "ISMS implementation",
      "Risk assessment methodology",
      "Policy development",
      "Certification support",
    ],
  },
  {
    id: "gdpr",
    name: "GDPR",
    fullName: "General Data Protection Regulation",
    description: "Ensure compliance with EU data protection requirements for handling personal data.",
    features: [
      "Data mapping & inventory",
      "Privacy impact assessments",
      "Data subject rights",
      "Breach notification procedures",
    ],
  },
  {
    id: "hipaa",
    name: "HIPAA",
    fullName: "Health Insurance Portability and Accountability Act",
    description: "Protect sensitive patient health information with required safeguards.",
    features: [
      "PHI protection assessment",
      "Administrative safeguards",
      "Technical controls",
      "Business associate agreements",
    ],
  },
  {
    id: "pci",
    name: "PCI DSS",
    fullName: "Payment Card Industry Data Security Standard",
    description: "Secure cardholder data and maintain compliance with payment industry standards.",
    features: [
      "Cardholder data protection",
      "Network security controls",
      "Access management",
      "Regular testing & monitoring",
    ],
  },
  {
    id: "nist",
    name: "NIST",
    fullName: "National Institute of Standards and Technology",
    description: "Align with federal cybersecurity standards and best practices.",
    features: [
      "Cybersecurity framework alignment",
      "Risk management framework",
      "800-53 controls mapping",
      "Continuous assessment",
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Our certified compliance specialists guide you through every step of the process.",
  },
  {
    icon: Clock,
    title: "Faster Certification",
    description: "Streamlined approach reduces time to compliance by up to 50%.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Ongoing support to maintain compliance and handle audits with confidence.",
  },
];

export default function Compliance() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              Compliance Management
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Achieve & Maintain Compliance with Confidence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Navigate complex regulatory requirements with our expert compliance management services. 
              We help you achieve certifications faster and maintain them effortlessly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-muted/30 border border-border/30"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Compliance Frameworks We Support
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From industry-specific regulations to international standards, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.id}
                id={framework.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {framework.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{framework.fullName}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {framework.description}
                </p>

                <ul className="space-y-2">
                  {framework.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Start Your Compliance Journey Today
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Get a free compliance assessment and roadmap tailored to your organization's needs.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2" asChild>
                <Link to="/contact">
                  Request Assessment <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
