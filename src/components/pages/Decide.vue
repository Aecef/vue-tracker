<script>
import foodOptions from '@util/FoodOptions';
import anime from 'animejs';

export default {
    name: 'Decide',
    data() {
        return {
            foodOptions: foodOptions,
        }
    },
    methods: {
        chooseMeal() {
            // Choose a random meal from the foodOptions
            const randomIndex = Math.floor(Math.random() * this.foodOptions.length);
            const meal = this.foodOptions[randomIndex];
            let elements = document.getElementsByClassName("row");
            let mealElement = 0;
            // Get element with the meal name as the key
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].innerText == meal) {
                    mealElement = elements[i];
                    break;
                }
            }
            // get the column
            let column = mealElement.parentElement;
            // Bring the meal element to the top of the column
            column.insertBefore(mealElement, column.firstChild);
            // Animate the meal element by changing the background color and the text color
            anime({
                targets: mealElement,
                backgroundColor: '#b6b6b6',
                color: '#ffffff',
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        }
    }
}
</script>


<template>
    <div class="text-center">
        <h1>Decide</h1>
        <button class="btn btn-outline-primary " @click="chooseMeal">Choose Meal</button>
            <!-- Print all foodOptions -->
        <div class="row" v-for="foodOption in foodOptions" :key="foodOption">
                <h2 class="row">{{foodOption}}</h2>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: list-item;
}
.row:hover {
    background-color: #b6b6b6;
}
</style>