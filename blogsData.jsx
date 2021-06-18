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

const blog = () => {
    return (
        <>
            <h3>HTML here</h3>
        </>
    );
};

export const blogData = {
    data: [
        {
            img: "https://dummyimage.com/400x300.jpg",
            id: `Our investment memo or thesis`,
            title: "Our investment memo/thesis",
            summary: `
            Explain the trends in the past and for the future:
            Looking at the uncertainty of the post pandemic world0
            `,
            fullDescription: blog,
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
