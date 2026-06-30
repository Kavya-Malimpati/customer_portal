import { useEffect, useState } from 'react';
import StartNewQuoteView from './StartNewQuoteView';
import type { QuoteData } from './interfaces';

const StartNewQuote = () => {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {

      setQuoteData({
        customerName: 'John Michael Smith',
        email: 'John.smith@gmail.com',
        primaryPhone: '+1 (212) 5557890',
        secondaryPhone: '+1 (646) 5551234',
        street: '1600 Broadway',
        city: 'New York',
        state: 'NY',
        zipCode: '10019',
        preferredCommunication: 'Email',
      });
    };

    fetchCustomerDetails();
  }, []);

  return <StartNewQuoteView quoteData={quoteData} />;
};

export default StartNewQuote;