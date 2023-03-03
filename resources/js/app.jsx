import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {hydrateRoot} from "react-dom";
import colors from "tailwindcss/colors";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = hydrateRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: colors.teal['500'],
        showSpinner: true,
        delay: 0,
    },
});
