import firebase from "firebase/app";
import "firebase/firestore";
import {
  CPU,
  GPU,
  RAM,
  CPUAirCooler,
  CPULiquidCooler,
  Case,
  CaseFan,
  VoiceCard,
  PSU,
  MB,
  SSD,
  HDD,
  WirelessCard,
  OpticalDrive,
  BaseItem,
} from "../lib/types";

export interface PC {
  cpu: CPU;
  gpu: GPU;
  ram: RAM;
  mb: MB;
  CPUCooler: CPUAirCooler | CPULiquidCooler;
  psu: PSU;
  ssd: SSD;
  hdd?: HDD;
  pcase: Case;
  caseFan?: CaseFan;
  voicecard?: VoiceCard;
  wirelesscard?: WirelessCard;
  opticaldrive?: OpticalDrive;
}

export async function autoMakePc(
  cpuScore: number,
  gpuScore: number,
  ramAmount: number,
  route: string
): Promise<PC> {
  var firebaseConfig = {
    apiKey: "AIzaSyCf2OIxjAhEQQSycUX0nX8xtpKYSx2tsRc",
    authDomain: "pick-pc.firebaseapp.com",
    projectId: "pick-pc",
    storageBucket: "pick-pc.appspot.com",
    messagingSenderId: "1082477920811",
    appId: "1:1082477920811:web:82a0601771214e9dfa606e",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();
  const cpu = await db
    .collection("CPU")
    .where("score", ">=", cpuScore)
    .orderBy("score")
    .limit(1)
    .get()
    .then((res) => {
      console.log(res.docs);
      return res.docs[0].data() as CPU;
    });
  let gpu = await db
    .collection("GPU")
    .where("score", ">=", gpuScore)
    .orderBy("score")
    .limit(1)
    .get()
    .then((res) => res.docs[0].data() as GPU);
  const mb = await db
    .collection("MB")
    .where("socket", "==", cpu.socket)
    .orderBy("price")
    .limit(1)
    .get()
    .then((res) => res.docs[0].data() as MB);
  const ram = await db
    .collection("RAM")
    .where("capacity", "==", String(ramAmount) + "GB")
    .orderBy("price")
    .limit(1)
    .get()
    .then((res) => res.docs[0].data() as RAM);
  let CPUCooler: CPULiquidCooler | CPUAirCooler = undefined;
  if (route === "addicted_guy") {
    CPUCooler = await db
      .collection("CPULiquidCooler")
      .where("socket", "==", cpu.socket)
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as CPULiquidCooler);
  } else {
    CPUCooler = await db
      .collection("CPUAirCooler")
      .where("socket", "==", cpu.socket)
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as CPUAirCooler);
  }
  const psu = await db
    .collection("PSU")
    .where("wattage", ">=", gpuScore / 10)
    .limit(1)
    .get()
    .then((res) => res.docs[0].data() as PSU);
  let ssd: SSD = undefined;
  let hdd: HDD = undefined;
  let pcase: Case = undefined;

  if (route === "netflix_and_chill") {
    if (gpuScore < 2000) {
      gpu = null;
    }
    ssd = await db
      .collection("SSD")
      .where("interface", "==", "PCIe")
      .where("capacity", "==", "500GB")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as SSD);
    pcase = await db
      .collection("case")
      .where("type", "==", "Micro ATX")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as Case);
  } else if (route === "normie") {
    ssd = await db
      .collection("SSD")
      .where("interface", "==", "PCIe")
      .where("capacity", "==", "250GB")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as SSD);
    hdd = await db
      .collection("HDD")
      .where("capacity", "==", "1TB")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as HDD);
    pcase = await db
      .collection("case")
      .where("type", "==", "Midi ATX")
      .where("price", "<", 400)
      .where("price", ">", 300)
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as Case);
  } else {
    ssd = await db
      .collection("SSD")
      .where("interface", "==", "PCIe")
      .where("capacity", "==", "1TB")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as SSD);
    hdd = await db
      .collection("HDD")
      .where("capacity", "==", "4TB")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as HDD);
    pcase = await db
      .collection("case")
      .where("type", "==", "Full ATX")
      .orderBy("price")
      .limit(1)
      .get()
      .then((res) => res.docs[0].data() as Case);
  }
  console.log(cpu, gpu, ram, mb, CPUCooler, psu, ssd, hdd, pcase);
  return {
    cpu: cpu,
    gpu: gpu,
    ram: ram,
    mb: mb,
    CPUCooler: CPUCooler,
    psu: psu,
    ssd: ssd,
    hdd: hdd,
    pcase: pcase,
  };
}

export function bgColorSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return "bg-green-100";
    case "normie":
      return "bg-blue-100";
    case "netflix_and_chill":
      return "bg-red-100";

    default:
      return "bg-gray-100";
  }
}

export function itemLink(item: BaseItem): string {
  const ivoryId = item.storeId.ivory;
  const kspId = item.storeId.ksp;
  const ivoryLink = "https://www.ivory.co.il/catalog.php?id=" + ivoryId;
  const kspLink = "https://ksp.co.il/web/item/" + kspId;

  if (ivoryId && kspId) {
    if (Math.min(...Object.values(item.price)) === item.price.ivory)
      return ivoryLink;
    return kspLink;
  }
  if (ivoryId) return ivoryLink;
  return kspLink;
}
