"use client"; // Add this line at the top

import { ExploreView } from '@/components/Explore/ExploreView';
import { Layout } from '@/components/Layout/Layout';

export default function Home() {
  const handleError = (message: string) => {
    console.error(message);
    // You can also show a toast notification or an error modal here
  };

  const userContext = {
    // Provide the necessary user context here
  };

  return (
    <main>
      <Layout>
      <ExploreView 
        onError={handleError} 
        userContext={userContext} 
      />
      </Layout>
    </main>
  );
}