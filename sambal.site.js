

const page = {
    hasPart: [
        {"@id": "header"}
    ]
};

const docPage = {
    hasPart: [
        {"@id": "header"},
        {"@id": "sidebar"}
    ]
};

export function siteMap(router) {
    router
        .landingPage("sambal", {page: page})
        .itemPage("/about", "about-sambal", {page: page})
        .itemPage("/get-started", "getting-started", {page: docPage})
        .iterateItems(["docs/**/*"], (mainEntity) => {
            return {
                path: `/doc/${mainEntity.identifier}`,
                options: {page: docPage}
            }
        });
}

export const siteConfig = {
    baseUrl: "https://sambal.dev",
    collections: [
        {
            "@id": "collection/docs",
            "@type": "SiteNavigationElement",
            src: ["docs/**/*"],
            groupBy: (mainEntity) => {
                return {
                    section: mainEntity.articleSection
                };
            },
            sortBy: {
                prop: "position",
                order: "asc"
            }
        }
    ],
    theme: {
        name: "sambal-ui-material",
        options: {
            googleAnalyticsId: "UA-12310823-6"
        }
    }
};
