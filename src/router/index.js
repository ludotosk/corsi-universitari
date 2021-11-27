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
    {
        path: '/contattami',
        components: {
            default: () =>
                import ( /* webpackChunkName: "feedback" */ '../views/contattami.vue'),
            header: Navbar,
            footer: Footer
        }
    },
    {
        path: '/cookie-policy',
        components: {
            default: () =>
                import ( /* webpackChunkName: "cookiepolicy" */ '../views/cookie-policy.vue'),
            header: Navbar,
            footer: Footer
        }
    },
    // {
    //     path: '/tabella',
    //     components: {
    //         default: () =>
    //             import ( /* webpackChunkName: "tabella" */ '../views/tabella.vue'),
    //     }
    // },
    {
        path: '/lauree-triennali-elenco',
        components: {
            default: () =>
                import ( /* webpackChunkName: "ListaTriennale" */ '../views/lista-corsi-di-laurea-triennali.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/lista-corsi-di-laurea-magistrale',
        components: {
            default: () =>
                import ( /* webpackChunkName: "ListaMagistrale" */ '../views/lista-corsi-di-laurea-magistrali.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-magistrale-a-ciclo-unico',
        components: {
            default: () =>
                import ( /* webpackChunkName: "CorsiCiclo" */ '../views/corsi-di-laurea-magistrali-a-ciclo-unico.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
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
    {
        path: '/corsi-di-laurea-padova',
        components: {
            default: () =>
                import ( /* webpackChunkName: "padova" */ '../views/corsi-di-laurea-padova.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-bologna',
        components: {
            default: () =>
                import ( /* webpackChunkName: "bologna" */ '../views/corsi-di-laurea-bologna.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-firenze',
        components: {
            default: () =>
                import ( /* webpackChunkName: "firenze" */ '../views/corsi-di-laurea-firenze.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-milano',
        components: {
            default: () =>
                import ( /* webpackChunkName: "Milano" */ '../views/corsi-di-laurea-milano.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-online',
        components: {
            default: () =>
                import ( /* webpackChunkName: "corsi online" */ '../views/corsi-di-laurea-online.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-internazionali',
        components: {
            default: () =>
                import ( /* webpackChunkName: "corsi inrernazionali" */ '../views/corsi-di-laurea-internazionali.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/comunita',
        components: {
            default: () =>
                import ( /* webpackChunk: "comunita" */ '../views/comunita.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router