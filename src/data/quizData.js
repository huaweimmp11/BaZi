const QUIZ_DATA = [
  {
    "id": "q001",
    "difficulty": "beginner",
    "type": "single",
    "category": "天干",
    "question": "十天干中，哪两个属于\"木\"？",
    "options": [
      "A. 甲、乙",
      "B. 丙、丁",
      "C. 庚、辛",
      "D. 壬、癸"
    ],
    "answer": [
      "A"
    ],
    "explanation": "甲乙五行属木，甲为阳木乙为阴木。"
  },
  {
    "id": "q002",
    "difficulty": "beginner",
    "type": "single",
    "category": "天干",
    "question": "天干\"丙\"的五行属性是什么？",
    "options": [
      "A. 木",
      "B. 火",
      "C. 土",
      "D. 金"
    ],
    "answer": [
      "B"
    ],
    "explanation": "丙为阳火，丁为阴火。"
  },
  {
    "id": "q003",
    "difficulty": "beginner",
    "type": "single",
    "category": "天干",
    "question": "天干\"戊\"和\"己\"的共同五行属性是？",
    "options": [
      "A. 木",
      "B. 火",
      "C. 土",
      "D. 金"
    ],
    "answer": [
      "C"
    ],
    "explanation": "戊为阳土（城墙之土），己为阴土（田园之土）。"
  },
  {
    "id": "q004",
    "difficulty": "beginner",
    "type": "single",
    "category": "天干",
    "question": "天干\"庚\"的阴阳属性是？",
    "options": [
      "A. 阳",
      "B. 阴",
      "C. 可阴可阳",
      "D. 无阴阳"
    ],
    "answer": [
      "A"
    ],
    "explanation": "甲丙戊庚壬为阳，乙丁己辛癸为阴。庚为阳金。"
  },
  {
    "id": "q005",
    "difficulty": "beginner",
    "type": "single",
    "category": "天干",
    "question": "下列哪个天干属于\"阴\"？",
    "options": [
      "A. 甲",
      "B. 丙",
      "C. 戊",
      "D. 辛"
    ],
    "answer": [
      "D"
    ],
    "explanation": "甲丙戊庚壬为阳干，乙丁己辛癸为阴干。辛为阴金。"
  },
  {
    "id": "q006",
    "difficulty": "beginner",
    "type": "single",
    "category": "地支",
    "question": "地支\"子\"的五行属性是？",
    "options": [
      "A. 木",
      "B. 火",
      "C. 土",
      "D. 水"
    ],
    "answer": [
      "D"
    ],
    "explanation": "子在正北方，五行属水。"
  },
  {
    "id": "q007",
    "difficulty": "beginner",
    "type": "single",
    "category": "地支",
    "question": "地支\"午\"在十二地支中排第几？",
    "options": [
      "A. 第五",
      "B. 第六",
      "C. 第七",
      "D. 第八"
    ],
    "answer": [
      "C"
    ],
    "explanation": "子丑寅卯辰巳午未申酉戌亥，午排第七位。"
  },
  {
    "id": "q008",
    "difficulty": "beginner",
    "type": "single",
    "category": "地支",
    "question": "地支\"寅\"对应的生肖是？",
    "options": [
      "A. 牛",
      "B. 虎",
      "C. 兔",
      "D. 龙"
    ],
    "answer": [
      "B"
    ],
    "explanation": "寅对应虎。子鼠丑牛寅虎卯兔辰龙巳蛇午马未羊申猴酉鸡戌狗亥猪。"
  },
  {
    "id": "q009",
    "difficulty": "beginner",
    "type": "single",
    "category": "地支",
    "question": "地支\"酉\"的五行属性是？",
    "options": [
      "A. 木",
      "B. 火",
      "C. 金",
      "D. 水"
    ],
    "answer": [
      "C"
    ],
    "explanation": "酉在正西方，五行属金。"
  },
  {
    "id": "q010",
    "difficulty": "beginner",
    "type": "single",
    "category": "地支",
    "question": "\"丑\"对应的时辰是？",
    "options": [
      "A. 23:00-00:59",
      "B. 01:00-02:59",
      "C. 03:00-04:59",
      "D. 05:00-06:59"
    ],
    "answer": [
      "B"
    ],
    "explanation": "子时23-00、丑时01-02、寅时03-04、卯时05-06。"
  },
  {
    "id": "q011",
    "difficulty": "beginner",
    "type": "single",
    "category": "五行",
    "question": "五行相生的正确顺序是？",
    "options": [
      "A. 木→火→土→金→水→木",
      "B. 木→金→火→水→土→木",
      "C. 金→木→水→火→土→金",
      "D. 水→火→金→木→土→水"
    ],
    "answer": [
      "A"
    ],
    "explanation": "木生火、火生土、土生金、金生水、水生木。"
  },
  {
    "id": "q012",
    "difficulty": "beginner",
    "type": "single",
    "category": "五行",
    "question": "\"金克木\"中，被克的一方是？",
    "options": [
      "A. 金",
      "B. 木",
      "C. 两者皆被克",
      "D. 无被克关系"
    ],
    "answer": [
      "B"
    ],
    "explanation": "金克木，金为克者，木为被克者。"
  },
  {
    "id": "q013",
    "difficulty": "beginner",
    "type": "single",
    "category": "五行",
    "question": "水能克什么？",
    "options": [
      "A. 木",
      "B. 火",
      "C. 土",
      "D. 金"
    ],
    "answer": [
      "B"
    ],
    "explanation": "水克火。金克木、木克土、土克水、水克火、火克金。"
  },
  {
    "id": "q014",
    "difficulty": "beginner",
    "type": "single",
    "category": "排盘",
    "question": "立春一般在公历哪一天？",
    "options": [
      "A. 1月6日",
      "B. 2月4日",
      "C. 3月6日",
      "D. 4月5日"
    ],
    "answer": [
      "B"
    ],
    "explanation": "立春在2月3-5日之间，是年柱分界线。"
  },
  {
    "id": "q015",
    "difficulty": "beginner",
    "type": "single",
    "category": "排盘",
    "question": "八字中年柱的分界线是？",
    "options": [
      "A. 正月初一",
      "B. 立春",
      "C. 冬至",
      "D. 元旦"
    ],
    "answer": [
      "B"
    ],
    "explanation": "年柱以立春为界，非农历正月初一。"
  },
  {
    "id": "q016",
    "difficulty": "beginner",
    "type": "single",
    "category": "排盘",
    "question": "五虎遁用于推算什么？",
    "options": [
      "A. 年干",
      "B. 月干",
      "C. 日支",
      "D. 时干"
    ],
    "answer": [
      "B"
    ],
    "explanation": "五虎遁根据年干推算月干。"
  },
  {
    "id": "q017",
    "difficulty": "beginner",
    "type": "single",
    "category": "排盘",
    "question": "五鼠遁用于推算什么？",
    "options": [
      "A. 年干",
      "B. 月干",
      "C. 日支",
      "D. 时干"
    ],
    "answer": [
      "D"
    ],
    "explanation": "五鼠遁根据日干推算时干。"
  },
  {
    "id": "q018",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "甲木见己土，己土是甲的什么？",
    "options": [
      "A. 正财",
      "B. 偏财",
      "C. 正官",
      "D. 七杀"
    ],
    "answer": [
      "A"
    ],
    "explanation": "甲阳木克己阴土，异性相克为正财。"
  },
  {
    "id": "q019",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "丙火见甲木，甲木是丙的什么？",
    "options": [
      "A. 正印",
      "B. 偏印",
      "C. 食神",
      "D. 伤官"
    ],
    "answer": [
      "B"
    ],
    "explanation": "甲阳木生丙阳火，同性相生为偏印。"
  },
  {
    "id": "q020",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "庚金见丁火，丁火是庚的什么？",
    "options": [
      "A. 正官",
      "B. 七杀",
      "C. 正印",
      "D. 偏印"
    ],
    "answer": [
      "A"
    ],
    "explanation": "丁阴火克庚阳金，异性相克为正官。"
  },
  {
    "id": "q021",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "壬水见戊土，戊土是壬的什么？",
    "options": [
      "A. 偏财",
      "B. 正财",
      "C. 七杀",
      "D. 正官"
    ],
    "answer": [
      "C"
    ],
    "explanation": "戊阳土克壬阳水，同性相克为七杀。"
  },
  {
    "id": "q022",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "乙木见丙火，丙火是乙的什么？",
    "options": [
      "A. 食神",
      "B. 伤官",
      "C. 正财",
      "D. 偏财"
    ],
    "answer": [
      "B"
    ],
    "explanation": "乙阴木生丙阳火，异性相生为伤官。"
  },
  {
    "id": "q023",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "丁火见戊土，戊土是丁的什么？",
    "options": [
      "A. 食神",
      "B. 伤官",
      "C. 正财",
      "D. 偏财"
    ],
    "answer": [
      "B"
    ],
    "explanation": "丁阴火生戊阳土，异性相生为伤官。"
  },
  {
    "id": "q024",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "比肩和劫财的共同点是？",
    "options": [
      "A. 与日干五行相同",
      "B. 与日干阴阳相同",
      "C. 与日干相克",
      "D. 与日干相生"
    ],
    "answer": [
      "A"
    ],
    "explanation": "比肩（同性）和劫财（异性）都与日干五行相同。"
  },
  {
    "id": "q025",
    "difficulty": "beginner",
    "type": "single",
    "category": "十神",
    "question": "\"正官\"代表的六亲关系通常指什么？",
    "options": [
      "A. 父亲",
      "B. 丈夫",
      "C. 子女",
      "D. 母亲"
    ],
    "answer": [
      "B"
    ],
    "explanation": "对女性正官代表丈夫；对男性正官代表女儿。也代表事业官位。"
  },
  {
    "id": "q026",
    "difficulty": "beginner",
    "type": "single",
    "category": "综合",
    "question": "十天干中五行属金的字有几个？",
    "options": [
      "A. 一个",
      "B. 两个",
      "C. 三个",
      "D. 四个"
    ],
    "answer": [
      "B"
    ],
    "explanation": "庚和辛五行属金，每行两个字一阳一阴。"
  },
  {
    "id": "q027",
    "difficulty": "beginner",
    "type": "single",
    "category": "综合",
    "question": "十二地支中五行属土的共有几个？",
    "options": [
      "A. 两个",
      "B. 三个",
      "C. 四个",
      "D. 六个"
    ],
    "answer": [
      "C"
    ],
    "explanation": "丑、辰、未、戌四墓库属土。"
  },
  {
    "id": "q028",
    "difficulty": "beginner",
    "type": "single",
    "category": "综合",
    "question": "子午卯酉的共同特点是？",
    "options": [
      "A. 五行相同",
      "B. 四正方位",
      "C. 都属土",
      "D. 都属阳"
    ],
    "answer": [
      "B"
    ],
    "explanation": "子北、午南、卯东、酉西为四正方位。"
  },
  {
    "id": "q029",
    "difficulty": "beginner",
    "type": "multiple",
    "category": "综合",
    "question": "以下哪些属四长生地支？（多选）",
    "options": [
      "A. 寅",
      "B. 申",
      "C. 巳",
      "D. 亥"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "寅申巳亥为四长生（四驿马）。"
  },
  {
    "id": "q030",
    "difficulty": "beginner",
    "type": "single",
    "category": "综合",
    "question": "日柱的地支又称作什么？",
    "options": [
      "A. 年支",
      "B. 月支",
      "C. 日支",
      "D. 时支"
    ],
    "answer": [
      "C"
    ],
    "explanation": "日柱地支为日支，代表配偶宫。"
  },
  {
    "id": "q031",
    "difficulty": "intermediate",
    "type": "single",
    "category": "旺衰",
    "question": "旺相休囚死中，当令五行处于什么状态？",
    "options": [
      "A. 休",
      "B. 囚",
      "C. 旺",
      "D. 死"
    ],
    "answer": [
      "C"
    ],
    "explanation": "当令者为旺。如春木旺、夏火旺、秋金旺、冬水旺。"
  },
  {
    "id": "q032",
    "difficulty": "intermediate",
    "type": "single",
    "category": "旺衰",
    "question": "春木旺，火在春天处于什么状态？",
    "options": [
      "A. 旺",
      "B. 相",
      "C. 休",
      "D. 囚"
    ],
    "answer": [
      "B"
    ],
    "explanation": "木旺生火，火为相。旺→相→休→囚→死。"
  },
  {
    "id": "q033",
    "difficulty": "intermediate",
    "type": "single",
    "category": "旺衰",
    "question": "被旺相五行所克的五行处于什么状态？",
    "options": [
      "A. 相",
      "B. 休",
      "C. 囚",
      "D. 死"
    ],
    "answer": [
      "D"
    ],
    "explanation": "死是被旺相所克者的状态。如春木旺克土，土死。"
  },
  {
    "id": "q034",
    "difficulty": "intermediate",
    "type": "single",
    "category": "旺衰",
    "question": "秋金旺，水处于什么状态？",
    "options": [
      "A. 相",
      "B. 休",
      "C. 囚",
      "D. 死"
    ],
    "answer": [
      "A"
    ],
    "explanation": "金旺生水，水为相。"
  },
  {
    "id": "q035",
    "difficulty": "intermediate",
    "type": "single",
    "category": "格局",
    "question": "正官格的取格原则是？",
    "options": [
      "A. 月令藏干透出正官",
      "B. 日干为正官",
      "C. 年柱为正官",
      "D. 时柱为正官"
    ],
    "answer": [
      "A"
    ],
    "explanation": "正官格以月令藏干透出正官为定格依据。"
  },
  {
    "id": "q036",
    "difficulty": "intermediate",
    "type": "single",
    "category": "格局",
    "question": "七杀格最喜什么来制？",
    "options": [
      "A. 正印",
      "B. 食神",
      "C. 伤官",
      "D. 劫财"
    ],
    "answer": [
      "B"
    ],
    "explanation": "七杀最喜食神制（食神制杀）或正印化（杀印相生）。"
  },
  {
    "id": "q037",
    "difficulty": "intermediate",
    "type": "single",
    "category": "格局",
    "question": "身弱逢七杀攻身，最好救应是？",
    "options": [
      "A. 食神制杀",
      "B. 印化杀生身",
      "C. 比劫抗杀",
      "D. 伤官合杀"
    ],
    "answer": [
      "B"
    ],
    "explanation": "身弱逢杀，印星化杀生身为最佳方案。"
  },
  {
    "id": "q038",
    "difficulty": "intermediate",
    "type": "single",
    "category": "格局",
    "question": "伤官见官中的\"官\"指什么？",
    "options": [
      "A. 正官",
      "B. 七杀",
      "C. 偏官",
      "D. 以上皆是"
    ],
    "answer": [
      "A"
    ],
    "explanation": "伤官见官特指伤官克正官。"
  },
  {
    "id": "q039",
    "difficulty": "intermediate",
    "type": "single",
    "category": "空亡",
    "question": "甲子旬中的空亡地支是？",
    "options": [
      "A. 子丑",
      "B. 寅卯",
      "C. 戌亥",
      "D. 申酉"
    ],
    "answer": [
      "C"
    ],
    "explanation": "甲子旬从甲子到癸酉，戌亥为空亡。"
  },
  {
    "id": "q040",
    "difficulty": "intermediate",
    "type": "single",
    "category": "空亡",
    "question": "日柱丙寅属于哪一旬？空亡是什么？",
    "options": [
      "A. 甲子旬戌亥空",
      "B. 甲戌旬申酉空",
      "C. 甲申旬午未空",
      "D. 甲午旬辰巳空"
    ],
    "answer": [
      "B"
    ],
    "explanation": "丙寅属甲戌旬（甲戌至癸未），空亡申酉。"
  },
  {
    "id": "q041",
    "difficulty": "intermediate",
    "type": "single",
    "category": "空亡",
    "question": "空亡对十神力量的影响通常是？",
    "options": [
      "A. 增强",
      "B. 减弱约50%",
      "C. 完全消失",
      "D. 无影响"
    ],
    "answer": [
      "B"
    ],
    "explanation": "空亡之地支代表的十神力量减弱约50%。"
  },
  {
    "id": "q042",
    "difficulty": "intermediate",
    "type": "single",
    "category": "干支关系",
    "question": "地支六合中子与什么相合？",
    "options": [
      "A. 丑",
      "B. 寅",
      "C. 卯",
      "D. 辰"
    ],
    "answer": [
      "A"
    ],
    "explanation": "子丑合土。六合：子丑合、寅亥合、卯戌合、辰酉合、巳申合、午未合。"
  },
  {
    "id": "q043",
    "difficulty": "intermediate",
    "type": "multiple",
    "category": "干支关系",
    "question": "以下哪些属于地支六合？（多选）",
    "options": [
      "A. 子丑",
      "B. 寅亥",
      "C. 辰酉",
      "D. 巳午"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "子丑合土、寅亥合木、卯戌合火、辰酉合金、巳申合水、午未合土。"
  },
  {
    "id": "q044",
    "difficulty": "intermediate",
    "type": "single",
    "category": "干支关系",
    "question": "子午冲中子的五行是？",
    "options": [
      "A. 水",
      "B. 火",
      "C. 木",
      "D. 金"
    ],
    "answer": [
      "A"
    ],
    "explanation": "子水午火，水火相冲，方向相反。"
  },
  {
    "id": "q045",
    "difficulty": "intermediate",
    "type": "multiple",
    "category": "干支关系",
    "question": "以下哪些是地支三合局？（多选）",
    "options": [
      "A. 申子辰",
      "B. 亥卯未",
      "C. 寅巳申",
      "D. 巳酉丑"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "申子辰合水、亥卯未合木、寅午戌合火、巳酉丑合金。"
  },
  {
    "id": "q046",
    "difficulty": "intermediate",
    "type": "single",
    "category": "干支关系",
    "question": "寅午戌三合化为什么？",
    "options": [
      "A. 水",
      "B. 火",
      "C. 木",
      "D. 金"
    ],
    "answer": [
      "B"
    ],
    "explanation": "寅午戌三合火局。寅火长生、午火帝旺、戌火墓库。"
  },
  {
    "id": "q047",
    "difficulty": "intermediate",
    "type": "single",
    "category": "干支关系",
    "question": "丑未相冲中两个地支的共同五行是？",
    "options": [
      "A. 水",
      "B. 火",
      "C. 土",
      "D. 金"
    ],
    "answer": [
      "C"
    ],
    "explanation": "丑和未都属土，同类相冲。丑湿土未燥土。"
  },
  {
    "id": "q048",
    "difficulty": "intermediate",
    "type": "single",
    "category": "干支关系",
    "question": "巳申合又巳申刑称为？",
    "options": [
      "A. 合中带刑",
      "B. 刑中带合",
      "C. 破合",
      "D. 无特殊名称"
    ],
    "answer": [
      "A"
    ],
    "explanation": "巳申既六合又相刑，称合中带刑。"
  },
  {
    "id": "q049",
    "difficulty": "intermediate",
    "type": "single",
    "category": "干支关系",
    "question": "辰戌丑未四者之间的关系是？",
    "options": [
      "A. 三合",
      "B. 三会",
      "C. 四库相冲",
      "D. 相生"
    ],
    "answer": [
      "C"
    ],
    "explanation": "辰戌冲、丑未冲为四库相冲。"
  },
  {
    "id": "q050",
    "difficulty": "intermediate",
    "type": "multiple",
    "category": "干支关系",
    "question": "以下哪些属地支相害？（多选）",
    "options": [
      "A. 子未",
      "B. 丑午",
      "C. 寅巳",
      "D. 卯辰"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "六害：子未、丑午、寅巳、卯辰、申亥、酉戌。"
  },
  {
    "id": "q051",
    "difficulty": "expert",
    "type": "single",
    "category": "调候",
    "question": "甲木生于酉月最急需的调候用神是？",
    "options": [
      "A. 庚金",
      "B. 丙火",
      "C. 癸水",
      "D. 戊土"
    ],
    "answer": [
      "C"
    ],
    "explanation": "秋木凋零金旺克木，急需癸水化杀生身。杀印相生。"
  },
  {
    "id": "q052",
    "difficulty": "expert",
    "type": "single",
    "category": "调候",
    "question": "丙火生于子月最急需的调候用神是？",
    "options": [
      "A. 壬水",
      "B. 甲木",
      "C. 丙火",
      "D. 己土"
    ],
    "answer": [
      "B"
    ],
    "explanation": "冬火衰微，急需甲木偏印生火调候。"
  },
  {
    "id": "q053",
    "difficulty": "expert",
    "type": "single",
    "category": "调候",
    "question": "金水伤官喜见官中\"官\"指什么？",
    "options": [
      "A. 正官（火）",
      "B. 七杀",
      "C. 正印",
      "D. 食神"
    ],
    "answer": [
      "A"
    ],
    "explanation": "金水伤官冬生，最喜正官（火）暖局调候。"
  },
  {
    "id": "q054",
    "difficulty": "expert",
    "type": "single",
    "category": "格局",
    "question": "从弱格中日主的状态是？",
    "options": [
      "A. 身旺",
      "B. 身弱有根",
      "C. 极弱无根",
      "D. 中和"
    ],
    "answer": [
      "C"
    ],
    "explanation": "从弱格日主极弱无根，只能从旺势。"
  },
  {
    "id": "q055",
    "difficulty": "expert",
    "type": "single",
    "category": "格局",
    "question": "化气格成立的核心条件是？",
    "options": [
      "A. 日干合化",
      "B. 月令支持化气",
      "C. 天干有合",
      "D. 地支三合"
    ],
    "answer": [
      "B"
    ],
    "explanation": "日干相合且月令必须支持所化之五行。"
  },
  {
    "id": "q056",
    "difficulty": "expert",
    "type": "single",
    "category": "格局",
    "question": "身强杀浅假杀为权中的\"杀\"指什么？",
    "options": [
      "A. 正官",
      "B. 七杀",
      "C. 偏印",
      "D. 伤官"
    ],
    "answer": [
      "B"
    ],
    "explanation": "七杀旺而有制则为权柄。身强杀浅成贵格。"
  },
  {
    "id": "q057",
    "difficulty": "expert",
    "type": "single",
    "category": "大运流年",
    "question": "伤官见官之年女命通常应什么事？",
    "options": [
      "A. 升职加薪",
      "B. 婚恋不顺口舌",
      "C. 财运大好",
      "D. 学业进步"
    ],
    "answer": [
      "B"
    ],
    "explanation": "伤官克正官（夫星），女命易感情不顺。"
  },
  {
    "id": "q058",
    "difficulty": "expert",
    "type": "single",
    "category": "大运流年",
    "question": "流年伏吟日柱一般代表什么？",
    "options": [
      "A. 结婚",
      "B. 升官",
      "C. 变动较大",
      "D. 财运好"
    ],
    "answer": [
      "C"
    ],
    "explanation": "伏吟代表重复内耗变动之年，如甲午遇甲午。"
  },
  {
    "id": "q059",
    "difficulty": "expert",
    "type": "single",
    "category": "古籍",
    "question": "《渊海子平》\"有病方为贵\"中\"病\"指什么？",
    "options": [
      "A. 身体疾病",
      "B. 命局缺陷冲突",
      "C. 五行缺一",
      "D. 日主弱"
    ],
    "answer": [
      "B"
    ],
    "explanation": "病指命局缺陷冲突，有救应反成贵格。"
  },
  {
    "id": "q060",
    "difficulty": "expert",
    "type": "single",
    "category": "古籍",
    "question": "《滴天髓》\"甲木参天脱胎要火\"说的什么道理？",
    "options": [
      "A. 甲木很高大",
      "B. 甲木需火泄秀",
      "C. 甲木怕火",
      "D. 甲木生夏天"
    ],
    "answer": [
      "B"
    ],
    "explanation": "甲木需火（食伤）泄秀方能成器。"
  }
];

export default QUIZ_DATA;
