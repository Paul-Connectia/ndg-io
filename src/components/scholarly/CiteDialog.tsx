import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Quote } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CiteDialogProps {
  citation?: {
    harvard: string;
    vancouver: string;
    bibtex?: string;
  };
  trigger?: React.ReactNode;
}

const CiteDialog = ({ citation, trigger }: CiteDialogProps) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const handleCopy = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(format);
    toast({
      title: "Citation copied!",
      description: `${format} citation copied to clipboard.`,
    });
    setTimeout(() => setCopiedTab(null), 2000);
  };

  if (!citation) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Quote className="h-4 w-4 mr-2" />
            Cite
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Cite this work</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="harvard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="harvard">Harvard</TabsTrigger>
            <TabsTrigger value="vancouver">Vancouver</TabsTrigger>
            {citation.bibtex && <TabsTrigger value="bibtex">BibTeX</TabsTrigger>}
          </TabsList>
          
          <TabsContent value="harvard" className="space-y-4">
            <div className="relative">
              <textarea
                readOnly
                value={citation.harvard}
                className="w-full p-4 border rounded-md bg-muted/50 text-sm font-mono resize-none"
                rows={3}
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => handleCopy(citation.harvard, "Harvard")}
              >
                {copiedTab === "Harvard" ? (
                  <Check className="h-4 w-4 text-nx-emerald" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="vancouver" className="space-y-4">
            <div className="relative">
              <textarea
                readOnly
                value={citation.vancouver}
                className="w-full p-4 border rounded-md bg-muted/50 text-sm font-mono resize-none"
                rows={3}
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => handleCopy(citation.vancouver, "Vancouver")}
              >
                {copiedTab === "Vancouver" ? (
                  <Check className="h-4 w-4 text-nx-emerald" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </TabsContent>
          
          {citation.bibtex && (
            <TabsContent value="bibtex" className="space-y-4">
              <div className="relative">
                <textarea
                  readOnly
                  value={citation.bibtex}
                  className="w-full p-4 border rounded-md bg-muted/50 text-sm font-mono resize-none"
                  rows={6}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => handleCopy(citation.bibtex!, "BibTeX")}
                >
                  {copiedTab === "BibTeX" ? (
                    <Check className="h-4 w-4 text-nx-emerald" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CiteDialog;
