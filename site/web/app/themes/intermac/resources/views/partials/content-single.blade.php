<div class="container">
<article @php post_class() @endphp>
  <header>
    <div class="home__blogpost__pastries pastries">
         <div class="pastries__inner parent">
            <div class="donut donut--1">
               <svg class="lblob opacity-90" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#00b4d8" d="M38.1,-64.2C47.8,-53.1,52.8,-39.8,56.6,-27.1C60.5,-14.4,63.2,-2.5,65.2,12C67.2,26.5,68.5,43.5,61.4,55C54.2,66.6,38.7,72.7,23.7,74.2C8.6,75.6,-5.9,72.5,-20.6,68.8C-35.3,65.1,-50.2,60.8,-63.1,51.5C-75.9,42.3,-86.7,28.2,-87.8,13.3C-88.9,-1.6,-80.3,-17.2,-72.8,-33.2C-65.4,-49.2,-59,-65.5,-47.1,-75.6C-35.1,-85.6,-17.6,-89.3,-1.7,-86.7C14.2,-84.1,28.5,-75.3,38.1,-64.2Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div class="donut donut--2">
               <svg class="lblob opacity-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#00b4d8" d="M38.1,-64.2C47.8,-53.1,52.8,-39.8,56.6,-27.1C60.5,-14.4,63.2,-2.5,65.2,12C67.2,26.5,68.5,43.5,61.4,55C54.2,66.6,38.7,72.7,23.7,74.2C8.6,75.6,-5.9,72.5,-20.6,68.8C-35.3,65.1,-50.2,60.8,-63.1,51.5C-75.9,42.3,-86.7,28.2,-87.8,13.3C-88.9,-1.6,-80.3,-17.2,-72.8,-33.2C-65.4,-49.2,-59,-65.5,-47.1,-75.6C-35.1,-85.6,-17.6,-89.3,-1.7,-86.7C14.2,-84.1,28.5,-75.3,38.1,-64.2Z" transform="translate(100 100)" />
                </svg>
            </div>
         </div>
    </div>
    <figure class="image">{!! get_the_post_thumbnail() !!}</figure>
    <h1 class="entry-title">{!! get_the_title() !!}</h1>
    @include('partials/entry-meta')
  </header>
  <div class="entry-content">
    @php the_content() @endphp
  </div>
  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>
  @php comments_template('/partials/comments.blade.php') @endphp
</article>
</div>