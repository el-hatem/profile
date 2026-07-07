'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signContract } from '@/lib/api';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

type SignContractProps = {
  onOpenChange: (open: boolean) => void;
  contractRef: string;
};

const SignContract = ({ onOpenChange, contractRef }: SignContractProps) => {
  const t = useTranslations('HomePage');
  const [hasAgreed, setHasAgreed] = useState(false);
  const [signature, setSignature] = useState('');
  const [loading, setLoading] = useState(false);

  const code = contractRef;

  const handleSign = async () => {
    if (!hasAgreed) {
      toast.error(t('toast_agree_terms'));
      return;
    }
    if (!signature.trim()) {
      toast.error(t('toast_enter_signature'));
      return;
    }

    setLoading(true);
    try {
      await signContract(code, {
        signature: signature,
      });
      toast.success(t('toast_success'));
      onOpenChange(false);
    } catch {
      toast.error(t('toast_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-2 space-x-2">
        <Checkbox
          id="terms"
          checked={hasAgreed}
          onCheckedChange={(checked) => setHasAgreed(!!checked)}
        />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {t('agreement_text')}
        </Label>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="signature">{t('signature_label')}</Label>
        <Input
          type="text"
          id="signature"
          placeholder={t('signature_placeholder')}
          disabled={!hasAgreed || loading}
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
        />
      </div>

      <Button
        type="button"
        disabled={!hasAgreed || loading}
        onClick={handleSign}
      >
        {loading ? t('signing_button_loading') : t('signing_button')}
      </Button>
    </div>
  );
};

export default SignContract;
