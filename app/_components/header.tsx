"use client";

import Link from "next/link";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

const Header = () => {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<div className={"w-full h-10 sticky top-0"}>
				<div className={"w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-5"}>
					<div className={"cursor-pointer"}>
						<Link href={"/"}>HOME</Link>
					</div>
					<div className={"justify-self-center"}>Personal Website</div>
					<div className={"flex items-center justify-end"}>
						<div
							className="flex items-center justify-center w-12 h-6 rounded-md hover:bg-hoverColor cursor-pointer transition-all duration-500"
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{ theme === 'dark' ? <Sun className="size-4"/> : <Moon className="size-4"/> }
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
