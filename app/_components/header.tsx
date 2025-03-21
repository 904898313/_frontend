"use client";

import Link from "next/link";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

const Header = () => {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<div className={"w-full h-10 bg-gray-700 sticky top-0"}>
				<div className={"w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-5"}>
					<div className={"cursor-pointer"}>
						<Link href={"/"}>HOME</Link>
					</div>
					<div className={"justify-self-center cursor-pointer"}>Personal Website</div>
					<div className={"flex items-center justify-end"}>
						<div className="flex items-center p-1.5 rounded-full hover:bg-gray-500">
							{
								theme === 'dark' ? (
									<Sun
										className="cursor-pointer"
										onClick={() => setTheme('light')}
									/>
								) : (
									<Moon
										className="cursor-pointer"
										onClick={() => setTheme('dark')}
									/>
								)
							}
						</div>
						{/*<div className={"justify-self-end cursor-pointer ml-4"}>login</div>*/}
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;