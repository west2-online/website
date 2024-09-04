import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Lottie from "react-lottie";
import logoData from "../../static/lottie/logo.json";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <div
            className={clsx(
              styles.heroLogo,
              "w-[200px]",
              "aspect-square",
              "bg-white"
            )}
          >
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: logoData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={200}
              width={200}
            />
          </div>
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: "The <b>Organization</b> for FZUers",
            }}
          />
        </Heading>
        <Heading as="h2" className="text-white">
          西二在线成立于 1998 年，是福州大学最大的学生组织
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary text-black" to="/docs/intro">
            关于我们
          </Link>
          <Link className="button button--secondary" to="/docs/recruitment">
            加入我们
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="west2-online's organization introduction index page"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
