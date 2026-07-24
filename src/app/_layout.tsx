import {ClerkProvider} from '@clerk/expo'
import {tokenCache} from '@clerk/expo/token-cache'
import { Stack } from "expo-router";
import "../../global.css";

const publishablekey = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if(!publishablekey) {
  throw new Error("Add your publishable key to .env");
}

export default function RootLayout() {
  return (
  <ClerkProvider publishableKey={publishablekey} tokenCache={tokenCache}>
    <Stack screenOptions={{ headerShown: false }} />
  </ClerkProvider>
  );
}

