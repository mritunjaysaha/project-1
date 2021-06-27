/**
 *
 * data: [
 * {
 *      sn: integer value
 *      img: "source of image file",
 *      id: "Same as title but should not have symbols like %, /, &, etc"
 *      title: "title-of-the-blog"["name of the blog and should be written as in-this-way with hyphens(-)"],
 *      summary: "summary/starting of the the blog which will be shown in the cards",
 *      fullDescription: function(){
 *          return <>{Enter HTML}</>
 *      }
 * }
 * ]
 */

export const blogData = {
    data: [
        {
            sn: 1,
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
            sn: 2,
            img: "/assets/clubhouse0.jpg",
            id: "Clubhouse: The rise and fall",
            title: "Clubhouse: The rise and fall?",
            summary: `
            Early adopters found a digital playground with the ability of making new
             connections and creators able to create nw forms of content. Users were mostly left to themselves with platform owners becoming pop culture icons. But as these networks grow more and more big, they're observed to get worse. Why is that so?
            `,
        },

        {
            sn: 3,
            img: "/assets/whats-next-for-cryptocurrencies.jpg",
            id: "So what's next for Cryptocurrencies",
            title: "So what's next for Cryptocurrencies?",
            summary: `
            So in the wake of the recent price crash, there's been a lot of hype going on about the end of Bitcoin and the emergence of better alternatives to the older cryptocurrencies. High volatility, high mining costs, energy requirements, the list goes on and on. To replace Bitcoin these cryptos would have to contend with the following factors:
            `,
            fullDescription: function () {
                return (
                    <>
                        <p>
                            So in the wake of the recent price crash, there's
                            been a lot of hype going on about the end of Bitcoin
                            and the emergence of better alternatives to the
                            older cryptocurrencies. High volatility, high mining
                            costs, energy requirements, the list goes on and on.
                            To replace Bitcoin these cryptos would have to
                            contend with the following factors:
                        </p>
                        <h5>Network effects</h5>;
                        <p>
                            <img
                                src="https://images.hive.blog/DQmT5fbXfhEm6zTnFpsfg33YzQt2VDr4r55T1BokBaL3rCD/iStock-1180543383.jpg"
                                alt="iStock1180543383.jpg"
                            />
                            <br />
                            <a
                                href="https://thefintechtimes.com/wp-content/uploads/2020/10/iStock-1180543383.jpg"
                                target="_blank"
                                rel="nofollow noopener"
                                title="This link will take you away from the app"
                            >
                                Source
                            </a>
                            <br />
                            It is important to note that Bitcoin is not just a
                            currency but also a decentralized peer to peer
                            transaction network with regulations built into the
                            code. For Bitcoin to be used effectively we need
                            both the end users to accept it for the transaction.
                            Therefore the usability increases with more users
                            getting the same. We can draw parallels with early
                            telephone systems being more useful with increased
                            customers. It is referred to as the direct network
                            effect. The true value of a network increases
                            exponentially as a factor of( 2^n) where n
                            represents the number of users. This is known as the
                            Reed's law for networks.{" "}
                            <a
                                href="https://www.nfx.com/post/network-effects-manual/"
                                target="_blank"
                                rel="nofollow noopener"
                                title="This link will take you away from the app"
                            >
                                More here.
                            </a>
                        </p>
                        <p>
                            The network takes preference over the said product.
                            This allows for the product to stick around even
                            though they kinda suck. Most public utilities fall
                            in this category. The entry barrier lies in the
                            building of this network over everything. That's why
                            monopolies build around these things for real world
                            equivalents
                        </p>
                        <p>
                            It's difficult to grow such a network even much so
                            in a decentralized manner, that's why even today
                            with so many alternatives the market cap of Bitcoin
                            is still around 40% of the market.
                        </p>
                        <p>
                            Speaking of networks, El Salvador's legislature has
                            approved of the bill legalizing Bitcoin as legal
                            tender. It represents a growing trend of acceptance
                            that no other cryptocurrency has achieved and the
                            legal acceptance would incentivize non enthusiasts
                            &amp; businesses to start transacting in that. This
                            would end up compounding the network effects
                            mentioned earlier.
                        </p>
                        <h5>Inadequate decentralization</h5>
                        <p>
                            Speaking of these alternatives, let's have a look at
                            alternatives being pitched for being the next big
                            thing. First are CBDCs pitched by the central banks.
                            For anyone with a basic understanding of
                            inflationary policies used one can safely assume
                            this is no better than fiat. And the switch from
                            fiat to these(or by extension fiat backed cryptos)
                            would be symbolic as the said crypto would be
                            subject to secret devaluations.
                        </p>
                        <p>
                            Speaking of these alternatives, let's have a look at
                            alternatives being pitched for being the next big
                            thing. First are CBDCs pitched by the central banks.
                            For anyone with a basic understanding of
                            inflationary policies used one can safely assume
                            this is no better than fiat. And the switch from
                            fiat to these(or by extension fiat backed cryptos)
                            would be symbolic as the said crypto would be
                            subject to secret devaluations.
                        </p>
                        <p>
                            Bitcoin as a currency was meant to solve the problem
                            of removing the third party entity in transactions.
                            The rules were built into the code and the code only
                            alterable through the community. Only some minor
                            changes have been possible without the majority of
                            the code being not so different from its inception.
                            Above all most of these altcoins have third party
                            centralized entities for many of the purposes(
                            either for growth/ vaults) thus defeating the very
                            purpose of decentralization/ removal of third
                            parties.
                        </p>
                        <h4>Other factors</h4>
                        <p>
                            Whilst the code is pretty much untouchable in terms
                            of hard changes/ forks for a good reason there are
                            significant ways in which the infrastructure is
                            being improved on. One concern that has always been
                            with Bitcoin is the volatility. However, volatility
                            has reduced quite a lot( currently approx 10%)
                            compared to its early days if we ignore the phases
                            of bubble formation and crashes of a few months.
                            It's expected that volatility would be at levels of
                            stable fiats in a decade. Its here where we
                        </p>
                        <p>
                            Another method we could see the adoption increase is
                            in times of currency devaluations( hyperinflations)
                            which would incentivize customers to make the switch
                            to offset their losses. This is seen in regions of
                            Africa and Brazil. Also for the rest of the world
                            economic growth has been on shaky grounds and
                            unhealthy fiscal policies, so we could be seeing
                            more of such hyperinflation incidents in this
                            decade.
                        </p>
                        <p>
                            Plus there's proposals to start mining using
                            renewables reducing the carbon footprint and making.
                            These will help in making the mining process more
                            sustainable and bring in even bigger audiences
                            <br />
                            <img
                                src="https://images.hive.blog/DQmUjx8ieNeBvaqmu6c9pJ24EGKHVzzyG6d9RbGJsB9aYjd/mining.jpg"
                                alt="mining.jpg"
                            />
                            <br />
                            <a
                                href="https://images-media.currency.com/37be3df9/0529/5c6d/83c6/9536c5656710/on_page/mining.jpg"
                                target="_blank"
                                rel="nofollow noopener"
                                title="This link will take you away from the app"
                            >
                                Source
                            </a>
                        </p>
                        <h4>Conclusion</h4>
                        <p>
                            In conclusion, any new alternatives planning to
                            replace Bitcoin will have an uphill battle against
                            the above factors amongst many others. Therefore for
                            the foreseeable future Bitcoin seems to be on the
                            path of being the primary cryptocurrency though an
                            argument can be made for the cryptos playing a
                            smaller, supporting role to it. Or maybe new
                            technological developments would end up changing the
                            same. What do you think on this?
                        </p>
                    </>
                );
            },
        },

        {
            sn: 4,
            img: "/assets/copyright.webp",
            id: "Breaking through the copyright quagmire",
            title: "Breaking through the copyright quagmire",
            summary: `
            Copyright arrangements are kind of a legal monopoly
             for use of creative content. This is meant to
              incentivize artists with fair uses cases only allowed
               for non profit work. There has been an argument for 
               these particularly with the creators, that its a 
               protectionist measure to incentivize artists to keep 
               making great content & that if these measures are 
               removed would lead to even more exploitation in a 
               field dominated by corporate distributors. Let's 
               look at their origins.
            `,
            fullDescription: function () {
                return (
                    <>
                        <p>
                            <img
                                src="https://images.hive.blog/p/X37EMQ9WSwsTDm32NhuAqNmt7Z69P2JA1DS6CNEco6j1ndi5MSg2Vi3bVKZdqxR8jQKXvQfraeoreihtDkbAM8E3g6vygk54LJF6N?format=match&amp;mode=fit&amp;width=640"
                                alt="Source"
                            />
                            <br />
                            <a
                                href="https://www.virtru.com/wp-content/uploads/2017/06/Copyright-Protection.png"
                                target="_blank"
                                rel="nofollow noopener"
                                title="This link will take you away from the app"
                            >
                                Source
                            </a>
                        </p>
                        <p>
                            Copyright arrangements are kind of a legal monopoly
                            for use of creative content. This is meant to
                            incentivize artists with fair uses cases only
                            allowed for non profit work. There has been an
                            argument for these particularly with the creators,
                            that its a protectionist measure to incentivize
                            artists to keep making great content &amp; that if
                            these measures are removed would lead to even more
                            exploitation in a field dominated by corporate
                            distributors. Let's look at their origins.
                        </p>
                        <h1>Overview of copyright laws</h1>
                        <p>
                            <a
                                href="https://www.newmediarights.org/business_models/artist/what_are_major_criticisms_copyright_laws_us"
                                target="_blank"
                                rel="nofollow noopener"
                                title="This link will take you away from the app"
                            >
                                Source
                            </a>
                        </p>
                        <p>
                            _One thing to be noted is that these laws came
                            through lobbying of entertainment conglomerates
                            notably Disney in the US to have copyrights last
                            forever for it's characters like Mickey Mouse. Some
                            of which are estimated to be worth hundreds of
                            millions today. This shows how the laws are designed
                            not with creators but rather the distributors in
                            mind
                        </p>
                        <p>
                            _The laws are so overly broad that they actually
                            stifle an individual’s creativity. Let's see how
                            it's so. With the emergence of YouTube new forms of
                            content like video essays, analysis and commentary
                            based on remixes or based on other original works.
                            And the terms of fair use are not very clear about
                            the same thereby keeping this sector in limbo
                        </p>
                        <p>
                            _These laws are hard to enforce in the digital
                            world. This is seen in the rampant nature of piracy.
                            Even outright bans/ website takedowns mean little as
                            emerging clones/ VPN amongst other methods render
                            the regulations ineffective
                        </p>
                        <p>
                            _And lastly these laws are so complicated and
                            unclear that they can be easily abused by companies
                            with access to lawyers. It’s too complicated and
                            expensive for individual artists/ creators to
                            actually enforce the rights that the law gives them.
                        </p>
                        <p>
                            The above scenario heavily favours the massive
                            entertainment conglomerate and with the backing of
                            massive money leaving the creators/ production
                            studios which are relatively small with few choices
                            if any.Let's see how this affects us as customers
                            with a particular focus on video streaming services
                        </p>
                        <p>
                            Using this massive advantage they vouch for
                            exclusivity arrangements on their streaming
                            services. The end result is a fragmented market with
                            consumers having to end up paying for multiple
                            streaming services. And with every new service
                            coming up with splitting libraries every other day
                            piracy has become the norm rather than the
                            exception.
                        </p>
                        <h1>Disruption through tokenization</h1>
                        <p>
                            Source:{" "}
                            <img src="https://images.hive.blog/p/6VvuHGsoU2QD2Vc5vHaDrfhKyhRktkosJRKbPCXe6L1KayGPFarpTP3FdhvJoKr7asP9GbDDCje4QSxrooK4xvbHAjRyDYCSMKHWDbrqouKJjePSMBkJj7FMkE9FGS?format=match&amp;mode=fit&amp;width=640" />
                        </p>
                        <p>
                            So let's explore how decentralization can help us
                            break through yet another monopoly practice. The
                            best way to go about this would be tokenization of
                            the creative work using a decentralized blockchain
                            similar to how NFTs were made for artwork/
                            collectibles to establish ownership of the same.
                        </p>
                        <p>
                            Many parallels can be drawn with NFTs as in with
                            passing of ownership would ensure that the
                            artist/creators gets a cut of the deal everything
                            that happens. This has the potential for creators
                            making flexible arrangements/ smart contracts with
                            distributors. This has the potential for equalising
                            terms for both parties. This has potential for
                            democratization of this sector and allowing for
                            smaller players to emerge that work together with
                            creators rather than trying to rip them off. Similar
                            arrangements can be made for reworked/ remixed
                            content appropriate rules can be established for
                            usage and have the rewards shared with the original
                            source just like with NFT transfers transactions
                            benefiting the original artist
                        </p>
                        <p>
                            Further copyright is based in legal systems of the
                            countries and often the large diversity and
                            complexity of laws means that the efforts for
                            expanding in newer regions is often not worth the
                            benefits (Reason why streaming services have
                            different catalogs across regions, or have
                            categories blocked across certain regions)
                            <br />
                            Tokenization can help us bypass this &amp; make the
                            creative content available all over the world and
                            expand the market multi-fold for creators making
                            their reach and support truly global. and lastly,
                            implementing anti-piracy measures would be way
                            easier. The blockchain system can be both used to
                            check for content ownership and help in
                            identification of the creator. Whilst this can't
                            completely eradicate piracy at least it can serve as
                            a better alternative to what we have for
                            verification
                        </p>
                        <p>
                            In the next article we would be exploring how
                            decentralization can help us build &amp; grow a
                            better alternative for the video distribution
                            platform
                        </p>
                    </>
                );
            },
        },
    ],
};
