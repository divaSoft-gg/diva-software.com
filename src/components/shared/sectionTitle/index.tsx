export default function SectionsTitle({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <div>
            <h1 className="text-6xl font-semibold leading-normal text-left text-white font-customFont">{title}</h1>

            {subtitle && <p className="mt-2 text-lg leading-8 text-white muted font-customFont">{subtitle}</p>}
        </div>
    )
}