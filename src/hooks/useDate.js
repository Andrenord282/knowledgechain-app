import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.locale('ru');

const datesDifference = (options) => {
	switch (true) {
		case options.typeDates === 'day':
			return [dayjs().day(-1).format('DD-MM-YYYY'), dayjs().format('DD-MM-YYYY')];

		case options.typeDates === 'week':
			return [dayjs().day(-7).format('DD-MM-YYYY'), dayjs().format('DD-MM-YYYY')];

		case options.typeDates === 'month':
			return [dayjs().day(-31).format('DD-MM-YYYY'), dayjs().format('DD-MM-YYYY')];

		default:
			break;
	}
};

const useGetTimeFromCurrentMoment = (date) => {
	return dayjs(date).fromNow();
};

export { datesDifference, useGetTimeFromCurrentMoment };
