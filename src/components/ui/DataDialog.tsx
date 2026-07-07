'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { ContractData } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTranslations, useLocale } from 'next-intl';
import DownloadPDF from './DownloadPDF';
import SignContract from './SignContract';

type DataDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: ContractData;
};

const DataDialog = ({ open, onOpenChange, data }: DataDialogProps) => {
  const t = useTranslations('Contract');
  const locale = useLocale() as 'ar' | 'en';
  const dir = locale === 'en' ? 'ltr' : 'rtl';

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[95%] !w-4xl mx-auto" dir={dir}>
        {/* Header */}
        <DialogHeader className="pb-4 border-b border-gray-200">
          <DialogTitle className="text-center text-2xl font-bold text-gray-800">
            {t('header')}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea dir={dir} className="h-[400px] p-5 border-2 mt-4">
          <div className="space-y-6 px-2">
            {/* Contact Header */}
            <div className="bg-white">
              <div className="space-y-2">
                <p className="font-semibold text-xl text-gray-700">
                  {t('contactHeader', {
                    effectiveDate: formatDate(data.start_date),
                  })}
                </p>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2 border-gray-200">
                {t('businessDetails')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-gray-700">
                    {t('businessName')}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {data.business_details.business_name[locale]}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    {t('crNumber')}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {data.business_details.cr_number}
                  </span>
                </div>
              </div>
            </div>

            {/* Contract Information */}
            <div className="bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2 border-gray-200">
                {t('contractInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-gray-700">
                    {t('refNumber')}
                  </span>
                  <span className="ml-2 text-gray-600">{data.ref}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    {t('signatureStatus')}
                  </span>
                  <span
                    className={`ml-2 px-2 py-1 rounded text-sm ${
                      data.is_signed
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {data.is_signed ? t('signed') : t('notSigned')}
                  </span>
                </div>
                {data.is_signed && data.start_date && (
                  <div>
                    <span className="font-semibold text-gray-700">
                      {t('startDate')}
                    </span>
                    <span className="ml-2 text-gray-600">
                      {formatDate(data.start_date)}
                    </span>
                  </div>
                )}
                <div>
                  <span className="font-semibold text-gray-700">
                    {t('commissionPercentage')}
                  </span>
                  <span className="ml-2 text-gray-800 font-bold">
                    {data.commission_percentage}%
                  </span>
                </div>
              </div>
            </div>

            {/* Highlighted Terms */}
            <div className="bg-white">
              <h4 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                {t('highlightedTerms')}
              </h4>
              <ol className="list-decimal list-inside space-y-3">
                {data.highlighted_terms.map((term, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed pl-2">
                    {term[locale]}
                  </li>
                ))}
              </ol>
            </div>

            {/* Obligations */}
            <div className="bg-white">
              <h4 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                {t('obligations')}
              </h4>
              <ol className="list-decimal list-inside space-y-3">
                {data.obligations.map((obligation, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed pl-2">
                    {obligation[locale]}
                  </li>
                ))}
              </ol>
            </div>

            {/* Services */}
            <div className="bg-white">
              <h4 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                {t('services')}
              </h4>
              <ul className="list-disc list-inside space-y-3">
                {data.services.map((service, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed pl-2">
                    {service[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
        {data.is_signed ? (
          <DownloadPDF data={data} />
        ) : (
          <SignContract onOpenChange={onOpenChange} contractRef={data.ref} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DataDialog;
