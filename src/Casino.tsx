import React from 'react';
import WalletInfo from './components/WalletInfo';
import { useTranslation } from './useTranslation';

export default function Casino() {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
      {/* Banner */}
      <div>
        <img
          src="https://via.placeholder.com/600x200?text=Banner+Khuyen+Mai"
          alt="Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Thông tin ví */}
      <WalletInfo username="anh-tu" balance={3000} />
    </div>
  );
}
