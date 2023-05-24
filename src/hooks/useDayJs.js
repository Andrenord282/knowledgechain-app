//-----modules-----//
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.locale('ru');
dayjs.extend(relativeTime);

const useDayJs = (date) => {
	const setDate = () => {
		const dateCursor = dayjs().subtract(30, 'hours');
		if (dayjs(date).isAfter(dateCursor)) {
			return dayjs(date).fromNow();
		}

		if (!dayjs(date).isAfter(dateCursor)) {
			return dayjs(date).format('DD.MM.YYYY');
		}
	};

	return setDate();
};

export default useDayJs;
