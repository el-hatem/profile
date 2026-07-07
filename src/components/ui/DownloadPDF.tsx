'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useTranslations, useLocale } from 'next-intl';
import { ContractData } from '@/lib/types';
import { pdf } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

type DownloadPDFProps = {
  data: ContractData;
};

const DownloadPDF = ({ data }: DownloadPDFProps) => {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<MyDocument data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `contract_${data.ref}_${data.business_details.business_name.en}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate PDF', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <Button onClick={handleDownload} disabled={loading}>
        {loading ? t('generatingPDF') : t('downloadPDF')}
      </Button>
    </div>
  );
};

export default DownloadPDF;
