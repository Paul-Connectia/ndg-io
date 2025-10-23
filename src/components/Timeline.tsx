import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  achievement?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6"
          >
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg relative z-10">
              <CheckCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                {item.achievement && (
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-lg">
                    {item.achievement}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;