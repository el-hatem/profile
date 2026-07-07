'use client';

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '@/components/MyDocument';

export default function PDFPreviewPage() {
  return (
    <div className="h-screen">
      <PDFViewer style={{ width: '100%', height: '100%' }}></PDFViewer>
    </div>
  );
}
