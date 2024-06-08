export const imgPrefix = "https://img.w2fzu.com/member/"
export const githubPrefix = "https://github.com/"
export const visibleYearsCount = 3; // 可见年份数量

/*
  1. 计算机方向同学必须搜集 GitHub ID，其他方向同学可选
  2. 头像图片请上传到又拍云，并将链接填写到 avatar 字段，文件名请以学号（如 052106112）命名
  3. GitHub ID 请填写不带前缀的 ID，会自动拼接 github 地址
  4. blog 字段可选，如果填写了会在成员卡片中显示一个链接
  5. 过长的专业请使用缩写 e.g 计算机科学与技术=计算机类 数字媒体技术=数媒
*/

type MemberData = Record<string, {
  avatar: string;     // 头像，会自动拼接又拍云 prefix
  name: string;       // 姓名
  focus: string;      // 专注于
  github?: string;    // GitHub id
  major: string;      // 专业，如 20级软件工程
  blog?: {            // 博客
    display: string;  // 显示的文字
    url: string;      // 链接
  }
}[]>

function compareStrings(a: string | undefined, b: string | undefined): number {
  if (a && b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
  return 0;
}

/*
  优先展示 GitHub ID 和 blog 都有的同学
  如果都只有一个，优先展示有 GitHub ID 的同学
  如果都没有，按姓名字典序排列

  比较 GitHub id 和 blog 时也按字典序排列
*/
export function compareMembers(a: MemberData[string][number], b: MemberData[string][number]): number {
  const aHasGithub = !!a.github;
  const aHasBlog = !!a.blog;
  const bHasGithub = !!b.github;
  const bHasBlog = !!b.blog;

  // 两者都有
  if (aHasGithub && aHasBlog && bHasGithub && bHasBlog) {
    // 先比较 github，再比较 blog
    const githubComparison = compareStrings(a.github, b.github);
    if (githubComparison !== 0) return githubComparison;
    const blogComparison = compareStrings(a.blog?.display, b.blog?.display);
    if (blogComparison !== 0) return blogComparison;
    return compareStrings(a.name, b.name);
  }
  if (aHasGithub && aHasBlog) return -1;
  if (bHasGithub && bHasBlog) return 1;

  // 有其中之一
  if ((aHasGithub || aHasBlog) && !(bHasGithub || bHasBlog)) return -1;
  if (!(aHasGithub || aHasBlog) && (bHasGithub || bHasBlog)) return 1;

  // 如果一个成员有 github，另一个成员有 blog，则拥有 github 的成员优先
  if (aHasGithub && !aHasBlog && bHasBlog && !bHasGithub) return -1;
  if (aHasBlog && !aHasGithub && bHasGithub && !bHasBlog) return 1;

  // 如果两个成员都只有 github 或者都只有 blog，按字典序排列
  if ((aHasGithub && !aHasBlog && bHasGithub && !bHasBlog) ||
      (aHasBlog && !aHasGithub && bHasBlog && !bHasBlog)) {
    const aValue = aHasGithub ? a.github! : a.blog!.display;
    const bValue = bHasGithub ? b.github! : b.blog!.display;
    const comparison = compareStrings(aValue, bValue);
    if (comparison !== 0) return comparison;
    return compareStrings(a.name, b.name)
  }

  // 都没有，按姓名字典序排列
  return compareStrings(a.name, b.name);
}


export const memberData: MemberData = {
  "2023": [
    { avatar:"2023/222200314.jpg",  name:"吴荣榜",  focus:"前端",  major:"22级软件工程",  github:"ROBINRUGAN",  blog:{ display: "MEWWW", url:"https://www.cnblogs.com/ROBINRUGAN"} },
    { avatar:"2023/102101226.jpg",  name:"张鑫",  focus:"Go",  major:"21级计算机类",  github:"XZ0730" },
    { avatar:"2023/832203320.jpg",  name:"郑浩宁",  focus:"Go",  major:"22级软件工程",  github:"wushiling50",  blog:{ display: "wushiling50", url:"https://wushiling50.github.io/"} },
    { avatar:"2023/222200331.jpg",  name:"翁鹏",  focus:"Java",  major:"22级软件工程",  github:"Poldroc" },
    { avatar:"2023/832204101.jpg",  name:"马雁语",  focus:"美术",  major:"22级数媒"},
    { avatar:"2023/182000136.jpg",  name:"杨宇杰",  focus:"Unity",  major:"21级人工智能",  github:"YpoplarD" },
    { avatar:"2023/832203325.jpg",  name:"高毅飞",  focus:"Java",  major:"22级软件工程",  github:"emptyOVO" },
    { avatar:"2023/112101405.jpg",  name:"冯梦佳",  focus:"美术",  major:"21级数字媒体技术" },
    { avatar:"2023/102104118.jpg",  name:"陈广羽",  focus:"Python",  major:"21级人工智能",  github:"cgynb" },
    { avatar:"2023/112201306.jpg",  name:"陈国涛",  focus:"Unity",  major:"22级物联网工程",  github:"Quie-koli" },
    { avatar:"2023/102204117.jpg",  name:"陈上铭",  focus:"Python",  major:"22级人工智能",  github:"SYguanxing" },
    { avatar:"2023/102103149.jpg",  name:"郑智荣",  focus:"Python",  major:"21级信息安全",  github:"zenor0",  blog:{ display: "zenor0-site", url:"https://blog.zenor0.site"} },
    { avatar:"2023/112101417.png",  name:"吴凯琳",  focus:"美术",  major:"21级数媒" },
    { avatar:"2023/222200311.jpg",  name:"李梓玄",  focus:"Go",  major:"22级软件工程",  github:"jiuxia211" },
    { avatar:"2023/832204124.jpg",  name:"胡潇予",  focus:"Unity",  major:"22级数媒" },
    { avatar:"2023/222200414.png",  name:"陈志琰",  focus:"Unity",  major:"22级软件工程",  github:"buger404" },
    { avatar:"2023/832103212.jpeg",  name:"陈子康",  focus:"Java",  major:"21级软件工程",  github:"cnzakii" },
    { avatar:"2023/832203223.jpeg",  name:"郑婧媛",  focus:"前端",  major:"22级软件工程",  github:"Zhengjingyuan" },
    { avatar:"2023/222200323.png",  name:"罗鸿远",  focus:"Go",  major:"22级软件工程",  github:"jkskj" },
    { avatar:"2023/832102117.jpg",  name:"陈正一",  focus:"前端",  major:"21级自动化",  github:"Warpshlczy" },
    { avatar:"2023/222100221.jpg",  name:"林炳昌",  focus:"Java",  major:"21级软件工程",  github:"Xiaolin02" },
    { avatar:"2023/222200307.jpeg",  name:"叶宇滟",  focus:"Java",  major:"22级软件工程",  github:"Kikikisum" },
    { avatar:"2023/222200127.jpg",  name:"徐煜晖",  focus:"Android",  major:"22级软件工程",  github:"klxiaoniu",  blog:{ display: "掘金", url:"https://juejin.cn/user/1990574540341039"} },
    { avatar:"2023/832103230.jpg",  name:"潘亮钢",  focus:"Python",  major:"21级软件工程",  github:"ligeaaa",  blog:{ display: "magic-knowledge", url:"http://www.magic-knowledge.top/"} },
    { avatar:"2023/102201307.jpg",  name:"邱聪祝",  focus:"Python",  major:"22级计算机类",  github:"Astrilate" },
    { avatar:"2023/112201017.jpg",  name:"梁琳颖",  focus:"美术",  major:"22级数媒" },
    { avatar:"2023/022204055.jpg",  name:"王哲",  focus:"Python",  major:"22级机器人工程",  github:"ArthurWANGZHE" },
    { avatar:"2023/832204221.jpg",  name:"胡温婧",  focus:"Unity",  major:"22级数媒" },
    { avatar:"2023/102104126.png",  name:"黄崇豪",  focus:"Python",  major:"21级人工智能" },
    { avatar:"2023/062200139.jpg",  name:"岳烨",  focus:"Python",  major:"22级数理综合班",  github:"yyiridescent" },
    { avatar:"2023/102101629.png",  name:"陈泽海",  focus:"Java",  major:"21级计算机类",  github:"emoration" },
    { avatar:"2023/052101418.jpg",  name:"陈宇杰",  focus:"Go",  major:"22级计算机类",  github:"Ricky-chen1" },
    { avatar:"2023/102101411.png",  name:"刁冉基",  focus:"Python",  major:"21级计算机类",  blog:{ display: "CSDN", url:"https://blog.csdn.net/m0_63669388?type=blog"} },
    { avatar:"2023/112101225.jpg",  name:"吴淇",  focus:"Java",  major:"21级软件工程",  github:"Tavis123" },
    { avatar:"2023/832103316.jpg",  name:"林锐",  focus:"前端",  major:"21级软件工程",  github:"RylanBot", blog:{ display:"Rye Land", url:"https://rylan.cn" }},
    { avatar:"2023/162304124.jpg",  name:"彭杰",  focus:"Android",  major:"23级地质工程",  github:"CubeSugarCheese" },
    { avatar:"2023/222100406.jpg",  name:"陈麓同",  focus:"Python",  major:"21级软件工程",  github:"clt123haha" },
    { avatar:"2023/132101234.jpg",  name:"罗宇杰",  focus:"美术",  major:"21级电气工程",  github:"Recorder132" },
    { avatar:"2023/832203319.jpg",  name:"郑欣",  focus:"美术",  major:"22级软件工程",  github:"061x" },
  ],
  "2022": [
    { avatar: "2022/frontends_python_zyy.jpg", name: "张艺耀", focus: "前端", major:"21级人工智能", github: "1379255913" },
    { avatar: "2022/frontends_python_wy.jpg", name: "吴悠", focus: "Python", major:"21级给排水" },
    { avatar: "2022/frontends_ios_golang_lhx.jpg", name: "林黄骁", focus: "Go", major:"21级软件工程", github: "ozline", blog: { display: "ozline's blog", url: "https://blog.ozline.icu/" } },

    { avatar: "2022/unity_lqy.jpg", name: "罗骐翼", focus: "Unity", major:"21级数媒" },
    { avatar: "2022/unity_hzy.jpg", name: "黄致远", focus: "Unity", major:"21级计算机" },
    { avatar: "2022/unity_wjy.jpg", name: "吴佳仪", focus: "Unity", major:"20级自动化" },
    { avatar: "2022/unity_hhc.jpg", name: "何晗晨", focus: "Unity", major:"21级数媒" },
    { avatar: "2022/unity_yxx.jpg", name: "袁夏鑫", focus: "Unity", major:"21级软件工程" },
    { avatar: "2022/unity_hkh.jpg", name: "黄铠赫", focus: "Unity", major:"21级数媒" },
    { avatar: "2022/unity_ywx.jpg", name: "姚玮欣", focus: "Unity", major:"20级计算机", github: "yaoweixin" },

    { avatar: "2022/golang_ckf.jpg", name: "陈恺丰", focus: "Go", major:"20级电子信息工程", github: "KAIFENG-ch" },
    { avatar: "2022/golang_fyc.jpg", name: "方宇辰", focus: "Go", major:"20级软件工程", github: "Anxiu0101" },
    { avatar: "2022/golang_zzy.jpg", name: "张钊洋", focus: "Go", major:"20级电子信息工程", github: "rsooio" },

    { avatar: "2022/python_cxy.jpg", name: "陈昕远", focus: "Python", major:"20级软件工程" },
    { avatar: "2022/python_gbq.jpg", name: "高炳强", focus: "Python", major:"21级人工智能" },
    { avatar: "2022/python_lzp.jpg", name: "李志鹏", focus: "Python", major:"20级计算机" },

    { avatar: "2022/android_sqt.jpg", name: "沈轻腾", focus: "Android", major:"21级计算机", github: "theonenull" },
    { avatar: "2022/android_zyn.jpg", name: "张煜楠", focus: "Android", major:"21级软件工程", github: "Benxinm" },
    { avatar: "2022/android_sx.jpg", name: "孙逊", focus: "Android", major:"21级电子信息工程", github: "utf8-coding" },

    { avatar: "2022/frontends_zjz.jpg", name: "张佳泽", focus: "前端", major:"20级软件工程", github: "sami-jiaze" },
    { avatar: "2022/frontends_czh.jpg", name: "陈泽华", focus: "前端", major:"20级软件工程" },
    { avatar: "2022/frontends_pcy.jpg", name: "庞财莹", focus: "前端", major:"21级软件工程", github: "xi-null" },
    { avatar: "2022/frontends_wxy.jpg", name: "吴星宇", focus: "前端", major:"21级计算机" },
    { avatar: "2022/frontends_gcj.jpg", name: "龚辰珺", focus: "前端", major:"20级软件工程" },
    { avatar: "2022/frontends_lx.jpg", name: "林翔", focus: "前端", major:"20级软件工程" },
    { avatar: "2022/frontends_wzr.jpg", name: "吴子隆", focus: "前端", major:"20级软件工程" },

    { avatar: "2022/java_lb.jpg", name: "刘博", focus: "Java", major:"20级自动化" },
    { avatar: "2022/java_czh.jpg", name: "陈桢函", focus: "Java", major:"20级软件工程" },
    { avatar: "2022/java_zl.jpg", name: "朱辽", focus: "Java", major:"20级自动化" },
    { avatar: "2022/java_hjq.jpg", name: "胡家齐", focus: "Java", major:"20级自动化" },
    { avatar: "2022/java_lyd.jpg", name: "李炎东", focus: "Java", major:"21级软件工程", github: "SkyDDDog" },
    { avatar: "2022/java_ljh.jpg", name: "刘俊辉", focus: "Java", major:"21级人工智能", github: "SUPERGOG07" },
    { avatar: "2022/java_lzp.jpg", name: "李振鹏", focus: "Java", major:"20级软件工程" },
    { avatar: "2022/java_xyj.jpg", name: "许影杰", focus: "Java", major:"20级软件工程" },
    { avatar: "2022/java_cy.jpg", name: "陈艺", focus: "Java", major:"21级计算机" },
    { avatar: "2022/java_sjs.jpg", name: "苏锦森", focus: "Java", major:"21级计算机" },
    { avatar: "2022/java_yrw.jpg", name: "杨润午", focus: "Java", major:"20级软件工程" },
    { avatar: "2022/java_yjj.jpg", name: "余婧洁", focus: "Java", major:"20级自动化" },
    { avatar: "2022/java_zcx.jpg", name: "张晨旭", focus: "Java", major:"20级计算机" },
    { avatar: "2022/java_czf.jpg", name: "陈知菲", focus: "Java", major:"21级计算机" },

    { avatar: "2022/art_lcy.jpg", name: "李宸晔", focus: "美术", major:"20级建筑学", github: "ALLLOUD" },
    { avatar: "2022/art_lmq.jpg", name: "李鸣谦", focus: "美术", major:"20级信息安全" },
    { avatar: "2022/art_cjw.jpg", name: "陈佳雯", focus: "美术", major:"21级数媒" },
    { avatar: "2022/art_lxy.jpg", name: "林心悦", focus: "美术", major:"21级数媒" },
    { avatar: "2022/art_hcx.jpg", name: "黄晨曦", focus: "美术", major:"21级信管", github: "mmmki" },
  ],
  "2021": [
    {
            "avatar": "2021/032003143.jpg",
            "name": "戴琦琪",
            "focus": "Unity",
            "major": "20级信息安全"
        },
        {
            "avatar": "2021/222000316.jpg",
            "name": "谭楷",
            "focus": "Unity",
            "major": "20级软件工程"
        },
        {
            "avatar": "2021/831903310.jpg",
            "name": "刘宇翔",
            "focus": "Unity",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/832003314.jpg",
            "name": "兰弘羿",
            "focus": "Unity",
            "major": "20级软件工程"
        },
        {
            "avatar": "2021/031904102.jpg",
            "name": "曾庆聪",
            "focus": "Golang",
            "major": "19级大数据"
        },
        {
            "avatar": "2021/041901328.jpg",
            "name": "王真平",
            "focus": "Golang",
            "major": "19级计算机"
        },
        {
            "avatar": "2021/221900328_2.jpg",
            "name": "余一鸣",
            "focus": "Golang",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/031902435.jpg",
            "name": "华颖星",
            "focus": "产品",
            "major": "19级计算机"
        },
        {
            "avatar": "2021/032004142.jpg",
            "name": "卢恬英",
            "focus": "产品",
            "major": "20级大数据"
        },
        {
            "avatar": "2021/221900329.jpg",
            "name": "俞润鼎",
            "focus": "Python",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/831903207.jpg",
            "name": "陈苏霖",
            "focus": "Android",
            "major": "19级软件工程(梅努斯)"
        },
        {
            "avatar": "2021/032005102.jpg",
            "name": "陈明轩",
            "focus": "Android",
            "major": "20级人工智能"
        },
        {
            "avatar": "2021/831903309.jpg",
            "name": "林宇涵",
            "focus": "Android",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/061900209.jpg",
            "name": "黄志翔",
            "focus": "Android",
            "major": "19级计算机(卓越班)"
        },
        {
            "avatar": "2021/031902524.jpg",
            "name": "杨少杰",
            "focus": "前端",
            "major": "19级计算机"
        },
        {
            "avatar": "2021/221900332.jpg",
            "name": "郑世杰",
            "focus": "前端",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/032001115.jpg",
            "name": "翁文辉",
            "focus": "前端",
            "major": "20级数学"
        },
        {
            "avatar": "2021/111901415.jpg",
            "name": "黄巧丽",
            "focus": "前端",
            "major": "19级数字媒体技术"
        },
        {
            "avatar": "2021/221900217.jpg",
            "name": "黄欧成",
            "focus": "Java",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/831903119.jpg",
            "name": "林喆智",
            "focus": "Java",
            "major": "19级软件工程"
        },
        {
            "avatar": "2021/041901408.jpg",
            "name": "杨啟超",
            "focus": "Java",
            "major": "19级计算机"
        },
        {
            "avatar": "2021/031902410.jpg",
            "name": "林洁楠",
            "focus": "Java",
            "major": "19级计算机"
        },
        {
            "avatar": "2021/832003307.jpg",
            "name": "黄于思",
            "focus": "Java",
            "major": "20级软件工程"
        },
        {
            "avatar": "2021/832003325.jpg",
            "name": "朱丹清",
            "focus": "Java",
            "major": "20级软件工程"
        },
        {
            "avatar": "2021/031902606.jpg",
            "name": "何凱",
            "focus": "iOS",
            "major": "19级计算机"
        },
        {
            "avatar": "2021/032005216.jpg",
            "name": "薛天霖",
            "focus": "美术",
            "major": "20级人工智能"
        },
        {
            "avatar": "2021/032002328.jpg",
            "name": "王帆",
            "focus": "美术",
            "major": "20级计算机"
        },
        {
            "avatar": "2021/031802125.jpg",
            "name": "苏垚",
            "focus": "美术",
            "major": "19级计算机"
        }
  ],
  "2020": [
    {
            "avatar": "2020/831903325.jpg",
            "name": "金含霖",
            "focus": "iOS",
            "major": "19级软件工程(梅努斯)"
        },
        {
            "avatar": "2020/221801407.jpg",
            "name": "黄鹏程",
            "focus": "iOS",
            "major": "18级软件工程"
        },
        {
            "avatar": "2020/031902513.jpg",
            "name": "沈欢",
            "focus": "iOS",
            "major": "19级计算机"
        },
        {
            "avatar": "2020/031802219.jpg",
            "name": "林璟",
            "focus": "Java",
            "major": "18级计算机"
        },
        {
            "avatar": "2020/831901208.jpg",
            "name": "李雨田",
            "focus": "Java",
            "major": "19级电子信息工程(梅努斯)"
        },
        {
            "avatar": "2020/831903118_3.jpg",
            "name": "陈智猛",
            "focus": "Java",
            "major": "19级软件工程(梅努斯)"
        },
        {
            "avatar": "2020/031902321.jpg",
            "name": "林炜",
            "focus": "Python",
            "major": "19级计算机"
        },
        {
            "avatar": "2020/031904103.jpg",
            "name": "陈靖",
            "focus": "Python",
            "major": "19级大数据"
        },
        {
            "avatar": "2020/031903134.jpg",
            "name": "张云希",
            "focus": "Python",
            "major": "19级信息安全"
        },
        {
            "avatar": "2020/031902243.jpg",
            "name": "钟睿如",
            "focus": "unity",
            "major": "19级计算机"
        },
        {
            "avatar": "2020/221801416.jpg",
            "name": "林怀颖",
            "focus": "unity",
            "major": "18级软件工程"
        },
        {
            "avatar": "2020/221900326.jpg",
            "name": "许瑞政",
            "focus": "unity",
            "major": "19级软件工程"
        },
        {
            "avatar": "2020/831904206.jpg",
            "name": "林谷轩",
            "focus": "unity",
            "major": "19级数字媒体（梅努斯）"
        },
        {
            "avatar": "2020/051805124.jpg",
            "name": "王少聪",
            "focus": "安卓",
            "major": "18级软件工程"
        },
        {
            "avatar": "2020/031902127.jpg",
            "name": "严建勤",
            "focus": "安卓",
            "major": "19级计算机"
        },
        {
            "avatar": "2020/221900238.jpg",
            "name": "巫舒静",
            "focus": "美术",
            "major": "19级软件工程"
        },
        {
            "avatar": "2020/111801036.jpg",
            "name": "汤玲凤",
            "focus": "美术",
            "major": "18级数字媒体技术"
        },
        {
            "avatar": "2020/111801013.jpg",
            "name": "李雅祯",
            "focus": "美术",
            "major": "18级数字媒体技术"
        },
        {
            "avatar": "2020/111801031.jpg",
            "name": "彭晓勤",
            "focus": "美术",
            "major": "18级数字媒体技术"
        },
        {
            "avatar": "2020/221801227.jpg",
            "name": "林沧海",
            "focus": " 前端",
            "major": "18级软件工程"
        },
        {
            "avatar": "2020/111801429.jpg",
            "name": "吴寒",
            "focus": "前端",
            "major": "18级软件工程"
        },
        {
            "avatar": "2020/221900336_2.jpg",
            "name": "洪曙新",
            "focus": "前端",
            "major": "19级软件工程"
        },
        {
            "avatar": "2020/221900337.jpg",
            "name": "林雪柔",
            "focus": "前端",
            "major": "19级软件工程"
        }
  ],
  "2019": [
    {
            "avatar": "2019/221701415.jpg",
            "name": "王弘毅",
            "focus": "后端",
            "major": "17级软件工程"
        },
        {
            "avatar": "2019/huanghaoyu.jpg",
            "name": "黄浩宇",
            "focus": "后端",
            "major": "18级计算机"
        },
        {
            "avatar": "2019/221701134.jpg",
            "name": "王少滨",
            "focus": "Unity",
            "major": "17级软件工程"
        },
        {
            "avatar": "2019/031702525.jpg",
            "name": "周鑫煌",
            "focus": "iOS",
            "major": "17级计算机"
        },
        {
            "avatar": "2019/031802309.jpg",
            "name": "郭盈江",
            "focus": "PHP/Go",
            "major": "18级计算机类"
        },
        {
            "avatar": "2019/021700511.jpg",
            "name": "黄晨阳",
            "focus": "Python"
        },
        {
            "avatar": "2019/031802440_2.jpg",
            "name": "张晓涓",
            "focus": "PM",
            "major": "18级计算机类"
        },
        {
            "avatar": "2019/221801102_2.jpg",
            "name": "唐德宇",
            "focus": "Android",
            "major": "18级软件工程"
        },
        {
            "avatar": "2019/221701311.jpg",
            "name": "李昊朋"
        },
        {
            "avatar": "2019/221801335.jpg",
            "name": "洪鸿林",
            "focus": "Unity",
            "major": "18级软件工程"
        },
        {
            "avatar": "2019/031702420.jpg",
            "name": "张庆焰",
            "focus": "软件系统设计"
        },
        {
            "avatar": "2019/221801107.jpg",
            "name": "谢乐如",
            "focus": "前端",
            "major": "18级软件工程"
        },
        {
            "avatar": "2019/221801313.jpg",
            "name": "方燮楠",
            "focus": "Python",
            "major": "18级软件工程"
        },
        {
            "avatar": "2019/031802641.jpg",
            "name": "张郑峰",
            "focus": "前端",
            "major": "18级计算机"
        },
        {
            "avatar": "2019/031802230_2.jpg",
            "name": "孙棚飞",
            "focus": "Python",
            "major": "18级计算机"
        },
        {
            "avatar": "2019/031802143_3.jpg",
            "name": "张兆圆",
            "focus": "前端/PHP",
            "major": "18级计算机"
        },
        {
            "avatar": "2019/221701325.jpg",
            "name": "彭陈浩",
            "focus": "美术",
            "major": "17级软件工程"
        },
        {
            "avatar": "2019/081700327.jpg",
            "name": "王靖仪",
            "focus": "前端",
            "major": "17级食品"
        },
        {
            "avatar": "2019/221801320.jpg",
            "name": "陈子傲",
            "focus": "Unity",
            "major": "18级软件工程"
        },
        {
            "avatar": "2019/031802231.jpg",
            "name": "童浩",
            "focus": "Unity",
            "major": "18级计算机"
        },
        {
            "avatar": "2019/221801221.jpg",
            "name": "龚海旭",
            "focus": "Java",
            "major": "软件工程"
        },
        {
            "avatar": "2019/221801311.jpg",
            "name": "郭晗宇",
            "focus": "前端",
            "major": "18级软件工程"
        }
  ],
  "2018": [
    {
            "avatar": "2018/171709012_1.jpg",
            "name": "沈鸿骁",
            "focus": "UI设计/前端",
            "major": "17级计算机"
        },
        {
            "avatar": "2018/071607134_2.jpg",
            "name": "叶绍宁",
            "focus": "PM",
            "major": "16级行政管理"
        },
        {
            "avatar": "2018/221701331.jpg",
            "name": "李定成"
        },
        {
            "avatar": "2018/031703158_2.jpg",
            "name": "饶光赫"
        },
        {
            "avatar": "2018/031702635.jpg",
            "name": "陈郑铧",
            "focus": "前端",
            "major": "17级计算机"
        },
        {
            "avatar": "2018/031702338_3.jpg",
            "name": "郑学贵",
            "focus": "前端",
            "major": "17级计算机"
        },
        {
            "avatar": "2018/031702612.jpg",
            "name": "陈志超",
            "focus": "PHP",
            "major": "17级计算机"
        },
        {
            "avatar": "2018/031703141.jpg",
            "name": "游先耀",
            "focus": "PHP/Python",
            "major": "17级信息安全"
        },
        {
            "avatar": "2018/031702334.jpg",
            "name": "陈金杰",
            "focus": "PHP",
            "major": "17级计算机"
        },
        {
            "avatar": "2018/031602618.jpg",
            "name": "胡坤伟",
            "focus": "Android"
        },
        {
            "avatar": "2018/221701423.jpg",
            "name": "曾宏健"
        },
        {
            "avatar": "2018/221600412.jpg",
            "name": "陈宇",
            "focus": "Java",
            "major": "(研)湖南大学"
        },
        {
            "avatar": "2018/031702614.jpg",
            "name": "王永福",
            "focus": "计算机科学与技术"
        },
        {
            "avatar": "2018/221600414.jpg",
            "name": "冯凯",
            "focus": "Python",
            "major": "16级软件工程"
        },
        {
            "avatar": "2018/031702246.jpg",
            "name": "陈鸿立"
        },
        {
            "avatar": "2018/221701427.jpg",
            "name": "刘昭玮",
            "focus": "Unity",
            "major": "17级软件工程"
        },
        {
            "avatar": "2018/221701329.jpg",
            "name": "留晓滨",
            "focus": " Unity",
            "major": "17级软件工程"
        },
        {
            "avatar": "2018/031602519.jpg",
            "name": "李鑫怡",
            "focus": "Unity",
            "major": "16级计算机"
        },
        {
            "avatar": "2018/031702513.jpg",
            "name": "卢欢",
            "focus": " Unity",
            "major": "17级计算机"
        },
        {
            "avatar": "2018/221701432.jpg",
            "name": "郑斌",
            "focus": "PM",
            "major": "17级软件工程"
        }
  ],
  "2017": [
    {
            "avatar": "2017/031502340.jpg",
            "name": "易伟航",
            "focus": "iOS开发",
            "major": "15级计算机实验班"
        },
        {
            "avatar": "2017/221500419.jpg",
            "name": "黄晟",
            "focus": "Java开发",
            "major": "15级电气"
        },
        {
            "avatar": "2017/031502514.jpg",
            "name": "江彪",
            "focus": "Java开发",
            "major": "15级计算机"
        },
        {
            "avatar": "2017/221500336.jpg",
            "name": "麻哲源",
            "major": "(研)纽约州立大学布法罗分校"
        },
        {
            "avatar": "2017/031602601.jpg",
            "name": "蔡晓阳",
            "focus": "iOS开发",
            "major": "16级计算机"
        },
        {
            "avatar": "2017/031602502.jpg",
            "name": "陈柏涛",
            "focus": "Unity开发",
            "major": "16级计算机"
        },
        {
            "avatar": "2017/221600108.jpg",
            "name": "陈俊彪"
        },
        {
            "avatar": "2017/031602111.jpg",
            "name": "傅海涛",
            "focus": "PHP开发",
            "major": "16级计算机"
        },
        {
            "avatar": "2017/221600417.jpg",
            "name": "黄乐兴",
            "focus": "Java开发",
            "major": "(研)"
        },
        {
            "avatar": "2017/031602117.jpg",
            "name": "黄瑜婷",
            "focus": "前端开发",
            "major": "16级计算机"
        },
        {
            "avatar": "2017/031602325.jpg",
            "name": "林燊",
            "focus": "前端开发",
            "major": "16级计算机实验班"
        },
        {
            "avatar": "2017/031602438.jpg",
            "name": "叶一帆",
            "focus": "Java开发",
            "major": "16级计算机"
        },
        {
            "avatar": "2017/zhangjinming.jpg",
            "name": "张金铭",
            "focus": "后端",
            "major": "腾讯"
        },
        {
            "avatar": "2017/081600143.jpg",
            "name": "钟林泱",
            "focus": "Android开发",
            "major": "(研)福州大学"
        },
        {
            "avatar": "2017/221600303.jpg",
            "name": "岳美辰",
            "focus": "Unity开发"
        },
        {
            "avatar": "2017/031602527.jpg",
            "name": "钱若杨",
            "focus": "PHP开发",
            "major": "16级计算机"
        },
        {
            "avatar": "2017/221600439.jpg",
            "name": "郑世新",
            "focus": "前端开发",
            "major": "16级软件工程"
        }
  ],
  "2016": [
    {
            "avatar": "2016/031402341.jpg",
            "name": "王婷婷",
            "focus": "PHP",
            "major": "14级CS实验班"
        },
        {
            "avatar": "2016/031402204.jpg",
            "name": "冯立昊",
            "focus": "前端工程师"
        },
        {
            "avatar": "2016/031403138.jpg",
            "name": "颜晨倩",
            "focus": "算法工程师"
        },
        {
            "avatar": "2016/031402142.jpg",
            "name": "颜晓琪"
        },
        {
            "avatar": "2016/031402201.jpg",
            "name": "陈国",
            "major": "14级CS实验班"
        },
        {
            "avatar": "2016/031402304.jpg",
            "name": "陈燊",
            "focus": "Java"
        },
        {
            "avatar": "2016/031402544.jpg",
            "name": "庄金惠",
            "focus": "前端",
            "major": "14级CS"
        },
        {
            "avatar": "2016/221400332.jpg",
            "name": "姜雪涛",
            "focus": "Unity",
            "major": "14级软件工程"
        },
        {
            "avatar": "2016/031402417.jpg",
            "name": "刘童安",
            "focus": "图像处理"
        },
        {
            "avatar": "2016/031402203.jpg",
            "name": "陈齐民",
            "focus": "机器学习",
            "major": "14级CS"
        },
        {
            "avatar": "2016/031502338_2.jpg",
            "name": "许靖妍",
            "focus": "产品设计师",
            "major": "网龙"
        },
        {
            "avatar": "2016/221500317_1.jpg",
            "name": "施伟峰",
            "focus": "Java/PHP",
            "major": "15级软件工程"
        },
        {
            "avatar": "2016/031502337.jpg",
            "name": "肖小强",
            "focus": "Java",
            "major": "15级CS实验班"
        },
        {
            "avatar": "2016/031502348.jpg",
            "name": "庄友鹏",
            "focus": "Java",
            "major": "15级CS"
        },
        {
            "avatar": "2016/031502344_2.jpg",
            "name": "郑世强",
            "focus": "Java工程师"
        },
        {
            "avatar": "2016/031502442.jpg",
            "name": "郑浩晖",
            "focus": "Unity"
        },
        {
            "avatar": "2016/031502205.jpg",
            "name": "陈汉森",
            "focus": "前端工程师",
            "major": "15级CS实验班"
        },
        {
            "avatar": "2016/221500111.jpg",
            "name": "强健",
            "focus": "前端工程师",
            "major": "15级软件工程"
        },
        {
            "avatar": "2016/221500129.jpg",
            "name": "林泽毅",
            "focus": "前端",
            "major": "15级软件工程"
        },
        {
            "avatar": "2016/031502339.jpg",
            "name": "叶港晨",
            "focus": "前端工程师",
            "major": "15级CS"
        },
        {
            "avatar": "2016/031502210.jpg",
            "name": "邓弘立",
            "focus": "Java",
            "major": "15级CS"
        }
  ],
  "2015": [
    {
            "avatar": "2015/151200428.jpg",
            "name": "章涵",
            "focus": "设计"
        },
        {
            "avatar": "2015/221300211_2.jpg",
            "name": "乐艺泽",
            "focus": "iOS/机器学习"
        },
        {
            "avatar": "2015/031302641.jpg",
            "name": "王艳红"
        },
        {
            "avatar": "2015/221400303.jpg",
            "name": "廖子斌"
        },
        {
            "avatar": "2015/031402205.jpg",
            "name": "陈志豪",
            "focus": "Java"
        },
        {
            "avatar": "2015/031402219.jpg",
            "name": "卢伟滨"
        },
        {
            "avatar": "2015/031402207.jpg",
            "name": "陈奕程"
        },
        {
            "avatar": "2015/221400339_1.jpg",
            "name": "杨莹"
        },
        {
            "avatar": "2015/031402214.jpg",
            "name": "李旭升",
            "focus": "智能信息处理"
        },
        {
            "avatar": "2015/ruphilau0812.jpg",
            "name": "刘铷斐"
        },
        {
            "avatar": "2015/chenshaoming_2.jpg",
            "name": "陈少铭"
        },
        {
            "avatar": "2015/031402337.jpg",
            "name": "胡心颖",
            "focus": "Java"
        },
        {
            "avatar": "2015/031402513.jpg",
            "name": "江嗣嘉",
            "focus": "数据科学与工程"
        },
        {
            "avatar": "2015/031403105.jpg",
            "name": "陈宇朋"
        },
        {
            "avatar": "2015/221400137.jpg",
            "name": "戴玉丽",
            "focus": "前端",
            "major": "14级软件工程"
        },
        {
            "avatar": "2015/221400418.jpg",
            "name": "陈李易",
            "focus": "Java"
        }
  ],
  "2014": [
    {
            "avatar": "2014/031302626.jpg",
            "name": "吴泽钦",
            "focus": "iOS工程师"
        },
        {
            "avatar": "2014/cmq.jpg",
            "name": "陈铭钦",
            "focus": "算法工程师"
        },
        {
            "avatar": "2014/221300313.jpg",
            "name": "林渊腾",
            "focus": "iOS/PHP工程师"
        },
        {
            "avatar": "2014/221300332.jpg",
            "name": "江佳扬",
            "focus": "PHP开发工程师"
        },
        {
            "avatar": "2014/syz.jpg",
            "name": "孙元臻",
            "focus": "产品经理"
        },
        {
            "avatar": "2014/031302642.jpg",
            "name": "吴锦秋",
            "focus": "前端工程师"
        },
        {
            "avatar": "2014/221300418.jpg",
            "name": "吴浩文",
            "focus": "iOS工程师"
        },
        {
            "avatar": "2014/031302617.jpg",
            "name": "林威",
            "focus": "Java研发工程师"
        },
        {
            "avatar": "2014/031302333.jpg",
            "name": "郑泽雄",
            "focus": "产品经理"
        },
        {
            "avatar": "2014/031302305.jpg",
            "name": "出陈铖",
            "focus": "前端工程师"
        },
        {
            "avatar": "2014/221300410.jpg",
            "name": "李瑶池",
            "focus": "Android工程师"
        },
        {
            "avatar": "2014/031302620.jpg",
            "name": "马凛凛",
            "focus": "前端工程师"
        },
        {
            "avatar": "2014/221300221.jpg",
            "name": "檀灵潇",
            "focus": "算法工程师"
        },
        {
            "avatar": "2014/031302331.jpg",
            "name": "郑家兴",
            "focus": "前端工程师"
        },
        {
            "avatar": "2014/031302643_3.jpg",
            "name": "叶倩",
            "focus": "交互设计"
        }
  ],
  "2013": [
    {
            "avatar": "2013/whg.jpg",
            "name": "王洪根"
        },
        {
            "avatar": "2013/221200420.jpg",
            "name": "洪伟鹏",
            "focus": "PHP/Python"
        },
        {
            "avatar": "2013/linshixiong.jpg",
            "name": "林世雄"
        },
        {
            "avatar": "2013/zhanghuayan.jpg",
            "name": "张华焱",
            "focus": "前端/Android"
        },
        {
            "avatar": "2013/xiaolei.jpg",
            "name": "肖磊",
            "focus": "PHP研发工程师"
        },
        {
            "avatar": "2013/huangqinquan.jpg",
            "name": "黄钦泉",
            "focus": "研发工程师"
        },
        {
            "avatar": "2013/liujinyan.jpg",
            "name": "刘金艳",
            "focus": "视觉算法工程师"
        }
  ],
  "2012": [
    {
            "avatar": "2012/linjinbo.jpg",
            "name": "林锦波",
            "focus": "前端/安卓工程师"
        },
        {
            "avatar": "2012/wenhaiyang.jpg",
            "name": "文海洋",
            "focus": "Java工程师"
        },
        {
            "avatar": "2012/huangwenzhong.jpg",
            "name": "黄文忠",
            "focus": "Android工程师"
        },
        {
            "avatar": "2012/chenfengqing.jpg",
            "name": "陈锋情",
            "focus": "Java/APP/PM"
        },
        {
            "avatar": "2012/ligaga.jpg",
            "name": "李佳佳",
            "focus": "前端工程师"
        }
  ],
  "2011": [
    {
            "avatar": "2011/wuyikun.jpg",
            "name": "吴奕坤",
            "focus": "云存储产品经理"
        },
        {
            "avatar": "2011/zhongqifu.jpg",
            "name": "钟启富",
            "focus": "安全/PHP/运维"
        },
        {
            "avatar": "2011/221100236.jpg",
            "name": "陈嘉炜",
            "focus": "SAP大型ERP"
        },
        {
            "avatar": "2011/zhangjianguo.jpg",
            "name": "张建国",
            "focus": "Java",
            "major": "09级CS"
        },
        {
            "avatar": "2011/zhangyuting.jpg",
            "name": "张雨婷",
            "focus": "前端工程师"
        },
        {
            "avatar": "2011/zhangxiaoyun.jpg",
            "name": "张小云",
            "focus": "前端"
        },
        {
            "avatar": "2011/chenchangrong.jpg",
            "name": "陈昌荣",
            "focus": "前端/Android",
            "major": "11级CS"
        },
        {
            "avatar": "2011/liyunan.jpg",
            "name": "黎雨楠",
            "focus": "前端",
            "major": "11级信息安全"
        },
        {
            "avatar": "2011/wangbingyang.jpg",
            "name": "王炳阳",
            "focus": "Java"
        },
        {
            "avatar": "2011/sunzhaoxu.jpg",
            "name": "孙朝旭",
            "focus": "C#/Java",
            "major": "11级软件工程"
        }
  ],
  "2010": [
    {
            "avatar": "2010/Cayley.jpg",
            "name": "张祖文",
            "focus": "算法/研发"
        },
        {
            "avatar": "2010/zengxiongbin.jpg",
            "name": "曾雄斌",
            "focus": "SAP技术顾问"
        },
        {
            "avatar": "2010/Lilian.jpg",
            "name": "王丽月",
            "focus": "后端工程师"
        },
        {
            "avatar": "2010/qiuyun.jpg",
            "name": "林秋云",
            "focus": "市场部营销经理"
        }
  ],
  "2009": [
        {
            "avatar": "2009/zhenglingfei.jpg",
            "name": "郑令飞"
        },
        {
            "avatar": "2009/lixin.jpg",
            "name": "李鑫",
            "major": "就职于星网锐捷"
        },
        {
            "avatar": "2009/hanyahui.jpg",
            "name": "韩雅慧",
            "major": "就职于兴证期货"
        },
        {
            "avatar": "2009/zhangqingfeng.jpg",
            "name": "张清峰",
            "major": "就职于福诺移动"
        }
    ]
}
