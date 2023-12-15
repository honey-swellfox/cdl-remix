export default function Hero({
	title,
	imgUrl,
	desc,
}: {
	title?: string;
	imgUrl?: string;
	desc?: string;
}) {
	return (
		<section className={`bg-blacksqueeze relative overflow-hidden`}>
			<img
				src={imgUrl}
				className="absolute top-0 left-0 w-full h-full object-cover z-10"
			/>
			<div className="h-full w-full flex items-center relative z-20 min-h-[185px]">
				<div className="container mx-auto text-center lg:text-left max-w-[1000px]">
					<h1 className="text-[32px] text-[#ffffff]">{title}</h1>
					<p className="text-[16px] text-[#ffffffb3] pt-[5px]">
						{desc}
					</p>
				</div>
			</div>
		</section>
	);
}
