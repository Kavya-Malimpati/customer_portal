import { Typography } from '../../../common/components';

interface Props {
  title: string;
  rightSlot?: React.ReactNode;
}

const CardHeaderView = ({ title, rightSlot }: Props) => {
  return (
    <div className='flex items-center justify-between'>
      <Typography variant='h3' color='secondary'>
        {title}
      </Typography>

      {rightSlot && <div>{rightSlot}</div>}
    </div>
  );
};

export default CardHeaderView;
