import { writable } from 'svelte/store';

export const movieData = writable({});

export const bannerMovie = writable({});

export const trailer = writable(null);

export const showVideoModal = writable(false);
