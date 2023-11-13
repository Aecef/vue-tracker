<template>
    <div id="tiles"></div>
</template>

<script>

import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'StaggeredGrid',
    data() {
        return {
            w: {
                columns: 400,
                rows: 400
            },
            //list of rgb colors from the rainbow
            colors: [
                'rgb(255, 0, 0)',
                'rgb(255, 127, 0)',
                'rgb(255, 255, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(75, 0, 130)',
                'rgb(148, 0, 211)'
            ],
            count: -1
            
        }
    },
    mounted() {
        const divisor = 40;
        this.w.columns = Math.floor(document.body.clientWidth / divisor);
        this.w.rows = Math.floor(document.body.clientHeight / divisor);
        window.addEventListener('resize', () => {
            this.w.columns = Math.floor(document.body.clientWidth / divisor);
            this.w.rows = Math.floor(document.body.clientHeight / divisor);
        });
        this.createTiles();
    },
    methods: {
        handleOnClick(index){
            this.count++;
            anime({
                targets: '.tile',
                backgroundColor: this.colors[this.count % (this.colors.length - 1)],
                delay: anime.stagger(50, {
                    grid: [this.w.columns, this.w.rows],
                    from: index
                })
            });
        },
        createTile(index) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.addEventListener('click', () => this.handleOnClick(index));
            return tile;
        },
        createTiles() {
            const tiles = document.getElementById('tiles');
            Array.from(Array(this.w.columns * this.w.rows)).map((tile, index) => {
                tiles.appendChild(this.createTile(index));
            })
        }
    }
}

</script>

<style>
    #tiles {
        height: 100vh;
        width: 100vw;

        display: grid;
        grid-template-columns: repeat(v-bind('w.columns'), 1fr);
        grid-template-rows: repeat(v-bind('w.rows'), 1fr);
    }
    
    .tile {
        outline: .1px solid white;
    }
</style>