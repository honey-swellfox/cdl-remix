import type { DataFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import Container from '~/components/container';
import Layout from '~/components/layout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | Contact Us' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

// export async function loaderx() {
// 	const response = await fetch(
// 		'http://cdl-training.cs/actions/users/session-info'
// 	);

// 	const movies = await response.json();
// 	console.log(movies);
// }

export async function actionx({ request }: DataFunctionArgs) {
	const formData = await request.formData();

	const res = await fetch('http://cdl-training.cs/guest-entries/save', {
		method: 'POST',
		body: formData,
	});

	const resData = await res.json();

	// console.log(resData);
}

export default function ContactUs() {
	return (
		<Layout>
			<div className="bg-[url('/img/backgrounds/contact.jpg')] bg-cover w-full h-full bg-no-repeat px-[15px] md:px-0 py-[20px] sm:py-[90px]">
				<div className="container mx-auto  flex justify-center w-full h-full">
					<div className="w-full md:w-[480px] bg-white py-[30px] z-[10] px-[30px]">
						<h1 className="text-[32px] text-[#161616] font-normal mb-[10px]">
							Contact Us
						</h1>
						<p className="mb-[20px]">
							Did you check out our
							<a
								href="/faq"
								className="text-mineshaft text-[14px] underline font-semibold hover:no-underline mx-[3px]">
								FAQ
							</a>
							page? Most questions can be answered there.
						</p>
						<Form method="POST">
							<input
								type="hidden"
								name="action"
								value="guest-entries/save"
							/>
							<input type="hidden" name="sectionId" value="1" />
							<input type="hidden" name="enabled" value="1" />
							<input
								type="text"
								name="cdl"
								className="hidden"
								id="cdl"
							/>

							<label
								className="cdlform-label block text-[12px] text-[#161616] font-normal mb-[25px]"
								htmlFor="title">
								Your Name
								<input
									className="bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-[#161616] font-normal mt-[10px]"
									type="text"
									name="fields[fullName]"
									placeholder="Enter your name"
									required={true}
								/>
							</label>

							<label
								className="cdlform-label block text-[12px] text-[#161616] mb-[25px]"
								htmlFor="email">
								Your Email
								<input
									className="bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-[#161616] mt-[10px]"
									type="email"
									name="fields[emailAddress]"
									id="email"
									placeholder="Enter your email"
									required={true}
								/>
							</label>

							<label
								className="cdlform-label block text-[12px] text-[#161616] mb-[25px]"
								htmlFor="state">
								Your State
								<select
									required={true}
									name="fields[state]"
									id="state"
									className="bg-[#00000008] w-full h-[40px] px-[12px] py-[9px] text-[16px] appearance-none focus:outline-none focus:shadow-none text-[16px] text-[#161616] font-normal snipcart-form__select custom-select border-none mt-[10px]">
									<option disabled={true} selected={true}>
										Select a state
									</option>

									<option value="AL">Alabama</option>

									<option value="AK">Alaska</option>

									<option value="AZ">Arizona</option>

									<option value="AR">Arkansas</option>

									<option value="CA">California</option>

									<option value="CO">Colorado</option>

									<option value="CT">Connecticut</option>

									<option value="DE">Delaware</option>

									<option value="DC">
										District of Columbia
									</option>

									<option value="FL">Florida</option>

									<option value="GA">Georgia</option>

									<option value="Hi">Hawaii</option>

									<option value="ID">Idaho</option>

									<option value="IL">Illinois</option>

									<option value="IN">Indiana</option>

									<option value="IA">Iowa</option>

									<option value="KS">Kansas</option>

									<option value="KY">Kentucky</option>

									<option value="LA">Louisiana</option>

									<option value="ME">Maine</option>

									<option value="MD">Maryland</option>

									<option value="MA">Massachusetts</option>

									<option value="MI">Michigan</option>

									<option value="MN">Minnesota</option>

									<option value="MS">Mississippi</option>

									<option value="MO">Missouri</option>

									<option value="MT">Montana</option>

									<option value="NE">Nebraska</option>

									<option value="NV">Nevada</option>

									<option value="NH">New Hampshire</option>

									<option value="NJ">New Jersey</option>

									<option value="NM">New Mexico</option>

									<option value="NY">New York</option>

									<option value="NC">North Carolina</option>

									<option value="ND">North Dakota</option>

									<option value="OH">Ohio</option>

									<option value="OK">Oklahoma</option>

									<option value="OR">Oregon</option>

									<option value="PA">Pennsylvania</option>

									<option value="RI">Rhode Island</option>

									<option value="SC">South Carolina</option>

									<option value="SD">South Dakota</option>

									<option value="TN">Tennessee</option>

									<option value="TX">Texas</option>

									<option value="UT">Utah</option>

									<option value="VT">Vermont</option>

									<option value="VA">Virginia</option>

									<option value="WA">Washington</option>

									<option value="WV">West Virginia</option>

									<option value="WI">Wisconsin</option>

									<option value="WY">Wyoming</option>
								</select>
							</label>

							<label
								className="cdlform-label block text-[12px] text-[#161616] font-normal mb-[25px]"
								htmlFor="inquiryType">
								Inquiry Type
							</label>

							<div className="flex gap-24 mb-[25px]">
								<label
									className="flex items-center"
									htmlFor="inquiry_business">
									<input
										className="bg-[#00000008] h-[16px] w-[16px] mr-[8px]"
										type="radio"
										name="fields[inquiryType]"
										id="inquiry_business"
										value="business"
										checked={true}
									/>
									Business
								</label>
								<label
									className="flex items-center"
									htmlFor="inquiry_personal">
									<input
										className="bg-[#00000008] h-[16px] w-[16px] mr-[8px]"
										type="radio"
										name="fields[inquiryType]"
										id="inquiry_personal"
										value="personal"
									/>
									Personal
								</label>
							</div>

							<label
								className="cdlform-label block text-[12px] text-[#161616] font-normal mb-[25px]"
								htmlFor="subject">
								Subject
								<input
									className="bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-[#161616] font-normal mt-[10px]"
									type="text"
									name="fields[subject]"
									id="subject"
									placeholder="Enter subject"
									required={true}
								/>
							</label>

							<label
								className="cdlform-label block text-[12px] text-[#161616] mb-[25px]"
								htmlFor="message">
								Message
								<textarea
									className="bg-[#00000008] w-full h-[150px] p-[15px] focus:outline-none focus:shadow-none mt-[10px]"
									name="fields[message]"
									id="message-text"
									placeholder="Type your message"
									required={true}
								/>
							</label>

							<div className="flex justify-start">
								<button
									className="px-[20px] py-[10px] flex items-center justify-between focus:outline-none focus:shadow-none bg-[#0f62fe] text-white"
									type="submit">
									<span className="text-[14px] pr-[35px]">
										Send Message
									</span>
									<img src="/img/icons/icon-send.svg" />
								</button>
							</div>
						</Form>

						<div className="message-sent-wrap hidden">
							<div className="message-sent flex-col justify-center items-center flex h-[500px] bg-white px-[20px]">
								<h2 className="text-[32px] text-center text-[#161616] font-normal mb-[20px]">
									Message Sent!
								</h2>
								<p className="mb-90 text-center">
									Thanks htmlFor the message, our team will
									review it shortly.
								</p>
								<button
									type="button"
									id="btn-contact-close"
									className="btn-contact-close bg-[#0f62fe] text-white px-[50px] py-[10px] uppercase"
									aria-label="Close">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
