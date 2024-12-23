import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Unlimited Clients",
  "Policy Management",
  "Document Storage",
  "Email Integration",
  "Calendar Sync",
  "Mobile App Access",
  "Premium Support"
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">Everything you need to grow your insurance business</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-accent rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12 border-b border-border">
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold">$155</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            <p className="text-center text-muted-foreground">Full access to all features</p>
          </div>

          <div className="p-8 md:p-12">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button 
              className="w-full mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium 
                           hover:bg-primary/90 transition-colors duration-200"
              onClick={() => window.location.href = "https://buy.stripe.com/00g7tr5Ly4yR1K88wy"}
            >
              Start Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};