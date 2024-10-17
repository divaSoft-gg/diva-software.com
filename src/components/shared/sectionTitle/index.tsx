export default function SectionsTitle({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <div>
            <h1 className="text-4xl font-semibold leading-normal text-left text-black dark:text-white lg:text-6xl">{title}</h1>

            {subtitle && <p className="mt-2 leading-8 text-white lg:text-lg text-md muted ">{subtitle}</p>}
        </div>
    )
}