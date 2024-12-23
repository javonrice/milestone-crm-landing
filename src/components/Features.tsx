import { motion } from "framer-motion";
import { ClipboardList, Users, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Policy Management",
    description: "Track and manage all your policies in one centralized location"
  },
  {
    icon: Users,
    title: "Client Relationships",
    description: "Build stronger connections with automated follow-ups and reminders"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Seamlessly schedule and manage client meetings"
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Industry-standard security to protect sensitive client data"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Everything You Need to Succeed
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Powerful features designed specifically for life insurance professionals
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};