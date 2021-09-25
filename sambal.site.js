

export const siteConfig = {
    baseUrl: "https://sambal.dev",
    collections: [
        {
            uri: "/collection/docs",
            include: ["pages/docs/**/*"],
            groupBy: (mainEntity) => {
                return {
                    section: mainEntity.articleSection
                };
            },
            sort: (a, b) => {
                return a.position - b.position;
            }
        }
    ],
    theme: {
        name: "sambal-ui-material",
        options: {
            landingPage: true,
            // googleAnalyticsId: "UA-12310823-6"
        }
    }
};
