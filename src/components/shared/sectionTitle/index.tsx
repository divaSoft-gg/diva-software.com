import { cn } from "../../../common/utils";

export default function SectionsTitle({ title, mb = 'mb-0', paragraph }: { title: string, mb?: string, paragraph?: string }) {
    return (
        <div className={`${mb}`}>
            <h1
                className={cn(
                    "text-6xl font-semibold text-left leading-normal text-white",
                )}
            >
                {title}
            </h1>
            {paragraph && (

                <p className="mt-2 text-lg leading-8 muted">
                    {paragraph}

                </p>
            )}
        </div>


    )
}