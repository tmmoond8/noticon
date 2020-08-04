import { useStore, observer } from '../stores';
import { Layout, IconButton, Content } from 'notion-ui';

export default observer(function Index() {
  const {
    icon: { test },
  } = useStore();
  return (
    <Layout.App
      leftMenus={<Content.Text as="P">Noticon</Content.Text>}
      rightMenus={
        <>
          <IconButton icon="moreHorizon" size="Big" className="MoreHorizon" />
          <IconButton icon="share" size="Big" className="Share" />
          <IconButton icon="notification" size="Big" className="Notification" />
        </>
      }
      aside={
        <ul>
          <li>menu1</li>
          <li>menu2</li>
        </ul>
      }
    >
      <p>Hello Next.js {test}</p>
    </Layout.App>
  );
});
