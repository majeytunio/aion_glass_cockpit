'use client';

import { use, useState, useEffect } from 'react';
import { HeaderRealm } from '../../components/HeaderRealm';
import { RunnerRealm } from '../../components/RunnerRealm';
import { Footer } from '../../components/Footer';
import { ButtonProvider } from '../../components/ButtonContext';
import { RunnerRowData } from '@/app/components/RunnerRowInterface';
import { runners } from '@/app/mockup/MockupData';
import { JockeyProfileHeader } from '@/app/components/jockey/JockeyHeader';
import { TrainerProfileHeader } from '@/app/components/trainer/TrainerHeader';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Trainer({ params }: PageProps) {
  const { id } = use(params);
  const [trainerProfileData, setTrainerProfileData] = useState<RunnerRowData | null>(null);

  useEffect(() => {
    // We use 'any' here for rawRunner to bypass the initial 
    // mismatch between the mockup data types and your interface
    const rawRunner = runners.find((r: any) => r.id.toString() === id);

    if (rawRunner) {
      const formattedRunner: RunnerRowData = {
        ...rawRunner,
        id: rawRunner.id.toString(),
      };
      setTrainerProfileData(formattedRunner);
    }
  }, [id]);

  // --- FIX STARTS HERE ---
  // If data hasn't loaded yet, show a loading state. 
  // This prevents passing 'null' to components that expect 'RunnerRowData'.
  if (!trainerProfileData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <ButtonProvider>
      <div className="min-h-screen bg-background pb-12">
        {/* Now TypeScript is happy because trainerProfileData is guaranteed to be NOT null here */}
        <TrainerProfileHeader trainerData={trainerProfileData} />
        
        {/* You can pass the data into RunnerRealm too */}
        {/* <RunnerRealm data={runnerRowData} /> */}
        
        <Footer />
      </div>
    </ButtonProvider>
  );
}