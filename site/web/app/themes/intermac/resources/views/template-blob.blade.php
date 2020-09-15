{{--
  Template Name: Blob Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    <div class="blob">
      <div class="contact__hero__pastries pastries">
        <div class="pastries__inner parent">
          <div class="donut donut--1 child">
            <svg class="lblob opacity-90" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00b4d8" id="blob1" d="M38.4,-68C49.1,-60.3,56.6,-48.7,61.2,-36.7C65.9,-24.7,67.6,-12.3,68.6,0.6C69.6,13.5,69.9,27,65,38.6C60.2,50.3,50.3,60.1,38.6,65.6C26.9,71.1,13.4,72.4,-1.2,74.5C-15.9,76.6,-31.8,79.6,-44,74.4C-56.3,69.2,-64.9,55.8,-73.3,42C-81.8,28.3,-90.2,14.1,-91.5,-0.8C-92.8,-15.7,-87.1,-31.3,-77.4,-43C-67.8,-54.7,-54.2,-62.5,-40.6,-68.5C-27,-74.5,-13.5,-78.7,0.2,-79C13.9,-79.3,27.7,-75.6,38.4,-68Z" transform="translate(100 100)" />
              </svg>
          </div>
          <div class="donut donut--2 child">
            <svg class="lblob opacity-90" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00ddb9" id="blob" d="M38.9,-73.3C47.6,-62.2,50.1,-46.3,51.2,-33.3C52.3,-20.3,52,-10.1,56.6,2.7C61.3,15.5,70.9,31,66.8,38.7C62.6,46.4,44.7,46.4,31.3,55.1C17.8,63.9,8.9,81.4,-3.7,87.8C-16.3,94.2,-32.6,89.5,-39.7,77.1C-46.8,64.7,-44.7,44.6,-52.7,30.5C-60.7,16.4,-79,8.2,-84,-2.9C-89.1,-14,-81,-28,-72.5,-41.5C-64.1,-55,-55.4,-67.9,-43.3,-77C-31.1,-86.1,-15.6,-91.4,-0.3,-90.9C15,-90.5,30.1,-84.3,38.9,-73.3Z" transform="translate(100 100)" />
              </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      @include('partials.page-header')
      @include('partials.content-page-blob')
    </div>
  @endwhile
@endsection
