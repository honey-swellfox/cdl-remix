// import Accordion from './blocks/Accordion';
// import DialogCards from './blocks/DialogCards';
// import KeyCards from './blocks/KeyCards';
// import ImageHotspots from './blocks/ImageHotspots';
// import ImageScenes from './blocks/ImageScenes';
// import HotspotQuiz from './blocks/HotspotQuiz';
// import Slides from './blocks/Slides';
import { Key } from 'react';
import Text from './blocks/Text';
// import File from './blocks/File';
// import Embed from './blocks/Embed';
// import Video from './blocks/Video';

// import { checkDataType } from '../../../utilities';

export default function Segment({ entry }: { entry: any }) {
	console.log({ entry });
	let html;

	let contents = entry.lessonBuilder.map(
		(content: { typeHandle: any; id: Key | null | undefined }) => {
			switch (content.typeHandle) {
				case 'text':
					html = <Text key={content.id} content={content} />;
					break;

				// case 'embed':
				// 	html = <Embed key={content.id} content={content} />;
				// 	break;

				// case 'file':
				// 	html = <File key={content.id} content={content} />;
				// 	break;

				// case 'accordion':
				// 	html = <Accordion key={content.id} content={content} />;
				// 	break;

				// case 'dialogCards':
				// 	html = <DialogCards key={content.id} content={content} />;
				// 	break;

				// case 'slides':
				// 	html = <Slides key={content.id} content={content} />;
				// 	break;

				// case 'imageHotspots':
				// 	html = <ImageHotspots key={content.id} content={content} />;
				// 	break;

				// case 'imageScenes':
				// 	html = <ImageScenes key={content.id} content={content} />;
				// 	break;

				// case 'keyCards':
				// 	html = <KeyCards key={content.id} content={content} />;
				// 	break;

				// case 'video':
				// 	html = (
				// 		<Video
				// 			key={content.id}
				// 			content={content}
				// 			entry={entry}
				// 		/>
				// 	);
				// 	break;

				// case 'hotspotQuiz':
				// 	html = <HotspotQuiz key={content.id} content={content} />;
				// 	break;

				default:
					html = '';
					break;
			}

			return html;
		}
	);

	return <> {contents.length > 1 ? contents : <>{contents}</>}</>;
}
