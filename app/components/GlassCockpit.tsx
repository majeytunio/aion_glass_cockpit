// 'use client';

// import { HeaderRealm } from './HeaderRealm';
// import { RunnerRealm } from './RunnerRealm';
// import { Footer } from './Footer';
// export const GlassCockpit = () => {
//   return (
//     <div className="min-h-screen bg-background pb-12">
//       <HeaderRealm />
//       <RunnerRealm />
//       <Footer />
//     </div>
//   );
// };





'use client';

import { HeaderRealm } from './HeaderRealm';
import { RunnerRealm } from './RunnerRealm';
import { Footer } from './Footer';
import { ButtonProvider } from './ButtonContext';

export const GlassCockpit = () => {
  return (
    <ButtonProvider> {/* Move provider here to wrap both Header and Runner */}
      <div className="min-h-screen bg-background pb-12">
        <HeaderRealm />
        <RunnerRealm />
        <Footer />
      </div>
    </ButtonProvider>
  );
};