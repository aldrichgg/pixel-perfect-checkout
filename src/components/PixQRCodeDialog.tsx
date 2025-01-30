import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCode, Copy, Check, Timer } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PixQRCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PixQRCodeDialog = ({ open, onOpenChange }: PixQRCodeDialogProps) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const { toast } = useToast();
  
  const pixCode = "00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-426655440000520400005303986540510.005802BR5913Recipient Name6008Sao Paulo62070503***6304E2CA";

  useEffect(() => {
    if (!open) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onOpenChange(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeLeft(600);
    };
  }, [open, onOpenChange]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      toast({
        description: "Código Pix copiado com sucesso!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Erro ao copiar o código Pix.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Pagamento via Pix</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Timer className="h-4 w-4" />
            <span>Expira em {formatTime(timeLeft)}</span>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <QrCode className="w-48 h-48" />
          </div>

          <div className="w-full space-y-2">
            <label className="text-sm text-muted-foreground">Pix copia e cola</label>
            <div className="flex space-x-2">
              <Input
                readOnly
                value={pixCode}
                className="font-mono text-sm"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixQRCodeDialog;