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
            img: "/assets/where-can-social-media-go-from-here.jpg",
            id: `Where can social media go from here`,
            title: "Where can social media go from here",
            summary: `
            As mass media began to develop information could be 
            easily spread and by extension ideas. Ideas by their 
            very nature, good or bad, are disruptive to the existing order. So governing entities have chosen to regulate the flow of the same to keep their power intact. This was implemented either through carefully disguised regulations or outright censorship for all of mass media. `,
            fullDescription: function () {
                return (
                    <>
                        <p>
                            Let's have a look at social media's adoption and how
                            it is evolving.
                        </p>
                        <p>
                            As mass media began to develop information could be
                            easily spread and by extension ideas. Ideas by their
                            very nature, good or bad, are disruptive to the
                            existing order. So governing entities have chosen to
                            regulate the flow of the same to keep their power
                            intact. This was implemented either through
                            carefully disguised regulations or outright
                            censorship for all of mass media. Besides,
                            monetisation options were limited. And therefore the
                            barrier of entry was high and only big media players
                            with parent companies/ government associations
                            survive in the market. So even though free speech is
                            ingrained in our laws, the reality is that no
                            sensible media house would risk their existence for
                            disruptive ideas making the mainstream media market
                            effectively an oligopoly.
                        </p>

                        <p>
                            Now during the early decades of 2010s, a wave of
                            social media platforms came up. These along with
                            improvements in recording tech (think smartphone
                            cameras) allowed anyone to become a media entity
                            without the high costs or regulatory laws.
                        </p>
                        <p>
                            Combine these with direct monetisation options and
                            we've got smaller creators creating more
                            personalized & niche content unheard of before.
                            Finally the attention economy was completely
                            democratized. Or was it? There's a small problem
                            with the above being that the platform was still
                            centrally owned. Now the governments can draw up
                            laws to regulate these platforms. Or in case of
                            immunity like section 230, platforms end up having
                            more soft power than regulators. They take up that
                            place with heavily regulated monetisation/
                            censorship to control the content.
                        </p>
                        <p>
                            This proves how centralization is going to
                            inevitably end up creating quasi fascistic entities
                            trying to rule us all. The solution lies in the
                            removal of the central entity by using decentralized
                            blockchains that allow for collective ownership by
                            the community. Any necessary regulations can be
                            built into the code/spread over community to
                            minimize biases associated with centralized
                            regulationThe absence of a central entity, makes the
                            system impervious to regulations/ takedowns from
                            authoritarian entities just like Bitcoin.
                            Monetisation through crypto economics is another way
                            of building up community engagement. It makes the
                            creators and curators partners in the growth of the
                            platform, similar to how employee stock options (
                            ESOPs) work.
                        </p>
                        <p>
                            Dorsey's tweet shows the market shifting towards
                            these ventures( though the level of centrality with
                            bluesky is not so clear)
                            <img
                                src="/public/assets/where-can-social-media-go-from-here1.jpg"
                                alt=""
                            />
                        </p>

                        <p>To summarize the benefits of decentralization</p>
                        <ul>
                            <li>
                                using Blockchain to secure the uploaded content
                                and by extension free speech
                            </li>
                            <li>
                                democratization of the rewards of attention
                                economy through ad-free crypto monetisation
                            </li>
                            <li>
                                decentralized ownership making the platform
                                immune to external entities
                            </li>
                        </ul>
                        <p>
                            The trends of this decade would have the themes of
                            decentralization, democratization and community
                            involvement as we would explore in the subsequent
                            posts. History does not directly repeat, although
                            the trends are often cyclical. Similar to the
                            analysis of social media above, through this blog I
                            would be exploring more specific case studies and
                            see if we can draw insights for future platforms/
                            networks of Web 3.0
                        </p>
                        <strong>
                            Mention about the bubble in decentralized ventures
                            with centralized entities coming up with
                            decentralized offerings( like bluesky and steem)
                        </strong>
                        <p>
                            Formation of a bubble during the 90s which culminate
                            in the dotcom bubble
                        </p>
                        <p>
                            Blockchain bubble:
                            <span>
                                Why not everything needs blockchains at this
                                point;
                            </span>
                        </p>
                        <p>
                            The necessity of creating ventures that really go
                            decentralized and relinquish control in a contrarian
                            way of thinking
                        </p>
                        <p>Things to consider</p>

                        <ul>
                            <li>problem solved</li>
                            <li>Evaluation of the value proposition</li>
                            <li>competition landscape</li>
                            <li>company secrets</li>
                        </ul>
                    </>
                );
            },
        },
    ],
};
