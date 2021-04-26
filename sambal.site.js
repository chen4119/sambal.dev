

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
        // .collectionPage("/blogs", "collection/blogs/latest", {page: page})
        // .itemPage("/blogs/blog1", "blog1", {page: page});
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
    theme: "sambal-ui-material"
};
