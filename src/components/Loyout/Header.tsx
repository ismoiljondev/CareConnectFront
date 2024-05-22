import React from "react";
import logo from "@/img/logo.jpg";
import Image from "next/image";
import main from "@/img/mainuser.svg";
import ring from "@/img/notifications.svg";
import { ModeToggle } from "../ThemeButton/ThemeButton";
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
				<div className="bg-white rounded-full flex items-center justify-center p-3 shadow-md dark:bg-black dark:border">
					<Image src={main} alt="user" />
				</div>
				<div className="bg-white rounded-full flex items-center justify-center p-3 shadow-md dark:bg-black dark:border">
					<Image src={ring} alt="user" />
				</div>
			</div>
		</div>
	);
};

export default Header;
