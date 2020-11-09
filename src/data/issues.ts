import {issueQuery} from './github.graphql'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const  getIssues = async (repoHandle = "cosmos-sdk", repoOwner = "cosmos") => {
    const query = issueQuery(repoHandle, repoOwner);
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = '4930e95e0c50c808098bad6d3cbc2eb4dfd2de58';//localStorage.getItem('token');
        // return the headers to the context so httpLink can read them
        return {
            headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            }
        }
    });
    
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const result = await client.query({
        query
    })
    
    return result;
}
export const mockresponse = {
    "repository": {
    "id": "MDEwOlJlcG9zaXRvcnk1MTE5MzUyNg==",
    "issues": {
        "edges": [
        {
            "node": {
            "id": "MDU6SXNzdWU3MzQxMTE5NDU=",
            "createdAt": "2020-11-02T01:15:05Z",
            "title": "Fix or replace sdk.Dec",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/48918?u=dc907f891d8d69b8809af53415dc3542d599e32e&v=4",
                "id": "MDQ6VXNlcjQ4OTE4",
                "email": "",
                "name": "Aaron Craelius",
                "login": "aaronc"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzQxNzYzODU=",
            "createdAt": "2020-11-02T04:49:52Z",
            "title": "Ability to query total liquid supply in the system",
            "author": {
                "avatarUrl": "https://avatars3.githubusercontent.com/u/47516145?u=3d9e96fa0c572cf847a8040a95e036b15dfe40fb&v=4",
                "id": "MDQ6VXNlcjQ3NTE2MTQ1",
                "email": "devashishdxt@gmail.com",
                "name": "Devashish Dixit",
                "login": "devashishdxt"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzQyMTg0Mjc=",
            "createdAt": "2020-11-02T06:17:23Z",
            "title": "module-manager.md#appmodule",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/30211020?u=f2d59a2dc3aacdd5a5c7a48c569e3ff0b1154c1c&v=4",
                "id": "MDQ6VXNlcjMwMjExMDIw",
                "email": "youngqqcn@163.com",
                "name": "youngqq",
                "login": "youngqqcn"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzQzODg4NTU=",
            "createdAt": "2020-11-02T10:33:42Z",
            "title": "State export and genesis migration fails from v0.39.1 to v0.40.0-rc1",
            "author": {
                "avatarUrl": "https://avatars1.githubusercontent.com/u/54210167?v=4",
                "id": "MDQ6VXNlcjU0MjEwMTY3",
                "email": "",
                "name": null,
                "login": "kaustubhkapatral"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzQ5NDk4NjM=",
            "createdAt": "2020-11-03T01:27:18Z",
            "title": "Generate Protobuf Docs",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/48918?u=dc907f891d8d69b8809af53415dc3542d599e32e&v=4",
                "id": "MDQ6VXNlcjQ4OTE4",
                "email": "",
                "name": "Aaron Craelius",
                "login": "aaronc"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NDc4NTE=",
            "createdAt": "2020-11-03T16:07:44Z",
            "title": "Add minor checks to 04-channel",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NDk1NjU=",
            "createdAt": "2020-11-03T16:09:52Z",
            "title": "Refactors of channel handshake code",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NTI1Nzg=",
            "createdAt": "2020-11-03T16:13:23Z",
            "title": "Documentation issues on channel handshake code",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NTQ4ODk=",
            "createdAt": "2020-11-03T16:16:15Z",
            "title": "CommitPacket and CommitAcknowledgement Changes",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NTg3NTc=",
            "createdAt": "2020-11-03T16:21:06Z",
            "title": "Packet msg changes",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NjE3NDk=",
            "createdAt": "2020-11-03T16:24:23Z",
            "title": "Merge Packet Keeper functions together",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0NjQyMzM=",
            "createdAt": "2020-11-03T16:27:44Z",
            "title": "WriteAcknowledgement must take in and authenticate channel capability",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0ODMxNzY=",
            "createdAt": "2020-11-03T16:53:12Z",
            "title": "How to handle Packet Timeouts before Connection opens",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU0OTczNjE=",
            "createdAt": "2020-11-03T17:12:40Z",
            "title": "ux: allow apps to set bootNode and genesis in binary",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/24299864?u=2ff91f3ab37067826ed6986ff11fdaabc7a79b1f&v=4",
                "id": "MDQ6VXNlcjI0Mjk5ODY0",
                "email": "",
                "name": "Marko",
                "login": "marbar3778"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU1MTAwNDE=",
            "createdAt": "2020-11-03T17:31:49Z",
            "title": "Documentation issues on IBC packet code",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzU3Njk2NDc=",
            "createdAt": "2020-11-04T02:48:23Z",
            "title": "x/capability: GetCapability deletes capabilities unexpectedly",
            "author": {
                "avatarUrl": "https://avatars3.githubusercontent.com/u/2300911?u=5acb296443e059617eb26c2ef800a811e34bc6ea&v=4",
                "id": "MDQ6VXNlcjIzMDA5MTE=",
                "email": "",
                "name": "Ethan Buchman",
                "login": "ebuchman"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzYwODk2OTQ=",
            "createdAt": "2020-11-04T05:49:09Z",
            "title": "gaiad tx bank multi-send was not implemented for cli",
            "author": {
                "avatarUrl": "https://avatars3.githubusercontent.com/u/45417810?v=4",
                "id": "MDQ6VXNlcjQ1NDE3ODEw",
                "email": "",
                "name": "Jeonghwan Park",
                "login": "carameleon"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY0MzgyODE=",
            "createdAt": "2020-11-04T21:34:22Z",
            "title": "LCD returns HTTP 500 when attempting to query a non-existent block",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/56267776?u=9e9aea1a2e46dba43ec80255f01c62f3c2a8e459&v=4",
                "id": "MDQ6VXNlcjU2MjY3Nzc2",
                "email": "",
                "name": "Alex Mapley",
                "login": "BisonAl"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY2NDMzNzI=",
            "createdAt": "2020-11-05T06:09:40Z",
            "title": "gRPC Gateway: GetTx/txByHash endpoint fails with runtime error: invalid memory address or nil pointer dereference",
            "author": {
                "avatarUrl": "https://avatars0.githubusercontent.com/u/3479820?u=5f7bcad7e8fc4792211a688c316dbfe41ab6945e&v=4",
                "id": "MDQ6VXNlcjM0Nzk4MjA=",
                "email": "anil@vitwit.com",
                "name": "Anil Kumar Kammari",
                "login": "anilCSE"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY5MTk0MTE=",
            "createdAt": "2020-11-05T13:09:44Z",
            "title": "Solomachine Minor fixes",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY5MjAxNDY=",
            "createdAt": "2020-11-05T13:10:49Z",
            "title": "Replace FrozenSequence with IsFrozen boolean in Solomachine Client",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY5MjEzOTU=",
            "createdAt": "2020-11-05T13:12:41Z",
            "title": "Solomachine PubKey fixes",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY5Mjg4MTA=",
            "createdAt": "2020-11-05T13:23:00Z",
            "title": "Determine how to handle Solomachine Misbehaviour",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzY5MzAwOTM=",
            "createdAt": "2020-11-05T13:24:48Z",
            "title": "Allow chains to white/black-list IBC client types",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/14364734?v=4",
                "id": "MDQ6VXNlcjE0MzY0NzM0",
                "email": "",
                "name": "Aditya",
                "login": "AdityaSripal"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzczNjI4MjY=",
            "createdAt": "2020-11-06T00:27:41Z",
            "title": "Limit the use of context.Background",
            "author": {
                "avatarUrl": "https://avatars3.githubusercontent.com/u/811701?u=d42c4af3f97ebccdd701e8d0faeefd123699930e&v=4",
                "id": "MDQ6VXNlcjgxMTcwMQ==",
                "email": "",
                "name": "Robert Zaremba",
                "login": "robert-zaremba"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3Mzc0NjU2NjM=",
            "createdAt": "2020-11-06T05:09:52Z",
            "title": "Make gaiacli version --long include the cosmos SDK version. ",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/6440154?u=73ae05c37192bd39b1b369246d13bfe1f8b93973&v=4",
                "id": "MDQ6VXNlcjY0NDAxNTQ=",
                "email": "",
                "name": "Dev Ojha",
                "login": "ValarDragon"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3Mzc1OTUxMjk=",
            "createdAt": "2020-11-06T09:07:17Z",
            "title": "Add CLI command for modifying genesis.json",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/964052?v=4",
                "id": "MDQ6VXNlcjk2NDA1Mg==",
                "email": "billy.rennekamp@gmail.com",
                "name": "billy rennekamp",
                "login": "okwme"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3Mzc5MzExOTc=",
            "createdAt": "2020-11-06T17:35:00Z",
            "title": "Query state for specific height using gRPC",
            "author": {
                "avatarUrl": "https://avatars3.githubusercontent.com/u/33157909?v=4",
                "id": "MDQ6VXNlcjMzMTU3OTA5",
                "email": "",
                "name": "Frojdi Dymylja",
                "login": "fdymylja"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzgwNjUxNjc=",
            "createdAt": "2020-11-06T21:55:23Z",
            "title": "sdkerrors: make Wrap compatible with Go standard library errors extractors",
            "author": {
                "avatarUrl": "https://avatars2.githubusercontent.com/u/4898263?u=44cf45461dab072e34b9e6731f75079581008976&v=4",
                "id": "MDQ6VXNlcjQ4OTgyNjM=",
                "email": "emm.odeke@gmail.com",
                "name": "Emmanuel T Odeke",
                "login": "odeke-em"
            }
            }
        },
        {
            "node": {
            "id": "MDU6SXNzdWU3MzgwNzM4NjU=",
            "createdAt": "2020-11-06T22:15:30Z",
            "title": "malicious IBC app module can claim any port or channel capability using LookupModuleByPort/ByChannel",
            "author": {
                "avatarUrl": "https://avatars3.githubusercontent.com/u/2300911?u=5acb296443e059617eb26c2ef800a811e34bc6ea&v=4",
                "id": "MDQ6VXNlcjIzMDA5MTE=",
                "email": "",
                "name": "Ethan Buchman",
                "login": "ebuchman"
            }
            }
        }
        ]
    }
    }
  };