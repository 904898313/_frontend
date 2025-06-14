// import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Unplug } from 'lucide-react';
import { useAccount, useEnsName } from 'wagmi'
import WalletConnectButton from "./_components/WalletConnectButton";

export default function Home() {
	// const [address, setAddress] = useState('')
	// const [balance, setBalance] = useState('')
	//
	// async function connectWallet() {
	// }
	// const { address } = useAccount()
	// const { data, error, status } = useEnsName({ address })
	// if (status === 'pending') return <div>Loading ENS name</div>
	// if (status === 'error') {
	// 	return <div>Error fetching ENS name: {error.message}</div>
	// }
	return (
		<div className={"flex-1 flex items-center justify-center"}>
			{/*<div>ENS name: {data}</div>*/}
			<WalletConnectButton />
		</div>
	)
}
