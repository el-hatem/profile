'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import DataDialog from './DataDialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { getContract } from '@/lib/api';
import type { ContractData } from '@/lib/types';

const MainComponent = () => {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const dir = locale === 'en' ? 'ltr' : 'rtl';

  const [loading, setLoading] = useState(false);
  const [contractCode, setContractCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [contractData, setContractData] = useState<ContractData | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contractCode) {
      setError(t('errors.emptyContractCode'));
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await getContract(contractCode);
      setContractData(data);
      setDialogOpen(true);
    } catch (error) {
      console.error('Error fetching contract:', error);
      setError(t('errors.fetchFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader dir={dir}>
          <CardTitle className="text-center text-lg">{t('header')}</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4" dir={dir}>
            <div className="space-y-2">
              <Label htmlFor="contract-search">{t('search')}</Label>
              <Input
                id="contract-search"
                type="text"
                value={contractCode}
                onChange={(e) => setContractCode(e.target.value)}
                placeholder={t('searchPlaceholder')}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t('loading') : t('search')}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Dialog لعرض بيانات العقد عند النجاح */}
      {contractData && (
        <DataDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          data={contractData}
        />
      )}
    </>
  );
};

export default MainComponent;
