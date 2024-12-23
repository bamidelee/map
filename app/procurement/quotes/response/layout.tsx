
import Tabs from "@/components/features/procurement/tabs";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <
         
        >
            <Tabs />
            {children}

        </>
    );
}
