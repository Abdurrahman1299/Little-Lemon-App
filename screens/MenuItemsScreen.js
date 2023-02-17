import {
  StyleSheet,
  Text,
  View,
  SectionList,
  useColorScheme,
} from "react-native";
import {
  darkGray,
  darkYellow,
  lightGray,
  lightGreen,
  lightWhite,
  lightYellow,
} from "../assets/constants";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

// const listSeparator = () => <View style={styles.listSeparator}></View>;

export default function MenuItemsScreen() {
  const listHeader = () => (
    <Text
      style={[
        styles.listHeader,
        colorScheme === "dark" ? { color: lightYellow } : { color: darkGray },
      ]}
    >
      Menu
    </Text>
  );

  // section header component
  const SectionHeader = ({ title }) => (
    <View>
      <Text
        style={[
          styles.sectionHeader,
          colorScheme === "dark" ? { color: darkYellow } : { color: darkGray },
        ]}
      >
        {title}
      </Text>
    </View>
  );
  // each item
  const Item = ({ name, price }) => (
    <View
      style={[
        styles.item,
        colorScheme === "dark"
          ? { backgroundColor: lightGreen }
          : { backgroundColor: lightGreen },
      ]}
    >
      <Text
        style={[
          styles.innerText,
          colorScheme === "dark" ? { color: lightGray } : { color: "white" },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.innerText,
          { fontWeight: "bold" },
          colorScheme === "dark"
            ? { color: lightGray }
            : { color: lightYellow },
        ]}
      >
        {price}
      </Text>
    </View>
  );

  // color scheme
  const colorScheme = useColorScheme();
  // rendering functions
  const renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader title={title} />
  );
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark"
          ? { backgroundColor: darkGray }
          : { backgroundColor: lightWhite },
      ]}
    >
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={listHeader}
        // ItemSeparatorComponent={listSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    letterSpacing: 4,
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    textAlign: "center",
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingVertical: 16,
  },
  // listSeparator: {
  //   borderBottomWidth: 1,
  //   borderColor: yellowColor,
  // },

  sectionHeader: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 8,
    borderRadius: 8,
  },
  innerText: {
    fontSize: 18,
    color: darkGray,
  },
  // footerText: {
  //   fontSize: 18,
  //   textAlign: "center",
  //   color: "black",
  //   fontStyle: "italic",
  // },
});
