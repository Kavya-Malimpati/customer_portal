import { Button, Card, CardContent, Modal } from '../../common/components';
import CardFooter from '../../common/components/Card/CardFooter';
import CardHeader from '../../common/components/Card/CardHeader';
import Checkbox from '../../common/components/Checkbox/Checkbox';
import paperlessConfig from '../../config/paperlesspreferences.json';

import type { PaperlessOptions } from './interfaces';

interface PaperlessPreferencesViewProps {
  enabled: boolean;
  options: PaperlessOptions;
  showSuccessModal: boolean;
  onToggle: () => void;
  onOptionChange: (key: keyof PaperlessOptions) => void;
  onSave: () => void;
  onCancel: () => void;
  onSuccessModalClose: () => void;
}

function PaperlessPreferencesView({
  enabled,
  options,
  showSuccessModal,
  onToggle,
  onOptionChange,
  onSave,
  onCancel,
  onSuccessModalClose,
}: PaperlessPreferencesViewProps) {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md bg-white shadow-lg rounded-lg'>
        <CardHeader title={paperlessConfig.title} subheader={paperlessConfig.description} />

        <CardContent className='p-6'>
          {/* Main Toggle */}
          <div className='flex items-center justify-between border p-4 rounded-lg mb-4'>
            <div>
              <p className='font-medium'>{paperlessConfig.mainToggle.label}</p>
              <p className='text-xs text-gray-500'>{paperlessConfig.mainToggle.hint}</p>
            </div>
            <button
              onClick={onToggle}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                enabled ? 'bg-[#23a50a]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  enabled ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>

          {/* Conditional Options */}
          {enabled && (
            <div className='space-y-3'>
              {paperlessConfig.options.map(option => (
                <div key={option.id} className='p-2'>
                  <Checkbox
                    id={option.id}
                    label={option.label}
                    checked={options[option.id as keyof PaperlessOptions]}
                    onChange={() => onOptionChange(option.id as keyof PaperlessOptions)}
                  />
                </div>
              ))}

              {/* Info Box */}
              <div className='bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm p-3 rounded'>
                {paperlessConfig.warning}
              </div>
            </div>
          )}
        </CardContent>

        {/* Buttons */}
        <CardFooter className='flex justify-end gap-3 p-6 border-t'>
          <Button type='button' onClick={onCancel} variant='contained' color='primary'>
            Cancel
          </Button>
          <Button type='button' onClick={onSave} variant='contained' color='primary'>
            Save Preferences
          </Button>
        </CardFooter>
      </Card>

      <Modal
        isOpen={showSuccessModal}
        onClose={onSuccessModalClose}
        title='Success'
        maxWidth='400px'
      >
        <CardContent className='p-6'>
          <p>Preferences saved successfully! ✅</p>
        </CardContent>
        <CardFooter className='flex justify-end p-6 border-t'>
          <Button
            type='button'
            onClick={onSuccessModalClose}
            className='bg-[#23a50a] text-white hover:bg-[#1a7a08]'
          >
            OK
          </Button>
        </CardFooter>
      </Modal>
    </div>
  );
}

export default PaperlessPreferencesView;
