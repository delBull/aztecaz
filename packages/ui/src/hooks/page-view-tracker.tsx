"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { useAnalytics } from "./use-analytics";

// Helper component that wraps the tracking logic, using Suspense boundary for useSearchParams
function PageViewTrackerContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { trackPageView } = useAnalytics();

    useEffect(() => {
        if (pathname) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
            trackPageView(url);
        }
    }, [pathname, searchParams, trackPageView]);

    return null;
}

export function PageViewTracker() {
    return (
        <Suspense fallback={null}>
            <PageViewTrackerContent />
        </Suspense>
    );
}
