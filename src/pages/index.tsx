import NaverMap from './Map/ui/NaverMap/NaverMap';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';

const Page = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        {/* Screen Navigation Routes */}
        <View style={styles.routeContainer}>
          <Routes>
            <Route path="/" element={<NaverMap />} />
            {/* Add other routes when needed */}
            {/* <Route path="/settings" element={<SettingsScreen />} /> */}
            {/* <Route path="/profile" element={<ProfileScreen />} /> */}
          </Routes>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.navBar}>
          <Link to="/" style={styles.navLink}>
            <Text>Home</Text>
          </Link>
          <Link to="/settings" style={styles.navLink}>
            <Text>Settings</Text>
          </Link>
          <Link to="/profile" style={styles.navLink}>
            <Text>Profile</Text>
          </Link>
        </View>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  routeContainer: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  navLink: {
    padding: 10,
  },
});

export default Page;
