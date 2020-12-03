module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ram.codes/`,
    // Your Name
    name: 'Ram Krishna Singh',
    // Main Site Title
    title: `Ram Codes`,
    // Description that goes under your name in main bio
    description: `Preparing for GATE 2021 CSE`,
    // Optional: Twitter account handle
    author: `@codeitram`,
    // Optional: Github account URL
    github: `https://github.com/codeitram`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/codeitram/`,
    // Content of the About Me section
    about: `Currenlty occupied by GATE after that I would learn Full Stack Devlopment and I will also do Competitive Programming to learn all those fancy Algorithms. I personally believe AI is the new Electricity and I would enroll for AI course during my Masters`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'abc',
        description:
          'This is demo, will be updated soon',
        link: 'https://ram.codes',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'xyz',
        description: 'This is demo, will be updated soon',
        link: 'https://ram.codes',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'lorem',
        description:
          'This is demo, will be updated soon',
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
