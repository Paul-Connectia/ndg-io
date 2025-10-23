import { motion } from 'framer-motion';
import { Shield, Database, Cloud, Lock, ArrowRight } from 'lucide-react';

const SecurityDiagram = () => {
  const steps = [
    {
      icon: Cloud,
      title: "Frontend",
      description: "React + Edge Functions",
      detail: "No API keys in client"
    },
    {
      icon: Shield,
      title: "Edge Proxy",
      description: "Rate limiting & logging",
      detail: "GDPR/ICO aligned"
    },
    {
      icon: Database,
      title: "Provider API",
      description: "Secure backend calls",
      detail: "Row-level security"
    },
    {
      icon: Lock,
      title: "Data Handling",
      description: "No PII in demos",
      detail: "Privacy by design"
    }
  ];

  return (
    <div className="bg-gradient-research rounded-2xl p-8 border">
      <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
        Security Architecture
      </h3>
      
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connection arrow */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-accent" />
              </div>
            )}
            
            {/* Step card */}
            <div className="bg-card rounded-xl p-6 border shadow-sm text-center h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {step.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
        <p className="text-sm text-center text-muted-foreground">
          <strong>End-to-end security:</strong> Encryption in transit and at rest, 
          regional hosting per market, least privilege access controls.
        </p>
      </div>
    </div>
  );
};

export default SecurityDiagram;