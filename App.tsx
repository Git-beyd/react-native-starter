<<<<<<< HEAD
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	return (
		<View className="mt-8 px-2">
			<Text className="text-2xl text-black dark:text-white">{title}</Text>
			<Text className="mt-2 text-lg text-black dark:text-white">
				{children}
			</Text>
		</View>
	);
}

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === "dark";

	const backgroundStyle = "bg-neutral-300 dark:bg-slate-900";

	return (
		<SafeAreaView className={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				className={backgroundStyle}
			>
				<Header />
				<View className="bg-white dark:bg-black">
					<Section title="Step One">
						Edit <Text className="font-bold">App.tsx</Text> to change this
						screen and then come back to see your edits.
					</Section>
					<Section title="See Your Changes">
						<ReloadInstructions />
					</Section>
					<Section title="Debug">
						<DebugInstructions />
					</Section>
					<Section title="Learn More">
						Read the docs to discover what to do next:
					</Section>
					<LearnMoreLinks />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 4a5e71758e0938739c09823d88cf95a3562a1d0b
