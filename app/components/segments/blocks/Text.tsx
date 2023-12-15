import { memo } from 'react';

const Text = memo(({ content }: { content: any }) => {
	const { textType, header, body } = content;

	let textDisplay;

	switch (textType) {
		case 'important':
			textDisplay = (
				<div className="block-text important">
					<div className="table bg-porcelain">
						<h2 className="header uppercase text-mineshaft px-20 flex items-center pt-9 pb-8">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="18"
								viewBox="0 0 20 18"
								className="mr-10">
								<g fill="none">
									<path
										fill="#FFC107"
										d="M18.85 17.74H1.109c-.398 0-.764-.212-.962-.556-.197-.344-.196-.768.004-1.11L9.021.55c.2-.34.564-.55.958-.55s.76.21.958.55l8.87 15.523c.2.343.202.767.004 1.111-.197.344-.564.557-.961.557z"
									/>
									<path
										fill="#5D4037"
										d="M8.87 14.493c0-.149.026-.285.08-.413.052-.127.127-.237.223-.329.095-.093.212-.165.346-.218.135-.05.287-.078.457-.078.17 0 .323.027.459.078.139.053.255.125.35.218.097.092.172.202.224.329.053.128.079.264.079.413 0 .15-.026.286-.08.41-.051.125-.126.233-.223.326-.095.092-.211.164-.35.218-.136.05-.29.076-.46.076-.17 0-.32-.025-.456-.077-.134-.053-.251-.125-.346-.217-.097-.094-.172-.201-.223-.326-.054-.124-.08-.26-.08-.41m1.93-2.296H9.15l-.233-6.653h2.115l-.233 6.653z"
									/>
								</g>
							</svg>
							{header ? header : 'Note'}
						</h2>
					</div>
					<div className="overflowed-w border border-athensgray p-20 bg-zircon font-sans mb-40">
						<div dangerouslySetInnerHTML={{ __html: body }} />
					</div>
				</div>
			);
			break;

		case 'blockQuote':
			textDisplay = (
				<div className="block-text block-quote">
					{header ? <h2 className="header mb-20">{header}</h2> : ''}
					<div
						dangerouslySetInnerHTML={{ __html: body }}
						className="mb-40"
					/>
				</div>
			);
			break;

		default:
		case 'text':
			textDisplay = (
				<div className="block-text">
					{header ? <h2 className="header mb-20">{header}</h2> : ''}
					{body ? (
						<div
							dangerouslySetInnerHTML={{ __html: body }}
							className="mb-40"
						/>
					) : (
						''
					)}
				</div>
			);
			break;
	}

	return textDisplay;
});

export default Text;
