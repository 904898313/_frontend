"use client";

import {useAccount, useConnect, useDisconnect} from 'wagmi'
import { injected } from 'wagmi/connectors'
import {Button} from "@/components/ui/button";
import { Unplug, ScreenShareOff } from "lucide-react";
import { useMounted } from "@/hooks/useMounted"

export default function walletConnectButton() {
	const { address, addresses, isConnected } = useAccount();
	const { connect, isPending, connectors } = useConnect()
	const { disconnect } = useDisconnect();
	const mounted = useMounted();

	if(!mounted) {
		return <></>
	}

	console.log(connectors, "connectors");
	console.log(address, "address");
	console.log(addresses, "addresses");

	if(isConnected) {
		return <>
			<Button
				onClick={() => disconnect()}
				className="rounded-full"
			>
				Disconnect Wallet
				<ScreenShareOff className={"ml-2"}/>
			</Button>
		</>
	}

	return (
		<Button
			onClick={() => connect({ connector: injected() })}
			variant={"expandIcon"}
			Icon={Unplug}
			iconPlacement="right"
			className="h-fit rounded-full bg-secondary font-semibold text-foreground hover:bg-secondary/70"
			disabled={ isPending }
		>
			{ isPending ? "Connecting..." : "Connect Wallet"}
		</Button>
	)
}
