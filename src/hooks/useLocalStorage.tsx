import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
}
