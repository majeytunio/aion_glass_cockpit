import { ButtonProvider } from "../components/ButtonContext";
import { ControlTowerHeader } from "../components/control-tower/ControlTowerHeader";
import { ControlTowerRealm } from "../components/control-tower/ControlTowerRealm";
import { Footer } from "../components/Footer";
import { QRModelingHeader } from "../components/qr-modeling-suite/QRModelingHeader";
import { QRModellingRealm } from "../components/qr-modeling-suite/QRModellingRealm";

export default function QRModelingSuite() {
    return (
        <ButtonProvider>
        <div className="min-h-screen bg-background pb-12">
            {/* Now TypeScript is happy because trainerProfileData is guaranteed to be NOT null here */}
            <QRModelingHeader />
            
            {/* You can pass the data into RunnerRealm too */}
            <QRModellingRealm />
            
            <Footer />
        </div>
        </ButtonProvider>
    );
}