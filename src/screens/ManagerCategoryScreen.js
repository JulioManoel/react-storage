import { FlatList, StyleSheet, View } from "react-native"
import Title from "../components/atoms/Title"
import Search from "../components/atoms/Search"
import ListItem from "../components/atoms/ListItem"
import ItemTab from "../components/atoms/ItemTab"
import { useCallback, useState } from "react"
import FloatButton from "../components/atoms/FloatButton"

const data = [
  {
    id: 1,
    title: "Category 1",
    description: "Description 1",
    image: null,
  },
  {
    id: 2,
    title: "Category 2",
    description: "Description 2",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  },
  {
    id: 3,
    title: "Category 3",
    description: "Description 3",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  },
  {
    id: 4,
    title: "Category 4",
    description: "Description 4",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  },
  {
    id: 5,
    title: "Category 5",
    description: "Description 5",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  },
  {
    id: 6,
    title: "Category 6",
    description: "Description 6",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  },
  {
    id: 7,
    title: "Category 7",
    description: "Description 7",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  },
  {
    id: 8,
    title: "Category 8",
    description: "Description 8",
    image: 'https://60398.cdn.simplo7.net/static/60398/sku/masculino-qix-skate-am-cup-sole-series-1681241345786.jpg',
  }
]

export default ManagerCategoryScreen = () => {
  const renderItem = useCallback(({item}) => <ListItem item={item} />)

  const [list, setList] = useState(data)

  return (
    <View style={styles.container}>
      <Title title="Manage Category" />

      <Search setList={setList} data={data} />

      <FlatList
        ItemSeparatorComponent={ItemTab}
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderItem}
      />

      <FloatButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})