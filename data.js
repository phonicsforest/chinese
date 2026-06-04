// data.js －－ 小一中文 60 日課程（目前完成 Day 1–20）

// 總日數 & round 數
const TOTAL_DAYS = 60;
const TOTAL_ROUNDS = 6;

// 側邊欄顯示用（每日標題：5 個字串起來）
const dayData = {
  1:{ title:"我你他她們" },
  2:{ title:"是在家和人" },
  3:{ title:"有去來看大" },
  4:{ title:"小上下女見" },
  5:{ title:"日月年時個" },
  6:{ title:"早子晚天的" },
  7:{ title:"一不了到吃" },
  8:{ title:"好沒這要想" },
  9:{ title:"聽說過走給" },
  10:{ title:"明得快飯很" },
  11:{ title:"就做魚心會" },
  12:{ title:"愛喜玩跳舞" },
  13:{ title:"回裏男孩兩" },
  14:{ title:"能可面雨今" },
  15:{ title:"眼口鼻頭隻" },
  16:{ title:"鳥中出長兒" },
  17:{ title:"老師近遠跑" },
  18:{ title:"字寫房門間" },
  19:{ title:"馬草那風吹" },
  20:{ title:"開被讓起床" },
  21:{ title:"夜更問短答" },
  22:{ title:"水花山坐車" },
  23:{ title:"店買書校學" },
  24:{ title:"生地讀公園" },
  25:{ title:"飲運動場商" },
  26:{ title:"多步後前行" },
  27:{ title:"爸媽哥弟妹" },
  28:{ title:"所因為每以" },
  29:{ title:"游泳高路睡" },
  30:{ title:"發二十分現" },
  31:{ title:"外住婆爺樓" },
  32:{ title:"鐘班火等站" },
  33:{ title:"停滿足飽梯" },
  34:{ title:"條裙褲穿衣" },
  35:{ title:"豬炒雞肉菜" },
  36:{ title:"餐廳扒麵包" },
  37:{ title:"蛋氣物累空" },
  38:{ title:"作工常其才" },
  39:{ title:"入自己最夾" },
  40:{ title:"員參加比賽" },
  41:{ title:"幾具文還也" },
  42:{ title:"夏冬冷熱怕" },
  43:{ title:"假期用治病" },
  44:{ title:"痛次藥整都" },
  45:{ title:"請嗎忘記洗" },
  46:{ title:"真知道誰呢" },
  47:{ title:"同事超市食" },
  48:{ title:"放鞋換服手" },
  49:{ title:"先吵認只太" },
  50:{ title:"錯歉第句跟" },
  51:{ title:"三原但金電" },
  52:{ title:"新對雲已飛" },
  53:{ title:"比少舊內筆" },
  54:{ title:"把話覺醫帶" },
  55:{ title:"再方從騎試" },
  56:{ title:"離名黑白光" },
  57:{ title:"色找本紅陽" },
  58:{ title:"向東五右左" },
  59:{ title:"賣成雖然功" },
  60:{ title:"笑着興綠燈" }
};

// Round 1：每日 5 個字
window.dayWords = {
  1:["我","你","他","她","們"],
  2:["是","在","家","和","人"],
  3:["有","去","來","看","大"],
  4:["小","上","下","女","見"],
  5:["日","月","年","時","個"],
  6:["早","子","晚","天","的"],
  7:["一","不","了","到","吃"],
  8:["好","沒","這","要","想"],
  9:["聽","說","過","走","給"],
  10:["明","得","快","飯","很"],
  11:["就","做","魚","心","會"],
  12:["愛","喜","玩","跳","舞"],
  13:["回","裏","男","孩","兩"],
  14:["能","可","面","雨","今"],
  15:["眼","口","鼻","頭","隻"],
  16:["鳥","中","出","長","兒"],
  17:["老","師","近","遠","跑"],
  18:["字","寫","房","門","間"],
  19:["馬","草","那","風","吹"],
  20:["開","被","讓","起","床"],
  21:["夜","更","問","短","答"],
  22:["水","花","山","坐","車"],
  23:["店","買","書","校","學"],
  24:["生","地","讀","公","園"],
  25:["飲","運","動","場","商"],
  26:["多","步","後","前","行"],
  27:["爸","媽","哥","弟","妹"],
  28:["所","因","為","每","以"],
  29:["游","泳","高","路","睡"],
  30:["發","二","十","分","現"],
  31:["外","住","婆","爺","樓"],
  32:["鐘","班","火","等","站"],
  33:["停","滿","足","飽","梯"],
  34:["條","裙","褲","穿","衣"],
  35:["豬","炒","雞","肉","菜"],
  36:["餐","廳","扒","麵","包"],
  37:["蛋","氣","物","累","空"],
  38:["作","工","常","其","才"],
  39:["入","自","己","最","夾"],
  40:["員","參","加","比","賽"],
  41:["幾","具","文","還","也"],
  42:["夏","冬","冷","熱","怕"],
  43:["假","期","用","治","病"],
  44:["痛","次","藥","整","都"],
  45:["請","嗎","忘","記","洗"],
  46:["真","知","道","誰","呢"],
  47:["同","事","超","市","食"],
  48:["放","鞋","換","服","手"],
  49:["先","吵","認","只","太"],
  50:["錯","歉","第","句","跟"],
  51:["三","原","但","金","電"],
  52:["新","對","雲","已","飛"],
  53:["比","少","舊","內","筆"],
  54:["把","話","覺","醫","帶"],
  55:["再","方","從","騎","試"],
  56:["離","名","黑","白","光"],
  57:["色","找","本","紅","陽"],
  58:["向","東","五","右","左"],
  59:["賣","成","雖","然","功"],
  60:["笑","着","興","綠","燈"]
};

// Round 2：四字 pattern（仍然通用）
const ROUND2_PATTERNS = ["1212","3132","3424","1545","5453"];

