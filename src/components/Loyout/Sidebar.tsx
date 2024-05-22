"use client";
import Image from "next/image";
import React from "react";
import imgx from "@/img/author1.png";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
	User,
	Activity,
	Users,
	Settings,
	CreditCard,
	LogOut,
} from "lucide-react";
type sidebarProps = {
	img: string;
	userName: string;
};

const Sidebar = ({ img, userName }: sidebarProps) => {
	const route = useRouter();
	return (
		<div className="w-32 min-h-screen flex flex-col items-center rounded-none md:rounded-2xl md:p-8 shadow-input bg-white dark:bg-black">
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center mb-16">
					<Image src={img ? img : imgx} alt="img" />
					<p className="text-center">
						{userName ? userName : "John Doe"}
					</p>
				</div>
				<div
					className="flex flex-col gap-10"
					onClick={() => route.push("/login")}
				>
					<IconContainer onClick={() => route.push("/login")}>
						<User />
						<p className="left-10 absolute bg-white dark:bg-black hidden group-hover:block shadow-md p-2 rounded-md">
							User
						</p>
					</IconContainer>
					<IconContainer>
						<Activity />
						<p className="left-10 absolute bg-white dark:bg-black hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<Users />
						<p className="left-10 absolute bg-white dark:bg-black hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<Settings />
						<p className="left-10 absolute bg-white dark:bg-black hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<CreditCard />
						<p className="left-10 absolute bg-white dark:bg-black hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
				</div>
			</div>
			<IconContainer className="mt-auto">
				<LogOut />
				<p className="left-10 absolute bg-white dark:bg-black hidden group-hover:block shadow-md p-2 rounded-md">
					Logout
				</p>
			</IconContainer>
		</div>
	);
};

export default Sidebar;

const IconContainer = ({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: any;
}) => {
	return (
		<div
			className={cn(
				"group flex cursor-pointer items-center rounded-md hover:shadow-md sticky",
				className
			)}
			onClick={() => onClick}
		>
			{children}
		</div>
	);
};
