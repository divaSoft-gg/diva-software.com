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
            {teamSection.map((item: { title: string }) => (

                <section className="my-20">
                    <h1 className="mb-20 text-6xl font-semibold leading-normal text-left">{t('aboutUs.ourTeam')}</h1>
                    <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                    <div className="flex items-center justify-center space-x-10 space-y-20">
                        {OUR_TEAM.map((element: ITeam, index: number) => (
                            <div key={index} className="grid flex-shrink-0 grid-cols-1 gap-y-8">
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
