export default async function ERPTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div className="animate-appear">
                {children}
        </div>
    )
}