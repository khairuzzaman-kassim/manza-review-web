<template>
    <Head title="Reviews" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex">
                <h2 class="flex-1 font-semibold text-xl text-gray-800 leading-tight">Reviews</h2>
                <div class="flex-1 flex justify-end px-10">
                    <Link
                        :href="route('reviews.create')"
                        class="
                            px-5
                            py-2
                            text-xs
                            font-medium
                            text-center text-white
                            bg-green-600
                            rounded-lg
                            hover:bg-green-700
                            focus:ring-4
                            focus:outline-none
                            focus:ring-green-300
                        "
                        >New Review</Link
                    >
                </div>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-4">
                        
                        <table class="border w-full text-sm text-left text-gray-500 mt-5">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Title</th>
                                    <th scope="col" class="px-6 py-3">Author</th>
                                    <th scope="col" class="px-6 py-3">Category</th>
                                    <th scope="col" class="px-6 py-3">Rating</th>
                                    <th scope="col" class="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="review in $page.props.reviews" :key="review.id">
                                    <td class="px-6 py-4">
                                        <a
                                            @click.prevent="onClickReview(review)"
                                            class="
                                                cursor-pointer
                                                hover:text-blue-600
                                                hover:underline
                                            "
                                            title="Show description"
                                            >{{ review.title }}
                                        </a>
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ review.author.name }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ setStringFirstLetterToUpperCase(review.category) }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ review.rating }}
                                    </td>
                                    <td class="px-6 py-4 flex space-x-1">
                                        <Link
                                            :href="route('reviews.edit', review.id)"
                                            class="
                                                flex-1
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
                                                dark:bg-blue-600
                                                dark:hover:bg-blue-700
                                                dark:focus:ring-blue-800
                                            "
                                        >
                                            Edit</Link
                                        >
                                        <button
                                            @click.prevent="onClickDelete(review)"
                                            as="button"
                                            class="
                                                flex-1
                                                py-2
                                                text-xs
                                                font-medium
                                                text-center text-white
                                                bg-red-700
                                                rounded-lg
                                                hover:bg-red-800
                                                focus:ring-4
                                                focus:outline-none
                                                focus:ring-red-300
                                                dark:bg-red-600
                                                dark:hover:bg-red-700
                                                dark:focus:ring-red-800
                                            "
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="mt-3 text-xs text-gray-600">
                            Total: {{ $page.props.reviews.length }} reviews
                        </div>

                        <Modal :show="showReviewDescription" @close="hideReviewDescription">
                            <div class="p-14">
                                {{ reviewDescriptionToDisplay }}
                            </div>
                        </Modal>

                        <ConfirmationModal :show="showReviewDelete" @close="hideReviewDelete">
                            <template v-slot:title>
                                Are you sure you want to delete "{{ reviewToDelete.title }}"?
                            </template>
                            <template v-slot:content>
                                Deleted data will be lost forever!
                            </template>
                            <template v-slot:footer>
                                <Link
                                    @click.prevent="hideReviewDelete"
                                    :href="route('reviews.delete', reviewToDelete.id)"
                                    method="delete"
                                    as="button"
                                    class="
                                        ml-2
                                        px-3
                                        py-2
                                        text-xs
                                        font-medium
                                        text-center text-white
                                        bg-red-700
                                        rounded-lg
                                        hover:bg-red-800
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-red-300
                                        dark:bg-red-600
                                        dark:hover:bg-red-700
                                        dark:focus:ring-red-800
                                    "
                                >
                                    Delete</Link
                                >
                                <button
                                    @click.prevent="hideReviewDelete"
                                    as="button"
                                    class="
                                        p-2
                                        text-xs
                                        font-medium
                                        text-center text-white
                                        bg-gray-700
                                        rounded-lg
                                        hover:bg-gray-800
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-gray-300
                                        dark:bg-gray-600
                                        dark:hover:bg-gray-700
                                        dark:focus:ring-gray-800
                                    "
                                >
                                    Cancel
                                </button>
                            </template>
                            
                        </ConfirmationModal>
                    </div>
                </div>
            </div>
        </div>
        
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";
import Modal from "@/Components/Modal.vue";
import { Link } from "@inertiajs/vue3";
import ConfirmationModal from '@/Components/ConfirmationModal.vue';

const showReviewDescription = ref(null);
const reviewDescriptionToDisplay = ref(false);

const showReviewDelete = ref(null);
const reviewTitleToDisplay = ref(false);
const reviewToDelete = ref(false);

const setStringFirstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const onClickReview = (review) => {
    showReviewDescription.value = true;
    reviewDescriptionToDisplay.value = review.description;
};

const onClickDelete = (review) => {
    showReviewDelete.value = true;
    reviewTitleToDisplay.value = review.title;
    reviewToDelete.value = review;
};

const hideReviewDelete = () => {
    showReviewDelete.value = false;
    reviewTitleToDisplay.value = ref(null);
};

const hideReviewDescription = () => {
    showReviewDescription.value = false;
};
</script>