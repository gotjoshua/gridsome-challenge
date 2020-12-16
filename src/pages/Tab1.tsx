import React, { useState } from 'react'
import {
  IonAvatar,
  IonContent,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/react' 
import { bugOutline } from 'ionicons/icons'
import './Tab1.css'
import { mockresponse } from '../data/issues'
import { useQuery } from '@apollo/client'
import { issueQuery } from '../data/github.graphql'
import { downloadOutline } from 'ionicons/icons'
const Tab1: React.FC = () => {
  const [apiKey, setKey] = useState<string>('')
  const { loading, error, data, fetchMore } = useQuery(issueQuery(),{
    fetchPolicy: "cache-first" // "network-only": results in an additional query that is not compatible with the current merge logic //
  })

  const setKeyOnEnter = (e: React.KeyboardEvent<HTMLIonInputElement>) => {
    e.persist()
    console.log(e)
    if (e.key === 'Enter') {
      localStorage.setItem('token', apiKey)
      window.location.reload() // TODO feels hackish - fix: trigger useQuery somehow?
    }
  }
  const fetchM = async () => {
    console.log('should fetch:', data.repository.issues.pageInfo.endCursor)
    const fetchResults = await fetchMore({
      variables: {
        after: data.repository.issues.pageInfo.endCursor,
      },
    })
    // console.log('fetchResults', fetchResults)
    console.log('data', data)
    console.log('new end cursor', data.repository.issues.pageInfo.endCursor)

    // data.repository.issues.edges.concat(fetchResults.data.repository.issues.edges)
    // data.repository.issues.pageInfo.endCursor
  }

  const issueResultsData = loading || !data ? mockresponse : data
  console.log(issueResultsData)
  const issues = issueResultsData.repository.issues.edges.map((eachEdge: { node: any }) => eachEdge.node)
  console.log(issues)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GitHub Issues</IonTitle>
          {loading ? (
            <IonTitle>
              <IonSpinner name="crescent" />
              {!data ? 'Showing mockdata while gql is loading':null}
            </IonTitle>
          ) : error ? (
            <IonTitle>
              <IonIcon icon={bugOutline} className="error-icon" />
              Error! {error.message}
              <IonInput
                className="token-input"
                value={apiKey}
                placeholder="Enter GitHub personal api token"
                onKeyUp={(e) => setKeyOnEnter(e)}
                onIonChange={(e) => setKey(e.detail.value!)}
              ></IonInput>
              <a href="https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql">
                Scopes needed: user, public_repo, repo, repo_deployment, repo:status, read:repo_hook, read:org,
                read:public_key, read:gpg_key
              </a>
            </IonTitle>
          ) : (
            <IonTitle>
              Data Loaded. Check on{' '}
              <a href="https://github.com/cosmos/cosmos-sdk/issues?q=is%3Aopen+is%3Aissue">github</a>
            </IonTitle>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Github Issue List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFabButton className="fetch-more-button" size="small" color="primary" onClick={(mEv) => fetchM()}>
          <IonIcon icon={downloadOutline} />
        </IonFabButton>
        <IonList>
          {issues.map(
            (eachIssue: {
              id: string | number | null | undefined
              author: { login: any; name: any; avatarUrl: string | undefined }
              title: React.ReactNode
            }) => (
              <IonItem key={eachIssue.id}>
                <IonAvatar className="author-avatar">
                  <img
                    alt={`avatar for ${eachIssue.author.login}: ${eachIssue.author.name}`}
                    src={eachIssue.author.avatarUrl}
                  />
                </IonAvatar>
                <IonLabel>{eachIssue.title}</IonLabel>
              </IonItem>
            ),
          )}
        </IonList>
        <IonFabButton className="fetch-more-button" size="small" color="primary" onClick={(mEv) => fetchM()}>
          <IonIcon icon={downloadOutline} />
        </IonFabButton>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
