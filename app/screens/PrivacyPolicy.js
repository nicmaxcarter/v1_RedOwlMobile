import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import OrangeBtn from "../components/js/OrangeBtn";

export default class PrivacyPolicy extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.title}>POLICY</Text>
        <Text style={styles.content}>
          {"    "} Lorem ipsum dolor amet prism skateboard dreamcatcher,
          everyday carry wayfarers shoreditch edison bulb unicorn vinyl air
          plant gentrify. Twee put a bird on it keffiyeh, taxidermy freegan kogi
          gastropub mlkshk schlitz banjo gluten-free YOLO salvia cold-pressed.
          Banjo normcore wolf, everyday carry chillwave bushwick authentic food
          truck crucifix man bun. Four loko aesthetic health goth yuccie,
          normcore brooklyn artisan humblebrag ethical viral roof party austin.
          Literally crucifix health goth, fanny pack mumblecore knausgaard tote
          bag tattooed normcore kinfolk taiyaki 8-bit lumbersexual fashion axe
          affogato. Retro ethical vegan tousled banjo whatever squid food truck
          cardigan. Bushwick leggings 8-bit portland. Stumptown cold-pressed
          master cleanse small batch messenger bag, biodiesel tbh 8-bit four
          dollar toast affogato chillwave disrupt mumblecore put a bird on it.
          Polaroid venmo swag YOLO craft beer. Mumblecore schlitz chia,
          taxidermy 90's disrupt kale chips.
          {"    "} Lorem ipsum dolor amet prism skateboard dreamcatcher,
          everyday carry wayfarers shoreditch edison bulb unicorn vinyl air
          plant gentrify. Twee put a bird on it keffiyeh, taxidermy freegan kogi
          gastropub mlkshk schlitz banjo gluten-free YOLO salvia cold-pressed.
          Banjo normcore wolf, everyday carry chillwave bushwick authentic food
          truck crucifix man bun. Four loko aesthetic health goth yuccie,
          normcore brooklyn artisan humblebrag ethical viral roof party austin.
          Literally crucifix health goth, fanny pack mumblecore knausgaard tote
          bag tattooed normcore kinfolk taiyaki 8-bit lumbersexual fashion axe
          affogato. Retro ethical vegan tousled banjo whatever squid food truck
          cardigan. Bushwick leggings 8-bit portland. Stumptown cold-pressed
          master cleanse small batch messenger bag, biodiesel tbh 8-bit four
          dollar toast affogato chillwave disrupt mumblecore put a bird on it.
          Polaroid venmo swag YOLO craft beer. Mumblecore schlitz chia,
          taxidermy 90's disrupt kale chips.
        </Text>
        <Text style={styles.title}>TERMS OF USE</Text>
        <Text style={styles.content}>
          {"    "} Lorem ipsum dolor amet prism skateboard dreamcatcher,
          everyday carry wayfarers shoreditch edison bulb unicorn vinyl air
          plant gentrify. Twee put a bird on it keffiyeh, taxidermy freegan kogi
          gastropub mlkshk schlitz banjo gluten-free YOLO salvia cold-pressed.
          Banjo normcore wolf, everyday carry chillwave bushwick authentic food
          truck crucifix man bun. Four loko aesthetic health goth yuccie,
          normcore brooklyn artisan humblebrag ethical viral roof party austin.
          Literally crucifix health goth, fanny pack mumblecore knausgaard tote
          bag tattooed normcore kinfolk taiyaki 8-bit lumbersexual fashion axe
          affogato. Retro ethical vegan tousled banjo whatever squid food truck
          cardigan. Bushwick leggings 8-bit portland. Stumptown cold-pressed
          master cleanse small batch messenger bag, biodiesel tbh 8-bit four
          dollar toast affogato chillwave disrupt mumblecore put a bird on it.
          Polaroid venmo swag YOLO craft beer. Mumblecore schlitz chia,
          taxidermy 90's disrupt kale chips.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
    marginHorizontal: 25
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 35
  },
  content: {
    textAlign: "justify",

    fontSize: 12
  }
});
