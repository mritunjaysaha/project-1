export const navbarList = [
    { name: "home", links: "#" },
    { name: "solutions", links: "#" },
    { name: "blog", links: "#" },
    { name: "services", links: "#" },
    { name: "newsletter", links: "#" },
];

export const navbarData = {
    company: { name: "xxxCapital", link: "/" },
    home: { name: "home", link: "/" },
    solutions: { name: "solutions", link: "/solutions" },
    careers: { name: "careers", link: "/careers" },
    contact: { name: "contact us", link: "/contactUs" },
    newsLetter: { name: "newsletter", link: "/newsletter" },
    services: [
        {
            name: "equity capital markets",
            link: "/equityCapitalMarkets",
        },
        {
            name: "debt capital markets",
            link: "/debtCapitalMarkets",
        },
        {
            name: "m&a advisory",
            link: "/maAdvisory",
        },
        {
            name: "direct investments",
            link: "/directInvestments",
        },
    ],
};

export const companyName = { name: "xxx Capital" };

export const offeringsData = [
    { name: ["equity capital", "markets"], link: "/equityCapitalMarkets" },
    { name: ["debt capital", "markets"], link: "/debtCapitalMarkets" },
    { name: ["m&a", "Advisory"], link: "/maAdvisory" },
    { name: ["direct", "investments"], link: "/directInvestments" },
    { name: ["green", "bonds"], link: null },
    { name: ["impact", "funding"], link: null },
];

export const clienteleData = [
    ["growth", " companies"],
    ["asset", "management", "companies"],
    ["fund houses"],
    ["single/", "multi family", "offices"],
    ["hnwi/", "institutional", "asset holders"],
];

export const teamData = [
    {
        name: "Shreyas Naik",
        designation: "Director of Capital Markets",
        img:
            "https://media-exp1.licdn.com/dms/image/C5103AQEeWhZDAkOfZA/profile-displayphoto-shrink_400_400/0/1556536638233?e=1625702400&v=beta&t=S-vgk-mcZuK4diyVNyf5l1LDOKWM5pWlgJbFBvhVmUw",
        linkedin: "https://www.linkedin.com/in/shreyas-naik-639536149/",
    },
    {
        name: "Samrat Dhar",
        designation: "Marketing Director",
        img: "",
        linkedin: "",
    },
];

export const equityCapitalMarketsData = {
    name: "equity capital markets",
    data: [
        [
            `Our equity capital markets practice is focused on working with growth businesses. `,
        ],
        [
            `Most commonly, we are hired to support founder-controlled businesses in their first institutional capital raise, management teams within large enterprises who are seeking to acquire their operating division, and companies restructuring their capital stack.`,
        ],
    ],
    img:
        "https://intersectioncapital.com/wp-content/uploads/2019/03/building.jpg",
};

export const debtCapitalMarketsData = {
    name: "debt capital markets",
    data: [
        [`Today, there is over $3 trillion committed to credit opportunities.`],
        [
            `The overabundance of capital has led to historically low capital cost and more competition amongst lenders. We maintain an extensive network with lenders of various all segments of the credit stack.`,
        ],
        [
            `Most commonly, we are hired to support companies seeking to make acquisitions, recapitalize their balance sheet, or in support of de novo growth.`,
        ],
    ],
    img:
        "https://intersectioncapital.com/wp-content/uploads/2019/03/debt-capital.jpg",
};

export const maAdvisory = {
    name: "m&a advisory",
    data: [
        [
            `The specialized nature of our process ensures positive outcomes with minimal disruption and market awareness. It’s typical that our sell-side mandates are completed with less than 10 prospective parties receiving any signal that the asset is available. On the buy-side, we are able to direct the conversation with prospective targets to ensure that all parties are aligned while tapping our capital markets advisory team to ensure capital availability.`,
        ],
        [
            `Most commonly, we are hired by companies needing to run a silent auction to strategic acquirers, founder-owned businesses looking to transition the business while ensuring their legacy remains, and companies which have experienced a previously failed process.`,
        ],
    ],
    img:
        "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
};

export const directInvestments = {
    name: "direct investments",
    data: [[`coming soon`]],
    img: "",
};

