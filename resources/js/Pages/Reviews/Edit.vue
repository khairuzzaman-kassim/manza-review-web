<template>
    <div class="flex justify-center">
        <form
            class="
                p-14
                flex flex-col
                justify-center
                w-full
                md:w-1/2
                justify-self-center
            "
            @submit.prevent="form.put(route('reviews.update', review.id))"
        >
            <p class="text-center mb-2 text-3xl">Edit an existing review</p>

            <InputLabel for="title" value="Title" class="mt-4" />
            <TextInput
                id="title"
                v-model="form.title"
                type="text"
                :autofocus="true"
            />
            <small v-if="errors.title" class="text-red-700">{{
                errors.title
            }}</small>

            <InputLabel for="author" value="Author" class="mt-4" />
            <TextInput id="author" v-model="form.author" type="text" readonly/>
            <small v-if="errors.author" class="text-red-700">{{
                errors.author
            }}</small>

            <InputLabel for="rating" value="Rating" class="mt-4" />
            <TextInput id="rating" v-model="form.rating" type="text" />
            <small v-if="errors.rating" class="text-red-700">{{
                errors.rating
            }}</small>

            <InputLabel for="category" value="Category" class="mt-4" />
            <TextInput id="category" v-model="form.category" type="text" />
            <small v-if="errors.category" class="text-red-700">{{
                errors.category
            }}</small>

            <InputLabel for="description" value="Description" class="mt-4" />
            <textarea
                id="description"
                v-model="form.description"
                type="text"
                class="description-input shadow-sm border-gray-300"
            />
            <small v-if="errors.description" class="text-red-700">{{
                errors.description
            }}</small>

            <div>
                <button
                    type="submit"
                    class="
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-center text-white
                        bg-blue-700
                        rounded-lg
                        hover:bg-blue-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-blue-300
                        mt-5
                    "
                >
                    Update
                </button>
                <Link
                    :href="route('reviews.index')"
                    class="
                        ml-3
                        text-xs text-blue-700
                        border border-blue-700
                        hover:bg-blue-800
                        hover:text-white
                        focus:ring-4
                        focus:outline-none
                        focus:ring-blue-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-3
                        py-2
                        text-center
                        mr-2
                        mb-2
                    "
                >
                    Cancel</Link
                >
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";

defineProps({
    errors: Object,
});

const review = ref(usePage().props.review).value;
const form = useForm({
    title: review.title,
    author: review.author.name,
    author_id: review.author_id.toString(),
    rating: review.rating.toString(),
    category: review.category,
    description: review.description,
});
</script>