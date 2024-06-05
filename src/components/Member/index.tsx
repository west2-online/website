import { Avatar } from "@/components/ui/avatar"
import { memberData } from "@/components/Member/memberData";
import React, { useState, useMemo, useEffect } from 'react';
import LazyLoad from '@parrotjs/react-lazyload'

export default function Component() {
  const data = memberData
  const [activeYear, setActiveYear] = useState(Object.keys(data)[0]); // 默认为第一个年份
  const [activeFocus, setActiveFocus] = useState('All'); // 默认选中所有 focus

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
      <div className="mb-4 flex space-x-2">
        {Object.keys(data).map((year) => (
          <div
              key={year}
              className={`px-4 py-2 mr-2 mb-2 whitespace-nowrap rounded text-sm font-medium transition ease-in-out duration-300 cursor-pointer
                        ${activeYear === year ? 'bg-[var(--ifm-color-primary)] text-white' : 'text-[var(--ifm-color-primary)] bg-gray-200 hover:bg-[var(--ifm-color-primary-lightest)] hover:text-[var(--ifm-color-primary-dark)]'}`}
              onClick={() => setActiveYear(year)}
            >
              {year} ({data[year].length})
          </div>


        ))}
      </div>
      {/* Focus 选择 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{activeYear + "年秋季"}</h2>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.avatar}
              className="flex flex-col items-center gap-2 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md"
            >
              <Avatar>
                <LazyLoad>
                  <img src={"https://img.w2fzu.com/member/" + member.avatar} alt={member.name} className="w-20 h-20 rounded-full" />
                </LazyLoad>
              </Avatar>
              <div className="text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{member.major}</p>
                {member.github !== "null" && <a href={"https://github.com/" + member.github}>{member.github}</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
