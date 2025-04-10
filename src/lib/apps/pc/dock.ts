import { PUBLIC_USERNAME } from "$env/static/public";
import { type App } from "../types";

const pcDock: App[] = [
    {
        name: 'Finder',
        type: 'Finder',
        src: 'icons/finder_csztph.png',
    },
    {
        name: 'Launchpad',
        type: 'Launchpad',
        src: 'icons/launchpad_agpmx0.png',
        desactivated: true,
    },
    {
        name: 'Notes',
        type: 'Notes',
        src: 'icons/notes_emgzfo.png',
    },
    {
        name: 'Mail',
        type: 'Mail',
        src: 'icons/mail_ipsbfs.png',
    },
    {
        name: 'Contacts',
        type: 'Contacts',
        src: 'icons/contact_brown_zm2zyx',
    },
    {
        name: 'Safari',
        type: 'Safari',
        src: 'icons/safari_ttlkov.png',
    },
    {
        name: 'Music',
        type: 'Music',
        src: 'icons/music_s8ah6d.png',
    },
    { 
        name: 'Téléchargements',
        type: 'Finder',
        src: 'icons/folder_downloads_fjswrg.png',
        props: {
            finderPath: ['Macintosh HD', 'Utilisateur', PUBLIC_USERNAME, 'Téléchargements'],
        },
        shortcut: true,
    },
    {
        name: 'Poubelle',
        type: 'Finder',
        src: 'icons/trash_empty_atuxjv.png',
        props: {
            finderPath: ['Poubelle'],
        },
        shortcut: true,
    },
]

export default pcDock;
