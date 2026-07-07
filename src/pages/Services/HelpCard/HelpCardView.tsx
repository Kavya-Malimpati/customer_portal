import './HelpCard.css';
import { useState } from 'react';
import {
  FaBaby,
  FaBriefcase,
  FaCar,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaHouseDamage,
  FaIdBadge,
  FaPhone,
  FaRegMoneyBillAlt,
  FaShoppingCart,
  FaTools,
  FaUserAlt,
  FaUserFriends,
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

import {
  Button,
  Card,
  CardContent,
  Modal,
  TextField,
  Typography,
} from '../../../common/components';

import type { HelpCardViewProps } from './interfaces';

const HelpCardView = ({
  items,
  onSearch,
  isChatOpen = false,
  chatMessages = [],
  chatInput = '',
  onChatInputChange,
  onSendMessage,
  onCloseChat,
  isFaqOpen = false,
  onToggleFaqs,
  isLifeEventsOpen = false,
  onCloseLifeEvents,
}: HelpCardViewProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'Claims' | 'Billing' | 'Policy' | 'General'>(
    'Claims',
  );
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>('claim-1');
  const lifeEvents = [
    {
      lifeEvent: 'Marriage',
      action: 'Add spouse, update beneficiaries, change name',
      icon: <FaHeart />,
      color: 'var(--color-primary)',
    },
    {
      lifeEvent: 'Divorce/Separation',
      action: 'Remove spouse, update beneficiaries',
      icon: <FaUserFriends />,
      color: '#FF8A65',
    },
    {
      lifeEvent: 'Birth or Adoption of Child',
      action: 'Add dependent, update coverage',
      icon: <FaBaby />,
      color: '#7ED321',
    },
    {
      lifeEvent: 'Death of Policyholder',
      action: 'Start claim, update beneficiaries',
      icon: <FaRegMoneyBillAlt />,
      color: '#9E9E9E',
    },
    {
      lifeEvent: 'Change of Address',
      action: 'Update residence and mailing address',
      icon: <FaHome />,
      color: '#4FC3F7',
    },
    {
      lifeEvent: 'Change of Phone/Email',
      action: 'Update contact details',
      icon: <FaPhone />,
      color: '#FFD54F',
    },
    {
      lifeEvent: 'Name Change',
      action: 'Upload supporting documents and update records',
      icon: <FaIdBadge />,
      color: '#BA68C8',
    },
    {
      lifeEvent: 'New Vehicle Purchase',
      action: 'Add vehicle to auto policy',
      icon: <FaShoppingCart />,
      color: '#4DB6AC',
    },
    {
      lifeEvent: 'Vehicle Sold/Transferred',
      action: 'Remove vehicle from policy',
      icon: <FaCar />,
      color: '#F06292',
    },
    {
      lifeEvent: 'Home Purchase',
      action: 'Add property coverage',
      icon: <FaHouseDamage />,
      color: '#4FC3F7',
    },
    {
      lifeEvent: 'Home Sale',
      action: 'Remove property coverage',
      icon: <FaHome />,
      color: '#90CAF9',
    },
    {
      lifeEvent: 'Home Renovation',
      action: 'Update dwelling value and coverage limits',
      icon: <FaTools />,
      color: '#AED581',
    },
    {
      lifeEvent: 'Retirement',
      action: 'Review life, health, and retirement-related coverage',
      icon: <FaRegMoneyBillAlt />,
      color: '#8D6E63',
    },
    {
      lifeEvent: 'New Job/Employment Change',
      action: 'Update occupation-related risk details',
      icon: <FaBriefcase />,
      color: '#F8BBD0',
    },
    {
      lifeEvent: 'Business Started/Closed',
      action: 'Modify commercial insurance coverage',
      icon: <FaBriefcase />,
      color: '#9575CD',
    },
    {
      lifeEvent: 'Adding/Removing Drivers',
      action: 'Update auto policy drivers',
      icon: <FaUserAlt />,
      color: '#4DD0E1',
    },
    {
      lifeEvent: 'College Enrollment',
      action: 'Student-away-from-home updates',
      icon: <FaGraduationCap />,
      color: '#7986CB',
    },
    {
      lifeEvent: 'International Relocation',
      action: 'Coverage review and policy adjustments',
      icon: <FaGlobeAmericas />,
      color: '#64B5F6',
    },
  ];

  const faqCategories = [
    {
      id: 'claims',
      title: 'Claims',
      questions: [
        {
          id: 'claim-1',
          question: 'How do I report a new claim?',
          answer:
            'You can submit a claim from the Claims section in the portal or call support for urgent assistance.',
        },
        {
          id: 'claim-2',
          question: 'How will I know the status of my claim?',
          answer:
            'Status updates are shared in your claim dashboard and by email when milestones change.',
        },
        {
          id: 'claim-3',
          question: 'Can I update my claim after submission?',
          answer:
            'Yes. Open the claim details and choose the Edit option to provide additional information.',
        },
      ],
    },
    {
      id: 'billing',
      title: 'Billing',
      questions: [
        {
          id: 'billing-1',
          question: 'When is my premium due?',
          answer:
            'Your billing schedule appears on the Billing page and in your monthly statement.',
        },
        {
          id: 'billing-2',
          question: 'Can I set up auto-pay for my premiums?',
          answer: 'Yes. Visit the Billing page and choose AutoPay to enroll and simplify payments.',
        },
        {
          id: 'billing-3',
          question: 'What payment methods do you accept?',
          answer:
            'We accept credit cards, debit cards, and bank transfers depending on your policy type.',
        },
      ],
    },
    {
      id: 'policy',
      title: 'Policy',
      questions: [
        {
          id: 'policy-1',
          question: 'Can I update my policy information online?',
          answer:
            'Yes. You can update your contact details and policy preferences from the Profile and Policy sections.',
        },
        {
          id: 'policy-2',
          question: 'How do I add a new driver or vehicle?',
          answer:
            'Go to your Auto policy details, select Manage Drivers or Vehicles, and follow the prompts.',
        },
        {
          id: 'policy-3',
          question: 'What should I do if my address changes?',
          answer:
            'Update your address in the Policy section so your coverage and correspondence stay accurate.',
        },
      ],
    },
    {
      id: 'general',
      title: 'General',
      questions: [
        {
          id: 'general-1',
          question: 'How can I contact support?',
          answer:
            'You can use the live chat option here or call the support number shown in your account.',
        },
        {
          id: 'general-2',
          question: 'Where can I find important documents?',
          answer:
            'Documents are available on your dashboard under the Documents section for easy access.',
        },
        {
          id: 'general-3',
          question: 'How do I change my notification preferences?',
          answer:
            'Update your notification preferences in Profile settings to receive alerts that matter to you.',
        },
      ],
    },
  ] as const;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleFaqCategoryChange = (category: 'Claims' | 'Billing' | 'Policy' | 'General') => {
    setActiveCategory(category);
    setExpandedQuestion(null);
  };

  return (
    <>
      <div className='help-card-container' id='help-and-support'>
        <Card variant='outlined' className='help-card-wrapper'>
          <div className='help-card-header'>
            <Typography variant='h3' color='primary' className='help-card-title'>
              Help & Support
            </Typography>

            <div className='help-card-search'>
              <FiSearch className='search-icon' size={17} />
              <TextField
                type='text'
                placeholder='Search FAQs...'
                value={searchQuery}
                onChange={handleSearchChange}
                className='search-input'
                aria-label='Search FAQs'
              />
            </div>
          </div>

          <CardContent className='help-card-content'>
            <div className='help-cards-grid'>
              {items.map(item => (
                <Card
                  key={item.id}
                  onClick={item.onClick}
                  className='help-card-item'
                  aria-label={item.title}
                >
                  <div className='help-card-icon'>{item.icon}</div>
                  <Typography variant='body1' color='primary' className='help-card-item-title'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='muted' className='help-card-item-subtitle'>
                    {item.subtitle}
                  </Typography>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Modal
        isOpen={isFaqOpen}
        onClose={onToggleFaqs}
        aria-label='FAQs & Guides'
        title='FAQs & Guides'
        maxWidth='720px'
      >
        <div className='help-faq-content'>
          <div className='help-faq-categories' role='tablist' aria-label='FAQ categories'>
            {faqCategories.map(category => (
              <Button
                key={category.id}
                type='button'
                className={`help-faq-category ${activeCategory === category.title ? 'active' : ''}`}
                onClick={() =>
                  handleFaqCategoryChange(
                    category.title as 'Claims' | 'Billing' | 'Policy' | 'General',
                  )
                }
              >
                {category.title}
              </Button>
            ))}
          </div>

          <div className='help-faq-list'>
            {faqCategories
              .filter(category => category.title === activeCategory)
              .map(category => (
                <div key={category.id} className='help-faq-category-group'>
                  {category.questions.map(question => {
                    const isExpanded = expandedQuestion === question.id;

                    return (
                      <div key={question.id} className='help-faq-item'>
                        <Button
                          type='button'
                          variant='text'
                          color='inherit'
                          size='large'
                          className='help-faq-question'
                          aria-expanded={isExpanded}
                          aria-controls={`${question.id}-details`}
                          onClick={() =>
                            setExpandedQuestion(current =>
                              current === question.id ? null : question.id,
                            )
                          }
                        >
                          <span className='help-faq-question-label'>{question.question}</span>
                          <span className='help-faq-icon' aria-hidden='true'>
                            {isExpanded ? '−' : '+'}
                          </span>
                        </Button>
                        {isExpanded && (
                          <div
                            id={`${question.id}-details`}
                            role='region'
                            aria-labelledby={question.id}
                            className='help-faq-answer'
                          >
                            {question.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isLifeEventsOpen}
        onClose={onCloseLifeEvents}
        aria-label='Policy Life Events'
        title='Policy Life Events'
        maxWidth='860px'
      >
        <div className='help-life-events-modal'>
          <Typography variant='body2' color='muted'>
            Review the most common policy life events below and the updates they may require.
          </Typography>

          <div className='help-life-events-list mt-4'>
            <div className='help-life-events-table'>
              <div className='help-life-events-header'>
                <div className='help-life-events-header-cell'>Life Event</div>
                <div className='help-life-events-header-cell pl-22'>Action / Update</div>
              </div>

              <div className='help-life-events-body'>
                {lifeEvents.map(item => (
                  <div key={item.lifeEvent} className='help-life-event-row'>
                    <div className='help-life-event-cell help-life-event-main'>
                      <div
                        className='life-event-icon-circle'
                        style={{ backgroundColor: item.color }}
                        aria-hidden='true'
                      >
                        <span className='life-event-icon'>{item.icon}</span>
                      </div>
                      <div className='help-life-event-meta'>
                        <Typography
                          variant='body1'
                          color='primary'
                          className='help-life-event-title'
                        >
                          {item.lifeEvent}
                        </Typography>
                      </div>
                    </div>

                    <div className='help-life-event-cell help-life-event-action pl-20'>
                      <Typography variant='body2' color='muted'>
                        {item.action}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isChatOpen}
        onClose={onCloseChat}
        aria-label='Chat with Us'
        title='Chat with Us'
        maxWidth='480px'
      >
        <div className='help-chat-modal'>
          <div className='help-chat-messages' role='log' aria-live='polite'>
            {chatMessages.map(message => (
              <div key={message.id} className={`help-chat-message ${message.role}`}>
                <span className='help-chat-bubble'>{message.text}</span>
              </div>
            ))}
          </div>

          <form className='help-chat-form' onSubmit={onSendMessage}>
            <TextField
              id='help-chat-input'
              className='help-chat-input'
              type='text'
              placeholder='Type your message'
              value={chatInput}
              onChange={onChatInputChange}
              aria-label='Type your message'
            />
            <Button type='submit' className='help-chat-send-button'>
              Send
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HelpCardView;
