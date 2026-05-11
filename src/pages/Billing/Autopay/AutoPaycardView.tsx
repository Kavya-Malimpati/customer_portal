import { FiCreditCard, FiCheckCircle } from 'react-icons/fi';
import { Card, CardContent, Typography, Button } from '../../../common/components';
import Toggle from '../../../common/components/Toggle';
import type { AutoPayCardViewProps } from './interfaces';

const AutoPayCardView = ({ state, onToggle, onUpdatePaymentMethod }: AutoPayCardViewProps) => {
  const { enabled, paymentMethod, nextChargeAmount, nextChargeDate } = state;

  return (
    <div className="w-[350px] min-h-[270px]">
      <Card
        variant="outlined"
        className="border border-gray-200 rounded-xl shadow-sm bg-white h-full"
      >
        <CardContent className="p-6 h-full">
          <div className="flex items-start justify-between">
            <div>
              <Typography variant="h5" className="font-bold text-black !text-black">
                Auto-Pay
              </Typography>
              <div
                className={`mt-1 flex items-center gap-1 text-xs font-semibold ${
                  enabled ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                <FiCheckCircle
                  className={enabled ? 'text-green-600' : 'text-gray-400'}
                  size={14}
                />
                {enabled ? 'Enabled' : 'Disabled'}
              </div>
            </div>
            <Toggle
              id="auto-pay-toggle"
              checked={enabled}
              onChange={(e) => onToggle(e.target.checked)}
              size="md"
              aria-label="Toggle Auto Pay"
            />
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <FiCreditCard className="text-gray-400" size={20} />
                <div>
                  <Typography variant="body2" className="font-semibold text-gray-900">
                    {paymentMethod.brand} ending in {paymentMethod.lastFour}
                  </Typography>
                  <Typography variant="caption" className="text-gray-400 tracking-wide">
                    EXPIRES {paymentMethod.expiry}
                  </Typography>
                </div>
              </div>
              <Button
                variant="text"
                size="small"
                onClick={onUpdatePaymentMethod}
                className="text-blue-600 font-semibold"
              >
                Update
              </Button>
            </div>
          </div>

          <div className="mt-4 flex items-center text-xs italic text-gray-400">
            <span>Next auto-charge:&nbsp;</span>
            <span className="not-italic font-bold text-black">
              {nextChargeAmount} on {nextChargeDate}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutoPayCardView;
