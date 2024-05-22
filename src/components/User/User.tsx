import Image from "next/image";
import React from "react";
import user from "@/img/author1.png";
type userProps = {
	img: any;
	name: string;
	lastName: string;
	phoneNumber: number;
	email: string;
	gender: string;
	about: string;
};

const User = ({
	img,
	name,
	lastName,
	email,
	phoneNumber,
	gender,
	about,
}: userProps) => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-bold text-4xl">Profile</h2>
			<div className="shadow-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-white dark:bg-black">
				<div className="flex gap-10">
					<div className="bg-white rounded-2xl shadow-md dark:bg-black">
						<Image
							src={img ? img : user}
							alt="user"
							className="rounded-lg aspect-square"
							width={230}
						/>
					</div>
					<div className="flex flex-col w-full justify-between rounded-2xl shadow-md p-8">
						<div className="flex flex-col">
							<h2 className="font-medium text-2xl">
								About {name} {lastName}
							</h2>
							<p>{about}</p>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col">
								<h3 className="font-medium text-xl">Email</h3>
								<p>{email}</p>
							</div>
							<div className="flex flex-col">
								<h3 className="font-medium text-xl">
									Phone Number
								</h3>
								<p>{phoneNumber}</p>
							</div>
							<div className="flex flex-col">
								<h3 className="font-medium text-xl">Gender</h3>
								<p>{gender}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
