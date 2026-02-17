"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// In a real app, this would wrap Google Analytics, PostHog, or Segment
interface AnalyticsContextType {
    trackEvent: (eventName: string, properties?: Record<string, any>) => void;
    trackPageView: (url: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: ReactNode }) {
    const trackEvent = (eventName: string, properties?: Record<string, any>) => {
        if (process.env.NODE_ENV !== "production") {
            console.log(`[Analytics] Event: ${eventName}`, properties);
        }
        // Integrate with real analytics service here
    };

    const trackPageView = (url: string) => {
        if (process.env.NODE_ENV !== "production") {
            console.log(`[Analytics] PageView: ${url}`);
        }
        // Integrate with real analytics service here
    };

    return (
        <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
            {children}
        </AnalyticsContext.Provider>
    );
}

export function useAnalytics() {
    const context = useContext(AnalyticsContext);
    if (context === undefined) {
        throw new Error("useAnalytics must be used within an AnalyticsProvider");
    }
    return context;
}
