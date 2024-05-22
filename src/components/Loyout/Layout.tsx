import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex">
			<Sidebar img="" userName="" />
			<div className="flex flex-col w-full p-10">
				<Header />
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
