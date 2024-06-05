type MemberData = Record<string, {
  avatar: string;     // 头像
  name: string;       // 姓名
  focus: string;      // 专注于
  github: string;     // GitHub 地址
  major: string;      // 专业
}[]>

export const memberData: MemberData = {
  "2023": [
    // { avatar: "/placeholder-avatar.jpg", name: "John Doe", profession: "Software Engineer" },
    // { avatar: "/placeholder-avatar.jpg", name: "Jane Smith", profession: "Product Manager" },
    // { avatar: "/placeholder-avatar.jpg", name: "Michael Johnson", profession: "UI/UX Designer" },
    // { avatar: "/placeholder-avatar.jpg", name: "Emily Davis", profession: "Data Analyst" },
  ],
  "2022": [
    { avatar: "2022/frontends_python_zyy.jpg", name: "张艺耀", focus: "前端", major:"21级人工智能", github: "null" },
    { avatar: "2022/frontends_python_wy.jpg", name: "吴悠", focus: "Python", major:"21级给排水", github: "null" },

    { avatar: "2022/unity_lqy.jpg", name: "罗骐翼", focus: "Unity", major:"21级数媒", github: "null" },
    { avatar: "2022/unity_hzy.jpg", name: "黄致远", focus: "Unity", major:"21级计算机", github: "null" },
    { avatar: "2022/unity_wjy.jpg", name: "吴佳仪", focus: "Unity", major:"20级自动化", github: "null" },
    { avatar: "2022/unity_hhc.jpg", name: "何晗晨", focus: "Unity", major:"21级数媒", github: "null" },
    { avatar: "2022/unity_yxx.jpg", name: "袁夏鑫", focus: "Unity", major:"21级软件工程", github: "null" },
    { avatar: "2022/unity_hkh.jpg", name: "黄铠赫", focus: "Unity", major:"21级数媒", github: "null" },
    { avatar: "2022/unity_ywx.jpg", name: "姚玮欣", focus: "Unity", major:"20级计算机", github: "null" },

    { avatar: "2022/golang_ckf.jpg", name: "陈恺丰", focus: "Go", major:"20级电子信息工程", github: "null" },
    { avatar: "2022/golang_fyc.jpg", name: "方宇辰", focus: "Go", major:"20级软件工程", github: "null" },
    { avatar: "2022/golang_zzy.jpg", name: "张钊洋", focus: "Go", major:"20级电子信息工程", github: "null" },
    { avatar: "2022/frontends_ios_golang_lhx.jpg", name: "林黄骁", focus: "Go", major:"21级软件工程", github: "null" },

    { avatar: "2022/python_cxy.jpg", name: "陈昕远", focus: "Python", major:"20级软件工程", github: "null" },
    { avatar: "2022/python_gbq.jpg", name: "高炳强", focus: "Python", major:"21级人工智能", github: "null" },
    { avatar: "2022/python_lzp.jpg", name: "李志鹏", focus: "Python", major:"20级计算机", github: "null" },

    { avatar: "2022/android_sqt.jpg", name: "沈轻腾", focus: "Android", major:"21级计算机", github: "null" },
    { avatar: "2022/android_zyn.jpg", name: "张煜楠", focus: "Android", major:"21级软件工程", github: "null" },
    { avatar: "2022/android_sx.jpg", name: "孙逊", focus: "Android", major:"21级电子信息工程", github: "null" },

    { avatar: "2022/frontends_zjz.jpg", name: "张佳泽", focus: "前端", major:"20级软件工程", github: "null" },
    { avatar: "2022/frontends_czh.jpg", name: "陈泽华", focus: "前端", major:"20级软件工程", github: "null" },
    { avatar: "2022/frontends_pcy.jpg", name: "庞财莹", focus: "前端", major:"21级软件工程", github: "null" },
    { avatar: "2022/frontends_wxy.jpg", name: "吴星宇", focus: "前端", major:"21级计算机", github: "null" },
    { avatar: "2022/frontends_gcj.jpg", name: "龚辰珺", focus: "前端", major:"20级软件工程", github: "null" },
    { avatar: "2022/frontends_lx.jpg", name: "林翔", focus: "前端", major:"20级软件工程", github: "null" },
    { avatar: "2022/frontends_wzr.jpg", name: "吴子隆", focus: "前端", major:"20级软件工程", github: "null" },

    { avatar: "2022/java_lb.jpg", name: "刘博", focus: "Java", major:"20级自动化", github: "null" },
    { avatar: "2022/java_czh.jpg", name: "陈桢函", focus: "Java", major:"20级软件工程", github: "null" },
    { avatar: "2022/java_zl.jpg", name: "朱辽", focus: "Java", major:"20级自动化", github: "null" },
    { avatar: "2022/java_hjq.jpg", name: "胡家齐", focus: "Java", major:"20级自动化", github: "null" },
    { avatar: "2022/java_lyd.jpg", name: "李炎东", focus: "Java", major:"21级软件工程", github: "null" },
    { avatar: "2022/java_ljh.jpg", name: "刘俊辉", focus: "Java", major:"21级人工智能", github: "null" },
    { avatar: "2022/java_lzp.jpg", name: "李振鹏", focus: "Java", major:"20级软件工程", github: "null" },
    { avatar: "2022/java_xyj.jpg", name: "许影杰", focus: "Java", major:"20级软件工程", github: "null" },
    { avatar: "2022/java_cy.jpg", name: "陈艺", focus: "Java", major:"21级计算机", github: "null" },
    { avatar: "2022/java_sjs.jpg", name: "苏锦森", focus: "Java", major:"21级计算机", github: "null" },
    { avatar: "2022/java_yrw.jpg", name: "杨润午", focus: "Java", major:"20级软件工程", github: "null" },
    { avatar: "2022/java_yjj.jpg", name: "余婧洁", focus: "Java", major:"20级自动化", github: "null" },
    { avatar: "2022/java_zcx.jpg", name: "张晨旭", focus: "Java", major:"20级计算机", github: "null" },
    { avatar: "2022/java_czf.jpg", name: "陈知菲", focus: "Java", major:"21级计算机", github: "null" },

    { avatar: "2022/art_lcy.jpg", name: "李宸晔", focus: "美术", major:"20级建筑学", github: "null" },
    { avatar: "2022/art_lmq.jpg", name: "李鸣谦", focus: "美术", major:"20级信息安全", github: "null" },
    { avatar: "2022/art_cjw.jpg", name: "陈佳雯", focus: "美术", major:"21级数媒", github: "null" },
    { avatar: "2022/art_lxy.jpg", name: "林心悦", focus: "美术", major:"21级数媒", github: "null" },
    { avatar: "2022/art_hcx.jpg", name: "黄晨曦", focus: "美术", major:"21级信管", github: "null" },
  ],
}
