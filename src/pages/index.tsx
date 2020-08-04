import { useStore, observer } from '../stores';

export default observer(function Index() {
  const {
    icon: { test },
  } = useStore();
  return (
    <div>
      <p>Hello Next.js {test}</p>
    </div>
  );
});
