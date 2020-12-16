import React, { useState } from 'react'
import {
  IonContent,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab2.css'

import { searchOutline } from 'ionicons/icons'
import { StargateClient } from '@cosmjs/stargate'

const apiEndpoint = 'http://18.220.101.192:26657' // ? 1317 ? 26658
// TODO deal with cors

type WalletInfoArray = Array<{ label: string; value: string | any }>

const Tab2: React.FC = () => {
  const [walletInfo, setWalletInfo] = useState<WalletInfoArray>([])
  const [address, setAddress] = useState<string>('regen:1x9469lmt5hr6gvtxelfxjzjapqh390jurgp3pq')

  const fetchWallet = async (walletAddress = address || '') => {
    const infoToSet: WalletInfoArray = []
    const readOnlyClient = await StargateClient.connect(apiEndpoint)

    const height = await readOnlyClient.getHeight()
    const account: any = await readOnlyClient.getAccount(walletAddress)
    const distributorBalances = await readOnlyClient.getAllBalancesUnverified(walletAddress)

    console.log('height:', height, 'account:', account, 'balance:', distributorBalances)

    if (account)
      Array.from(Object.keys(account)).forEach((eachAccountKey) =>
        infoToSet.push({
          label: eachAccountKey,
          value: account[eachAccountKey].value || account[eachAccountKey].toString(),
        }),
      )
    if (distributorBalances)
      distributorBalances.forEach((eachBalance) =>
        infoToSet.push({
          label: `balance of ${eachBalance.denom}: `,
          value: eachBalance.amount,
        }),
      )
    height && infoToSet.push({ label: `height: `, value: height.toString() })

    setWalletInfo(infoToSet)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wallet Check</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wallet Check</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          placeholder="Enter your wallet address"
          value={address}
          onIonChange={(e) => setAddress(e.detail.value || '')}
        />
        <IonFabButton size="small" color="primary" onClick={(mEv) => fetchWallet()}>
          <IonIcon icon={searchOutline} />
        </IonFabButton>
        <IonList>
          {!walletInfo.length
            ? null
            : walletInfo.map((eachProp) => (
                <IonItem key={`${eachProp.label}:${eachProp.value}`}>
                  {eachProp.label}: {eachProp.value}
                </IonItem>
              ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Tab2
