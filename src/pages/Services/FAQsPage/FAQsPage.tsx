import './FAQsPage.css';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Accordion, Button, Card, TextField, Typography } from '../../../common/components';

const categories = ['Policy', 'Billing', 'Claims', 'Homeowners', 'Auto'];

const faqData = [
  // Policy
  {
    category: 'Policy',
    question: 'How do I download my policy document?',
    answer:
      'Go to Policy from the main menu and select the policy you want. Click "View Documents" and then the download icon next to the document name. Your policy documents, including the declarations page and endorsements, are available as PDFs.',
  },
  {
    category: 'Policy',
    question: 'How do I update my mailing address?',
    answer:
      'Navigate to Profile > Personal Information and click "Edit." Update your mailing address and save. If your mailing address differs from your residence address, make sure both are updated. Address changes may affect your policy premium and will be reflected on your next renewal.',
  },
  {
    category: 'Policy',
    question: 'How do I add a driver?',
    answer:
      'Go to Policy > Auto Policy > Manage Drivers and click "Add Driver." Enter the driver\'s full name, date of birth, license number, and state. The driver will be added as a rated driver on your policy. A premium adjustment may apply and will be shown before you confirm.',
  },
  {
    category: 'Policy',
    question: 'How do I remove a driver?',
    answer:
      'Go to Policy > Auto Policy > Manage Drivers, select the driver you want to remove, and click "Remove Driver." You may be asked to provide a reason (e.g., driver no longer in household, license surrendered). The change takes effect on the endorsement date shown at confirmation.',
  },
  {
    category: 'Policy',
    question: 'How do I add another vehicle?',
    answer:
      'Navigate to Policy > Auto Policy > Vehicles and click "Add Vehicle." Enter the vehicle\'s year, make, model, VIN, and primary use. Select the coverage options you want for the new vehicle. A revised premium quote will be displayed before you finalize the addition.',
  },
  {
    category: 'Policy',
    question: 'How do I renew my policy?',
    answer:
      'You will receive a renewal notice by email and in-app notification 30 days before your policy expires. Go to Policy > Renewal and review the updated terms and premium. Click "Accept Renewal" to confirm. If no action is taken, your policy may auto-renew based on your current settings.',
  },
  {
    category: 'Policy',
    question: 'How do I cancel my policy?',
    answer:
      'To cancel your policy, go to Policy > Policy Details and click "Request Cancellation." Select the cancellation date and reason. You will receive a confirmation and any applicable refund will be processed within 10–15 business days to your original payment method.',
  },
  {
    category: 'Policy',
    question: 'What is my deductible?',
    answer:
      'Your deductible is the amount you pay out of pocket before your insurance coverage kicks in for a covered claim. You can find your deductible amounts listed under Policy > Coverage Summary. Different coverages (e.g., comprehensive, collision, dwelling) may have separate deductibles.',
  },
  {
    category: 'Policy',
    question: 'What coverages do I have?',
    answer:
      'A full summary of your active coverages is available under Policy > Coverage Summary. This includes coverage types, limits, deductibles, and any endorsements or riders. You can also download your declarations page for a complete overview of your policy coverages.',
  },
  {
    category: 'Policy',
    question: 'How do I update my contact information?',
    answer:
      'Go to Profile > Personal Information and click "Edit." You can update your phone number, email address, and mailing address. Some changes may require identity verification. Updated contact details will be used for all future policy communications and billing notices.',
  },

  // Billing
  {
    category: 'Billing',
    question: 'How do I make a payment?',
    answer:
      'Go to Billing > Make a Payment. Select the policy you want to pay for, choose the payment amount (minimum due, full balance, or custom), and select your saved payment method or enter a new one. Review the payment summary and click "Submit Payment." A confirmation will be sent to your email.',
  },
  {
    category: 'Billing',
    question: 'How do I update my payment method?',
    answer:
      'Navigate to Billing > Payment Methods and click "Add Payment Method." You can add a bank account (ACH) or a credit/debit card. To set a new default, select the method and click "Set as Default." Existing methods can be removed once a new default is saved.',
  },
  {
    category: 'Billing',
    question: 'Why was my payment declined?',
    answer:
      'Payments may be declined due to insufficient funds, an expired card, incorrect billing details, or a bank security hold. Verify your payment information under Billing > Payment Methods. If the issue persists, contact your bank or try an alternative payment method. A 10-day grace period applies before coverage is affected.',
  },
  {
    category: 'Billing',
    question: 'How do I download billing statements?',
    answer:
      'Go to Billing > Billing History and select the statement period you need. Click the download icon to save the statement as a PDF. Statements are available for the past 24 months. If you need older records, contact customer support.',
  },
  {
    category: 'Billing',
    question: 'How do I view payment history?',
    answer:
      'Navigate to Billing > Payment History to see a full list of past payments, including date, amount, payment method, and status. You can filter by date range or policy. Each entry can be expanded to view transaction details or download a receipt.',
  },
  {
    category: 'Billing',
    question: 'What payment methods are accepted?',
    answer:
      'We accept Visa, Mastercard, American Express, and Discover credit/debit cards, as well as bank account payments via ACH (checking or savings). Prepaid cards and cash payments are not accepted. All transactions are encrypted and processed securely.',
  },
  {
    category: 'Billing',
    question: 'How do I request a refund?',
    answer:
      'Refunds are issued automatically when a policy is cancelled mid-term or when an overpayment is detected. The refund is returned to your original payment method within 10–15 business days. If you believe you are owed a refund and have not received it, contact customer support with your policy number and payment details.',
  },

  // Claims
  {
    category: 'Claims',
    question: 'How do I report a claim?',
    answer:
      'Go to Claims > File a New Claim (FNOL) from the main menu. Select the claim type (Auto, Home, or Other), enter the incident date, location, and description, and upload any supporting photos or documents. Submit the form and you will receive a claim number and adjuster assignment within 1 business day.',
  },
  {
    category: 'Claims',
    question: 'How can I upload claim photos?',
    answer:
      'Open your active claim under Claims > My Claims and click "Upload Documents." Select "Photos" as the document type and choose files from your device. Supported formats are JPG, PNG, and HEIC up to 10 MB each. You can upload multiple photos at once. Photos help speed up the assessment process.',
  },
  {
    category: 'Claims',
    question: 'How do I check claim status?',
    answer:
      'Go to Claims > My Claims to see a list of all your active and closed claims. Each claim shows the current status (Submitted, Under Review, Inspection Scheduled, Settlement Pending, Closed). Click on a claim to view the full timeline, adjuster notes, and any pending action items.',
  },
  {
    category: 'Claims',
    question: 'When will my adjuster contact me?',
    answer:
      'Your assigned adjuster will contact you within 1–2 business days of claim submission via the phone number or email on file. You can also find your adjuster\'s contact details under Claims > My Claims > Claim Details. If you have not heard back within 2 business days, use the "Contact Adjuster" button to send a message.',
  },
  {
    category: 'Claims',
    question: 'How long will claim settlement take?',
    answer:
      'Settlement timelines vary by claim complexity. Minor auto claims are typically resolved in 5–10 business days. Home damage claims may take 15–30 business days depending on inspection scheduling and contractor estimates. Liability or disputed claims can take 30–90 days. Your adjuster will keep you updated throughout.',
  },
  {
    category: 'Claims',
    question: 'How do I upload additional documents?',
    answer:
      'Navigate to Claims > My Claims, open the relevant claim, and click "Upload Documents." Select the document type (e.g., repair estimate, police report, medical bill) and upload the file. Supported formats include PDF, JPG, PNG, and DOCX up to 25 MB. You will receive a confirmation once the document is received.',
  },
  {
    category: 'Claims',
    question: 'How do I schedule an inspection?',
    answer:
      'After your claim is reviewed, you will receive a notification to schedule an inspection. Go to Claims > My Claims > Claim Details and click "Schedule Inspection." Choose an available date and time slot. You will receive a confirmation with the inspector\'s name and contact information.',
  },

  // Homeowners
  {
    category: 'Homeowners',
    question: 'How do I report property damage?',
    answer:
      'Go to Claims > File a New Claim and select "Home" as the claim type. Describe the damage, enter the date it occurred, and upload photos of the affected areas. If the damage is severe or poses a safety risk, contact emergency services first before filing the claim.',
  },
  {
    category: 'Homeowners',
    question: 'What should I do after a storm?',
    answer:
      'First, ensure the safety of all occupants and contact emergency services if needed. Document all visible damage with photos and videos before making any temporary repairs. Make only emergency repairs to prevent further damage (keep receipts). Then file a claim under Claims > File a New Claim > Home. Do not make permanent repairs until an adjuster has assessed the damage.',
  },
  {
    category: 'Homeowners',
    question: 'What damages are covered?',
    answer:
      'Standard homeowners coverage includes damage from fire, lightning, windstorm, hail, theft, vandalism, and water damage from burst pipes. It also covers personal property and liability. Flood damage, earthquake damage, and normal wear and tear are typically excluded. Review your declarations page under Policy > Documents for your specific covered perils.',
  },
  {
    category: 'Homeowners',
    question: 'How do I update home information?',
    answer:
      'Go to Policy > Homeowners Policy > Property Details and click "Edit." You can update details such as square footage, roof type, year of renovation, or security features. Accurate home information ensures your dwelling coverage reflects the true replacement cost. Some updates may trigger a premium adjustment.',
  },

  // Auto
  {
    category: 'Auto',
    question: 'How do I download my ID card?',
    answer:
      'Go to Policy > Auto Policy and click "ID Cards." Select the vehicle and click "Download" to save a PDF copy. You can also add the ID card to your Apple Wallet or Google Wallet directly from this screen. Digital ID cards are accepted as proof of insurance in most states.',
  },
  {
    category: 'Auto',
    question: 'What should I do after an accident?',
    answer:
      'Move to a safe location and check for injuries — call 911 if anyone is hurt. Exchange insurance and contact information with the other driver. Document the scene with photos of all vehicles, damage, and the surrounding area. Do not admit fault. Then file a claim under Claims > File a New Claim > Auto as soon as possible.',
  },
  {
    category: 'Auto',
    question: 'How do I request roadside assistance?',
    answer:
      'If you have roadside assistance coverage, go to Services > Roadside Assistance or call the 24/7 roadside assistance number listed on your ID card. Services include towing, flat tire change, battery jump-start, lockout assistance, and fuel delivery. Your location can be shared automatically through the app.',
  },
  {
    category: 'Auto',
    question: 'How do I replace my windshield?',
    answer:
      'If you have comprehensive coverage, windshield replacement is typically covered with no deductible (in most states). File a glass claim under Claims > File a New Claim > Auto > Glass Damage. You can choose a repair shop from our network or use your preferred shop. Mobile repair services are also available in many areas.',
  },
];

const FAQsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Policy');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = faqData.filter(faq => {
    const matchesCategory = faq.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='faqs-page'>
      <div className='faqs-page-header'>
        <div className='faqs-back-wrapper'>
          <Button
            className='faqs-back-btn'
            variant='text'
            onClick={() => navigate('/services')}
            aria-label='Back to services'
            size='small'
          >
            <span aria-hidden='true' className='faqs-back-arrow'>
              &larr;
            </span>
            <span className='faqs-back-text '>Back</span>
          </Button>
        </div>

        <Typography variant='h3' color='primary'>
          FAQs &amp; Guides
        </Typography>
        <Typography variant='body2' color='muted'>
          Find answers to the most common questions about your policy, billing, claims, and account.
        </Typography>
      </div>

      <div className='faqs-search-bar'>
        <FiSearch className='faqs-search-icon' size={17} />
        <TextField
          type='text'
          placeholder='Search FAQs...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className='faqs-search-input'
          aria-label='Search FAQs'
        />
      </div>

      <div className='faqs-categories'>
        {categories.map(cat => (
          <Button
            key={cat}
            variant={activeCategory === cat ? 'contained' : 'outlined'}
            size='small'
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Card variant='outlined' className='faqs-list-card'>
        <div className='faqs-list'>
          {filtered.length > 0 ? (
            filtered.map((faq, i) => (
              <Accordion key={i} title={faq.question} variant='outlined' className='faqs-accordion'>
                <Typography variant='body2' color='muted'>
                  {faq.answer}
                </Typography>
              </Accordion>
            ))
          ) : (
            <div className='faqs-empty'>
              <Typography variant='body2' color='muted'>
                No FAQs found matching your search.
              </Typography>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default FAQsPage;
