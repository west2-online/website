import { data2023 } from "@site/static/member/2023";
import { data2022 } from "@site/static/member/2022";
import { data2021 } from "@site/static/member/2021";
import { data2020 } from "@site/static/member/2020";
import { data2019 } from "@site/static/member/2019";
import { data2018 } from "@site/static/member/2018";
import { data2017 } from "@site/static/member/2017";
import { data2016 } from "@site/static/member/2016";
import { data2015 } from "@site/static/member/2015";
import { data2014 } from "@site/static/member/2014";
import { data2013 } from "@site/static/member/2013";
import { data2012 } from "@site/static/member/2012";
import { data2011 } from "@site/static/member/2011";
import { data2010 } from "@site/static/member/2010";
import { data2009 } from "@site/static/member/2009";


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

export type MemberData = Record<string, {
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
  "2023": data2023,
  "2022": data2022,
  "2021": data2021,
  "2020": data2020,
  "2019": data2019,
  "2018": data2018,
  "2017": data2017,
  "2016": data2016,
  "2015": data2015,
  "2014": data2014,
  "2013": data2013,
  "2012": data2012,
  "2011": data2011,
  "2010": data2010,
  "2009": data2009,
}
