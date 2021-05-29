/**
 * data: [ list of all the blogs]
 *
 * data: [
 * {
 *      img: "source of image file",
 *      title: "title-of-the-blog"["name of the blog and should be written as in-this-way with hyphens(-)"],
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
            img: "https://dummyimage.com/400x300.jpg",
            title: "Our investment memo/ thesis",
            summary: `
            Explain the trends in the past and for the future:
            Looking at the uncertainty of the post pandemic world0
            `,
            data: [
                { unMeta: {} },
                [
                    {
                        t: "Para",
                        c: [
                            {
                                t: "Strong",
                                c: [
                                    { t: "Str", c: "Our" },
                                    { t: "Space", c: [] },
                                    { t: "Str", c: "investment" },
                                    { t: "Space", c: [] },
                                    { t: "Str", c: "memo/" },
                                    { t: "Space", c: [] },
                                    { t: "Str", c: "thesis" },
                                ],
                            },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "Explain" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "trends" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "in" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "past" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "and" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "for" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "future:" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "Looking" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "at" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "uncertainty" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "post" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "pandemic" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "world0" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_how" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "highly" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "centralized" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "tech" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "entities" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "have" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "been" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "acting" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "as" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "quasi" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "fasistic" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "institutions" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "regulate" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "our" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "lives," },
                            { t: "Space", c: [] },
                            { t: "Str", c: "controlling" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "free" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "speech," },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_neccesity" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "decentralization" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "achieve" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "true" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "democratization" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "rewards" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "and" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "control" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "making" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "internet" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "truly" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "end" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "user" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "centric" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "rather" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "than" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "platform" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "centric" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "(" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "like" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "bloggers" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "write" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "it" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "for" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "algorithm)" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "wrestle" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "back" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "regulatory" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "control" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "from" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "centralized" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "platform" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "entities" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "a" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "community" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "based" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "curation" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "model" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "truly" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "democratize" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "platform" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "Explain" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "psychology" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "asset" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "bubbles" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "and" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "explain" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "woth" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "trends" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "how" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "it" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "goes" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "through" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "cycles" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "similar" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "dot" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "com" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "bubble" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "," },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "We're" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "in" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "middle" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "a" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "crypto" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "Bubble" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "burst" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "crypto" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "startups" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "that" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "survive" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "will" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "it" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "big" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "in" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "next" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "decade(" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "and" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "what" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "they" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "need" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "do" },
                            { t: "Space", c: [] },
                            { t: "Str", c: ")" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_crypto" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "venture" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "have" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "gone" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "through" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "a" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "bubble" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "like" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "phase" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "with" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "a" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "lot" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "scams" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "in" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "this" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "arena" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "with" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "a" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "lot" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "of" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "ICO" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "tokens" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "ending" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "up" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "worthless" },
                        ],
                    },
                    { t: "Para", c: [{ t: "Str", c: "_" }] },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "create" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "a" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "securities" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "market" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "based" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "on" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "Blockchain" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "with" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "internal" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "regulatory" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "mechanisms" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "(For" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "companies" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "go" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "public/" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "ICOs" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "be" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "on" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "forefront" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "to" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "regular" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "government" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "regulated" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "securities" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "exchanges" },
                        ],
                    },
                    { t: "Para", c: [{ t: "Str", c: ")" }] },
                    { t: "Para", c: [{ t: "Str", c: "_" }] },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "Looking" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "at" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "the" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "trends" },
                        ],
                    },
                    {
                        t: "Para",
                        c: [
                            { t: "Str", c: "_decentralization" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "and" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "crypto" },
                            { t: "Space", c: [] },
                            { t: "Str", c: "ventures" },
                        ],
                    },
                    { t: "Para", c: [{ t: "Str", c: "_" }] },
                ],
            ],
            // introText: {
            //     type: "list",
            //     listData: [
            //         `how highly centralized tech entities have been acting as quasi fasistic institutions to regulate our lives, controlling free speech,`,
            //         `neccesity of decentralization to achieve true democratization of rewards and contro`,
            //         `making the internet truly end user centric rather than the platform centric ( like bloggers write it for the algorithm)`,
            //         `wrestle back regulatory control from centralized platform entities to a community based curation model to truly democratize the platform`,
            //     ],
            // },

            // fullDescription: [
            //     {
            //         head: `Explain the psychology of asset bubbles and explain woth trends how it goes through cycles similar to the dot com bubble ,`,
            //         desc: [
            //             {
            //                 type: "plainText",
            //                 data: [
            //                     `We're in the middle of a crypto Bubble burst`,
            //                     `crypto startups that survive will it big in the next decade( and what they need to do)`,
            //                 ],
            //             },
            //             {
            //                 type: "list",
            //                 data: [
            //                     `crypto venture have gone through a bubble like phase with a lot of scams in this arena with a lot of ICO tokens ending up worthless `,
            //                     `create a securities market based on Blockchain with internal regulatory mechanisms
            //                     (For companies to go public/ ICOs to be on the forefront to the regular government regulated securities exchanges
            //                     )
            //                     `,
            //                 ],
            //             },
            //         ],
            //     },

            //     {
            //         head: `Looking at the trends `,
            //         desc: [
            //             {
            //                 type: "list",
            //                 data: [`decentralization and crypto ventures`],
            //             },
            //         ],
            //     },
            // ],
        },
        {
            img: "https://dummyimage.com/300x300.jpg",
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
            img: "https://dummyimage.com/200x100.jpg",
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
            img: "https://dummyimage.com/300x200.jpg",
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
            img: "https://dummyimage.com/400x300.jpg",
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
            img: "https://dummyimage.com/300x300.jpg",
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
    ],
};