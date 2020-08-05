import { useStore, observer } from '../stores';
import { Layout, IconButton, Content } from 'notion-ui';
import Icons from '../components/Icon';
import Gallery from '../components/Gallery';

export default observer(function Index() {
  const {
    icon: { test },
  } = useStore();
  return (
    <Layout.App
      leftMenus={
        <>
          <Icons.Noticon />
          <Content.Text as="P">Noticon</Content.Text>
          <Icons.Github />
          <Content.Text as="P">Github</Content.Text>
        </>
      }
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
      <Gallery />
    </Layout.App>
  );
});
