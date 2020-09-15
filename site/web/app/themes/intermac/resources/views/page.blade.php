@extends('layouts.app')

@section('content')
<div class="container">
  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
</div>
<svg id="hero_round" class="bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path id="lightgrey" fill-opacity="1" d="M0,256L120,245.3C240,235,480,213,720,213.3C960,213,1200,235,1320,245.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
@endsection
