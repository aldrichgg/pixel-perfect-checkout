import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProgressIndicator from "@/components/ProgressIndicator";
import SecurityInfo from "@/components/SecurityInfo";

const Payment = () => {
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
              <button
                className="w-full bg-primary text-white rounded-full py-3 font-medium hover:bg-primary/90 transition-colors"
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
    </div>
  );
};

export default Payment;