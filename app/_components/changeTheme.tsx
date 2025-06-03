"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useMounted} from "@/hooks/useMounted";

const ChangeTheme = () => {
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();
	return (
		<>
			<div className={"flex items-center justify-end"}>
        <div
            className="flex items-center justify-center w-12 h-6 rounded-md hover:bg-hoverColor cursor-pointer transition-all duration-500"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
					{ mounted ? theme === 'dark' ? <Sun className="size-4"/> : <Moon className="size-4"/> : <div className="size-4"/> }
        </div>
			</div>
		</>
	);
};

export default ChangeTheme;
