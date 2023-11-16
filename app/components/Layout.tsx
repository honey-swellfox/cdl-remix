export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="main py-[50px] md:pt-[70px] bg-porcelain px-[15px] md:px-0">
			{children}
		</main>
	);
}
