import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PixQRCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount?: string;
}

const PixQRCodeDialog = ({ open, onOpenChange, amount }: PixQRCodeDialogProps) => {
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
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
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
      <DialogContent className="sm:max-w-md p-0 gap-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-semibold text-center">Pagamento PIX</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="text-center space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-4">Escaneie o QR Code</p>
              <div className="bg-white p-4 rounded-lg inline-block">
                <div className="w-48 h-48 bg-[#F6F6F7]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-center">
                <p className="text-sm text-gray-600">Tempo restante para pagamento:</p>
                <p className="text-primary text-2xl font-medium">{formatTime(timeLeft)}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Ou copie o código PIX abaixo:</p>
                <div className="relative">
                  <Input
                    readOnly
                    value={pixCode}
                    className="pr-10 font-mono text-sm bg-[#F6F6F7] border-muted"
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-sm transition-colors"
                  >
                    <Copy className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {amount && (
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600">Valor a pagar:</p>
                  <p className="text-gray-900">R${amount}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixQRCodeDialog;