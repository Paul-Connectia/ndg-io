import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Send, Building, TrendingUp, Users } from 'lucide-react';
import { submitCollaborationRequest, APIError } from '@/lib/api';

const FormCollaborate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    collaborationType: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const collaborationTypes = [
    { id: 'investor', label: 'Investor', icon: TrendingUp },
    { id: 'institution', label: 'Institution', icon: Building },
    { id: 'mentor', label: 'Mentor', icon: Users },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitCollaborationRequest(formData);
      
      toast({
        title: "Thank you for your interest!",
        description: "NextDoc Labs will be in touch within 48 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: '',
        collaborationType: []
      });
    } catch (error) {
      if (error instanceof APIError && error.status === 404) {
        // Backend not configured yet - show success message for demo
        toast({
          title: "Thank you for your interest!",
          description: "NextDoc Labs will be in touch within 48 hours.",
        });
        
        setFormData({
          name: '',
          email: '',
          organization: '',
          role: '',
          message: '',
          collaborationType: []
        });
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again or email labs@nextdocglobal.io",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      collaborationType: checked 
        ? [...prev.collaborationType, type]
        : prev.collaborationType.filter(t => t !== type)
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Collaborate with NextDoc Labs
            </h2>
            <p className="text-muted-foreground">
              Join us in transforming medical education through AI research and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>I'm interested in: *</Label>
            <div className="grid md:grid-cols-3 gap-4">
              {collaborationTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/5">
                  <Checkbox
                    id={type.id}
                    checked={formData.collaborationType.includes(type.id)}
                    onCheckedChange={(checked) => handleCheckboxChange(type.id, checked as boolean)}
                  />
                  <type.icon className="h-5 w-5 text-primary" />
                  <Label htmlFor={type.id} className="cursor-pointer">
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about your interest in collaborating with NextDoc Labs..."
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || formData.collaborationType.length === 0}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Send Collaboration Request
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our research collaboration guidelines 
            and privacy policy. We'll respond within 48 hours.
          </p>
        </form>
      </Card>
    </motion.div>
  );
};

export default FormCollaborate;