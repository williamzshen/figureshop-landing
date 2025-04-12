import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import FigureShopLogo from '/components/figure_shop.png'
import TerminalSidebar from './components/TerminalSidebar'

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center" style={{ padding: 0, margin: 0, marginLeft: '20px' }}>
      <Image 
        src={FigureShopLogo} 
        alt="FigureShop Logo" 
        width={200} 
        height={120}
        style={{ paddingLeft: 0 }}
      />
    </div>
  ),
  project: {
    link: 'https://example.com'
  },
  chat: {
    link: 'https://example.com'
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  sidebar: {
    toggleButton: true
  },
  toc: {
    component: null
  },
  primaryHue: {
    dark: 0,
    light: 0
  },
  primarySaturation: {
    dark: 0,
    light: 0
  },
  head: (
    <>
      <style jsx global>{`
        .nextra-nav-container + div > div:first-child {
          background-color: #F4F6F9 !important;
        }
        .dark .nextra-nav-container + div > div:first-child {
          background-color: #F4F6F9 !important;
        }
        /* Change sidebar text and highlight colors */
        .nextra-sidebar-container a,
        .nextra-sidebar-container li,
        .nextra-menu-desktop a,
        .nextra-sidebar a,
        .nx-text-gray-500,
        .nx-text-gray-600,
        .nx-text-gray-700 {
          color: #282828 !important;
        }
        
        .nx-text-primary-600, 
        .dark .nx-text-primary-600,
        a.nx-text-primary-600,
        li.nx-text-primary-600,
        .nextra-sidebar-container a.nx-text-primary-600,
        .nextra-sidebar-container li.nx-text-primary-600,
        .nx-text-primary,
        [data-selected] .nx-text,
        .nextra-sidebar [aria-selected=true],
        .nextra-menu-desktop [data-active],
        .nextra-sidebar-container [aria-current],
        .nextra-sidebar-container [data-active=true] {
          color: #282828 !important;
          font-weight: 600;
        }
        
        .nx-bg-primary-100,
        .dark .nx-bg-primary-100,
        .nx-bg-primary-50,
        .nextra-sidebar-container [aria-selected=true],
        .nextra-sidebar-container [data-selected=true],
        .nextra-menu-desktop li[aria-selected=true],
        .nextra-sidebar [data-active=true],
        .nextra-menu-desktop [data-active=true] {
          background-color: #E8EBEF !important;
        }
        
        .nx-border-primary-500,
        .dark .nx-border-primary-500,
        .nx-border-primary,
        .nextra-sidebar-container [aria-selected=true],
        .nextra-sidebar-container [data-selected=true],
        .nextra-menu-desktop [data-active=true],
        .nextra-sidebar [data-active=true] {
          border-color: #E8EBEF !important;
        }
        
        /* Additional selectors for buttons, links, etc. */
        .nx-text-primary-500,
        .nx-text-primary-700,
        .nextra-sidebar a:hover,
        .nextra-sidebar-container a:hover,
        a:hover.nx-text-gray-500,
        a:hover.nx-text-gray-600 {
          color: #282828 !important;
        }
      `}</style>
    </>
  ),
}

export default config
