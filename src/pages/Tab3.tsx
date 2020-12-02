import React, { useState } from 'react'
import { IonContent, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import './Tab3.css'
// import { Faucet } from '@cosmjs/faucet/build/types/faucet'
// import { TokenConfiguration } from '@cosmjs/faucet/build/types/tokenmanager'
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import { add } from 'ionicons/icons'

// const apiEndpoint='http://18.220.101.192:26657'; // ? 1317 ? 26658

// const defaultAddressPrefix = "myc";
// const defaultTokenConfig: TokenConfiguration = {
//   bankTokens: ["ugrow", "ugive"],
// };

const Tab3: React.FC = () => {
  // const [address, setAddress] = useState<string>('regen:1lum7399smcuw5j42mvg549y9g4n2z6lry3q6mq')
  const [newMnemonic, setNewMnemonic] = useState<string>('')
  const [showToast1, setShowToast1] = useState(false)

  const makeFaucet = async () => {
    const newWallet = await DirectSecp256k1Wallet.generate(12)
    setNewMnemonic(newWallet.mnemonic)
    setShowToast1(true)
    // const faucet = await Faucet.make(
    //   apiEndpoint,
    //   defaultAddressPrefix,
    //   defaultTokenConfig,
    //   newWallet.mnemonic,
    //   3,
    //   true, //stargate
    // );
    // await faucet.send({
    //   amount: {
    //     amount: "200000000",
    //     denom: "ugrow",
    //   },
    //   sender: faucet.holderAddress,
    //   recipient: address,
    // });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create a New mnemonic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create a New mnemonic</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <IonInput placeholder="Enter your wallet address" value={address} onIonChange={e => setAddress(e.detail.value!)} /> */}
        <IonFabButton size="small" color="primary" onClick={(mEv) => makeFaucet()}>
          <IonIcon icon={add} />
        </IonFabButton>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => {
            setShowToast1(false)
            setNewMnemonic('')
          }}
          message={newMnemonic}
          duration={5000}
        />
      </IonContent>
    </IonPage>
  )
}

export default Tab3
