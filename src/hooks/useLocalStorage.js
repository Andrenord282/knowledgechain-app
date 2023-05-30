const useLocalStorage = () => {
	const handlerSetItem = (object, data) => {
		localStorage.setItem(object, JSON.stringify(data));
	};

	const handlerUpdateItem = (name, field, value) => {
		const object = JSON.parse(localStorage.getItem(name));
		console.log(object[field]);
		// localStorage.setItem(name, JSON.stringify(object));
	};

	const handlerGetItem = (key) => {
		const object = JSON.parse(localStorage.getItem(key));
		if (object) {
			return object;
		}
		return null;
	};

	return {
		handlerSetItem,
		handlerUpdateItem,
		handlerGetItem,
	};
};
export default useLocalStorage;
