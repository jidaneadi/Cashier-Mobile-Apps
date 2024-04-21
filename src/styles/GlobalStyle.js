import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeigth : 0,
  },

  //Main Container 
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    marginBottom: 50,
  },
  //Search Style
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    marginHorizontal: 5,
    padding: 10,
    gap: 10,
    borderColor: "gray",
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: "#C8A8D6",
  },

  //Text Style
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  //Card Scroll View Style
  cardContainer: {
    height: 210,
    width: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  cardCover : {
    height: 140,
    borderRadius: 0,
  },
  cardContent : {
    padding: 10,
  },
  textCardContent : {
    fontSize: 14,
    fontWeight: "500",
  },

  //Card Scroll View in ProductScreen
  cardProductContainer: {
    height: 140,
    marginRight: 10,
    marginBottom: 10,
  },

  //Card Transaksi
  cardTransaksiContainer: {
    height: 150,
    marginRight: 4,
    marginBottom: 10,
  },

  //Card Detail Transaksi
  cardDetailTransaksiContainer: {
    height: 130,
    marginRight: 10,
    marginBottom: 10,
    // backgroundColor:"white"
  },

});
