



interface Props{
    title: string,
    subTitle?: string  |  React.ReactNode,
    children: React.ReactNode;
    headerRow?: boolean,
    shadow?: boolean
}

export default function Section({title, subTitle, children, headerRow, shadow}: Props){

    return(
        <section className={`my-6 text-[#1D2739] border rounded-lg p-8 ${shadow && 'shadow'}`}>
            <div className={`flex ${headerRow? 'flex-row': 'flex-col'}  justify-between`}>
                <h2 className="font-bold text-xl">
                    {title}
                </h2>
               {subTitle && <p className="text-sm text-[#667185]">{subTitle}</p>}
            </div>
            {children}
        </section>
    )
}