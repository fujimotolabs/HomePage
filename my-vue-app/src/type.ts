// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
export type Coproduct<T extends Record<keyof any, {}>> = {
  [K in keyof T]: Record<"type", K> & T[K];
}[keyof T];

export type Individual<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCoproduct extends Record<"type", keyof any>,
  Tag extends TCoproduct["type"]
> = Extract<TCoproduct, Record<"type", Tag>>;

export type LabMember = Coproduct<{
  Student: {
    kanjiName: string;
    kanaName: string;
    grade: Grade;
    researchField: "高性能計算" | "モバイルコンピューティング";
  };
  Professor: {
    kanjiName: string;
    kanaName: string;
    researchField: "高性能計算" | "モバイルコンピューティング";
  };
}>;
export type LabMembers = LabMember[];
export interface Student extends Individual<LabMember, "Student"> {}
export type Professor = Individual<LabMember, "Professor">;

export enum Grade {
  B3 = "B3",
  B4 = "B4",
  M1 = "M1",
  M2 = "M2",
  D1 = "D1",
  D2 = "D2",
}
