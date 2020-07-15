@php
  $Posts = new WP_Query(array(
    'post_type' => 'post', // Default or custom post type
    'posts_per_page' => 10, // Max number of posts per page
    'category_name' => 'blog', // Your category (optional)
  ));
@endphp

@extends('layouts.front')

@section('content')
  {{--@include('partials.page-header')--}}
  @include('partials.hero-frontpage')

  @if (!have_posts())
    <div class="alert alert-warning">
      {{ __('Sorry, no results were found.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  @endif

  @while (have_posts()) @php the_post() @endphp
    @include('partials.content-'.get_post_type())
  @endwhile

  {!! get_the_posts_navigation() !!}
@endsection
