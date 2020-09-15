{{--
  Template Name: Services Template
--}}

@extends('layouts.front')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.hero-services')
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
@endsection
