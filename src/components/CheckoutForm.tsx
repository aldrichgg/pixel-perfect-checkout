import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import SecurityInfo from './SecurityInfo';

const CheckoutForm = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <ProgressIndicator />
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-6">Dados pessoais</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome completo"
              className="input-base"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="input-base"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="DDD+número"
              className="input-base"
            />
            <input
              type="text"
              placeholder="CPF/CNPJ"
              className="input-base"
            />
          </div>
          <SecurityInfo />
          <button
            type="button"
            className="w-full bg-primary text-white rounded-full py-3 px-6 mt-6 flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors"
          >
            <span>Pagamento</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;