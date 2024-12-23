
import Tabs from "@/components/features/procurement/tabs";
import { Suspense } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <  >
            <Suspense>
                <Tabs />
            </Suspense>
            {children}

        </>
    );
}
