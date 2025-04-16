export const defaultTeacherValues = {
	teacherFirstName: '',
	teacherLastName: '',
	teacherEmail: '',
	teacherPhone: '',
	teacherPassword: '',
};

export const defaultParentValues = {
	parentFirstName: '',
	parentLastName: '',
	parentEmail: '',
	parentPhone: '',
	parentPassword: '',
};

export const defaultStudentValues = {
	studentFirstName: '',
	studentLastName: '',
	studentEmail: '',
	studentPhone: '',
	studentPassword: '',
};

export const defaultUsersFormValues = {
	...defaultTeacherValues,
	...defaultParentValues,
	...defaultStudentValues,
};
