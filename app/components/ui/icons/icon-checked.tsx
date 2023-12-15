export default function IconChecked({
	isDone,
	isNext,
}: {
	isDone: Boolean;
	isNext: Boolean;
}) {
	return (
		<div className="rounded-full flex items-center justify-center bg-[#f4f4f4] h-[27px] w-[27px]">
			{isDone ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M6 10.6L2.5 7.1 1.8 7.8 5.3 11.3 6 12 13.1 4.9 12.4 4.2z"></path>
				</svg>
			) : !isNext ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="17"
					viewBox="0 0 16 17">
					<path
						fillRule="evenodd"
						d="M12 8h-1V5c0-1.7-1.3-3-3-3S5 3.3 5 5v3H4c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zM6 5c0-1.1.9-2 2-2s2 .9 2 2v3H6V5zm6 10H4V9h8v6z"
						opacity=".5"
					/>
				</svg>
			) : (
				''
			)}
		</div>
	);
}
