import { ButtonProvider } from "../components/ButtonContext";
import { ControlTowerHeader } from "../components/control-tower/ControlTowerHeader";
import { ControlTowerRealm } from "../components/control-tower/ControlTowerRealm";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <ButtonProvider>
        <div className="min-h-screen bg-background pb-12">
            {/* Now TypeScript is happy because trainerProfileData is guaranteed to be NOT null here */}
            <ControlTowerHeader />
            
            {/* You can pass the data into RunnerRealm too */}
            <ControlTowerRealm />
            
            <Footer />
        </div>
        </ButtonProvider>
    );
}