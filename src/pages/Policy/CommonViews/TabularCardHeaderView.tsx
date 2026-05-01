import { Typography } from '../../../common/components';

import '../styles/TabularCardView.css';

interface Props {
  title: string;
  rightSlot?: React.ReactNode;
}

const CardHeaderView = ({ title, rightSlot }: Props) => {
  return (
    <div className='tabular-card-header'>
      <Typography variant='h3' color='secondary'>
        {title}
      </Typography>

      {rightSlot && <div>{rightSlot}</div>}
    </div>
  );
};

export default CardHeaderView;
