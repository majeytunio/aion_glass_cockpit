'use client';

import { use, useState, useEffect } from 'react';
import { HeaderRealm } from '../../components/HeaderRealm';
import { RunnerRealm } from '../../components/RunnerRealm';
import { Footer } from '../../components/Footer';
import { ButtonProvider } from '../../components/ButtonContext';
import { RunnerHeader } from '@/app/components/runner/RunnerHeader';
import { RunnerRowData } from '@/app/components/RunnerRowInterface';
import { runners } from '@/app/mockup/MockupData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Runners({ params }: PageProps) {
  const { id } = use(params);
  const [runnerRowData, setRunnerRowData] = useState<RunnerRowData | null>(null);

  useEffect(() => {
    // We use 'any' here for rawRunner to bypass the initial 
    // mismatch between the mockup data types and your interface
    const rawRunner = runners.find((r: any) => r.id.toString() === id);

    if (rawRunner) {
      const formattedRunner: RunnerRowData = {
        ...rawRunner,
        id: rawRunner.id.toString(),
      };
      setRunnerRowData(formattedRunner);
    }
  }, [id]);

  // --- FIX STARTS HERE ---
  // If data hasn't loaded yet, show a loading state. 
  // This prevents passing 'null' to components that expect 'RunnerRowData'.
  if (!runnerRowData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <ButtonProvider>
      <div className="min-h-screen bg-background pb-12">
        {/* Now TypeScript is happy because runnerRowData is guaranteed to be NOT null here */}
        <RunnerHeader runnerData={runnerRowData} />
        
        {/* You can pass the data into RunnerRealm too */}
        {/* <RunnerRealm data={runnerRowData} /> */}
        
        <Footer />
      </div>
    </ButtonProvider>
  );
}