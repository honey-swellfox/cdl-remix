import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="main py-[50px] md:pt-[48px] bg-porcelain px-[15px] md:px-0">
				{children}
			</main>
		</>
	);
}
