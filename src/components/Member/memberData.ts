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

export const memberData: MemberData = {
  "2023": [
    { avatar:"2023/102101226.jpg",  name:"张鑫",  focus:"Go",  major:"21级计算机类",  github:"XZ0730" },
    { avatar:"2023/832203320.jpg",  name:"郑浩宁",  focus:"Go",  major:"22级软件工程",  github:"wushiling50",  blog:{ display: "github.io", url:"https://wushiling50.github.io/"} },
    { avatar:"2023/222200331.jpg",  name:"翁鹏",  focus:"Java",  major:"22级软件工程",  github:"Poldroc" },
    { avatar:"2023/832204101.jpg",  name:"马雁语",  focus:"美术",  major:"22级数媒", blog:{ display: "zenor0-site", url:"blog.zenor0.site"} },
    { avatar:"2023/182000136.jpg",  name:"杨宇杰",  focus:"Unity",  major:"21级人工智能",  github:"YpoplarD" },
    { avatar:"2023/832203325.jpg",  name:"高毅飞",  focus:"Java",  major:"22级软件工程",  github:"emptyOVO" },
    { avatar:"2023/112101405.jpg",  name:"冯梦佳",  focus:"美术",  major:"21级数字媒体技术" },
    { avatar:"2023/102104118.jpg",  name:"陈广羽",  focus:"Python",  major:"21级人工智能",  github:"cgynb" },
    { avatar:"2023/112201306.jpg",  name:"陈国涛",  focus:"Unity",  major:"22级物联网工程",  github:"Quie-koli" },
    { avatar:"2023/102204117.jpg",  name:"陈上铭",  focus:"Python",  major:"22级人工智能",  github:"SYguanxing" },
    { avatar:"2023/102103149.jpg",  name:"郑智荣",  focus:"Python",  major:"21级信息安全",  github:"zenor0",  blog:{ display: "zenor0-site", url:"blog.zenor0.site"} },
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
    { avatar:"2023/832103230.jpg",  name:"潘亮钢",  focus:"Python",  major:"21级软件工程",  github:"ligeaaa",  blog:{ display: "magic-know", url:"http://www.magic-knowledge.top/"} },
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
    { avatar:"2023/832103316.jpg",  name:"林锐",  focus:"前端",  major:"21级软件工程",  github:"RylanBot", blog:{ display:"Rye Land", url:"rylan.cn" }},
    { avatar:"2023/162304124.jpg",  name:"彭杰",  focus:"Android",  major:"23级地质工程",  github:"CubeSugarCheese" },
    { avatar:"2023/222100406.jpg",  name:"陈麓同",  focus:"Python",  major:"21级软件工程",  github:"clt123haha" },
    { avatar:"2023/132101234.jpg",  name:"罗宇杰",  focus:"美术",  major:"21级电气工程",  github:"Recorder132" },
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
  "2021": [],
  "2020": [],
  "2019": [],
  "2018": [],
  "2017": [],
  "2016": [],
  "2015": [],
  "2014": [],
  "2013": [],
  "2012": [],
  "2011": [],
  "2010": [],
}
