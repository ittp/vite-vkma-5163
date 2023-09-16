import * as React from 'react';
import { runTapticImpactOccurred } from '@vkontakte/vk-bridge-react';

import { useCallback, useState} from 'react'

export const Users = () => {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'Placeholder', avatarUrl: 'https://placehold.co/100' },
  ]);
  const [fetching, setFetching] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setFetching(true);
    // Вызываем виброотклик
    // > Note: в VKUI v5 необходимо возвращать результат выполнения, чтобы
    // > чтобы избежать двойного вызова runTapticImpactOccurred()
    return runTapticImpactOccurred('light');
  }, []);

  return (
    <View activePanel="users">
      <Panel id="users">
        <PanelHeader>Пользователи</PanelHeader>

        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
          <Group>
            <List>
              {users.map(({ id, name, avatarUrl }, i) => {
                return (
                  <Cell key={i} before={<Avatar src={avatarUrl} />}>
                    {name}
                  </Cell>
                );
              })}
            </List>
          </Group>
        </PullToRefresh>
      </Panel>
    </View>
  );
};