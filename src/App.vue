<script setup>
import { Deck } from '@deck.gl/core'
import { ScatterplotLayer } from '@deck.gl/layers'

const INITIAL_VIEW_STATE = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 15,
}

const deckInstance = new Deck({
    initialViewState: INITIAL_VIEW_STATE,
    controller: true,
    layers: [
        new ScatterplotLayer({
            data: [{ position: [-122.45, 37.8], color: [255, 0, 0], radius: 100 }],
            getPosition: (d) => d.position,
            getFillColor: (d) => d.color,
            getRadius: (d) => d.radius,
        }),
    ],
})
</script>

<template>
    <div></div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
