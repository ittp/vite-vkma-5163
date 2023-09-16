
import { Group, Cell, Header } from "@vkontakte/vkui"

import { Icon12Add, Icon12ArrowDown, Icon12Delete, Icon12Services } from "@vkontakte/icons"
//onClick={() => setActivePanel('main')} 

function setActivePanel(panel: string) {

    console.log('action setactive')
}

function ButtonCard(ctx: any) {

    let items = [{ title: "Add", icon: <Icon12Add /> }]
    const CellItem = (title: string, icon: any) => <Cell expandable before={icon} >{title}</Cell>

    const CellItemsGroup = Object.values(items).map((i, k) => <CellItem key={k} title={i.title} icon={i.icon} />)
    return <Group header={<Header mode="secondary">App</Header>} children={CellItemsGroup}></Group>
}
