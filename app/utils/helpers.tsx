export const cssActiveNavLink = (active: Boolean) => {
	return `h-full flex items-center text-black mb-[-2px] ${
		active ? 'opacity-100 border-b-2 border-black' : 'opacity-60'
	}`;
};
