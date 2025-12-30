import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export default function ResourceAsServiceService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Server className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Resource as a Service</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              RNR Consulting offers skilled cybersecurity professionals on a flexible, contract-based model — from Security Analysts and GRC experts to VAPT specialists and vCISOs.
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Resource as a Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">GRC Specialists (ISO 27001, RBI, SEBI, CERT-In, etc.)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Information Security Analysts</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Cybersecurity Engineers (SIEM, EDR, Firewall, etc.)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">VAPT & Application Security Testers</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">Compliance & Risk Consultants</span></li>
                </ul>
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
