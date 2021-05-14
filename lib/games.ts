export interface Game {
  name: string;
  image: string;
  cpuScore: number;
  gpuScore: number;
  ramAmount: number;
  needRtx: boolean;
}
const games: Game[] = [
    {name:"After Effects", image:"/images/ae.png", cpuScore:7500, gpuScore:6000, ramAmount:32, needRtx:false},//0
    {name:"Photoshop", image:"/images/ps.png", cpuScore:6500, gpuScore:5000, ramAmount:16, needRtx:false},//1
    {name:"Premiere", image:"/images/pr.png", cpuScore:8000, gpuScore:7000, ramAmount:32, needRtx:false},//2
    {name:"Blender", image:"/images/blender.jpg", cpuScore:8500, gpuScore:7500, ramAmount:32, needRtx:false},//3
    {name:"SolidWorks", image:"/images/solidworks.png", cpuScore:8500, gpuScore:7500, ramAmount:32, needRtx:false},//4
    {name:"Maya", image:"/images/maya.jpg", cpuScore:8500, gpuScore:8000, ramAmount:32, needRtx:false},//5
    {name:"Assassin's Creed", image:"/images/ac.jpg", cpuScore:6000, gpuScore:7000, ramAmount:16, needRtx:false},//6
    {name:"Cyberpunk", image:"/images/cyberpunk.jpg", cpuScore:6000, gpuScore:8000, ramAmount:16, needRtx:true},//7
    //
    {name:"Horizon", image:"/images/horizon.jpg", cpuScore:4000, gpuScore:5000, ramAmount:16, needRtx:false},//8
    {name:"Half Life Alyx", image:"/images/half_life_alyx.jpg", cpuScore:5600, gpuScore:5000, ramAmount:12, needRtx:false},//9
    {name:"Far Cry 5", image:"/images/far-cry-5.jpg", cpuScore:5600, gpuScore:4400, ramAmount:8, needRtx:false},//10
    {name:"F1 2020", image:"/images/f12020.jpg", cpuScore:6200, gpuScore:6300, ramAmount:16, needRtx:false},//11
    {name:"Warzone", image:"/images/warzone.jpg", cpuScore:2500, gpuScore:4800, ramAmount:8, needRtx:false},//12
    {name:"Red Dead Redemption 2", image:"/images/rhr2.jpg", cpuScore:4100, gpuScore:4800, ramAmount:8, needRtx:false},//13
    {name:"Flight Simulator", image:"/images/flightsimulator.jpg", cpuScore:7500, gpuScore:10000, ramAmount:32, needRtx:true},//14
    {name:"Minecraft", image:"/images/minecraft.jpg", cpuScore:3800, gpuScore:4000, ramAmount:8, needRtx:false},//15
    {name:"Fortnite", image:"/images/fortnite.png", cpuScore:3100, gpuScore:2000, ramAmount:8, needRtx:false},//16
    {name:"League Of Leagens", image:"/images/lol.jpg", cpuScore:2500, gpuScore:1500, ramAmount:8, needRtx:false},//17
    {name:"Valorant", image:"/images/valorant.png", cpuScore:2900, gpuScore:2900, ramAmount:8, needRtx:false},//18
    {name:"GTA V", image:"/images/gtaV.png", cpuScore:2900, gpuScore:2000, ramAmount:8, needRtx:false},//19
    {name:"Word", image:"/images/Microsoft-Word-Logo.png", cpuScore:500, gpuScore:800, ramAmount:4, needRtx:false},//20
    {name:"Powerpoint", image:"/images/powerpoint.png", cpuScore:500, gpuScore:800, ramAmount:4, needRtx:false},//21
    {name:"Excel", image:"/images/Microsoft-Excel-Logo.jpg", cpuScore:500, gpuScore:800, ramAmount:4, needRtx:false},//22
    {name:"Chrome", image:"/images/Google-Chrome-logo.png", cpuScore:500, gpuScore:800, ramAmount:4, needRtx:false},//23
    {name:"Microsoft Edge", image:"/images/microsoftedgenewlogo.5.jpg", cpuScore:500, gpuScore:800, ramAmount:4, needRtx:false},//24
    {name:"Rocket League", image:"/images/Rocket_League_coverart.jpg", cpuScore:3600, gpuScore:4800, ramAmount:8, needRtx:false},//25
    {name:"Among Us", image:"/images/among-us-font.jpg", cpuScore:500, gpuScore:800, ramAmount:4, needRtx:false},//26
    {name:"Zoom", image:"/images/Zoomlogo.png", cpuScore:1000, gpuScore:1000, ramAmount:4, needRtx:false},//27
];

const cpus={low: [], mid:[]}

export default games;
