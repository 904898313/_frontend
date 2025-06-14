"use client";

import { useConnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import {Button} from "@/components/ui/button";
import {Unplug} from "lucide-react";

export default function walletConnectButton() {
	const { connect } = useConnect()

	return (
		<Button
			onClick={() => connect({ connector: injected() })}
			variant={"expandIcon"}
			Icon={Unplug}
			iconPlacement="right"
			className="h-fit rounded-full bg-secondary font-semibold text-foreground hover:bg-secondary/70"
		>
			Connect Wallet
		</Button>
	)
}
