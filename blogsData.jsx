import styles from "./styles/blogsData.module.scss";

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
                                src="/assets/where-can-social-media-go-from-here1.jpg"
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

        {
            img: "",
            id: "Clubhouse: The rise and fall",
            title: "Clubhouse: The rise and fall?",
            summary: `
            Early adopters found a digital playground with the ability of making new
             connections and creators able to create nw forms of content. Users were mostly left to themselves with platform owners becoming pop culture icons. But as these networks grow more and more big, they're observed to get worse. Why is that so?
            `,
            fullDescription: function () {
                return (
                    <>
                        <p>
                            <em>
                                ( fundamental question: why does social media
                                suck once its big or why does social meida suck
                                today in general? and how to subvert the same
                                aka clubhouse)
                            </em>
                        </p>
                        <p>
                            As we discovered in the previous article, social
                            media succeeded because it brought personalization
                            to an industry. Early adopters found a digital
                            playground with the ability of making new
                            connections and creators able to create nw forms of
                            content. Users were mostly left to themselves with
                            platform owners becoming pop culture icons. But as
                            these networks grow more and more big, they're
                            observed to get worse. Why is that so?
                        </p>
                        <p>
                            Thanks to a combination of market entry barriers and
                            direct network effects, they become virtual
                            monopolies and we stop seeing alternatives come up.
                            As the novelty factors faded and this became the
                            usual, everyone started to commoditize their
                            accounts.Whilst this indeed was great at creating
                            new professions and shouldn't have been a problem by
                            itself, the platform owners interfered tipped the
                            scales shifted in favour of money making over
                            everything that made the platform cool.
                            Source:https://www.zoeticamedia.com/the-commoditization-of-social-media-and-what-we-can-learn-from-the-old-days
                        </p>
                        <p>
                            Thanks to this, what we see today is a rat race of
                            chasing followers/subs,cancel culture mobs, and
                            propaganda amongst other things we saw with
                            mainstream media. All of these culminated in the
                            said platform losing that touch of personalization
                            with creators at the mercy of the platform
                            algorithms.
                        </p>
                        <p>
                            In this crowded landscape of social media
                            monopolies, let's explore the rise of Clubhouse and
                            what can be its future?
                        </p>
                        <p>
                            <span
                                className={`${styles.underline} ${styles.block}`}
                            >
                                Product differentiation/ Simplifying connections
                            </span>
                            Clubhouse promised to be a breath of fresh air in
                            this landscape.In the word of their founder Paul
                            davidson
                            <img src="/assets/clubhouse.png" alt="clubhouse" />
                            <span>
                                Source:
                                https://www.financialexpress.com/industry/technology/exclusive-clubhouse-is-not-about-likes-and-follows-but-authentic-connections-co-founder-and-ceo-paul-davison/2264833/
                            </span>
                        </p>

                        <p>
                            Let’s see how it holds up against other social
                            media’s connections. What's the usual way of
                            connecting with people on social media? You DM/ put
                            a message request and wait for a reply and then take
                            the conversation forward, hopefully setting up a
                            call. So let's have a look at statistics for
                            response rates for different channels.
                            <img
                                src="/assets/clubhouse1.png"
                                alt="clubhouse1"
                            />
                            <span>
                                Source
                                https://www.approvedindex.co.uk/direct-marketing/direct-mail-response-rates
                            </span>
                            <p>
                                Numbers match up the statistics for voice.
                                Approx 3 times jump in the response rates when
                                voice is involved even for cold calls. Sure it's
                                harder to get personal cell numbers & no one is
                                going to appreciate spam calls these days. So
                                through their innovation of audio rooms
                                clubhouse is able to find a way to leverage the
                                voice to take connections to a different level.
                            </p>
                        </p>
                        <p>
                            With Clubhouse we get to skip the above hassles &
                            have the option of jumping in a room with our target
                            audience. With the right targeting of rooms one can
                            actually get in a direct talk with the said person.
                            Later on the conversation can be followed up on
                            other social media as a warm outreach. Just like
                            that you can convert cold leads( strangers) into
                            warm leads ( somewhat knowing them).
                        </p>
                        <p>
                            We can draw parallels with Google's search engine
                            interface being much cleaner and having faster
                            loading times than other browsers like Yahoo. Sure
                            there were a bunch of other factors but one must
                            remember that this was the early 2000s with slow
                            wireless internet connections with charges for every
                            GB of data being used.The above factor played a part
                            in retaining the users making them accustomed to the
                            browser.
                        </p>
                        <p className={`${styles.underline}`}>
                            _bandwagon network effects ( Credit to nfx network
                            effects article) and Derek silver video explaining
                            how it works
                        </p>
                        <p>
                            The concept of bandwagon network effects happens
                            when a platform first starts growing. The best
                            example for this would be the 3 min video from Derek
                            Silver about how movements start.
                        </p>
                        <p>
                            One notable difference with their platform was that
                            it was invite only, with users having limited
                            invites(5). This may seem counterintuitive to growth
                            but now the numbers show the opposite.
                        </p>
                        <p>
                            In a world where getting into social media networks
                            was a cakewalk, the invite only feature was able to
                            trigger the psychological need to be a part of the
                            cool crowd. Next as the platform was growing at an
                            early stage, the videos of clubhouse conversations
                            of celebrities went viral on the internet. This urge
                            to not be left out from what's happening combined
                            with the inbuilt feature of conversations having no
                            records triggered strong FOMOs among the crowd to be
                            not left behind similar to the people that start
                            rushing in after the first few have joined and
                            danced.
                        </p>
                        <p>
                            Another great example is the network of Apple
                            users.The value of the network is drawn not only
                            through the products but through their genius
                            branding campaigns. They are somehow able to build
                            the perception of Apple users being the cool crowd
                            and just like the video majority of users( after
                            early adopters) buy in to not be left out of the
                            movement. However if the crowd becomes too large
                            which it seems to be on the way, as clubhouse
                            spreads to new countries, the original adopters
                            would start leaving as the idea becomes too
                            mainstream. The challenge then is to make the
                            utility of the platform( like finding authentic
                            connections as above) outweigh the appeal of leaving
                            the crowd for greener pastures. Which factor would
                            end up winning on the long run would determine how
                            long would users remain on it.
                        </p>
                        <p>
                            <span className={`${styles.underline}`}>
                                Regulations and Uncertain future
                            </span>
                            <p>
                                However not everything is sunshine and roses
                                with this platform. With Clubhouse till now the
                                interference by the platform owners has been
                                minimal with no data storage & room owners in
                                charge of the conversation with regulation left
                                to them. But we need to remember that these are
                                the early days and the focus is on growth. The
                                best thing for growth is to have a laissez faire
                                approach( minimal intervention). But as
                                complaints of harassment, racism, sexism built
                                up the pressure on them, they were forced to
                                bring out some regulations. Their solution for
                                these complaints has been to add a report
                                feature that will record the conversation and
                                create an “internal mechanism” to resolve the
                                same. This is projected as a necessary measure
                                but the reality is that it's a slippery slope to
                                get started on.The app’s already been banned in
                                China and with many countries passing laws for
                                regulation of social media, it's a question of
                                how long would they be able to resist the app
                                from heavy handed regulation. As time passes
                                with the flaws of having a central authority, it
                                seems not a question of if but rather when.
                            </p>
                        </p>

                        <p>
                            <p className={`${styles.underline}`}>Outro</p>

                            <p>
                                So besides looking into integrating audio/video
                                rooms into Hive apps what can be possible
                                lessons from this? HIVE's utility and platform
                                control has never been a problem with the user
                                centric features.and decentralized community
                                regulation The question then is how we can
                                perfect on bandwagon network effects. For the
                                web 3.0, branding HIVE as the new cool crowd can
                                be a catalyst for bringing in the vast majority
                                of users similar to above examples . Let's start
                                a discussion in the comments on how we are doing
                                this and what strategies can we implement for
                                achieving that.
                            </p>
                        </p>

                        <p>
                            <p className={`${styles.underline}`}>
                                General tips for blogging
                            </p>

                            <ul>
                                <li>
                                    use a scanner tool for your written works to
                                    get it on the screen and then edit to avoid
                                    typing out the entire stuff
                                </li>
                                <li>
                                    ( Add in the best tools that work with links
                                    _
                                </li>
                            </ul>
                        </p>

                        <p>
                            <strong>Brainstorm for hacking Hive</strong>
                            <ul>
                                <li>
                                    diversify by exploring steem blockchain for
                                    the same posts
                                </li>
                                <li>
                                    get the post timing right around 4 to 6 am
                                    IST
                                </li>
                            </ul>
                        </p>
                        <p>
                            Not safe methods
                            <ul>
                                <li>
                                    cross post across steem and hive trending
                                    posts through alt accounts ( exit at right
                                    times)
                                </li>
                            </ul>
                        </p>

                        <p>
                            <strong>
                                Hacking Hive through several accounts targeting
                                several niches
                            </strong>
                            <p>
                                Tags by taskmaster
                                <img
                                    src="/assets/clubhouse2.png"
                                    alt="tags by task master"
                                />
                            </p>
                        </p>
                        <p>
                            Niches
                            <ul>
                                <li>investigative journalism</li>
                            </ul>
                        </p>
                        <p>
                            ( Have data on the time taken, efforts, performance,
                            rewards for the categories below) Curation system
                            <ul>
                                <li>
                                    news articles and trending things commentary
                                </li>
                                <li>opinion posts on certain developments</li>
                                <li>new breakthroughs</li>
                                <li>
                                    market analysis and disruptions oncoming
                                </li>
                                <li>
                                    opinions on stocks/ startups business model
                                    analysis especially crypto startups
                                </li>
                                <li>newsletter for happenings</li>
                            </ul>
                        </p>

                        <p>
                            <strong>Future Topics:</strong>
                            <ul>
                                <li>
                                    how to maximise chances of a decentralized
                                    network growing organically ( first mover's
                                    advantage, severity of the problem ,
                                    technological advantage( 10X principle),
                                    empowerment of the first adopters in the
                                    community, democratize rewards even amongst
                                    late comers to keep in the boost)
                                </li>
                            </ul>
                        </p>

                        <p>
                            <strong>
                                Study posts by Daniel larimer( they call me Dan)
                                studied and analysed in regards to hive and his
                                other ventures
                            </strong>

                            <ul>
                                <li>
                                    one reason why he's so big and a whale is
                                    that he's the cofounder of this platform and
                                    other whales trying to influence him to get
                                    on ahead
                                </li>
                                <li>
                                    spread out your content across all platform
                                    and apply growth hacking principles relying
                                    on existing socials/ google SEOs
                                </li>
                            </ul>
                        </p>

                        <p>
                            <strong>
                                Try and get him on a possible podcast episode
                                for changing order of things
                            </strong>
                            <span>
                                The ones who started it where involved with the
                                community for longp
                            </span>
                        </p>

                        <p>
                            <strong>END</strong>
                            <br />
                            <p>
                                Clubhouse promised to be a breath of fresh air
                                in this landscape bringing in audio rooms to
                                help you connect to new people. In the words of
                                their founder Paul Davidson:
                                [Source](https://www.financialexpress.com/industry/technology/exclusive-clubhouse-is-not-about-likes-and-follows-but-authentic-connections-co-founder-and-ceo-paul-davison/2264833/)
                                "We’re trying to create a different type of
                                network that’s not about likes and follows and
                                having your social media manager post for you.
                                You don’t have to pose or try to sound clever.
                                It’s about authentically connecting with other
                                humans."
                            </p>
                            <ul>
                                <li>tagshive-167922</li>
                                <li>technology</li>
                                <li>hive</li>
                                <li>analysis</li>
                                <li>economics</li>
                                <li>ocd</li>
                                <li>posh</li>
                                <li>crypto</li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>
                                        celebrity association to propel the
                                        brand to the next level
                                    </strong>
                                    <p> Beats</p>

                                    <p>Just that is not enough</p>
                                    <span className={`${styles.block}`}>
                                        Quibi
                                    </span>
                                    <p>
                                        Just relying on celebrity appeal is not
                                        enough
                                        <span className={`${styles.block}`}>
                                            Or more importantly the focus has
                                            shifted away
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <strong>capitalize on trends</strong>
                                    <br />
                                    <p>
                                        Mention the prevalence of communities
                                        taken to the cold to find niche
                                        interests and be able to monetize the
                                        rewards for the same
                                    </p>
                                    <p>
                                        Think about increasing accessibility of
                                        the local sports competitions and taking
                                        a turn away from government regulated
                                        entities to reduce corruption and biases
                                        seen in existing systems
                                    </p>

                                    <strong>Miscellaneous</strong>
                                    <p>
                                        <em>
                                            We're hardwired to value things that
                                            we can't get easily or that we pay
                                            for. As social media has been
                                            traditionally free with limited
                                            successes with the paid premium
                                            models( YouTube premium or Quibi) so
                                            clubhouse had to get creative.
                                        </em>
                                    </p>
                                    <p>
                                        Reducing the volatility to be comparable
                                        to Fiat will occur over a period of time
                                    </p>
                                    <p>
                                        Or that might not even be necessary with
                                        fiat currency reaching new levels of
                                        volatility
                                    </p>
                                    <p>
                                        Volatility indices of several
                                        competitors
                                        <ul>
                                            <li>
                                                what will incentivize users to
                                            </li>
                                        </ul>
                                    </p>
                                </li>
                            </ul>
                        </p>
                    </>
                );
            },
        },
    ],
};
