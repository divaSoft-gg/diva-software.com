import { useTranslation } from "react-i18next";
import CenteredLayout from "../ui/centredLayout";
import TeamCard from "../teamMemberCard";
import { OUR_TEAM } from "../../assets/data";
import { ITeam, TeamInformations } from "../../common/types";



export default function OurTeam() {
    const { t } = useTranslation();
    const teamSection: { title: string }[] = t('aboutUs.TeamSections', { returnObjects: true }) as { title: string }[];


    return (
        <CenteredLayout>
            <h1 className="px-8 mt-20 text-4xl font-semibold leading-normal text-left lg:text-6xl lg:px-0">{t('aboutUs.ourTeam')}</h1>

            {
                teamSection.map((item: { title: string }, index: number) => (
                    <section className="my-20" key={index}>
                        <h2 className="px-8 mb-4 text-xl font-bold text-black lg:px-0 dark:text-white lg:text-2xl">{item.title}</h2>

                        <div className="grid gap-4 responsiveGrid">
                            {
                                OUR_TEAM.map((element: ITeam) => (
                                    element.data.map(
                                        (member: TeamInformations, elementIndex: number) => <TeamCard key={elementIndex} {...member} />
                                    )
                                ))
                            }
                        </div>

                    </section>
                ))
            }

        </CenteredLayout>
    );
}
