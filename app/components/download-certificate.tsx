import IconCheckOutline from './ui/icons/icon-check-outline';
import IconDownload from './ui/icons/icon-download';

export default function DownloadCertificate() {
	return (
		<div className="flex items-center">
			<div className="flex items-center mt-[15px] mb-[5px] sm:mb-0">
				<button className="bg-[#76c720] text-[13px] md:text-[14px] text-white py-[10px] px-[10px] lg:px-[18px] flex items-center relative mr-[14px]">
					<span className="mr-[25px]">Download Certificate</span>
					<span className="w-[30px] absolute right-0 mr-[6px] flex justify-center pr-[4px]">
						<IconDownload />
					</span>
				</button>
				<p className="text-[#76c720] text-[13px] md:text-[14px] flex items-center font-semibold ">
					<IconCheckOutline className="mr-5" />
					<span>Course Complete</span>
				</p>
			</div>
		</div>
	);
}
