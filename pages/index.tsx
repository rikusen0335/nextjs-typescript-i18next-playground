import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IndexProps {
  name: string;
  description: string;
}

export default function IndexPage() {
  const router = useRouter();
  const { t } = useTranslation();

  const title = t('lang.title')
  const items = t('document.items', {returnObjects: true})

  return (
    <div>
      Hello World.{" "}
      <Link
        href={router.pathname}
        locale={router.locale === "en" ? "zh-Hant-TW" : "en"}
        passHref
      >
        <a>Switch to {t("lang.title")}</a>
      </Link>
      <ul>
        {t("document.items", { returnObjects: true }).map(
          ({ name, description }, index: number) => (
            <li key={index}>
              <h3>{name}</h3>
              <p>{description}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["general"]))
  }
});
