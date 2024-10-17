import { useTranslation } from "react-i18next"
import CenteredLayout from "../ui/centredLayout"
import SectionsTitle from "../shared/sectionTitle"

export default function IntroductionSection() {
    const { t } = useTranslation()





    return (
        <CenteredLayout>
            <SectionsTitle title={t('aboutUs.title')} />
            <p className="px-4 mt-4 text-xl text-left lg:px-0 ">
                {t('aboutUs.paragraph')}
            </p>
        </CenteredLayout>

    )
}