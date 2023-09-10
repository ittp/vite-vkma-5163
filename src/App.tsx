import { Icon12Add, Icon12ChevronUp, Icon12Delete, Icon12MessageHeart, Icon12PaymentCardOutline, Icon12Play, Icon12Services } from "@vkontakte/icons";
import {
    AppRoot, Button, Cell, FormField, FormLayout, FormLayoutGroup, Group, Header, Panel,
    PanelHeader, Search, SplitCol, SplitLayout, View
} from "@vkontakte/vkui";


import { useState } from "react";



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
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} title={1} />}>
        <SplitCol autoSpaced>
          <View activePanel={activePanel}>
            <Panel id="main">
              <PanelHeader  separator={true}  before={<Button mode='outline' form="test"  size='s' after={''} >App</Button>}>
                
                
                <FormLayout itemRef="1">
                  
                <FormLayoutGroup mode="horizontal">
                 
                    <Search inputMode="search" inlist={[{ key: 1, value: 1}]} />
          
            </FormLayoutGroup>
            </FormLayout>
                </PanelHeader>

          <Group header={<Header mode="secondary">App</Header>}>

  
    <Cell expandable before={<Icon12Add />} onClick={() => setActivePanel('main')}>
      Добавить
    </Cell>
    <Cell expandable before={<Icon12Delete />} onClick={() => setActivePanel('main')}>
      Удалить
    </Cell>
    <Cell expandable before={<Icon12Services />} onClick={() => setActivePanel('main')}>
      Параметры
    </Cell>
  </Group>
              </Panel>
          
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}


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
