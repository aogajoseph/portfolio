interface Props {
    title: string;
    id?: string;
    children: React.ReactNode;
}

export default function Section({ title, id, children }: Props) {
    return (
        <section
            id={id}
            className="flex flex-col md:flex-row items-right justify-right md:items-start gap-8 w-full max-w-4xl mx-auto mt-28 scroll-mt-24"
        >
            <p className="text-xl text-left md:text-lg font-medium pt-3 w-full md:max-w-42">
                {title}
            </p>

            {children}
        </section>
    );
}