import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import ProgressIndicator from "@/components/ProgressIndicator";
import SecurityInfo from "@/components/SecurityInfo";
import PixQRCodeDialog from "@/components/PixQRCodeDialog";

const Payment = () => {
  const [showPixDialog, setShowPixDialog] = useState(false);
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and one decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) return;
    if (parts[1]?.length > 2) return;
    setAmount(value);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <ProgressIndicator currentStep={2} />
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-6">Opções de pagamento</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-border">
            <RadioGroup defaultValue="pix" className="space-y-4">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="pix" id="pix" />
                <label htmlFor="pix" className="text-base">Pix</label>
              </div>
            </RadioGroup>
            
            <div className="mt-6">
              <label htmlFor="amount" className="block text-sm text-gray-600 mb-2">
                Valor do pagamento
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  R$
                </span>
                <Input
                  id="amount"
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="pl-8"
                  placeholder="0,00"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                className="w-full bg-primary text-white rounded-full py-3 font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setShowPixDialog(true)}
                disabled={!amount || parseFloat(amount) <= 0}
              >
                Gerar pix
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                </div>
                <span className="text-sm text-gray-600">Pagamento somente à vista</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                </div>
                <span className="text-sm text-gray-600">A liberação da compra ocorre após a confirmação do pagamento</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                </div>
                <span className="text-sm text-gray-600">Ao gerar o código atente para a data de expiração</span>
              </div>
            </div>
          </div>
          <SecurityInfo />
        </div>
      </div>

      <PixQRCodeDialog 
        open={showPixDialog} 
        onOpenChange={setShowPixDialog}
        amount={amount}
      />
    </div>
  );
};

export default Payment;