"use strict";

var tinderContainer = document.querySelector(".tinder");
var allCards = document.querySelectorAll(".tinder--card");
var nope = document.getElementById("nope");
var love = document.getElementById("love");
const LOAD_SIZE = 20;
const RELOAD_THRESHOLD = 2;
var remaining = LOAD_SIZE;
var life = 3;
var score = 0;
var totalLoaded = 0;
var quizDb = [
  {
    name: "Xiaomi",
    logo: "https://logo.clearbit.com/mi.com",
    origin: "China",
  },
  {
    name: "Lenovo",
    logo: "https://logo.clearbit.com/lenovo.com",
    origin: "China",
  },
  {
    name: "Oppo",
    logo: "https://logo.clearbit.com/oppo.com",
    origin: "China",
  },
  {
    name: "Vivo",
    logo: "https://logo.clearbit.com/vivo.com.br",
    origin: "China",
  },
  {
    name: "Huawei",
    logo: "https://logo.clearbit.com/huawei.com",
    origin: "China",
  },
  {
    name: "OnePlus",
    logo: "https://logo.clearbit.com/oneplus.com",
    origin: "China",
  },
  {
    name: "Coolpad",
    logo: "https://logo.clearbit.com/coolpad.us",
    origin: "China",
  },
  {
    name: "Gionee",
    logo: "https://logo.clearbit.com/gionee.com",
    origin: "China",
  },
  {
    name: "Bigo Live",
    logo: "https://logo.clearbit.com/bigo.tv",
    origin: "China",
  },
  {
    name: "Share it",
    logo: "https://logo.clearbit.com/shareitsolutions.com",
    origin: "China",
  },
  {
    name: "Beauty plus",
    logo: "https://logo.clearbit.com/beauty-plus.co.uk",
    origin: "China",
  },
  {
    name: "Helo",
    logo: "https://logo.clearbit.com/flyhelo.com",
    origin: "China",
  },
  {
    name: "ROMWE",
    logo: "https://logo.clearbit.com/romwe.com",
    origin: "China",
  },
  {
    name: "Weibo",
    logo: "https://logo.clearbit.com/weibo.com",
    origin: "China",
  },
  {
    name: "UC News",
    logo: "https://logo.clearbit.com/ucnews.in",
    origin: "China",
  },
  {
    name: "Xender",
    logo: "https://logo.clearbit.com/xender.com",
    origin: "China",
  },
  {
    name: "SHEIN",
    logo: "https://logo.clearbit.com/shein.com",
    origin: "China",
  },
  {
    name: "Clean Master",
    logo: "https://logo.clearbit.com/buycleanmaster.com",
    origin: "China",
  },
  {
    name: "QQ International",
    logo: "https://logo.clearbit.com/imqq.com",
    origin: "China",
  },
  {
    name: "Parallel Space",
    logo: "https://logo.clearbit.com/parallel-app.com",
    origin: "China",
  },
  {
    name: "UC Browser",
    logo: "https://logo.clearbit.com/ucweb.com",
    origin: "China",
  },
  {
    name: "KWAI",
    logo: "https://logo.clearbit.com/kwai.com",
    origin: "China",
  },
  {
    name: "Mail Master",
    logo: "https://logo.clearbit.com/mailxmaster.com",
    origin: "China",
  },
  {
    name: "Agricultural Bank of China",
    logo: "https://logo.clearbit.com/abchina.com",
    origin: "China",
  },
  {
    name: "Bank of China",
    logo: "https://logo.clearbit.com/boc.cn",
    origin: "China",
  },
  {
    name: "China Construction Bank",
    logo: "https://logo.clearbit.com/ccb.com",
    origin: "China",
  },
  {
    name: "China Everbright Bank",
    logo: "https://logo.clearbit.com/cebbank.com",
    origin: "China",
  },
  {
    name: "China Merchants Bank",
    logo: "https://logo.clearbit.com/cmbchina.com",
    origin: "China",
  },
  {
    name: "China Mobile",
    logo: "https://logo.clearbit.com/chinamobileltd.com",
    origin: "China",
  },
  {
    name: "China Shenhua Energy",
    logo: "https://logo.clearbit.com/csec.com",
    origin: "China",
  },
  {
    name: "China Telecom",
    logo: "https://logo.clearbit.com/chinatelecom-h.com",
    origin: "China",
  },
  {
    name: "China Unicom",
    logo: "https://logo.clearbit.com/chinaunicom.com",
    origin: "China",
  },
  {
    name: "Country Garden",
    logo: "https://logo.clearbit.com/hyanniscountrygarden.com",
    origin: "China",
  },
  {
    name: "CRRC",
    logo: "https://logo.clearbit.com/cambridgerefugees.org",
    origin: "China",
  },
  {
    name: "Hikvision",
    logo: "https://logo.clearbit.com/hikvision.com",
    origin: "China",
  },
  {
    name: "Industrial and Commercial Bank of China",
    logo: "https://logo.clearbit.com/icbc.com.cn",
    origin: "China",
  },
  {
    name: "Industrial Bank",
    logo: "https://logo.clearbit.com/industrial-bank.com",
    origin: "China",
  },
  {
    name: "Midea Group",
    logo: "https://logo.clearbit.com/midea.com",
    origin: "China",
  },
  {
    name: "Ping An Bank",
    logo: "https://logo.clearbit.com/pingan.com",
    origin: "China",
  },
  {
    name: "Qihoo 360",
    logo: "https://logo.clearbit.com/360.cn",
    origin: "China",
  },
  {
    name: "SAIC Motor",
    logo: "https://logo.clearbit.com/saicmotor.com",
    origin: "China",
  },
  {
    name: "SF Express",
    logo: "https://logo.clearbit.com/sf-express.com",
    origin: "China",
  },
  {
    name: "Shanghai Pudong Development Bank",
    logo: "https://logo.clearbit.com/spdb.com.cn",
    origin: "China",
  },
  {
    name: "Sinopec",
    logo: "https://logo.clearbit.com/sinopec.com",
    origin: "China",
  },
  {
    name: "Tencent",
    logo: "https://logo.clearbit.com/tencent.com",
    origin: "China",
  },
  {
    name: "Vanke",
    logo: "https://logo.clearbit.com/vanke.com",
    origin: "China",
  },
  {
    name: "Yili Group",
    logo: "https://logo.clearbit.com/yili.com",
    origin: "China",
  },
  {
    name: "Acer",
    logo: "https://logo.clearbit.com/acer.com",
    origin: "Taiwan",
  },
  {
    name: "alcatel",
    logo: "https://logo.clearbit.com/alcatelmobile.com",
    origin: "France",
  },
  {
    name: "Allview",
    logo: "https://logo.clearbit.com/allviewmobile.com",
    origin: "Romania",
  },
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    origin: "USA",
  },
  {
    name: "Amoi",
    logo: "https://logo.clearbit.com/amoimadrid.org",
    origin: "China",
  },
  {
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    origin: "USA",
  },
  {
    name: "Archos",
    logo: "https://logo.clearbit.com/archos.com",
    origin: "France",
  },
  {
    name: "Asus",
    logo: "https://logo.clearbit.com/asus.com",
    origin: "Taiwan",
  },
  {
    name: "AT&T",
    logo: "https://logo.clearbit.com/att.com",
    origin: "USA",
  },
  {
    name: "BlackBerry",
    logo: "https://logo.clearbit.com/blackberry.com",
    origin: "Canada",
  },
  {
    name: "BQ",
    logo: "https://logo.clearbit.com/bq.com",
    origin: "Spain",
  },
  {
    name: "Dell",
    logo: "https://logo.clearbit.com/dell.com",
    origin: "USA",
  },
  {
    name: "Ericsson",
    logo: "https://logo.clearbit.com/ericsson.com",
    origin: "Sweden",
  },
  {
    name: "Gigabyte",
    logo: "https://logo.clearbit.com/gigabyte.com",
    origin: "Taiwan",
  },
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    origin: "USA",
  },
  {
    name: "Honor",
    logo: "https://logo.clearbit.com/hihonor.com",
    origin: "China",
  },
  {
    name: "HP",
    logo: "https://logo.clearbit.com/hp.com",
    origin: "USA",
  },
  {
    name: "HTC",
    logo: "https://logo.clearbit.com/htc.com",
    origin: "Taiwan",
  },
  {
    name: "i-mobile",
    logo: "https://logo.clearbit.com/i-mobile.co.jp",
    origin: "Thailand",
  },
  {
    name: "Intex",
    logo: "https://logo.clearbit.com/intex-rus.ru",
    origin: "India",
  },
  {
    name: "Jolla",
    logo: "https://logo.clearbit.com/jolla.com",
    origin: "Finland",
  },
  {
    name: "Micromax",
    logo: "https://logo.clearbit.com/micromaxstore.ru",
    origin: "India",
  },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    origin: "USA",
  },
  {
    name: "Motorola",
    logo: "https://logo.clearbit.com/motorola.com",
    origin: "USA",
  },
  {
    name: "NEC",
    logo: "https://logo.clearbit.com/nec.com",
    origin: "Japan",
  },
  {
    name: "Nokia",
    logo: "https://logo.clearbit.com/nokia.com",
    origin: "Finland",
  },
  {
    name: "Nvidia",
    logo: "https://logo.clearbit.com/nvidia.com",
    origin: "USA",
  },
  {
    name: "Panasonic",
    logo: "https://logo.clearbit.com/panasonic.com",
    origin: "Japan",
  },
  {
    name: "Pantech",
    logo: "https://logo.clearbit.com/ivega.co.kr",
    origin: "South Korea",
  },
  {
    name: "Philips",
    logo: "https://logo.clearbit.com/philips.com",
    origin: "Netherlands",
  },
  {
    name: "Realme",
    logo: "https://logo.clearbit.com/realme.govt.nz",
    origin: "China",
  },
  {
    name: "Mobiwire",
    logo: "https://logo.clearbit.com/mobiwire.com",
    origin: "France",
  },
  {
    name: "Samsung",
    logo: "https://logo.clearbit.com/samsung.com",
    origin: "South Korea",
  },
  {
    name: "Siemens",
    logo: "https://logo.clearbit.com/siemens.com",
    origin: "Germany",
  },
  {
    name: "Sony",
    logo: "https://logo.clearbit.com/sony.net",
    origin: "Japan",
  },
  {
    name: "T-Mobile",
    logo: "https://logo.clearbit.com/t-mobile.com",
    origin: "Germany",
  },
  {
    name: "Telit",
    logo: "https://logo.clearbit.com/telit.com",
    origin: "Italy",
  },
  {
    name: "Toshiba",
    logo: "https://logo.clearbit.com/toshiba.com",
    origin: "Japan",
  },
  {
    name: "Vertu",
    logo: "https://logo.clearbit.com/vertu.com",
    origin: "UK",
  },
  {
    name: "Vodafone",
    logo: "https://logo.clearbit.com/vodafone.com",
    origin: "UK",
  },
  {
    name: "Wiko",
    logo: "https://logo.clearbit.com/wikomobile.com",
    origin: "France",
  },
  {
    name: "XOLO",
    logo: "https://logo.clearbit.com/xolo.io",
    origin: "India",
  },
  {
    name: "Yota",
    logo: "https://logo.clearbit.com/yota.ru",
    origin: "Russia",
  },
  {
    name: "BBK",
    logo: "https://logo.clearbit.com/bbkonline.com",
    origin: "China",
  },
  {
    name: "Cubot",
    logo: "https://logo.clearbit.com/cubot.net",
    origin: "China",
  },
  {
    name: "Konka",
    logo: "https://logo.clearbit.com/konka.co.za",
    origin: "China",
  },
  {
    name: "Meitu",
    logo: "https://logo.clearbit.com/meitu.com",
    origin: "China",
  },
  {
    name: "Meizu",
    logo: "https://logo.clearbit.com/meizu.com",
    origin: "China",
  },
  {
    name: "Tecno Mobile",
    logo: "https://logo.clearbit.com/tecno-mobile.com",
    origin: "China",
  },
  {
    name: "Wasam",
    logo: "https://logo.clearbit.com/wasam.hk",
    origin: "China",
  },
  {
    name: "Zopo Mobile",
    logo: "https://logo.clearbit.com/zopomobile.com",
    origin: "China",
  },
  {
    name: "ZUK Mobile",
    logo: "https://logo.clearbit.com/zuk.com",
    origin: "China",
  },
  {
    name: "Fujitsu",
    logo: "https://logo.clearbit.com/fujitsu.com",
    origin: "Japan",
  },
  {
    name: "Hitachi",
    logo: "https://logo.clearbit.com/hitachi.com",
    origin: "Japan",
  },
  {
    name: "Kyocera",
    logo: "https://logo.clearbit.com/kyocera.com",
    origin: "Japan",
  },
  {
    name: "Mitsubishi Electric",
    logo: "https://logo.clearbit.com/mitsubishielectric.co.jp",
    origin: "Japan",
  },
  {
    name: "Sansui",
    logo: "https://logo.clearbit.com/sansui1902.jp",
    origin: "Japan",
  },
  {
    name: "Iball",
    logo: "https://logo.clearbit.com/iball.co.in",
    origin: "India",
  },
  {
    name: "Intex Technologies",
    logo: "https://logo.clearbit.com/intex.in",
    origin: "India",
  },
  {
    name: "Karbonn Mobiles",
    logo: "https://logo.clearbit.com/karbonnmobiles.com",
    origin: "India",
  },
  {
    name: "HCL Technologies",
    logo: "https://logo.clearbit.com/hcl.com",
    origin: "India",
  },
  {
    name: "Jio",
    logo: "https://logo.clearbit.com/jio.com",
    origin: "India",
  },
  {
    name: "Spice Digital",
    logo: "https://logo.clearbit.com/spice-digital.net",
    origin: "India",
  },
  {
    name: "BLU Products",
    logo: "https://logo.clearbit.com/bluproducts.com",
    origin: "USA",
  },
  {
    name: "Caterpillar",
    logo: "https://logo.clearbit.com/caterpillar.com",
    origin: "USA",
  },
  {
    name: "Firefly",
    logo: "https://logo.clearbit.com/fireflyon.com",
    origin: "USA",
  },
  {
    name: "Garmin",
    logo: "https://logo.clearbit.com/garmin.com",
    origin: "USA",
  },
  {
    name: "InFocus",
    logo: "https://logo.clearbit.com/infocus.com",
    origin: "USA",
  },
  {
    name: "InfoSonics",
    logo: "https://logo.clearbit.com/infosonics.com",
    origin: "USA",
  },
  {
    name: "Society Tea",
    logo: "https://logo.clearbit.com/societytea.com",
    origin: "India",
  },
  {
    name: "Aavin",
    logo: "https://logo.clearbit.com/aavinmilk.com",
    origin: "India",
  },
  {
    name: "Action Construction Equipment",
    logo: "https://logo.clearbit.com/acecrane.in",
    origin: "India",
  },
  {
    name: "Air India",
    logo: "https://logo.clearbit.com/airindia.in",
    origin: "India",
  },
  {
    name: "Alkem Laboratories",
    logo: "https://logo.clearbit.com/alkemlabs.com",
    origin: "India",
  },
  {
    name: "Ambuja Cements",
    logo: "https://logo.clearbit.com/ambujacement.com",
    origin: "India",
  },
  {
    name: "Amrapali Jewels",
    logo: "https://logo.clearbit.com/amrapalijewels.com",
    origin: "India",
  },
  {
    name: "Amul",
    logo: "https://logo.clearbit.com/amul.com",
    origin: "India",
  },
  {
    name: "Apollo Tyres",
    logo: "https://logo.clearbit.com/apollotyres.com",
    origin: "India",
  },
  {
    name: "Ashok Leyland",
    logo: "https://logo.clearbit.com/ashokleyland.com",
    origin: "India",
  },
  {
    name: "Asian Paints",
    logo: "https://logo.clearbit.com/asianpaints.com",
    origin: "India",
  },
  {
    name: "Aurobindo Pharma",
    logo: "https://logo.clearbit.com/aurobindo.com",
    origin: "India",
  },
  {
    name: "Axis Bank",
    logo: "https://logo.clearbit.com/axisbank.com",
    origin: "India",
  },
  {
    name: "Bajaj Auto",
    logo: "https://logo.clearbit.com/bajajauto.com",
    origin: "India",
  },
  {
    name: "Bajaj Nomarks",
    logo: "https://logo.clearbit.com/bajajnomarks.com",
    origin: "India",
  },
  {
    name: "Balaji Wafers",
    logo: "https://logo.clearbit.com/balajiwafers.com",
    origin: "India",
  },
  {
    name: "Banas Dairy",
    logo: "https://logo.clearbit.com/banasdairy.coop",
    origin: "India",
  },
  {
    name: "Bank of Baroda",
    logo: "https://logo.clearbit.com/bobibanking.com",
    origin: "India",
  },
  {
    name: "Berger Paints",
    logo: "https://logo.clearbit.com/bergerpaints.com",
    origin: "India",
  },
  {
    name: "Bharat Heavy Electricals Limited",
    logo: "https://logo.clearbit.com/bhel.com",
    origin: "India",
  },
  {
    name: "Bharat Petroleum",
    logo: "https://logo.clearbit.com/bharatpetroleum.co.in",
    origin: "India",
  },
  {
    name: "Bhima Jewellers",
    logo: "https://logo.clearbit.com/bhima.com",
    origin: "India",
  },
  {
    name: "Binaca",
    logo: "https://logo.clearbit.com/binaca.com",
    origin: "India",
  },
  {
    name: "Biocon",
    logo: "https://logo.clearbit.com/biocon.com",
    origin: "India",
  },
  {
    name: "Birla Tyres",
    logo: "https://logo.clearbit.com/birlatyre.com",
    origin: "India",
  },
  {
    name: "Boroline",
    logo: "https://logo.clearbit.com/boroline.de",
    origin: "India",
  },
  {
    name: "Borosil",
    logo: "https://logo.clearbit.com/myborosil.com",
    origin: "India",
  },
  {
    name: "Brihans Natural Products",
    logo: "https://logo.clearbit.com/brihansnatural.com",
    origin: "India",
  },
  {
    name: "Cadila Pharmaceuticals",
    logo: "https://logo.clearbit.com/cadilapharma.com",
    origin: "India",
  },
  {
    name: "Cafe Coffee Day",
    logo: "https://logo.clearbit.com/cafecoffeeday.com",
    origin: "India",
  },
  {
    name: "Camlin Fine Sciences",
    logo: "https://logo.clearbit.com/camlinfs.com",
    origin: "India",
  },
  {
    name: "Century Plyboards",
    logo: "https://logo.clearbit.com/centuryply.com",
    origin: "India",
  },
  {
    name: "Ching's Secret",
    logo: "https://logo.clearbit.com/chingssecret.com",
    origin: "India",
  },
  {
    name: "Chinkara Motors",
    logo: "https://logo.clearbit.com/chinkara.co.in",
    origin: "India",
  },
  {
    name: "Cipla",
    logo: "https://logo.clearbit.com/cipla.com",
    origin: "India",
  },
  {
    name: "Cyient",
    logo: "https://logo.clearbit.com/cyient.com",
    origin: "India",
  },
  {
    name: "Dabur",
    logo: "https://logo.clearbit.com/mybeautynaturally.com",
    origin: "India",
  },
  {
    name: "Delhivery",
    logo: "https://logo.clearbit.com/delhivery.com",
    origin: "India",
  },
  {
    name: "Dipper",
    logo: "https://logo.clearbit.com/ourdipper.com",
    origin: "India",
  },
  {
    name: "Dr. Reddy's Laboratories",
    logo: "https://logo.clearbit.com/drreddys.com",
    origin: "India",
  },
  {
    name: "Durian Furniture",
    logo: "https://logo.clearbit.com/durian.in",
    origin: "India",
  },
  {
    name: "Ekart",
    logo: "https://logo.clearbit.com/ekart.be",
    origin: "India",
  },
  {
    name: "Epic",
    logo: "https://logo.clearbit.com/epic.com",
    origin: "India",
  },
  {
    name: "Everest Spices",
    logo: "https://logo.clearbit.com/everestspices.com",
    origin: "India",
  },
  {
    name: "Fabindia",
    logo: "https://logo.clearbit.com/fabindia.com",
    origin: "India",
  },
  {
    name: "Fastrack",
    logo: "https://logo.clearbit.com/fastrack.in",
    origin: "India",
  },
  {
    name: "Finolex Cables",
    logo: "https://logo.clearbit.com/finolex.com",
    origin: "India",
  },
  {
    name: "Flipkart",
    logo: "https://logo.clearbit.com/flipkart.com",
    origin: "India",
  },
  {
    name: "Force Motors",
    logo: "https://logo.clearbit.com/forcemotors.com",
    origin: "India",
  },
  {
    name: "Forest Essentials",
    logo: "https://logo.clearbit.com/forestessentialsindia.com",
    origin: "India",
  },
  {
    name: "Funskool",
    logo: "https://logo.clearbit.com/funskoolindia.com",
    origin: "India",
  },
  {
    name: "General Insurance Corporation of India",
    logo: "https://logo.clearbit.com/gicofindia.com",
    origin: "India",
  },
  {
    name: "GoAir",
    logo: "https://logo.clearbit.com/goair.in",
    origin: "India",
  },
  {
    name: "Godrej Group",
    logo: "https://logo.clearbit.com/godrej.com",
    origin: "India",
  },
  {
    name: "Gyan Dairy",
    logo: "https://logo.clearbit.com/gyandairy.com",
    origin: "India",
  },
  {
    name: "Haldiram's",
    logo: "https://logo.clearbit.com/haldiram.com",
    origin: "India",
  },
  {
    name: "Havells",
    logo: "https://logo.clearbit.com/havells.com",
    origin: "India",
  },
  {
    name: "HDFC Bank",
    logo: "https://logo.clearbit.com/hdfcbank.com",
    origin: "India",
  },
  {
    name: "Hero Cycles",
    logo: "https://logo.clearbit.com/herocycles.com",
    origin: "India",
  },
  {
    name: "Hindalco Industries",
    logo: "https://logo.clearbit.com/hindalco.com",
    origin: "India",
  },
  {
    name: "Hindustan Motors",
    logo: "https://logo.clearbit.com/hindmotor.com",
    origin: "India",
  },
  {
    name: "Hoichoi",
    logo: "https://logo.clearbit.com/hoichoi.nl",
    origin: "India",
  },
  {
    name: "ICICI Bank",
    logo: "https://logo.clearbit.com/icicibank.com",
    origin: "India",
  },
  {
    name: "ID Fresh Food",
    logo: "https://logo.clearbit.com/idfreshfood.com",
    origin: "India",
  },
  {
    name: "Indane",
    logo: "https://logo.clearbit.com/indane.es",
    origin: "India",
  },
  {
    name: "Independent TV",
    logo: "https://logo.clearbit.com/independenttv.in",
    origin: "India",
  },
  {
    name: "IndiaMART",
    logo: "https://logo.clearbit.com/indiamart.com",
    origin: "India",
  },
  {
    name: "Indian Overseas Bank",
    logo: "https://logo.clearbit.com/iob.in",
    origin: "India",
  },
  {
    name: "IndiGo",
    logo: "https://logo.clearbit.com/goindigo.in",
    origin: "India",
  },
  {
    name: "Indosolar",
    logo: "https://logo.clearbit.com/indosolar.co.in",
    origin: "India",
  },
  {
    name: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    origin: "India",
  },
  {
    name: "Infosys Consulting",
    logo: "https://logo.clearbit.com/infosysconsultinginsights.com",
    origin: "India",
  },
  {
    name: "Jain Irrigation Systems",
    logo: "https://logo.clearbit.com/jains.com",
    origin: "India",
  },
  {
    name: "Jet Airways",
    logo: "https://logo.clearbit.com/jetairways.com",
    origin: "India",
  },
  {
    name: "Joyalukkas",
    logo: "https://logo.clearbit.com/joyalukkas.com",
    origin: "India",
  },
  {
    name: "JSW Cement",
    logo: "https://logo.clearbit.com/jswcement.in",
    origin: "India",
  },
  {
    name: "JustOrbit",
    logo: "https://logo.clearbit.com/justorbit.com",
    origin: "India",
  },
  {
    name: "Kalnirnay",
    logo: "https://logo.clearbit.com/kalnirnay.com",
    origin: "India",
  },
  {
    name: "Kalyan Jewellers",
    logo: "https://logo.clearbit.com/kalyanjewellers.net",
    origin: "India",
  },
  {
    name: "KamaSutra",
    logo: "https://logo.clearbit.com/kamasutrabeurs.nl",
    origin: "India",
  },
  {
    name: "Kansai Nerolac Paints",
    logo: "https://logo.clearbit.com/nerolac.com",
    origin: "India",
  },
  {
    name: "Kaya Limited",
    logo: "https://logo.clearbit.com/kaya.in",
    origin: "India",
  },
  {
    name: "KEC International",
    logo: "https://logo.clearbit.com/kecrpg.com",
    origin: "India",
  },
  {
    name: "Kent RO Systems",
    logo: "https://logo.clearbit.com/kent.co.in",
    origin: "India",
  },
  {
    name: "Khazana Jewellery",
    logo: "https://logo.clearbit.com/khazanajewellery.com",
    origin: "India",
  },
  {
    name: "Kingfisher",
    logo: "https://logo.clearbit.com/unitedbreweries.com",
    origin: "India",
  },
  {
    name: "Kisna Diamond Jewellery",
    logo: "https://logo.clearbit.com/kisna.com",
    origin: "India",
  },
  {
    name: "Kokuyo Camlin",
    logo: "https://logo.clearbit.com/kokuyocamlin.com",
    origin: "India",
  },
  {
    name: "Larsen & Toubro",
    logo: "https://logo.clearbit.com/larsentoubro.com",
    origin: "India",
  },
  {
    name: "Levista",
    logo: "https://logo.clearbit.com/levista.ch",
    origin: "India",
  },
  {
    name: "Liberty Shoes",
    logo: "https://logo.clearbit.com/libertyshoesonline.com",
    origin: "India",
  },
  {
    name: "Limtex",
    logo: "https://logo.clearbit.com/limtex.com",
    origin: "India",
  },
  {
    name: "Liril",
    logo: "https://logo.clearbit.com/liril.net",
    origin: "India",
  },
  {
    name: "Mahindra Group",
    logo: "https://logo.clearbit.com/mahindratelephonics.com",
    origin: "India",
  },
  {
    name: "Malabar Gold and Diamonds",
    logo: "https://logo.clearbit.com/malabargoldanddiamonds.com",
    origin: "India",
  },
  {
    name: "Mankind Pharma",
    logo: "https://logo.clearbit.com/mankindpharma.com",
    origin: "India",
  },
  {
    name: "Max Group",
    logo: "https://logo.clearbit.com/maxskillfirst.com",
    origin: "India",
  },
  {
    name: "Metro Shoes",
    logo: "https://logo.clearbit.com/metroshoes.com.pk",
    origin: "India",
  },
  {
    name: "Milk Mantra",
    logo: "https://logo.clearbit.com/milkmantra.com",
    origin: "India",
  },
  {
    name: "Mindtree",
    logo: "https://logo.clearbit.com/mindtree.com",
    origin: "India",
  },
  {
    name: "Moods Condoms",
    logo: "https://logo.clearbit.com/moodsplanet.com",
    origin: "India",
  },
  {
    name: "Mother Dairy",
    logo: "https://logo.clearbit.com/motherdairy.com",
    origin: "India",
  },
  {
    name: "MTR Foods",
    logo: "https://logo.clearbit.com/mtrfoods.com",
    origin: "India",
  },
  {
    name: "Mufti",
    logo: "https://logo.clearbit.com/muftijeans.in",
    origin: "India",
  },
  {
    name: "Murugappa Group",
    logo: "https://logo.clearbit.com/murugappa.com",
    origin: "India",
  },
  {
    name: "Natural Ice Cream",
    logo: "https://logo.clearbit.com/naturalicecreams.in",
    origin: "India",
  },
  {
    name: "NBC Bearings",
    logo: "https://logo.clearbit.com/nbcbearings.com",
    origin: "India",
  },
  {
    name: "Nivia Sports",
    logo: "https://logo.clearbit.com/niviasports.com",
    origin: "India",
  },
  {
    name: "Nuziveedu Seeds",
    logo: "https://logo.clearbit.com/nuziveeduseeds.com",
    origin: "India",
  },
  {
    name: "The Oberoi Group",
    logo: "https://logo.clearbit.com/oberoigroup.com",
    origin: "India",
  },
  {
    name: "Orb Energy",
    logo: "https://logo.clearbit.com/orbenergy.com",
    origin: "India",
  },
  {
    name: "Orient Electric",
    logo: "https://logo.clearbit.com/orientelectric.com",
    origin: "India",
  },
  {
    name: "Oswald Labs",
    logo: "https://logo.clearbit.com/oswaldlabs.com",
    origin: "India",
  },
  {
    name: "Parachute",
    logo: "https://logo.clearbit.com/parachutefonts.com",
    origin: "India",
  },
  {
    name: "Parle Products",
    logo: "https://logo.clearbit.com/parleproducts.com",
    origin: "India",
  },
  {
    name: "Patanjali Ayurved",
    logo: "https://logo.clearbit.com/patanjaliayurved.net",
    origin: "India",
  },
  {
    name: "Paytm",
    logo: "https://logo.clearbit.com/paytm.com",
    origin: "India",
  },
  {
    name: "PC Jeweller",
    logo: "https://logo.clearbit.com/pcjeweller.com",
    origin: "India",
  },
  {
    name: "Performax",
    logo: "https://logo.clearbit.com/performaxgyms.com",
    origin: "India",
  },
  {
    name: "PhonePe",
    logo: "https://logo.clearbit.com/phonepe.com",
    origin: "India",
  },
  {
    name: "Piramal Glass",
    logo: "https://logo.clearbit.com/piramalglass.com",
    origin: "India",
  },
  {
    name: "Quick Heal",
    logo: "https://logo.clearbit.com/quickheal.com",
    origin: "India",
  },
  {
    name: "Rajesh Masala",
    logo: "https://logo.clearbit.com/rajeshmasala.com",
    origin: "India",
  },
  {
    name: "Ramco Systems",
    logo: "https://logo.clearbit.com/ramco.com",
    origin: "India",
  },
  {
    name: "Rane Group",
    logo: "https://logo.clearbit.com/ranegroup.com",
    origin: "India",
  },
  {
    name: "RBL Bank",
    logo: "https://logo.clearbit.com/rblbank.com",
    origin: "India",
  },
  {
    name: "ReNew Power",
    logo: "https://logo.clearbit.com/renewpower.in",
    origin: "India",
  },
  {
    name: "Rolta",
    logo: "https://logo.clearbit.com/rolta.com",
    origin: "India",
  },
  {
    name: "Royal Enfield",
    logo: "https://logo.clearbit.com/royalenfield.com",
    origin: "India",
  },
  {
    name: "Satya Paul",
    logo: "https://logo.clearbit.com/satyapaul.com",
    origin: "India",
  },
  {
    name: "Savita Oil Technologies Limited",
    logo: "https://logo.clearbit.com/savita.com",
    origin: "India",
  },
  {
    name: "Shakti Pumps",
    logo: "https://logo.clearbit.com/shaktipumps.com",
    origin: "India",
  },
  {
    name: "Shalimar Paints",
    logo: "https://logo.clearbit.com/shalimarpaints.com",
    origin: "India",
  },
  {
    name: "ShopClues",
    logo: "https://logo.clearbit.com/shopclues.com",
    origin: "India",
  },
  {
    name: "Siti Networks",
    logo: "https://logo.clearbit.com/sitinetworks.com",
    origin: "India",
  },
  {
    name: "Skipper Limited",
    logo: "https://logo.clearbit.com/skipperlimited.com",
    origin: "India",
  },
  {
    name: "Snapdeal",
    logo: "https://logo.clearbit.com/snapdeal.com",
    origin: "India",
  },
  {
    name: "Sonodyne",
    logo: "https://logo.clearbit.com/sonodyne.com",
    origin: "India",
  },
  {
    name: "SpiceJet",
    logo: "https://logo.clearbit.com/spicejet.com",
    origin: "India",
  },
  {
    name: "Su-Kam Power Systems",
    logo: "https://logo.clearbit.com/su-kam.com",
    origin: "India",
  },
  {
    name: "Sun Direct",
    logo: "https://logo.clearbit.com/sundirect.in",
    origin: "India",
  },
  {
    name: "Sylvania",
    logo: "https://logo.clearbit.com/sylvania-lighting.com",
    origin: "India",
  },
  {
    name: "Taj Hotels",
    logo: "https://logo.clearbit.com/tajhotels.com",
    origin: "India",
  },
  {
    name: "Tanishq",
    logo: "https://logo.clearbit.com/tanishq.co.in",
    origin: "India",
  },
  {
    name: "Tata Consumer Products",
    logo: "https://logo.clearbit.com/tataconsumer.com",
    origin: "India",
  },
  {
    name: "Tata Group",
    logo: "https://logo.clearbit.com/tata.com",
    origin: "India",
  },
  {
    name: "Tata Motors",
    logo: "https://logo.clearbit.com/tatamotors.com",
    origin: "India",
  },
  {
    name: "Tata Salt",
    logo: "https://logo.clearbit.com/tatasalt.com",
    origin: "India",
  },
  {
    name: "Tata Sky",
    logo: "https://logo.clearbit.com/tatasky.com",
    origin: "India",
  },
  {
    name: "Times Internet",
    logo: "https://logo.clearbit.com/timesinternet.in",
    origin: "India",
  },
  {
    name: "TYKA Sports",
    logo: "https://logo.clearbit.com/tyka.com",
    origin: "India",
  },
  {
    name: "UltraTech Cement",
    logo: "https://logo.clearbit.com/ultratechcement.com",
    origin: "India",
  },
  {
    name: "Union Bank of India",
    logo: "https://logo.clearbit.com/unionbankofindia.co.in",
    origin: "India",
  },
  {
    name: "Vadilal",
    logo: "https://logo.clearbit.com/vadilalicecreams.com",
    origin: "India",
  },
  {
    name: "Vikram Solar",
    logo: "https://logo.clearbit.com/vikramsolar.com",
    origin: "India",
  },
  {
    name: "VIP Industries",
    logo: "https://logo.clearbit.com/vipindustries.co.in",
    origin: "India",
  },
  {
    name: "Vistara",
    logo: "https://logo.clearbit.com/airvistara.com",
    origin: "India",
  },
  {
    name: "Wildcraft",
    logo: "https://logo.clearbit.com/wildcraft.com",
    origin: "India",
  },
  {
    name: "Wok Express",
    logo: "https://logo.clearbit.com/wokexpress.co.nz",
    origin: "India",
  },
  {
    name: "Zeta India",
    logo: "https://logo.clearbit.com/zeta.tech",
    origin: "India",
  },
  {
    name: "Air China",
    logo: "https://logo.clearbit.com/airchina.com",
    origin: "China",
  },
  {
    name: "Air Travel",
    logo: "https://logo.clearbit.com/airtravelcorp.co.uk",
    origin: "China",
  },
  {
    name: "Alibaba Group",
    logo: "https://logo.clearbit.com/alibabagroup.com",
    origin: "China",
  },
  {
    name: "Alibaba Pictures",
    logo: "https://logo.clearbit.com/alibabapictures.com",
    origin: "China",
  },
  {
    name: "AliOS",
    logo: "https://logo.clearbit.com/alios.com",
    origin: "China",
  },
  {
    name: "Alipay",
    logo: "https://logo.clearbit.com/alipay.com",
    origin: "China",
  },
  {
    name: "Allwinner Technology",
    logo: "https://logo.clearbit.com/allwinnertech.com",
    origin: "China",
  },
  {
    name: "Anker",
    logo: "https://logo.clearbit.com/anker.com",
    origin: "China",
  },
  {
    name: "Baidu",
    logo: "https://logo.clearbit.com/baidu.com",
    origin: "China",
  },
  {
    name: "Balabala",
    logo: "https://logo.clearbit.com/balabala.com.cn",
    origin: "China",
  },
  {
    name: "Bank of Beijing",
    logo: "https://logo.clearbit.com/bankofbeijing.com.cn",
    origin: "China",
  },
  {
    name: "BBMG",
    logo: "https://logo.clearbit.com/bbmg.com.cn",
    origin: "China",
  },
  {
    name: "Bisu",
    logo: "https://logo.clearbit.com/bisu.com.tr",
    origin: "China",
  },
  {
    name: "Borqs",
    logo: "https://logo.clearbit.com/borqs.com",
    origin: "China",
  },
  {
    name: "Bosideng",
    logo: "https://logo.clearbit.com/bosidengus.com",
    origin: "China",
  },
  {
    name: "Broad Group",
    logo: "https://logo.clearbit.com/broad.com",
    origin: "China",
  },
  {
    name: "ByteDance",
    logo: "https://logo.clearbit.com/bytedance.com",
    origin: "China",
  },
  {
    name: "Changan Automobile",
    logo: "https://logo.clearbit.com/changan.com.cn",
    origin: "China",
  },
  {
    name: "Cheetah Mobile",
    logo: "https://logo.clearbit.com/cmcm.com",
    origin: "China",
  },
  {
    name: "China BlueChemical",
    logo: "https://logo.clearbit.com/chinabluechem.com.cn",
    origin: "China",
  },
  {
    name: "China Development Bank",
    logo: "https://logo.clearbit.com/cdb.com.cn",
    origin: "China",
  },
  {
    name: "China Southern Airlines",
    logo: "https://logo.clearbit.com/csair.com",
    origin: "China",
  },
  {
    name: "ChinaCache",
    logo: "https://logo.clearbit.com/chinacache.com",
    origin: "China",
  },
  {
    name: "Chunlan Group",
    logo: "https://logo.clearbit.com/chunlan.com",
    origin: "China",
  },
  {
    name: "CITIC Group",
    logo: "https://logo.clearbit.com/citic.com",
    origin: "China",
  },
  {
    name: "Comac",
    logo: "https://logo.clearbit.com/comac.cc",
    origin: "China",
  },
  {
    name: "COSCO",
    logo: "https://logo.clearbit.com/cosco.in",
    origin: "China",
  },
  {
    name: "Datang Telecom Group",
    logo: "https://logo.clearbit.com/datanggroup.cn",
    origin: "China",
  },
  {
    name: "Datang Telecom Technology",
    logo: "https://logo.clearbit.com/datang.com",
    origin: "China",
  },
  {
    name: "Deepcool",
    logo: "https://logo.clearbit.com/deepcool.com",
    origin: "China",
  },
  {
    name: "Deepin",
    logo: "https://logo.clearbit.com/deepin.org",
    origin: "China",
  },
  {
    name: "DiDi",
    logo: "https://logo.clearbit.com/didiglobal.com",
    origin: "China",
  },
  {
    name: "DJI",
    logo: "https://logo.clearbit.com/dji.com",
    origin: "China",
  },
  {
    name: "Dongfang Electric",
    logo: "https://logo.clearbit.com/dongfang.com.cn",
    origin: "China",
  },
  {
    name: "Double Coin",
    logo: "https://logo.clearbit.com/doublecoin.io",
    origin: "China",
  },
  {
    name: "Ecovacs Robotics",
    logo: "https://logo.clearbit.com/ecovacs.com",
    origin: "China",
  },
  {
    name: "Edifier",
    logo: "https://logo.clearbit.com/edifier.com.ua",
    origin: "China",
  },
  {
    name: "Envision Energy",
    logo: "https://logo.clearbit.com/envision-group.com",
    origin: "China",
  },
  {
    name: "ERKE",
    logo: "https://logo.clearbit.com/erke.com",
    origin: "China",
  },
  {
    name: "ET Solar",
    logo: "https://logo.clearbit.com/etsolar.cn",
    origin: "China",
  },
  {
    name: "Fat Shark",
    logo: "https://logo.clearbit.com/fatshark.com",
    origin: "China",
  },
  {
    name: "Feiyue",
    logo: "https://logo.clearbit.com/feiyue-shoes.com",
    origin: "China",
  },
  {
    name: "Focus Media",
    logo: "https://logo.clearbit.com/focusmediaads.com",
    origin: "China",
  },
  {
    name: "Foscam",
    logo: "https://logo.clearbit.com/foscam.us",
    origin: "China",
  },
  {
    name: "Foton Motor",
    logo: "https://logo.clearbit.com/foton-global.com",
    origin: "China",
  },
  {
    name: "GAC Group",
    logo: "https://logo.clearbit.com/group-gac.com",
    origin: "China",
  },
  {
    name: "Geely",
    logo: "https://logo.clearbit.com/geely.com",
    origin: "China",
  },
  {
    name: "Goertek",
    logo: "https://logo.clearbit.com/goertek.com",
    origin: "China",
  },
  {
    name: "Golden Dragon",
    logo: "https://logo.clearbit.com/goldendragonllc.com",
    origin: "China",
  },
  {
    name: "Goldwind",
    logo: "https://logo.clearbit.com/goldwindglobal.com",
    origin: "China",
  },
  {
    name: "Great Wall Motors",
    logo: "https://logo.clearbit.com/gwm.com.cn",
    origin: "China",
  },
  {
    name: "GstarCAD",
    logo: "https://logo.clearbit.com/gstarcad.net",
    origin: "China",
  },
  {
    name: "Guosen Securities",
    logo: "https://logo.clearbit.com/guosen.com.cn",
    origin: "China",
  },
  {
    name: "Hainan Airlines",
    logo: "https://logo.clearbit.com/hnair.com",
    origin: "China",
  },
  {
    name: "Hanergy",
    logo: "https://logo.clearbit.com/hanergymobileenergy.com",
    origin: "China",
  },
  {
    name: "Harbin Electric",
    logo: "https://logo.clearbit.com/harbin-electric.com",
    origin: "China",
  },
  {
    name: "Hefei Meiling",
    logo: "https://logo.clearbit.com/meiling.com",
    origin: "China",
  },
  {
    name: "HiFiMan",
    logo: "https://logo.clearbit.com/hifiman.com.ar",
    origin: "China",
  },
  {
    name: "Higer Bus",
    logo: "https://logo.clearbit.com/higer.com.br",
    origin: "China",
  },
  {
    name: "HiSilicon",
    logo: "https://logo.clearbit.com/hisilicon.com",
    origin: "China",
  },
  {
    name: "HiSoft",
    logo: "https://logo.clearbit.com/hisoft.pk",
    origin: "China",
  },
  {
    name: "HNA Group",
    logo: "https://logo.clearbit.com/hnagroup.com",
    origin: "China",
  },
  {
    name: "Hongqi",
    logo: "https://logo.clearbit.com/faw-hongqi.com.cn",
    origin: "China",
  },
  {
    name: "Huaxia Bank",
    logo: "https://logo.clearbit.com/hxb.com.cn",
    origin: "China",
  },
  {
    name: "Huazhu Hotels Group",
    logo: "https://logo.clearbit.com/huazhu.com",
    origin: "China",
  },
  {
    name: "Infinix Mobile",
    logo: "https://logo.clearbit.com/infinixmobility.com",
    origin: "China",
  },
  {
    name: "IQIYI",
    logo: "https://logo.clearbit.com/iq.com",
    origin: "China",
  },
  {
    name: "JAC Motors",
    logo: "https://logo.clearbit.com/jac.com.cn",
    origin: "China",
  },
  {
    name: "JD.com",
    logo: "https://logo.clearbit.com/jd.com",
    origin: "China",
  },
  {
    name: "Joox",
    logo: "https://logo.clearbit.com/joox.io",
    origin: "China",
  },
  {
    name: "Joyou",
    logo: "https://logo.clearbit.com/joyou.com",
    origin: "China",
  },
  {
    name: "Keep",
    logo: "https://logo.clearbit.com/keep.com",
    origin: "China",
  },
  {
    name: "Kimberlite Diamond",
    logo: "https://logo.clearbit.com/kimberlite.com.cn",
    origin: "China",
  },
  {
    name: "Kingsoft",
    logo: "https://logo.clearbit.com/kingsoft.com",
    origin: "China",
  },
  {
    name: "Kispa",
    logo: "https://logo.clearbit.com/kispa.org",
    origin: "China",
  },
  {
    name: "Kongzhong",
    logo: "https://logo.clearbit.com/kongzhong.com",
    origin: "China",
  },
  {
    name: "Linglong Tire",
    logo: "https://logo.clearbit.com/linglongtire.com",
    origin: "China",
  },
  {
    name: "Luckin Coffee",
    logo: "https://logo.clearbit.com/luckincoffee.com",
    origin: "China",
  },
  {
    name: "Lucky Air",
    logo: "https://logo.clearbit.com/luckyairinc.com",
    origin: "China",
  },
  {
    name: "MicroPort",
    logo: "https://logo.clearbit.com/microport.com.cn",
    origin: "China",
  },
  {
    name: "Mobvoi",
    logo: "https://logo.clearbit.com/mobvoi.com",
    origin: "China",
  },
  {
    name: "Monton Sports",
    logo: "https://logo.clearbit.com/montonsports.com",
    origin: "China",
  },
  {
    name: "NetDragon Websoft",
    logo: "https://logo.clearbit.com/netdragon.com",
    origin: "China",
  },
  {
    name: "NetEase",
    logo: "https://logo.clearbit.com/163.com",
    origin: "China",
  },
  {
    name: "Neusoft",
    logo: "https://logo.clearbit.com/neusoft.com",
    origin: "China",
  },
  {
    name: "Nexgo",
    logo: "https://logo.clearbit.com/nexgo.cn",
    origin: "China",
  },
  {
    name: "NIO",
    logo: "https://logo.clearbit.com/nio.com",
    origin: "China",
  },
  {
    name: "Nubia Technology",
    logo: "https://logo.clearbit.com/nubia.com",
    origin: "China",
  },
  {
    name: "Oppo Digital",
    logo: "https://logo.clearbit.com/oppodigital.com",
    origin: "China",
  },
  {
    name: "Pactera",
    logo: "https://logo.clearbit.com/pactera.com",
    origin: "China",
  },
  {
    name: "Quantum Hi-tech",
    logo: "https://logo.clearbit.com/quantumhitech.com",
    origin: "China",
  },
  {
    name: "RIGOL Technologies",
    logo: "https://logo.clearbit.com/rigol.com",
    origin: "China",
  },
  {
    name: "Roewe",
    logo: "https://logo.clearbit.com/roewe.com.cn",
    origin: "China",
  },
  {
    name: "Royole",
    logo: "https://logo.clearbit.com/royole.com",
    origin: "China",
  },
  {
    name: "Sanhua",
    logo: "https://logo.clearbit.com/sanhuausa.com",
    origin: "China",
  },
  {
    name: "Senova",
    logo: "https://logo.clearbit.com/senovadental.com",
    origin: "China",
  },
  {
    name: "SG Automotive",
    logo: "https://logo.clearbit.com/sgautomotive.be",
    origin: "China",
  },
  {
    name: "Shenzhen Airlines",
    logo: "https://logo.clearbit.com/shenzhenair.com",
    origin: "China",
  },
  {
    name: "Sichuan Airlines",
    logo: "https://logo.clearbit.com/sichuanair.com",
    origin: "China",
  },
  {
    name: "Sinovac Biotech",
    logo: "https://logo.clearbit.com/sinovac.com",
    origin: "China",
  },
  {
    name: "SIUI",
    logo: "https://logo.clearbit.com/siui.com",
    origin: "China",
  },
  {
    name: "Sky-Watcher",
    logo: "https://logo.clearbit.com/skywatcherusa.com",
    origin: "China",
  },
  {
    name: "Skyworth",
    logo: "https://logo.clearbit.com/skyworth.net",
    origin: "China",
  },
  {
    name: "Sogou",
    logo: "https://logo.clearbit.com/sogou.com",
    origin: "China",
  },
  {
    name: "Sohu",
    logo: "https://logo.clearbit.com/sohu.com",
    origin: "China",
  },
  {
    name: "Suning.com",
    logo: "https://logo.clearbit.com/suning.cn",
    origin: "China",
  },
  {
    name: "Suparna Airlines",
    logo: "https://logo.clearbit.com/yzr.com.cn",
    origin: "China",
  },
  {
    name: "SuperMap",
    logo: "https://logo.clearbit.com/supermap.com",
    origin: "China",
  },
  {
    name: "Tasly",
    logo: "https://logo.clearbit.com/tasly.com",
    origin: "China",
  },
  {
    name: "TBEA",
    logo: "https://logo.clearbit.com/tbea.com",
    origin: "China",
  },
  {
    name: "TikTok",
    logo: "https://logo.clearbit.com/tiktok.com",
    origin: "China",
  },
  {
    name: "Topray Solar",
    logo: "https://logo.clearbit.com/topraysolar.com",
    origin: "China",
  },
  {
    name: "TouchPal",
    logo: "https://logo.clearbit.com/touchpal.com",
    origin: "China",
  },
  {
    name: "Toutiao",
    logo: "https://logo.clearbit.com/toutiao.com",
    origin: "China",
  },
  {
    name: "TP-Link",
    logo: "https://logo.clearbit.com/kolaykurulum.net",
    origin: "China",
  },
  {
    name: "Trina Solar",
    logo: "https://logo.clearbit.com/trinasolar.com",
    origin: "China",
  },
  {
    name: "Trip.com Group",
    logo: "https://logo.clearbit.com/ctrip.com",
    origin: "China",
  },
  {
    name: "Umidigi",
    logo: "https://logo.clearbit.com/umidigi.com",
    origin: "China",
  },
  {
    name: "Unisoc",
    logo: "https://logo.clearbit.com/unisoc.com",
    origin: "China",
  },
  {
    name: "Unisound",
    logo: "https://logo.clearbit.com/unisound.us",
    origin: "China",
  },
  {
    name: "Vatti",
    logo: "https://logo.clearbit.com/vatti.com.cn",
    origin: "China",
  },
  {
    name: "Vernee",
    logo: "https://logo.clearbit.com/vernee.cc",
    origin: "China",
  },
  {
    name: "VOLFONE",
    logo: "https://logo.clearbit.com/volfone.com",
    origin: "China",
  },
  {
    name: "Wanda Group",
    logo: "https://logo.clearbit.com/wanda-group.com",
    origin: "China",
  },
  {
    name: "WeChat",
    logo: "https://logo.clearbit.com/wechat.com",
    origin: "China",
  },
  {
    name: "Weichai Power",
    logo: "https://logo.clearbit.com/weichai.com.vn",
    origin: "China",
  },
  {
    name: "White Rabbit",
    logo: "https://logo.clearbit.com/consultantsussex.com",
    origin: "China",
  },
  {
    name: "WPS Office",
    logo: "https://logo.clearbit.com/wps.com",
    origin: "China",
  },
  {
    name: "WuXi AppTec",
    logo: "https://logo.clearbit.com/wuxiapptec.com",
    origin: "China",
  },
  {
    name: "Yema Auto",
    logo: "https://logo.clearbit.com/yemaglobal.com",
    origin: "China",
  },
  {
    name: "YI Technology",
    logo: "https://logo.clearbit.com/yitechnology.com",
    origin: "China",
  },
  {
    name: "Yiynova",
    logo: "https://logo.clearbit.com/yiynova.eu",
    origin: "China",
  },
  {
    name: "Yonyou",
    logo: "https://logo.clearbit.com/yonyou.com.my",
    origin: "China",
  },
  {
    name: "Yutong",
    logo: "https://logo.clearbit.com/yutongluo.com",
    origin: "China",
  },
  {
    name: "Yuyuan Tourist Mart",
    logo: "https://logo.clearbit.com/yuyuantm.com.cn",
    origin: "China",
  },
  {
    name: "Zoomlion",
    logo: "https://logo.clearbit.com/zoomlion.com.tr",
    origin: "China",
  },
  {
    name: "ZPMC",
    logo: "https://logo.clearbit.com/zpmc.com",
    origin: "China",
  },
  {
    name: "4FRNT Skis",
    logo: "https://logo.clearbit.com/4frnt.com",
    origin: "USA",
  },
  {
    name: "Altra Running",
    logo: "https://logo.clearbit.com/altrarunning.com",
    origin: "USA",
  },
  {
    name: "Ametek",
    logo: "https://logo.clearbit.com/ametek.com",
    origin: "USA",
  },
  {
    name: "Anastasia Beverly Hills",
    logo: "https://logo.clearbit.com/anastasiabeverlyhills.com",
    origin: "USA",
  },
  {
    name: "Anchor Hocking",
    logo: "https://logo.clearbit.com/anchorhocking.com",
    origin: "USA",
  },
  {
    name: "Angellift",
    logo: "https://logo.clearbit.com/angellift.org",
    origin: "USA",
  },
  {
    name: "Applied Aeronautics",
    logo: "https://logo.clearbit.com/appliedaeronautics.com",
    origin: "USA",
  },
  {
    name: "Arc Machines",
    logo: "https://logo.clearbit.com/arcmachines.com",
    origin: "USA",
  },
  {
    name: "Aroma Housewares",
    logo: "https://logo.clearbit.com/aroma-housewares.com",
    origin: "USA",
  },
  {
    name: "Beech-Nut",
    logo: "https://logo.clearbit.com/beechnut.com",
    origin: "USA",
  },
  {
    name: "Beechcraft",
    logo: "https://logo.clearbit.com/beechcraft.co.uk",
    origin: "USA",
  },
  {
    name: "Belber",
    logo: "https://logo.clearbit.com/belber.com",
    origin: "USA",
  },
  {
    name: "Blackhawk",
    logo: "https://logo.clearbit.com/blackhawk.com",
    origin: "USA",
  },
  {
    name: "BorgWarner",
    logo: "https://logo.clearbit.com/borgwarner.com",
    origin: "USA",
  },
  {
    name: "Buena Vista",
    logo: "https://logo.clearbit.com/buenavista-ffm.de",
    origin: "USA",
  },
  {
    name: "Case IH",
    logo: "https://logo.clearbit.com/shopcaseih.com",
    origin: "USA",
  },
  {
    name: "Caswell-Massey",
    logo: "https://logo.clearbit.com/caswellmassey.com",
    origin: "USA",
  },
  {
    name: "Charmin",
    logo: "https://logo.clearbit.com/charmin.com",
    origin: "USA",
  },
  {
    name: "Chex",
    logo: "https://logo.clearbit.com/chex.org.uk",
    origin: "USA",
  },
  {
    name: "Chobani",
    logo: "https://logo.clearbit.com/chobani.com",
    origin: "USA",
  },
  {
    name: "Circuit Check",
    logo: "https://logo.clearbit.com/circuitcheck.com",
    origin: "USA",
  },
  {
    name: "Cirrus Logic",
    logo: "https://logo.clearbit.com/cirrus.com",
    origin: "USA",
  },
  {
    name: "Clorox",
    logo: "https://logo.clearbit.com/stopmrsanow.org",
    origin: "USA",
  },
  {
    name: "The Coca-Cola Company",
    logo: "https://logo.clearbit.com/coca-colacompany.com",
    origin: "USA",
  },
  {
    name: "Colgate",
    logo: "https://logo.clearbit.com/colgate.com",
    origin: "USA",
  },
  {
    name: "Cottonelle",
    logo: "https://logo.clearbit.com/cottonelle.com",
    origin: "USA",
  },
  {
    name: "Craftsman",
    logo: "https://logo.clearbit.com/craftsman.com",
    origin: "USA",
  },
  {
    name: "Crayola",
    logo: "https://logo.clearbit.com/crayola.com",
    origin: "USA",
  },
  {
    name: "Cuisinart",
    logo: "https://logo.clearbit.com/cuisinart.com",
    origin: "USA",
  },
  {
    name: "Culligan",
    logo: "https://logo.clearbit.com/culliganofaustin.com",
    origin: "USA",
  },
  {
    name: "Dentsply Sirona",
    logo: "https://logo.clearbit.com/dentsplysirona.com",
    origin: "USA",
  },
  {
    name: "Dermalogica",
    logo: "https://logo.clearbit.com/dermalogica.com",
    origin: "USA",
  },
  {
    name: "DeSoto",
    logo: "https://logo.clearbit.com/desotobrand.com",
    origin: "USA",
  },
  {
    name: "DeWalt",
    logo: "https://logo.clearbit.com/dewalt.com",
    origin: "USA",
  },
  {
    name: "Dexter-Russell",
    logo: "https://logo.clearbit.com/dexter1818.com",
    origin: "USA",
  },
  {
    name: "Diebold Nixdorf",
    logo: "https://logo.clearbit.com/dieboldnixdorf.com",
    origin: "USA",
  },
  {
    name: "Dodge",
    logo: "https://logo.clearbit.com/dodge.com",
    origin: "USA",
  },
  {
    name: "Domino's Pizza",
    logo: "https://logo.clearbit.com/dominos.com",
    origin: "USA",
  },
  {
    name: "Donald Duck",
    logo: "https://logo.clearbit.com/donaldduck.nl",
    origin: "USA",
  },
  {
    name: "Dune Jewelry",
    logo: "https://logo.clearbit.com/dunejewelry.com",
    origin: "USA",
  },
  {
    name: "Early Times",
    logo: "https://logo.clearbit.com/earlytimes.com",
    origin: "USA",
  },
  {
    name: "Eastpak",
    logo: "https://logo.clearbit.com/eastpak.com",
    origin: "USA",
  },
  {
    name: "Elecraft",
    logo: "https://logo.clearbit.com/elecraft.com",
    origin: "USA",
  },
  {
    name: "Electro-Voice",
    logo: "https://logo.clearbit.com/electrovoice.com",
    origin: "USA",
  },
  {
    name: "Emergen-C",
    logo: "https://logo.clearbit.com/emergenc.com",
    origin: "USA",
  },
  {
    name: "Energizer",
    logo: "https://logo.clearbit.com/energizer.com",
    origin: "USA",
  },
  {
    name: "Esso",
    logo: "https://logo.clearbit.com/esso.ca",
    origin: "USA",
  },
  {
    name: "Esterbrook",
    logo: "https://logo.clearbit.com/esterbrookpens.com",
    origin: "USA",
  },
  {
    name: "Evan Williams",
    logo: "https://logo.clearbit.com/evanwilliamsmusic.info",
    origin: "USA",
  },
  {
    name: "Folgers",
    logo: "https://logo.clearbit.com/folgerscoffee.com",
    origin: "USA",
  },
  {
    name: "General Mills",
    logo: "https://logo.clearbit.com/generalmills.com",
    origin: "USA",
  },
  {
    name: "Gillette",
    logo: "https://logo.clearbit.com/gillette.com",
    origin: "USA",
  },
  {
    name: "GladRags",
    logo: "https://logo.clearbit.com/gladrags.com",
    origin: "USA",
  },
  {
    name: "Glidden",
    logo: "https://logo.clearbit.com/glidden.com",
    origin: "USA",
  },
  {
    name: "GoodPop",
    logo: "https://logo.clearbit.com/goodpops.com",
    origin: "USA",
  },
  {
    name: "Gorilla Glass",
    logo: "https://logo.clearbit.com/getgorilla.com",
    origin: "USA",
  },
  {
    name: "Graco",
    logo: "https://logo.clearbit.com/gracobaby.com",
    origin: "USA",
  },
  {
    name: "Greenlight Collectibles",
    logo: "https://logo.clearbit.com/greenlighttoys.com",
    origin: "USA",
  },
  {
    name: "Halo Top Creamery",
    logo: "https://logo.clearbit.com/halotop.com",
    origin: "USA",
  },
  {
    name: "Hamilton Beach Brands",
    logo: "https://logo.clearbit.com/hamiltonbeach.com",
    origin: "USA",
  },
  {
    name: "Harley-Davidson",
    logo: "https://logo.clearbit.com/harley-davidson.com",
    origin: "USA",
  },
  {
    name: "Heil Sound",
    logo: "https://logo.clearbit.com/heilsound.com",
    origin: "USA",
  },
  {
    name: "Holiday Inn",
    logo: "https://logo.clearbit.com/hiufa.com",
    origin: "USA",
  },
  {
    name: "Hostess Brands",
    logo: "https://logo.clearbit.com/hostessbrands.com",
    origin: "USA",
  },
  {
    name: "Hush Puppies",
    logo: "https://logo.clearbit.com/hushpuppies.com",
    origin: "USA",
  },
  {
    name: "Jacuzzi",
    logo: "https://logo.clearbit.com/jacuzzi.com",
    origin: "USA",
  },
  {
    name: "JanSport",
    logo: "https://logo.clearbit.com/jansport.com",
    origin: "USA",
  },
  {
    name: "Jim Beam",
    logo: "https://logo.clearbit.com/jimbeam.com",
    origin: "USA",
  },
  {
    name: "JLab Audio",
    logo: "https://logo.clearbit.com/jlabaudio.com",
    origin: "USA",
  },
  {
    name: "Kenmore",
    logo: "https://logo.clearbit.com/kenmore.com",
    origin: "USA",
  },
  {
    name: "Kidfresh",
    logo: "https://logo.clearbit.com/kidfresh.com",
    origin: "USA",
  },
  {
    name: "KitchenAid",
    logo: "https://logo.clearbit.com/kitchenaid.com",
    origin: "USA",
  },
  {
    name: "Klein Tools",
    logo: "https://logo.clearbit.com/kleintools.com",
    origin: "USA",
  },
  {
    name: "Krusteaz",
    logo: "https://logo.clearbit.com/krusteaz.com",
    origin: "USA",
  },
  {
    name: "Leatherman",
    logo: "https://logo.clearbit.com/leatherman.com",
    origin: "USA",
  },
  {
    name: "Lipinski Sound",
    logo: "https://logo.clearbit.com/lipinskisound.com",
    origin: "USA",
  },
  {
    name: "London Fog",
    logo: "https://logo.clearbit.com/londonfog.com",
    origin: "USA",
  },
  {
    name: "Mainbocher",
    logo: "https://logo.clearbit.com/mainbocher.com",
    origin: "USA",
  },
  {
    name: "Manischewitz",
    logo: "https://logo.clearbit.com/manischewitz.com",
    origin: "USA",
  },
  {
    name: "Manitowoc Cranes",
    logo: "https://logo.clearbit.com/manitowoccranes.com",
    origin: "USA",
  },
  {
    name: "Master Lock",
    logo: "https://logo.clearbit.com/masterlock.com",
    origin: "USA",
  },
  {
    name: "Mayfran International",
    logo: "https://logo.clearbit.com/mayfran.com",
    origin: "USA",
  },
  {
    name: "Maytag",
    logo: "https://logo.clearbit.com/maytag.com",
    origin: "USA",
  },
  {
    name: "McKee Foods",
    logo: "https://logo.clearbit.com/mckeefoods.com",
    origin: "USA",
  },
  {
    name: "Mellanox Technologies",
    logo: "https://logo.clearbit.com/mellanox.com",
    origin: "USA",
  },
  {
    name: "Mercury",
    logo: "https://logo.clearbit.com/mercury.com",
    origin: "USA",
  },
  {
    name: "Merkur",
    logo: "https://logo.clearbit.com/merkur.si",
    origin: "USA",
  },
  {
    name: "Midland Radio",
    logo: "https://logo.clearbit.com/midlandusa.com",
    origin: "USA",
  },
  {
    name: "Milky Way",
    logo: "https://logo.clearbit.com/milkywaybar.com",
    origin: "USA",
  },
  {
    name: "Minute Maid",
    logo: "https://logo.clearbit.com/minutemaid.com",
    origin: "USA",
  },
  {
    name: "Mr. Coffee",
    logo: "https://logo.clearbit.com/mrcoffee.com",
    origin: "USA",
  },
  {
    name: "Munchkin",
    logo: "https://logo.clearbit.com/munchkin.com",
    origin: "USA",
  },
  {
    name: "Newell Brands",
    logo: "https://logo.clearbit.com/newellbrands.com",
    origin: "USA",
  },
  {
    name: "Nicorinse",
    logo: "https://logo.clearbit.com/nicorinse.com",
    origin: "USA",
  },
  {
    name: "Noribachi",
    logo: "https://logo.clearbit.com/noribachi.com",
    origin: "USA",
  },
  {
    name: "Norwegian Wool",
    logo: "https://logo.clearbit.com/norwegian-wool.com",
    origin: "USA",
  },
  {
    name: "OhMiBod",
    logo: "https://logo.clearbit.com/lovelifetoys.com",
    origin: "USA",
  },
  {
    name: "Old Forester",
    logo: "https://logo.clearbit.com/oldforester.com",
    origin: "USA",
  },
  {
    name: "Old Spice",
    logo: "https://logo.clearbit.com/oldspice.com",
    origin: "USA",
  },
  {
    name: "Oral-B",
    logo: "https://logo.clearbit.com/oralb.com",
    origin: "USA",
  },
  {
    name: "Panavision",
    logo: "https://logo.clearbit.com/panavision.com",
    origin: "USA",
  },
  {
    name: "James E. Pepper",
    logo: "https://logo.clearbit.com/jamesepepper.com",
    origin: "USA",
  },
  {
    name: "Pfaltzgraff",
    logo: "https://logo.clearbit.com/pfaltzgraff.com",
    origin: "USA",
  },
  {
    name: "Picaboo",
    logo: "https://logo.clearbit.com/picaboo.com",
    origin: "USA",
  },
  {
    name: "Plochman's",
    logo: "https://logo.clearbit.com/plochman.com",
    origin: "USA",
  },
  {
    name: "PowerBar",
    logo: "https://logo.clearbit.com/powerbar.com",
    origin: "USA",
  },
  {
    name: "PreSonus",
    logo: "https://logo.clearbit.com/presonus.com",
    origin: "USA",
  },
  {
    name: "Pringles",
    logo: "https://logo.clearbit.com/pringles.com",
    origin: "USA",
  },
  {
    name: "Purell",
    logo: "https://logo.clearbit.com/purelldeals.com",
    origin: "USA",
  },
  {
    name: "Pyle USA",
    logo: "https://logo.clearbit.com/pyleusa.com",
    origin: "USA",
  },
  {
    name: "Rebel Yell",
    logo: "https://logo.clearbit.com/rebelyell.com",
    origin: "USA",
  },
  {
    name: "Redken",
    logo: "https://logo.clearbit.com/redken.com",
    origin: "USA",
  },
  {
    name: "Reebok",
    logo: "https://logo.clearbit.com/reebok.com",
    origin: "USA",
  },
  {
    name: "Remington",
    logo: "https://logo.clearbit.com/remingtonproducts.com",
    origin: "USA",
  },
  {
    name: "Rice Lake Weighing Systems",
    logo: "https://logo.clearbit.com/ricelake.com",
    origin: "USA",
  },
  {
    name: "The Ritz-Carlton Hotel Company",
    logo: "https://logo.clearbit.com/ritzcarlton.com",
    origin: "USA",
  },
  {
    name: "Rodarte",
    logo: "https://logo.clearbit.com/rodarte.net",
    origin: "USA",
  },
  {
    name: "Royer Labs",
    logo: "https://logo.clearbit.com/royerlabs.com",
    origin: "USA",
  },
  {
    name: "Seagate Technology",
    logo: "https://logo.clearbit.com/seagate.com",
    origin: "USA",
  },
  {
    name: "Selvarey Rum",
    logo: "https://logo.clearbit.com/selvarey.com",
    origin: "USA",
  },
  {
    name: "Sherwin-Williams",
    logo: "https://logo.clearbit.com/sherwin-williams.com",
    origin: "USA",
  },
  {
    name: "Shinola",
    logo: "https://logo.clearbit.com/shinola.com",
    origin: "USA",
  },
  {
    name: "ShipWorks",
    logo: "https://logo.clearbit.com/shipworks.com",
    origin: "USA",
  },
  {
    name: "Solar Liberty",
    logo: "https://logo.clearbit.com/solarliberty.com",
    origin: "USA",
  },
  {
    name: "Solar Turbines",
    logo: "https://logo.clearbit.com/solarturbines.com",
    origin: "USA",
  },
  {
    name: "Spam",
    logo: "https://logo.clearbit.com/spam.com",
    origin: "USA",
  },
  {
    name: "Steinway & Sons",
    logo: "https://logo.clearbit.com/steinway.com",
    origin: "USA",
  },
  {
    name: "Swiffer",
    logo: "https://logo.clearbit.com/swiffer.com",
    origin: "USA",
  },
  {
    name: "Thermo Fisher Scientific",
    logo: "https://logo.clearbit.com/thermofisher.com",
    origin: "USA",
  },
  {
    name: "Todd Thomas",
    logo: "https://logo.clearbit.com/toddthomas.net",
    origin: "USA",
  },
  {
    name: "Tiffany & Co.",
    logo: "https://logo.clearbit.com/tiffany.com",
    origin: "USA",
  },
  {
    name: "Tiny but Mighty Popcorn",
    logo: "https://logo.clearbit.com/tinybutmightyfoods.com",
    origin: "USA",
  },
  {
    name: "Todd Shelton",
    logo: "https://logo.clearbit.com/toddshelton.com",
    origin: "USA",
  },
  {
    name: "Tokki Soju",
    logo: "https://logo.clearbit.com/tokkisoju.com",
    origin: "USA",
  },
  {
    name: "Tom Bihn",
    logo: "https://logo.clearbit.com/tombihn.com",
    origin: "USA",
  },
  {
    name: "Tom's of Maine",
    logo: "https://logo.clearbit.com/tomsofmaine.com",
    origin: "USA",
  },
  {
    name: "Tootsie Roll Industries",
    logo: "https://logo.clearbit.com/tootsie.com",
    origin: "USA",
  },
  {
    name: "Turtle Wax",
    logo: "https://logo.clearbit.com/turtlewax.com",
    origin: "USA",
  },
  {
    name: "Tuttorosso",
    logo: "https://logo.clearbit.com/tuttorosso.ch",
    origin: "USA",
  },
  {
    name: "Vitamix",
    logo: "https://logo.clearbit.com/vitamix.com",
    origin: "USA",
  },
  {
    name: "Vortex Optics",
    logo: "https://logo.clearbit.com/vortexoptics.com",
    origin: "USA",
  },
  {
    name: "The Walt Disney Company",
    logo: "https://logo.clearbit.com/go.com",
    origin: "USA",
  },
  {
    name: "Warner Bros. Pictures",
    logo: "https://logo.clearbit.com/wbtickets.com",
    origin: "USA",
  },
  {
    name: "Western Digital",
    logo: "https://logo.clearbit.com/westerndigital.com",
    origin: "USA",
  },
  {
    name: "Wet 'n Wild",
    logo: "https://logo.clearbit.com/wetnwildorlando.com",
    origin: "USA",
  },
  {
    name: "ABC-Mart",
    logo: "https://logo.clearbit.com/abc-mart.co.jp",
    origin: "Japan",
  },
  {
    name: "Advantest",
    logo: "https://logo.clearbit.com/advantest.com",
    origin: "Japan",
  },
  {
    name: "AEON",
    logo: "https://logo.clearbit.com/aeon.co",
    origin: "Japan",
  },
  {
    name: "Aichi Steel",
    logo: "https://logo.clearbit.com/aichi-steel.co.jp",
    origin: "Japan",
  },
  {
    name: "Air Do",
    logo: "https://logo.clearbit.com/airdo.jp",
    origin: "Japan",
  },
  {
    name: "Aiwa",
    logo: "https://logo.clearbit.com/aiwa.co",
    origin: "Japan",
  },
  {
    name: "All Nippon Airways",
    logo: "https://logo.clearbit.com/kyoto.travel",
    origin: "Japan",
  },
  {
    name: "Allied Telesis",
    logo: "https://logo.clearbit.com/alliedtelesis.com",
    origin: "Japan",
  },
  {
    name: "Anest Iwata",
    logo: "https://logo.clearbit.com/anestiwata.com",
    origin: "Japan",
  },
  {
    name: "Anritsu",
    logo: "https://logo.clearbit.com/anritsu.com",
    origin: "Japan",
  },
  {
    name: "Asics",
    logo: "https://logo.clearbit.com/asics.com",
    origin: "Japan",
  },
  {
    name: "Astellas Pharma",
    logo: "https://logo.clearbit.com/astellas.com",
    origin: "Japan",
  },
  {
    name: "Audio-Technica",
    logo: "https://logo.clearbit.com/audio-technica.com.hk",
    origin: "Japan",
  },
  {
    name: "Bandai Namco Entertainment",
    logo: "https://logo.clearbit.com/bandainamcoent.co.jp",
    origin: "Japan",
  },
  {
    name: "Bridgestone",
    logo: "https://logo.clearbit.com/bridgestone.com",
    origin: "Japan",
  },
  {
    name: "Capcom",
    logo: "https://logo.clearbit.com/capcom.com",
    origin: "Japan",
  },
  {
    name: "Comme des Garçons",
    logo: "https://logo.clearbit.com/comme-des-garcons.com",
    origin: "Japan",
  },
  {
    name: "Comsys",
    logo: "https://logo.clearbit.com/comsys.in",
    origin: "Japan",
  },
  {
    name: "Cosina",
    logo: "https://logo.clearbit.com/cosina.dk",
    origin: "Japan",
  },
  {
    name: "CyberAgent",
    logo: "https://logo.clearbit.com/cyberagent.co.jp",
    origin: "Japan",
  },
  {
    name: "Daiei",
    logo: "https://logo.clearbit.com/daiei-trading.com",
    origin: "Japan",
  },
  {
    name: "Daiichi Sankyo",
    logo: "https://logo.clearbit.com/dsi.com",
    origin: "Japan",
  },
  {
    name: "Daimaru",
    logo: "https://logo.clearbit.com/daimaru.co.jp",
    origin: "Japan",
  },
  {
    name: "Datsun",
    logo: "https://logo.clearbit.com/datsun.ru",
    origin: "Japan",
  },
  {
    name: "DeNA",
    logo: "https://logo.clearbit.com/dena.com",
    origin: "Japan",
  },
  {
    name: "Denso",
    logo: "https://logo.clearbit.com/denso.com",
    origin: "Japan",
  },
  {
    name: "Descente",
    logo: "https://logo.clearbit.com/descente.com",
    origin: "Japan",
  },
  {
    name: "DIGI Group",
    logo: "https://logo.clearbit.com/digibpl.com",
    origin: "Japan",
  },
  {
    name: "DMG Mori Seiki Co.",
    logo: "https://logo.clearbit.com/dmgmori.co.jp",
    origin: "Japan",
  },
  {
    name: "Don Quijote",
    logo: "https://logo.clearbit.com/donquijote.org",
    origin: "Japan",
  },
  {
    name: "Doutor Coffee",
    logo: "https://logo.clearbit.com/doutor.co.jp",
    origin: "Japan",
  },
  {
    name: "Echo tools",
    logo: "https://logo.clearbit.com/echo-tools.dk",
    origin: "Japan",
  },
  {
    name: "Eisai",
    logo: "https://logo.clearbit.com/eisai.com",
    origin: "Japan",
  },
  {
    name: "Eizo",
    logo: "https://logo.clearbit.com/eizo.co.jp",
    origin: "Japan",
  },
  {
    name: "Elecom",
    logo: "https://logo.clearbit.com/elecom.com.tr",
    origin: "Japan",
  },
  {
    name: "Evisu",
    logo: "https://logo.clearbit.com/evisu.com",
    origin: "Japan",
  },
  {
    name: "Family Inada",
    logo: "https://logo.clearbit.com/inadacanada.com",
    origin: "Japan",
  },
  {
    name: "FANUC",
    logo: "https://logo.clearbit.com/fanuc.co.jp",
    origin: "Japan",
  },
  {
    name: "Fostex",
    logo: "https://logo.clearbit.com/fostex.jp",
    origin: "Japan",
  },
  {
    name: "FromSoftware",
    logo: "https://logo.clearbit.com/fromsoftware.jp",
    origin: "Japan",
  },
  {
    name: "Fuji Bikes",
    logo: "https://logo.clearbit.com/fujibikes.com",
    origin: "Japan",
  },
  {
    name: "Fujifilm",
    logo: "https://logo.clearbit.com/fujifilm.com",
    origin: "Japan",
  },
  {
    name: "Fujikura",
    logo: "https://logo.clearbit.com/fujikura.co.jp",
    origin: "Japan",
  },
  {
    name: "Furuno",
    logo: "https://logo.clearbit.com/furuno.com",
    origin: "Japan",
  },
  {
    name: "Fuso",
    logo: "https://logo.clearbit.com/fusolight.com",
    origin: "Japan",
  },
  {
    name: "GReddy",
    logo: "https://logo.clearbit.com/greddy.me",
    origin: "Japan",
  },
  {
    name: "GS Yuasa",
    logo: "https://logo.clearbit.com/gs-yuasa.com",
    origin: "Japan",
  },
  {
    name: "GungHo Online Entertainment",
    logo: "https://logo.clearbit.com/gungho.co.jp",
    origin: "Japan",
  },
  {
    name: "Guyatone",
    logo: "https://logo.clearbit.com/guyatone.com",
    origin: "Japan",
  },
  {
    name: "Hada Labo",
    logo: "https://logo.clearbit.com/hadalabotokyo.com",
    origin: "Japan",
  },
  {
    name: "Haseko",
    logo: "https://logo.clearbit.com/haseko.co.jp",
    origin: "Japan",
  },
  {
    name: "Hatena",
    logo: "https://logo.clearbit.com/hatena.ne.jp",
    origin: "Japan",
  },
  {
    name: "Hazama Ando",
    logo: "https://logo.clearbit.com/hzm.co",
    origin: "Japan",
  },
  {
    name: "HKS",
    logo: "https://logo.clearbit.com/hksinc.com",
    origin: "Japan",
  },
  {
    name: "Hokkaido Ramen Santouka",
    logo: "https://logo.clearbit.com/santouka.co.jp",
    origin: "Japan",
  },
  {
    name: "Honda",
    logo: "https://logo.clearbit.com/honda.com",
    origin: "Japan",
  },
  {
    name: "Horiba",
    logo: "https://logo.clearbit.com/horiba.com",
    origin: "Japan",
  },
  {
    name: "Iiyama",
    logo: "https://logo.clearbit.com/iiyama.com",
    origin: "Japan",
  },
  {
    name: "Imperial Hotel",
    logo: "https://logo.clearbit.com/imperialhotel.co.jp",
    origin: "Japan",
  },
  {
    name: "Integra Home Theater",
    logo: "https://logo.clearbit.com/integrahometheater.com",
    origin: "Japan",
  },
  {
    name: "Iseki",
    logo: "https://logo.clearbit.com/iseki.co.jp",
    origin: "Japan",
  },
  {
    name: "Ishida",
    logo: "https://logo.clearbit.com/ishida.co.jp",
    origin: "Japan",
  },
  {
    name: "Ispace",
    logo: "https://logo.clearbit.com/ispace.org.uk",
    origin: "Japan",
  },
  {
    name: "Ito En",
    logo: "https://logo.clearbit.com/itoen.com",
    origin: "Japan",
  },
  {
    name: "Janome",
    logo: "https://logo.clearbit.com/janome.ru",
    origin: "Japan",
  },
  {
    name: "Japan Airlines",
    logo: "https://logo.clearbit.com/jal.co.jp",
    origin: "Japan",
  },
  {
    name: "Jatco",
    logo: "https://logo.clearbit.com/jatco.com.sa",
    origin: "Japan",
  },
  {
    name: "JFE Holdings",
    logo: "https://logo.clearbit.com/jfe-holdings.co.jp",
    origin: "Japan",
  },
  {
    name: "Juki",
    logo: "https://logo.clearbit.com/juki.co.jp",
    origin: "Japan",
  },
  {
    name: "JVC",
    logo: "https://logo.clearbit.com/jvc.com",
    origin: "Japan",
  },
  {
    name: "Kaiyodo",
    logo: "https://logo.clearbit.com/kaiyodo.co.jp",
    origin: "Japan",
  },
  {
    name: "Kajima",
    logo: "https://logo.clearbit.com/kajimausa.com",
    origin: "Japan",
  },
  {
    name: "KDDI",
    logo: "https://logo.clearbit.com/kddi.com",
    origin: "Japan",
  },
  {
    name: "Keyence",
    logo: "https://logo.clearbit.com/keyence.com",
    origin: "Japan",
  },
  {
    name: "Kikkoman",
    logo: "https://logo.clearbit.com/kikkoman.co.jp",
    origin: "Japan",
  },
  {
    name: "Kinki Sharyo",
    logo: "https://logo.clearbit.com/kinkisharyo.co.jp",
    origin: "Japan",
  },
  {
    name: "Konami",
    logo: "https://logo.clearbit.com/konami.com",
    origin: "Japan",
  },
  {
    name: "Konica Minolta",
    logo: "https://logo.clearbit.com/konicaminolta.com",
    origin: "Japan",
  },
  {
    name: "Kosé",
    logo: "https://logo.clearbit.com/kose.co.jp",
    origin: "Japan",
  },
  {
    name: "Kubota",
    logo: "https://logo.clearbit.com/kubota.com",
    origin: "Japan",
  },
  {
    name: "Kumagai Gumi",
    logo: "https://logo.clearbit.com/kumagaigumi.co.jp",
    origin: "Japan",
  },
  {
    name: "Kuretake",
    logo: "https://logo.clearbit.com/kuretake.co.jp",
    origin: "Japan",
  },
  {
    name: "Makino",
    logo: "https://logo.clearbit.com/makino.com",
    origin: "Japan",
  },
  {
    name: "Mandom",
    logo: "https://logo.clearbit.com/mandom.co.jp",
    origin: "Japan",
  },
  {
    name: "Marukome",
    logo: "https://logo.clearbit.com/marukomeworks.com",
    origin: "Japan",
  },
  {
    name: "Maruya",
    logo: "https://logo.clearbit.com/maruyasf.org",
    origin: "Japan",
  },
  {
    name: "Marvelous",
    logo: "https://logo.clearbit.com/marv.jp",
    origin: "Japan",
  },
  {
    name: "Matsuura Machinery",
    logo: "https://logo.clearbit.com/matsuura.co.uk",
    origin: "Japan",
  },
  {
    name: "Matsuzakaya",
    logo: "https://logo.clearbit.com/matsuzakaya.co.jp",
    origin: "Japan",
  },
  {
    name: "Maxell",
    logo: "https://logo.clearbit.com/maxell-usa.com",
    origin: "Japan",
  },
  {
    name: "Mikuni",
    logo: "https://logo.clearbit.com/mikuni.co.jp",
    origin: "Japan",
  },
  {
    name: "Mitsubishi Heavy Industries",
    logo: "https://logo.clearbit.com/mhi.com",
    origin: "Japan",
  },
  {
    name: "Mitsui O.S.K. Lines",
    logo: "https://logo.clearbit.com/mol.co.jp",
    origin: "Japan",
  },
  {
    name: "Mizkan",
    logo: "https://logo.clearbit.com/mizkan.com",
    origin: "Japan",
  },
  {
    name: "MODEC",
    logo: "https://logo.clearbit.com/modec.com",
    origin: "Japan",
  },
  {
    name: "Muji",
    logo: "https://logo.clearbit.com/muji.com.cn",
    origin: "Japan",
  },
  {
    name: "Murata Machinery",
    logo: "https://logo.clearbit.com/muratec.net",
    origin: "Japan",
  },
  {
    name: "Nachi-Fujikoshi",
    logo: "https://logo.clearbit.com/nachi-fujikoshi.co.jp",
    origin: "Japan",
  },
  {
    name: "Nakamichi",
    logo: "https://logo.clearbit.com/nakamichi.co.jp",
    origin: "Japan",
  },
  {
    name: "Namiki",
    logo: "https://logo.clearbit.com/irodorikuma.net",
    origin: "Japan",
  },
  {
    name: "Nanoblock",
    logo: "https://logo.clearbit.com/nanoblock.com.mx",
    origin: "Japan",
  },
  {
    name: "Nichia",
    logo: "https://logo.clearbit.com/nichia.co.jp",
    origin: "Japan",
  },
  {
    name: "Nichicon",
    logo: "https://logo.clearbit.com/nichiconmondayminutes.com",
    origin: "Japan",
  },
  {
    name: "Nidec",
    logo: "https://logo.clearbit.com/nidec.com",
    origin: "Japan",
  },
  {
    name: "Nikken Sekkei",
    logo: "https://logo.clearbit.com/nikken.jp",
    origin: "Japan",
  },
  {
    name: "Nikko Ceramics",
    logo: "https://logo.clearbit.com/nikkoceramics.com",
    origin: "Japan",
  },
  {
    name: "Nikon",
    logo: "https://logo.clearbit.com/nikon.com",
    origin: "Japan",
  },
  {
    name: "Nintendo",
    logo: "https://logo.clearbit.com/nintendo.com",
    origin: "Japan",
  },
  {
    name: "Nippon Chemi-Con",
    logo: "https://logo.clearbit.com/chemi-con.co.jp",
    origin: "Japan",
  },
  {
    name: "Nippon Express",
    logo: "https://logo.clearbit.com/nipponexpress.com",
    origin: "Japan",
  },
  {
    name: "Nippon Ichi Software",
    logo: "https://logo.clearbit.com/nippon1.co.jp",
    origin: "Japan",
  },
  {
    name: "Nippon Paint",
    logo: "https://logo.clearbit.com/nipponpaint.com",
    origin: "Japan",
  },
  {
    name: "Nippon Sharyo",
    logo: "https://logo.clearbit.com/n-sharyo.co.jp",
    origin: "Japan",
  },
  {
    name: "Nipro",
    logo: "https://logo.clearbit.com/nipro.dk",
    origin: "Japan",
  },
  {
    name: "Nissan",
    logo: "https://logo.clearbit.com/nissanusa.com",
    origin: "Japan",
  },
  {
    name: "Nitori",
    logo: "https://logo.clearbit.com/nitori.co.jp",
    origin: "Japan",
  },
  {
    name: "Nitto Denko",
    logo: "https://logo.clearbit.com/nitto.com",
    origin: "Japan",
  },
  {
    name: "NKK switches",
    logo: "https://logo.clearbit.com/nkkswitches.com",
    origin: "Japan",
  },
  {
    name: "Noritake",
    logo: "https://logo.clearbit.com/noritakechina.com",
    origin: "Japan",
  },
  {
    name: "NTT Data",
    logo: "https://logo.clearbit.com/nttdata.com",
    origin: "Japan",
  },
  {
    name: "Ohto",
    logo: "https://logo.clearbit.com/ohto.co.jp",
    origin: "Japan",
  },
  {
    name: "Olfa",
    logo: "https://logo.clearbit.com/olfa.co.jp",
    origin: "Japan",
  },
  {
    name: "Onkyo",
    logo: "https://logo.clearbit.com/onkyousa.com",
    origin: "Japan",
  },
  {
    name: "Orient Watch",
    logo: "https://logo.clearbit.com/orientwatchusa.com",
    origin: "Japan",
  },
  {
    name: "Orix",
    logo: "https://logo.clearbit.com/orix.co.jp",
    origin: "Japan",
  },
  {
    name: "Pearl Drums",
    logo: "https://logo.clearbit.com/pearldrummersforum.com",
    origin: "Japan",
  },
  {
    name: "Pearl Flutes",
    logo: "https://logo.clearbit.com/pearlflute.com",
    origin: "Japan",
  },
  {
    name: "Pentel",
    logo: "https://logo.clearbit.com/pentel.de",
    origin: "Japan",
  },
  {
    name: "Pepper Lunch",
    logo: "https://logo.clearbit.com/pepperlunch.com.hk",
    origin: "Japan",
  },
  {
    name: "Pilot",
    logo: "https://logo.clearbit.com/pilot.com",
    origin: "Japan",
  },
  {
    name: "PlayStation",
    logo: "https://logo.clearbit.com/playstation.com",
    origin: "Japan",
  },
  {
    name: "PlayStation Classic",
    logo: "https://logo.clearbit.com/playstationclassic.es",
    origin: "Japan",
  },
  {
    name: "Plextor",
    logo: "https://logo.clearbit.com/goplextor.com",
    origin: "Japan",
  },
  {
    name: "Pokémon",
    logo: "https://logo.clearbit.com/pokemon.com",
    origin: "Japan",
  },
  {
    name: "Prince Hotels",
    logo: "https://logo.clearbit.com/princejapan.com",
    origin: "Japan",
  },
  {
    name: "RE Amemiya",
    logo: "https://logo.clearbit.com/re-amemiya.co.jp",
    origin: "Japan",
  },
  {
    name: "Renesas Electronics",
    logo: "https://logo.clearbit.com/renesas.com",
    origin: "Japan",
  },
  {
    name: "Ricoh",
    logo: "https://logo.clearbit.com/ricoh.com",
    origin: "Japan",
  },
  {
    name: "Rinnai",
    logo: "https://logo.clearbit.com/rinnai.us",
    origin: "Japan",
  },
  {
    name: "Rohm",
    logo: "https://logo.clearbit.com/rohmdigital.com",
    origin: "Japan",
  },
  {
    name: "Rotel",
    logo: "https://logo.clearbit.com/rotel.com",
    origin: "Japan",
  },
  {
    name: "Ryobi",
    logo: "https://logo.clearbit.com/ryobidiecasting.com",
    origin: "Japan",
  },
  {
    name: "Salonpas",
    logo: "https://logo.clearbit.com/us.hisamitsu",
    origin: "Japan",
  },
  {
    name: "Samantha Thavasa",
    logo: "https://logo.clearbit.com/samantha.co.jp",
    origin: "Japan",
  },
  {
    name: "Sanrio",
    logo: "https://logo.clearbit.com/sanrio.com",
    origin: "Japan",
  },
  {
    name: "Sapporo Breweries",
    logo: "https://logo.clearbit.com/sapporobeer.jp",
    origin: "Japan",
  },
  {
    name: "SCSK",
    logo: "https://logo.clearbit.com/scsk.jp",
    origin: "Japan",
  },
  {
    name: "Sega",
    logo: "https://logo.clearbit.com/sega.com",
    origin: "Japan",
  },
  {
    name: "Seiko",
    logo: "https://logo.clearbit.com/seikousa.com",
    origin: "Japan",
  },
  {
    name: "Sekisui House",
    logo: "https://logo.clearbit.com/sekisuihouse.com.au",
    origin: "Japan",
  },
  {
    name: "Shimadzu",
    logo: "https://logo.clearbit.com/shimadzu.com",
    origin: "Japan",
  },
  {
    name: "Shimano",
    logo: "https://logo.clearbit.com/shimano.com",
    origin: "Japan",
  },
  {
    name: "Shin-Etsu Chemical",
    logo: "https://logo.clearbit.com/shinetsu.co.jp",
    origin: "Japan",
  },
  {
    name: "Shionogi",
    logo: "https://logo.clearbit.com/shionogi.com",
    origin: "Japan",
  },
  {
    name: "Shiseido",
    logo: "https://logo.clearbit.com/shiseido.com",
    origin: "Japan",
  },
  {
    name: "Shochiku",
    logo: "https://logo.clearbit.com/shochiku.co.jp",
    origin: "Japan",
  },
  {
    name: "Shoei",
    logo: "https://logo.clearbit.com/shoei.com",
    origin: "Japan",
  },
  {
    name: "Skymark Airlines",
    logo: "https://logo.clearbit.com/skymark.co.jp",
    origin: "Japan",
  },
  {
    name: "SNK",
    logo: "https://logo.clearbit.com/snk-corp.co.jp",
    origin: "Japan",
  },
  {
    name: "SOFEL",
    logo: "https://logo.clearbit.com/sofel.be",
    origin: "Japan",
  },
  {
    name: "SoftBank Group",
    logo: "https://logo.clearbit.com/group.softbank",
    origin: "Japan",
  },
  {
    name: "Square Enix",
    logo: "https://logo.clearbit.com/square-enix.com",
    origin: "Japan",
  },
  {
    name: "Star Micronics",
    logo: "https://logo.clearbit.com/starmicronics.de",
    origin: "Japan",
  },
  {
    name: "Sugino",
    logo: "https://logo.clearbit.com/suginocorp.com",
    origin: "Japan",
  },
  {
    name: "SUMCO",
    logo: "https://logo.clearbit.com/sumcosi.com",
    origin: "Japan",
  },
  {
    name: "Sunsoft",
    logo: "https://logo.clearbit.com/sun-denshi.co.jp",
    origin: "Japan",
  },
  {
    name: "Sunstar Group",
    logo: "https://logo.clearbit.com/sunstar.com",
    origin: "Japan",
  },
  {
    name: "Suntory",
    logo: "https://logo.clearbit.com/suntory.co.jp",
    origin: "Japan",
  },
  {
    name: "Taiheiyo Cement",
    logo: "https://logo.clearbit.com/taiheiyo-cement.co.jp",
    origin: "Japan",
  },
  {
    name: "Takara Holdings",
    logo: "https://logo.clearbit.com/takara.co.jp",
    origin: "Japan",
  },
  {
    name: "TDK",
    logo: "https://logo.clearbit.com/tdk.com",
    origin: "Japan",
  },
  {
    name: "Technics",
    logo: "https://logo.clearbit.com/technics.com",
    origin: "Japan",
  },
  {
    name: "Teijin",
    logo: "https://logo.clearbit.com/teijin.com",
    origin: "Japan",
  },
  {
    name: "Terumo",
    logo: "https://logo.clearbit.com/terumo.co.jp",
    origin: "Japan",
  },
  {
    name: "Toagosei",
    logo: "https://logo.clearbit.com/toagosei.co.jp",
    origin: "Japan",
  },
  {
    name: "Tohatsu",
    logo: "https://logo.clearbit.com/tohatsu.co.jp",
    origin: "Japan",
  },
  {
    name: "Tokai Carbon",
    logo: "https://logo.clearbit.com/tokaicarbon.co.jp",
    origin: "Japan",
  },
  {
    name: "Tokio Marine",
    logo: "https://logo.clearbit.com/tokiomarine.com",
    origin: "Japan",
  },
  {
    name: "Tomy",
    logo: "https://logo.clearbit.com/tomy.com",
    origin: "Japan",
  },
  {
    name: "Top Secret",
    logo: "https://logo.clearbit.com/grouptopsecret.com",
    origin: "Japan",
  },
  {
    name: "Topcon",
    logo: "https://logo.clearbit.com/topcon.com",
    origin: "Japan",
  },
  {
    name: "Toray Industries",
    logo: "https://logo.clearbit.com/toray.com",
    origin: "Japan",
  },
  {
    name: "Toyo Seikan",
    logo: "https://logo.clearbit.com/toyo-seikan.co.jp",
    origin: "Japan",
  },
  {
    name: "Toyoko Inn",
    logo: "https://logo.clearbit.com/toyoko-inn.com",
    origin: "Japan",
  },
  {
    name: "Trend Micro",
    logo: "https://logo.clearbit.com/trendmicro.com",
    origin: "Japan",
  },
  {
    name: "Tsubakimoto Chain",
    logo: "https://logo.clearbit.com/tsubaki.tel",
    origin: "Japan",
  },
  {
    name: "UD Trucks",
    logo: "https://logo.clearbit.com/udtrucks.com",
    origin: "Japan",
  },
  {
    name: "Shu Uemura",
    logo: "https://logo.clearbit.com/shuuemura-usa.com",
    origin: "Japan",
  },
  {
    name: "Unicharm",
    logo: "https://logo.clearbit.com/unicharm.co.jp",
    origin: "Japan",
  },
  {
    name: "Uniden",
    logo: "https://logo.clearbit.com/unidenonline.com",
    origin: "Japan",
  },
  {
    name: "Uniqlo",
    logo: "https://logo.clearbit.com/uniqlo.com",
    origin: "Japan",
  },
  {
    name: "Wacom",
    logo: "https://logo.clearbit.com/wacom.com",
    origin: "Japan",
  },
  {
    name: "Yahoo! Japan",
    logo: "https://logo.clearbit.com/yahoo.co.jp",
    origin: "Japan",
  },
  {
    name: "Yohji Yamamoto",
    logo: "https://logo.clearbit.com/yohjiyamamoto.co.jp",
    origin: "Japan",
  },
  {
    name: "Yamasa",
    logo: "https://logo.clearbit.com/yamasa.com",
    origin: "Japan",
  },
  {
    name: "Yamazaki Baking",
    logo: "https://logo.clearbit.com/yamazakipan.co.jp",
    origin: "Japan",
  },
  {
    name: "Yazaki",
    logo: "https://logo.clearbit.com/yazaki-group.com",
    origin: "Japan",
  },
  {
    name: "YKK",
    logo: "https://logo.clearbit.com/ykk.com",
    origin: "Japan",
  },
  {
    name: "Yokogawa Electric",
    logo: "https://logo.clearbit.com/yokogawa.co.jp",
    origin: "Japan",
  },
  {
    name: "Yonex",
    logo: "https://logo.clearbit.com/yonex.com",
    origin: "Japan",
  },
  {
    name: "Yoshida Metal Industry",
    logo: "https://logo.clearbit.com/yoshikin.co.jp",
    origin: "Japan",
  },
  {
    name: "Zenrin",
    logo: "https://logo.clearbit.com/zenrin.co.jp",
    origin: "Japan",
  },
  {
    name: "Zuken",
    logo: "https://logo.clearbit.com/zuken.com",
    origin: "Japan",
  },
  {
    name: "Bikanervala",
    logo: "https://logo.clearbit.com/bikanervala.com",
    origin: "India",
  },
  {
    name: "Dudhsagar Dairy",
    logo: "https://logo.clearbit.com/dudhsagardairy.coop",
    origin: "India",
  },
  {
    name: "Faasos",
    logo: "https://logo.clearbit.com/faasos.com",
    origin: "India",
  },
  {
    name: "Heritage Foods",
    logo: "https://logo.clearbit.com/heritagefoods.in",
    origin: "India",
  },
  {
    name: "Idhayam",
    logo: "https://logo.clearbit.com/idhayam.com",
    origin: "India",
  },
  {
    name: "ITC Limited",
    logo: "https://logo.clearbit.com/itcportal.com",
    origin: "India",
  },
  {
    name: "Jubilant FoodWorks",
    logo: "https://logo.clearbit.com/jubilantfoodworks.com",
    origin: "India",
  },
  {
    name: "Karachi Bakery",
    logo: "https://logo.clearbit.com/karachibakery.com",
    origin: "India",
  },
  {
    name: "Parle Agro",
    logo: "https://logo.clearbit.com/parleagro.com",
    origin: "India",
  },
  {
    name: "Sri Krishna Sweets",
    logo: "https://logo.clearbit.com/srikrishnasweets.com",
    origin: "India",
  },
  {
    name: "Suminter India Organics",
    logo: "https://logo.clearbit.com/suminterindiaorganics.com",
    origin: "India",
  },
  {
    name: "Tasty Bite",
    logo: "https://logo.clearbit.com/tastybite.com",
    origin: "India",
  },
  {
    name: "Mahindra & Mahindra",
    logo: "https://logo.clearbit.com/mahindra.com",
    origin: "India",
  },
  {
    name: "Kerala Automobiles Limited",
    logo: "https://logo.clearbit.com/keralaautomobilesltd.com",
    origin: "India",
  },
  {
    name: "ACG Group",
    logo: "https://logo.clearbit.com/acg.com.ua",
    origin: "India",
  },
  {
    name: "Ajanta Pharma",
    logo: "https://logo.clearbit.com/ajantapharma.com",
    origin: "India",
  },
  {
    name: "Biological E. Limited",
    logo: "https://logo.clearbit.com/biologicale.com",
    origin: "India",
  },
  {
    name: "Dabur Research Foundation",
    logo: "https://logo.clearbit.com/daburresearch.in",
    origin: "India",
  },
  {
    name: "Glenmark Pharmaceuticals",
    logo: "https://logo.clearbit.com/glenmarkpharma.com",
    origin: "India",
  },
  {
    name: "RPG Life Sciences",
    logo: "https://logo.clearbit.com/rpglifesciences.com",
    origin: "India",
  },
  {
    name: "Troikaa Pharmaceuticals",
    logo: "https://logo.clearbit.com/troikaa.com",
    origin: "India",
  },
  {
    name: "Oriflame",
    logo: "https://logo.clearbit.com/orifname.com",
    origin: "Sweden",
  },
  {
    name: "State Bank of India",
    logo: "https://logo.clearbit.com/onlinesbi.com",
    origin: "India",
  },
  {
    name: "Indian Oil",
    logo: "https://logo.clearbit.com/iocl.com",
    origin: "India",
  },
  {
    name: "Bajaj Group",
    logo: "https://logo.clearbit.com/bajajgroup.org",
    origin: "India",
  },
  {
    name: "Kotak Mahindra Bank",
    logo: "https://logo.clearbit.com/kotak.com",
    origin: "India",
  },
  {
    name: "IndusInd Bank",
    logo: "https://logo.clearbit.com/indusind.com",
    origin: "India",
  },
  {
    name: "Britannia",
    logo: "https://logo.clearbit.com/britanniaconstruction.co.uk",
    origin: "India",
  },
  {
    name: "JSW Group",
    logo: "https://logo.clearbit.com/jsw.in",
    origin: "India",
  },
  {
    name: "GAIL",
    logo: "https://logo.clearbit.com/myrepurposedlife.com",
    origin: "India",
  },
  {
    name: "Canara Bank",
    logo: "https://logo.clearbit.com/canarabank.in",
    origin: "India",
  },
  {
    name: "Bank of India",
    logo: "https://logo.clearbit.com/bankofindia.com",
    origin: "India",
  },
  {
    name: "Future Retail",
    logo: "https://logo.clearbit.com/futureretail.world",
    origin: "India",
  },
  {
    name: "Punjab National Bank",
    logo: "https://logo.clearbit.com/pnbindia.in",
    origin: "India",
  },
  {
    name: "Yes Bank",
    logo: "https://logo.clearbit.com/yesbank.in",
    origin: "India",
  },
  {
    name: "Adani Group",
    logo: "https://logo.clearbit.com/adani.com",
    origin: "India",
  },
  {
    name: "Mphasis",
    logo: "https://logo.clearbit.com/mphasis.com",
    origin: "India",
  },
  {
    name: "MRPL",
    logo: "https://logo.clearbit.com/mrpl.co.in",
    origin: "India",
  },
  {
    name: "BSNL",
    logo: "https://logo.clearbit.com/bsnl.org.uk",
    origin: "India",
  },
  {
    name: "Saffola",
    logo: "https://logo.clearbit.com/saffolalife.com",
    origin: "India",
  },
  {
    name: "Sun Pharma",
    logo: "https://logo.clearbit.com/sunpharma.com",
    origin: "India",
  },
  {
    name: "Syndicate Bank",
    logo: "https://logo.clearbit.com/syndicatebank.in",
    origin: "India",
  },
  {
    name: "Shree Cement",
    logo: "https://logo.clearbit.com/shreecement.com",
    origin: "India",
  },
  {
    name: "Sun Tv",
    logo: "https://logo.clearbit.com/sunnxt.com",
    origin: "India",
  },
  {
    name: "Raymond",
    logo: "https://logo.clearbit.com/raymond.cc",
    origin: "India",
  },
  {
    name: "Facebook",
    logo: "https://logo.clearbit.com/facebook.com",
    origin: "United States",
  },
  {
    name: "ICBC",
    logo: "https://logo.clearbit.com/icbc.com",
    origin: "China",
  },
  {
    name: "Verizon",
    logo: "https://logo.clearbit.com/verizon.com",
    origin: "United States",
  },
  {
    name: "Walmart",
    logo: "https://logo.clearbit.com/walmart.com",
    origin: "United States",
  },
  {
    name: "Mercedes-Benz",
    logo: "https://logo.clearbit.com/mercedes-benz.com",
    origin: "Germany",
  },
  {
    name: "Ping An",
    logo: "https://logo.clearbit.com/pinganoriental.co.uk",
    origin: "China",
  },
  {
    name: "Shell",
    logo: "https://logo.clearbit.com/shell.com",
    origin: "Netherlands",
  },
  {
    name: "NTT Group",
    logo: "https://logo.clearbit.com/nttgroup.pl",
    origin: "Japan",
  },
  {
    name: "BMW",
    logo: "https://logo.clearbit.com/bmw.de",
    origin: "Germany",
  },
  {
    name: "Wells Fargo",
    logo: "https://logo.clearbit.com/wellsfargo.com",
    origin: "United States",
  },
  {
    name: "Starbucks",
    logo: "https://logo.clearbit.com/starbucks.com",
    origin: "United States",
  },
  {
    name: "YouTube",
    logo: "https://logo.clearbit.com/youtube.com",
    origin: "United States",
  },
  {
    name: "Bank of America",
    logo: "https://logo.clearbit.com/bankofamerica.com",
    origin: "United States",
  },
  {
    name: "Citi",
    logo: "https://logo.clearbit.com/citi.com",
    origin: "United States",
  },
  {
    name: "Chase",
    logo: "https://logo.clearbit.com/chase.com",
    origin: "United States",
  },
  {
    name: "IBM",
    logo: "https://logo.clearbit.com/ibm.com",
    origin: "United States",
  },
  {
    name: "Nike",
    logo: "https://logo.clearbit.com/nike.com",
    origin: "United States",
  },
  {
    name: "Boeing",
    logo: "https://logo.clearbit.com/boeing.com",
    origin: "United States",
  },
  {
    name: "McDonald's",
    logo: "https://logo.clearbit.com/mcdonalds.com",
    origin: "United States",
  },
  {
    name: "UnitedHealthcare",
    logo: "https://logo.clearbit.com/uhc.com",
    origin: "United States",
  },
  {
    name: "Deloitte",
    logo: "https://logo.clearbit.com/deloitte.com",
    origin: "United States",
  },
  {
    name: "Porsche",
    logo: "https://logo.clearbit.com/porsche.com",
    origin: "Germany",
  },
  {
    name: "UPS",
    logo: "https://logo.clearbit.com/ups.com",
    origin: "United States",
  },
  {
    name: "Intel",
    logo: "https://logo.clearbit.com/intel.com",
    origin: "United States",
  },
  {
    name: "General Electric",
    logo: "https://logo.clearbit.com/generalelectric-eg.com",
    origin: "United States",
  },
  {
    name: "Visa",
    logo: "https://logo.clearbit.com/visa.com",
    origin: "United States",
  },
  {
    name: "American Express",
    logo: "https://logo.clearbit.com/americanexpress.com",
    origin: "United States",
  },
  {
    name: "Sumitomo Group",
    logo: "https://logo.clearbit.com/sumitomo.gr.jp",
    origin: "Japan",
  },
  {
    name: "Accenture",
    logo: "https://logo.clearbit.com/accenture.com",
    origin: "United States",
  },
  {
    name: "SK Group",
    logo: "https://logo.clearbit.com/skgroup.co",
    origin: "South Korea",
  },
  {
    name: "Oracle",
    logo: "https://logo.clearbit.com/oracle.com",
    origin: "United States",
  },
  {
    name: "PWC",
    logo: "https://logo.clearbit.com/pwc.com",
    origin: "United States",
  },
  {
    name: "FedEx",
    logo: "https://logo.clearbit.com/fedex.com",
    origin: "United States",
  },
  {
    name: "Lowe's",
    logo: "https://logo.clearbit.com/lowes.com",
    origin: "United States",
  },
  {
    name: "EY",
    logo: "https://logo.clearbit.com/ey.com",
    origin: "United Kingdom",
  },
  {
    name: "Allianz",
    logo: "https://logo.clearbit.com/allianz.de",
    origin: "Germany",
  },
  {
    name: "Bosch",
    logo: "https://logo.clearbit.com/bosch.com",
    origin: "Germany",
  },
  {
    name: "Dell Technologies",
    logo: "https://logo.clearbit.com/delltechnologies.com",
    origin: "United States",
  },
  {
    name: "BP",
    logo: "https://logo.clearbit.com/bp.com",
    origin: "United Kingdom",
  },
  {
    name: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    origin: "United States",
  },
  {
    name: "Cisco",
    logo: "https://logo.clearbit.com/cisco.com",
    origin: "United States",
  },
  {
    name: "IKEA",
    logo: "https://logo.clearbit.com/ikea.com",
    origin: "Sweden",
  },
  {
    name: "CVS Health",
    logo: "https://logo.clearbit.com/cvshealth.com",
    origin: "United States",
  },
  {
    name: "NETFLIX",
    logo: "https://logo.clearbit.com/netflix.com",
    origin: "United States",
  },
  {
    name: "HSBC",
    logo: "https://logo.clearbit.com/hsbc.com",
    origin: "United Kingdom",
  },
  {
    name: "Nestlé",
    logo: "https://logo.clearbit.com/nestle.com",
    origin: "Switzerland",
  },
  {
    name: "SoftBank",
    logo: "https://logo.clearbit.com/softbank.jp",
    origin: "Japan",
  },
  {
    name: "Pepsi",
    logo: "https://logo.clearbit.com/pepsi.com",
    origin: "United States",
  },
  {
    name: "Zara",
    logo: "https://logo.clearbit.com/zara.com",
    origin: "Spain",
  },
  {
    name: "Mastercard",
    logo: "https://logo.clearbit.com/mastercard.com.au",
    origin: "United States",
  },
  {
    name: "RBC",
    logo: "https://logo.clearbit.com/rbcroyalbank.com",
    origin: "Canada",
  },
  {
    name: "Costco",
    logo: "https://logo.clearbit.com/costcoauto.com",
    origin: "United States",
  },
  {
    name: "Chevron",
    logo: "https://logo.clearbit.com/chevron.com",
    origin: "United States",
  },
  {
    name: "Instagram",
    logo: "https://logo.clearbit.com/instagram.com",
    origin: "United States",
  },
  {
    name: "Adidas",
    logo: "https://logo.clearbit.com/adidas-group.com",
    origin: "Germany",
  },
  {
    name: "Target",
    logo: "https://logo.clearbit.com/target.com",
    origin: "United States",
  },
  {
    name: "Walgreens",
    logo: "https://logo.clearbit.com/walgreens.com",
    origin: "United States",
  },
  {
    name: "AXA",
    logo: "https://logo.clearbit.com/axa.com",
    origin: "France",
  },
  {
    name: "SAP",
    logo: "https://logo.clearbit.com/sap.com",
    origin: "Germany",
  },
  {
    name: "Spectrum",
    logo: "https://logo.clearbit.com/spectrum.net",
    origin: "United States",
  },
  {
    name: "BNP Paribas",
    logo: "https://logo.clearbit.com/group.bnpparibas",
    origin: "France",
  },
  {
    name: "Gucci",
    logo: "https://logo.clearbit.com/gucci.com",
    origin: "Italy",
  },
  {
    name: "Capital One",
    logo: "https://logo.clearbit.com/capitalone.com",
    origin: "United States",
  },
  {
    name: "NBC",
    logo: "https://logo.clearbit.com/nbc.com",
    origin: "United States",
  },
  {
    name: "Volvo",
    logo: "https://logo.clearbit.com/volvo.com",
    origin: "Sweden",
  },
  {
    name: "TD",
    logo: "https://logo.clearbit.com/td.com",
    origin: "Canada",
  },
  {
    name: "Cartier",
    logo: "https://logo.clearbit.com/cartier.com",
    origin: "France",
  },
  {
    name: "Louis Vuitton",
    logo: "https://logo.clearbit.com/louisvuitton.com",
    origin: "France",
  },
  {
    name: "Anthem",
    logo: "https://logo.clearbit.com/anthem.com",
    origin: "United States",
  },
  {
    name: "KFC",
    logo: "https://logo.clearbit.com/kfc.com",
    origin: "United States",
  },
  {
    name: "Petronas",
    logo: "https://logo.clearbit.com/petronas.com",
    origin: "Malaysia",
  },
  {
    name: "CHEVROLET",
    logo: "https://logo.clearbit.com/chevrolet.com",
    origin: "United States",
  },
  {
    name: "ExxonMobil",
    logo: "https://logo.clearbit.com/exxonmobil.com",
    origin: "United States",
  },
  {
    name: "Paypal",
    logo: "https://logo.clearbit.com/paypal.com",
    origin: "United States",
  },
  {
    name: "Airbus",
    logo: "https://logo.clearbit.com/airbus.com",
    origin: "France",
  },
  {
    name: "Optum",
    logo: "https://logo.clearbit.com/optum.com",
    origin: "United States",
  },
  {
    name: "Sberbank",
    logo: "https://logo.clearbit.com/sberbank.ru",
    origin: "Russia",
  },
  {
    name: "Johnson & Johnson",
    logo: "https://logo.clearbit.com/jnj.com",
    origin: "United States",
  },
  {
    name: "EDF",
    logo: "https://logo.clearbit.com/edf.fr",
    origin: "France",
  },
  {
    name: "booking.com",
    logo: "https://logo.clearbit.com/booking.com",
    origin: "United States",
  },
  {
    name: "Barclays",
    logo: "https://logo.clearbit.com/home.barclays",
    origin: "United Kingdom",
  },
  {
    name: "Chanel",
    logo: "https://logo.clearbit.com/chanel.com",
    origin: "France",
  },
  {
    name: "MUFG",
    logo: "https://logo.clearbit.com/mufg.jp",
    origin: "Japan",
  },
  {
    name: "Tesco",
    logo: "https://logo.clearbit.com/tesco.com",
    origin: "United Kingdom",
  },
  {
    name: "Scotiabank",
    logo: "https://logo.clearbit.com/scotiabank.com",
    origin: "Canada",
  },
  {
    name: "Renault",
    logo: "https://logo.clearbit.com/renault.com",
    origin: "France",
  },
  {
    name: "DHL",
    logo: "https://logo.clearbit.com/dhl.com",
    origin: "Germany",
  },
  {
    name: "CBS",
    logo: "https://logo.clearbit.com/cbs.com",
    origin: "United States",
  },
  {
    name: "Lockheed Martin",
    logo: "https://logo.clearbit.com/lmco.com",
    origin: "United States",
  },
  {
    name: "Hermès",
    logo: "https://logo.clearbit.com/hermes.com",
    origin: "France",
  },
  {
    name: "Aetna",
    logo: "https://logo.clearbit.com/aetna.com",
    origin: "United States",
  },
  {
    name: "CPIC",
    logo: "https://logo.clearbit.com/cpicglobal.com",
    origin: "China",
  },
  {
    name: "Eni",
    logo: "https://logo.clearbit.com/eni.com",
    origin: "Italy",
  },
  {
    name: "Movistar",
    logo: "https://logo.clearbit.com/movistar.es",
    origin: "Spain",
  },
  {
    name: "Canon",
    logo: "https://logo.clearbit.com/global.canon",
    origin: "Japan",
  },
  {
    name: "UBS",
    logo: "https://logo.clearbit.com/ubs.com",
    origin: "Switzerland",
  },
  {
    name: "Telstra",
    logo: "https://logo.clearbit.com/telstra.com.au",
    origin: "Australia",
  },
  {
    name: "Goldman Sachs",
    logo: "https://logo.clearbit.com/goldmansachs.com",
    origin: "United States",
  },
  {
    name: "Aldi",
    logo: "https://logo.clearbit.com/aldi-nord.de",
    origin: "Germany",
  },
  {
    name: "L'Oréal",
    logo: "https://logo.clearbit.com/lorealusa.com",
    origin: "France",
  },
  {
    name: "Engie",
    logo: "https://logo.clearbit.com/engie.fr",
    origin: "France",
  },
  {
    name: "Enel",
    logo: "https://logo.clearbit.com/enel.com",
    origin: "Italy",
  },
  {
    name: "Humana",
    logo: "https://logo.clearbit.com/humana.com",
    origin: "United States",
  },
  {
    name: "Sam's Club",
    logo: "https://logo.clearbit.com/samsclub.com",
    origin: "United States",
  },
  {
    name: "BMO",
    logo: "https://logo.clearbit.com/bmo.com",
    origin: "Canada",
  },
  {
    name: "Delta",
    logo: "https://logo.clearbit.com/delta.com",
    origin: "United States",
  },
  {
    name: "7-Eleven",
    logo: "https://logo.clearbit.com/7-eleven.com",
    origin: "Japan",
  },
  {
    name: "U.S. Bank",
    logo: "https://logo.clearbit.com/usbank.com",
    origin: "United States",
  },
  {
    name: "Lexus",
    logo: "https://logo.clearbit.com/lexus.com",
    origin: "Japan",
  },
  {
    name: "Medtronic",
    logo: "https://logo.clearbit.com/medtronic.com",
    origin: "United States",
  },
  {
    name: "American Airlines",
    logo: "https://logo.clearbit.com/aa.com",
    origin: "United States",
  },
  {
    name: "Carrefour",
    logo: "https://logo.clearbit.com/carrefour.com",
    origin: "France",
  },
  {
    name: "Sephora",
    logo: "https://logo.clearbit.com/sephora.com",
    origin: "France",
  },
  {
    name: "Union Pacific",
    logo: "https://logo.clearbit.com/unionpacific.com.ar",
    origin: "United States",
  },
  {
    name: "Equinor",
    logo: "https://logo.clearbit.com/equinor.com",
    origin: "Norway",
  },
  {
    name: "Land Rover",
    logo: "https://logo.clearbit.com/landroverusa.com",
    origin: "United Kingdom",
  },
  {
    name: "Morgan Stanley",
    logo: "https://logo.clearbit.com/morganstanley.com",
    origin: "United States",
  },
  {
    name: "eBay",
    logo: "https://logo.clearbit.com/ebay.com",
    origin: "United States",
  },
  {
    name: "GEICO",
    logo: "https://logo.clearbit.com/geico.com",
    origin: "United States",
  },
  {
    name: "Valero",
    logo: "https://logo.clearbit.com/grupovalero.com",
    origin: "United States",
  },
  {
    name: "Cognizant",
    logo: "https://logo.clearbit.com/cognizant.com",
    origin: "United States",
  },
  {
    name: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    origin: "United States",
  },
  {
    name: "PNC",
    logo: "https://logo.clearbit.com/pnc.com",
    origin: "United States",
  },
  {
    name: "United Airlines",
    logo: "https://logo.clearbit.com/united.com",
    origin: "United States",
  },
  {
    name: "ABB",
    logo: "https://logo.clearbit.com/abb.com",
    origin: "Switzerland",
  },
  {
    name: "ESPN",
    logo: "https://logo.clearbit.com/espn.com",
    origin: "United States",
  },
  {
    name: "Ferrari",
    logo: "https://logo.clearbit.com/ferrari.com",
    origin: "Italy",
  },
  {
    name: "Broadcom",
    logo: "https://logo.clearbit.com/broadcom.com",
    origin: "United States",
  },
  {
    name: "BT",
    logo: "https://logo.clearbit.com/bt.com",
    origin: "United Kingdom",
  },
  {
    name: "Etisalat",
    logo: "https://logo.clearbit.com/etisalat.ae",
    origin: "UAE",
  },
  {
    name: "Rabobank",
    logo: "https://logo.clearbit.com/rabobank.nl",
    origin: "Netherlands",
  },
  {
    name: "BASF",
    logo: "https://logo.clearbit.com/basf.com",
    origin: "Germany",
  },
  {
    name: "Honeywell",
    logo: "https://logo.clearbit.com/honeywell.com",
    origin: "United States",
  },
  {
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    origin: "United States",
  },
  {
    name: "Zurich",
    logo: "https://logo.clearbit.com/zurich.com",
    origin: "Switzerland",
  },
  {
    name: "Purina",
    logo: "https://logo.clearbit.com/purina.com",
    origin: "United States",
  },
  {
    name: "Cigna",
    logo: "https://logo.clearbit.com/cigna.com",
    origin: "United States",
  },
  {
    name: "Danone",
    logo: "https://logo.clearbit.com/danone.com",
    origin: "France",
  },
  {
    name: "Salesforce",
    logo: "https://logo.clearbit.com/salesforce.com",
    origin: "United States",
  },
  {
    name: "Gazprom",
    logo: "https://logo.clearbit.com/gazprom.com",
    origin: "Russia",
  },
  {
    name: "Woolworths",
    logo: "https://logo.clearbit.com/woolworths.co.za",
    origin: "Australia",
  },
  {
    name: "Rolex",
    logo: "https://logo.clearbit.com/rolex.com",
    origin: "Switzerland",
  },
  {
    name: "Allstate",
    logo: "https://logo.clearbit.com/allstate.com",
    origin: "United States",
  },
  {
    name: "CIBC",
    logo: "https://logo.clearbit.com/cibc.com",
    origin: "Canada",
  },
  {
    name: "Metlife",
    logo: "https://logo.clearbit.com/metlife.com",
    origin: "United States",
  },
  {
    name: "Subway",
    logo: "https://logo.clearbit.com/subway.com",
    origin: "United States",
  },
  {
    name: "Vinci",
    logo: "https://logo.clearbit.com/vinci.com",
    origin: "France",
  },
  {
    name: "NatWest",
    logo: "https://logo.clearbit.com/natwest.com",
    origin: "United Kingdom",
  },
  {
    name: "Northrop Grumman",
    logo: "https://logo.clearbit.com/northropgrumman.com",
    origin: "United States",
  },
  {
    name: "Commonwealth Bank",
    logo: "https://logo.clearbit.com/commbank.com.au",
    origin: "Australia",
  },
  {
    name: "Coach",
    logo: "https://logo.clearbit.com/coach.com",
    origin: "United States",
  },
  {
    name: "Progressive",
    logo: "https://logo.clearbit.com/progressive.com",
    origin: "United States",
  },
  {
    name: "Marubeni",
    logo: "https://logo.clearbit.com/marubeni.com",
    origin: "Japan",
  },
  {
    name: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    origin: "United States",
  },
  {
    name: "Budweiser",
    logo: "https://logo.clearbit.com/budweiser.com",
    origin: "United States",
  },
  {
    name: "Credit Suisse",
    logo: "https://logo.clearbit.com/credit-suisse.com",
    origin: "Switzerland",
  },
  {
    name: "Red Bull",
    logo: "https://logo.clearbit.com/redbull.com",
    origin: "Austria",
  },
  {
    name: "Qualcomm",
    logo: "https://logo.clearbit.com/qualcomm.com",
    origin: "United States",
  },
  {
    name: "Publix",
    logo: "https://logo.clearbit.com/publix.com",
    origin: "United States",
  },
  {
    name: "Activision Blizzard",
    logo: "https://logo.clearbit.com/activisionblizzard.com",
    origin: "United States",
  },
  {
    name: "Société Générale",
    logo: "https://logo.clearbit.com/societegenerale.com",
    origin: "France",
  },
  {
    name: "Sprint",
    logo: "https://logo.clearbit.com/sprint.com",
    origin: "United States",
  },
  {
    name: "Michelin",
    logo: "https://logo.clearbit.com/michelin.com",
    origin: "France",
  },
  {
    name: "Schlumberger",
    logo: "https://logo.clearbit.com/slb.com",
    origin: "United States",
  },
  {
    name: "Poste Italiane",
    logo: "https://logo.clearbit.com/poste.it",
    origin: "Italy",
  },
  {
    name: "Fresenius",
    logo: "https://logo.clearbit.com/fresenius.com",
    origin: "Germany",
  },
  {
    name: "Bud Light",
    logo: "https://logo.clearbit.com/budlight.com",
    origin: "United States",
  },
  {
    name: "Victoria's Secret",
    logo: "https://logo.clearbit.com/victoriassecret.com",
    origin: "United States",
  },
  {
    name: "Roche",
    logo: "https://logo.clearbit.com/roche.com",
    origin: "Switzerland",
  },
  {
    name: "Telus",
    logo: "https://logo.clearbit.com/telus.com",
    origin: "Canada",
  },
  {
    name: "NIVEA",
    logo: "https://logo.clearbit.com/nivea-me.com",
    origin: "Germany",
  },
  {
    name: "CHINA OVERSEAS LAND & INVESTMENT",
    logo: "https://logo.clearbit.com/coli.com.hk",
    origin: "China (Hong Kong)",
  },
  {
    name: "Itaú",
    logo: "https://logo.clearbit.com/itau.cl",
    origin: "Brazil",
  },
  {
    name: "Heineken",
    logo: "https://logo.clearbit.com/heineken.com",
    origin: "Netherlands",
  },
  {
    name: "Lloyds Bank",
    logo: "https://logo.clearbit.com/lloydsbank.com",
    origin: "United Kingdom",
  },
  {
    name: "KEPCO",
    logo: "https://logo.clearbit.com/kepcopower.com",
    origin: "South Korea",
  },
  {
    name: "Pampers",
    logo: "https://logo.clearbit.com/pampers.com",
    origin: "United States",
  },
  {
    name: "Southwest Airlines",
    logo: "https://logo.clearbit.com/southwest.com",
    origin: "United States",
  },
  {
    name: "ANZ",
    logo: "https://logo.clearbit.com/anz.com.au",
    origin: "Australia",
  },
  {
    name: "Dollar General",
    logo: "https://logo.clearbit.com/dollargeneral.com",
    origin: "United States",
  },
  {
    name: "Centurylink",
    logo: "https://logo.clearbit.com/centurylink.com",
    origin: "United States",
  },
  {
    name: "ADP",
    logo: "https://logo.clearbit.com/adp.com",
    origin: "United States",
  },
  {
    name: "John Deere",
    logo: "https://logo.clearbit.com/deere.com",
    origin: "United States",
  },
  {
    name: "Merrill Lynch",
    logo: "https://logo.clearbit.com/ml.com",
    origin: "United States",
  },
  {
    name: "Dior",
    logo: "https://logo.clearbit.com/dior.com",
    origin: "France",
  },
  {
    name: "Safran",
    logo: "https://logo.clearbit.com/safran-group.com",
    origin: "France",
  },
  {
    name: "Emirates",
    logo: "https://logo.clearbit.com/emirates.com",
    origin: "UAE",
  },
  {
    name: "Bayer",
    logo: "https://logo.clearbit.com/bayer.com",
    origin: "Germany",
  },
  {
    name: "Discover",
    logo: "https://logo.clearbit.com/discover.com",
    origin: "United States",
  },
  {
    name: "20th Century Fox",
    logo: "https://logo.clearbit.com/foxkorea.co.kr",
    origin: "United States",
  },
  {
    name: "LinkedIn",
    logo: "https://logo.clearbit.com/linkedin.com",
    origin: "United States",
  },
  {
    name: "Bradesco",
    logo: "https://logo.clearbit.com/empresasemrede.com.br",
    origin: "Brazil",
  },
  {
    name: "General Dynamics",
    logo: "https://logo.clearbit.com/gd.com",
    origin: "United States",
  },
  {
    name: "Swisscom",
    logo: "https://logo.clearbit.com/swisscom.ch",
    origin: "Switzerland",
  },
  {
    name: "BHP",
    logo: "https://logo.clearbit.com/bhp.com",
    origin: "Australia",
  },
  {
    name: "Chubb",
    logo: "https://logo.clearbit.com/chubb.com",
    origin: "United States",
  },
  {
    name: "Capgemini",
    logo: "https://logo.clearbit.com/capgemini.com",
    origin: "France",
  },
  {
    name: "Crédit Agricole",
    logo: "https://logo.clearbit.com/credit-agricole.fr",
    origin: "France",
  },
  {
    name: "Saint-Gobain",
    logo: "https://logo.clearbit.com/saint-gobain.com",
    origin: "France",
  },
  {
    name: "SFR",
    logo: "https://logo.clearbit.com/sfr.fr",
    origin: "France",
  },
  {
    name: "Sainsbury's",
    logo: "https://logo.clearbit.com/sainsburys.co.uk",
    origin: "United Kingdom",
  },
  {
    name: "Lukoil",
    logo: "https://logo.clearbit.com/lukoil.com",
    origin: "Russia",
  },
  {
    name: "Daiwa House",
    logo: "https://logo.clearbit.com/daiwahouse.co.jp",
    origin: "Japan",
  },
  {
    name: "Sysco",
    logo: "https://logo.clearbit.com/sysco.com",
    origin: "United States",
  },
  {
    name: "PTT",
    logo: "https://logo.clearbit.com/ptt.gov.tr",
    origin: "Thailand",
  },
  {
    name: "El Corte Inglés",
    logo: "https://logo.clearbit.com/elcorteingles.es",
    origin: "Spain",
  },
  {
    name: "OCBC Bank",
    logo: "https://logo.clearbit.com/ocbc.com",
    origin: "Singapore",
  },
  {
    name: "Nordea",
    logo: "https://logo.clearbit.com/nordea.com",
    origin: "Denmark",
  },
  {
    name: "Kroger",
    logo: "https://logo.clearbit.com/kroger.com",
    origin: "United States",
  },
  {
    name: "Asda",
    logo: "https://logo.clearbit.com/asda.com",
    origin: "United Kingdom",
  },
  {
    name: "Standard Chartered",
    logo: "https://logo.clearbit.com/sc.com",
    origin: "China",
  },
  {
    name: "DXC Technology",
    logo: "https://logo.clearbit.com/dxc.technology",
    origin: "United States",
  },
  {
    name: "Travelers",
    logo: "https://logo.clearbit.com/travelers.com",
    origin: "United States",
  },
  {
    name: "Tim Hortons",
    logo: "https://logo.clearbit.com/timhortons.com",
    origin: "Canada",
  },
  {
    name: "BUICK",
    logo: "https://logo.clearbit.com/buick.com",
    origin: "United States",
  },
  {
    name: "McLane",
    logo: "https://logo.clearbit.com/mclaneco.com",
    origin: "United States",
  },
  {
    name: "Sprite",
    logo: "https://logo.clearbit.com/sprite.com",
    origin: "United States",
  },
  {
    name: "Raytheon",
    logo: "https://logo.clearbit.com/mathalive.com",
    origin: "United States",
  },
  {
    name: "Intesa Sanpaolo",
    logo: "https://logo.clearbit.com/intesasanpaolo.com",
    origin: "Italy",
  },
  {
    name: "Swiss Re",
    logo: "https://logo.clearbit.com/swissre.com",
    origin: "Switzerland",
  },
  {
    name: "Coles",
    logo: "https://logo.clearbit.com/colescareers.com.au",
    origin: "Australia",
  },
  {
    name: "Carmax",
    logo: "https://logo.clearbit.com/carmax.com",
    origin: "United States",
  },
  {
    name: "Macy's",
    logo: "https://logo.clearbit.com/macys.com",
    origin: "United States",
  },
  {
    name: "CLINIQUE",
    logo: "https://logo.clearbit.com/clinique.com",
    origin: "United States",
  },
  {
    name: "Innogy",
    logo: "https://logo.clearbit.com/innogy.com",
    origin: "Germany",
  },
  {
    name: "Pizza Hut",
    logo: "https://logo.clearbit.com/pizzahut.com",
    origin: "United States",
  },
  {
    name: "Circle K",
    logo: "https://logo.clearbit.com/circlek.com",
    origin: "Canada",
  },
  {
    name: "AutoZone",
    logo: "https://logo.clearbit.com/autozone.com",
    origin: "United States",
  },
  {
    name: "Micron Technology",
    logo: "https://logo.clearbit.com/micron.com",
    origin: "United States",
  },
  {
    name: "E.Leclerc",
    logo: "https://logo.clearbit.com/e-leclerc.com",
    origin: "France",
  },
  {
    name: "Westpac",
    logo: "https://logo.clearbit.com/westpac.com.au",
    origin: "Australia",
  },
  {
    name: "Texas Instruments",
    logo: "https://logo.clearbit.com/ti.com",
    origin: "United States",
  },
  {
    name: "Deutsche Post",
    logo: "https://logo.clearbit.com/deutschepost.de",
    origin: "Germany",
  },
  {
    name: "Kohl's",
    logo: "https://logo.clearbit.com/kohls.com",
    origin: "United States",
  },
  {
    name: "HBO",
    logo: "https://logo.clearbit.com/hbo.com",
    origin: "United States",
  },
  {
    name: "BBC",
    logo: "https://logo.clearbit.com/bbc.com",
    origin: "United Kingdom",
  },
  {
    name: "Guerlain",
    logo: "https://logo.clearbit.com/guerlain.com",
    origin: "France",
  },
  {
    name: "Suzuki",
    logo: "https://logo.clearbit.com/suzukicycles.com",
    origin: "Japan",
  },
  {
    name: "ConocoPhillips",
    logo: "https://logo.clearbit.com/conocophillips.com",
    origin: "United States",
  },
  {
    name: "Discovery",
    logo: "https://logo.clearbit.com/discovery.com",
    origin: "United States",
  },
  {
    name: "Estée Lauder",
    logo: "https://logo.clearbit.com/esteelauder.com",
    origin: "United States",
  },
  {
    name: "CNBM",
    logo: "https://logo.clearbit.com/paper-pulper.com",
    origin: "China",
  },
  {
    name: "AIG",
    logo: "https://logo.clearbit.com/aig.com",
    origin: "United States",
  },
  {
    name: "Sodexo",
    logo: "https://logo.clearbit.com/sodexo.com",
    origin: "France",
  },
  {
    name: "VMWARE",
    logo: "https://logo.clearbit.com/vmware.com",
    origin: "United States",
  },
  {
    name: "Galaxy Macau",
    logo: "https://logo.clearbit.com/galaxymacau.com",
    origin: "China (Hong Kong)",
  },
  {
    name: "Pfizer",
    logo: "https://logo.clearbit.com/pfizer.com",
    origin: "United States",
  },
  {
    name: "Applied Materials",
    logo: "https://logo.clearbit.com/appliedmaterials.com",
    origin: "United States",
  },
  {
    name: "Telia",
    logo: "https://logo.clearbit.com/telia.lt",
    origin: "Sweden",
  },
  {
    name: "Lay's",
    logo: "https://logo.clearbit.com/lays.com",
    origin: "United States",
  },
  {
    name: "Burberry",
    logo: "https://logo.clearbit.com/burberry.com",
    origin: "United Kingdom",
  },
  {
    name: "McCain",
    logo: "https://logo.clearbit.com/mccain-inc.com",
    origin: "Canada",
  },
  {
    name: "Huggies",
    logo: "https://logo.clearbit.com/huggies.com",
    origin: "United States",
  },
  {
    name: "BAE Systems",
    logo: "https://logo.clearbit.com/baesystems.com",
    origin: "United Kingdom",
  },
  {
    name: "Johnnie Walker",
    logo: "https://logo.clearbit.com/johnniewalker.com",
    origin: "United Kingdom",
  },
  {
    name: "Nordstrom",
    logo: "https://logo.clearbit.com/nordstrom.com",
    origin: "United States",
  },
  {
    name: "Petrobras",
    logo: "https://logo.clearbit.com/petrobras.com.br",
    origin: "Brazil",
  },
  {
    name: "CSX",
    logo: "https://logo.clearbit.com/csx.com",
    origin: "United States",
  },
  {
    name: "Crédit Mutuel",
    logo: "https://logo.clearbit.com/creditmutuel.fr",
    origin: "France",
  },
  {
    name: "Telkom Indonesia",
    logo: "https://logo.clearbit.com/telkom.co.id",
    origin: "Indonesia",
  },
  {
    name: "ABN AMRO",
    logo: "https://logo.clearbit.com/abnamro.com",
    origin: "Netherlands",
  },
  {
    name: "Aflac",
    logo: "https://logo.clearbit.com/aflac.com",
    origin: "United States",
  },
  {
    name: "Prada",
    logo: "https://logo.clearbit.com/prada.com",
    origin: "Italy",
  },
  {
    name: "Dove",
    logo: "https://logo.clearbit.com/dove.com",
    origin: "United Kingdom",
  },
  {
    name: "Maersk",
    logo: "https://logo.clearbit.com/maersk.com",
    origin: "Denmark",
  },
  {
    name: "Abbott",
    logo: "https://logo.clearbit.com/abbott.com",
    origin: "United States",
  },
  {
    name: "KBC",
    logo: "https://logo.clearbit.com/kbc.global",
    origin: "Belgium",
  },
  {
    name: "SSE",
    logo: "https://logo.clearbit.com/sse.co.uk",
    origin: "United Kingdom",
  },
  {
    name: "The North Face",
    logo: "https://logo.clearbit.com/thenorthface.com",
    origin: "United States",
  },
  {
    name: "Garnier",
    logo: "https://logo.clearbit.com/garnierusa.com",
    origin: "France",
  },
  {
    name: "United Technologies",
    logo: "https://logo.clearbit.com/united.com.hk",
    origin: "United States",
  },
  {
    name: "Omega",
    logo: "https://logo.clearbit.com/omegawatches.com",
    origin: "Switzerland",
  },
  {
    name: "Repsol",
    logo: "https://logo.clearbit.com/repsol.com",
    origin: "Spain",
  },
  {
    name: "Cummins",
    logo: "https://logo.clearbit.com/cummins.com",
    origin: "United States",
  },
  {
    name: "Thales",
    logo: "https://logo.clearbit.com/thalesgroup.com",
    origin: "France",
  },
  {
    name: "CaixaBank",
    logo: "https://logo.clearbit.com/caixabank.es",
    origin: "Spain",
  },
  {
    name: "La Poste",
    logo: "https://logo.clearbit.com/laposte.fr",
    origin: "France",
  },
  {
    name: "ArcelorMittal",
    logo: "https://logo.clearbit.com/arcelormittal.com",
    origin: "Luxembourg",
  },
  {
    name: "BB&T",
    logo: "https://logo.clearbit.com/bbt.com",
    origin: "United States",
  },
  {
    name: "Banco do Brasil",
    logo: "https://logo.clearbit.com/bb.com.br",
    origin: "Brazil",
  },
  {
    name: "Deutsche Bank",
    logo: "https://logo.clearbit.com/db.com",
    origin: "Germany",
  },
  {
    name: "Carrier",
    logo: "https://logo.clearbit.com/carrier.com",
    origin: "United States",
  },
  {
    name: "Clarins",
    logo: "https://logo.clearbit.com/clarinsusa.com",
    origin: "France",
  },
  {
    name: "CNP Assurances",
    logo: "https://logo.clearbit.com/cnp.fr",
    origin: "France",
  },
  {
    name: "Bloomberg",
    logo: "https://logo.clearbit.com/bloomberg.com",
    origin: "United States",
  },
  {
    name: "Safeway",
    logo: "https://logo.clearbit.com/safeway.com",
    origin: "United States",
  },
  {
    name: "Halliburton",
    logo: "https://logo.clearbit.com/halliburton.com",
    origin: "United States",
  },
  {
    name: "Adecco",
    logo: "https://logo.clearbit.com/adeccousa.com",
    origin: "Switzerland",
  },
  {
    name: "Maybank",
    logo: "https://logo.clearbit.com/maybank.com",
    origin: "Malaysia",
  },
  {
    name: "Gatorade",
    logo: "https://logo.clearbit.com/gatorade.com",
    origin: "United States",
  },
];

