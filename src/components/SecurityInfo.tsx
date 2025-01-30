import React from 'react';

const SecurityInfo = () => {
  return (
    <div className="security-box">
      <p className="text-sm text-gray-600 mb-4">
        Usamos seus dados de forma segura para garantir a sua satisfação:
      </p>
      <ul className="space-y-2">
        <SecurityItem text="Enviar o seu comprovante de compra e pagamento;" />
        <SecurityItem text="Ativar sua devolução caso não fique satisfeito;" />
        <SecurityItem text="Acompanhar o andamento do seu pedido." />
      </ul>
    </div>
  );
};

const SecurityItem = ({ text }: { text: string }) => (
  <li className="flex items-center space-x-2 text-sm text-gray-600">
    <svg
      className="w-5 h-5 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 12L11 15L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>{text}</span>
  </li>
);

export default SecurityInfo;