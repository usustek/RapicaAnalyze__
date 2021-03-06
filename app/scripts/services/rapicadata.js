'use strict';

/**
 * @ngdoc service
 * @name rapicaAnalyzeApp.RapicaData
 * @description
 * # RapicaData
 * Service in the rapicaAnalyzeApp.
 */
angular.module('rapicaAnalyzeApp')
  .service('RapicaData', function () {
    return {
      stopCity : {
        0x1adb10: ["", "荒田八幡"],
        0x1adb20: ["", "荒田二丁目"],
        0x1adb30: ["", "石郷"],
        0x1adb40: ["", "いづろ"],
        0x1adb50: ["", "伊敷町"],
        0x1adb60: ["", "伊敷仮屋"],
        0x1adb70: ["", "伊敷脇田"],
        0x1adb80: ["", "伊敷小学校前"],
        0x1adb90: ["", "伊敷団地入口"],
        0x1adba0: ["", "伊敷団地中央"],
        0x1adbb0: ["", "伊敷団地"],
        0x1adbc0: ["", "伊敷団地公園前"],
        0x1adbd0: ["", "一本桜"],
        0x1adbe0: ["", "岩崎"],
        0x1adc00: ["", "伊敷中学校前"],
        0x1adc10: ["", "伊敷ニュータウン"],
        0x1adc20: ["", "伊敷ニュータウン東"],
        0x1adc30: ["", "伊敷ニュータウン西入口"],
        0x1adc40: ["", "伊敷台中学校前"],
        0x1adc50: ["", "伊敷ニュータウン中央"],
        0x1adc60: ["", "伊敷ニュータウン東入口"],
        0x1adc70: ["", "上之園町"],
        0x1adc80: ["", "上荒田町"],
        0x1adc90: ["", "内田"],
        0x1adca0: ["", "宇宿小学校前"],
        0x1adcb0: ["", "宇宿住宅"],
        0x1adcc0: ["", "宇宿前迫"],
        0x1adcd0: ["", "梅ヶ渕"],
        0x1adce0: ["", "海づり公園前"],
        0x1adcf0: ["", "大御堂"],
        0x1add00: ["", "大石様河"],
        0x1add10: ["", "小野四丁目"],
        0x1add20: ["", "伊敷ニュータウン東通"],
        0x1add30: ["", "伊敷ニュータウン玉里台"],
        0x1add50: ["", "赤生原"],
        0x1add60: ["", "赤水麓"],
        0x1add70: ["", "後平"],
        0x1add80: ["", "桜洲小学校前"],
        0x1add90: ["", "桜峰小学校前"],
        0x1adda0: ["", "大久保"],
        0x1addb0: ["", "温泉センター"],
        0x1addc0: ["", "奥平"],
        0x1addd0: ["", "維新ふるさと館前"],
        0x1adde0: ["", "宇宿四丁目"],
        0x1ade00: ["", "磯海水浴場前"],
        0x1ade10: ["", "お茶の水"],
        0x1ade20: ["", "旭ヶ丘ニュータウン中央"],
        0x1ade30: ["", "稲荷町"],
        0x1ade40: ["", "帯迫"],
        0x1ade60: ["", "伊敷団地北口"],
        0x1ade70: ["", "宇宿五丁目"],
        0x1ae140: ["", "鹿児島駅前"],
        0x1ae150: ["", "葛山入口"],
        0x1ae160: ["", "葛山中央"],
        0x1ae170: ["", "葛山"],
        0x1ae180: ["", "春日町"],
        0x1ae190: ["", "上竜尾町"],
        0x1ae1a0: ["", "紙屋谷"],
        0x1ae1b0: ["", "加治屋町"],
        0x1ae1c0: ["", "鹿児島高校前"],
        0x1ae1d0: ["", "かけごし"],
        0x1ae1e0: ["", "上塩屋"],
        0x1ae1f0: ["", "川口"],
        0x1ae200: ["", "鹿児島幼稚園前"],
        0x1ae210: ["", "上之原"],
        0x1ae220: ["", "鴨池"],
        0x1ae230: ["", "鴨池市営プール前"],
        0x1ae240: ["", "志学館前"],
        0x1ae250: ["", "がんがら橋"],
        0x1ae260: ["", "鴨池新町"],
        0x1ae270: ["", "鴨池港"],
        0x1ae280: ["", "鴨池ハイム前"],
        0x1ae290: ["", "亀ヶ原"],
        0x1ae2a0: ["", "梶原迫"],
        0x1ae2b0: ["", "共研公園前"],
        0x1ae2c0: ["", "騎射場"],
        0x1ae2d0: ["", "清滝通"],
        0x1ae2e0: ["", "玉龍高校前"],
        0x1ae2f0: ["", "共月亭前"],
        0x1ae300: ["", "金生町"],
        0x1ae310: ["", "KKB前"],
        0x1ae330: ["", "県庁前"],
        0x1ae350: ["", "検査センター前"],
        0x1ae360: ["", "小坂通"],
        0x1ae370: ["", "ゴルフ場前"],
        0x1ae380: ["", "交通局北営業所前"],
        0x1ae390: ["", "護国神社前"],
        0x1ae3b0: ["", "高麗橋"],
        0x1ae3c0: ["", "高麗町"],
        0x1ae3d0: ["", "甲南高校前"],
        0x1ae3e0: ["", "二中通"],
        0x1ae3f0: ["", "郡元"],
        0x1ae400: ["", "甲突町"],
        0x1ae410: ["", "高齢者福祉センター前"],
        0x1ae420: ["", "九州電力前"],
        0x1ae430: ["", "鹿児島アリーナ前"],
        0x1ae450: ["", "県住第二団地前"],
        0x1ae460: ["", "球技場前"],
        0x1ae470: ["", "米神"],
        0x1ae480: ["", "向陽小学校前"],
        0x1ae490: ["", "向陽台西"],
        0x1ae4a0: ["", "向陽台団地"],
        0x1ae4b0: ["", "向陽台公園前"],
        0x1ae4c0: ["", "鹿児島中央駅"],
        0x1ae4d0: ["", "鹿児島中央駅西口"],
        0x1ae4e0: ["", "県庁西"],
        0x1ae4f0: ["", "県民交流センター前"],
        0x1ae500: ["", "海水浴場"],
        0x1ae510: ["", "黒神口"],
        0x1ae520: ["", "黒神小学校前"],
        0x1ae530: ["", "黒神中学校前"],
        0x1ae540: ["", "小池"],
        0x1ae550: ["", "高免"],
        0x1ae560: ["", "高免小学校前"],
        0x1ae570: ["", "国民宿舎前"],
        0x1ae580: ["", "祇園之洲公園前"],
        0x1ae590: ["", "工業高校前"],
        0x1ae5a0: ["", "鹿大正門前"],
        0x1ae5b0: ["", "柿之迫"],
        0x1ae5c0: ["", "上花棚"],
        0x1ae5d0: ["", "花棚入口"],
        0x1ae780: ["", "三和中央"],
        0x1ae790: ["", "三和町"],
        0x1ae7a0: ["", "実方神社前"],
        0x1ae7b0: ["", "実方入口"],
        0x1ae7c0: ["", "坂元郵便局前"],
        0x1ae7e0: ["", "坂元台小学校前"],
        0x1ae7f0: ["", "桜ヶ丘四丁目"],
        0x1ae800: ["", "桜ヶ丘中央公園前"],
        0x1ae810: ["", "桜ヶ丘二丁目"],
        0x1ae820: ["", "桜ヶ丘一丁目"],
        0x1ae830: ["", "桜ヶ丘北口"],
        0x1ae840: ["", "桜ヶ丘西小学校前"],
        0x1ae850: ["", "桜ヶ丘五丁目"],
        0x1ae860: ["", "桜ヶ丘六丁目公園前"],
        0x1ae870: ["", "桜ヶ丘東小学校前"],
        0x1ae880: ["", "桜ヶ丘南"],
        0x1ae890: ["", "桜ヶ丘県営住宅前"],
        0x1ae8a0: ["", "笹貫"],
        0x1ae8b0: ["", "坂之上"],
        0x1ae8c0: ["", "薩摩義士碑"],
        0x1ae8d0: ["", "神田(交通局前)"],
        0x1ae8e0: ["", "甲東中学校前"],
        0x1ae8f0: ["", "新屋敷"],
        0x1ae900: ["", "新町"],
        0x1ae910: ["", "城南小学校前"],
        0x1ae920: ["", "下荒田婦人会館前"],
        0x1ae930: ["", "市民文化ホール前"],
        0x1ae940: ["", "慈眼寺さくら広場"],
        0x1ae950: ["", "市民文化ホール北口"],
        0x1ae960: ["", "市役所前"],
        0x1ae970: ["", "清水小学校前"],
        0x1ae980: ["", "清水町"],
        0x1ae990: ["", "新実方橋"],
        0x1ae9b0: ["", "城山団地中央"],
        0x1ae9c0: ["", "女子高校前"],
        0x1ae9e0: ["", "新上橋"],
        0x1ae9f0: ["", "新照院"],
        0x1aea00: ["", "下伊敷"],
        0x1aea10: ["", "城西公園前"],
        0x1aea20: ["", "下広木"],
        0x1aea30: ["", "ショッピングセンター前"],
        0x1aea40: ["", "慈眼寺公園前"],
        0x1aea50: ["", "慈眼寺団地中央"],
        0x1aea60: ["", "慈眼寺団地西"],
        0x1aea70: ["", "慈眼寺団地東"],
        0x1aea80: ["", "慈眼寺団地"],
        0x1aea90: ["", "歯学部前"],
        0x1aeaa0: ["", "下竜尾町"],
        0x1aeab0: ["", "下荒田四丁目"],
        0x1aeac0: ["", "新和田橋"],
        0x1aead0: ["", "水産学部前"],
        0x1aeae0: ["", "水族館前"],
        0x1aeaf0: ["", "せばる団地"],
        0x1aeb00: ["", "せばる団地西"],
        0x1aeb10: ["", "せばる"],
        0x1aeb20: ["", "千石馬場"],
        0x1aeb30: ["", "草牟田小学校前"],
        0x1aeb40: ["", "草牟田"],
        0x1aeb50: ["", "桜ヶ丘交番前"],
        0x1aeb60: ["", "水族館口"],
        0x1aeb70: ["", "西部保健センター前"],
        0x1aeb80: ["", "サンエール前"],
        0x1aebc0: ["", "さつま団地入口1"],
        0x1aebd0: ["", "さつま団地入口2"],
        0x1aebe0: ["", "修学館前"],
        0x1aebf0: ["", "せばる団地入口"],
        0x1aec00: ["", "樟南高校前"],
        0x1aec10: ["", "西道"],
        0x1aec20: ["", "桜島港"],
        0x1aec30: ["", "桜島苑"],
        0x1aec40: ["", "桜島支所前"],
        0x1aec50: ["", "桜島新町"],
        0x1aec60: ["", "桜島中学校前"],
        0x1aec70: ["", "桜島病院前"],
        0x1aec80: ["", "塩屋ヶ元"],
        0x1aec90: ["", "旬彩館前"],
        0x1aeca0: ["", "新村"],
        0x1aecb0: ["", "桜島団地"],
        0x1aecc0: ["", "ザビエル公園前"],
        0x1aecd0: ["", "西郷銅像前"],
        0x1aece0: ["", "西郷洞窟前"],
        0x1aecf0: ["", "城山"],
        0x1aed00: ["", "仙巌園(磯庭園)"],
        0x1aed10: ["", "薩摩義士碑前2"],
        0x1aed20: ["", "西郷洞窟前2"],
        0x1aed30: ["", "座禅石公園"],
        0x1aed40: ["", "城山一丁目"],
        0x1aed50: ["", "西郷南洲顕彰館前"],
        0x1aed60: ["", "雀ヶ宮"],
        0x1aed70: ["", "栄町"],
        0x1aed80: ["", "種畜場前"],
        0x1aed90: ["", "新堀"],
        0x1aedc0: ["", "市立病院前"],
        0x1aedd0: ["", "大龍小学校前"],
        0x1aede0: ["", "たんたど"],
        0x1aedf0: ["", "大明ヶ丘入口"],
        0x1aee00: ["", "竪馬場入口"],
        0x1aee10: ["", "竪馬場"],
        0x1aee20: ["", "武岡ハイランド"],
        0x1aee30: ["", "武岡ハイランド西"],
        0x1aee40: ["", "武岡団地五丁目"],
        0x1aee50: ["", "武岡ハイランド中央"],
        0x1aee60: ["", "武岡ハイランド東"],
        0x1aee70: ["", "武岡団地二丁目"],
        0x1aee80: ["", "武岡小学校前"],
        0x1aee90: ["", "武岡団地"],
        0x1aeea0: ["", "玉里町"],
        0x1aeeb0: ["", "玉里福祉館前"],
        0x1aeec0: ["", "玉江橋"],
        0x1aeed0: ["", "玉里公民館前"],
        0x1aeee0: ["", "玉里団地中央"],
        0x1aeef0: ["", "玉里団地東"],
        0x1aef00: ["", "玉里団地北"],
        0x1aef10: ["", "玉里団地北口"],
        0x1aef20: ["", "高見馬場"],
        0x1aef30: ["", "玉江小学校前"],
        0x1aef40: ["", "唐湊福祉館前"],
        0x1aef50: ["", "武町"],
        0x1aef60: ["", "武小学校前"],
        0x1aef70: ["", "体育館前"],
        0x1aef80: ["", "大門口"],
        0x1aef90: ["", "大学病院前"],
        0x1aefa0: ["", "谷山電停"],
        0x1aefb0: ["", "谷山支所通"],
        0x1aefc0: ["", "谷山駅前"],
        0x1aefd0: ["", "武岡台高校"],
        0x1aefe0: ["", "皷川"],
        0x1aeff0: ["", "辻ヶ丘団地"],
        0x1af000: ["", "辻ヶ丘団地中央"],
        0x1af010: ["", "辻ヶ丘団地公園前"],
        0x1af020: ["", "鶴丸高校前"],
        0x1af030: ["", "鶴ヶ崎"],
        0x1af040: ["", "鶴ヶ崎橋"],
        0x1af050: ["", "天神山南口"],
        0x1af060: ["", "天神山北口"],
        0x1af070: ["", "天文館"],
        0x1af080: ["", "天神南"],
        0x1af090: ["", "天神中央"],
        0x1af0a0: ["", "天神寺之下"],
        0x1af0b0: ["", "天神ヶ瀬戸"],
        0x1af0c0: ["", "天保山"],
        0x1af0d0: ["", "樋ヶ迫"],
        0x1af0e0: ["", "常盤"],
        0x1af0f0: ["", "常安下"],
        0x1af100: ["", "唐湊"],
        0x1af110: ["", "唐湊公民館前"],
        0x1af120: ["", "唐湊住宅"],
        0x1af130: ["", "唐湊郵便局前"],
        0x1af140: ["", "中央高校前"],
        0x1af150: ["", "第一公園前"],
        0x1af160: ["", "玉里団地二丁目"],
        0x1af170: ["", "玉里団地一丁目東"],
        0x1af180: ["", "玉里団地福祉館下"],
        0x1af190: ["", "玉里団地一丁目西"],
        0x1af1a0: ["", "武岡団地南"],
        0x1af1b0: ["", "武岡団地入口"],
        0x1af1c0: ["", "武二丁目"],
        0x1af1d0: ["", "常盤南"],
        0x1af1e0: ["", "武登山口"],
        0x1af1f0: ["", "出会坂通"],
        0x1af200: ["", "ドルフィンポート"],
        0x1af210: ["", "駄馬落"],
        0x1af220: ["", "大明ヶ丘中央"],
        0x1af230: ["", "大明ヶ丘西"],
        0x1af240: ["", "大明ヶ丘東"],
        0x1af250: ["", "滝之神"],
        0x1af260: ["", "立平"],
        0x1af270: ["", "唐湊二丁目"],
        0x1af400: ["", "中別府入口"],
        0x1af410: ["", "中別府"],
        0x1af430: ["", "長田神社下"],
        0x1af440: ["", "中之平"],
        0x1af450: ["", "中草牟田"],
        0x1af460: ["", "永吉町"],
        0x1af470: ["", "中郡"],
        0x1af480: ["", "南林寺"],
        0x1af490: ["", "鍋ヶ宇都"],
        0x1af4a0: ["", "永仮入口"],
        0x1af4b0: ["", "中塩屋"],
        0x1af4c0: ["", "旧西高校前"],
        0x1af4d0: ["", "西伊敷三丁目"],
        0x1af4e0: ["", "西伊敷六丁目"],
        0x1af4f0: ["", "西伊敷七丁目"],
        0x1af510: ["", "西田橋"],
        0x1af520: ["", "西田中ノ丁"],
        0x1af530: ["", "西田本通"],
        0x1af540: ["", "西田小学校前"],
        0x1af550: ["", "日赤前"],
        0x1af560: ["", "ニュータウン中央"],
        0x1af570: ["", "二軒茶屋"],
        0x1af580: ["", "熱帯植物園前"],
        0x1af5a0: ["", "農協会館前"],
        0x1af5b0: ["", "西紫原中学校下"],
        0x1af5c0: ["", "西紫原団地公園前"],
        0x1af5d0: ["", "西紫原中学校前"],
        0x1af5e0: ["", "永吉"],
        0x1af5f0: ["", "永吉団地入口"],
        0x1af610: ["", "西伊敷七丁目東"],
        0x1af620: ["", "西伊敷六丁目東"],
        0x1af630: ["", "西伊敷六丁目中央"],
        0x1af640: ["", "西伊敷六丁目中通"],
        0x1af650: ["", "西伊敷四丁目"],
        0x1af660: ["", "西伊敷小学校入口"],
        0x1af670: ["", "西伊敷三丁目東"],
        0x1af680: ["", "西伊敷二丁目"],
        0x1af6a0: ["", "西紫原台入口"],
        0x1af6b0: ["", "西宇土"],
        0x1af6c0: ["", "西浦ノ前"],
        0x1af6d0: ["", "西白浜"],
        0x1af6e0: ["", "西園山"],
        0x1af6f0: ["", "南洲公園入口"],
        0x1af700: ["", "中郡陸橋"],
        0x1afa40: ["", "原良小学校前"],
        0x1afa50: ["", "花岡通"],
        0x1afa60: ["", "原良小学校西門前"],
        0x1afa70: ["", "花岡屋敷"],
        0x1afa80: ["", "原良"],
        0x1afa90: ["", "原良西"],
        0x1afaa0: ["", "原田久保"],
        0x1afab0: ["", "東高校下"],
        0x1afac0: ["", "日枝神社下"],
        0x1afad0: ["", "びくに坂"],
        0x1afae0: ["", "冷水町"],
        0x1afaf0: ["", "冷水峠"],
        0x1afb00: ["", "広木農協前"],
        0x1afb10: ["", "日之出町西"],
        0x1afb20: ["", "日之出町"],
        0x1afb30: ["", "日当平住宅"],
        0x1afb40: ["", "日当平住宅中通"],
        0x1afb50: ["", "日当平住宅入口"],
        0x1afb60: ["", "附属小学校前"],
        0x1afb70: ["", "平和公園前"],
        0x1afb80: ["", "法文学部前"],
        0x1afb90: ["", "ぼさど"],
        0x1afba0: ["", "本町公園前"],
        0x1afbb0: ["", "本町"],
        0x1afbc0: ["", "広木住宅前"],
        0x1afbd0: ["", "ハートピアかごしま"],
        0x1afbe0: ["", "北枝"],
        0x1afbf0: ["", "日枝ヶ迫"],
        0x1afc00: ["", "日当平グランド前"],
        0x1afc10: ["", "長谷浜"],
        0x1afc20: ["", "浜平"],
        0x1afc30: ["", "東宇土"],
        0x1afc40: ["", "東浦ノ前"],
        0x1afc50: ["", "東白浜"],
        0x1afc60: ["", "東園山"],
        0x1afc80: ["", "福祉センター"],
        0x1afc90: ["", "藤野"],
        0x1afca0: ["", "二俣"],
        0x1afcb0: ["", "方崎"],
        0x1afcc0: ["", "初崎"],
        0x1afcd0: ["", "古河良港"],
        0x1afce0: ["", "花火大会会場"],
        0x1afcf0: ["", "東坂元四丁目"],
        0x1afd10: ["", "早馬"],
        0x1afd30: ["", "東紫原陸橋"],
        0x1b0080: ["", "松十文字"],
        0x1b0090: ["", "前ヶ迫"],
        0x1b00a0: ["", "真砂保育園前"],
        0x1b00c0: ["", "真砂中央"],
        0x1b00d0: ["", "松崎"],
        0x1b00e0: ["", "松原小学校前"],
        0x1b00f0: ["", "緑ヶ丘南"],
        0x1b0100: ["", "緑ヶ丘団地中央"],
        0x1b0110: ["", "緑ヶ丘団地"],
        0x1b0120: ["", "宮田通"],
        0x1b0130: ["", "都通"],
        0x1b0140: ["", "南鹿児島駅前"],
        0x1b0150: ["", "南小学校前"],
        0x1b0160: ["", "南港"],
        0x1b0170: ["", "紫原陸橋"],
        0x1b0180: ["", "紫原七丁目"],
        0x1b0190: ["", "紫原中学校前"],
        0x1b01a0: ["", "紫原"],
        0x1b01b0: ["", "紫原四丁目"],
        0x1b01c0: ["", "紫原三丁目"],
        0x1b01d0: ["", "紫原中央"],
        0x1b01e0: ["", "明和入口"],
        0x1b01f0: ["", "明和県営住宅前"],
        0x1b0200: ["", "明和北"],
        0x1b0210: ["", "明和西"],
        0x1b0220: ["", "明和"],
        0x1b0230: ["", "明和東"],
        0x1b0240: ["", "明和小学校前"],
        0x1b0250: ["", "森山団地"],
        0x1b0260: ["", "明和プラザ前"],
        0x1b0270: ["", "真砂入口"],
        0x1b0290: ["", "明和南"],
        0x1b02a0: ["", "明和三丁目"],
        0x1b02b0: ["", "明和一丁目"],
        0x1b02c0: ["", "明和トンネル前"],
        0x1b02d0: ["", "森山団地南"],
        0x1b02e0: ["", "松浦"],
        0x1b0300: ["", "みやこ迫"],
        0x1b06c0: ["", "柳町"],
        0x1b06d0: ["", "山下小学校前"],
        0x1b06e0: ["", "山田"],
        0x1b06f0: ["", "柳田通"],
        0x1b0700: ["", "野球場前"],
        0x1b0710: ["", "与次郎ヶ浜"],
        0x1b0720: ["", "吉野支所前"],
        0x1b0730: ["", "養護学校前"],
        0x1b0740: ["", "八洲団地入口"],
        0x1b0750: ["", "八洲団地"],
        0x1b0760: ["", "湯之浜"],
        0x1b0770: ["", "与次郎二丁目"],
        0x1b0780: ["", "与次郎一丁目"],
        0x1b0790: ["", "吉田インター前"],
        0x1b07a0: ["", "吉野中学校前"],
        0x1b07b0: ["", "吉野無線前"],
        0x1b07e0: ["", "吉野郵便局前"],
        0x1b0d00: ["", "緑地公園前"],
        0x1b1340: ["", "若葉町西"],
        0x1b1350: ["", "わかくさ保育園前"],
        0x1b1360: ["", "脇田"],
        0x1b1370: ["", "脇田電停前"],
        0x1b2610: ["", "商業高校入口"],
        0x1b2620: ["", "純心女子学園前"],
        0x1b2630: ["", "桜ヶ丘七丁目"],
        0x1b2640: ["", "桜ヶ丘東口"],
        0x1b2650: ["", "歯学部前2"],
        0x1e8490: ["第一期線", "鹿児島駅前"],
        0x1e84a0: ["第一期線", "桜島桟橋通"],
        0x1e84b0: ["第一期線", "水族館口"],
        0x1e84c0: ["第一期線", "市役所前"],
        0x1e84d0: ["第一期線", "朝日通"],
        0x1e84e0: ["第一期線", "いづろ通"],
        0x1e84f0: ["第一期線", "天文館通"],
        0x1e8500: ["第一期線", "高見馬場"],
        0x1e8510: ["第一期線", "甲東中学校前"],
        0x1e8520: ["第一期線", "新屋敷"],
        0x1e8530: ["第一期線", "武之橋"],
        0x1e8540: ["谷山線", "二中通"],
        0x1e8550: ["谷山線", "荒田八幡"],
        0x1e8560: ["谷山線", "騎射場"],
        0x1e8570: ["谷山線", "鴨池"],
        0x1e8580: ["谷山線", "郡元"],
        0x1e8590: ["谷山線", "涙橋"],
        0x1e85a0: ["谷山線", "南鹿児島駅前"],
        0x1e85b0: ["谷山線", "二軒茶屋"],
        0x1e85c0: ["谷山線", "宇宿一丁目"],
        0x1e85d0: ["谷山線", "脇田"],
        0x1e85e0: ["谷山線", "笹貫"],
        0x1e85f0: ["谷山線", "上塩屋"],
        0x1e8600: ["谷山線", "谷山"],
        0x1e8610: ["谷山線", "郡元(南)"],
        0x1e8ad0: ["第二期線", "加治屋町"],
        0x1e8ae0: ["第二期線", "高見橋"],
        0x1e8af0: ["唐湊線", "鹿児島中央駅前"],
        0x1e8b00: ["唐湊線", "都通"],
        0x1e8b10: ["唐湊線", "中洲通"],
        0x1e8b20: ["唐湊線", "市立病院前"],
        0x1e8b30: ["唐湊線", "神田(交通局前)"],
        0x1e8b40: ["唐湊線", "唐湊"],
        0x1e8b50: ["唐湊線", "工学部前"],
        0x1e8b60: ["唐湊線", "純心学園前"],
        0x1e8b70: ["唐湊線", "中郡"],
        0x309590: ["桜島フェリー", "桜島港"],
        0x3095a0: ["桜島フェリー", "鹿児島港"],
  
        // 南国交通
        0x1FEA00: ["", "水族館口"],
        0x1FEB90: ["", "金生町"],
        0x1FECD0: ["", "高見馬場"],
        0x200350: ["", "みやこ迫"],
      },
      getStopCity : function(code) {
        return (this.stopCity[code] !== undefined) ? this.stopCity[code][1] : "";
      },
      
      groupCity : {
        0x01FF : "5-2番線",
        // 0x0322 : "8番線",
        // 0x047F : "11番線",
        // 0x0976 : "24番線", 
        // 0x097F : "24番線", 
        // 0x0980 : "24番線",
        // 0x0CE6 : "33番線",
      },
      getGroupCity : function(code, isCity){
        if (this.groupCity[code] !== undefined) {
          return this.groupCity[code];
        }
        else if (isCity) {
          var grp = Math.floor(code / 100);
          switch(grp){
            case 0: // 市電
              return "";
            case 90: // 桜島フェリー
              return "桜島フェリー";
            default:
              return grp.toString() + "番線";
          }
        }
        return "";
      },
      stopIwasaki : {
              0x002715 : ["71番線", {
                0x0019 : "古別府",        
              }],
              0x004E54 : ["63番線", {
                0x0005 : "中草牟田", // ?
                0x001A : "中草牟田",
                0x001C : "中草牟田",
                0x001D : "草牟田",
                0x001E : "新照院",  // 推測値
                0x001F : "新上橋",  // 推測値
                0x0020 : "千石馬場",  // 推測値
                0x0021 : "加治屋町",  // 推測値
                0x0022 : "高見馬場",
                0x0023 : "天文館",
              }],
              0x004E5A : ["63番線", {
                0x001B : "草牟田",
                0x0024 : "金生町",
              }],
              0x004E7C : ["74番線",{
                0x0004 : "永吉",
                0x000D : "鹿児島中央駅",      
              }],
              0x004E75 : ["56番線",{
                0x0001 : "鹿児島駅",  // 推測値
                0x0002 : "市役所前",  // 推測値
                0x0003 : "天文館",
                0x0004 : "高見馬場",  // 推測値
                0x0005 : "加治屋町",  // 推測値
                0x0006 : "千石馬場",  // 推測値
                0x0007 : "新上橋",   // 推測値
                0x0008 : "新照院",   // 推測値
                0x0009 : "草牟田",   // 推測値
                0x000A : "中草牟田",
                0x000B : "護国神社",  // 推測値
              }],
              0x004E84 : ["57番線",{
                0x0001 : "鹿児島駅",  // 推測値
                0x0002 : "市役所前",  // 推測値
                0x0003 : "天文館",    // 推測値
                0x0004 : "高見馬場",  // 推測値
                0x0005 : "加治屋町",  // 推測値
                0x0006 : "千石馬場",  // 推測値
                0x0007 : "新上橋",   // 推測値
                0x0008 : "新照院",   // 推測値
                0x0009 : "草牟田",
                0x000A : "中草牟田",  // 推測値
                0x000B : "護国神社",
              }],
      },

      getGroupIwasaki:function(grpCode){
        return (this.stopIwasaki[grpCode] !== undefined) ? this.stopIwasaki[grpCode][0] : "";
      },       
      getStopIwasaki:function(grpCodeHex, stopCode) {
        var grpCode = parseInt(grpCodeHex.substr(2), 16);
        
        if (this.stopIwasaki[grpCode] !== undefined) {
          var stop = (this.stopIwasaki[grpCode][1])[stopCode];
          if (stop !== undefined) {
            return stop;
          }
        }
        return "";
      },
    };
  });
