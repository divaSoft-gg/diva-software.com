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
            <h1 className="px-4 mt-20 text-4xl font-semibold leading-normal text-left lg:text-6xl lg:px-0">{t('aboutUs.ourTeam')}</h1>

            {teamSection.map((item: { title: string }, index: number) => (
                <section className="my-20" key={index}>
                    <h2 className="px-4 text-xl font-bold text-gray-900 lg:text-2xl">{item.title}</h2>
                    <div className="flex flex-wrap items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10">
                        {OUR_TEAM.map((element: ITeam, index: number) => (
                            <div key={index} className="flex-shrink-0">
                                {element.data.map((member: TeamInformations, index: number) => (
                                    <TeamCard key={index} {...member} />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            ))}

        </CenteredLayout>
    );
}
