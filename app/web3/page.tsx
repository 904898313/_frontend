'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Unplug } from 'lucide-react';

export default function Home() {
	const [address, setAddress] = useState('')
	const [balance, setBalance] = useState('')

	async function connectWallet() {
	}

	return (
		<div className={"flex-1 flex items-center justify-center"}>
			<Button
				onClick={connectWallet}
				variant={"expandIcon"}
				Icon={Unplug}
				iconPlacement="left"
				className="h-fit rounded-full bg-secondary font-semibold text-foreground hover:bg-secondary/70"
			>
				Connect Wallet
			</Button>
		</div>
	)
}
