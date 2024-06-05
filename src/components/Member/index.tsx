import { Avatar } from "@/components/ui/avatar"
import { memberData } from "@/components/Member/memberData";
import GithubIcon from '@site/static/img/github.svg';
import React, { useState, useMemo, useEffect } from 'react';
import './styles.module.css';

export default function Component() {
  const data = memberData
  const [activeYear, setActiveYear] = useState(Object.keys(data)[0]); // 默认为第一个年份
  const [activeFocus, setActiveFocus] = useState('All'); // 默认选中所有 focus
  const [isExpanded, setIsExpanded] = useState(false); // 默认不展开年份选择

  const imgPrefix = "https://img.w2fzu.com/member/"
  const githubPrefix = "https://github.com/"
  const visibleYearsCount = 3; // 可见年份数量

  const sortedYears = Object.keys(data).sort((a, b) => b.localeCompare(a));
  const displayedYears = isExpanded ? sortedYears : sortedYears.slice(0, visibleYearsCount);

  // 我们创建一个 state 来存储 LazyLoad 组件
  const [LazyLoad, setLazyLoad] = useState(null);

  useEffect(() => {
    // 动态导入 LazyLoad 组件，并在客户端代码执行时设置 state
    import('@parrotjs/react-lazyload').then(LazyLoadModule => {
      setLazyLoad(() => LazyLoadModule.default);
    });
  }, []);


  // 当 activeYear 改变时，检查 focus 是否存在于新的年份中
  useEffect(() => {
    const focuses = new Set(data[activeYear].map(member => member.focus));
    if (!focuses.has(activeFocus) && activeFocus !== 'All') {
      setActiveFocus('All');
    }
  }, [activeYear, activeFocus, data]);

  // 提取当前年份所有成员的 focus 及对应人数
  const focusOptionsWithCount = useMemo(() => {
    const focusCountMap = data[activeYear].reduce((acc, member) => {
      acc[member.focus] = (acc[member.focus] || 0) + 1;
      return acc;
    }, {});
    const focusesWithCount = Array.from(new Set(data[activeYear].map(member => member.focus))).map(focus => ({
      focus,
      count: focusCountMap[focus]
    }));
    return [{ focus: 'All', count: data[activeYear].length }, ...focusesWithCount];
  }, [activeYear, data]);

  // 过滤成员数据基于当前选定的 focus
  const filteredMembers = useMemo(() => {
    if (activeFocus === 'All') {
      return data[activeYear];
    }
    return data[activeYear].filter(member => member.focus === activeFocus);
  }, [activeYear, activeFocus, data]);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* 年份选择 */}
      <div className="mb-4 flex flex-wrap">
        {displayedYears.map((year) => (
          <div
            key={year}
            className={`px-4 py-2 mr-2 mb-2 whitespace-nowrap rounded text-sm font-medium transition ease-in-out duration-300 cursor-pointer
            ${activeYear === year ? 'bg-[var(--ifm-color-primary)] text-white' : 'text-[var(--ifm-color-primary)] bg-gray-200 hover:bg-[var(--ifm-color-primary-lightest)] hover:text-[var(--ifm-color-primary-dark)]'}`}
            onClick={() => setActiveYear(year)}
          >
            {year} ({data[year].length})
          </div>
        ))}
        {Object.keys(data).length > visibleYearsCount && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 mr-2 mb-2 whitespace-nowrap rounded text-sm font-medium bg-[var(--ifm-color-primary)] cursor-pointer transition ease-in-out duration-300 text-[var(--ifm-color-primary)] bg-gray-200 hover:bg-[var(--ifm-color-primary-lightest)] hover:text-[var(--ifm-color-primary-dark)]'"
          >
            {isExpanded ? '收起' : '更多'}
          </button>
        )}
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{(parseInt(activeYear,10) - 1) + " - " + activeYear + "学年"}</h2>
        <p><u>注:方向按成为正式成员时的聚焦方向归类，有多个方向以优先级最高的方向作为分类依据</u></p>
        {/* Focus 选择 */}
        <div className="mb-4 flex flex-wrap">
          {focusOptionsWithCount.map(({ focus, count }) => (
            <div
              key={focus}
              className={`px-4 py-2 mr-2 mb-2 whitespace-nowrap rounded text-sm font-medium transition ease-in-out duration-300 cursor-pointer
                        ${activeFocus === focus ? 'bg-[var(--ifm-color-primary)] text-white' : 'text-[var(--ifm-color-primary)] bg-gray-200 hover:bg-[var(--ifm-color-primary-lightest)] hover:text-[var(--ifm-color-primary-dark)]'}`}
              onClick={() => setActiveFocus(focus)}
            >
              {focus} ({count})
            </div>
          ))}
        </div>
        {/* 成员展示 */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.avatar}
              className="flex flex-col items-center gap-1 bg-white dark:bg-gray-950 p-2 rounded-lg shadow-md" // 添加 max-w-xs 和 mx-auto 以限制卡片宽度并在其父容器中居中
            >
              <Avatar>
                {LazyLoad ? (
                  <LazyLoad>
                    <img src={imgPrefix + member.avatar} alt={member.name} className="w-20 h-20 rounded-full" />
                  </LazyLoad>
                ) : (
                  <div>Loading...</div>
                )}
              </Avatar>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{member.major}</p>
                {member.github !== "null" && (
                  <a
                    href={githubPrefix + member.github}
                    className="flex items-center justify-center text-[var(--ifm-color-primary)] hover:text-[var(--ifm-color-primary-light)] transition duration-300 text-xs"
                  >
                    <GithubIcon className="w-3 h-3 mr-1" />
                    {member.github}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
