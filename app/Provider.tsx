"use client";

import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { ThemeProvider } from "@/components/theme/theme-provider";

const Provider = ({children}:{children: React.ReactNode}) => {
	return (
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem={false}
					>
						{children}
					</ThemeProvider>
				</QueryClientProvider>
			</WagmiProvider>
	);
};

export default Provider;
