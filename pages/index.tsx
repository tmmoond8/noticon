import Gallery from '../components/Gallery';

const Index = (props) => {
  const { iconList } = props;
  return (
    <Gallery
      iconList={iconList}
      hitIconList={new Set(iconList.map(i => i.id))}
      device={'desktop'}
    />
  )
}

export default Index