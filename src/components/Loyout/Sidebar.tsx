import Image from "next/image";
import React from "react";
import imgx from "@/img/author1.png";
import user from "@/img/user.svg";
import doctor from "@/img/doctor.svg";
import team from "@/img/team.svg";
import setting from "@/img/setting.svg";
import logout from "@/img/logout.svg";
import payment from "@/img/payment.svg";
import { cn } from "@/lib/utils";
type sidebarProps = {
	img: string;
	userName: string;
};

const Sidebar = ({ img, userName }: sidebarProps) => {
	return (
		<div className="w-32 min-h-screen flex flex-col items-center rounded-none md:rounded-2xl md:p-8 shadow-input bg-white dark:bg-black">
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center mb-16">
					<Image src={img ? img : imgx} alt="img" />
					<p className="text-center">
						{userName ? userName : "John Doe"}
					</p>
				</div>
				<div className="flex flex-col gap-10">
					<IconContainer>
						<Image src={user} alt="user" />
						<p className="left-10 absolute hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<Image src={doctor} alt="doctor" />
						<p className="left-10 absolute hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<Image src={team} alt="team" />
						<p className="left-10 absolute hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<Image src={setting} alt="setting" />
						<p className="left-10 absolute hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
					<IconContainer>
						<Image src={payment} alt="payment" />
						<p className="left-10 absolute hidden group-hover:block shadow-md p-2 rounded-md">
							Appointment
						</p>
					</IconContainer>
				</div>
			</div>
			<IconContainer className="mt-auto">
				<Image src={logout} alt="logout" />
				<p className="left-10 absolute hidden group-hover:block shadow-md p-2 rounded-md">
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
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"group flex cursor-pointer items-center rounded-md hover:shadow-md sticky",
				className
			)}
		>
			{children}
		</div>
	);
};
