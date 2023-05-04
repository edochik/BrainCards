const API_URL = 'https://wealthy-invited-paste.glitch.me';

export const fetchCategories = async () => {
	//проверяем на ошибки
	try {
		const response = await fetch(`${API_URL}/api/category`);
		//проверяем на запрос от севера
		if (response.status === 200 || response.status === 201) {
			const categories = await response.json();
			return categories;
		} else {
			const error = await response.json();
			//прерываем нашу функцию и передаем в неё error
			throw error;
		}
	} catch (error) {
		return { error };
	}
}