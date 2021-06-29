import moment from 'moment';
import 'moment/locale/ru';

interface OwnProps {
  date: string;
  toFormat: string;
}

const dateFormater = ({ date, toFormat }: OwnProps): string => {
  const dateFormat = moment(date).format(toFormat);
  return dateFormat;
};

export default dateFormater;