function loadCards() {
  var nextCards = quizDb.slice(totalLoaded, totalLoaded + LOAD_SIZE);
  totalLoaded += LOAD_SIZE;

  var tinderCardsDiv = document.querySelector("#tinder--cards");
  nextCards.forEach((comp) => {
    var card = `<div class="tinder--card" origin="${comp.origin}">
            <img src="${comp.logo}">
            <h3>${comp.name}</h3>
        </div>`;
    tinderCardsDiv.insertAdjacentHTML("beforeend", card);
  });
  allCards = document.querySelectorAll(".tinder--card");
}

function initCards(card, index) {
  var newCards = document.querySelectorAll(".tinder--card:not(.removed)");

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform =
      "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
    card.style.opacity = (10 - index) / 10;
  });

  tinderContainer.classList.add("loaded");
}

function addHammerEvent() {
  allCards.forEach(function (el) {
    var hammertime = new Hammer(el);

    hammertime.on("pan", function (event) {
      el.classList.add("moving");
    });

    hammertime.on("pan", function (event) {
      if (event.deltaX === 0) return;
      if (event.center.x === 0 && event.center.y === 0) return;

      tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
      tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform =
        "translate(" +
        event.deltaX +
        "px, " +
        event.deltaY +
        "px) rotate(" +
        rotate +
        "deg)";
    });

    hammertime.on("panend", function (event) {
      el.classList.remove("moving");
      tinderContainer.classList.remove("tinder_love");
      tinderContainer.classList.remove("tinder_nope");

      var moveOutWidth = document.body.clientWidth;
      var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

      event.target.classList.toggle("removed", !keep);

      if (keep) {
        event.target.style.transform = "";
      } else {
        var endX = Math.max(
          Math.abs(event.velocityX) * moveOutWidth,
          moveOutWidth
        );
        var toX = event.deltaX > 0 ? endX : -endX;
        var endY = Math.abs(event.velocityY) * moveOutWidth;
        var toY = event.deltaY > 0 ? endY : -endY;
        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform =
          "translate(" +
          toX +
          "px, " +
          (toY + event.deltaY) +
          "px) rotate(" +
          rotate +
          "deg)";
        if (event.additionalEvent === "panright") {
          if (event.target.getAttribute("origin") !== "India") {
            life--;
          } else {
            score++;
          }
        } else {
          if (event.target.getAttribute("origin") === "India") {
            life--;
          } else {
            score++;
          }
        }
        remaining--;
        checkGameState(event);

        initCards();
      }
    });
  });
}

function checkGameState(event) {
  if (life <= 0) {
    alert("Game over!!!" + " score = " + score);
  }

  if (remaining <= RELOAD_THRESHOLD) {
    // loadGame();
  }
}

function loadGame() {
  loadCards();
  initCards();
  addHammerEvent();
}

loadGame();

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll(".tinder--card:not(.removed)");
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add("removed");

    if (love) {
      card.style.transform =
        "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
    } else {
      card.style.transform =
        "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener("click", nopeListener);
love.addEventListener("click", loveListener);
