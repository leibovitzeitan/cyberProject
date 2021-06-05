export type Store = "ivory" | "ksp";

export interface BaseItem {
  storeId: Record<Store, number>;
  price: Record<Store, number>;
  title: string;
  model: string;
  brand: string;
}

export interface CPU extends BaseItem {
  category: "CPU";
  series: string;
  cores: number;
  cache: string;
  socket: string;
  type: "Box" | "Tray";
  score: number;
}
export interface GPU extends BaseItem {
  category: "GPU";
  series: string;
  score: number;
  gpuModel: string;
  vram: string;
}
export interface MB extends BaseItem {
  category: "MB";
  socket: string;
  chipset: string;
  ramType: string;
  size?: "Micro ATX" | "ATX" | "Mini ITX";
}
export interface RAM extends BaseItem {
  category: "RAM";
  type: "DDR4" | "DDR3";
  capacity: `${number}GB`;
  speed: string;
}
export interface CPUAirCooler extends BaseItem {
  category: "CPUAirCooler";
  socket: string[];
}
export interface CPULiquidCooler extends BaseItem {
  category: "CPULiquidCooler";
  size: string;
  socket: string[];
}
export interface HDD extends BaseItem {
  category: "HDD";
  capacity: string;
  RPM: string;
}
export interface SSD extends BaseItem {
  category: "SSD";
  capacity: string;
  interface: "SATA" | "SATA III" | "PCIe" | "NVMe";
  size: string;
}
export interface PSU extends BaseItem {
  category: "PSU";
  wattage: string;
}
export interface CaseFan extends BaseItem {
  category: "caseFan";
  size: string;
}
export interface Case extends BaseItem {
  category: "case";
  type: string;
  MBFormFactor?: ["Mini ITX", "Micro ATX", "ATX"]; //does not exist in ksp
  color: string;
}
export interface OpticalDrive extends BaseItem {
  category: "opticalDrive";
  type: string;
}
export interface VoiceCard extends BaseItem {
  category: "voiceCard";
  type: string;
}
export interface WirelessCard extends BaseItem {
  category: "wirelessCard";
  type: string;
  speed: string;
}
export interface OS extends BaseItem {
  category: "OS";
  type: string;
  version: string;
  language: string;
}