// Round 4：詞語（2–3 字為主，開頭幾日未必 6 個）
const wordTranslations = {
  "我":"I, me",
  "你":"you",
  "他":"he, him",
  "她":"she, her",
  "們":"plural marker",

  "是":"is, are",
  "在":"at, in",
  "家":"home, house",
  "和":"and",
  "人":"person, people",

  "有":"have, has",
  "去":"go",
  "來":"come",
  "看":"see, look",
  "大":"big",

  "小":"small",
  "上":"up",
  "下":"down",
  "女":"female",
  "見":"see",

  "日":"day",
  "月":"month, moon",
  "年":"year",
  "時":"time",
  "個":"classifier",

  "早":"morning / early",
  "子":"child / son",
  "晚":"evening / late",
  "天":"day / sky",
  "的":"possessive marker",

  "一":"one",
  "不":"not",
  "了":"completed action marker",
  "到":"arrive",
  "吃":"eat",

  "好":"good",
  "沒":"not have",
  "這":"this",
  "要":"want",
  "想":"think / want",

  "聽":"hear",
  "說":"say",
  "過":"past experience marker",
  "走":"walk",
  "給":"give",

  "明":"bright / tomorrow (in 明天)",
  "得":"(degree marker)",
  "快":"fast",
  "飯":"rice / meal",
  "很":"very",

  "就":"then / right away",
  "做":"do / make",
  "魚":"fish",
  "心":"heart",
  "會":"can / be able to",

  "愛":"love",
  "喜":"like",
  "玩":"play",
  "跳":"jump",
  "舞":"dance",

  "回":"return, go back",
  "裏":"inside",
  "男":"male",
  "孩":"child",
  "兩":"two",

  "能":"can / able to",
  "可":"can / may",
  "面":"face / surface",
  "雨":"rain",
  "今":"today (in 今天)",

  "眼":"eye",
  "口":"mouth",
  "鼻":"nose",
  "頭":"head",
  "隻":"classifier for animals",

  "鳥":"bird",
  "中":"middle / in",
  "出":"out",
  "長":"grow / long",
  "兒":"child",

  "老":"old",
  "師":"teacher",
  "近":"near",
  "遠":"far",
  "跑":"run",

  "字":"character",
  "寫":"write",
  "房":"room",
  "門":"door",
  "間":"between / room classifier",

  "馬":"horse",
  "草":"grass",
  "那":"that",
  "風":"wind",
  "吹":"blow",

  "開":"open",
  "被":"passive marker",
  "讓":"let / allow",
  "起":"rise / get up",
  "床":"bed",

  "夜":"night",
  "更":"even more / change",
  "問":"ask",
  "短":"short",
  "答":"answer",

  "水":"water",
  "花":"flower",
  "山":"mountain",
  "坐":"sit / take (transport)",
  "車":"car / vehicle",

  "店":"shop",
  "買":"buy",
  "書":"book",
  "校":"school",
  "學":"learn / study",

  "生":"grow / life",
  "地":"ground",
  "讀":"read",
  "公":"public",
  "園":"park",

  "飲":"drink",
  "運":"move",
  "動":"move",
  "場":"place",
  "商":"business",

  "多":"many / more",
  "步":"step",
  "後":"back / after",
  "前":"front / before",
  "行":"walk",

  "爸":"dad",
  "媽":"mum",
  "哥":"older brother",
  "弟":"younger brother",
  "妹":"younger sister",

  "所":"place",
  "因":"cause",
  "為":"because / for",
  "每":"every",
  "以":"think / use",

  "游":"swim",
  "泳":"swim",
  "高":"tall",
  "路":"road",
  "睡":"sleep",

  "發":"happen",
  "二":"two",
  "十":"ten",
  "分":"minute",
  "現":"now / appear",

  "外":"outside",
  "住":"live",
  "婆":"grandmother",
  "爺":"grandfather",
  "樓":"building / floor",

  "鐘":"clock",
  "班":"class",
  "火":"fire",
  "等":"wait",
  "站":"station",

  "停":"stop",
  "滿":"full",
  "足":"enough",
  "飽":"full (after eating)",
  "梯":"stairs / ladder",

  "條":"measure word (long objects)",
  "裙":"skirt",
  "褲":"trousers",
  "穿":"wear",
  "衣":"clothes",

  "豬":"pig",
  "炒":"fry",
  "雞":"chicken",
  "肉":"meat",
  "菜":"vegetable",

  "餐":"meal",
  "廳":"hall / restaurant",
  "扒":"chop / steak",
  "麵":"noodles",
  "包":"bread / bun",

  "蛋":"egg",
  "氣":"air",
  "物":"thing / animal",
  "累":"tired",
  "空":"sky / space",

  "作":"do / make",
  "工":"work",
  "常":"often",
  "其":"other",
  "才":"talent",

  "入":"enter",
  "自":"self",
  "己":"self",
  "最":"most",
  "夾":"clip / pinch",

  "員":"member",
  "參":"join",
  "加":"add / join",
  "比":"compare",
  "賽":"competition",

  "幾":"how many / when",
  "具":"tool / measure",
  "文":"writing / language",
  "還":"also / return",
  "也":"also",

  "夏":"summer",
  "冬":"winter",
  "冷":"cold",
  "熱":"hot",
  "怕":"afraid",

  "假":"holiday / false",
  "期":"period",
  "用":"use",
  "治":"treat",
  "病":"illness",

  "痛":"pain",
  "次":"time / count",
  "藥":"medicine",
  "整":"whole / fix",
  "都":"all",

  "請":"please / invite",
  "嗎":"question particle",
  "忘":"forget",
  "記":"remember",
  "洗":"wash",

"真":"real / really",
  "知":"know",
  "道":"way / say",
  "誰":"who",
  "呢":"question particle",

  // Day 47
  "同":"same",
  "事":"matter / work",
  "超":"super",
  "市":"market",
  "食":"eat / food",

  // Day 48
  "放":"put",
  "鞋":"shoes",
  "換":"change",
  "服":"clothes",
  "手":"hand",

  // Day 49
  "先":"first",
  "吵":"argue / noisy",
  "認":"admit / know",
  "只":"only",
  "太":"too",

  // Day 50
  "錯":"wrong",
  "歉":"apologise",
  "第":"number (ordinal)",
  "句":"sentence",
  "跟":"follow",

  // Day 51
  "三":"three",
  "原":"original",
  "但":"but",
  "金":"money / gold",
  "電":"electric",

  // Day 52
  "新":"new",
  "對":"opposite",
  "雲":"cloud",
  "已":"already",
  "飛":"fly",

  // Day 53
  "比":"compare",
  "少":"less",
  "舊":"old",
  "內":"inside",
  "筆":"pen",

  // Day 54
  "把":"hold / classifier",
  "話":"speech",
  "覺":"feel",
  "醫":"doctor",
  "帶":"bring",

  // Day 55
  "再":"again",
  "方":"way / side",
  "從":"from",
  "騎":"ride",
  "試":"try",

  // Day 56
  "離":"leave",
  "名":"name",
  "黑":"black",
  "白":"white",
  "光":"light",

  // Day 57
  "色":"colour",
  "找":"find",
  "本":"book / original",
  "紅":"red",
  "陽":"sun",

  // Day 58
  "向":"towards",
  "東":"east",
  "五":"five",
  "右":"right",
  "左":"left",

  // Day 59
  "賣":"sell",
  "成":"become",
  "雖":"although",
  "然":"so / like this",
  "功":"effort",

  // Day 60
  "笑":"smile",
  "着":"-ing / wear",
  "興":"happy",
  "綠":"green",
  "燈":"light"
};