export const careersPageData = {
    buttonName: "Full Description on LinkedIn",
    data: [
        // {
        //     title: "independent sales representative",
        //     description:
        //         "VU Capital is looking for talented, skilled, driven and experienced Sales Representatives - with aspirations to grow in the sales organisation - who are an integral part to help boost sales and contribute to VU Capital’s long-term business growth. You will be working remotely from home, enjoying in-depth training and kick starting your sales activities.",
        //     descLink: "",
        // },
        // {
        //     title: "independent sales representative",
        //     description:
        //         "VU Capital is looking for talented, skilled, driven and experienced Sales Representatives - with aspirations to grow in the sales organisation - who are an integral part to help boost sales and contribute to VU Capital’s long-term business growth. You will be working remotely from home, enjoying in-depth training and kick starting your sales activities.",
        //     descLink: "",
        // },
        // {
        //     title: "independent sales representative",
        //     description:
        //         "VU Capital is looking for talented, skilled, driven and experienced Sales Representatives - with aspirations to grow in the sales organisation - who are an integral part to help boost sales and contribute to VU Capital’s long-term business growth. You will be working remotely from home, enjoying in-depth training and kick starting your sales activities.",
        //     descLink: "",
        // },
        // {
        //     title: "independent sales representative",
        //     description:
        //         "VU Capital is looking for talented, skilled, driven and experienced Sales Representatives - with aspirations to grow in the sales organisation - who are an integral part to help boost sales and contribute to VU Capital’s long-term business growth. You will be working remotely from home, enjoying in-depth training and kick starting your sales activities.",
        //     descLink: "",
        // },
    ],
};

/**
 * data: [ list of all the blogs]
 *
 * data: [
 * {
 *      img: "source of image file",
 *      name: "name of the blog and should be written as in-this-way with hyphens(-)",
 *      summary: "summary/starting of the the blog which will be shown in the cards",
 *      fullDescription: [
 *          head: "question or header"
 *          desc: [data as a collection of arrays which will be placed inside
 *                  <p></p>
 *          ]
 *      ]
 * }
 * ]
 */

export const blogData = {
    data: [
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "Lorem-ipsum-dolor",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "a-b-c",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "Lorem-ipsum-dolor",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "Lorem-ipsum-dolor",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "Lorem-ipsum-dolor",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "Lorem-ipsum-dolor",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
        {
            img:
                "https://intersectioncapital.com/wp-content/uploads/2019/03/sign-deal.jpg",
            name: "Lorem-ipsum-dolor",
            summary: "Lorem ipsum dolor sit.",
            fullDescription: [
                {
                    head: "What ....",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
                {
                    head: "what ......",
                    desc: [
                        [
                            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus recusandae quo corrupti ea quisquam rem est cupiditate voluptatum enim? Incidunt cupiditate nostrum hic perferendis facilis placeat natus, quaerat commodi explicabo, eveniet laborum quam, et illum earum possimus. Accusamus minus non omnis unde? Soluta error debitis culpa ipsa maxime neque tempore magnam recusandae rerum, alias similique quos minus unde reprehenderit a quasi laudantium odio odit delectus, mollitia harum facilis placeat optio? Voluptate maiores mollitia quam suscipit officia cumque doloremque natus ullam? Ipsa sapiente aperiam quasi blanditiis animi odit suscipit similique ratione exercitationem, iusto voluptate quo ipsam omnis, non vel possimus.`,
                        ],
                        [`ajksdasklfklasfkas askljfaskjdas lksjadaj`],
                    ],
                },
            ],
        },
    ],
};

export const summarySectionData = {
    whoWeAre: { description: `XXX capital is an independently owned` },
    whatWeDo: {
        description: `We've been studying trends about what drives decisions.
    Cause it's not about the info you present, it's about
    how you retain their attention. And finally at the end
    of that they are curious and emotionally invested in the
    deal. That's how we're able to get the deal on our own
    terms for our clients. Plus we are able to retain that
    element of fun and excitement. Plus the bigger the
    stakes with the deal, the more exciting it is for us`,
    },
};
