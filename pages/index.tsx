import Gallery from '../components/Gallery';
import withSizes from '../lib/withSizes';

const Index = (props) => {
  const { iconList, device } = props;
  return device === 'ssr' ? null : (
    <Gallery
      iconList={iconList}
      hitIconList={new Set(iconList.map(i => i.id))}
      device={device}
    />
  )
}

export default withSizes(Index);