/* ------------------------
   Round 4：詞語
------------------------- */
const dayPhrases = {
  1:["我們","你們","他們","她們"],
  2:["家人","在家"],
  3:["大人","大家","看來","來去"],
  4:["大小","上下","女人","看見"],
  5:["日子","年月","時日","上年","小時"],
  6:["早上","晚上","早晚","天天"],
  7:["到了","一小時","一個人","不在"],
  8:["好人","沒有","這個","想要","好想"],
  9:["聽見","說過","走來","給你","給你"],
  10:["明天","很好","得到","好快","吃飯"],
  11:["就快","小心","大魚","做到"],
  12:["喜愛","跳舞","喜好","跳下"],
  13:["回家","這裏","男孩","兩個","孩子"],
  14:["可能","裏面","今天","今晚","可是"],
  15:["一口","鼻子"],
  16:["家中","出面","長大","鳥兒"],
  17:["老師","老人","快跑"],
  18:["寫字","房門","桌子","門口","大間"],
  19:["草地","大風","小草","馬兒"],
  20:["開門","起床","起來","床上","開會"],
  21:["夜晚","更早","短跑","問答","更好"],
  22:["車上","雨水","花草","花車"],
  23:["校長","花店","書店","學校","看書"],
  24:["學生","生長","草地","讀書","公園"],
  25:["飲水","運動","商場","好動","商人"],
  26:["跑步","後面","前面","行人","讓步"],
  27:["爸爸","哥哥","媽媽","妹妹","弟弟"],
  28:["因為","每天","以為","所以","為了"],
  29:["游泳","走路","公路","長高","高大"],
  30:["現在","十分","發現","發生","十字"],
  31:["門外","外出","外婆","爺爺","樓上"],
  32:["分鐘","班長","火車","車站","時鐘"],
  33:["停車","不停","滿足","吃飽","梯子"],
  34:["長裙","短褲","大衣","上衣","一條"],
  35:["豬肉","雞肉","炒飯","菜心","生菜"],
  36:["豬扒","餐廳","雞扒","麵包","早餐"],
  37:["天氣","雞蛋","動物","空間","天空"],
  38:["工作","其他","工人","天才","才能"],
  39:["自己","最後","出入","衣夾","自動"],
  40:["比賽","參加","人員","員工","加入"],
  41:["工具","玩具","中文","天文","也許"],
  42:["夏天","冬天","冬泳","熱水","冷氣"],
  43:["日期","假期","蛋治","假日","治病"],
  44:["病痛","吃藥","藥水","眼痛","病假"],
  45:["洗頭","忘記","請假","記得"],
46:["真的","知道","真假","誰人"],
  47:["同事","同學","超市","市場","食物"],
  48:["鞋子","放低","衣服","校服"],
  49:["先後","先生","把手"],
  50:["第二","做錯","道歉","句子","第幾"],
  51:["現金","原因","原來","但是","電梯"],
  52:["對面","更新","多雲","飛鳥"],
  53:["新舊","多少","筆記"],
  54:["電話","醫生","說話","聽話","聽覺"],
  55:["再見","方面","從來","再次"],
  56:["名字","白天","黑夜","離開","天光"],
  57:["本來","紅色","太陽","本地","找到"],
  58:["五步","向左","向右","東方","向前"],
  59:["成功","雖然","買賣","然後","用功"],
  60:["高興","綠色","路燈","笑話","綠草"]
};

