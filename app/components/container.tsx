export default function Container({
	children,
	className = '',
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`container mx-auto px-15 md:px-0 pt-[60px] ${className}`}>
			{children}
		</div>
	);
}
