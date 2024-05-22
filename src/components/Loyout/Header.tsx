import React from "react";
import logo from "@/img/logo.jpg";
import Image from "next/image";
import { ModeToggle } from "../ThemeButton/ThemeButton";
import { BellRing, User } from "lucide-react";
const Header = () => {
	return (
		<div className="w-full flex justify-between">
			<div>
				<Image
					src={logo}
					alt="logo"
					width={50}
					height={20}
					className="rounded-md"
				/>
			</div>
			<div className="flex gap-3 items-center">
				<ModeToggle />
				<div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md dark:bg-black dark:border">
					<User />
				</div>
				<div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md dark:bg-black dark:border">
					<BellRing />
				</div>
			</div>
		</div>
	);
};

export default Header;
