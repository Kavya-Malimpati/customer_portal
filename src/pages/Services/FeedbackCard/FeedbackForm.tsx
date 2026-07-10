import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiStar, FiArrowLeft, FiX } from 'react-icons/fi';
import { Button, TextField, Select, FileUpload, Checkbox, Typography, Modal, CardContent } from '../../../common/components';
import './FeedbackForm.css';

interface FeedbackFormProps {
  onClose: () => void;
  initialRating: number;
}

interface FeedbackData {
  category: string;
  relatedArea: string;
  rating: number;
  subject: string;
  description: string;
  file: File | null;
  contactMeBack: boolean;
  preferredChannel: string;
}

interface SuccessData {
  referenceId: string;
  submittedAt: string;
  contactMeBack: boolean;
  preferredChannel?: string;
}

const FEEDBACK_CATEGORIES = [
  { label: 'Complaint', value: 'complaint' },
  { label: 'Suggestion', value: 'suggestion' },
  { label: 'Appreciation', value: 'appreciation' },
  { label: 'Bug', value: 'bug' },
];

const RELATED_AREAS = [
  { label: 'Policy', value: 'policy' },
  { label: 'Billing', value: 'billing' },
  { label: 'Claims', value: 'claims' },
  { label: 'Portal', value: 'portal' },
  { label: 'Other', value: 'other' },
];

const CONTACT_CHANNELS = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'SMS', value: 'sms' },
];

