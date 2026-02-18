export interface RunnerRowData {
    id: string,
    number: number,
    name: string,
    trainer: string,
    jockey: string,
    form: string,
    odds: string,
    weight: string,
    age: number,
    subAge: string,
    sex: string,
    sire: string,
    dam: string,
    career: string,
    lastStart: string,
    barrier: number,
    rating: number,
    np: number,  // Net Profit
    bp: number,  // Base Price
    fin: number, // Finish Time
    mrg: number, // Margin
    ocr: number, // Official Classification Rating
    hwt: number, // Handicap Weight
    subHwt: number, // Handicap Weight
    dlr: number, // Track Condition Rating
    mtx: string, // Medication Status
    jandt: number, // Jockey/Trainer combo stat
    add: number, // Additional equipment
    rightSideData?: {
        toteWP: number,
        aTheo1: number,
        aTheo2: number,
        cAlpha1: string,
        cAlpha2: string,
        fxd1: number,
        fxd2: number,
        sbt: number,
        b3: number,
        b2: number,
        b1: number,
        lpt: number,
        wap: number,
        l1: number,
        l2: number,
        l3: number,
        bfxlpt: number
    }
}