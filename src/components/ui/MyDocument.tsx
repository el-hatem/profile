'use client';

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import { ContractData } from '@/lib/types'; // Import the type

// Register a non-variable Arabic font like Amiri, which has wider support
// Make sure this font file exists in your public/fonts folder
Font.register({
  family: 'Amiri',
  src: '/fonts/Amiri-Regular.ttf',
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    paddingTop: 120,
    fontFamily: 'Amiri', // Use the registered font family name
    backgroundColor: 'white',
    lineHeight: 1,
  },
  section: {
    marginBottom: 5,
    direction: 'rtl',
  },
  header: {
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'right',
    direction: 'rtl',
    wordSpacing: 2,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'right',
    fontWeight: 'bold',
    direction: 'rtl',
    borderBottom: '1 solid #333',
    paddingBottom: 5,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 5,
    textAlign: 'right',
    direction: 'rtl',
    lineHeight: 1,
    wordSpacing: 1,
  },
  listItemContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    marginBottom: 6,
    direction: 'rtl',
  },
  bulletPoint: {
    fontSize: 11,
    marginLeft: 8,
    marginRight: 0,
    textAlign: 'right',
  },
  numberPoint: {
    fontSize: 11,
    marginLeft: 8,
    marginRight: 0,
    textAlign: 'right',
    minWidth: 20,
  },
  listText: {
    fontSize: 11,
    textAlign: 'right',
    direction: 'rtl',
    flex: 1,
    lineHeight: 1,
    wordSpacing: 1,
  },
  infoRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
    direction: 'rtl',
  },
  infoLabel: {
    fontSize: 11,
    textAlign: 'right',
    direction: 'rtl',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 11,
    textAlign: 'right',
    direction: 'rtl',
    flex: 1,
    wordSpacing: 1,
  },
  logoSmall: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 50,
    height: 50,
    objectFit: 'contain',
    zIndex: 10,
  },
  logoFull: {
    position: 'absolute',
    top: 30,
    left: 30,
    width: 120,
    height: 50,
    objectFit: 'contain',
    zIndex: 10,
  },
  signatureSection: {
    marginTop: 30,
    paddingTop: 20,
    borderTop: '1 solid #ddd',
  },
});

// Define the props for MyDocument
type MyDocumentProps = {
  data: ContractData;
};

// Update the component to accept `data` as a prop
const MyDocument = ({ data }: MyDocumentProps) => {
  const startDate = data.start_date
    ? new Date(data.start_date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : 'غير محدد';

  const BulletList = ({ items }: { items: { ar: string }[] }) => (
    <View style={{ marginBottom: 15 }}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItemContainer}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.listText}>{item.ar}</Text>
        </View>
      ))}
    </View>
  );

  const NumberedList = ({ items }: { items: { ar: string }[] }) => (
    <View style={{ marginBottom: 15 }}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItemContainer}>
          <Text style={styles.numberPoint}>{index + 1}.</Text>
          <Text style={styles.listText}>{item.ar}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Keep logos as they are */}
        <Image src="/logosmall.png" style={styles.logoSmall} />
        <Image src="/logofull.png" style={styles.logoFull} />

        {/* Header Section - Fixed Arabic formatting */}
        <View style={styles.section}>
          <Text style={styles.header}>
            تم إبرام هذه الاتفاقية في {startDate}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>
            الطرف الأول: شركة أوبال العالم للتجارة ،بسجل تجاري رقم 1010311191
            عنوانها الرئيسي هو الرياض، 6999 صلاح الدين الأيوبي، الملز 2300،
            المملكة العربية السعودية.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>الطرف الثاني:</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>اسم العمل:</Text>
            <Text style={styles.infoValue}>
              {data.business_details.business_name.ar}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>رقم السجل التجاري:</Text>
            <Text style={styles.infoValue}>
              {data.business_details.cr_number}
            </Text>
          </View>
        </View>

        {/* Terms Section */}
        <View style={styles.section}>
          <Text style={styles.title}>الشروط والأحكام</Text>
          <BulletList items={data.highlighted_terms} />
        </View>

        {/* Obligations Section */}
        <View style={styles.section}>
          <Text style={styles.title}>التزامات الطرف الثاني</Text>
          <NumberedList items={data.obligations} />
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.title}>الخدمات المقدمة</Text>
          <BulletList items={data.services} />
        </View>

        {/* Commission Section */}
        <View style={styles.section}>
          <Text style={styles.title}>العمولة</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>نسبة العمولة:</Text>
            <Text style={styles.infoValue}>{data.commission_percentage}%</Text>
          </View>
        </View>

        {/* Signature Section */}
        <View style={[styles.section, styles.signatureSection]}>
          <Text style={styles.title}>التوقيع</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>توقيع الطرف الثاني:</Text>
            <Text style={styles.infoValue}>{data.signature}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