const generateReferenceId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `FB-${timestamp}-${random}`;
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose, initialRating }) => {
  const [formData, setFormData] = useState<FeedbackData>({
    category: '',
    relatedArea: '',
    rating: initialRating,
    subject: '',
    description: '',
    file: null,
    contactMeBack: false,
    preferredChannel: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      rating: initialRating,
    }));
  }, [initialRating]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.description) {
      newErrors.description = 'Description is required';
    }

    if (formData.contactMeBack) {
      if (!formData.preferredChannel || formData.preferredChannel === '') {
        newErrors.preferredChannel = 'Please select a preferred contact channel';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const storeFeedback = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const referenceId = generateReferenceId();
      
      await storeFeedback();

      setSuccessData({
        referenceId,
        submittedAt: new Date().toLocaleString(),
        contactMeBack: formData.contactMeBack,
        preferredChannel: formData.preferredChannel,
      });

      setFormData({
        category: '',
        relatedArea: '',
        rating: initialRating,
        subject: '',
        description: '',
        file: null,
        contactMeBack: false,
        preferredChannel: '',
      });
      setErrors({});
    } catch {
      setErrors({ submit: 'Failed to submit feedback. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setSuccessData(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmitClick = () => {
    const form = document.getElementById('feedback-form') as HTMLFormElement;
    form?.requestSubmit();
  };

  if (successData) {
    return (
      <Modal
        isOpen={true}
        onClose={handleCloseSuccess}
        title="Feedback Submitted Successfully"
        maxWidth="500px"
        aria-labelledby="success-title"
      >
        <div className="feedback-success-container">
          <div className="feedback-success-icon">✓</div>

          <Typography variant="h3" className="feedback-success-title">
            Thank you for your feedback!
          </Typography>

          <Typography variant="body1" className="feedback-success-subtitle">
            Your feedback has been received and will help us improve.
          </Typography>

          <div className="feedback-reference-section">
            <Typography variant="body2" className="feedback-reference-label">
              Reference ID
            </Typography>
            <div className="feedback-reference-id">
              {successData.referenceId}
            </div>
          </div>

          <div className="feedback-details-section">
            <div className="feedback-detail-item">
              <Typography variant="body2" className="feedback-detail-label">
                Submitted at:
              </Typography>
              <Typography variant="body2" className="feedback-detail-value">
                {successData.submittedAt}
              </Typography>
            </div>

            {successData.contactMeBack && (
              <div className="feedback-detail-item">
                <Typography variant="body2" className="feedback-detail-label">
                  Expected Response:
                </Typography>
                <Typography variant="body2" className="feedback-detail-value">
                  We will contact you via <strong>{successData.preferredChannel}</strong> within 2-3 business days.
                </Typography>
              </div>
            )}

            <div className="feedback-detail-item">
              <Typography variant="body2" className="feedback-detail-label">
                What's Next?
              </Typography>
              <Typography variant="body2" className="feedback-detail-value">
                You can track your feedback using the reference ID above. Keep it for your records.
              </Typography>
            </div>
          </div>

          <Button
            onClick={handleCloseSuccess}
            variant="contained"
            fullWidth
            className="feedback-success-button"
          >
            Close
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <div className="feedback-modal-overlay">
      <div className="feedback-modal-dialog">
        <div className="feedback-header">
          <div className="feedback-header-left" onClick={onClose}>
            <FiArrowLeft size={20} />
            <Typography variant="h4" color="primary">Send Feedback</Typography>
          </div>
          <button className="feedback-close-button" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="feedback-content">
          <CardContent>
            <form id="feedback-form" onSubmit={handleSubmit} className="feedback-form" noValidate>
              {errors.submit && (
                <div className="feedback-form-error-banner">
                  <Typography variant="body2" className="feedback-form-error-text">
                    {errors.submit}
                  </Typography>
                </div>
              )}

              <div className="form-grid">
                <Select
                  id="category"
                  label="Feedback Category"
                  required
                  isRequired
                  options={FEEDBACK_CATEGORIES}
                  value={formData.category}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, category: e.target.value }));
                    if (errors.category) setErrors(prev => ({ ...prev, category: '' }));
                  }}
                  hasError={!!errors.category}
                  errorMessage={errors.category}
                />

                <Select
                  id="relatedArea"
                  label="Related Area"
                  options={RELATED_AREAS}
                  value={formData.relatedArea}
                  onChange={(e) => setFormData(prev => ({ ...prev, relatedArea: e.target.value }))}
                />

                <div className="feedback-form-field">
                  <Typography variant="body2" className="feedback-form-label">
                    Your Rating
                  </Typography>
                  <div className="feedback-form-rating">
                    {[1, 2, 3, 4, 5].map(star => {
                      const active = star <= (hoverRating || formData.rating);
                      return active ? (
                        <FaStar
                          key={star}
                          className="feedback-form-star filled"
                          onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      ) : (
                        <FiStar
                          key={star}
                          className="feedback-form-star"
                          onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      );
                    })}
                  </div>
                </div>

                <TextField
                  id="subject"
                  label="Subject"
                  placeholder="Brief subject of your feedback"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                />

                <TextField
                  id="description"
                  label="Description"
                  placeholder="Detailed description of your feedback"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, description: e.target.value }));
                    if (errors.description) setErrors(prev => ({ ...prev, description: '' }));
                  }}
                  hasError={!!errors.description}
                  errorMessage={errors.description}
                  isRequired
                  className="feedback-form-textarea"
                />

                <FileUpload
                  id="attachment"
                  label="Attach File (Optional)"
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                  helperText="Supported formats: Images, PDF, DOC, DOCX"
                />

                <div className="feedback-form-field">
                  <Checkbox
                    id="contactMeBack"
                    label="Contact me back"
                    checked={formData.contactMeBack}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, contactMeBack: e.target.checked }));
                      if (errors.preferredChannel) setErrors(prev => ({ ...prev, preferredChannel: '' }));
                    }}
                  />
                </div>

                {formData.contactMeBack && (
                  <Select
                    id="preferredChannel"
                    label="Preferred Contact Channel"
                    required
                    isRequired
                    options={CONTACT_CHANNELS}
                    value={formData.preferredChannel}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData(prev => ({ ...prev, preferredChannel: value }));
                      if (value && errors.preferredChannel) {
                        setErrors(prev => ({ ...prev, preferredChannel: '' }));
                      }
                    }}
                    hasError={!!errors.preferredChannel}
                    errorMessage={errors.preferredChannel}
                  />
                )}
              </div>

              <div className="extra-space" />
            </form>
          </CardContent>
        </div>

        <div className="feedback-footer">
          <Button variant="outlined" onClick={onClose} fullWidth disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmitClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
