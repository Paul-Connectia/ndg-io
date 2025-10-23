import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  demoSteps: string[];
  gifPlaceholder?: string;
}

const DemoModal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  demoSteps, 
  gifPlaceholder = "/api/placeholder/600/400" 
}: DemoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {title} - Sandbox Walkthrough
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Demo Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-research rounded-xl p-6 border"
          >
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Demo Animation Placeholder</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </motion.div>

          {/* Demo Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">How it works:</h3>
            <div className="space-y-3">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-foreground">{step}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> This is a demonstration of our research capabilities. 
                Live versions are available through institutional partnerships.
              </p>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;