'use client';

import { createContext, useState } from 'react';
import { initialClassName } from '../constants/constans';

export const SchoolClassContext = createContext({
	schoolClass: initialClassName,
	setSchoolClass: (className) => {},
});

export function SchoolClassContextProvider({ children }) {
	const [schoolClass, setSchoolClass] = useState(initialClassName);

	return (
		<SchoolClassContext.Provider value={{ schoolClass, setSchoolClass }}>{children}</SchoolClassContext.Provider>
	);
}