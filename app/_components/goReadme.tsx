"use client";

import { Button } from "@/components/ui/button";

const GoReadme = () => {
	const handleReadmeOpen = () => {
		// 确保只在客户端环境操作 window
		if (typeof window !== "undefined") {
			window.open("https://904898313.github.io/readme/");
		}
	};

	return (
		<>
			<Button
				className={
					"bg-green-400 border-2 border-transparent hover:border-2 hover:border-teal-200 hover:bg-green-500"
				}
				onClick={handleReadmeOpen}
			>
				Personal Readme
			</Button>
		</>
	);
};

export default GoReadme;
