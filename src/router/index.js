import { createRouter, createWebHistory } from 'vue-router'

const Navbar = () =>
    import ( /* webpackChunkName: "Navbar" */ '../components/Navbar.vue')
const Footer = () =>
    import ( /* webpackChunkName: "Footer" */ '../components/Footer.vue')
const Panel = () =>
    import ( /* webpackChunkName: "panel" */ '../components/Panellink.vue')

const routes = [{
        path: '/',
        components: {
            default: () =>
                import ( /* webpackChunkName: "tutti i corsi" */ '../views/corsi-di-laurea.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    // {
    //     path: '/',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "home" */ '../views/principali/home.vue'),
    //         header: Navbar,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/contattami',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "feedback" */ '../views/secondarie/contattami.vue'),
    //         header: Navbar,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/cookie-policy',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "cookiepolicy" */ '../views/secondarie/cookie-policy.vue'),
    //         header: Navbar,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/tabella',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "tabella" */ '../views/principali/tabella.vue'),
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-bicocca',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiBicocca" */ '../views/uni/corsi-di-laurea-bicocca.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-bicocca',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiBicocca" */ '../views/uni/corsi-di-laurea-bicocca.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-polimi',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiPolimi" */ '../views/uni/corsi-di-laurea-polimi.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-uniba',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiUniba" */ '../views/uni/corsi-di-laurea-uniba.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-unisa',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiUnisa" */ '../views/uni/corsi-di-laurea-unisa.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lauree-triennali-elenco',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "ListaTriennale" */ '../views/principali/lista-corsi-di-laurea-triennali.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lista-corsi-di-laurea-triennale-ad-accesso-libero',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "ListaAccesso" */ '../views/principali/lista-corsi-di-laurea-triennali-ad-accesso-libero.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lista-corsi-di-laurea-magistrale',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "ListaMagistrale" */ '../views/principali/lista-corsi-di-laurea-magistrali.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-magistrale-a-ciclo-unico',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "CorsiCiclo" */ '../views/principali/corsi-di-laurea-magistrali-a-ciclo-unico.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-scienze-della-formazione-primaria',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiformazioneprimaria" */ '../views/area/corsi-di-laurea-scienze-della-formazione-primaria.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-biologia',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsibiologia" */ '../views/area/corsi-di-laurea-biologia.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-filosofia',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsifilosofia" */ '../views/area/corsi-di-laurea-filosofia.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-informatica',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsiinformatica" */ '../views/area/corsi-di-laurea-informatica.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-logopedia',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsilogopedia" */ '../views/area/corsi-di-laurea-logopedia.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    {
        path: '/corsi-di-laurea-in-inglese',
        components: {
            default: () =>
                import ( /* webpackChunkName: "inglese" */ '../views/corsi-di-laurea-in-inglese.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    // {
    //     path: '/corsi-di-laurea-padova',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "padova" */ '../views/citta/corsi-di-laurea-padova.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-bologna',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "bologna" */ '../views/citta/corsi-di-laurea-bologna.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-firenze',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "firenze" */ '../views/citta/corsi-di-laurea-firenze.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-milano',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "Milano" */ '../views/citta/corsi-di-laurea-milano.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-venezia',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "venezia" */ '../views/citta/corsi-di-laurea-venezia.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-ecampus',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "ecampus" */ '../views/uni/corsi-di-laurea-ecampus.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lista-master-primo-livello',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "lista master primo" */ '../views/principali/lista-master-di-primo-livello.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lista-master-secondo-livello',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "lista master secondo" */ '../views/principali/lista-master-di-secondo-livello.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lista-perfezionamento-alta-formazione',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "lista perfezionamento alta formazione" */ '../views/principali/lista-perfezionamento-alta-formazione.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/lista-corsi-di-laurea-senza-test',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "lista corsi senza test" */ '../views/principali/lista-corsi-di-laurea-senza-test.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-online',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsi online" */ '../views/principali/corsi-di-laurea-online.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/corsi-di-laurea-internazionali',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "corsi inrernazionali" */ '../views/principali/corsi-di-laurea-internazionali.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // },
    // {
    //     path: '/comunita',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunk: "comunita" */ '../views/secondarie/comunita.vue'),
    //         header: Navbar,
    //         panel: Panel,
    //         footer: Footer
    //     }
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router