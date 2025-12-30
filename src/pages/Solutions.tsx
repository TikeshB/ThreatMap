import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, Cloud, Monitor, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building,
    title: "Enterprise Security",
    slug: "enterprise",
    description: "Complete security infrastructure for large organizations with complex needs.",
    features: [
      "Multi-layered defense architecture",
      "Security Operations Center (SOC)",
      "Identity and access management",
      "Data loss prevention",
      "Security awareness training",
      "Executive threat briefings",
    ],
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    slug: "cloud",
    description: "Secure your cloud infrastructure across AWS, Azure, GCP, and hybrid environments.",
    features: [
      "Cloud security posture management",
      "Container security",
      "Serverless security",
      "Cloud workload protection",
      "API security",
      "Multi-cloud visibility",
    ],
    color: "cyber-purple",
  },
  {
    icon: Monitor,
    title: "Endpoint Protection",
    slug: "endpoint",
    description: "Advanced endpoint detection and response for all your devices.",
    features: [
      "Next-gen antivirus",
      "EDR/XDR capabilities",
      "Device control",
      "Mobile device management",
      "Patch management",
      "Remote device wiping",
    ],
    color: "cyber-orange",
  },
];

export default function Solutions() {
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
              Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Security Solutions for Every Environment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Whether you're protecting an enterprise, cloud infrastructure, or endpoints, 
              we have the right solution to keep your organization secure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8 space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 rounded-2xl bg-muted/30 border border-border/30"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {solution.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
                  <Link to={`/solutions/${solution.slug}`}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not Sure Which Solution is Right for You?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our security experts can help you assess your needs and recommend the perfect solution.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2" asChild>
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