/* ------------------------
   詞語英文翻譯
------------------------- */
const phraseTranslations = {
  "我們":"we, us",
  "你們":"you (plural)",
  "他們":"they",
  "她們":"they (female)",

  "家人":"family members",
  "在家":"at home",

  "大人":"adult",
  "大家":"everyone",
  "看來":"it seems",
  "來去":"come and go",

  "大小":"big and small",
  "上下":"up and down",
  "女人":"woman",
  "看見":"see",

  "日子":"days",
  "年月":"years and months",
  "時日":"time",
  "上年":"last year",
  "小時":"hour",

  "早上":"morning",
  "晚上":"evening",
  "早晚":"sooner or later",
  "天天":"every day",

  "到了":"arrived",
  "一小時":"one hour",
  "一個人":"one person / alone",
  "不在":"not here / absent",

  "好人":"good person",
  "沒有":"do not have",
  "這個":"this one",
  "想要":"want",
  "好想":"really want",

  "聽見":"hear",
  "說過":"have said",
  "走來":"walk over",
  "給你":"give you",

  "明天":"tomorrow",
  "很好":"very good",
  "得到":"get",
  "好快":"very fast",
  "男人":"man",

  "就快":"almost / soon",
  "小心":"be careful",
  "大魚":"big fish",
  "做到":"able to do",

  "喜愛":"love / enjoy",
  "跳舞":"dance",
  "喜好":"hobby / liking",
  "跳下":"jump down",

  "回家":"go home",
  "這裏":"here",
  "男孩":"boy",
  "兩個":"two (people / items)",
  "孩子":"child",

  "可能":"maybe / possible",
  "裏面":"inside",
  "今天":"today",
  "今晚":"tonight",
  "可是":"but / however",

  "一口":"one bite",
  "鼻子":"nose",

  "家中":"in the house",
  "出面":"outside",
  "長大":"grow up",
  "鳥兒":"bird",

  "老師":"teacher",
  "老人":"elder / old person",
  "快跑":"run fast",

  "寫字":"write characters",
  "房門":"room door",
  "桌子":"table",
  "門口":"doorway",
  "大間":"big room",

  "草地":"grassland",
  "大風":"strong wind",
  "小草":"grass",
  "馬兒":"horse",

  "開門":"open the door",
  "起床":"get up",
  "起來":"get up / rise",
  "床上":"on the bed",
  "開會":"have a meeting",

  "夜晚":"night",
  "更早":"earlier",
  "短跑":"short run",
  "問答":"question and answer",
  "更好":"better",

  "車上":"on the bus",
  "雨水":"rainwater",
  "花草":"plants",
  "花車":"flower car",

  "校長":"principal",
  "花店":"flower shop",
  "書店":"bookshop",
  "學校":"school",
  "看書":"read books",

  "學生":"student",
  "生長":"grow",
  "草地":"grass",
  "讀書":"study",
  "公園":"park",

  "飲水":"drink water",
  "運動":"exercise",
  "商場":"shopping mall",
  "好動":"active",
  "商人":"businessman",

  "跑步":"run",
  "後面":"behind",
  "前面":"in front",
  "行人":"pedestrian",
  "讓步":"give way",

  "爸爸":"dad",
  "哥哥":"older brother",
  "媽媽":"mum",
  "妹妹":"younger sister",
  "弟弟":"younger brother",

  "因為":"because",
  "每天":"every day",
  "以為":"think",
  "所以":"so",
  "為了":"for",

  "游泳":"swimming",
  "走路":"walk",
  "公路":"road",
  "長高":"grow taller",
  "高大":"tall",

  "現在":"now",
  "十分":"very",
  "發現":"discover",
  "發生":"happen",
  "十字":"cross",

  // Day 31
  "門外":"outside the door",
  "外出":"go out",
  "外婆":"grandmother",
  "爺爺":"grandfather",
  "樓上":"upstairs",

  // Day 32
  "分鐘":"minute",
  "班長":"class monitor",
  "火車":"train",
  "車站":"station",
  "時鐘":"clock",

  // Day 33
  "停車":"park (a car)",
  "不停":"non-stop",
  "滿足":"satisfied",
  "吃飽":"eat until full",
  "梯子":"ladder",

  // Day 34
  "長裙":"long skirt",
  "短褲":"shorts",
  "大衣":"coat",
  "上衣":"top",
  "一條":"one piece (long item)",

  // Day 35
  "豬肉":"pork",
  "雞肉":"chicken meat",
  "炒飯":"fried rice",
  "菜心":"choy sum",
  "生菜":"lettuce",

  // Day 36
  "豬扒":"pork chop",
  "餐廳":"restaurant",
  "雞扒":"chicken chop",
  "麵包":"bread",
  "早餐":"breakfast",

  // Day 37
  "天氣":"weather",
  "雞蛋":"egg",
  "動物":"animal",
  "空間":"space",
  "天空":"sky",

  // Day 38
  "工作":"work",
  "其他":"others",
  "工人":"worker",
  "天才":"genius",
  "才能":"ability",

  // Day 39
  "自己":"oneself",
  "最後":"finally",
  "出入":"go in and out",
  "衣夾":"clothes clip",
  "自動":"automatic",

  // Day 40
  "比賽":"competition",
  "參加":"take part",
  "人員":"staff",
  "員工":"employee",
  "加入":"join",

  "工具":"tools",
  "玩具":"toys",
  "中文":"Chinese language",
  "天文":"astronomy",
  "也許":"maybe",

  "夏天":"summer",
  "冬天":"winter",
  "冬泳":"winter swimming",
  "熱水":"hot water",
  "冷氣":"air conditioner",

  "日期":"date",
  "假期":"holiday",
  "蛋治":"sandwich",
  "假日":"day off",
  "治病":"treat illness",

  "病痛":"sickness",
  "吃藥":"take medicine",
  "藥水":"medicine liquid",
  "眼痛":"eye pain",
  "病假":"sick leave",

  "洗頭":"wash hair",
  "忘記":"forget",
  "請假":"ask for leave",
  "記得":"remember",

// Day 46
  "真的":"really",
  "知道":"know",
  "真假":"real or fake",
  "誰人":"who",

  // Day 47
  "同事":"colleague",
  "同學":"classmate",
  "超市":"supermarket",
  "市場":"market",
  "食物":"food",

  // Day 48
  "鞋子":"shoes",
  "放低":"put down",
  "衣服":"clothes",
  "校服":"school uniform",

  // Day 49
  "先後":"before and after",
  "先生":"Mr. / husband",
  "把手":"handle",

  // Day 50
  "第二":"second",
  "做錯":"do wrong",
  "道歉":"apologise",
  "句子":"sentence",
  "第幾":"which number",

  // Day 51
  "現金":"cash",
  "原因":"reason",
  "原來":"it turns out",
  "但是":"but",
  "電梯":"lift",

  // Day 52
  "對面":"opposite",
  "更新":"update",
  "多雲":"cloudy",
  "飛鳥":"flying birds",

  // Day 53
  "新舊":"new and old",
  "多少":"how many",
  "筆記":"notes",

  // Day 54
  "電話":"telephone",
  "醫生":"doctor",
  "說話":"speak",
  "聽話":"listen",
  "聽覺":"hearing",

  // Day 55
  "再見":"goodbye",
  "方面":"aspect",
  "從來":"never",
  "再次":"again",

  // Day 56
  "名字":"name",
  "白天":"daytime",
  "黑夜":"night",
  "離開":"leave",
  "天光":"daybreak",

  // Day 57
  "本來":"originally",
  "紅色":"red",
  "太陽":"sun",
  "本地":"local",
  "找到":"find",

  // Day 58
  "五步":"five steps",
  "向左":"turn left",
  "向右":"turn right",
  "東方":"east",
  "向前":"forward",

  // Day 59
  "成功":"success",
  "雖然":"although",
  "買賣":"buy and sell",
  "然後":"then",
  "用功":"work hard",

  // Day 60
  "高興":"happy",
  "綠色":"green",
  "路燈":"street light",
  "笑話":"joke",
  "綠草":"green grass"
};


