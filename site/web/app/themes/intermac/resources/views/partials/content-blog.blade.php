<div class="item col-md-10 col-12">
   <article @php post_class() @endphp>
    <div class="image" style="background:url('{{ get_the_post_thumbnail_url() }}')"></div>
    <header>
      <h2 class="entry-title col-md-9 col-12"><a href="{{ get_permalink() }}">{!! get_the_title() !!}</a></h2>
      {{--  @include('partials/entry-meta') --}}
    </header>
    <div class="entry-summary col-md-9 col-12">
      @php the_excerpt() @endphp
    </div>
    
    <a class="hero__cta | btn btn--darkblue" href="{{ get_permalink() }}">
      <span>Weiterlesen...</span>
   </a>

  </article>
 </div>