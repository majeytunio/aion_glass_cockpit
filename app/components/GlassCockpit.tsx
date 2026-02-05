'use client';

import { HeaderRealm } from './HeaderRealm';
import { RunnerRealm } from './RunnerRealm';
import { Footer } from './Footer';
export const GlassCockpit = () => {
  return (
    <div className="min-h-screen bg-background pb-12">
      <HeaderRealm />
      <RunnerRealm />
      <Footer />
    </div>
  );
};