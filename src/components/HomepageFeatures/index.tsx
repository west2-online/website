import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '开放',
    Svg: require('@site/static/img/index_mountain.svg').default,
    description: (
      <>
        west2-online 是一个自由、开放的工作室，我们欢迎任何人加入我们的工作室。没有 KPI，没有压力，只有自由。
      </>
    ),
  },
  {
    title: '开源',
    Svg: require('@site/static/img/index_tree.svg').default,
    description: (
      <>
        west2-online 喜欢开源，拥抱开源。我们坚信开源的力量，我们也希望能够为开源社区贡献一份力量。
      </>
    ),
  },
  {
    title: '共享',
    Svg: require('@site/static/img/index_react.svg').default,
    description: (
      <>
        west2-online 坚信知识共享的力量，我们希望能够通过我们的努力，让更多的人受益。我们会将优秀、优质资源文章发布于我们的 <a href="https://wiki.west2.online">wiki</a> 上。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