/* ------------------------
   Round 6：句子（中＋英）
------------------------- */
const daySentences = {
  1:[],
  2:[
    { cn:"他們是人。", en:"They are people." },
    { cn:"你們在家。", en:"You are at home." },
    { cn:"我和他在家。", en:"He and I are at home." },
    { cn:"她是我家人。", en:"She is my family." },
    { cn:"她在家。", en:"She is at home." }
  ],
  3:[
    { cn:"你來我家。", en:"You come to my home." },
    { cn:"大家在家。", en:"Everyone is at home." },
    { cn:"他們來我家看我。", en:"They come to my home to see me." },
    { cn:"有人來來去去", en:"People come and go." },
    { cn:"看來他在你家。", en:"It seems he is at your home." }
  ],
  4:[
    { cn:"你下來。", en:"You come down." },
    { cn:"家有大有小。", en:"Homes come in big and small sizes." },
    { cn:"女人上去看看。", en:'The woman said: "Go up and have a look."' },
    { cn:"她看見你們在家。", en:"She sees you all at home." },
    { cn:"他在看下去。", en:"He is looking down." }
  ],
  5:[
    { cn:"我在看月。", en:"I am looking at the moon." },
    { cn:"她們在家時。", en:"When they are at home," },
    { cn:"他下年去看你。", en:"He says he will visit you next year." },
    { cn:"我日日在家。", en:"I am home every day." },
    { cn:"我看見有個女人在家。", en:"I see a woman at home." }
  ],
  6:[
    { cn:"我早上去你的家。", en:"I go to your home in the morning." },
    { cn:"你的子女晚上在家。", en:"Your children are at home in the morning." },
    { cn:"他晚上見我在家。", en:"He said he saw me at home in the evening." },
    { cn:"他天天看見你。", en:"He says he sees you every day." },
    { cn:"我早晚在她的家。", en:"I am at her home morning and night." }
  ],
  7:[
    { cn:"他們吃了一個小時。", en:"They ate for an hour." },
    { cn:"你的子女不去。", en:"Your children are not going." },
    { cn:"一個女子早上去。", en:"A woman goes in the morning." },
    { cn:"不見了他們。", en:"They are gone." },
    { cn:"我到了你家。", en:"I arrived at your home." },
    { cn:"天上有一個月。", en:"There is a moon on the sky." }
  ],
  8:[
    { cn:"一家人的好日子。", en:"A good day for the family." },
    { cn:"她們早上沒有來。", en:"They did not come in the morning." },
    { cn:"我想要的沒有。", en:"What I want is not here." },
    { cn:"女人好想吃這個。", en:"The woman really wants to eat this." },
    { cn:"這個好吃。", en:"This is tasty." }
  ],
  9:[
    { cn:"我聽過你說這個了。", en:"I have heard you say this." },
    { cn:"他給大家看。", en:"He shows everyone." },
    { cn:"女人在家走來走去。", en:"The woman walks around at home." },
    { cn:"他們給我吃的。", en:"They gave me something to eat." },
    { cn:"他說我們是一家人。", en:"He said we are one family." }
  ],
  10:[
    { cn:"明天在家吃晚飯。", en:"Eat dinner at home tomorrow." },
    { cn:"你走得很快。", en:"You walk very fast." },
    { cn:"好快到晚上。", en:"Evening comes quickly." },
    { cn:"你去年大得很快。", en:"You grew fast last year." },
    { cn:"聽說你想要吃飯。", en:"I heard you want to eat." }
  ],
  11:[
    { cn:"他說她會做得到。", en:"He said she can do it." },
    { cn:"你吃魚要小心。", en:"Be careful when eating fish." },
    { cn:"她會在家做飯。", en:"She will cook at home." },
    { cn:"我不小心到了魚。", en:"I accidentally touched the fish." },
    { cn:"我們就快到你的家了。", en:"We are almost at your home." }
  ],
  12:[
    { cn:"女人很喜愛跳舞。", en:"The woman loves dancing." },
    { cn:"他跳得很快。", en:"He jumps very fast." },
    { cn:"你很愛吃魚和飯。", en:"You love eating fish and rice." },
    { cn:"我和他在家玩。", en:"He and I play at home." },
    { cn:"他們很有愛心。", en:"They are very kind." }
  ],
  13:[
    { cn:"一個男孩和一個女孩在跳舞。", en:"A boy and a girl are dancing." },
    { cn:"兩孩子回家吃魚。", en:"The two children go home to eat fish." },
    { cn:"這裏有人在跳舞。", en:"Someone is dancing here." },
    { cn:"過兩天來你家吃飯。", en:"Come to your home for a meal in two days." },
    { cn:"這裏不是很快做到。", en:"It cannot be done very quickly here." }
  ],
  14:[
    { cn:"我今天可能會來你家。", en:"I may come to your home today." },
    { cn:"今天可能下大雨。", en:"It may rain heavily today." },
    { cn:"女孩們想在裏面玩。", en:"The girls want to play inside." },
    { cn:"他可能沒有回家兩天。", en:"He may not have gone home for two days." },
    { cn:"明天你不能回家吃飯。", en:"Tomorrow you cannot go home for dinner." }
  ],
  15:[
    { cn:"男孩的眼很小。", en:"The boy's eyes are small." },
    { cn:"我吃了一口魚。", en:"I took a bite of fish." },
    { cn:"他看見我的鼻子。", en:"He saw my nose." },
    { cn:"她吃一個魚頭。", en:"She ate a fish head." },
    { cn:"人有兩隻眼。", en:"People have two eyes." }
  ],
  16:[
    { cn:"有一隻鳥兒在家中。", en:"There is a bird in the house." },
    { cn:"她的鼻子很長。", en:"Her nose is long." },
    { cn:"他的大女很喜愛鳥兒。", en:"His eldest daughter loves birds." },
    { cn:"兒子長大了。", en:"The son has grown up." },
    { cn:"說出來聽聽。", en:"Say it and let me hear." }
  ],
  17:[
    { cn:"兒子跑得很快。", en:"The son runs fast." },
    { cn:"她走到很遠了。", en:"She has walked far." },
    { cn:"老師的家很近。", en:"The teacher's home is very near." },
    { cn:"孩子們跑來跑去。", en:"The children run around." },
    { cn:"老人回家吃飯。", en:"The old man goes home to eat." }
  ],
  18:[
    { cn:"家中有兩間很大的房。", en:"There are two big rooms in the house." },
    { cn:"老人寫字寫得很快。", en:"The old man writes very fast." },
    { cn:"房門很大。", en:"The room door is big." },
    { cn:"老師在房寫字。", en:"The teacher is writing in the room." },
    { cn:"兩隻鳥兒在中間。", en:"Two birds are in the middle." }
  ],
  19:[
    { cn:"那馬兒跑得很快。", en:"The horse runs fast." },
    { cn:"大風吹走了那小鳥。", en:"The strong wind blew away the little bird." },
    { cn:"草地上有小孩在跳舞。", en:"A child is dancing on the grass." },
    { cn:"他給馬兒吃草。", en:"He feeds grass to the horse." },
    { cn:"晚上會有大風雨。", en:"There will be a storm tonight." }
  ],
  20:[
    { cn:"那男人在開會。", en:"The man is in a meeting." },
    { cn:"開門讓他出去。", en:"Open the door to let him out." },
    { cn:"他被大風吹走。", en:"He was blown away by the strong wind." },
    { cn:"我讓他吃飯。", en:"I let him eat." },
    { cn:"那老人早上起床。", en:"Wake up in the morning." }
  ],

  21:[
    { cn:"老師問，男孩答。", en:"The teacher asks, and the boy answers." },
    { cn:"可能更早會下雨了。", en:"It may rain earlier." },
    { cn:"聽說馬兒在夜晚跑得更快。", en:"I heard the horse runs faster at night." },
    { cn:"他們答得更好。", en:"They answered better." },
    { cn:"夜裏沒有人在跳舞。", en:"No one is dancing at night." }
  ],

  22:[
    { cn:"女孩坐在車上吃飯。", en:"The girl eats on the bus." },
    { cn:"雨水在我面上。", en:"Rainwater is on my face." },
    { cn:"家裏沒有花草。", en:"There are no plants at home." },
    { cn:"老人早上就坐車上山。", en:"The old man takes a bus to the mountain in the morning." },
    { cn:"男孩愛在山上玩車。", en:"The boy likes to play with cars on the mountain." }
  ],

  23:[
    { cn:"校長夜晚不會在學校。", en:"The principal is not at school at night." },
    { cn:"他們在花店買花。", en:"They buy flowers at the flower shop." },
    { cn:"不可在書上寫字。", en:"Do not write in books." },
    { cn:"長鼻子馬兒在山上學跳舞。", en:"The long-nosed horse learns to dance on the mountain." },
    { cn:"這個小孩一天到晚在看書。", en:"This child reads all day long." }
  ],

  24:[
    { cn:"學生在學校讀書。", en:"Students study at school." },
    { cn:"我見到公園的草在生長。", en:"I see the grass growing in the park." },
    { cn:"花園裏有兩間書店。", en:"There are two bookshops in the garden." },
    { cn:"那小孩生長得很快。", en:"That child is growing very fast." },
    { cn:"學生們想坐在草地上吃飯。", en:"The students want to sit on the grass and eat." }
  ],

  25:[
    { cn:"做運動就要飲水。", en:"You need to drink water when exercising." },
    { cn:"聽說運動場很遠。", en:"I heard the sports ground is far away." },
    { cn:"公公早上在房間做運動。", en:"Grandpa exercises in his room in the morning." },
    { cn:"小孩去商場買花。", en:"The child goes to the mall to buy flowers." },
    { cn:"商人們在開會中。", en:"The businessmen are having a meeting." }
  ],

  26:[
    { cn:"早上多做運動。", en:"Do more exercise in the morning." },
    { cn:"過年時，公園裏有更多人看花。", en:"During New Year, more people watch flowers in the park." },
    { cn:"明天去運動場後面行山。", en:"Tomorrow we go hiking behind the sports ground." },
    { cn:"學生在學校跑步。", en:"Students run at school." },
    { cn:"小心前面有很多行人。", en:"Be careful, there are many pedestrians ahead." }
  ],

  27:[
    { cn:"弟弟坐車去這花店買花給媽媽。", en:"The younger brother takes a bus to buy flowers for mum." },
    { cn:"我的爸媽是商人。", en:"My parents are businessmen." },
    { cn:"我的哥哥為了讀書好早起床。", en:"My brother wakes up early to study." },
    { cn:"妹妹不讓我玩。", en:"My sister does not let me play." },
    { cn:"爸爸媽媽和妹妹是我的家人。", en:"My dad, mum and sister are my family." }
  ],

  28:[
    { cn:"他為了學跳水很早起床。", en:"He wakes up early to learn diving." },
    { cn:"因為風很大，所以我們回家了。", en:"Because the wind is strong, we went home." },
    { cn:"父親每天去商場和公公吃飯。", en:"Father goes to the mall to eat with grandpa every day." },
    { cn:"我以為你明天不去跑步了。", en:"I thought you would not go running tomorrow." },
    { cn:"鳥兒能每晚飛來飛去。", en:"Birds can fly around every night." }
  ],

  29:[
    { cn:"那女孩每天游泳，所以長得很高。", en:"The girl swims every day, so she grows tall." },
    { cn:"讓行人在路上走。", en:"Let pedestrians walk on the road." },
    { cn:"哥哥更高大，因為他每天運動。", en:"My brother is taller because he exercises every day." },
    { cn:"在公路上有很多車。", en:"There are many cars on the road." },
    { cn:"他近來早睡早起，天天長高。", en:"He sleeps early and wakes early, growing taller every day." }
  ],

  30:[
    { cn:"車到了十字路口中間。", en:"The car reaches the middle of the crossroads." },
    { cn:"媽媽發現了我今晚沒有睡。", en:"Mum found out I did not sleep tonight." },
    { cn:"現在是一時二十分。", en:"It is now one twenty." },
    { cn:"公公的兩間房間看來十分大。", en:"Grandpa’s two rooms look very big." },
    { cn:"老師和學生分開了。", en:"The teacher and students separated." }
  ],

  31:[
    { cn:"外婆問媽媽是不是住在樓上。", en:"Grandma asked Mum if she lives upstairs." },
    { cn:"爺爺現在去公園後面游泳。", en:"Grandpa is going swimming behind the park now." },
    { cn:"爸爸在寫字樓。", en:"Dad is in the office." },
    { cn:"老婆婆被風吹起。", en:"The old lady was blown by the wind." },
    { cn:"哥哥說門外有人走過。", en:"My brother said someone walked past outside the door." }
  ],

  32:[
    { cn:"爺爺在這火車站等車。", en:"Grandpa is waiting for the train at this station." },
    { cn:"每過一小時二十分鐘就有一班車。", en:"There is a train every one hour and twenty minutes." },
    { cn:"公園裏不可生火。", en:"Lighting fires in the park is not allowed." },
    { cn:"老師校長和學生在那班房。", en:"The teacher, principal and students are in that classroom." },
    { cn:"夜晚我聽到樓下發生大火。", en:"At night I heard a big fire downstairs." }
  ],

  33:[
    { cn:"樓下停車場滿了。", en:"The car park downstairs is full." },
    { cn:"我看見魚在不停地游。", en:"I saw fish swimming non-stop." },
    { cn:"車不能停下來。", en:"The car cannot stop." },
    { cn:"吃飽後行樓梯。", en:"After eating, we walk up the stairs." },
    { cn:"他想給我門外的長梯子。", en:"He wants to give me the long ladder outside the door." }
  ],

  34:[
    { cn:"今天是學校的開學日。", en:"Today is the first day of school." },
    { cn:"早上妹妹穿好了上衣和校裙。", en:"In the morning, my sister put on her top and school skirt." },
    { cn:"弟弟的褲子很長。", en:"My younger brother’s trousers are very long." },
    { cn:"外面大風大雨。", en:"It is very windy and rainy outside." },
    { cn:"出外要穿雨衣。", en:"You need to wear a raincoat when going out." }
  ],

  35:[
    { cn:"晚上有豬肉炒菜和飯。", en:"At night we have pork, fried vegetables and rice." },
    { cn:"公公有一隻雞和兩隻豬。", en:"Grandpa has one chicken and two pigs." },
    { cn:"吃了豬肉更吃了炒菜心。", en:"After eating pork, I also ate fried choy sum." },
    { cn:"外婆喜愛吃炒飯。", en:"Grandma likes eating fried rice." },
    { cn:"媽媽說過炒菜要大火。", en:"Mum said vegetables need high heat when frying." }
  ],

  36:[
    { cn:"今天是婆婆的生日。", en:"Today is grandma’s birthday." },
    { cn:"早餐她想吃麵包。", en:"For breakfast she wants to eat bread." },
    { cn:"下午她想去快餐店吃豬扒麵。", en:"In the afternoon she wants to eat pork chop noodles." },
    { cn:"晚上我們到餐廳吃飯。", en:"At night we go to a restaurant for dinner." },
    { cn:"有生菜包魚和雞扒飯，很滿足。", en:"There are lettuce wraps, fish and chicken chop rice. Very satisfying." }
  ],

  37:[
    { cn:"因為今天天氣很好，所以我和哥哥去了行山。", en:"Because the weather is good today, my brother and I went hiking." },
    { cn:"山上的空氣很好。", en:"The air in the mountains is very fresh." },
    { cn:"有很多花草鳥兒和動物。", en:"There are many plants, birds and animals." },
    { cn:"行到累了，我們就在餐廳吃餐蛋麵。", en:"When we got tired, we ate egg noodles at a restaurant." },
    { cn:"晚上回到家大家很累，很早就睡了。", en:"At night everyone was tired and went to bed early." }
  ],

  38:[
    { cn:"爺爺很喜愛工作。", en:"Grandpa really loves working." },
    { cn:"聽說他是一個很有才能的商人。", en:"I heard he is a very talented businessman." },
    { cn:"常常要和其他人開會。", en:"He often needs to attend meetings with others." },
    { cn:"做到很晚才回家。", en:"He works very late before going home." },
    { cn:"每晚很夜才睡。", en:"He goes to bed very late every night." }
  ],

  39:[
    { cn:"我最近看見一個女孩。", en:"Recently I saw a girl." },
    { cn:"她自己一個在商場出口玩自動門。", en:"She was playing with the automatic door by herself." },
    { cn:"她走出走入。", en:"She walked in and out." },
    { cn:"玩了二十分鐘。", en:"She played for twenty minutes." },
    { cn:"最後被自動門夾住了。", en:"In the end she got stuck in the automatic door." }
  ],

  40:[
    { cn:"婆婆以前就是個運動員。", en:"Grandma used to be an athlete." },
    { cn:"她跑得最快，跳得最高。", en:"She ran the fastest and jumped the highest." },
    { cn:"游泳游得最遠。", en:"She swam the farthest." },
    { cn:"她參加過很多比賽。", en:"She has joined many competitions." },
    { cn:"現在常常在運動會中做工作人員。", en:"Now she often works as staff at sports events." }
  ],

41:[
    { cn:"哥哥在外地工作了很多年。", en:"My brother has worked overseas for many years." },
    { cn:"妹妹問他幾時可以見面。", en:"My sister asked when they could meet." },
    { cn:"他說也許過年會回來。", en:"He said maybe he would come back during the New Year." },
    { cn:"聽說他要給小孩買好多文具。", en:"I heard he will buy many stationery items for the children." },
    { cn:"還有玩具和中文書。", en:"There are also toys and Chinese books." }
  ],
  42:[
    { cn:"冬天天氣很冷。", en:"The weather is very cold in winter." },
    { cn:"夏天很熱，其他人去了游水。", en:"Summer is very hot, and others went swimming." },
    { cn:"天氣熱要開冷氣和多飲水。", en:"When it is hot, turn on the air conditioner and drink more water." },
    { cn:"我穿大衣因為我怕冷。", en:"I wear a coat because I am afraid of the cold." },
    { cn:"夏天工人在外工作更累了。", en:"Workers are more tired working outside in summer." }
  ],
  43:[
    { cn:"今天學校假期不用上學。", en:"Today is a school holiday, so there is no need to go to school." },
    { cn:"我自己煮早餐給自己。", en:"I cooked breakfast for myself." },
    { cn:"有三文治夾雞蛋。", en:"There is a sandwich with egg." },
    { cn:"還有了一杯熱飲。", en:"There is also a cup of hot drink." },
    { cn:"很滿足。", en:"I feel very satisfied." }
  ],
  44:[
    { cn:"每次假期都生病。", en:"I get sick every holiday." },
    { cn:"今天起床就頭痛。", en:"I had a headache when I woke up today." },
    { cn:"吃了很多藥水。", en:"I took a lot of medicine." },
    { cn:"因為睡了一整天。", en:"Because I slept the whole day." },
    { cn:"現在好多了。", en:"I feel much better now." }
  ],
  45:[
    { cn:"我忘記今天都有游泳班。", en:"I forgot that I have swimming class today." },
    { cn:"現在才記起。", en:"I only remembered it now." },
    { cn:"請問你有短褲嗎？", en:"May I ask if you have shorts?" },
    { cn:"洗頭水可給我用嗎？", en:"Can you let me use the shampoo?" }
  ],
46:[
    { cn:"你知道誰會參加比賽嗎。", en:"Do you know who will join the competition?" },
    { cn:"我真的不知道是誰呢。", en:"I really don’t know who it is." },
    { cn:"請你真的想一想。", en:"Please really think about it." },
    { cn:"誰都可以參加的。", en:"Anyone can join." },
    { cn:"最有可能是他哥哥。", en:"The most likely one is his brother." }
  ],
  47:[
    { cn:"同事整天沒事做就去了超市。", en:"My colleague went to the supermarket because he had nothing to do." },
    { cn:"買了文具、食物和食具。", en:"He bought stationery, food and utensils." },
    { cn:"回來時，他看見妹妹的同學。", en:"When he came back, he saw his sister’s classmate." },
    { cn:"在花店工作到很累。", en:"They worked in the flower shop until they were very tired." }
  ],
  48:[
    { cn:"回家後洗手。", en:"Wash your hands after going home." },
    { cn:"鞋要放在門口。", en:"Shoes should be placed at the door." },
    { cn:"書包不要放在桌上。", en:"Do not put the schoolbag on the table." },
    { cn:"入睡房換衣服。", en:"Change clothes in the bedroom." },
    { cn:"就可以食飯了。", en:"Then you can eat." }
  ],
  49:[
    { cn:"我不認為我先生病了。", en:"I don’t think my husband is sick." },
    { cn:"他可能只是太累。", en:"He may just be too tired." },
    { cn:"今天天氣很冷還下雨。", en:"Today is cold and rainy." },
    { cn:"只要睡一下就好。", en:"Just sleep for a while and it will be fine." },
    { cn:"開門時不要太吵。", en:"Don’t be too noisy when opening the door." }
  ],
  50:[
    { cn:"她和同學因小事吵起來。", en:"She argued with her classmate over a small matter." },
    { cn:"後來發現自己也有錯。", en:"Later she found that she was also wrong." },
    { cn:"就馬上跟同學說句道歉。", en:"She immediately said sorry to her classmate." },
    { cn:"第二天大家都沒事忘記了。", en:"The next day everyone forgot about it." }
  ],
  51:[
    { cn:"三個人步行到商場買藥。", en:"Three people walked to the mall to buy medicine." },
    { cn:"行錯了第二條樓梯。", en:"They took the wrong second staircase." },
    { cn:"原來用電梯可到樓上。", en:"It turned out the lift could take them upstairs." },
    { cn:"最後到了藥房。", en:"Finally they reached the pharmacy." },
    { cn:"但他們都沒有現金。", en:"But they had no cash." }
  ],
  52:[
    { cn:"對面新的大樓已起好。", en:"The new building opposite is finished." },
    { cn:"樓高到可穿過雲。", en:"The building is so tall it reaches the clouds." },
    { cn:"在裏面可看到鳥兒飛過。", en:"You can see birds flying past inside." },
    { cn:"新的電梯已可以用。", en:"The new lift can now be used." },
    { cn:"對不起我今天沒空。", en:"Sorry, I am not free today." }
  ],
  53:[
    { cn:"我吃得比他少。", en:"I eat less than him." },
    { cn:"你的舊書包內沒有筆。", en:"There is no pen inside your old schoolbag." },
    { cn:"你用筆寫字。", en:"You write with a pen." },
    { cn:"馬跑得比人快。", en:"Horses run faster than people." },
    { cn:"舊了的衣服可給其他人。", en:"Old clothes can be given to others." }
  ],
  54:[
    { cn:"把筆放在書包內。", en:"Put the pen in the schoolbag." },
    { cn:"快去聽電話。", en:"Go answer the phone quickly." },
    { cn:"眼覺得痛要看醫生。", en:"If your eyes hurt, see a doctor." },
    { cn:"我沒有帶電話。", en:"I did not bring my phone." },
    { cn:"發覺他想把車換走。", en:"I noticed he wanted to change the car." }
  ],
  55:[
    { cn:"快跟老師說再見。", en:"Quickly say goodbye to the teacher." },
    { cn:"他每方面都做得很好。", en:"He does well in every area." },
    { cn:"爸爸從來都不喜愛跳舞。", en:"Dad has never liked dancing." },
    { cn:"從家騎自行車去泳池很遠。", en:"It is far to cycle from home to the swimming pool." },
    { cn:"今天我再一次試在馬路騎馬。", en:"Today I tried riding a horse on the road again." }
  ],
  56:[
    { cn:"從天光等到天黑。", en:"Wait from dawn until night." },
    { cn:"他還沒有名字。", en:"He still has no name." },
    { cn:"離開工作的地方去餐廳。", en:"Leave the workplace to go to the restaurant." },
    { cn:"黑夜裏沒有光。", en:"There is no light at night." },
    { cn:"我家離火車站很近。", en:"My home is very close to the train station." }
  ],
  57:[
    { cn:"紅色的太陽在天空。", en:"The red sun is in the sky." },
    { cn:"家裏有陽光。", en:"There is sunshine at home." },
    { cn:"穿上黑色的衣服。", en:"Put on black clothes." },
    { cn:"找到一本紅色的記事本。", en:"Found a red notebook." },
    { cn:"本來我怕光的。", en:"I was originally afraid of light." }
  ],
  58:[
    { cn:"向東行五步。", en:"Walk five steps to the east." },
    { cn:"向左走向前行。", en:"Go left and then forward." },
    { cn:"面向前，把手放在後面。", en:"Face forward and put your hands behind." },
    { cn:"太陽在東面。", en:"The sun is in the east." },
    { cn:"右面不能動。", en:"The right side cannot move." }
  ],
  59:[
    { cn:"雖然他每天只寫五個字。", en:"Although he writes only five characters a day." },
    { cn:"但是他很用功寫作。", en:"But he works very hard at writing." },
    { cn:"最後他成為出名的作家。", en:"In the end, he became a famous writer." },
    { cn:"他的書賣得很好。", en:"His books sell very well." }
  ],
  60:[
    { cn:"妹妹很愛笑。", en:"My sister loves to smile." },
    { cn:"我看着她也很高興。", en:"I feel happy watching her." },
    { cn:"她常常跟我玩紅綠燈。", en:"She often plays traffic lights with me." },
    { cn:"過馬路要小心。", en:"Be careful when crossing the road." },
    { cn:"你知道燈是誰發明嗎？", en:"Do you know who invented the light?" }
  ]

};

// 暫時先留空，之後你確定英文再填
//const wordTranslations   = {};
//const phraseTranslations = {};

