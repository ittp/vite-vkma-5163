import { AppRoot, Cell, Group, CellButton, Button, SSRWrapper, useConfigProvider, Panel, InfoRow, Link } from '@vkontakte/vkui'

import { useState} from 'react'
import useSWR, { SWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url: any) => axios.get(url).then(res => {
    // 

// console.log(addresses)
    return    {data: res.data.data}

})


function getAddresses () {
  const { data: addresses } = useSWR('https://apis.anabasis.pro/api/addresses?fields=address')
//   console.log(addresses)
  return addresses.data.map(i => addresses[i].attributes)
//   return addresses.map((i,k) => { return Object.assign( {id: i.id}, {...i.attributes}) })

//   const { data: projects } = useSWR('/api/projects')
//   const { data: user } = useSWR('/api/user', { refreshInterval: 0 }) // override
 
  // ...
}


export function useAddress (id: number) {
  const { data, error, isLoading } = useSWR(`https://apis.anabasis.pro/api/addresses/${id}`, fetcher)
 
  return {
    address: data,
    isLoading,
    isError: error
  }
}
export function AddressView () {
  const { data, error, isLoading } = useSWR('https://apis.anabasis.pro/api/addresses', fetcher)
 
//   const [list, setList] = useState(data)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


//   let AddressesList = () => data?.addresses.map((item, key) => <Cell key={i} before={""}>${item}</Cell>)

 
        /* <Cell  expandable before={icon} after={<Chip before={<Icon12Chevron />} after={<Icon12ArrowUpRight fill={"green"} />} removable={false} ><div>172.10.0.1/82</div></Chip>}>{name}</Cell> */

  // render data
//   return <Link>{data?.addresses[0].address}!</Link>
// {data?.addresses.map((i,key) => <Cell key={key}>${i}</Cell>)}  
    // let a = Object.values(data).map((r,k) => r[k].attributes)
    console.log(list)
  return <Group mode="card"><AddressView />    </Group>
}


// export default function AddressesApp () {
//   return (
//     <SWRConfig 
//       value={{
//         refreshInterval: 3000,
//         fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
//       }}
//     >
//         <Div>
//             <Addresses />
//         </Div>
//       {/* <Dashboard /> */}
//     </SWRConfig>
//   )
// }