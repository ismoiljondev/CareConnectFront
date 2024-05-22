"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import AnimatedBorder from "@/components/AnimatedBorder/border";
export default function SignupFormDemo() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};
	return (
		<div className="flex justify-center items-center">
			<div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-center text-xl text-neutral-800 dark:text-neutral-200">
					Login
				</h2>
				<form
					className="my-8 flex flex-col gap-4"
					onSubmit={handleSubmit}
				>
					<div className="grid grid-cols-2 gap-3">
						<LabelInputContainer>
							<Label htmlFor="firstname">First name</Label>
							<Input
								id="firstname"
								placeholder="Tyler"
								type="text"
							/>
						</LabelInputContainer>
						<LabelInputContainer>
							<Label htmlFor="lastname">Last name</Label>
							<Input
								id="lastname"
								placeholder="Durden"
								type="text"
							/>
						</LabelInputContainer>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<LabelInputContainer>
							<Label htmlFor="email">Phone number</Label>
							<Input
								id="email"
								placeholder="projectmayhem@fc.com"
								type="email"
							/>
						</LabelInputContainer>
						<div className="flex gap-3">
							<LabelInputContainer>
								<Label htmlFor="tel">Email Address</Label>
								<Input
									id="tel"
									placeholder="+998** *** ** **"
									type="tel"
								/>
							</LabelInputContainer>
							<LabelInputContainer>
								<Label htmlFor="age">Age</Label>
								<Input id="age" placeholder="25" type="date" />
							</LabelInputContainer>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<LabelInputContainer>
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								placeholder="••••••••"
								type="password"
							/>
						</LabelInputContainer>
						<LabelInputContainer>
							<Label htmlFor="gender">Gender</Label>
							<AnimatedBorder>
								<Select defaultValue="men">
									<SelectTrigger className="bg-white text-black w-full">
										<SelectValue
											placeholder="Gender"
											id="gender"
										/>
									</SelectTrigger>
									<SelectContent className="bg-white">
										<SelectGroup>
											<SelectItem value="gender">
												Genders
											</SelectItem>
											<SelectItem value="men">
												Men
											</SelectItem>
											<SelectItem value="women">
												Women
											</SelectItem>
											<SelectItem value="other">
												Other
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</AnimatedBorder>
						</LabelInputContainer>
					</div>
					<div className="grid grid-cols-2 items-end">
						<LabelInputContainer>
							<Label htmlFor="img">Upload image</Label>
							<Input id="img" type="file" />
						</LabelInputContainer>
					</div>
					<button
						className="w-3/5 m-auto bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
						Sign up &rarr;
						<BottomGradient />
					</button>
				</form>
			</div>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[3px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[3px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
