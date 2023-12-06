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
            //check if element already exists
            let mealElement = document.getElementById('mealChoice');
            if (mealElement != null) {
                // Remove the element from the document
                mealElement.remove();
            }

            // Choose a random meal from the foodOptions
            const randomIndex = Math.floor(Math.random() * this.foodOptions.length);
            const meal = this.foodOptions[randomIndex];

            // Find element by id
            foodColumn = document.getElementById('foodColumn');

            // Create the meal element
            mealElement = document.createElement('h2');
            mealElement.id = 'mealChoice';
            mealElement.innerHTML = meal;
            mealElement.style.display='block';
            mealElement.classList.add('col-4');
            mealElement.classList.add('align-self-center');
            
            foodColumn.appendChild(mealElement);

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
        <div class="container mt-4">
            <div class="row justify-content-center" id="foodColumn"></div>
        </div>
    </div>
</template>

<style scoped>
.col {
    display: block;
}
.col:hover {
    background-color: #b6b6b6;
}
</style>