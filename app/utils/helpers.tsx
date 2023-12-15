export const cssActiveNavLink = (active: Boolean, isPublic = true) => {
	return `h-full flex items-center ${
		isPublic
			? 'text-[#000000b3] text-[16px]'
			: active
			? 'text-[#f4f4f4] text-[14px]'
			: 'text-[#ffffffcc] text-[14px]'
	} mb-[-3px] ${active ? 'border-b-[3px] border-[#408bfc]' : ''}`;
};

export const getCourseInfoFromUrl = (url: String | undefined) => {
	const id = url?.split('-')[0];
	const slug = url?.replace(`${id}-`, '');

	return { id, slug };
};
