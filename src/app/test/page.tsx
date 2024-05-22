import SignupFormDemo from "@/components/Login/Login";
import Header from "@/components/Loyout/Header";
import Layout from "@/components/Loyout/Layout";
import Sidebar from "@/components/Loyout/Sidebar";
import TableDoctors from "@/components/Table/DoctorsTable";
import User from "@/components/User/User";
import React from "react";
const Test = () => {
	return (
		<div>
			<Layout>
				<User
					name={"John"}
					lastName={"Doe"}
					phoneNumber={+998123456789}
					email={"johndoe@gmail.com"}
					gender={"Men"}
					about={"Lorem Ipsum dolor sit amet."}
					img={""}
				/>
				{/* <SignupFormDemo /> */}
				<TableDoctors />
			</Layout>
		</div>
	);
};

export default Test;
