import { Icon12Add, Icon12ArrowDownLeft, Icon12ArrowUpRight, Icon12Articles, Icon12Cake, Icon12Chevron, Icon12ClockOutline, Icon12Delete, Icon12Flash, Icon12Services, Icon12Tag, Icon28AddOutline, Icon28ArrowLeftOutline, Icon28CakeOutline, Icon28ComputerOutline, Icon28CubeBoxOutline, Icon28DevicesOutline, Icon28Game, Icon28KeyOutline, Icon28MagnetOutline, Icon28UserBackgroundOutline } from "@vkontakte/icons";
import { runTapticImpactOccurred } from '@vkontakte/vk-bridge-react';
import {
    AppRoot, Avatar, Button, Cell, Chip, Counter, FormLayout, FormLayoutGroup, Group, Header, HorizontalCell, List, Panel,
    PanelHeader, PanelHeaderBack, Paragraph, PullToRefresh, Search, Spacing, SplitCol, SplitLayout, Tabbar, TabbarItem, View
} from "@vkontakte/vkui";
import { useCallback, useState } from "react";

import { AddressView, use } from "./Addresses";
import axios from "axios";

const Users = () => {
  const [location, setLocation] = useState({  
    "key": "VZ-002",
    "address": "проспект Ветеранов, 36к2",
    "description": "Краткое описание или дополнения",
    "worktime": "09:00 - 22:00"
})



let locationIcons = {
  key: <Icon12Articles />,
  address: <Icon12Flash />,
  description: <Icon12Articles />,
  worktime: <Icon12ClockOutline />
}


  const [users, setUsers] = useState([
    { id: 1, name: "Оборудование", icon: <Icon28CubeBoxOutline />, network: '172.10.0.1/28' },
    { id: 2, name: 'Интернет', icon: <Icon28DevicesOutline />, services: {  type: "network", value: '1.1.1.1/32', state: 1   } },
  ]);

  const [fetching, setFetching] = useState(false);

  const onRefresh = useCallback(() => {


    setFetching(true);
    // Вызываем виброотклик
    // > Note: в VKUI v5 необходимо возвращать результат выполнения, чтобы
    // > чтобы избежать двойного вызова runTapticImpactOccurred()
    return runTapticImpactOccurred('light');
  }, []);

  return (
    <View activePanel="users" >
      <Panel id="users">
        <PanelHeader>Устройства</PanelHeader>
       

        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>


        <AddressView />


          <Group mode="plain" mode="card" header={<Header mode="primary">Просмотр</Header>}>
            {Object.entries(location).map((i,k) => <Cell disabled before={locationIcons[i[0]]} key={k}> <Paragraph>{i[1]}</Paragraph></Cell>
          )}
</Group>      
<div style={{padding: 20}} />
          <Group mode="card">
            <List>
              {users.map(({ id, name, icon }, i) => {
                return (
                  <Cell key={i} expandable before={icon} after={<Chip before={<Icon12Chevron />} after={<Icon12ArrowUpRight fill={"green"} />} removable={false} ><div>172.10.0.1/82</div></Chip>}>{name}</Cell>
          
                );
              })}
            </List>


         <Tabbar mode='horizontal'>

          <TabbarItem indicator={<Counter size="s" mode="prominent" />} ><Icon28AddOutline fill="white" /></TabbarItem>
                </Tabbar>
          </Group>
        </PullToRefresh>
      </Panel>
    </View>
  );
};


async function getData() {

// var rootValue = { hello: () => "Hello world!" }

// var source = "{ hello }"

// graphql({ schema, source, rootValue }).then(response => {
//   console.log(response)
// })

}

export default function App (config:any) {

 let options =  [{label: "VZ", value: "11"}, { label: "KS", value: "12" } ]
 const [activePanel, setActivePanel] = useState("main")

//  let selectFilter = (key:any) => {
//   let filtered = []
//  }
//  const [address,setAddress] = useState({
//   disabled: false,

//   options: [{ value: "1", label: 1}]})

//  function nextSelect(value: any) {
//     setAddress({
//       disabled: false,
//       searchable: true,
//       options: [{ label: "Item 1", value: "12"}]
//     })
//  }
  let { title } = config 
  return (
    <AppRoot mode={'full'}>
     
      <Users />
    
    </AppRoot>
  );
}




// <SplitLayout header={<PanelHeader separator={true} before={<Button>A</Button>} />} >
//         <SplitCol autoSpaced>
//           <View activePanel={activePanel}>
   
      
//             </View>
//        </SplitCol>
//       <SplitCol>A</SplitCol>
//        <SplitCol>
//         <p>Content</p>
//         </SplitCol>
//       </SplitLayout>
// {/* <View activePanel={activePanel}> */}
// <Panel id="panel1">
//   <PanelHeader>More</PanelHeader>
 
// </Panel>
// <Panel id="panel2">
//   <PanelHeader
//     separator={false}
//     before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}
//   >
//     Communities
//   </PanelHeader>
//   <Group>
//     <Search />
//     <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
//       Swipe Right
//     </Cell>
//     <Cell
//       subtitle="Cultural Center"
//       before={<Avatar />}
//       onClick={() => setActivePanel('panel3')}
//     >
//       Out Cinema
//     </Cell>
//     <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
//       #ARTPOKAZ
//     </Cell>
//   </Group>
// </Panel>
// <Panel id="panel3" centered>
//   <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
//     Out Cinema
//   </PanelHeader>
//   <Spinner />
//   <div style={{ marginTop: 10 }}>Centered Content</div>
// </Panel>
// </View>

// // export default App;
// export default App;
