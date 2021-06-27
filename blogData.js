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
            link: `where-can-social-media-go-from-here`,
            title: "Where can social media go from here",
            summary: `As mass media began to develop information could be 
            easily spread and by extension ideas. Ideas by their 
            very nature, good or bad, are disruptive to the existing order. 
            So governing entities have chosen to regulate the flow of the same 
            to keep their power intact. This was implemented either through carefully disguised regulations or outright censorship for all of mass media.`,
        },
        {
            sn: 2,
            img: "/assets/clubhouse0.jpg",
            link: "clubhouse-the-rise-and-fall",
            title: "Clubhouse: The rise and fall?",
            summary: `
            Early adopters found a digital playground with the ability of making new
             connections and creators able to create nw forms of content. Users were mostly left to themselves with platform owners becoming pop culture icons. But as these networks grow more and more big, they're observed to get worse. Why is that so?
            `,
        },
        {
            sn: 3,
            img: "/assets/whats-next-for-cryptocurrencies.jpg",
            link: "so-whats-next-for-cryptocurrencies",
            title: "So what's next for Cryptocurrencies?",
            summary: `
            So in the wake of the recent price crash, there's been a lot of hype going on about the end of Bitcoin and the emergence of better alternatives to the older cryptocurrencies. High volatility, high mining costs, energy requirements, the list goes on and on. To replace Bitcoin these cryptos would have to contend with the following factors:
            `,
        },
        {
            sn: 4,
            img: "/assets/copyright.webp",
            link: "breaking-through-the-copyright-quagmire",
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
        },
    ],
};
