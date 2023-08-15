<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\User;

class ReviewController extends Controller
{
    public function index(){
        $reviews = Review::get(['id', 'author_id', 'title', 'description', 'category', 'rating'])->map(function(Review $review){
            $review->author;
            return $review;
        });
        return inertia('Reviews/Index', compact('reviews'));
    }

    public function create(){
        return inertia('Reviews/Create');
    }

    public function store(Request $request){
        // dd($request);
        $validated_data = $request->validate([
            'title' => 'required|max:100|min:5',
            'author_id' => 'required|min:1',
            'category' => 'required|max:100|min:5',
            'description' => 'required',
            // 'rating' => 'required|gte:0|lte:10',
        ]);
        // dd($validated_data);

        try {
            $review = new Review;
            $review->title = $validated_data['title'];
            $review->author_id = $validated_data['author_id'];
            $review->category = $validated_data['category'];
            $review->description = $validated_data['description'];
            // $review->rating = $validated_data['rating'];
            $review->save();
        } catch (\Exception $e) {
            dd($e);
            return redirect()->route('error');
        }
        return redirect()->back();
    }

    public function edit(Review $review){
        $review->author;
        return inertia('Reviews/Edit', compact('review'));
    }

    public function update(Request $request, Review $review){
        $validated_data = $request->validate([
            'title' => 'required|max:100|min:5',
            'author_id' => 'required|min:1',
            'category' => 'required|max:100|min:5',
            'description' => 'required',
            'rating' => 'required|gte:0|lte:10',
        ]);

        try {
            $review->title = $validated_data['title'];
            $review->author_id = $validated_data['author_id'];
            $review->category = $validated_data['category'];
            $review->description = $validated_data['description'];
            $review->rating = $validated_data['rating'];
            $review->save();
        } catch (\Exception $e) {
            dd($e);
            return redirect()->route('error');
        }
        return redirect()->route('reviews.index');
    }

    public function delete(Review $review){
        $review->delete();
        return redirect()->route('reviews.index');
    }


}
