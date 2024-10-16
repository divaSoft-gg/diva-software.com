import { useTranslation } from "react-i18next"
import CenteredLayout from "../ui/centredLayout"
import SectionsTitle from "../shared/sectionTitle"

export default function IntroductionSection() {
    const { t } = useTranslation()





    return (
        <CenteredLayout>
            <SectionsTitle title={t('aboutUs.title')} />
            <p className="mt-4 text-xl text-left ">
                {t('aboutUs.paragraph')}
            </p>
        </CenteredLayout>

    )
}