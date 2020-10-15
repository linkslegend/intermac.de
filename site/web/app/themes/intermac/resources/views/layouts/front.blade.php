<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp>
    <div class="loading-container">
      <div class="loading-screen">
      </div>
    </div>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div id="scroll-container">
        <div class="wrap" role="document" data-barba="wrapper">
          <div class="content" data-barba="container" data-barba-namespace="{{$post->post_name}}">
            <main class="main">
              @yield('content')
            </main>
            @if (App\display_sidebar())
              <aside class="sidebar">
                @include('partials.sidebar')
              </aside>
            @endif
            @php do_action('get_footer') @endphp
            @include('partials.footer')
          </div>
      </div>
    </div>
    @php wp_footer() @endphp
    <div class="svg-wrapper"></div>
  </body>
</html>
