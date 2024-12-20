import { cn, shuffleArray } from '../../../common/utils';
import { IClient } from '../../../common/types';
import { Tooltip } from '@nextui-org/react';
import CardDetils from '../../shared/ourClientCard';
import { useTranslation } from 'react-i18next';


export default function AutoplayCarousel({ directionClass, elementIndex }: { directionClass: string, elementIndex: number }) {
    const { t } = useTranslation()
    const clients: IClient[] = elementIndex === 0 ? t('ourClients.clientsDetails', { returnObjects: true }) as IClient[] : shuffleArray(t('ourClients.clientsDetails', { returnObjects: true }) as IClient[]);

    return (
        <div className="relative w-full h-16 overflow-hidden">
            <div
                className={cn('absolute flex items-center justify-center h-full gap-4 w-[200%]', directionClass)}
                onMouseEnter={(e) => e.currentTarget.classList.add("pause")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("pause")}
            >
                {clients.map((detail, index) => (
                    <CarouselItem
                        key={index}
                        imgUrl={detail.logo}
                        imgTitle={detail.name}
                        description={detail.description}
                        websiteLink={detail.websiteLink}
                    />
                ))}
                {clients.map((detail, index) => (
                    <CarouselItem
                        key={`${index}-clone`}
                        imgUrl={detail.logo}
                        imgTitle={detail.name}
                        description={detail.description}
                        websiteLink={detail.websiteLink}
                    />
                ))}
            </div>

        </div>
    );
}

function CarouselItem({ imgUrl, imgTitle, description, websiteLink }: { imgTitle: string, imgUrl: string, description: string, websiteLink: string }) {
    return (
        <div className="flex items-center justify-center w-full h-full transition-transform transform hover:scale-90 hover:shadow-lg shadow-gray-200">
            <Tooltip
                showArrow
                placement="bottom"
                content={<CardDetils imgTitle={imgTitle} imgUrl={imgUrl} description={description} websiteLink={websiteLink} />}
            >
                <img className="w-4/5 h-4/5" src={imgUrl} alt={imgTitle} />
            </Tooltip>
        </div>
    );
}


