import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Epicentral Labs",
  description: "Solana Options Standard",
  head: [['link', { rel: 'icon', href: '/Epicentral-Labs-Logo-Round.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/Epicentral-Labs-Logo-Round.png',
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Epicentral Labs'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Options Standard SDK',
        items: [
          { text: 'Option Programs', link: '/introduction/the-option-standard/#option-programs' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Solana Options Standard',
        items: [
          { text: 'Options on Solana', link: '/introduction/options-on-solana' },
          {
            text: 'The Option Standard SDK',
            link: '/introduction/the-option-standard',
            collapsed: false,
            items: [
              {
                text: 'Option Programs',
                link: '/introduction/the-option-standard/#option-programs',
                collapsed: true,
                items: [
                  { text: 'option_create', link: '/introduction/the-option-standard/#option_create' },
                  { text: 'option_exercise', link: '/introduction/the-option-standard/#option_exercise' },
                  { text: 'option_assign', link: '/introduction/the-option-standard/#option_assign' },
                  { text: 'option_execute', link: '/introduction/the-option-standard/#option_execute' }
                ]
              },
              { text: 'Calculation Modules', 
                link: '/introduction/the-option-standard/#calculation-modules',
                collapsed: true,
                items: [
                  { text: 'Option Greeks', 
                    link: '/introduction/the-option-standard/#option-greeks',
                    collapsed: true,
                    items: [
                      { text: 'calc_delta', link: '/introduction/the-option-standard/#calc_delta' },
                      { text: 'calc_gamma', link: '/introduction/the-option-standard/#calc_gamma' },
                      { text: 'calc_theta', link: '/introduction/the-option-standard/#calc_theta' },
                      { text: 'calc_vega', link: '/introduction/the-option-standard/#calc_vega' },
                      { text: 'calc_rho', link: '/introduction/the-option-standard/#calc_rho' }
                    ]
                  },
                  { text: 'Implied Volatility (IV)', link: '/introduction/the-option-standard/#implied-volatility-iv',
                    collapsed: true,
                    items: [
                      { text: 'impl_vol', link: '/introduction/the-option-standard/#impl_vol' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Options: Basics',
        collapsed: true,
        items: [
          { text: 'Options: Basics - Introduction', link: '/options-basics/intro'},
          { text: 'Options: Basics - Calls & Puts', link: '/options-basics/calls-and-puts'},
          { text: 'Options: Basics - Greeks', link: '/options-basics/the-greeks'}
        ]
      },
      //{
      //text: 'For Developers',
      //collapsed: true,
      //items: [
        //{ text: 'Getting Started', link: '/getting-started/setup' },
        //{ text: 'Create an Option', link: '/getting-started/create-an-option' },
        //{ text: 'Calculating Volatility', link: '/getting-started/calculating-volatility' },
        //]
      //}
      {
        text: 'Epicentral Labs',
        collapsed: true,
        items: [
          { text: 'About', link: '/epicentral-labs/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/EpicentralLabs' },
      { icon: 'discord', link: 'https://discord.gg/5asAuY2sR8' },
      { icon: 'github', link: 'https://github.com/EpicentralLabs' }
    ]
  }
})
